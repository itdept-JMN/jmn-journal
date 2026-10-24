# ISSN India Compliance & Requirement Audit Checklist

> **JMN Journal of Medical Sciences**  
> Comprehensive audit checklist tracking strict compliance with ISSN India requirements, publisher specifications, and academic indexing standards.

---

## ISSN India Core Criteria Verification

- [x] **Rule 1: Selectable Plain Text Data**  
  *Status*: Fully Verified.  
  *Implementation*: All journal particulars, full 14-member Editorial Board data, publisher addresses, and contact details exist as selectable, screen-reader-accessible HTML text, never flattened inside images or graphics.

- [x] **Rule 2: Uniform Subject String**  
  *Status*: Fully Verified.  
  *Implementation*: The subject identifier is explicitly and identically set to `"Medical Sciences"` across the homepage particulars block, metadata tags, about section, and site footer. No divergent phrases (e.g., "Multidisciplinary", "Healthcare") are used.

- [x] **Rule 3: Complete Bibliographic Details on All Article PDFs**  
  *Status*: Fully Verified (Updated per 23 Oct 2026 ISSN query).  
  *Implementation*: Every individual article PDF carries:
  - **First-page bibliographic strip**: `JMN Journal of Medical Sciences • Volume X, Issue Y, Period • pp. a–b`
  - **Running footers on every subsequent page**: Full journal title and continuous page numbers
  - **Standardized "How to cite" line**: Vancouver format with official abbreviation (`JMN J Med Sci. YYYY Mon–Mon;V(I):pages`)
  - **Embedded PDF Metadata**: `/Title`, `/Author`, `/Subject`, and `/Keywords` systematically populated.

- [x] **Rule 3a: Strict Volume / Issue Numbering Structure**  
  *Status*: Fully Verified.  
  *Implementation*: One volume is allocated per calendar year:
  - **2025**: *Volume 1, Issue 1, Jul–Dec 2025* (Inaugural issue)
  - **2026**: *Volume 2, Issue 1, Jan–Jun 2026* (Current issue)  
  *Note*: Former draft naming `2026-v1-i2` was completely renumbered and migrated to `2026-v2-i1`.

- [x] **Rule 4: Article Access & PDF Distribution**  
  *Status*: Fully Verified.  
  *Implementation*: Individual article pages and direct PDF downloads are provided for all 12 published items. In addition, full-issue assembled PDFs with covers and bookmarks are available for download per user approval.

- [x] **Rule 5: No Title Abbreviations**  
  *Status*: Fully Verified.  
  *Implementation*: Full, unabbreviated article titles are reproduced verbatim across tables of contents, article detail pages, citations, and PDF document metadata.

- [x] **Rule 6: Working Outbound Links**  
  *Status*: Fully Verified.  
  *Implementation*: All internal navigation routes, download links, and external links resolve cleanly without 404s.

- [x] **Rule 7: Real Institutional Faculty Profile URLs**  
  *Status*: Fully Verified.  
  *Implementation*: Editorial Board members link directly to verified official departmental faculty pages hosted on their respective institutional domains (e.g., AIIMS, Medical Colleges), not internal or placeholder pages.

- [x] **Rule 8: Complete Launch Content (No Placeholders)**  
  *Status*: Fully Verified.  
  *Implementation*: The site contains complete, final content across all sections. Zero "Under Construction", "Coming Soon", or blank placeholder pages exist.

- [x] **Rule 9: Distinct & Complete Publisher / Institution Details**  
  *Status*: Fully Verified.  
  *Implementation*: Two distinct addresses are clearly displayed and never conflated:
  - **Publisher**: JMN Education and Research Foundation, A-2/15, P.O. & P.S. Kalyani, Dist. Nadia, PIN-741235, West Bengal, India
  - **Institution & Editorial Office**: JMN Medical College and Hospital, Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN-741222, West Bengal, India.

- [x] **Rule 10: Open Access with Zero Login Walls**  
  *Status*: Fully Verified.  
  *Implementation*: All issues, articles, tables of contents, guidelines, and downloads are completely open-access with zero login, account creation, or paywall restrictions.

---

## Technical & Architectural Compliance

- [x] **Multi-Page App Router Structure**: Built as 10 distinct top-level routes plus 12 individual article SSG routes, avoiding single-page anchor jumps.
- [x] **Static Site Generation (SSG)**: 100% prerendered static HTML export with zero server-side database dependency.
- [x] **Highwire Press Meta Tags**: Emitted dynamically on all article routes for Google Scholar indexing:
  - `citation_title`
  - `citation_author`
  - `citation_publication_date`
  - `citation_journal_title`
  - `citation_volume`
  - `citation_issue`
  - `citation_firstpage`
  - `citation_lastpage`
  - `citation_pdf_url`
- [x] **Mobile Responsiveness & Semantic Accessibility**: Verified on mobile, tablet, and desktop viewports with WCAG-compliant color contrast.
