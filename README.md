# Sweet Treats Bakery — WEDE5020 Final POE (Part 3)

**Student:** Nompumelelo Tshabalala  
**Year:** 2026

## 1. Project Overview

Sweet Treats Bakery is a five-page responsive demonstration website for a family-run bakery in Soweto, established in 2010.

The website is designed for local customers and visitors interested in cakes, bread, pastries and custom orders.

### Website Pages

| Page | Description |
|---|---|
| Home | Introduces the bakery and highlights its offerings. |
| About | Provides information about the bakery and its background. |
| Products | Displays bakery products with interactive browsing features. |
| Enquiry | Allows customers to enquire about products and custom orders. |
| Contact | Provides contact information, a contact form and a map. |

**Main objectives:**
- Showcase bakery products.
- Allow visitors to search and browse products.
- Provide a way to enquire about custom orders.
- Make bakery information easy to access.
- Provide a responsive experience across different screen sizes.

## 2. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content. |
| CSS3 | Styling, layout, responsiveness and animations. |
| JavaScript | Interactive features, product filtering and form functionality. |
| Leaflet.js | Interactive map. |
| OpenStreetMap | Map tile data. |
| Google Fonts | Website typography. |
| GitHub | Version control and remote repository hosting. |
| GitHub Pages | Website deployment and publishing. |

## 3. Part 3 Features

| Feature | Description |
|---|---|
| Responsive design | Adapts the website layout to different screen sizes. |
| Mobile navigation | Provides navigation suitable for smaller screens. |
| Product cards | Displays products using JavaScript-generated cards. |
| Product search | Allows visitors to search for products, including by name. |
| Category filtering | Filters products according to their category. |
| Product sorting | Sorts products by price and name. |
| Image lightbox | Opens product images in a larger modal view. |
| FAQ accordion | Allows visitors to expand and collapse frequently asked questions. |
| Form validation | Checks required fields before form submission. |
| Cost estimation | Calculates an estimated cost for selected enquiry options. |
| Contact form | Prepares a message through the visitor's email application. |
| Interactive map | Displays the general Soweto area using Leaflet. |
| SEO metadata | Includes page titles, descriptions and supporting sitemap files. |
| Accessibility | Includes labelled form controls, keyboard focus styling and a skip link. |

### Form Functionality Limitations

The enquiry and contact forms use a `mailto:` email-client handoff. They do not submit information to a backend or use AJAX. Visitors must send the prepared email themselves.

Product prices are sample values and have not been verified as actual bakery prices. The map displays the general Soweto area rather than a verified bakery street address.

## 4. How to Run the Project

1. Download or clone the GitHub repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Alternatively, use a local development server such as VS Code Live Server.

Internet access is required for Google Fonts and Leaflet map tiles. The email forms require an installed or configured email application.

## 5. Deployment

The website is published using GitHub Pages.

| Item | Link |
|---|---|
| GitHub repository | https://github.com/nompumelelopuna/Sweet-Treats-Bakery |
| Live website | https://nompumelelopuna.github.io/Sweet-Treats-Bakery/ |
| Screenshot evidence | [Evidence folder](Evidence/) |

## 6. Changelog

| Phase / Date | Change | Reason / Feedback Addressed |
|---|---|---|
| Part 1 (2026) | Created the five foundational HTML pages and bakery concept. | Established the website content, navigation and target audience. |
| Part 2 (September 2026) | Added external CSS, media queries, responsive layout and hover states. | Improved consistency and usability across screen sizes. |
| Part 3 (November 2026) | Expanded the README with project documentation, testing information and Harvard-style references. | Improved documentation following feedback on the previous submission. |
| Part 3 (November 2026) | Updated all HTML pages to reference `script.js` in the repository root folder. | Ensures JavaScript loads correctly across all website pages. |
| Part 3 (November 2026) | Removed the intrusive welcome alert and introduced accessible mobile navigation. | Improved user experience and keyboard navigation. |
| Part 3 (November 2026) | Rebuilt the product display with search, filtering, sorting and modal lightbox functionality. | Added dynamic content and interactive features. |
| Part 3 (November 2026) | Added FAQ accordions, animations, form validation, sample order estimates and email handoff. | Improved website functionality and form interaction. |
| Part 3 (November 2026) | Added an interactive Leaflet map displaying the general Soweto area. | Provides geographical context without claiming an unverified street address. |
| Part 3 (November 2026) | Added individual SEO metadata, semantic headings, sitemap and robots files. | Improved technical structure and search engine optimisation. |
| Part 3 (November 2026) | Published the website using GitHub Pages and added screenshot evidence. | Made the website publicly accessible and documented project progress. |

