---
id: SURFACE.WEB.ARCHITECTURE
type: surface
status: draft
last-verified: 2026-10-23
supersedes: []
superseded-by: null
---

## Summary
How hamburg is built, in three small diagrams and one overview, opened from the architecture chip in the bar.

## Raw wireframes
- .context/designs/web/architecture/<overview|who-uses|how-it-works|relies-on>.html — the screens
- .context/designs/architecture/<name>.json — each diagram's source; `<name>.html` is drawn from it by Archify

## Why it is drawn this way
- One question per diagram: who uses it, how the repo is built, what it relies on. There is no app and no server, so the diagrams draw what the repo is: static screens, the manifest, the wiki and the check.
- The screens keep the site frame and show each diagram inside it.
- The diagrams are generated assets: edit the `.json`, then run `archify finalize architecture <name>.json <name>.html --quality showcase` inside `designs/architecture/`.
- The overview is architecture and cost only: the stack with versions and the monthly cost. Where the site will be served from is open, task T002.

## Related
- [[home]] · [[paneer]]

## Sources
- CLAUDE.md, README.md, AGENTS.md
