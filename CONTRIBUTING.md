# Contributing Guide — Responsive Portfolio Website

Welcome! This project follows a strict “fidelity-first” refactor discipline. All changes must preserve externally observable behavior unless explicitly recorded, tested, and approved. Please read and follow the policies below.

## Five Laws of Code Restructuring (authoritative)
1. Behavior first: Preserve externally observable behavior exactly. No output/log/DOM string/class/timing changes unless recorded, tested, and approved.
2. Map before change: Trace code paths and data flow before refactoring; make changes only with a verified map and tests.
3. Small steps only: Keep diffs minimal, production-surface neutral, and replace with thin stubs first.
4. Traceability: Every new symbol maps back to an original via diffs, inline comment tags, and tests proving equivalence.
5. Double-blind checks: All refactors require automated tests and independent verification (typecheck/lint/build + golden diff/snapshots where applicable).

## Inline comment tags policy
Use these exact tags in diffs to document intent without changing behavior:
- `// AI_GOOD:` Confirmed faithful logic or improved clarity without behavior change.
- `// AI_CLARIFY:` Ambiguity requiring human confirmation; preserve old behavior for now.
- `// AI_BUG:` Found defect in original; replicate first, add failing test, then propose fix in a separate task/PR.
- `// AI_OTHER:` Notes that don’t fit the above (tooling, performance, constraints).

Keep public APIs, imports, outputs, DOM structure, CSS classes, and timings identical unless a task explicitly records a safe change. Prefer ≤50-line logical units, self-descriptive names, and explicit data flow.

## Change process
- One atomic task per PR; include task ID from `REFACTOR_PLAN.md` in the branch and commit messages.
- Update tests and baselines as required by the task only. Do not broaden scope.
- Avoid class reordering in Tailwind; preserve class string order to prevent unintended diffs.
- Do not introduce new globals or widen component/component-prop surface areas.

## Required PR checklist (Fidelity Checklist)
Before requesting review, please confirm:
- [ ] Five Laws respected (1–5)
- [ ] Public surface unchanged (APIs/props/exports)
- [ ] Behavior unchanged (DOM strings/classes/logs/timings) unless explicitly recorded
- [ ] Tests updated/added as per task; snapshots/baselines green
- [ ] Typecheck PASS (`npm run typecheck`)
- [ ] Tests PASS (`npm test`)
- [ ] Build PASS (`npm run build`)
- [ ] Inline AI_* tags present where relevant (AI_GOOD/AI_CLARIFY/AI_BUG/AI_OTHER)

## Commit and branch conventions
- Branch naming: `refactor/T{ID}-{kebab-task}` (e.g., `refactor/T005-extract-portfolio-card`)
- Commit message template: `refactor(scope): concise description — T{ID}` (use `chore`, `test`, `docs` as appropriate)

Thank you for helping us keep refactors safe, traceable, and verifiable.