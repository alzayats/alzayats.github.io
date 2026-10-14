"""Write the publication list into index.html so search engines and AI crawlers
see it without running JavaScript. Also writes llms.txt, sitemap.xml and robots.txt.

Run after editing the BibTeX in script.js:
    python tools/prerender.py
Needs Python Playwright (pip install playwright && playwright install chromium).
"""

import functools
import http.server
import json
import re
import threading
from datetime import date
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://alzayats.github.io/"
PERSON_ID = "https://alzayat.com/#person"  # same person as on alzayat.com


def clean(s):
    return re.sub(r"\s+", " ", (s or "").replace("{", "").replace("}", "").replace("\\&", "&")).strip()


def full_names(author):
    out = []
    for n in clean(author).split(" and "):
        if "," in n:
            last, first = [x.strip() for x in n.split(",", 1)]
            n = f"{first} {last}"
        out.append(n.strip())
    return out


def link(p):
    if p.get("doi"):
        return p["doi"] if p["doi"].startswith("http") else f"https://doi.org/{p['doi']}"
    return p.get("url", "")


def fill(html, name, value):
    pattern = re.compile(rf"<!-- {name} -->.*?<!-- /{name} -->", re.S)
    assert pattern.search(html), f"marker {name} missing"
    return pattern.sub(lambda m: f"<!-- {name} -->{value}<!-- /{name} -->", html)


def snapshot():
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    try:
        with sync_playwright() as pw:
            page = pw.chromium.launch().new_page()
            page.goto(f"http://127.0.0.1:{server.server_port}/index.html", wait_until="networkidle")
            data = page.evaluate("""() => ({
                pubs: window.pubData,
                list: document.getElementById('publications-list').innerHTML,
                summary: document.getElementById('pub-summary').innerHTML,
                counts: Object.fromEntries([...document.querySelectorAll('[data-count]')].map(e => [e.dataset.count, e.textContent])),
            })""")
    finally:
        server.shutdown()
    return data


def main():
    d = snapshot()
    pubs = d["pubs"]

    articles = []
    for p in pubs:
        a = {
            "@type": "ScholarlyArticle",
            "headline": clean(p["title"]),
            "datePublished": str(p["year"]),
            "author": [{"@id": PERSON_ID} if n.lower() == "alzayat saleh" else {"@type": "Person", "name": n} for n in full_names(p["author"])],
            "isPartOf": {"@type": "Periodical", "name": clean(p.get("journal") or p.get("booktitle") or "Preprint")},
        }
        if link(p):
            a["url"] = link(p)
        if p.get("award"):
            a["award"] = clean(p["award"])
        articles.append(a)
    person = {
        "@type": "Person",
        "@id": PERSON_ID,
        "name": "Alzayat Saleh",
        "url": "https://alzayat.com/",
        "image": SITE + "images/profile.jpg",
        "jobTitle": "Research Fellow",
        "worksFor": {"@type": "CollegeOrUniversity", "name": "James Cook University"},
        "alumniOf": {"@type": "CollegeOrUniversity", "name": "James Cook University"},
        "sameAs": [
            SITE,
            "https://scholar.google.com/citations?user=OaFJvaIAAAAJ",
            "https://orcid.org/0000-0001-6973-019X",
            "https://github.com/alzayats",
            "https://linkedin.com/in/alzayat",
            "https://x.com/alzayats",
        ],
    }
    page = {"@type": "ProfilePage", "@id": SITE + "#page", "url": SITE, "name": "Alzayat Saleh: publications", "mainEntity": {"@id": PERSON_ID}, "hasPart": articles}
    jsonld = json.dumps({"@context": "https://schema.org", "@graph": [page, person]}, ensure_ascii=False).replace("<", "\\u003c")

    index = ROOT / "index.html"
    html = index.read_text()
    html = fill(html, "JSONLD", f'<script type="application/ld+json">{jsonld}</script>')
    html = fill(html, "SUMMARY", d["summary"])
    html = fill(html, "PUBS", d["list"])
    for topic, text in d["counts"].items():
        html = fill(html, f"COUNT-{topic}", text)
    index.write_text(html)

    lines = []
    for p in pubs:
        venue = clean(p.get("journal") or p.get("booktitle") or "Preprint")
        award = f" {clean(p['award'])}." if p.get("award") else ""
        lines.append(f"- {clean(p['title'])}. {', '.join(full_names(p['author']))}. {venue}, {p['year']}.{award} {link(p)}".rstrip())
    (ROOT / "llms.txt").write_text(f"""# Alzayat Saleh: publications

> Full publication list of Alzayat Saleh, Research Fellow in computer vision and deep learning at James Cook University (AIMS@JCU), Australia. PhD (2023) and MPhil (2020), James Cook University. Research: computer vision for marine ecology, aquaculture, precision agriculture and medical imaging, often learning from few labels.

## Links
- [Personal website](https://alzayat.com/)
- [Ask my papers: AI assistant with page citations](https://papers.alzayat.com/)
- [Google Scholar](https://scholar.google.com/citations?user=OaFJvaIAAAAJ)
- [ORCID](https://orcid.org/0000-0001-6973-019X)
- [GitHub](https://github.com/alzayats)

## Papers ({len(pubs)}, newest first)
""" + "\n".join(lines) + "\n")

    (ROOT / "sitemap.xml").write_text(f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>{SITE}</loc><lastmod>{date.today().isoformat()}</lastmod></url>
</urlset>
""")
    (ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}sitemap.xml\n")
    print(f"Prerendered {len(pubs)} papers")


if __name__ == "__main__":
    main()
