# Features — hamburg

The board. One file per feature, `NNNN-<slug>.md`, newest number last.

`status` is a closed set: `planned` · `building` · `shipped` · `shelved` ·
`superseded`. A shipped feature is never deleted — it goes `status: shipped`
and stays, because the reasoning is the part worth keeping.

| # | Feature | Type | Status | Release |
|---|---|---|---|---|
| [0001](0001-fold-journeys-into-ingredients.md) | Fold journeys into ingredients | feature | building | — |
| [0002](0002-bento-dossier-for-every-ingredient.md) | A bento dossier for every ingredient | feature | building | — |
| [0003](0003-real-photos.md) | Real photos in place of emoji | feature | planned | — |
| [0004](0004-jekyll.md) | Move to Jekyll | platform | planned | — |

## What this folder is, and is not

`wiki/` describes **what is**. `features/` describes **what is next**.
`tasks.md` is the ordered queue — chores and blocked items that are not
features at all.

Each page here comes from something the repository already said: the README's
structure note and roadmap, and the two commits of 2026-07-19. Nothing was
added that the repository does not evidence. There are no releases, so no page
carries a `release:` or a `## Store copy`.
