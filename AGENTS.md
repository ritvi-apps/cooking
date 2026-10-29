# hamburg Agent Contract

All coding agents working in this repository must follow this contract. The
repository is named `cooking`; the product calls itself hamburg.

## Authoritative sources

Read `CLAUDE.md` before making changes. It says what the product is and how
the repository is laid out.

**Before starting work, read `.context/tasks.md`.** It is the ordered queue —
the top item of `## Now` is the next action. After finishing, delete the task.

- `.context/` — ten folders, one job each; see `~/git/products/CLAUDE.md`.
  `.context/README.md` says which are present here and why the rest are not.
- `.context/designs/` — the design set. There is no app, so it is the spec.
- `.context/wiki/` — the knowledge base; its schema is canon's `wiki-schema` standard
- `.context/features/` — what is next, one page per feature

## Repository rules

1. This repository holds no application code. Do not add any.
2. Keep product material in whichever of the ten `.context/` folders owns it.
   **HTML is the spec for anything visual; the wiki is for what a picture cannot
   hold.** The page inventory is the pages themselves, never a list in Markdown.
3. Do not create top-level `docs/`, `wireframes/` or `prototype/` directories.
4. `.context/raw/` is immutable.
5. Everything is vegetarian, and a recipe is added only after it was cooked.
   See `.context/wiki/concepts/growth-rule.md`.

## Designs

`.context/designs/` is a Babul design set: canon's `design-sets` standard
(`canon standards`) says how it is built and `canon check` checks it. The
shell reads pages, links, journeys and components from the HTML itself; there
is no data file to update. It holds only designs; what they cannot show — a
page's notes, design decisions, colour rules — is in `wiki/` (`surfaces/`,
`decisions/`, `concepts/`).

**Reserved here:** sage is the primary action and "solid", butter is
"learning", coral is "avoid", and `cat-*` is an ingredient's category and
nothing else (`tokens.js` says so on each).

## Completion rules

Before marking work complete:

1. Run `canon check`. It runs the design checks and exits non-zero on any
   failure.
2. Reflect changed behaviour in `CLAUDE.md` and any affected `.context/` artifact.
