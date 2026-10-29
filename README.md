# hamburg

My kitchen companion. Cook, learn, remember.

I have a poor memory — so when I cook something and like it, I save it here with the
steps, the science, and everything the ingredient can turn into. 100% vegetarian.

## Not a documentation site

The visual metaphor is a **map**, not a manual. Every raw ingredient has a **journey**
— a graph of what it can become. Milk → curd, paneer, butter, khoya, and everything
downstream. Tap a node, get big numbered steps, cook. If it was good, it stays.

## Structure

The site is a static design set under `.context/designs/web/`. Everything else
about the product is beside it, in `.context/` — start at
[`.context/README.md`](.context/README.md).

```
/
├── README.md
├── AGENTS.md · CLAUDE.md
└── .context/
    ├── tasks.md                         the ordered queue
    ├── wiki/                            what the product is, and why
    ├── features/                        what is next
    └── designs/                         the Babul design set: babul.js, tokens.js, web/
```

## Viewing locally

Open `.context/designs/web/index.html` straight from disk. Pure HTML — no
build step and no server.

## Deploying

Not deployed. GitHub Pages is off for this repository, and Pages does not serve
a dot-folder. Where the site is served from is the open task T002 in
`.context/tasks.md`.

## Design language

- Warm cream page, sage green brand, coral accents, butter yellow highlights
- Fraunces serif for display, Inter for body
- Emoji glyphs stand in for photos until I take real ones
- Big rounded cards (rounded-2xl), soft shadows
- Mobile-first — designed to open in one hand while cooking

The component boards are in `.context/designs/web/components/`; the shell lists them.

## Growth rule

Cook it. If it was good, save it. If it wasn't, still note why.

## Roadmap

Stage 2 (when this stops being enough): move to **Jekyll**, which GitHub Pages builds
natively. Journeys become YAML files that render themselves. Ingredient "used in"
lists auto-derive. For now: pure HTML is fine.
