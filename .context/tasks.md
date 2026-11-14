---
updated: 2026-10-04
horizon: 2026-10-25        # this file is a lie after this date — regenerate
---

# Tasks — hamburg

<!-- Ordered. The top item of `Now` is THE next action. Read top-down, stop at
     the first unblocked task, do it, delete it when done.
     Position in `Now` IS the dependency — `needs:` is only for cross-section
     edges. A task needing more structure than a line is a features/ page. -->

## Now

1. [ ] T001 Review the converted design set: open `designs/web/index.html`,
       walk the main path. Every screen is `status: "review"`.  ~1h
2. [ ] T002 Decide where the site is served from. The README said GitHub Pages
       from the repository root; Pages is off, and Pages does not serve a
       dot-folder, so `.context/designs/web/` cannot be the published site.  ~30m
3. [ ] T003 Move the inline styles into classes, in the component definitions
       and the pages (design-sets §3). Check each page by eye after: a utility
       loses to a two-class component rule where the inline style used to win.  ~1d
4. [ ] T004 Declare the drawings' geometry once. The four journey graphs, the
       two diagrams on Milk → Paneer and the India map write their shape out in
       the screen (design-sets §3).  ~3h

## Parallel
<!-- [P]: independent of the Now chain, safe to batch into one sitting -->

- [ ] T006 [P] Decide the seven season tiles on Home and the other `#` links.
      Each is in `design.js` under `missing`. Draw the page or stop it being a link.
- [ ] T007 [P] Redraw the six older dossiers as bento  `feat:0002-bento-dossier-for-every-ingredient`
- [ ] T008 [P] Fold the journeys into ingredients  `feat:0001-fold-journeys-into-ingredients`
- [ ] T010 [P] Draw the narrow layout, or drop "mobile-first" from the README.
      The stylesheet has rules for 900, 640 and 560px and no screen shows them.
- [ ] T011 [P] Fix the Cookbook pill: BUG-0001.

- [ ] T012 [P] Finish removing canon (2026-11-14). Its last `canon check` warned:
      `wiki/decisions/dossiers.md` was last verified 118 days ago, and this file
      is past its horizon (2026-10-25). `babul stale` flags both.
      `.context/designs/shell.js` still loads the viewer shell from
      `unpkg.com/@freetesh/canon/shell/`; point it at Babul's shell once one
      exists.
- [ ] T013 [P] Reword idea 0004 so it does not name another product
      `ideas/0004-…` names a different app by name; state the rule on its own.
      (found 2026-11-14 in a portfolio consistency check)
- [ ] T014 [P] Add `.archon/checks.json`
      There is none, so `babul judge` does not check this repo. Start with the
      lychee `.context` link check. (found 2026-11-14 in a portfolio consistency
      check)

## Blocked

## Waiting
