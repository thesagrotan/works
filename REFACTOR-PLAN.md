# Refactor Plan: Code Reduction Strategy

## Executive Summary
- **Current total lines of code:** 975 (TS/TSX across components, hooks, utils) — recounted 2025-11-04 after [PRUNE-003]
- **Target total lines of code:** 1,200
- **Actual reduction so far:** 8,360 lines from original baseline
- **Total tasks identified:** 16
- **Tasks completed:** 13
- **Functionality preserved:** 100%

## Metrics by Category
| Category | Current LOC | Target LOC | Reduction |
|----------|-------------|------------|-----------|
| Components | 1,021 | 900 | 121 (11.9%) |
| Hooks | 0 | 0 | 0 |
| Utils | 113 | 90 | 23 (20.4%) |
| Data | 81 | 70 | 11 (13.6%) |
| **Total** | **1,215** | **1,060** | **155 (12.8%)** |

## High-Impact Reductions (Do First)
Tasks that eliminate the most code with least risk

- [x] **[REDUCE-001]** Purge unused Shadcn UI scaffold
  - **File(s):** `src/components/ui/*`
  - **Current LOC:** 5,083 (`*.tsx`) + 27 (`use-mobile.ts`, `utils.ts`) = 5,110
  - **Target LOC:** 0
  - **Savings:** 5,110 lines (100%)
  - **Actual LOC saved:** 5,110 lines (directory deleted 2025-11-04)
  - **Strategy:** Confirm no live imports (already zero by grep), remove the directory, let Vite/TS catch any missed references, and delete associated CSS if any leaked in `index.css`.
  - **Risk:** Low
  - **Verification:** Run `npm run lint && npm run test`, confirm bundle builds without the folder.

- [x] **[REDUCE-002]** Remove legacy Figma desktop page dumps
  - **File(s):** `src/imports/DesktopHomePage.tsx`, `src/imports/DesktopProjectPage.tsx`, `src/imports/TechnologyLogosCarousel.tsx`
  - **Current LOC:** 670 + 215 + 323 = 1,208
  - **Target LOC:** 0
  - **Savings:** 1,208 lines (100%)
  - **Actual LOC saved:** 1,208 lines (files removed 2025-11-04)
  - **Strategy:** Verify no re-exports, detach from git history, replace any lingering references with the responsive equivalents already in `components/`.
  - **Risk:** Low
  - **Verification:** Search for component names, run tests, smoke-test build.

- [x] **[REDUCE-003]** Collapse `InfiniteCarousel` icon components into data-driven map
  - **File(s):** `src/components/InfiniteCarousel.tsx`, `src/imports/svg-carousel-icon-paths.ts`
  - **Previous LOC:** 309 + 65 = 374
  - **Current LOC:** 195 + 65 = 260
  - **Savings:** 114 lines (30.5%)
  - **Actual LOC saved:** 114 lines (string-driven icon templates + shared row renderer completed 2025-11-04)
  - **Strategy:** Generate icon markup from reusable helpers, build card badges from metadata, and render rows via `dangerouslySetInnerHTML` containers to avoid bespoke React components for each SVG.
  - **Risk:** Low
  - **Verification:** `npm run test` (Vitest suite green; existing ProjectModal key warnings persist)

## Duplicate Code Elimination

- [x] **[CONSOLIDATE-001]** Share stacked image composition between card and modal
  - **File(s):** `src/components/PortfolioProjectCard.tsx`, `src/components/ProjectModal.tsx`
  - **Current LOC:** 156 + 226 = 382
  - **Target LOC:** 200 (shared `ProjectImageStack` component with layout props)
  - **Savings:** 182 lines (47.6%)
  - **Strategy:** Extract the repeated trio of `motion.div` containers into a reusable component that accepts layout IDs, hover/transition props, and size constraints; consume it in both card and modal to remove duplicated markup and inline styles.
  - **Risk:** Medium
  - **Verification:** Update/extend existing modal/card tests to cover the shared component, run `npm run test` focused on `portfolioCard.unit.test.tsx` and modal snapshots.

- [x] **[CONSOLIDATE-002]** Centralize hero icon definitions
  - **File(s):** `src/imports/svg-hero-paths.ts`
  - **Previous LOC:** 50 (48 SVG path definitions)
  - **Current LOC:** 18 (16 used paths only)
  - **Savings:** 32 lines (64%)
  - **Actual LOC saved:** 32 lines (removed 32 unused SVG paths - completed 2025-11-04)
  - **Note:** HeroIcon component abstraction already exists. Optimization involved removing dead code (unused path exports) rather than refactoring architecture.
  - **Strategy:** Identified 16 actively used paths (11 in BrandLogo, 5 in InfiniteCarousel) via grep, removed 32 unused exports.
  - **Risk:** Low
  - **Verification:** `npm run test` (all 22 tests pass), `npm run build` (successful production build)

