---
last-verified: 2026-10-29
---

# architecture

- One question per diagram: [who uses it](architecture/who-uses.html), [how the repo is built](architecture/how-it-works.html), [what it relies on](architecture/relies-on.html). There is no app and no server, so the diagrams draw what the repo is.
- The diagrams are generated: edit the `.json` in `architecture/`, then run `archify finalize architecture <name>.json <name>.html --quality showcase` there. Never hand-edit the `.html`.
- Architecture is canon's, not the design set's: the designs are what Babul draws, and nothing else.
- Where the site will be served from is open, task T002.
