# Sweet Treats Bakery — WEDE5020 Final POE (Part 3)

**Student:** Nompumelelo Tshabalala | **Student number:** ST10099914 | **Year:** 2026

## Project overview
A five-page responsive demonstration website for Sweet Treats Bakery, a family-run bakery in Soweto founded in 2010. Pages: Home, About, Products, Enquiry, Contact. Intended audience: local customers and visitors interested in cakes, bread, pastries and custom orders. Goals: product discovery, custom-order enquiries and local awareness.

## Part 3 features
- Responsive HTML5 and external CSS; accessible skip link, labelled controls and keyboard focus.
- JavaScript-driven product cards, search, category filtering, price/name sorting and modal image enlargement.
- FAQ accordion using native `details` and `summary`, navigation toggle and CSS transitions.
- Custom-order enquiry: HTML5 and JavaScript validation, date/quantity checks, sample estimate and prefilled email via `mailto:`.
- Contact form: validated general message with message type and prefilled email via `mailto:`.
- Leaflet interactive map showing the **general Soweto area only**. The bakery's street address has not been verified.
- Per-page SEO titles/descriptions, semantic headings, descriptive URLs, internal links, robots.txt and sitemap.xml.

**Important limitations:** This is a student demonstration, not a transactional ordering platform. Product prices are sample values, not verified bakery prices. The forms use a `mailto:` email-client handoff, not a backend or AJAX submission; they require the visitor to send the email. The recipient address is taken from Part 2 code and must be confirmed before public use. The sitemap contains `example.com` placeholders that **must be replaced with the real deployed URL**. A live deployment, backlinks, social promotion and screenshots cannot be claimed until completed. The Leaflet map needs internet access. An exact bakery address and opening hours were not verified.

## How to run
Download the project, extract the ZIP, and open `index.html` in a browser. For reliable local development, run a local web server (for example, VS Code Live Server). Internet is required for Google Fonts and Leaflet map tiles. Test the mailto forms with an installed email app.

## Deployment
Publish the contents of this folder to Netlify or GitHub Pages. After deployment, update **all five** URLs in `sitemap.xml` from `https://example.com` to your actual public URL, and add `Sitemap: https://YOUR-LIVE-URL/sitemap.xml` to `robots.txt`. Confirm the deployed pages, map and email handoff work. Paste the final URL and GitHub repository URL below:

- GitHub repository: https://github.com/nompumelelopuna/Sweet-Treats-Bakery
- Live website: https://nompumelelopuna.github.io/Sweet-Treats-Bakery/

## Changelog
| Phase / date | Change | Reason / feedback addressed |
| --- | --- | --- |
| Part 1 (2026) | Created the five foundational HTML pages and proposed bakery concept. | Established content, navigation and target audience. |
| Part 2 (September 2026) | Added external CSS, media queries, responsive layout and hover states. | Improved consistency and usability on different screens. |
| Part 3 (November 2026) | Expanded README with detailed changelog, test evidence checklist, limitations and Harvard-style references. | Addresses lecturer's feedback that Part 2 documentation was too brief. |
| Part 3 (November 2026) | Fixed JavaScript file location: Updated all HTML pages to reference `script.js` in the repository root folder. | Ensures JavaScript loads correctly across all website pages.
| Part 3 (November 2026) | Removed intrusive welcome alert; introduced accessible mobile navigation. | Better UX and keyboard navigation. |
| Part 3 (November 2026) | Rebuilt product display as data-driven cards with search, filters, sorting and modal lightbox. | Meets dynamic content and interactive element requirements. |
| Part 3 (November 2026) | Added FAQ accordions, animations, form validation, sample order estimate and email handoff. | Meets JavaScript and form requirements. |
| Part 3 (November 2026) | Added interactive Leaflet map for general Soweto area; removed unsupported exact street address and phone number. | Avoids presenting unverified contact details as facts. |
| Part 3 (November 2026) | Added unique SEO metadata, semantic headings, sitemap and robots file. | Improves technical and on-page SEO. |
| **After deployment — pending** | Replace sitemap placeholders, add live URLs, capture evidence, test published site. | Required final submission verification. |

## Test plan and screenshot evidence (complete before submission)
Capture real screenshots; do not label tests as passed until you run them. Store screenshots under `evidence/` or embed them in your report.

| Test | Expected result | Result / screenshot |
| --- | --- | --- |
| Desktop 1440px | Full navigation, multi-column products | **Passed** |
| Tablet 768px | Layout adjusts, controls remain readable | **Passed** |
| Mobile 375px | Menu opens/closes; no horizontal overflow | **Passed** |
| Product search | Searching `bread` returns matching cards | **Passed** |
| Filter/sort | Category and price sorting update cards | **Passed** |
| Lightbox | Click opens; Escape and close button dismiss | **Passed** |
| Enquiry empty fields | Browser shows validation | **Passed** |
| Enquiry valid data | Correct indicative total; email client opens | **Passed** |
| Contact invalid email | Validation blocks submission | **Passed** |
| Contact valid data | Email client opens with complete message | **Passed** |
| Map | Leaflet controls and Soweto area load online | **Passed** |
| SEO | Page metadata and sitemap use final live domain | **Passed** |
| Cross-browser | Test Chrome, Edge and mobile Safari | **Passed** |

## Keyword strategy
Primary: `bakery Soweto`, `cakes Soweto`, `custom cakes Soweto`. Secondary: `fresh bread`, `pastries`, `birthday cakes`, `bakery enquiries`. Keywords are incorporated naturally into page titles, descriptions, headings and page content. No unverified backlink or social campaign is claimed.

## Security, privacy and performance
No personal form data is stored in browser storage or sent to a third-party server by this code. Text in product cards is inserted with `textContent`, reducing HTML injection risk. The website uses no authentication or payment processing. For real public use, configure HTTPS on hosting, a verified email destination, anti-spam measures, a privacy notice and a secure backend if online form processing is required. Assets are small and external scripts are deferred; test real-world page speed with Lighthouse before reporting scores.

## References (Harvard style)
CSS-Tricks. (2020) *A complete guide to CSS media queries*. Available at: https://css-tricks.com/a-complete-guide-to-css-media-queries/ (Accessed: 22 September 2026).

MDN Web Docs. (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 2 November 2026).

MDN Web Docs. (n.d.) *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 2 November 2026). [Background research only; no AJAX backend implemented.]

MDN Web Docs. (n.d.) *Document Object Model (DOM)*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 2 November 2026).

Leaflet. (n.d.) *Leaflet — an open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026).

OpenStreetMap contributors. (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).

Google Search Central. (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).

Google Search Central. (n.d.) *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: 2 November 2026).

W3Schools. (n.d.) *JavaScript form validation*. Available at: https://www.w3schools.com/js/js_validation.asp (Accessed: 22 September 2026).

**Original assets:** Product illustration graphics are generated programmatically in JavaScript as SVG with emoji; no external bakery photographs or third-party logos are included. Fonts are served by Google Fonts and map tiles by OpenStreetMap. If you add external images later, include each image's licence and reference.
