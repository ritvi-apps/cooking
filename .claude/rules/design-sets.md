---
paths:
  - ".context/designs/**"
---

# Design sets

How `.context/designs/` is built. Nothing checks these rules now, so read the
diff against them before calling design work done.

## Layout

```
.context/designs/
  design.js     the product: start page, logo and art, sizes, frames, themes, `missing`
  tokens.js     every colour, type style, space, radius and shadow (W3C tokens)
  shell.js      the one link to the viewer shell; never edited
  assets/       source art
  web/
    index.html            the journey
    styles/<group>.html   icons, colors, typography, spacing, radius, shadows
    components/<id>.html  definition in <head>, board in <body>
    <group>/<page>.html   one page, every state in it
    styles.css            only the classes components are built from
```

- `designs/` holds designs only. Notes and decisions go in `.context/wiki/`.
- `design.js` and `tokens.js` are the only hand-written data files: strict JSON
  behind `(window.BABUL ||= {}).<key> = `. Everything else is read from the HTML.
  Never keep a hand-written list of pages, links or components.

## Pages

- One file per page. A state is a `data-state` block, not a file.
- A theme is the toggle, not a state.
- No prose inside a page; markup comments are fine.
- `<body>` carries `data-page` and `data-status` (`review`, `built`,
  `approved`). `data-end` and `data-journeys` name the journeys.
- A note the drawing cannot show is a `<meta name="description">`, per page or
  per state.
- A link is a step forward unless marked: `data-link="side"` (shortcut),
  `data-link="back"` (Home, Back), `<link data-link="auto">` (not a tap). With
  those dropped, the forward graph must have no cycle.

## Components

- Defined once in the `<head>` of `components/<id>.html`, used by name
  (`<c-back-pill>`). Anything a page repeats is a component.
- The board's `<body>` carries `data-component` and `data-group`, and draws
  every variant.
- A component class is never named after a Tailwind utility.

## Styling

- Tailwind and `styles.css` only, no build step. `style="…"` only for what a
  class cannot express. Never `transform: scale()` to fit the frame.
- Screens paint with token roles, never with a `color.palette` value.
- Icons are lucide.

## The set is the spec

There is no app, so the design set is the spec. Never invent a recipe, an
ingredient or a claim: a recipe is added only after it was cooked
(`.context/wiki/concepts/growth-rule.md`).
