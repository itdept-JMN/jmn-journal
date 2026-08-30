# Bugs and Issues Log — JMN Journal of Medical Sciences

This log tracks bugs, build errors, warning resolutions, and linting fixes encountered during development.

---

## Resolved Bugs & Technical Audit

| Bug ID | Component / Area | Description | Root Cause | Resolution / Fix | Status |
|---|---|---|---|---|---|
| BUG-001 | Project Setup | `create-next-app` blocked due to pre-existing `JMN_Website_Build_Instructions_1.md` file | `create-next-app` requires empty or clean directory | Initialized setup in temporary directory `temp-app` and transferred configuration files | **RESOLVED** |
| BUG-002 | SSG Image Export | Potential static HTML export failure when using `<Image>` without unoptimized flag | Static export cannot run server-side image optimization Node server | Added `images: { unoptimized: true }` to `next.config.ts` | **RESOLVED** |

---

## Build & Verification Audit Results

- **TypeScript Type Checking (`npx tsc --noEmit`)**: Completed in 2.7s with **0 errors**.
- **Next.js Static Export (`next build`)**: Completed in 4.5s with **13/13 static routes prerendered cleanly**.
- **Route Status**:
  - `/` (Home) — Static
  - `/about` — Static
  - `/editorial-board` — Static
  - `/author-guidelines` — Static
  - `/current-issue` — Static
  - `/archives` — Static
  - `/peer-review-ethics` — Static
  - `/downloads` — Static
  - `/submission` — Static
  - `/contact` — Static
