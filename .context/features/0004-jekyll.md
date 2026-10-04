---
id: FEAT-0004
type: platform
status: planned
last-verified: 2026-10-04
release: null
superseded-by: null
surfaces: ["[[journeys]]", "[[ingredients]]"]
---

# Move to Jekyll

## Summary
Build the site with Jekyll, which GitHub Pages builds natively.

## Motivation
The README calls this stage 2, for when pure HTML stops being enough. Journeys become YAML files that render themselves, and an ingredient's "used in" list derives itself.

## Acceptance scenarios
- Given a new recipe file, then each ingredient it names lists it under "Used in" with no second edit.
- Given a journey's YAML, then its graph page renders from it.

## Out of scope
Any other generator.

## Open questions
- The site is not deployed today: GitHub Pages is off for this repository. Does it ship as HTML first?
- A built site would be application code. This repository holds none.
