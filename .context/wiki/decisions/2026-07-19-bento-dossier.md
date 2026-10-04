---
id: DECISION.2026-07-19.BENTO-DOSSIER
type: decision
status: canonical
last-verified: 2026-10-04
supersedes: []
superseded-by: null
---

## Decision
A dossier is a single-frame bento of tiles, not a page of chapters.

## Why
Commit `b507bd8` redrew Tomato as one viewport of five tiles, after the
chapter version was judged too text-dense. Origin and In the body were dropped
on the owner's feedback.

## Impact
- [[tomato]] is five tiles: Grow, Source, Storage, Cook, Pairs with / Avoid with.
- [[grow-tomato]] was added as the full growing guide, in the same shape.
- The other six dossiers were not redrawn. See [[ingredient-dossier]].
- The same commit moved the site under `prototype/`.

## Status
Active

## Sources
- git commit b507bd8, 2026-07-19
