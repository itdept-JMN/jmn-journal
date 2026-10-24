# Bugs and Issues Log — JMN Journal of Medical Sciences

This log tracks bugs, build errors, warning resolutions, and linting fixes encountered during development and maintenance.

---

## Resolved Bugs & Technical Audit

| Bug ID | Component / Area | Description | Root Cause | Resolution / Fix | Status |
|---|---|---|---|---|---|
| BUG-001 | Project Setup | `create-next-app` blocked due to pre-existing `JMN_Website_Build_Instructions_1.md` file | `create-next-app` requires empty or clean directory | Initialized setup in temporary directory `temp-app` and transferred configuration files | **RESOLVED** |
| BUG-002 | SSG Image Export | Potential static HTML export failure when using `<Image>` without unoptimized flag | Static export cannot run server-side image optimization Node server | Added `images: { unoptimized: true }` to `next.config.ts` | **RESOLVED** |
| BUG-003 | ISSN Compliance | Volume numbering & pagination mismatch flagged in ISSN India preliminary query | Previous layout ran Vol 1 across both 2025 and 2026; missing continuous pagination and complete running header/footer | Renumbered 2025 to Vol 1, Issue 1 (Jul–Dec 2025) and 2026 to Vol 2, Issue 1 (Jan–Jun 2026); created central `lib/issues.ts` registry; stamped standardized bibliographic headers/footers on all PDFs | **RESOLVED** |
| BUG-004 | Layout Hydration | Console hydration warning on `<html>` tag and unused `BookOpen` import in layout | Browser extensions modifying DOM attributes before hydration; leftover unreferenced icon import | Added `suppressHydrationWarning` to `<html>` and cleaned up unused `BookOpen` import | **RESOLVED** |
| BUG-005 | Geospatial Article | Abridged text and missing co-author in Vol 2, Issue 1 geospatial study | Initial PDF supplied by authors was an abridged draft omitting third author Dr. Anurag Mondal and figures | Re-typeset article in full (6 pages, pp. 10–15) from author's Word document; added Dr. Anurag Mondal (AIIMS Guwahati) to byline, citation, and metadata; re-adjusted subsequent article page numbers | **RESOLVED** |
| BUG-006 | Mesiodens Article | Author name order and citation formatting in Vol 1, Issue 1 case series | Author names were listed as initials/surname without clear first names, and asterisk markers were ambiguously applied | Corrected author names to "Rahul Sahoo" and "Rishita Hari"; citation formatted as "Sahoo R, Hari R"; corresponding author marker placed exclusively on Dr. Rahul Sahoo | **RESOLVED** |

---

## Build & Verification Audit Results

- **Environment**: Next.js 16.3.3 (Turbopack Engine), React 19, TypeScript 5
- **TypeScript Type Checking (`npx tsc --noEmit`)**: Completed with **0 errors**.
- **Next.js Static Build (`next build`)**: Completed in 9.0s with **26/26 static routes prerendered cleanly**.
- **Prerendered Route Inventory**:
  - `○ /` (Home)
  - `○ /about`
  - `○ /editorial-board`
  - `○ /author-guidelines`
  - `○ /current-issue`
  - `○ /archives`
  - `○ /peer-review-ethics`
  - `○ /downloads`
  - `○ /submission`
  - `○ /contact`
  - `● /article/2026-v2-i1-article-01`
  - `● /article/2026-v2-i1-article-02`
  - `● /article/2026-v2-i1-article-03`
  - `● /article/2026-v2-i1-article-04`
  - `● /article/2026-v2-i1-article-05`
  - `● /article/2026-v2-i1-article-06`
  - `● /article/2025-v1-i1-article-01`
  - `● /article/2025-v1-i1-article-02`
  - `● /article/2025-v1-i1-article-03`
  - `● /article/2025-v1-i1-article-04`
  - `● /article/2025-v1-i1-article-05`
  - `● /article/2025-v1-i1-editorial`
  - `○ /_not-found`
  - `○ /icon.png`
