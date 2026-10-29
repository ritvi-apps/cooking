---
id: CONCEPT.CONVERTED-DESIGN-SET
type: concept
status: canonical
last-verified: 2026-10-29
supersedes: []
superseded-by: null
---

## Summary
The design set is the prototype that lived under `prototype/`, converted and
never redrawn. What it still carries from the prototype is listed here, so
nobody mistakes it for a choice.

## Why it matters
**There is no app, so the set is the spec.** No page has a `data-route` and
nothing is checked against code.

## Implications
- **Inline styles stayed on the pages.** The components carry the prototype's
  own inline styles too, so each expands to the markup the page used to copy.
  Moving them into classes is T003.
- **Drawings stayed inline SVG.** The four journey graphs, the two diagrams on
  Milk → Paneer and the India map write their geometry in the page. A component
  cannot sit inside an SVG. This is T004.
- **Icons are lucide names, mapped by shape.** Two have no lucide twin: `jar`
  is `amphora` and `whisk` is `utensils`.
- **The web fonts are loaded by `styles.css`.** Inter, Fraunces and JetBrains
  Mono apply inside the frame only.
- **The palette icon in the nav links nowhere.** It opened the old component
  page; the component boards replace that page.
- **The prototype is in git history.** `git show b507bd8 --stat -- prototype`.

## Related
- [[map-not-manual]]
- [[ingredient-dossier]]

## Sources
- .context/designs/web/styles.css
- .context/designs/web/components/
