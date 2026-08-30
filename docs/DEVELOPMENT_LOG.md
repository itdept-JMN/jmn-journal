# Development Log — JMN Journal of Medical Sciences

## Phase 1: Environment & Project Setup
- **Date**: 2026-08-29
- **Action**: Project initialized using Next.js 16 (App Router, TypeScript, Tailwind CSS).
- **Configuration**: Configured static HTML export (`output: 'export'`, `images: { unoptimized: true }`) for zero-database static site generation.
- **Docs Directory**: Created dedicated `docs/` repository folder for modular development logs, bug tracking, ISSN compliance audits, and system architecture.

---

## Phase 2: Design System & Tokens Implementation
- **Typography**:
  - Masthead: Cormorant Garamond
  - Editorial Headlines: Source Serif 4
  - Body / UI / Tables: Inter
- **Palette Tokens**:
  - Primary Accent: Maroon `#5B1E1E`
  - Secondary / Card Backgrounds: Cream `#F5EFE6` / `#E8D5B5`
  - Accent Tags: Gold `#B8860B`
  - Neutral Base: Off-white `#FDFBF8`

---

## Phase 3: Core Component Architecture
- `Navbar.tsx`: Sticky slim navigation header featuring masthead wordmark and 10 persistent, indexable top navigation links.
- `Footer.tsx`: Multi-column footer displaying institutional address (Chakdaha), ISSN placeholders, copyright, and tagline ("A Legacy of Learning").
- `JournalParticulars.tsx`: Selectable plain-text data table displaying full bibliographic particulars.
- `EditorialCard.tsx`: Structured board member card displaying full name, role, designation, operating institution address, email, and working external institutional profile link.
- `ArticleCard.tsx`: Article card component showing article type badge, unabbreviated title, authors list, page range, direct individual article PDF button, and full issue PDF link option.

---

## Phase 4: Static Pages Build
1. `/`: Homepage featuring particulars block, about, aim, scope, structured aims & objectives, target audience, and current issue teaser.
2. `/about`: Detailed institutional profile, founding trust details (Deed No. 00096 of 2020), and founding relationship.
3. `/editorial-board`: Complete 14-member roster grouped by role (Editor-in-Chief, Managing Editor, Associate Editors, Assistant Editors, Members, Patron, Advisor).
4. `/author-guidelines`: Full text of manuscript guidelines, article category limits, and ICMJE authorship criteria.
5. `/current-issue`: Table of contents for Vol. 1, Issue 1 (2026) with individual article PDFs and full issue PDF download.
6. `/archives`: Historical archive index organized strictly by Year → Volume → Issue.
7. `/peer-review-ethics`: Double-blind review policy, ICMJE rules, conflict of interest policy, and UGC plagiarism regulations.
8. `/downloads`: Resource hub with downloadable Copyright Transfer Form, Manuscript Template (DOCX), Author Guidelines (PDF), and COI Form.
9. `/submission`: Submission procedures, editorial email, and complete Manuscript Processing Charges table.
10. `/contact`: Institution & Editorial Office address, Editor contact details, and Journal Management Team (IT Executive & Librarian).

---

## Phase 5: Verification & Production Export
- **TypeScript Verification**: Passed (`npx tsc --noEmit`) with 0 errors.
- **Next.js Production Build**: Passed (`next build`) generating 13/13 static prerendered HTML pages.

---

## Phase 6: Application Launcher Script
- **File**: `run.bat`
- **Features**: Checks Node.js runtime, auto-installs dependencies if `node_modules` is missing, opens `http://localhost:3000` in the browser automatically, and starts `npm run dev`.
