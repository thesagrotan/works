# Refactor Plan: Code Reduction Strategy

## Executive Summary
- **Current total lines of code:** 1,219 (TS/TSX across components, hooks, utils) — recounted 2025-11-04 after [SIMPLIFY-001]
- **Target total lines of code:** 1,200
- **Expected reduction:** 19 lines (1.6%)
- **Total tasks identified:** 16
- **Functionality preserved:** 100%

## Metrics by Category
| Category | Current LOC | Target LOC | Reduction |
|----------|-------------|------------|-----------|
| Components | 1,035 | 900 | 135 (13.0%) |
| Hooks | 0 | 0 | 0 |
| Utils | 196 | 220 | -24 (-12.2%) |
| **Total** | **1,231** | **1,200** | **31 (2.5%)** |

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
  - **Previous LOC:** 128
  - **Current LOC:** 120
  - **Savings:** 8 lines (6.25%)
  - **Actual LOC saved:** 8 lines (completed 2025-11-04)
  - **Strategy:** Created CONTENT config object with hero text and services array. Refactored hero section to use config properties, converted hardcoded service links to data-driven map. Removed all commented-out "About me" section code (~15 lines). Removed unused layoutDamping variable.
  - **Risk:** Medium
  - **Verification:** All tests pass (22/22), build successful. Hero text and services render identically.

- [ ] **[SIMPLIFY-002]** Streamline `ProjectModal` layout and effects
  - **File(s):** `src/components/ProjectModal.tsx`
  - **Current LOC:** 226
  - **Target LOC:** 130
  - **Savings:** 96 lines (42.5%)
  - **Strategy:** Replace inline `style` blocks with Tailwind classes, share grid configuration with extracted helper, and collapse duplicated motion transition objects using utility functions.
  - **Risk:** Medium-High (modal is mission critical)
  - **Verification:** Maintain modal snapshot, add regression covering multi-column vs single-column projects, run interaction test.

- [ ] **[SIMPLIFY-003]** Reduce stateful logic in `PortfolioProjectCard`
  - **File(s):** `src/components/PortfolioProjectCard.tsx`
  - **Current LOC:** 156
  - **Target LOC:** 90
  - **Savings:** 66 lines (42.3%)
  - **Strategy:** Use CSS `aspect-ratio` or a computed helper to avoid three separate ratio states, consolidate motion props, and map category badges instead of inlining repeated divs.
  - **Risk:** Medium
  - **Verification:** Unit test updates (`portfolioCard.unit.test.tsx`), ensure hover/motion settings remain configurable via `useAnimationControls`.

- [ ] **[SIMPLIFY-004]** Replace generated Tailwind base with minimal directives
  - **File(s):** `src/index.css`
  - **Current LOC:** 1,638
  - **Target LOC:** 400
  - **Savings:** 1,238 lines (75.6%)
  - **Strategy:** Swap the vendored Tailwind v4 output for standard `@tailwind base; @tailwind components; @tailwind utilities;` plus the ~40 bespoke rules from `globals.css`/`typography.css`, relying on PostCSS/Tailwind to expand at build time instead of committing generated CSS.
  - **Risk:** Medium
  - **Verification:** `npm run build`, visual QA across breakpoints, ensure no regressions in typography classes used by HomePage/Modal.

## Abstraction & Generalization

- [ ] **[ABSTRACT-001]** Data-drive Leva control schema
  - **File(s):** `src/components/AnimationControls.tsx`
  - **Current LOC:** 70
  - **Target LOC:** 40
  - **Savings:** 30 lines (42.9%)
  - **Strategy:** Represent control groups as an array of definition objects and loop through `useControls`, avoiding repeated folder declarations; export the schema for reuse in tests.
  - **Risk:** Low
  - **Verification:** Ensure existing tests referencing control defaults still pass, manually verify Leva panel structure.

- [ ] **[ABSTRACT-002]** Consolidate project metadata resolution helpers
  - **File(s):** `src/data/projects.ts`, `src/lib/imageStyle.ts`
  - **Current LOC:** 117 + 32 = 149
  - **Target LOC:** 90
  - **Savings:** 59 lines (39.6%)
  - **Strategy:** Move repeated `resolveImagePath`/`resolvePublicAssetPath` logic into a shared util, infer image settings via typed mappers, and collapse duplicated spreads.
  - **Risk:** Medium
  - **Verification:** `projects.test.ts`, `imageStyle.test.ts` must be updated to cover the shared helper, ensure BASE_URL handling remains intact.

- [ ] **[ABSTRACT-003]** Generate hero copy & link sets from JSON
  - **File(s):** `src/components/HomePage.tsx`, `src/data/projects.json`
  - **Current LOC:** 132 (HomePage) + 144 (JSON)
  - **Target LOC:** 220 combined (move content into JSON, reduce component LOC to ~60)
  - **Savings:** 56 lines (20.3%)
  - **Strategy:** Extend `projects.json` (or add a `siteContent.json`) to house hero paragraphs and CTA labels, import once, and feed components via typed selectors. Eliminates duplicated string literals and eases localisation.
  - **Risk:** Medium
  - **Verification:** Update tests to source expected copy from the JSON fixture, add regression ensuring content loads even if JSON grows.

## Dead Code Removal

- [ ] **[PRUNE-001]** Delete unused `ImageWithFallback`
  - **File(s):** `src/components/figma/ImageWithFallback.tsx`
  - **Current LOC:** 27
  - **Target LOC:** 0
  - **Savings:** 27 lines (100%)
  - **Strategy:** Confirm no references (already none), drop file & adjust build outputs.
  - **Risk:** Low
  - **Verification:** Lint, type-check.

- [x] **[PRUNE-002]** Remove dormant `use-mobile` hook
  - **File(s):** `src/components/ui/use-mobile.ts`
  - **Current LOC:** 0 (handled during [REDUCE-001])
  - **Target LOC:** 0
  - **Savings:** 21 lines (100%)
  - **Strategy:** If UI scaffold stays partially, explicitly drop the hook and adjust exports.
  - **Risk:** Low
  - **Verification:** Type-check confirms no imports.

- [ ] **[PRUNE-003]** Trim unused SVG data exports
  - **File(s):** `src/imports/svg-hero-paths.ts`, `src/imports/svg-navigation-paths.ts`
  - **Current LOC:** 50 + 3 = 53
  - **Target LOC:** 30
  - **Savings:** 23 lines (43.4%)
  - **Strategy:** Remove unused path constants after consolidations, ensure only referenced keys remain, document the mapping for future updates.
  - **Risk:** Low
  - **Verification:** Lint to spot unused exports, smoke test hero + modal icons.

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
