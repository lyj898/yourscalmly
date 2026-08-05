# YoursCalmly

A calm, adult, wellness-oriented website with three short, single-player
mini-games, designed for people in the very early stages of dementia to
play on their own. Static HTML/CSS/JS, no backend, no build step, no
`localStorage`/`sessionStorage` dependency — served from
[YoursCalmly.com](https://yourscalmly.com) via GitHub Pages.

## What's here

```
index.html                 Home: hero, games hub, "why these games",
                            accessibility principles, language note, footer
games/
  memory-lane.html          Game 1: recognition ("which one is used for...")
  find-the-group.html       Game 2: simple categorisation
  tune-match.html           Game 3: melody mood-matching (Web Audio)
css/
  styles.css                Shared design system — one stylesheet, all pages
js/
  i18n.js                   Translation strings (EN + ZH — see "Chinese
                             localisation" below)
  games-data.js              Game definitions: rounds, correct answers,
                             icons, generated melodies — logic only, no copy
  main.js                    Shared header/footer injection + language toggle
  game-shell.js               Shared UI helpers: progress dots, feedback
                             banner, choice cards, results screen
  memory-lane.js, find-the-group.js, tune-match.js
                              Per-game logic, each using the shared helpers
                             above
robots.txt                  Allows all crawlers, points to the sitemap
sitemap.xml                 All four pages with hreflang alternates
CNAME                       Custom domain for GitHub Pages (yourscalmly.com)
.nojekyll                   Tells GitHub Pages to serve files as-is
```

## SEO

Every page carries a keyword-led `<title>` and `<meta name="description">`,
a `<link rel="canonical">`, `hreflang` alternates for `en` / `zh` /
`x-default`, and Open Graph + Twitter card tags. `index.html` also embeds
`WebSite` and `FAQPage` JSON-LD; each game page embeds `Game` JSON-LD.

Because the language toggle swaps content client-side without a reload,
`js/main.js` also rewrites `document.title` and the meta description on
every language change. Each page declares which strings to use via
`data-i18n-title` / `data-i18n-desc` on its `<html>` element, resolved
against the `seo.*` keys in `js/i18n.js`.

The crawlable body copy lives in the "why these activities may help",
"for families and caregivers", FAQ, and per-game "about" sections — all
plain server-served HTML in the page source, so it indexes without
JavaScript. After deploying, submit `https://yourscalmly.com/sitemap.xml`
in Google Search Console and Bing Webmaster Tools.

No images, icons, or fonts are downloaded from anywhere — cards use emoji
and system fonts, and the logo is a small inline SVG, so the site loads
fast and works offline once cached.

## Publish to GitHub Pages (custom domain)

1. Create a new GitHub repository (or reuse an existing empty one).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial YoursCalmly launch"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source** →
   choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Still on the Pages settings screen, under **Custom domain**, enter
   `yourscalmly.com` and save (the `CNAME` file in this repo already
   contains that value, so GitHub should detect it automatically).
5. At your domain registrar / DNS provider for `yourscalmly.com`, add:
   - Four **A** records for the apex domain (`@`) pointing to GitHub
     Pages' IPs: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - A **CNAME** record for `www` pointing to
     `<your-username>.github.io`
   (Exact field names vary by registrar — look for "DNS management" or
   "DNS records".)
6. Back in GitHub Pages settings, once DNS has propagated (can take up to
   a few hours), tick **Enforce HTTPS**.

To preview locally first, just open `index.html` in a browser, or serve
the folder (recommended, so relative links behave exactly like on Pages):

```bash
python -m http.server 8080
# then visit http://localhost:8080/
```

## Renaming the brand later

The brand name appears in exactly two kinds of places:

1. **`js/i18n.js`** — `translations.en.common.brand` and
   `translations.zh.common.brand`. Change these two strings and every page
   updates automatically (the header/footer are built from this value).
2. **`<title>` tags** in `index.html` and each file under `games/`, plus
   the page `<meta name="description">` tags — a find-and-replace for
   "YoursCalmly" across the project covers everything.

No CSS, layout, or logic references the name, so a rename is copy-only.
The logo (`.brand-mark` in `css/styles.css`, built in `js/main.js`) is an
independent inline SVG and isn't tied to the name.

## Adding a fourth game later

The site was structured so a new game doesn't touch the shell:

1. Add a new entry to `GP_GAMES` in `js/games-data.js` (rounds, correct
   answers, icons — logic only).
2. Add matching copy under a new namespace in `js/i18n.js` (e.g.
   `translations.en.wordFind`).
3. Write a small `js/<game>.js` following the pattern in
   `js/memory-lane.js` — it calls the same `GP_SHELL` helpers for
   progress, feedback, choice cards, and the results screen, so the new
   game automatically looks and feels consistent. Use `GP_SHELL.shuffled()`
   to randomise option/card order so the correct answer isn't always in
   the same position.
4. Add an HTML page under `games/` (copy an existing one as a template)
   and a card to the games hub in `index.html`.

## Chinese localisation

All UI copy lives in `js/i18n.js` under `translations.en` and
`translations.zh`. The site is **fully translated in both languages**:
navigation, hero, "how it works", games-hub cards, "why these activities
may help", accessibility, footer, all shared game-shell strings, and all
three games in full — titles, instructions, feedback, and every round's
prompts/options. `GP_I18N.t()` still falls back to English for any key a
future language leaves blank, so nothing breaks or shows empty if a new
language is added incrementally later (see `GP_I18N.isPartial()`).

The language toggle works instantly (no reload) and persists across the
whole site **without any storage** — the chosen language travels as a
`?lang=zh` query parameter on every internal link (nav, footer, game
cards, breadcrumbs, and the results screen), so switching language on one
page keeps it selected as you move between the home page and any game.

To add a third language later: add a new top-level key under
`translations` in `js/i18n.js` mirroring the `en` structure, add a toggle
button in `main.js`'s `headerHTML()`, and set `meta.partial: true` on that
language's object until every key is filled in.

## Design principles this build follows

- Wellness framing, not "brain training" — no scores, streaks, or timers
  by default.
- One primary action per screen; large text (18px+ body) and large tap
  targets (56px minimum).
- Warm accent colours (wine, sage, brass) against a clean white
  background, rather than an all-over tinted page; strong, readable
  contrast in both light and dark OS themes.
- Every interactive element is a real `<button>` or `<a>`, keyboard
  reachable, with a visible focus outline and `aria-live` feedback
  announcements for screen readers.
- Respects `prefers-reduced-motion`.
- No accounts, no caregiver dashboard, no tracking, no analytics.

## Medical/wellness disclaimer

This is a supportive wellness activity site, not a medical device,
diagnostic tool, or treatment. It does not claim to cure, prevent, or
slow the progression of dementia or any condition. See the "Why these
activities may help" section on the home page for the full note, and
encourage anyone with questions about memory or a diagnosis to speak
with a qualified healthcare professional.