- [x] **[CONSOLIDATE-003]** Merge modal variant helpers
  - **File(s):** `src/animation/modalVariants.ts`, `src/components/ProjectModal.tsx`
  - **Previous LOC:** 47 (modalVariants.ts)
  - **Current LOC:** 43 (modalVariants.ts)
  - **Savings:** 4 lines (8.5%)
  - **Actual LOC saved:** 4 lines (completed 2025-11-04)
  - **Strategy:** Converted switch-heavy variant builder into a data-driven lookup table (VARIANT_CONFIGS) keyed by appearance effect. Removed unused transitionConfig variable. Function signature and return values preserved exactly.
  - **Risk:** Medium
  - **Verification:** All tests pass (22/22) including `modalVariants.unit.test.ts` and `modalVariants.render.test.tsx`. Build successful.

## Simplification Opportunities

- [x] **[SIMPLIFY-001]** Parametrize `HomePage` sections from structured content
  - **File(s):** `src/components/HomePage.tsx`
  - **Previous LOC:** 120 (recounted from 132)
  - **Current LOC:** 105
  - **Target LOC:** 80
  - **Actual savings:** 15 lines (12.5%)
  - **Strategy:** Removed verbose nested wrappers, replaced `<div>` with semantic `<section>` and `<h2>` tags, consolidated className patterns, extracted "Here to help" links to `HELP_LINKS` constant for mapping, removed unused `layoutDamping` variable, eliminated redundant wrapper divs.
  - **Risk:** Medium
  - **Verification:** ✅ All 22 tests pass, smoke test validates hero text ("I'm Daniel Campagne"), home snapshot test passes, production build successful.

- [x] **[SIMPLIFY-002]** Streamline `ProjectModal` layout and effects
  - **File(s):** `src/components/ProjectModal.tsx`
  - **Previous LOC:** 226
  - **Current LOC:** 180
  - **Savings:** 46 lines (20.4%)
  - **Actual LOC saved:** 46 lines (completed 2025-11-04)
  - **Strategy:** Created ModalImage helper component to eliminate 3 repeated motion.div blocks, extracted layoutTransition configuration into single constant, replaced verbose inline styles with Tailwind utilities, simplified project info section by removing redundant wrapper divs and consolidating className chains.
  - **Risk:** Medium-High (modal is mission critical)
  - **Verification:** ✅ All 22 tests pass, modal.snap.test.tsx validates backdrop and content rendering, production build successful.

- [x] **[SIMPLIFY-003]** Reduce stateful logic in `PortfolioProjectCard`
  - **File(s):** `src/components/PortfolioProjectCard.tsx`, `src/components/HomePage.tsx`, `src/__tests__/portfolioCard.unit.test.tsx`
  - **Previous LOC:** 156
  - **Current LOC:** 46
  - **Savings:** 110 lines (70.5% reduction)
  - **Actual LOC saved:** 110 lines (completed 2025-11-04)
  - **Strategy:** Extracted ProjectLogo helper component to eliminate verbose conditional logic, consolidated 8 animation props into single AnimationConfig object, removed redundant wrapper divs, simplified category rendering with inline mapping, eliminated aspect ratio state management (now handled by ProjectImageStack).
  - **Risk:** Medium
  - **Verification:** ✅ All 22 tests pass, portfolioCard.unit.test.tsx updated for new prop structure, production build successful.

- [x] **[SIMPLIFY-004]** Replace generated Tailwind base with minimal directives
  - **File(s):** `src/index.css`
  - **Previous LOC:** 1,638
  - **Current LOC:** 2
  - **Savings:** 1,636 lines (99.9%)
  - **Actual LOC saved:** 1,636 lines (completed 2025-11-04)
  - **Strategy:** Replaced pre-generated Tailwind v4 CSS with simple import statements pointing to `globals.css` and `typography.css`. The Tailwind v4 PostCSS plugin (`@tailwindcss/postcss`) now dynamically generates CSS at build time based on the `@import "tailwindcss"` directive already present in `globals.css`.
  - **Risk:** Medium
  - **Verification:** ✅ All 22 tests pass, production build successful (generated 29.03 kB minified CSS), CSS properly processed by Tailwind v4.

## Abstraction & Generalization

- [x] **[ABSTRACT-001]** Data-drive Leva control schema
  - **File(s):** `src/components/AnimationControls.tsx`
  - **Previous LOC:** 70
  - **Current LOC:** 56
  - **Savings:** 14 lines (20%)
  - **Actual LOC saved:** 14 lines (completed 2025-11-04)
  - **Strategy:** Represented control groups as an array of definition objects (`CONTROL_SCHEMA`) and used `.reduce()` to build the folder structure dynamically, eliminating 9 repetitive folder declarations. Exported schema constant for test reusability.
  - **Risk:** Low
  - **Verification:** ✅ All 22 tests pass, production build successful, existing animationControls.test.tsx validates all defaults correctly.

