# JMN Journal of Medical Sciences

> **Official Open-Access, Biannual, Double-Blind Peer-Reviewed Medical Journal**  
> Published by **JMN Education and Research Foundation**, Kalyani, West Bengal, India  
> Affiliated Institution: **JMN Medical College and Hospital**, Chakdaha, Nadia, West Bengal, India

---

## Overview

**JMN Journal of Medical Sciences** is a multidisciplinary, peer-reviewed medical publication committed to publishing high-quality clinical investigations, biomedical research, reviews, case reports, and educational articles.

This repository hosts the static-exported official website built to adhere to strict **ISSN India** guidelines, international publishing standards (ICMJE), and academic indexing best practices (Highwire Press metadata tags, Vancouver citation formats, un-gated open access).

---

## Journal Particulars

| Field | Value |
|---|---|
| **Title** | JMN Journal of Medical Sciences |
| **ISSN (Online)** | *Application in process (ISSN India)* |
| **ISSN (Print)** | *Application in process (ISSN India)* |
| **Frequency** | Biannual (2 Issues / Year) |
| **Language** | English |
| **Starting Year** | 2025 |
| **Publication Format** | Online & Print |
| **Subject** | Medical Sciences |
| **Editor-in-Chief** | Dr. Chandana Chakraborti |
| **Publisher** | JMN Education and Research Foundation, Kalyani, Nadia, West Bengal, India |
| **Institution** | JMN Medical College and Hospital, Chakdaha, Nadia, West Bengal, India |
| **Access Model** | Open Access (Zero Login / Zero Paywall) |

---

## Published Volumes & Issues

### Volume 2, Issue 1 (Jan–Jun 2026) — *Current Issue*
- **Issue Period**: January–June 2026
- **Total Articles**: 6 Articles (pp. 1–27) + Full Issue PDF & Cover Page
- **Featured Articles**:
  - *Knowledge, Attitude, and Practice on Cervical Cancer Screening Among Tribal Women* (pp. 1–5)
  - *Evaluation of Renal Function Tests in Type 2 Diabetes Mellitus* (pp. 6–9)
  - *Geospatial Assessment of Vector-Borne Disease Vulnerability: A Spatial Analysis* (pp. 10–15)
  - *Comparative Evaluation of Fluoride Concentration in Drinking Water Sources* (pp. 16–19)
  - *Adult Intestinal Malrotation Presenting as Acute Midgut Volvulus* (pp. 20–22)
  - *Public Health and Environmental Implications of Electronic Waste Disposal* (pp. 23–27)

### Volume 1, Issue 1 (Jul–Dec 2025) — *Inaugural Issue*
- **Issue Period**: July–December 2025
- **Total Articles**: Inaugural Editorial (pp. 1–2) + 5 Original Articles (pp. 3–30)
- **Featured Articles**:
  - *Inaugural Editorial: Charting New Frontiers in Clinical Medicine and Public Health* (pp. 1–2)
  - *Antimicrobial Susceptibility Profiles of Uropathogens in a Tertiary Care Hospital* (pp. 3–9)
  - *Role of High-Resolution Computed Tomography in the Evaluation of Diffuse Interstitial Lung Disease* (pp. 10–15)
  - *Prevalence of Subclinical Hypothyroidism in First-Trimester Pregnancy* (pp. 16–20)
  - *Assessment of Glycaemic Control and Lipid Profile in Patients with Metabolic Syndrome* (pp. 21–25)
  - *Surgical Management of Impacted Mesiodens in Pediatric Patients: A Case Series* (pp. 26–30)

---

## Key Technical Specifications

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS with custom editorial design tokens (`#5B1E1E` Maroon, `#E8D5B5` Cream, `#B8860B` Gold, `#FDFBF8` Off-white)
- **Typography**: Cormorant Garamond (masthead), Source Serif 4 (headlines), Inter (body)
- **Output Mode**: Static Site Generation (`output: 'export'`) with unoptimized static images for deployment to any CDN/server
- **SEO & Indexing**:
  - Google Scholar / Highwire Press compliant metadata tags (`citation_title`, `citation_author`, `citation_publication_date`, `citation_journal_title`, `citation_volume`, `citation_issue`, `citation_firstpage`, `citation_lastpage`, `citation_pdf_url`)
  - Semantic HTML5, canonical URLs, and OpenGraph/Twitter card tags
