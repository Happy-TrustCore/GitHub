# Happy TrustCore Technologies

Marketing and lead-generation website for Happy TrustCore Technologies, a two-person web development studio (Emran Azizi and Patrick Thompson) based in Berlin. Static site, no build step, no framework — plain HTML, CSS, and JavaScript served directly.

## Features

- **Bilingual (EN/DE)** — full-page translation via a language toggle in the header, persisted in `localStorage`. Translation strings live in `script.js` (`translations` object).
- **Pricing section** — three flat one-time packages (Starter / Business / Advanced), a custom-quote CTA for larger projects, and post-project care tiers.
- **Projects overlay** — a "View All Projects" modal with search and category filtering.
- **Contact form** — client-side validated, submits via `mailto:` to `happy.trustcore@gmail.com` (no backend), with a Free Portfolio Project / Paid Freelance Project intake selector.
- **Chatbot lead capture** — canned Q&A plus a guided flow (name → email → project type → description) that prefills and scrolls to the contact form.
- **Legal pages** — standalone `impressum.html` and `datenschutz.html`, German-only as required by law, linked from a "Legal" column in the footer. See [Legal / Compliance](#legal--compliance) below.
- **Animated background** — a lightweight canvas particle network, paused during scroll and respecting `prefers-reduced-motion`.
- **Responsive** — breakpoint at 850px throughout.

## Project structure

```
index.html          Homepage markup (single page, section-per-feature)
impressum.html       Impressum (§ 5 DDG) — German only
datenschutz.html     Datenschutzerklärung (GDPR) — German only
style.css            All styling — CSS custom properties in :root drive the color system
script.js            All behavior — language toggle, chatbot, form handling, overlays, canvas animation
images/
  favicon.svg        Site favicon
  emran.svg          Placeholder avatar (initials) until a real photo is supplied
  patrick.jpg        Real founder photo
.gitignore           OS/editor/env/log noise — no dependencies to ignore yet
```

No `package.json`, no dependencies, no build step. The only external resource is Font Awesome, loaded from cdnjs with a pinned SRI hash.

## Running locally

Open `index.html` directly in a browser, or serve it locally to avoid any file:// quirks:

```
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Legal / Compliance

Because this is a German-operated site with a contact form, it needs an Impressum (§ 5 DDG) and a Datenschutzerklärung (GDPR) — both are in place now (`impressum.html`, `datenschutz.html`), but a couple of things in them are assumptions worth double-checking as the business firms up:

- **Registration status** — currently written as "kein eingetragenes Gewerbe" (not a registered business), since Emran and Patrick are operating as private individuals for now. Update both pages if/when that changes (adds register number, VAT ID or Kleinunternehmer status, etc.).
- **Address** — both pages list Patrick's Berlin address (Sewanstraße 179, 10319 Berlin) as the shared contact point for both founders. If Emran ever needs his own address listed separately for legal purposes, both pages need updating.
- **Contact details** — email (`happy.trustcore@gmail.com`) and phone (`+49 177 4936972`) are live and correct as of writing.

## Content still pending

These are intentionally left as "coming soon" (dimmed, non-clickable) rather than dead links, and need real values before launch:

- LinkedIn footer link (GitHub, Facebook, and Instagram are live)
- Certificate links for the three portfolio projects, if any exist
- A live link for the Restaurant Website project (currently marked "in development")
- Emran's bio (currently generic — Patrick's cites specific real projects)

Once the site is deployed to a real domain, `og:url`, `og:image`, `robots.txt`, and `sitemap.xml` should be added (deliberately omitted until there's a domain to point them at).

## Browser support

Targets evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS `backdrop-filter` and `min()`; the projects overlay and chatbot window are plain toggled `<div>`s, not the native `<dialog>` element. No polyfills included.
