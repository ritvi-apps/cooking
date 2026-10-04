---
updated: 2026-10-04
horizon: 2026-10-25        # this file is a lie after this date — regenerate
---

# Tasks — hamburg

<!-- Ordered. The top item of `Now` is THE next action. Read top-down, stop at
     the first unblocked task, do it, tick it, append a Session Note.
     Position in `Now` IS the dependency — `needs:` is only for cross-section
     edges. A task needing more structure than a line is a features/ page. -->

## Now

1. [ ] T001 Review the converted design set: serve `.context/`, open the flow
       chart, walk the main path. Every screen is `status: "review"`.  ~1h
2. [ ] T002 Decide where the site is served from. The README said GitHub Pages
       from the repository root; Pages is off, and Pages does not serve a
       dot-folder, so `.context/designs/web/` cannot be the published site.  ~30m
3. [ ] T003 Move the inline styles into classes. About 1,800 declarations are
       written on the element; a third are colours a token class exists for
       (STYLE-GUIDE §3). Check each screen by eye after: a utility loses to a
       two-class component rule where the inline style used to win.  ~1d
4. [ ] T004 Declare the drawings' geometry once. The four journey graphs, the
       two diagrams on Milk → Paneer and the India map write their shape out in
       the screen (STYLE-GUIDE §3).  ~3h

## Parallel
<!-- [P]: independent of the Now chain, safe to batch into one sitting -->

- [ ] T005 [P] Decide `skills/skills.html`: nothing links to it. Link it from
      somewhere or delete it.
- [ ] T006 [P] Decide the seven season tiles on Home and the other `#` links.
      Each is in `routes.js` under `missing`. Draw the page or stop it being a link.
- [ ] T007 [P] Redraw the six older dossiers as bento  `feat:0002-bento-dossier-for-every-ingredient`
- [ ] T008 [P] Fold the journeys into ingredients  `feat:0001-fold-journeys-into-ingredients`
- [ ] T009 [P] Take `patterns/components.html` out of the site frame and remove
      its lead-in lines: a patterns page carries no prose and no site nav
      (STYLE-GUIDE §5).
- [ ] T010 [P] Draw the narrow layout, or drop "mobile-first" from the README.
      The stylesheet has rules for 900, 640 and 560px and no screen shows them.
- [ ] T011 [P] The Cookbook pill never shows as active: the nav keys it
      `cookbook` and the recipe screens say `recipes`. The prototype had it too.
- [ ] T012 [P] Run `~/git/bin/install-hooks cooking` once this branch is
      merged, so a push runs `~/git/bin/check cooking`.

## Blocked

## Waiting

## Done

- [x] T000 Migrate to the `.context/` standard and convert the prototype to a static design set  done:2026-10-04

## Session Notes

### 2026-10-04
- Done: T000. `prototype/` to `.context/designs/web/` as 39 static screens in
  the shared shell, a wiki written from what the prototype and the README say,
  four feature pages from the README and the 2026-07-19 commits.
- Learned: `.git/info/exclude` in this clone held `.context/`, so nothing under
  it could be added; the line is gone. GitHub Pages is off, so the README's
  deploy note described nothing live. One class, `grad-butter`, was used and
  never declared.
- Next: T001.
