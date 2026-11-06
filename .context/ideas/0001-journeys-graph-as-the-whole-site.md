---
id: IDEA-0001
status: dropped
last-verified: 2026-11-02
problems: PROB-0001
source: backfill
---
# Journeys graph as the whole site

## Summary
Make every raw ingredient a graph of what it can become, and build the site from those journeys. Milk leads to curd, paneer, butter, ghee and khoya. Each node opens big numbered steps.

Dropped as the shape of the whole site. The reason and the choice that replaced it are in [dossiers](../wiki/decisions/dossiers.md). The journey screens are still drawn, and folding them in is FEAT-0001.

## Fit
Why the graph alone fell short is not spelled out at the time. Commit `4067af7` only says journeys become one chapter of a dossier. The map idea itself stays: [map-not-manual](../wiki/concepts/map-not-manual.md).

## Evidence
- Commit `313cb45`, which built it.
- Commit `4067af7`, which moved away from it.
- `.context/wiki/decisions/dossiers.md`.
