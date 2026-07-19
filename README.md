# hamburg

My kitchen companion. Cook, learn, remember.

I have a poor memory — so when I cook something and like it, I save it here with the
steps, the science, and everything the ingredient can turn into. 100% vegetarian.

## Not a documentation site

The visual metaphor is a **map**, not a manual. Every raw ingredient has a **journey**
— a graph of what it can become. Milk → curd, paneer, butter, khoya, and everything
downstream. Tap a node, get big numbered steps, cook. If it was good, it stays.

## Structure

```
/
├── index.html                       kitchen home
├── journeys/
│   ├── index.html                   all journeys
│   ├── milk.html                    THE map (SVG graph)
│   ├── milk-to-paneer.html          step cards
│   ├── milk-to-curd.html
│   ├── milk-to-butter.html
│   ├── milk-to-ghee.html
│   └── milk-to-khoya.html
├── recipes/
│   ├── index.html
│   └── palak-paneer.html
├── ingredients/
│   ├── index.html
│   └── {paneer, spinach, ginger, garlic, cumin, garam-masala}.html
├── skills.html                      what I'm learning
├── 404.html
├── patterns/components.html         design system
└── shared/{chrome.css, nav.js, footer.js}
```

## Viewing locally

```sh
npx serve .
```

Or open `index.html` directly. Pure HTML — no build step.

## Deploying

GitHub Pages, `main` branch, `/` root. That's it. No Actions workflow needed.

## Design language

- Warm cream page, sage green brand, coral accents, butter yellow highlights
- Fraunces serif for display, Inter for body
- Emoji glyphs stand in for photos until I take real ones
- Big rounded cards (rounded-2xl), soft shadows
- Mobile-first — designed to open in one hand while cooking

Reference `patterns/components.html` for the full component library.

## Growth rule

Cook it. If it was good, save it. If it wasn't, still note why.

## Roadmap

Stage 2 (when this stops being enough): move to **Jekyll**, which GitHub Pages builds
natively. Journeys become YAML files that render themselves. Ingredient "used in"
lists auto-derive. For now: pure HTML is fine.