- **ISSN Compliance**:
  - 100% plain-text selectable data for all particulars and editorial board rosters
  - Uniform Subject identifier: `"Medical Sciences"` across all endpoints
  - Strict volume-per-calendar-year structure (`2025 = Vol 1`, `2026 = Vol 2`)
  - Permanent running bibliographic headers/footers on all individual article PDFs and issue assemblies

---

## Project Structure

```
jmn-journal/
├── app/
│   ├── layout.tsx                     # Root layout with fonts, metadata, Navbar & Footer
│   ├── page.tsx                       # Homepage with particulars, aims, scope & teaser
│   ├── about/page.tsx                 # About the journal & founding trust history
│   ├── editorial-board/page.tsx       # 14-member editorial board with verified external profiles
│   ├── author-guidelines/page.tsx     # Full author submission instructions & ICMJE policies
│   ├── current-issue/page.tsx         # Volume 2, Issue 1 Table of Contents & PDF downloads
│   ├── archives/page.tsx              # Chronological archive (Year -> Volume -> Issue)
│   ├── article/[slug]/                # Static SSG route for individual article landing pages
│   ├── peer-review-ethics/page.tsx    # Peer review workflow, ethics & UGC plagiarism standards
│   ├── downloads/page.tsx             # Forms, templates, and full issue PDFs
│   ├── submission/page.tsx            # Submission steps & Article Processing Charges
│   └── contact/page.tsx               # Editorial office, institution address & management team
├── components/
│   ├── Navbar.tsx                     # Sticky slim header with crest logo and navigation
│   ├── Footer.tsx                     # Multi-column footer with addresses, copyright & particulars
│   ├── ArticleCard.tsx                # Reusable article card with type badge, citation & links
│   ├── JournalParticulars.tsx         # Selectable table of journal particulars
│   └── EditorialCard.tsx              # Board member card with institutional credentials
├── content/
│   └── issues/
│       ├── 2025-v1-i1.json            # Volume 1, Issue 1 structured data
│       └── 2026-v2-i1.json            # Volume 2, Issue 1 structured data
├── docs/
│   ├── BUGS_AND_ISSUES.md             # Resolved issues log and build audit reports
│   ├── DEVELOPMENT_LOG.md             # Chronological development and release phases
│   ├── ISSN_COMPLIANCE_CHECKLIST.md   # ISSN India compliance verification matrix
│   └── SYSTEM_ARCHITECTURE.md         # Full architecture, sitemap & data schemas
├── lib/
│   ├── articles.ts                    # Article helper utilities
│   └── issues.ts                      # Issue registry, bibliographic labels & Vancouver citations
├── public/
│   └── articles/                      # Processed PDFs for all issues and articles
│       ├── 2025-v1-i1/
│       └── 2026-v2-i1/
├── tools/
│   └── pdf-bibliographic/             # PyMuPDF scripts for PDF metadata & issue assembly
├── run.bat                            # Windows one-click launcher
└── next.config.ts                     # Next.js static export configuration
```

---

## Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or later
- **npm** / **yarn** / **pnpm**

### Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

Or double-click `run.bat` on Windows to check dependencies, start the dev server, and open your browser automatically.

### Production Static Build
```bash
npm run build
```
This runs TypeScript checking and Turbopack static export, generating the fully prerendered static site into the `out/` directory ready for deployment.

---

## PDF Bibliographic Tooling

The Python scripts in `tools/pdf-bibliographic/` utilize PyMuPDF (`fitz`) to ensure bibliographic compliance:
- `fixpdfs.py`: Performs true text redaction of outdated running footers, stamps ISSN-compliant first-page strips and continuous running footers, and updates PDF metadata keywords.
- `build_issue.py`: Assembles complete issue PDFs with high-resolution covers, dynamically generated table of contents, article sequences, and bookmarks.

---

## License & Copyright

© 2025–2026 **JMN Journal of Medical Sciences**. Published by **JMN Education and Research Foundation**.  
All articles are published under the [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) license.
