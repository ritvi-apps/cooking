---
last-verified: 2026-10-23
---

# architecture

- One question per diagram: who uses it, how the repo is built, what it relies on. There is no app and no server, so the diagrams draw what the repo is: static screens, the manifest, the wiki and the check.
- The screens keep the site frame and show each diagram inside it.
- The diagrams are generated assets: edit the `.json`, then run `archify finalize architecture <name>.json <name>.html --quality showcase` inside `designs/architecture/`.
- The overview is architecture and cost only: the stack with versions and the monthly cost. Where the site will be served from is open, task T002.