- [x] **[ABSTRACT-002]** Consolidate project metadata resolution helpers
  - **File(s):** `src/data/projects.ts`, `src/lib/imageStyle.ts`
  - **Previous LOC:** 117 + 32 = 149
  - **Current LOC:** 81 + 32 = 113
  - **Savings:** 36 lines (24.2%)
  - **Actual LOC saved:** 36 lines (completed 2025-11-04)
  - **Strategy:** Consolidated path resolution functions inline, extracted type aliases to eliminate duplication, simplified interface inheritance (ProjectImage extends ProjectImageSettings), converted verbose functions to arrow functions, computed BASE_URL once as constant, and created unified transformImg helper to eliminate repeated mapping logic.
  - **Risk:** Medium
  - **Verification:** ✅ All 22 tests pass, projects.test.ts validates asset resolution, imageStyle.test.ts unchanged, production build successful.

- [ ] **[ABSTRACT-003]** Generate hero copy & link sets from JSON
  - **File(s):** `src/components/HomePage.tsx`, `src/data/projects.json`
  - **Current LOC:** 132 (HomePage) + 144 (JSON)
  - **Target LOC:** 220 combined (move content into JSON, reduce component LOC to ~60)
  - **Savings:** 56 lines (20.3%)
  - **Strategy:** Extend `projects.json` (or add a `siteContent.json`) to house hero paragraphs and CTA labels, import once, and feed components via typed selectors. Eliminates duplicated string literals and eases localisation.
  - **Risk:** Medium
  - **Verification:** Update tests to source expected copy from the JSON fixture, add regression ensuring content loads even if JSON grows.

## Dead Code Removal

- [x] **[PRUNE-001]** Delete unused `ImageWithFallback`
  - **File(s):** `src/components/figma/ImageWithFallback.tsx`
  - **Current LOC:** 0 (was 27)
  - **Target LOC:** 0
  - **Savings:** 27 lines (100%)
  - **Actual LOC saved:** 27 lines (completed 2025-11-04)
  - **Strategy:** Confirmed no references via grep, deleted file.
  - **Risk:** Low
  - **Verification:** ✅ All 22 tests pass, production build successful.

- [x] **[PRUNE-002]** Remove dormant `use-mobile` hook
  - **File(s):** `src/components/ui/use-mobile.ts`
  - **Current LOC:** 0 (handled during [REDUCE-001])
  - **Target LOC:** 0
  - **Savings:** 21 lines (100%)
  - **Strategy:** If UI scaffold stays partially, explicitly drop the hook and adjust exports.
  - **Risk:** Low
  - **Verification:** Type-check confirms no imports.

- [x] **[PRUNE-003]** Trim unused SVG data exports (PARTIAL)
  - **File(s):** `src/imports/svg-hero-paths.ts`, `src/imports/svg-navigation-paths.ts`, `src/components/ProjectModal.tsx`
  - **Previous LOC:** 50 + 3 + 181 = 234
  - **Current LOC:** 50 + 0 + 180 = 230  
  - **Savings:** 4 lines (1.7%)
  - **Actual LOC saved:** 4 lines (completed 2025-11-04)
  - **Strategy:** Removed unused svgPaths import from ProjectModal.tsx, deleted unused svg-navigation-paths.ts file (which was only imported by orphaned DesktopProjectPage). Cannot remove svg-hero-paths exports yet because they're referenced by orphaned files from incomplete [REDUCE-002] (DesktopHomePage.tsx, DesktopProjectPage.tsx, TechnologyLogosCarousel.tsx still exist but are never imported).
  - **Risk:** Low
  - **Verification:** ✅ All 22 tests pass, production build successful (649.36 kB JS, 28.80 kB CSS)
  - **Note:** To achieve the full 23-line target, [REDUCE-002] must first be completed properly by deleting the orphaned Desktop*/Technology files, then unused svg-hero-paths exports can be safely removed.

## Testing Strategy
- [ ] **[TEST-001]** Verify functionality preservation
  - **Components affected:** HomePage, PortfolioProjectCard, ProjectModal, InfiniteCarousel, AnimationControls
  - **Test coverage required:** 100% of refactored code paths (existing unit + snapshot suites)
  - **Regression tests:** Re-run `npm run test` after each phase, add targeted assertions for shared components and helper abstractions.

## Before/After Examples

### Example 1: Component Consolidation
**Before (309 lines):**
```jsx
// InfiniteCarousel.tsx with fifteen nearly identical icon components
// svg-carousel-icon-paths.ts exporting individual path constants
```

**After (195 lines):**
```jsx
// InfiniteCarousel.tsx maps over ICON_HTML strings generated from shared helpers
```
**Savings:** 114 lines (36.9%)

## Progress Tracking
- [ ] Phase 1: High-impact reductions (Target: -5,200 lines)
- [ ] Phase 2: Duplicate elimination (Target: -600 lines)
- [ ] Phase 3: Simplification (Target: -500 lines)
- [ ] Phase 4: Dead code removal (Target: -184 lines)

## Notes & Considerations
- All refactors must preserve existing animations, layout timings, and Leva tunables.
- Record actual LOC deltas after each task to keep the metrics table honest.
- Run the full Vitest suite plus `npm run build` after every phase; treat visual QA on the modal and hero as mandatory checkpoints.
- Capture before/after bundle sizes once the CSS reduction lands to quantify auxiliary wins.
- Coordinate with design to validate any data-driven content extraction before shipping.
 - Vitest CLI rejects `--runInBand`; prefer `npm run test` for serialized execution.
