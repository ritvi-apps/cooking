---
id: PROB-0002
status: open
source: backfill
priority: p2
last-verified: 2026-11-02
---
# The site cannot be opened while cooking

## Summary
The README says the site is made to open in one hand while cooking. It cannot be opened that way: it is served from nowhere, and no screen shows a narrow layout. The set opens from disk on the machine that holds the repo.

The first commit called the site deployable through GitHub Pages. Commit `9824295` corrected that: Pages is off. Why it was never turned on was not written down at the time.

## Impact
The owner cannot use the site at the stove. There are no other users.

## Expected
The site opens on a phone while cooking. Where it is served from is still open: T002 in [tasks.md](../tasks.md). The narrow layout is T010.

## Evidence
- `README.md`, "Deploying" and "Design language".
- Commits `313cb45` and `9824295`.
- `.context/tasks.md`, T002 and T010.
- `.context/architecture/architecture.json`, summary and unknowns.
