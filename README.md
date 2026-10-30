# Portfolio_1 — Zainab Abadi

Independent portfolio based on the visual composition of [Tabfolio Pro](https://tabfoliopro.framer.ai/), using Zainab's own content and assets.

**Original portfolio is read-only:** `Abadisedraoui/Portfolio` and `https://zainababadi.com` must never be modified by this project.

## Priorities
- Recruiter-first overview, clear professional positioning.
- Accurate content sourced from the existing portfolio; no invented results.
- Consistent 8-point spacing, aligned 12-column grid, typography, accessible interactions and responsive layouts.
- Selected projects: Oxford Premium research, Oxford design system, accessibility, and Plytix.

## Implementation
A lightweight, build-free HTML/CSS/JS site. Images and the CV are stored locally in `assets/`. Primary pages share the compact profile introduction, Manrope typography, translucent tab navigation, light canvas and three-column footer. Projects use a two-column image grid on desktop and one column on mobile. Case-study content and Quick Scan / Deep Dive remain in `projects.js`.

Navigation: Projects, Articles, About, Experiments and Resume. A floating CV button downloads the PDF. Contact is available through Let's chat. Experiments displays Coming soon.

## Run
Open `index.html` in a web browser, or run `python -m http.server 8080` and open `http://localhost:8080/`.

## Status
Visual layout checked in the browser on desktop and in 390px / 320px frames. Static local links and JavaScript syntax checked. The original portfolio is independent of this repository.

## Article thumbnails

Each card in `articles.html` has a `.article-thumbnail` slot. Add an `<img>` inside it using a local image or GIF in `assets/`; the card’s aspect ratio controls its display. Captions contain only the content type and title.

## Analytics and contact form

- `consent.js`: shows a consent banner on first visit. Contentsquare (the Hotjar successor) only loads after Accept. "Cookie settings" in the footer reopens the choice. The choice is stored in `localStorage` under `za-analytics-consent`.
- `contact.js`: "Let's chat" opens a native `<dialog>` form that posts to Formspree. Without JavaScript the link falls back to `mailto:`.
- `privacy.html`: explains both services. Update it if either one changes.
- `accessibility.html`: the accessibility statement. It says what is in place, what was checked and what was not. Update "Last reviewed" and the lists whenever the site or the testing changes.
- The Contentsquare tag ID (`a67c74590d182`) is set in `consent.js`. There is no domain to register in Contentsquare; the tag only needs to be on the page. Do not run the Contentsquare install wizard here, because it adds the script without the consent check.
- `extras.css`: styles for the banner, the dialog and the privacy page.

## Animated thumbnails

The four project cards on the home page draw their thumbnail in HTML/CSS instead of using an image (`thumbs.css`, scenes inline in `index.html`).
- Each scene plays once when the card is at least 60% visible, and again on hover or keyboard focus (`thumbs.js`).
- Reduced motion, or JavaScript off, shows the finished frame.
- Sizes use `cqw`, so each scene scales with its card. Keep important content inside the central 80% and leave the bottom-left corner free for the "Read case study" pill.
- Colours and type come from the public Oxford Premium site (navy #002147, blue #1963B3, bright blue #0043E0, yellow #FFE12D, slate #27455C, DM Serif Display, Open Sans, Fira Sans). Plytix uses its logo colours.
- The names inside the resources scene, the Hover/Focus/Disabled button states and the Find & replace warning text are illustrative.
- The static PNGs in `assets/` are still used on the case study pages.