## 7. Testing and Results

The following functionality tests were completed on the website.

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Mobile navigation | Menu opens and closes correctly. | Navigation works correctly. | Passed |
| Product display | Product cards display correctly. | Products are displayed. | Passed |
| Product search | Searching for a product such as `cake` returns matching results. | Matching products are displayed. | Passed |
| Product sorting | Products reorder by price. | Low-to-high sorting works. | Passed |
| Enquiry required fields | Incomplete submissions are blocked. | Required-field validation works. | Passed |
| Enquiry cost estimation | Completed enquiry displays an estimated cost. | Estimated cost is displayed. | Passed |
| Product lightbox | Image opens and close button dismisses it. | Lightbox opens and closes. | Passed |
| FAQ accordion | Answers expand and collapse. | Accordion works correctly. | Passed |
| Contact form | Send Message opens the email application. | Email application opens with a prepared message. | Passed |
| Mobile landscape layout | Content remains usable without awkward horizontal scrolling. | Layout remains usable. | Passed |
| Map display | Map displaying the general Soweto area is visible. | Map is visible. | Passed |

Desktop, tablet and additional browser compatibility tests should only be marked as passed after being independently tested on those devices or browsers.

## 8. Screenshot Evidence

Screenshots of the website's mobile layout and functionality tests, together with desktop and tablet layout previews, are available in the `Evidence` folder.



**Note:** Desktop and tablet images are layout previews and should not be treated as screenshots captured from live desktop or tablet devices.

## 9. SEO and Keyword Strategy

### Keyword Strategy

| Primary Keywords | Secondary Keywords |
|---|---|
| Bakery Soweto | Fresh bread |
| Cakes Soweto | Pastries |
| Custom cakes Soweto | Birthday cakes |
| | Bakery enquiries |

These keywords are incorporated naturally into page titles, descriptions, headings and website content.

### SEO Implementation

| SEO Element | Implementation |
|---|---|
| Page titles | Individual titles for website pages. |
| Meta descriptions | Descriptions added to website pages. |
| Semantic HTML | Structured headings and page elements. |
| Sitemap | `sitemap.xml` lists the website pages. |
| Robots file | `robots.txt` provides crawler instructions. |
| Internal links | Navigation connects the website pages. |

No unverified backlink or social media campaign is claimed.

## 10. Security, Privacy and Performance

| Area | Implementation / Limitation |
|---|---|
| Form data | The website does not store form data in browser storage or send it to a third-party server through its website code. |
| HTML injection | Product card text is inserted using `textContent`. |
| Authentication | No authentication system is implemented. |
| Payments | No online payment processing is implemented. |
| Email | Forms use a `mailto:` handoff. |
| Privacy | A privacy notice would be required before collecting customer information commercially. |
| Performance | Real-world performance scores have not yet been measured using Google Lighthouse. |
| External resources | Google Fonts and OpenStreetMap map tiles require internet access. |

For commercial use, further improvements could include a verified email destination, anti-spam measures, a privacy notice and a secure backend if online form processing is required.

## 11. References (Harvard Style)

CSS-Tricks. (2020) *A complete guide to CSS media queries*. Available at: https://css-tricks.com/a-complete-guide-to-css-media-queries/ (Accessed: 22 September 2026).

MDN Web Docs. (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 2 November 2026).

MDN Web Docs. (n.d.) *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 2 November 2026). Background research only; no AJAX backend is implemented.

MDN Web Docs. (n.d.) *Document Object Model (DOM)*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 2 November 2026).

Leaflet. (n.d.) *Leaflet — an open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026).

OpenStreetMap contributors. (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).

Google Search Central. (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).

Google Search Central. (n.d.) *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: 2 November 2026).

W3Schools. (n.d.) *JavaScript form validation*. Available at: https://www.w3schools.com/js/js_validation.asp (Accessed: 22 September 2026).

## 12. Original Assets

Product illustration graphics are generated programmatically in JavaScript as SVG with emoji. No external bakery photographs or third-party logos are included.

Fonts are served by Google Fonts and map tiles by OpenStreetMap. Any additional external images should have their licences and references documented.
