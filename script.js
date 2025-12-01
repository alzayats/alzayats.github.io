document.addEventListener('DOMContentLoaded', function() {

    const EMAIL_USER = 'alzayat.saleh'; 
    const EMAIL_DOMAIN = 'my.jcu.edu.au'; 
    
    // BibTeX Data
    const bibtexData = `
@article{konovalov2018estimating,
title={Estimating mass of harvested Asian seabass Lates calcarifer from images},
author={Konovalov, Dmitry A and Saleh, Alzayat and Efremova, Dina B and Domingos, Jose A and Jerry, Dean R},
journal={World Journal of Engineering and Technology},
volume={6},
number={03},
pages={15},
year={2018},
publisher={Scientific Research Publishing}
}
@inproceedings{konovalov2019underwater,
title={Underwater fish detection with weak multi-domain supervision},
author={Konovalov, Dmitry A and Saleh, Alzayat and Bradley, Michael and Sankupellay, Mangalam and Marini, Simone and Sheaves, Marcus},
booktitle={2019 international joint conference on neural networks (ijcnn)},
pages={1--8},
year={2019},
organization={IEEE}
}
@inproceedings{konovalov2019automatic,
title={Automatic weight estimation of harvested fish from images},
author={Konovalov, Dmitry A and Saleh, Alzayat and Efremova, Dina B and Domingos, Jose A and Jerry, Dean R},
booktitle={2019 Digital image computing: Techniques and applications (DICTA)},
pages={1--7},
year={2019},
organization={IEEE}
}
@article{saleh2020realistic,
title={A realistic fish-habitat dataset to evaluate algorithms for underwater visual analysis},
author={Saleh, Alzayat and Laradji, Issam H and Konovalov, Dmitry A and Bradley, Michael and Vazquez, David and Sheaves, Marcus},
journal={Scientific reports},
volume={10},
number={1},
pages={14671},
year={2020},
publisher={Nature Publishing Group UK London}
}
@article{laradji2021weakly,
title={Weakly supervised underwater fish segmentation using affinity LCFCN},
author={Laradji, Issam H and Saleh, Alzayat and Rodriguez, Pau and Nowrouzezahrai, Derek and Azghadi, Mostafa Rahimi and Vazquez, David},
journal={Scientific reports},
volume={11},
number={1},
pages={17379},
year={2021},
publisher={Nature Publishing Group UK London}
}
@article{saleh2021deep,
title={A deep learning localization method for measuring abdominal muscle dimensions in ultrasound images},
author={Saleh, Alzayat and Laradji, Issam H and Lammie, Corey and Vazquez, David and Flavell, Carol A and Azghadi, Mostafa Rahimi},
journal={IEEE Journal of Biomedical and Health Informatics},
volume={25},
number={10},
pages={3865--3873},
year={2021},
publisher={IEEE}
}
@article{saleh2022computer,
title={Computer vision and deep learning for fish classification in underwater habitats: A survey},
author={Saleh, Alzayat and Sheaves, Marcus and Rahimi Azghadi, Mostafa},
journal={Fish and Fisheries},
volume={23},
number={4},
pages={977--999},
year={2022},
publisher={Wiley}
}
@article{saleh2024applications,
title={Applications of deep learning in fish habitat monitoring: A tutorial and survey},
author={Saleh, Alzayat and Sheaves, Marcus and Jerry, Dean and Azghadi, Mostafa Rahimi},
journal={Expert Systems with Applications},
volume={238},
pages={121841},
year={2024},
publisher={Pergamon}
}
@article{saleh2023mfld,
title={MFLD-net: a lightweight deep learning network for fish morphometry using landmark detection},
author={Saleh, Alzayat and Jones, David and Jerry, Dean and Azghadi, Mostafa Rahimi},
journal={Aquatic Ecology},
volume={57},
number={4},
pages={913--931},
year={2023},
publisher={Springer Netherlands Dordrecht}
}
@article{saleh2024prawn,
title={Prawn morphometrics and weight estimation from images using deep learning for landmark localization},
author={Saleh, Alzayat and Hasan, Md Mehedi and Raadsma, Herman W and Khatkar, Mehar S and Jerry, Dean R and Azghadi, Mostafa Rahimi},
journal={Aquacultural Engineering},
volume={106},
pages={102391},
year={2024},
publisher={Elsevier}
}
@article{saleh2024weedclr,
title={WeedCLR: Weed contrastive learning through visual representations with class-optimized loss in long-tailed datasets},
author={Saleh, Alzayat and Olsen, Alex and Wood, Jake and Philippa, Bronson and Azghadi, Mostafa Rahimi},
journal={Computers and Electronics in Agriculture},
volume={227},
pages={109526},
year={2024},
publisher={Elsevier}
}
@article{saleh2024track,
title={How to track and segment fish without human annotations: a self-supervised deep learning approach},
author={Saleh, Alzayat and Sheaves, Marcus and Jerry, Dean and Rahimi Azghadi, Mostafa},
journal={Pattern Analysis and Applications},
volume={27},
number={1},
pages={4},
year={2024},
publisher={Springer London London}
}
@article{saleh2025semi,
title={Semi-supervised weed detection for rapid deployment and enhanced efficiency},
author={Saleh, Alzayat and Olsen, Alex and Wood, Jake and Philippa, Bronson and Azghadi, Mostafa Rahimi},
journal={Computers and Electronics in Agriculture},
volume={236},
pages={110410},
year={2025},
publisher={Elsevier}
}
@article{saleh4899070ecological,
title={Ecological Monitoring with Self-Supervised Learning: Fish Segmentation in Underwater Habitats},
author={Saleh, Alzayat and Sheaves, Marcus and Jerry, Dean and Rahimi Azghadi, Mostafa},
journal={Available at SSRN 4899070},
year={2024} 
}
@article{saleh2024learning,
title={Learning from the Giants: A Practical Approach to Underwater Depth and Surface Normals Estimation},
author={Saleh, Alzayat and Olsen, Melanie and Senadji, Bouchra and Azghadi, Mostafa Rahimi},
journal={arXiv preprint arXiv:2410.02072},
year={2024}
}
@article{saleh2025adaptive,
title={Adaptive deep learning framework for robust unsupervised underwater image enhancement},
author={Saleh, Alzayat and Sheaves, Marcus and Jerry, Dean and Azghadi, Mostafa Rahimi},
journal={Expert Systems with Applications},
volume={268},
pages={126314},
year={2025},
publisher={Pergamon}
}
@article{saleh2025overcoming,
title={Overcoming annotation bottlenecks in underwater fish segmentation: a robust self-supervised learning approach},
author={Saleh, Alzayat and Sheaves, Marcus and Jerry, Dean and Azghadi, Mostafa Rahimi},
journal={Signal, Image and Video Processing},
volume={19},
number={4},
pages={1--10},
year={2025},
publisher={Springer London}
}
@misc{konovalov2019automatic_misc,
title={Automatic weight estimation of harvested fish from images. In 2019 Digital Image Computing: Techniques and Applications (DICTA)(pp. 1--7)},
author={Konovalov, D.A. and Saleh, A. and Efremova, D.B. and Domingos, J.A. and Jerry, D.R.},
year={2019},
publisher={IEEE}
}
@article{saleh2025fieldnet,
title={FieldNet: Efficient real-time shadow removal for enhanced vision in field robotics},
author={Saleh, Alzayat and Olsen, Alex and Wood, Jake and Philippa, Bronson and Azghadi, Mostafa Rahimi},
journal={Expert Systems with Applications},
volume={279},
pages={127442},
year={2025},
publisher={Pergamon}
}
@article{azghadi2025precision,
title={Precision robotic spot-spraying: Reducing herbicide use and enhancing environmental outcomes in sugarcane},
author={Azghadi, Mostafa Rahimi and Olsen, Alex and Wood, Jake and Saleh, Alzayat and Calvert, Brendan and Granshaw, Terry and Fillols, Emilie and Philippa, Bronson},
journal={Computers and Electronics in Agriculture},
volume={235},
pages={110365},
year={2025},
publisher={Elsevier}
}

@article{haghighat2025multimodal,
  title={Multimodal Language Models in Agriculture: A Tutorial and Survey},
  author={Haghighat, Mohammadreza and Saleh, Alzayat and Azghadi, Mostafa Rahimi},
  journal={Authorea Preprints},
  year={2025},
  publisher={Authorea}
}

@article{saleh2025weed,
  title={Weed Detection in Challenging Field Conditions: A Semi-Supervised Framework for Overcoming Shadow Bias and Data Scarcity},
  author={Saleh, Alzayat and Hatano, Shunsuke and Azghadi, Mostafa Rahimi},
  journal={arXiv preprint arXiv:2508.19511},
  year={2025}
}

@article{sankar2025artificial,
  title={Artificial Intelligence in Aquaculture: Current Applications and Future Directions},
  author={Sankar, Vinu and Saleh, Alzayat and Ehrampoosh, Armin and Arbon, Phoebe and Jerry, Dean R and Azghadi, Mostafa Rahimi},
  journal={Authorea Preprints},
  year={2025},
  publisher={Authorea}
}
@article{jahanbakht2026bulletin,
title = {Linking fish activity and turbidity through visual and sensor data fusion and deep learning},
journal = {Marine Pollution Bulletin},
volume = {223},
pages = {119070},
year = {2026},
issn = {0025-326X},
doi = {https://doi.org/10.1016/j.marpolbul.2025.119070},
url = {https://www.sciencedirect.com/science/article/pii/S0025326X25015462},
author = {Mohammad Jahanbakht and Andrea Tiernan and Alzayat Saleh and Nichola Stokes and Odette Langham and Mostafa {Rahimi Azghadi} and Nathan J. Waltham},
keywords = {Turbid water monitoring, Fish detection, Turbidity estimation, Deep learning, Image and sensor fusion}
}

    `;

    // 1. GENERATIVE ART FALLBACK
    function generatePattern(string) {
        let hash = 0;
        for (let i = 0; i < string.length; i++) hash = string.charCodeAt(i) + ((hash << 5) - hash);
        const h1 = Math.abs(hash % 360);
        const h2 = (h1 + 40) % 360;
        return `
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
                <linearGradient id="g${hash}" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stop-color="hsl(${h1}, 70%, 60%)" />
                    <stop offset="100%" stop-color="hsl(${h2}, 70%, 40%)" />
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#g${hash})" />
            <circle cx="${Math.abs(hash)%100}" cy="${Math.abs(hash*2)%100}" r="40" fill="white" fill-opacity="0.1" />
        </svg>`;
    }

    // 2. PARSER
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
                
                const regex = /(\w+)\s*=\s*(\{.*?\}|"[^"]*"|\d+)/gs;
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

    // 3. IMAGE LOADER
    function loadImage(container, key) {
        // Keeps hyphens and underscores, lowercase
        const cleanKey = key.toLowerCase().replace(/[.:\s]/g, '_'); 
        const extensions = ['png', 'jpg', 'jpeg', 'webp'];
        let idx = 0;

        function tryNext() {
            if (idx >= extensions.length) return; 
            const img = new Image();
            img.src = `images/${cleanKey}.${extensions[idx]}`;
            img.className = "absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500";
            img.onload = () => {
                container.innerHTML = ''; // Clear SVG
                container.appendChild(img);
                setTimeout(() => img.classList.remove('opacity-0'), 10);
            };
            img.onerror = () => {
                idx++;
                tryNext();
            };
        }
        tryNext();
    }

    // 4. RENDER
    const grid = document.getElementById('publications-grid');
    function render(list) {
        if (!grid) return;
        grid.innerHTML = '';
        list.sort((a, b) => (b.year || 0) - (a.year || 0));

        list.forEach((pub, index) => {
            const isFeatured = index === 0;
            const card = document.createElement('div');
            card.className = `pub-card relative flex flex-col bg-white dark:bg-card border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden ${isFeatured ? 'md:col-span-2' : ''}`;
            
            // Image
            const imgDiv = document.createElement('div');
            imgDiv.className = `w-full ${isFeatured ? 'h-64' : 'h-48'} bg-gray-100 dark:bg-[#1a1a1a] relative overflow-hidden`;
            imgDiv.innerHTML = generatePattern(pub.title);
            if (pub.key) loadImage(imgDiv, pub.key);

            // Content
            const body = document.createElement('div');
            body.className = "p-6 flex flex-col flex-1";
            
            const badge = document.createElement('span');
            badge.className = "text-xs font-bold uppercase tracking-wider text-primary mb-2";
            badge.textContent = pub.type === 'inproceedings' ? 'Conference' : 'Journal';

            const title = document.createElement('h3');
            title.className = `font-display font-bold text-slate-900 dark:text-white mb-3 ${isFeatured ? 'text-2xl' : 'text-lg'} leading-tight`;
            title.textContent = pub.title;

            const authors = document.createElement('p');
            authors.className = "text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2";
            if (pub.author) {
                // Safe replace
                const me = /(Alzayat Saleh|Saleh, Alzayat|Saleh, A\.)/gi;
                authors.innerHTML = pub.author.replace(me, '<strong class="text-slate-900 dark:text-white">$1</strong>');
            }

            const footer = document.createElement('div');
            footer.className = "mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between";
            
            const venue = document.createElement('span');
            venue.className = "text-xs font-mono text-gray-400 truncate max-w-[60%]";
            venue.textContent = `${pub.year} | ${pub.journal || pub.booktitle || 'Preprint'}`;

            const links = document.createElement('div');
            links.className = "flex gap-2";
            
            // Helper: Create Link
            const makeLink = (icon, href, tooltip) => {
                const a = document.createElement('a');
                a.href = href; a.target = "_blank";
                a.className = "text-gray-400 hover:text-primary transition-colors";
                a.innerHTML = `<i class="${icon}"></i>`;
                a.title = tooltip; // Add tooltip on hover
                return a;
            };

            // Helper: Create Button (for BibTeX)
            const makeBtn = (icon, fn, tooltip) => {
                const b = document.createElement('button');
                b.className = "text-gray-400 hover:text-primary transition-colors";
                b.innerHTML = `<i class="${icon}"></i>`;
                b.title = tooltip;
                b.onclick = fn;
                return b;
            };

            // 1. Google Scholar Link (NEW: Added this!)
            if (pub.title) {
                links.appendChild(makeLink(
                    'fas fa-graduation-cap', 
                    `https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`,
                    'View on Google Scholar'
                ));
            }

            // 2. DOI
            if (pub.doi) links.appendChild(makeLink('fas fa-link', `https://doi.org/${pub.doi}`, 'DOI'));
            
            // 3. PDF
            if (pub.pdf) links.appendChild(makeLink('fas fa-file-pdf', pub.pdf, 'PDF'));
            
            // 4. BibTeX Button
            links.appendChild(makeBtn('fas fa-quote-right', () => openModal(pub.raw), 'Copy BibTeX'));

            footer.appendChild(venue);
            footer.appendChild(links);
            body.appendChild(badge);
            body.appendChild(title);
            body.appendChild(authors);
            body.appendChild(footer);
            card.appendChild(imgDiv);
            card.appendChild(body);
            grid.appendChild(card);
        });
    }

    // 5. INTERACTION
    // Theme
    const html = document.documentElement;
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }
    document.getElementById('themeToggle').addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    // Email
    document.getElementById('email-btn').addEventListener('click', function() {
        const addr = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
        this.innerHTML = `<i class="fas fa-envelope-open mr-2"></i> ${addr}`;
        window.location.href = `mailto:${addr}`;
    });

    // Modal
    const modal = document.getElementById('bibtex-modal');
    const modalText = document.getElementById('bibtex-text');
    window.openModal = function(text) {
        modalText.textContent = text;
        modal.classList.remove('hidden');
    };
    document.getElementById('close-modal').addEventListener('click', () => modal.classList.add('hidden'));
    document.getElementById('copy-btn').addEventListener('click', function() {
        navigator.clipboard.writeText(modalText.textContent);
        const original = this.textContent;
        this.textContent = "Copied!";
        setTimeout(() => this.textContent = original, 2000);
    });

    // Filter
    const allPubs = parseBibtex(bibtexData);
    render(allPubs);
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('bg-slate-900', 'text-white', 'dark:bg-white', 'dark:text-black');
                b.classList.add('bg-transparent', 'border');
            });
            btn.classList.remove('bg-transparent', 'border');
            btn.classList.add('bg-slate-900', 'text-white', 'dark:bg-white', 'dark:text-black');
            
            const filter = btn.dataset.filter;
            if (filter === 'all') render(allPubs);
            else render(allPubs.filter(p => p.type === filter));
        });
    });

    // Animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    });
    document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));
    
    // Year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

});