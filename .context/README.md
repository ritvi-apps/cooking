# .context — hamburg

Everything about this product. hamburg is a kitchen companion: what an
ingredient is, what it becomes, what it pairs with. The repository is named
`cooking`. It holds **no application code** — content and a design set — so
the design set here is the spec.

Start at [`tasks.md`](tasks.md).

| Absent or empty | Why |
|---|---|
| `raw/` | empty — nothing was ingested from outside |
| `listing/` | n/a — a website, no store listing |
| `marketing/` | n/a — a personal site, nothing is sold |
| `metrics/` | n/a — not deployed, nothing is measured |
| `support/` | n/a — no users |
| `legal/` | n/a — not deployed, no data is collected |
| `ops/` | n/a — nothing is deployed; GitHub Pages is off for this repository |

`designs/brand/` is absent too: the mark is a letter on a coloured square,
drawn by the `.brand-mark` class, and there is no artwork file.

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

Serve from `.context/`: the notes button reads `wiki/surfaces/<slug>.md`.
