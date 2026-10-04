---
id: FEAT-0001
type: feature
status: building
last-verified: 2026-10-04
release: null
superseded-by: null
surfaces: ["[[home]]", "[[journeys]]", "[[milk]]", "[[dough]]", "[[sourdough]]"]
---

# Fold journeys into ingredients

## Summary
A journey becomes one chapter of its ingredient's dossier, and the Journeys section goes.

## Motivation
The README marks `journeys/` as legacy, being folded into ingredients. The nav already dropped Journeys on 2026-07-19 ([[2026-07-19-dossiers-over-journeys]]). The set still draws 23 journey screens, and Home's Milk, Wheat and Sourdough tiles open a journey because those three have no dossier.

## Acceptance scenarios
- Given Home, when I open Milk, Wheat or Sourdough, then I land on a dossier, not a journey.
- Given a dossier, when I open its Cook tile, then I see what the ingredient becomes.
- Given the footer, then it has no Journeys link.

## Out of scope
Changing the step pages themselves.

## Open questions
- Does Kombucha get a dossier? It is a drink, not an ingredient.
- Does a step page keep its address under `journeys/`?
