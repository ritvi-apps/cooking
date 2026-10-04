# .context — hamburg

Everything about this product. hamburg is a kitchen companion: what an
ingredient is, what it becomes, what it pairs with. The repository is named
`cooking`. It holds **no application code** — content and a design set — so
the design set here is the spec. The folders are the same in every repo under
`~/git/products`; the standard and the reasoning live in
`~/git/products/CLAUDE.md`.

**Start at [`tasks.md`](tasks.md)** — it is the ordered queue, and the top item
of `## Now` is the next action.

| Folder | Holds | Status |
|---|---|---|
| `tasks.md` | the ordered queue | present |
| `raw/` | sources. Immutable. | empty — nothing was ingested from outside |
| `wiki/` | everything concluded. Schema in `wiki/CLAUDE.md`. | present — 6 concepts, 3 entities, 1 flow, 2 decisions, 39 surface pages |
| `features/` | what's next, one file per feature | present — 4 pages |
| `designs/` | the design set, and the only home of source art | present — `web/`, 39 screens, no states |
| `listing/` | what the stores show | n/a — a website, no store listing |
| `marketing/` | how it's sold | n/a — a personal site, nothing is sold |
| `metrics/` | the numbers | n/a — not deployed, nothing is measured |
| `support/` | what we tell users | n/a — no users |
| `legal/` | what we promise | n/a — not deployed, no data is collected |
| `ops/` | how it is run | n/a — nothing is deployed; GitHub Pages is off for this repository |

`designs/brand/` is absent too: the mark is a letter on a coloured square,
drawn by the `.brand-mark` class, and there is no artwork file.

`README.md` and `tasks.md` are the only files allowed at this root.

## Shared files this product does not carry

`~/git/bin/shared` fails on a shared file that is neither in the repo nor named
here.

| File | Why |
|---|---|
| `scripts/listing-from-md.mjs` | n/a — no store listing |
| `scripts/listing-readme.mjs` | n/a — no store listing |
| `scripts/play-upload.mjs` | n/a — no Play Console app |
| `scripts/release-notes.mjs` | n/a — no store release notes |
| `scripts/goldie-to-fastlane.mjs` | n/a — no store capture |
| `scripts/build-screenshot-apk.mjs` | n/a — no mobile app |
| `scripts/build-screenshot-app.sh` | n/a — no mobile app |
| `scripts/release-android.mjs` | n/a — no mobile app |
| `scripts/eas-export-keystore.mjs` | n/a — no EAS project |
| `scripts/check-ota-safe.mjs` | n/a — no OTA channel |
| `.github/CODEOWNERS` | n/a — the repo has no `.github/` |

It does carry `scripts/check-designs.py` and the four wiki skills under
`.claude/skills/`, byte for byte charades'.

## Viewing the designs

```bash
cd .context && python3 -m http.server 8899   # then localhost:8899/designs/web/
```

Serve from **`.context/`, not from the surface folder**. The bar's *notes*
button reads `wiki/surfaces/<slug>.md`, which is outside `designs/web/`.

One surface, `web`, at a 1440 × 900 frame, light only. The shell around it —
`_chrome.js`, `_gallery.js`, `index.html`, `screenshots.html` and the CORE block
of `shared.css` — is charades', byte for byte apart from the product's name.

The set was converted from the prototype on 2026-10-04, by script. What that
did is `wiki/concepts/converted-design-set.md`. What is not drawn is in
`routes.js` under `missing`.

## What moved here, and from where

| From | To |
|---|---|
| `prototype/index.html` | `designs/web/home/home.html` |
| `prototype/404.html` | `designs/web/states/404.html` |
| `prototype/skills.html` | `designs/web/skills/skills.html` |
| `prototype/<flow>/index.html` (4) | `designs/web/<flow>/<flow>.html` — a flow holds no `index.html` |
| `prototype/<flow>/*.html` (32) | `designs/web/<flow>/`, same names |
| `prototype/shared/chrome.css` | `designs/web/shared.css` — its values are the PALETTE block, its classes the components block |
| `prototype/shared/nav.js`, `footer.js`, `icons.js` | deleted — the render scripts. A static set has nothing to render |

The prototype as it was: `git show b507bd8 --stat -- prototype`.
