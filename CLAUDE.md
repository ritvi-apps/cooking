@AGENTS.md

# hamburg — Claude Code context

hamburg is a kitchen companion: deep guides to ingredients, what each one
becomes, and what pairs with it. 100% vegetarian. See `README.md`.

**Status:** design only. There is no application and nothing is deployed. The
static design set in `.context/designs/web/` is the product's only source of
truth.

## Layout

```
README.md      what the product is
AGENTS.md      the agent contract (imported above)
.context/      everything else — see .context/README.md
scripts/       check-designs.py, shared with every product
.claude/       the four wiki skills
```

## Stack

- **Markup:** static HTML, one screen per file
- **Styling:** Tailwind via the pinned CDN, plus `shared.css`
- **Icons:** lucide, by name
- **Behaviour:** none. No script renders a screen

## Vocabulary

- **Ingredient** — a thing you cook with. It has a category.
- **Dossier** — everything about one ingredient on one page.
- **Journey** — a graph of what a raw ingredient can become. Legacy; being
  folded into dossiers.
- **Step page** — one transformation, as big numbered steps.
- **Pairing** — two things that go together or fight, with the reason.
- **Skill state** — solid, learning or todo.

## Wiki

`.context/wiki/` is the knowledge base. Read `.context/wiki/CLAUDE.md` before
touching a page. Skills: `/ingest`, `/ask`, `/wiki-lint`, `/decision`.
