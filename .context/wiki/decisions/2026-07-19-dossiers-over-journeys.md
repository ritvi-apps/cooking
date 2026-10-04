---
id: DECISION.2026-07-19.DOSSIERS-OVER-JOURNEYS
type: decision
status: canonical
last-verified: 2026-10-04
supersedes: []
superseded-by: null
---

## Decision
The site is organised around ingredient dossiers and pairings, not around journeys.

## Why
Commit `4067af7` moved the site from a transformation-graph model to a dossier
model: every ingredient gets seven chapters, and a journey becomes one chapter
instead of the whole site. The same commit noted that the pass was too
text-dense and that the next revision would be visual-first.

## Impact
- The nav became Ingredients, Pairings, Cookbook. Journeys and Skills left it.
- Pairings was added as a surface.
- Home lost "how it works", the featured journey, the empty cookbook slots, the
  skills widget and the quote card.
- [[skills]] has no way in. [[journeys]] is reached from the footer only.
- See [[ingredient-dossier]].

## Status
Active

## Sources
- git commit 4067af7, 2026-07-19
