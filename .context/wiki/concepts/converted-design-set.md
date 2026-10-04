---
id: CONCEPT.CONVERTED-DESIGN-SET
type: concept
status: canonical
last-verified: 2026-10-04
supersedes: []
superseded-by: null
---

## Summary
The design set in `.context/designs/web/` was converted from the prototype that
lived under `prototype/`, by script, on 2026-10-04. No screen was redrawn. This
page says what the conversion did and what it left.

## Why it matters
**The prototype could not be checked.** Its nav bar, footer and icons were
drawn at load by three scripts, so no check could read a link or an icon out of
a file. Each screen now holds its own nav and footer as markup.

**The names said hue, not role.** The stylesheet called its colours sage, coral
and butter. They are `brand`, `accent` and `highlight` now, so a repalette is
one block in `shared.css`.

## Implications
- **There is no app, so the set is the spec.** Nothing here is checked against
  code. Every `route` in `routes.js` is null.
- **Seven pages were renamed.** A flow may hold no `index.html`, so each list
  page took its flow's name, and the three pages at the root moved into a flow:
  `home/home.html`, `states/404.html`, `skills/skills.html`.
- **Icons are lucide names.** The prototype's own icon script is gone. Each
  of the 32 names in use was mapped by shape. Two have no lucide twin: `jar`
  became `amphora` and `whisk` became `utensils`.
- **Literals became tokens.** Every hex in a screen or in the stylesheet is a
  token in the PALETTE block. The values did not change.
- **Three Tailwind steps were renamed to keep their size.** The shared config
  remaps `rounded-2xl`, `rounded-xl` and `text-sm`. The screens use
  `rounded-lg`, `rounded` and `text-base`, which are the same 16px, 12px and
  14px the prototype drew.
- **Four classes were renamed.** `num` is `numeral`, because CORE owns `.num`.
  `grow` is `growing`, because Tailwind owns `grow`. `font-mono` is Tailwind's
  own utility now. `grad-butter` was used once and declared nowhere; it is
  `grad-highlight` and it paints.
- **A border with no colour is a `line`.** The prototype set this for every
  element and Tailwind's reset overrode it. It holds now, inside the frame.
- **Inline styles stayed.** About 1,800 declarations, a third of them
  colours, are still written on the element. They read tokens, but they are not
  classes. This is T003.
- **Drawings stayed inline SVG.** The four journey graphs, the two diagrams on
  Milk → Paneer and the India map write their geometry in the screen. This is
  T004.
- **The web fonts are still loaded.** Each screen links Inter, Fraunces and
  JetBrains Mono from Google Fonts, one line more than the standard head. The
  fonts apply inside the frame only, so the bar reads as it does in every set.
- **The prototype is in git history.** `git show b507bd8 --stat -- prototype`.

## Related
- [[map-not-manual]]
- [[ingredient-dossier]]
- [[components]]

## Sources
- .context/designs/web/routes.js
- .context/designs/web/shared.css
