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
- `extras.css`: styles for the banner, the dialog and the privacy page.
- Contentsquare must list this site's domain in its project settings, or the tag will load but record nothing.
