---
id: BUG-0001
status: open
severity: low
priority: p2
last-verified: 2026-11-02
source: backfill
---
# Cookbook pill never shows as active

## Summary
Open any Cookbook screen. No pill in the top nav is highlighted, so the nav does not show where you are.

## Expected
The Cookbook pill shows as active on the Cookbook screens, as Ingredients and Pairings do on theirs.

## Actual
The nav component has an active state for Ingredients and Pairings only. The Cookbook pill has none, and the Recipes screen passes `active="none"`. `tasks.md` first put this down to a key mismatch from the prototype; the component today has no Cookbook key at all.

## Evidence
- `.context/designs/web/components/site-nav.html`.
- `.context/designs/web/recipes/recipes.html`, line 14.
- `.context/tasks.md`, T011.
