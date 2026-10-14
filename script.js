document.addEventListener('DOMContentLoaded', function() {

    const EMAIL_USER = 'alzayat.saleh';
    const EMAIL_DOMAIN = 'my.jcu.edu.au';

    // BibTeX Data
    const bibtexData = `
@article{saleh2026uniqat,
  title={UNIQAT: An open-source toolkit for reproducible image quality assessment in marine surveys},
  author={Saleh, Alzayat and Chennu, Arjun},
  journal={Methods in Ecology and Evolution},
  year={2026},
  publisher={Wiley},
  doi={10.1111/2041-210X.70431}
}

@inproceedings{saleh2026lessons,
  title={Lessons from Building a Semantic 3D Gaussian Splatting Pipeline for Multi-Year Coral Reef Monitoring},
  author={Saleh, Alzayat and Han, Kang and Ferrari, Renata},
  booktitle={RSS 2026 Workshop: Mapping the Reef: Underwater 3D Reconstruction for Coral Ecosystems},
  year={2026},
  url={https://alejandrofontan.github.io/Mapping-the-Reef-RSS26/assets/proceedings/2.pdf},
  award={Best Application Award}
}

@article{konovalov2018estimating,
title={Estimating mass of harvested Asian seabass Lates calcarifer from images},
author={Konovalov, Dmitry A and Saleh, Alzayat and Efremova, Dina B and Domingos, Jose A and Jerry, Dean R},
journal={World Journal of Engineering and Technology},
volume={6},
number={03},
pages={15},
year={2018},
publisher={Scientific Research Publishing},
doi={10.4236/wjet.2018.63B003}
}
@inproceedings{konovalov2019underwater,
title={Underwater fish detection with weak multi-domain supervision},
author={Konovalov, Dmitry A and Saleh, Alzayat and Bradley, Michael and Sankupellay, Mangalam and Marini, Simone and Sheaves, Marcus},
booktitle={2019 international joint conference on neural networks (ijcnn)},
pages={1--8},
year={2019},
organization={IEEE},
doi={10.1109/IJCNN.2019.8851907}
}
@inproceedings{konovalov2019automatic,
title={Automatic weight estimation of harvested fish from images},
author={Konovalov, Dmitry A and Saleh, Alzayat and Efremova, Dina B and Domingos, Jose A and Jerry, Dean R},
booktitle={2019 Digital image computing: Techniques and applications (DICTA)},
pages={1--7},
year={2019},
organization={IEEE},
doi={10.1109/DICTA47822.2019.8945971}
}
@article{saleh2020realistic,
title={A realistic fish-habitat dataset to evaluate algorithms for underwater visual analysis},
author={Saleh, Alzayat and Laradji, Issam H and Konovalov, Dmitry A and Bradley, Michael and Vazquez, David and Sheaves, Marcus},
journal={Scientific reports},
volume={10},
number={1},
pages={14671},
year={2020},
publisher={Nature Publishing Group UK London},
doi={10.1038/s41598-020-71639-x}
}
@article{laradji2021weakly,
title={Weakly supervised underwater fish segmentation using affinity LCFCN},
author={Laradji, Issam H and Saleh, Alzayat and Rodriguez, Pau and Nowrouzezahrai, Derek and Azghadi, Mostafa Rahimi and Vazquez, David},
journal={Scientific reports},
volume={11},
number={1},
pages={17379},
year={2021},
publisher={Nature Publishing Group UK London},
doi={10.1038/s41598-021-96610-2}
}
@article{saleh2021deep,
title={A deep learning localization method for measuring abdominal muscle dimensions in ultrasound images},
author={Saleh, Alzayat and Laradji, Issam H and Lammie, Corey and Vazquez, David and Flavell, Carol A and Azghadi, Mostafa Rahimi},
journal={IEEE Journal of Biomedical and Health Informatics},
volume={25},
number={10},
pages={3865--3873},
year={2021},
publisher={IEEE},
doi={10.1109/JBHI.2021.3085524}
}
@article{saleh2022computer,
title={Computer vision and deep learning for fish classification in underwater habitats: A survey},
author={Saleh, Alzayat and Sheaves, Marcus and Rahimi Azghadi, Mostafa},
journal={Fish and Fisheries},
volume={23},
number={4},
pages={977--999},
year={2022},
publisher={Wiley},
doi={10.1111/faf.12666}
}
@article{saleh2024applications,
title={Applications of deep learning in fish habitat monitoring: A tutorial and survey},
author={Saleh, Alzayat and Sheaves, Marcus and Jerry, Dean and Azghadi, Mostafa Rahimi},
journal={Expert Systems with Applications},
volume={238},
pages={121841},
year={2024},
publisher={Pergamon},
doi={10.1016/j.eswa.2023.121841}
}
@article{saleh2023mfld,
title={MFLD-net: a lightweight deep learning network for fish morphometry using landmark detection},
author={Saleh, Alzayat and Jones, David and Jerry, Dean and Azghadi, Mostafa Rahimi},
journal={Aquatic Ecology},
volume={57},
number={4},
pages={913--931},
year={2023},
publisher={Springer Netherlands Dordrecht},
doi={10.1007/s10452-023-10044-8}
}
@article{saleh2024prawn,
title={Prawn morphometrics and weight estimation from images using deep learning for landmark localization},
author={Saleh, Alzayat and Hasan, Md Mehedi and Raadsma, Herman W and Khatkar, Mehar S and Jerry, Dean R and Azghadi, Mostafa Rahimi},
journal={Aquacultural Engineering},
volume={106},
pages={102391},
year={2024},
publisher={Elsevier},
doi={10.1016/j.aquaeng.2024.102391}
}
@article{saleh2024weedclr,
title={WeedCLR: Weed contrastive learning through visual representations with class-optimized loss in long-tailed datasets},
author={Saleh, Alzayat and Olsen, Alex and Wood, Jake and Philippa, Bronson and Azghadi, Mostafa Rahimi},
journal={Computers and Electronics in Agriculture},
volume={227},
pages={109526},
year={2024},
publisher={Elsevier},
doi={10.1016/j.compag.2024.109526}
}
@article{saleh2024track,
title={How to track and segment fish without human annotations: a self-supervised deep learning approach},
author={Saleh, Alzayat and Sheaves, Marcus and Jerry, Dean and Rahimi Azghadi, Mostafa},
journal={Pattern Analysis and Applications},
volume={27},
number={1},
pages={4},
year={2024},
publisher={Springer London London},
doi={10.1007/s10044-024-01227-6}
}
@article{saleh2025semi,
title={Semi-supervised weed detection for rapid deployment and enhanced efficiency},
author={Saleh, Alzayat and Olsen, Alex and Wood, Jake and Philippa, Bronson and Azghadi, Mostafa Rahimi},
journal={Computers and Electronics in Agriculture},
volume={236},
pages={110410},
year={2025},
publisher={Elsevier},
doi={10.1016/j.compag.2025.110410}
}
@article{saleh2024learning,
title={Learning from the Giants: A Practical Approach to Underwater Depth and Surface Normals Estimation},
author={Saleh, Alzayat and Olsen, Melanie and Senadji, Bouchra and Azghadi, Mostafa Rahimi},
journal={arXiv preprint arXiv:2410.02072},
year={2024},
url={https://arxiv.org/abs/2410.02072}
}
@article{saleh2025adaptive,
title={Adaptive deep learning framework for robust unsupervised underwater image enhancement},
author={Saleh, Alzayat and Sheaves, Marcus and Jerry, Dean and Azghadi, Mostafa Rahimi},
journal={Expert Systems with Applications},
volume={268},
pages={126314},
year={2025},
publisher={Pergamon},
doi={10.1016/j.eswa.2024.126314}
}
@article{saleh2025overcoming,
title={Overcoming annotation bottlenecks in underwater fish segmentation: a robust self-supervised learning approach},
author={Saleh, Alzayat and Sheaves, Marcus and Jerry, Dean and Azghadi, Mostafa Rahimi},
journal={Signal, Image and Video Processing},
volume={19},
number={4},
pages={1--10},
year={2025},
publisher={Springer London},
doi={10.1007/s11760-025-03860-y}
}
@article{saleh2025fieldnet,
title={FieldNet: Efficient real-time shadow removal for enhanced vision in field robotics},
author={Saleh, Alzayat and Olsen, Alex and Wood, Jake and Philippa, Bronson and Azghadi, Mostafa Rahimi},
journal={Expert Systems with Applications},
volume={279},
pages={127442},
year={2025},
publisher={Pergamon},
doi={10.1016/j.eswa.2025.127442}
}
@article{azghadi2025precision,
title={Precision robotic spot-spraying: Reducing herbicide use and enhancing environmental outcomes in sugarcane},
author={Azghadi, Mostafa Rahimi and Olsen, Alex and Wood, Jake and Saleh, Alzayat and Calvert, Brendan and Granshaw, Terry and Fillols, Emilie and Philippa, Bronson},
journal={Computers and Electronics in Agriculture},
volume={235},
pages={110365},
year={2025},
publisher={Elsevier},
doi={10.1016/j.compag.2025.110365}
}

 

 
@article{saleh2025weed,
  title={Weed Detection in Challenging Field Conditions: A Semi-Supervised Framework for Overcoming Shadow Bias and Data Scarcity},
  author={Saleh, Alzayat and Hatano, Shunsuke and Rahimi Azghadi, Mostafa},
  journal={Computers},
  volume={15},
  number={3},
  pages={171},
  year={2026},
  publisher={MDPI}
}

@misc{saleh2026depth,
  title={Depth-Resolved Coral Reef Thermal Fields from Satellite SST and Sparse In-Situ Loggers Using Physics-Informed Neural Networks},
  author={Saleh, Alzayat and Rahimi Azghadi, Mostafa},
  year={2026},
  eprint={2604.13131},
  archivePrefix={arXiv},
  primaryClass={cs.LG},
  url={https://arxiv.org/abs/2604.13131}
}


@article{jahanbakht2026bulletin,
title = {Linking fish activity and turbidity through visual and sensor data fusion and deep learning},
journal = {Marine Pollution Bulletin},
volume = {223},
pages = {119070},
year = {2026},
issn = {0025-326X},
doi = {https://doi.org/10.1016/j.marpolbul.2025.119070},
url = {https://doi.org/10.1016/j.marpolbul.2025.119070},
author = {Mohammad Jahanbakht and Andrea Tiernan and Alzayat Saleh and Nichola Stokes and Odette Langham and Mostafa {Rahimi Azghadi} and Nathan J. Waltham},
keywords = {Turbid water monitoring, Fish detection, Turbidity estimation, Deep learning, Image and sensor fusion}
}


@article{haghighat2025multimodal,
title = {Multimodal language models in agriculture: A tutorial and survey},
journal = {Information Fusion},
volume = {129},
pages = {104042},
year = {2026},
issn = {1566-2535},
doi = {https://doi.org/10.1016/j.inffus.2025.104042},
url = {https://doi.org/10.1016/j.inffus.2025.104042},
author = {Mohammadreza Haghighat and Alzayat Saleh and Mostafa {Rahimi Azghadi}},
keywords = {Multimodal language models, Agriculture AI, Deep learning, Tutorial, Smart farming, Vision-Language models}


}

@inproceedings{haghighat2026multi,
  title={Multi-label Instance-level Generalised Visual Grounding in Agriculture},
  author={Haghighat, Mohammadreza and Saleh, Alzayat and Rahimi Azghadi, Mostafa},
  booktitle={European Conference on Computer Vision},
  pages={448--467},
  year={2026},
  organization={Springer}
}

@article{sankar2025artificial,
  title={Artificial intelligence-enabled aquacultural engineering systems: A design-oriented review of sensing, modelling, and deployment architectures},
  author={Sankar, Vinu and Saleh, Alzayat and Ehrampoosh, Armin and Arbon, Phoebe and Jerry, Dean R and Azghadi, Mostafa Rahimi},
  journal={Computers and Electronics in Agriculture},
  volume={256},
  pages={112353},
  year={2026},
  publisher={Elsevier}
}
    `;

    // Research topic for each paper (used by the topic filter). Anything not listed counts as marine.
    const TOPICS = {
        saleh2021deep: 'medical',
        saleh2024weedclr: 'agri', saleh2025semi: 'agri', saleh2025fieldnet: 'agri', azghadi2025precision: 'agri',
        saleh2025weed: 'agri', haghighat2025multimodal: 'agri', haghighat2026multi: 'agri'
    };
    const topicOf = key => TOPICS[key] || 'marine';

    // 1. PARSER
    function parseBibtex(str) {
        const entries = [];
        const rawEntries = str.split(/@(?=\w+{)/).slice(1);
        rawEntries.forEach(raw => {
            try {
                const typeEnd = raw.indexOf('{');
                const type = raw.substring(0, typeEnd).trim().toLowerCase();
                const body = raw.substring(typeEnd + 1, raw.lastIndexOf('}'));
                const keyEnd = body.indexOf(',');
                const key = body.substring(0, keyEnd).trim();
                const entry = { type, key, raw: '@' + raw.trim() };

                const regex = /(\w+)\s*=\s*(\{(?:[^{}]|\{[^{}]*\})*\}|"[^"]*"|\d+)/gs;
                let match;
                while ((match = regex.exec(body)) !== null) {
                    const field = match[1].toLowerCase();
                    let val = match[2];
                    if (val.startsWith('{') || val.startsWith('"')) val = val.slice(1, -1);
                    entry[field] = val.replace(/\s+/g, ' ').trim();
                }
                entries.push(entry);
            } catch (e) {
                console.log("Error parsing entry", e);
            }
        });
        return entries;
    }

    // 2. FORMATTING
    const clean = s => (s || '').replace(/[{}]/g, '').replace(/\\&/g, '&');
    const esc = s => clean(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    // "Saleh, Alzayat and Jerry, Dean R" -> "A. Saleh, D. R. Jerry" (self in bold)
    function formatAuthors(str) {
        return clean(str).split(/\s+and\s+/).map(name => {
            let [last, first] = name.includes(',') ? name.split(',').map(s => s.trim()) : [name.split(' ').pop(), name.split(' ').slice(0, -1).join(' ')];
            const initials = (first || '').split(/[\s-]+/).filter(Boolean).map(p => p[0].toUpperCase() + '.').join(' ');
            const out = esc((initials ? initials + ' ' : '') + last);
            return /^saleh$/i.test(last) && /^a/i.test(first || '') ? `<strong>${out}</strong>` : out;
        }).join(', ');
    }

    function kindOf(pub) {
        if (pub.type === 'inproceedings') return 'Conference';
        if (pub.type === 'misc' || /arxiv|preprint|ssrn|authorea/i.test(pub.journal || '')) return 'Preprint';
        return 'Journal';
    }

    function paperUrl(pub) {
        if (pub.doi) return pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`;
        if (pub.url) return pub.url;
        return `https://scholar.google.com/scholar?q=${encodeURIComponent(clean(pub.title))}`;
    }

    // 3. RENDER
    const list = document.getElementById('publications-list');
    const allPubs = parseBibtex(bibtexData)
        .map(p => ({ ...p, topic: topicOf(p.key), kind: kindOf(p), year: +p.year || 0 }))
        .sort((a, b) => b.year - a.year);
    window.pubData = allPubs; // read by tools/prerender.py

    function pubItem(pub) {
        const li = document.createElement('li');
        li.className = 'pub';
        const venue = clean(pub.journal || pub.booktitle || (pub.kind === 'Preprint' ? 'Preprint' : ''));
        const extra = [pub.volume && `vol. ${clean(pub.volume)}`, pub.pages && `pp. ${clean(pub.pages).replace(/-+/g, '–')}`].filter(Boolean).join(', ');
        const scholar = `https://scholar.google.com/scholar?q=${encodeURIComponent(clean(pub.title))}`;
        li.innerHTML = `
            <a class="thumb" href="${esc(paperUrl(pub))}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
                <img src="images/thumbs/${pub.key.toLowerCase()}.jpg" alt="" loading="lazy" onerror="this.remove()">
            </a>
            <div>
                <h3 class="pub-title"><a href="${esc(paperUrl(pub))}" target="_blank" rel="noopener">${esc(pub.title)}</a></h3>
                <p class="pub-authors">${formatAuthors(pub.author)}</p>
                <p class="pub-venue"><em>${esc(venue)}</em>${extra ? ', ' + esc(extra) : ''}${pub.kind !== 'Journal' ? `<span class="tag">${pub.kind}</span>` : ''}</p>
                ${pub.award ? `<p class="pub-award"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15.48 12.89 1.51 8.53a.5.5 0 0 1-.81.47l-3.58-2.69a1 1 0 0 0-1.2 0l-3.59 2.69a.5.5 0 0 1-.81-.47l1.51-8.53"/><circle cx="12" cy="8" r="6"/></svg>${esc(pub.award)}</p>` : ''}
                <div class="pub-actions">
                    ${pub.doi ? `<a href="${esc(paperUrl(pub))}" target="_blank" rel="noopener">DOI</a>` : (pub.url ? `<a href="${esc(pub.url)}" target="_blank" rel="noopener">Paper</a>` : '')}
                    ${pub.pdf ? `<a href="${esc(pub.pdf)}" target="_blank" rel="noopener">PDF</a>` : ''}
                    <a href="${scholar}" target="_blank" rel="noopener">Scholar</a>
                    <button type="button" class="bib-toggle" aria-expanded="false">BibTeX</button>
                    <button type="button" class="bib-copy">Copy BibTeX</button>
                </div>
                <div class="bib" hidden><pre></pre></div>
            </div>`;
        li.querySelector('pre').textContent = pub.raw;
        const box = li.querySelector('.bib');
        li.querySelector('.bib-toggle').addEventListener('click', e => {
            box.hidden = !box.hidden;
            e.currentTarget.setAttribute('aria-expanded', String(!box.hidden));
        });
        li.querySelector('.bib-copy').addEventListener('click', e => {
            const btn = e.currentTarget;
            const done = () => { btn.textContent = 'Copied'; setTimeout(() => btn.textContent = 'Copy BibTeX', 1600); };
            navigator.clipboard.writeText(pub.raw).then(done, () => { box.hidden = false; getSelection().selectAllChildren(box.querySelector('pre')); });
        });
        return li;
    }

    let topic = 'all';
    const search = document.getElementById('pub-search');

    function render() {
        const q = search.value.trim().toLowerCase();
        const shown = allPubs.filter(p => (topic === 'all' || p.topic === topic) &&
            (!q || clean([p.title, p.author, p.journal, p.booktitle, p.year].join(' ')).toLowerCase().includes(q)));
        list.innerHTML = '';
        if (!shown.length) { list.innerHTML = '<p class="empty">No publications match.</p>'; return; }
        const years = [...new Set(shown.map(p => p.year))];
        years.forEach(y => {
            const group = document.createElement('div');
            group.className = 'year';
            group.innerHTML = `<div class="year-label">${y}</div><ol class="year-list"></ol>`;
            const ol = group.querySelector('ol');
            shown.filter(p => p.year === y).forEach(p => ol.appendChild(pubItem(p)));
            list.appendChild(group);
        });
    }

    function setTopic(t) {
        topic = t;
        document.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-on', c.dataset.topic === t));
        render();
    }

    document.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => setTopic(c.dataset.topic)));
    document.querySelectorAll('button.area').forEach(a => a.addEventListener('click', () => {
        setTopic(a.dataset.topic);
        document.getElementById('publications').scrollIntoView();
    }));
    search.addEventListener('input', render);

    const counts = { journal: 0, conference: 0 };
    allPubs.forEach(p => { if (p.kind === 'Journal') counts.journal++; if (p.kind === 'Conference') counts.conference++; });
    document.getElementById('pub-summary').innerHTML =
        `${allPubs.length} papers, including ${counts.journal} journal articles. Full record on <a href="https://scholar.google.com/citations?user=OaFJvaIAAAAJ" target="_blank" rel="noopener">Google Scholar</a>.`;
    document.querySelectorAll('[data-count]').forEach(el => {
        const n = allPubs.filter(p => p.topic === el.dataset.count).length;
        el.textContent = `${n} paper${n === 1 ? '' : 's'} →`;
    });
    render();

    // 4. THEME
    const root = document.documentElement;
    document.getElementById('themeToggle').addEventListener('click', () => {
        const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
        root.dataset.theme = dark ? 'light' : 'dark';
        try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    });

    // 5. EMAIL (assembled on click so scrapers don't see it)
    document.getElementById('email-btn').addEventListener('click', function() {
        const addr = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
        const out = document.getElementById('email-out');
        out.innerHTML = `<a href="mailto:${addr}">${addr}</a>`;
        out.hidden = false;
        this.hidden = true;
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
