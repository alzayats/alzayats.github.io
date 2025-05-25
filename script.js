document.addEventListener('DOMContentLoaded', function() {

	// --- BIBTEX DATA ---
	// To update your publications, modify the string below.
	// Ensure each entry starts with @ and ends with a closing brace }.
	// Commas separate fields within an entry.
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
    `;
	// --- END OF BIBTEX DATA ---

	// --- DOM Elements ---
	const publicationsListElement = document.getElementById('publications-list');
	const yearSpan = document.getElementById('current-year');
	const backToTopBtn = document.getElementById('backToTopBtn');
	const darkModeToggle = document.getElementById('darkModeToggle');
	const body = document.body;


	// --- BibTeX Parsing and Rendering (Keep your existing functions) ---
	function parseBibtex(bibtexString) {
		// ... (your existing parseBibtex function)
		// Make sure your parser correctly extracts the 'key' field (e.g., konovalov2018estimating)
		// from entries like @article{konovalov2018estimating, ...}
		// The previous version of the parser did this by looking at the string between @type{ and the first comma.
		// If your keys have special characters, ensure the parser and image filename generation handle them.
		// A simple way to get the key is:
		// const keyAndContent = entryText.substring(firstBraceIndex + 1).trim();
		// const firstCommaIndex = keyAndContent.indexOf(',');
		// entry.key = keyAndContent.substring(0, firstCommaIndex).trim();
		// This was already in the previous version.

		const entries = [];
		const bibtexEntries = bibtexString.trim().split('@').slice(1);

		for (const entryText of bibtexEntries) {
			if (!entryText.trim()) continue;

			const entry = {};
			const firstBraceIndex = entryText.indexOf('{');
			if (firstBraceIndex === -1) continue;

			const typeAndKey = entryText.substring(0, firstBraceIndex).trim();
			const typeMatch = typeAndKey.match(/^([a-zA-Z]+)/);
			entry.type = typeMatch ? typeMatch[1].toLowerCase() : 'misc';

			const keyAndContent = entryText.substring(firstBraceIndex + 1).trim();
			const firstCommaIndex = keyAndContent.indexOf(',');
			if (firstCommaIndex === -1) continue;

			// The key is the string before the first comma after the opening brace
			let bibKey = keyAndContent.substring(0, firstCommaIndex).trim();
			entry.key = bibKey; // Store the raw key

			const content = keyAndContent.substring(firstCommaIndex + 1, keyAndContent.lastIndexOf('}')).trim();

			let currentPos = 0;
			let braceLevel = 0;
			const rawFields = [];

			for (let i = 0; i < content.length; i++) {
				const char = content[i];
				if (char === '{') braceLevel++;
				else if (char === '}') braceLevel--;
				else if (char === ',' && braceLevel === 0) {
					rawFields.push(content.substring(currentPos, i).trim());
					currentPos = i + 1;
				}
			}
			rawFields.push(content.substring(currentPos).trim());

			for (const rawField of rawFields) {
				if (!rawField) continue;
				const eqIndex = rawField.indexOf('=');
				if (eqIndex > 0) {
					const key = rawField.substring(0, eqIndex).trim().toLowerCase();
					let value = rawField.substring(eqIndex + 1).trim();

					if (value.startsWith('{') && value.endsWith('}')) {
						value = value.substring(1, value.length - 1);
					} else if (value.startsWith('"') && value.endsWith('"')) {
						value = value.substring(1, value.length - 1);
					}
					entry[key] = value.replace(/[\n\r]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
				}
			}
			entries.push(entry);
		}
		return entries;
	}

	function highlightAuthor(authorsString) {
		// ... (your existing highlightAuthor function)
		if (!authorsString) return '';
		const mainAuthorPattern = /(Alzayat Saleh|Saleh, Alzayat|Saleh, A\.)/gi;
		return authorsString.replace(mainAuthorPattern, '<strong>$1</strong>');
	}

	function renderPublications(publications) {
		// ... (your existing renderPublications function with the image loading logic)
		// Ensure it uses the 'key' field from the parsed BibTeX for image filenames.
		// For example: const imgFilename = pub.key ? `images/${pub.key.toLowerCase().replace(/[.:]/g, '_')}.png` : null;
		const listElement = publicationsListElement; // Use the cached element
		if (!listElement) return;
		listElement.innerHTML = ''; // Clear previous publications if any

		publications.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));

		publications.forEach(pub => {
			const item = document.createElement('div');
			item.className = 'publication-item';

			const imageArea = document.createElement('div');
			imageArea.className = 'publication-image-area';

			const rawKey = pub.key || ''; // Get the raw key
			const sanitizedKey = rawKey.toLowerCase().replace(/[.:\s]/g, '_'); // Sanitize for filename
			const baseImgFilename = sanitizedKey ? `images/${sanitizedKey}` : null;

			const placeholder = document.createElement('div');
			placeholder.className = 'publication-image-placeholder';
			const imgSuggestion = baseImgFilename ? `${sanitizedKey}.png` : 'paper_image.png';
			placeholder.innerHTML = `<span>Image: <br><code>${imgSuggestion}</code></span><span>(e.g., 200x120px)</span>`;

			if (baseImgFilename) {
				const imgElement = document.createElement('img');
				imgElement.alt = `Visual for ${pub.title || 'publication'}`;
				// Styles are now in CSS, but you can set defaults here if needed
				// imgElement.style.width = "100%";
				// imgElement.style.height = "120px";
				// imgElement.style.objectFit = "cover";
				// imgElement.style.borderRadius = "6px";

				let imageLoaded = false;
				const extensions = ['png', 'jpg', 'jpeg', 'gif', 'webp']; // Common image extensions

				const attemptLoad = (index) => {
					if (index >= extensions.length) {
						if (!imageLoaded) imageArea.appendChild(placeholder); // All attempts failed
						return;
					}
					const ext = extensions[index];
					imgElement.src = `${baseImgFilename}.${ext}`;
					imgElement.onload = () => {
						if (!imageLoaded) { // Ensure only one image is appended
							imageArea.innerHTML = ''; // Clear previous attempts or placeholder
							imageArea.appendChild(imgElement);
							imageLoaded = true;
						}
					};
					imgElement.onerror = () => {
						attemptLoad(index + 1); // Try next extension
					};
				};
				attemptLoad(0); // Start with the first extension (png)

			} else {
				imageArea.appendChild(placeholder);
			}

			const content = document.createElement('div');
			content.className = 'publication-content';

			const title = document.createElement('h3');
			title.className = 'publication-title';
			title.textContent = pub.title || 'Untitled Publication';
			content.appendChild(title);

			const authors = document.createElement('p');
			authors.className = 'publication-authors';
			authors.innerHTML = `<strong>Authors:</strong> ${highlightAuthor(pub.author || 'N/A')}`;
			content.appendChild(authors);

			const venue = document.createElement('p');
			venue.className = 'publication-venue';
			let venueText = `<em>${pub.journal || pub.booktitle || pub.school || 'N/A'}</em>`;

			let detailsArray = [];
			if (pub.year) detailsArray.push(pub.year);
			if (pub.volume) detailsArray.push(`Vol. ${pub.volume}`);
			if (pub.number) detailsArray.push(`No. ${pub.number}`);
			if (pub.pages) detailsArray.push(`pp. ${pub.pages}`);
			if (pub.publisher && pub.publisher.toLowerCase() !== (pub.journal || pub.booktitle || '').toLowerCase()) {
				if (!(pub.organization && pub.publisher.toLowerCase() === pub.organization.toLowerCase())) {
					detailsArray.push(pub.publisher);
				}
			}
			if (pub.organization && pub.organization.toLowerCase() !== pub.publisher?.toLowerCase()) {
				detailsArray.push(pub.organization);
			}

			if (detailsArray.length > 0) {
				venueText += `, <span class="publication-details">${detailsArray.join(', ')}</span>`;
			}
			venue.innerHTML = venueText;
			content.appendChild(venue);

			const links = document.createElement('div');
			links.className = 'publication-links';
			if (pub.title) {
				const scholarLink = document.createElement('a');
				scholarLink.href = `https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title + " " + (pub.author || ""))}`;
				scholarLink.target = '_blank';
				scholarLink.innerHTML = '<i class="fas fa-graduation-cap"></i> Google Scholar';
				links.appendChild(scholarLink);
			}
			if (pub.doi) {
				const doiLink = document.createElement('a');
				doiLink.href = `https://doi.org/${pub.doi}`;
				doiLink.target = '_blank';
				doiLink.innerHTML = '<i class="fas fa-link"></i> DOI';
				links.appendChild(doiLink);
			}
			if (pub.url && !pub.doi) {
				if (!pub.url.startsWith('http://doi.org') && !pub.url.startsWith('https://doi.org')) {
					const urlLink = document.createElement('a');
					urlLink.href = pub.url;
					urlLink.target = '_blank';
					urlLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Link';
					links.appendChild(urlLink);
				}
			}
			if (pub.pdf) {
				const pdfLink = document.createElement('a');
				pdfLink.href = pub.pdf;
				pdfLink.target = '_blank';
				pdfLink.innerHTML = '<i class="fas fa-file-pdf"></i> PDF';
				links.appendChild(pdfLink);
			}
			content.appendChild(links);

			item.appendChild(imageArea);
			item.appendChild(content);
			listElement.appendChild(item);
		});
	}

	// --- Footer Year ---
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
	}

	// --- Back to Top Button Logic ---
	if (backToTopBtn) {
		window.onscroll = function() {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				backToTopBtn.style.display = "block";
				setTimeout(() => backToTopBtn.style.opacity = "1", 10); // Fade in
			} else {
				backToTopBtn.style.opacity = "0";
				setTimeout(() => backToTopBtn.style.display = "none", 300); // Fade out then hide
			}
		};

		backToTopBtn.addEventListener('click', function() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}

	// --- Dark/Light Mode Toggle Logic ---
	if (darkModeToggle && body) {
		// Function to apply the saved theme or default
		function applyTheme(theme) {
			if (theme === 'dark') {
				body.classList.remove('light-mode');
				body.classList.add('dark-mode');
				darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon
				localStorage.setItem('theme', 'dark');
			} else {
				body.classList.remove('dark-mode');
				body.classList.add('light-mode');
				darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon
				localStorage.setItem('theme', 'light');
			}
		}

		// Check for saved theme in localStorage
		const savedTheme = localStorage.getItem('theme');
		// Check for prefers-color-scheme
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme) {
			applyTheme(savedTheme);
		} else if (prefersDark) {
			applyTheme('dark'); // Default to system preference if no saved theme
		} else {
			applyTheme('light'); // Default to light if no saved theme and no system preference for dark
		}

		darkModeToggle.addEventListener('click', function() {
			if (body.classList.contains('light-mode')) {
				applyTheme('dark');
			} else {
				applyTheme('light');
			}
		});

		// Listen for changes in system preference
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
			if (!localStorage.getItem('theme')) { // Only apply if user hasn't manually set a theme
				applyTheme(e.matches ? 'dark' : 'light');
			}
		});
	}

	// --- Email Obfuscation ---
	const emailPlaceholder = document.getElementById('email-placeholder');
	if (emailPlaceholder) {
		// Define your email parts here to make it harder for simple regex scrapers
		const user = 'alzayat.saleh'; // Replace with your email username
		const domain = 'my.jcu.edu.au';   // Replace with your email domain
		const emailAddress = user + '@' + domain;

		emailPlaceholder.addEventListener('click', function(event) {
			event.preventDefault(); // Prevent any default action if it were a link already
			const mailtoLink = document.createElement('a');
			mailtoLink.href = 'mailto:' + emailAddress;
			mailtoLink.textContent = emailAddress;

			// Replace the placeholder with the actual mailto link
			emailPlaceholder.parentNode.replaceChild(mailtoLink, emailPlaceholder);

			// Optionally, try to open the mail client directly after revealing
			// window.location.href = 'mailto:' + emailAddress;
		});

		// For better accessibility, allow revealing with Enter key if focused
		emailPlaceholder.style.cursor = 'pointer'; // Indicate it's clickable
		emailPlaceholder.setAttribute('role', 'button');
		emailPlaceholder.setAttribute('tabindex', '0'); // Make it focusable

		emailPlaceholder.addEventListener('keydown', function(event) {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				this.click(); // Trigger the click event handler
			}
		});
	}


	// --- Main execution ---
	const publications = parseBibtex(bibtexData);
	renderPublications(publications);

});
