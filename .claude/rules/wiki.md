---
paths:
  - ".context/**/*.md"
---

# The wiki

`.context/wiki/` holds what an agent would get wrong without being told. Every
fact has one home; `index.md` has one line per page.

| Folder | Holds |
|---|---|
| `concepts/` | a rule, an invariant, a user journey; `purpose` and `glossary` |
| `entities/` | exact values, one home each |
| `decisions/` | one file per topic: the current choice |
| `surfaces/` | what a page's design cannot show, only for pages that have some |
| `synthesis/` | research and analysis |

- Not for the wiki: tasks, plans, chat logs, changelogs.
- A page carries `last-verified: YYYY-MM-DD`. Update it only after reading the
  fact again in its real source.
- Write plainly: short sentences, concrete words, the answer first.
