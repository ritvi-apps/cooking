# hamburg Agent Contract

All coding agents working in this repository must follow this contract. The
repository is named `cooking`; the product calls itself hamburg.

## Authoritative sources

Read `CLAUDE.md` before making changes. It says what the product is and how
the repository is laid out.

**Before starting work, read `.context/tasks.md`.** It is the ordered queue —
the top item of `## Now` is the next action. After finishing, tick the task and
append a Session Note.

- `.context/` — ten folders, one job each; see `~/git/products/CLAUDE.md`.
  `.context/README.md` says which are present here and why the rest are not.
- `.context/designs/web/` — the design set. There is no app, so it is the spec.
- `.context/wiki/` — the knowledge base; its schema is `.context/wiki/CLAUDE.md`
- `.context/features/` — what is next, one page per feature

## Repository rules

1. This repository holds no application code. Do not add any.
2. Keep product material in whichever of the ten `.context/` folders owns it.
   **HTML is the spec for anything visual; the wiki is for what a picture cannot
   hold.** The screen inventory is `routes.js`, never a second list in Markdown.
3. Do not create top-level `docs/`, `wireframes/` or `prototype/` directories.
4. `.context/raw/` is immutable.
5. Everything is vegetarian, and a recipe is added only after it was cooked.
   See `.context/wiki/concepts/growth-rule.md`.

## Designs

`.context/designs/web/` follows `~/git/personal/STYLE-GUIDE.md`. `routes.js` is
the manifest and the one place a screen is declared; the flow chart, the bar
and the screenshots sheet all read it. One screen per file. The bar is injected
by `_chrome.js` from `data-file` on `<body>` — never hand-write chrome into a
screen, and never add a script that renders one. The site's own nav and footer
are written into each screen.

`_chrome.js`, `_gallery.js`, `index.html`, `screenshots.html` and the CORE block
of `shared.css` are charades' copies. Never edit them here.

A change to a screen is three edits: the HTML, `routes.js` if a link or a
screen was added, and the screen's notes page in `.context/wiki/surfaces/` if
the reason changed.

## Completion rules

Before marking work complete:

1. Run `python3 scripts/check-designs.py .context/designs/web`. It exits
   non-zero on any failure.
2. Run `~/git/bin/check cooking`.
3. Reflect changed behaviour in `CLAUDE.md` and any affected `.context/` artifact.
