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

---

## Phase 7: ISSN India Query — Bibliographic Details & Volume Numbering (23 Oct 2026)
- **Query**: Archive, TOC, current issue and article PDFs lacked complete bibliographic details; volume must stay constant within a year and change across years.
- **Renumbering**: Dec 2025 issue → *Volume 1, Issue 1, Jul–Dec 2025*; July 2026 issue (was Vol. 1, No. 2) → *Volume 2, Issue 1, Jan–Jun 2026*. Folder/slug `2026-v1-i2` → `2026-v2-i1`.
- **Article PDFs**: old footers and citation lines removed (true text redaction) and replaced with: first-page strip and every-page footer "JMN Journal of Medical Sciences • Volume X, Issue Y, period • pp. a–b", continuous page numbers, corrected "How to cite" (JMN J Med Sci. YYYY Mon–Mon;V(I):pages). PDF metadata (subject/keywords) carries the same details.
- **Pagination corrected**: V1I1 editorial 1–2, articles 3–30. V2I1 articles 1–26 (fluoride 15–18, malrotation 19–21, e-waste 22–26). Stray duplicate page removed from end of e-waste PDF.
- **Full-issue PDFs rebuilt**: cover (new Vol/Issue band, "BI-ANNUAL" spelling) → regenerated Contents page → articles in TOC order → Author Guidelines → back page, with bookmarks. The V1I1 inaugural editorial is no longer reprinted in V2I1.
- **Website**: central `lib/issues.ts` (issue registry, `bibLabel`, Vancouver citation with correct abbreviation `JMN J Med Sci`); archives built Year → Volume → Issue from data; current-issue page shows full Vol/Issue/period + Full Issue PDF and Cover buttons; article pages emit Highwire `citation_*` meta tags.
- **Superseded files** moved (not deleted) to `_junk_for_review/` (git- and docker-ignored).
- **Re-usable tooling**: `tools/pdf-bibliographic/` (PyMuPDF scripts used to stamp and assemble issues).

## Phase 8: Author Corrections (24 Oct 2026)
- **Geospatial article (Vol 2, Issue 1)**: re-typeset from the authors' Word file (`tools/pdf-bibliographic/geospatial-source/`), full unabridged text, third author **Dr. Anurag Mondal** (Senior Resident, Dept. of Community and Family Medicine, AIIMS Guwahati; ORCID 0009-0000-4508-7291) added to byline, citation and website. Table 1 and Figures 1–2 now placed in the text near their first reference; back matter (Limitations, Authors' Contribution, Funding, Conflict of Interest, Acknowledgement, AI declaration) added. Article grows to 6 pages: pp. 10–15; following articles renumbered (fluoride 16–19, malrotation 20–22, e-waste 23–27).
- **Mesiodens article (Vol 1, Issue 1)**: author names corrected to first name + surname — Rahul Sahoo, Rishita Hari; citation "Sahoo R, Hari R"; corresponding author line updated; asterisk kept only on the corresponding author (Dr. Rahul Sahoo).
