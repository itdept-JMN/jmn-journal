# JMN Journal of Medical Sciences — Website Build Instructions

**Purpose of this document:** a complete, self-contained build brief for an autonomous coding agent. It covers what to build, with what content, in what structure, and the compliance rules that are non-negotiable because they come directly from ISSN India's published guidelines and from a real prior ISSN application's correction history. Follow it literally — several of the rules below exist because a near-identical journal from the same publisher lost months to violating them.

---

## 1. What this is

An official, publicly accessible, open-access website for **JMN Journal of Medical Sciences** — a biannual, double-blind peer-reviewed medical journal published by **JMN Education and Research Foundation**, the founding trust of **JMN Medical College and Hospital**, Kalyani, West Bengal, India. The site must independently satisfy ISSN India's online-serial requirements (Section 4 below) — it is being built specifically to support an ISSN application, not just to look good.

This is a **new title with no prior online presence.** Everything below is being built from scratch.

---

## 2. Reference journals studied

Before drafting this brief, real, ISSN-assigned medical journal websites were reviewed for **structure**, and internationally recognised medical journals were reviewed for **visual design language**. Match their patterns, not any single one's exact visuals — JMN has its own branding (Section 5).

**Structure references** (Indian, ISSN-assigned, comparable scale):
- **Indian Journal of Medical Research** — ijmr.org.in — nav: Home / About Us / Editorial Board / Issues (Ahead of Print, Current Issue, Archives) / Ethical Guidelines / Instructions (For Authors, For Reviewers) / Media & News / Contact Us. Homepage leads with a compact "Journal Particulars" strip (ISSN, Frequency, Language, Starting year, Format) directly under the title, before any prose.
- **National Medical Journal of India** — nmji.in — dedicated `/editorial-board/` page with full member listing as plain text.
- **Journal of the Indian Medical Association** — onlinejima.com

The consistent pattern: a short, clearly-labelled particulars block at the very top of the homepage; a standalone Editorial Board page with real text (never an image); Archives organised strictly Year → Volume → Issue, each issue listing articles individually with their own links; Instructions/Author Guidelines reproduced in full as a page, not a PDF-only download.

**Visual design references** (world-class, for typography/layout/tone, not content):
- **The Lancet** (thelancet.com) — restrained editorial red used only as an accent (masthead rule, link colour, tags), not a background fill; generous white space; serif headlines over a clean sans body; article cards with a category tag, title, author line, and a one-line dek — never a raw wall of text.
- **NEJM** (nejm.org) and **JAMA Network** (jamanetwork.com) — sticky, slim top navigation (not a chunky button bar); a clear visual hierarchy between "Featured/Latest" content and secondary links; consistent card components reused across Current Issue, Archives, and topic listings; a real search bar treated as a first-class element, not an afterthought.

The throughline across all of these: **restraint**. Colour is used to direct attention (one accent colour, applied sparingly), not to fill space. Typography carries the authority, not decoration. Nothing is crammed onto one page.

### 2.1 What to explicitly avoid — anti-patterns from the publisher's own prior journal site

A ZIP export and the live version of a related IINR journal site were reviewed (`https://iinr.in/journal/`). The publisher was explicit: **do not repeat this design or structure.** Concretely, avoid every one of these:

- **A single long page with anchor-jump navigation** (`#latest-issue`, `#about`, `#editorial-board`, `#archives`...) instead of real, separate, indexable pages. Build the multi-page sitemap in Section 7 as actual routes, not anchors on one page.
- **A solid, saturated gradient-and-drop-shadow header** (deep purple fill, heavy box-shadow) as the entire visual identity. Use colour as a restrained accent (Section 5), not a dominant fill.
- **System/default fonts** (plain Arial) throughout. Use a deliberate type system (Section 5.1).
- **Emoji used as section icons** (📅 💻 📑 🚀 🌍) in place of a real, structured data table for Journal Particulars. Use the plain-text table format from Section 7.1 — no decorative emoji anywhere on compliance-relevant content.
- **Undifferentiated Editorial Board text** — long unstyled paragraphs of name/address/email run together with no card structure, no visual grouping by role, no consistent formatting. Use the card/list component in Section 5.4.
- **A prominent "Download Full Issue (PDF)" link sitting next to the individual article links**, which undercuts the "no combined-issue PDF" rule even when individual links are also present. Do not add a full-issue combined download anywhere on this site — individual article links only (Rule 4, Section 4).
- **Institutional profile links that just point back to the journal's own site** (`iinr.in/faculty-profile/`) instead of the member's actual home institution. Every JMN EB profile link must resolve to the member's own institution's website (Rule 7, Section 4).

---

## 3. Tech stack

- **Framework:** Next.js (React, runs on Node.js), App Router.
- **Rendering:** Static generation for every content page (About, Editorial Board, Guidelines, Policies, Archives). No login, no gated content anywhere on the public site.
- **Content source:** Structured JSON or Markdown files per issue/article — not a database — so adding Issue 2 later is a data update, not a redesign. One JSON file per issue is sufficient at this scale.
- **Article files:** Each article is its own static PDF, one file per article. Never bundle a full issue into a single combined PDF — this is an explicit ISSN disqualifier (Section 4.4).
- **Styling:** Plain CSS or Tailwind, using the design tokens in Section 5. No component library dependency required at this scale.
- **Hosting:** Any Node-friendly static host (Vercel, Render, or the Foundation's own server). The only hard requirement is a **permanent domain** — ISSN explicitly disqualifies temporary/placeholder sites.
- **No browser storage APIs** (localStorage/sessionStorage) — not needed for this site; everything is static public content.

---

## 4. Non-negotiable ISSN compliance rules

These come directly from ISSN India's guidelines and — where marked — from the correction history of a real, related ISSN application (App ID 68757) for a sister journal from the same publisher group. Build these in from the start; do not treat them as later polish.

1. **No compliance data lives only in an image.** Journal particulars, Editorial Board details, publisher address, and bibliographic details must all exist as real, selectable text on the page. A branded graphic/banner is fine as decoration alongside the text, never as a substitute for it. *(Confirmed directly by the publisher for this project — the board graphic supplied was for names only.)*
2. **Subject must read identically everywhere:** "Medical Sciences" — on the homepage particulars block, in the footer, and it must be the exact string used on the ISSN application form. Do not use a narrower phrase like "Nursing and Healthcare" or "Multidisciplinary Medicine" as the formal Subject field anywhere — that mismatch is what stalled the prior related application for weeks.
3. **Every article PDF must carry a complete bibliographic block on its first page:** Journal Name | Volume | Issue | Month | Year | Page range. All five of Month, Year, Volume, Issue, and Pages are mandatory — a prior related application was corrected twice, in two separate rounds, for missing exactly these fields.
4. **No combined-issue PDF.** Each article is individually linked from the Archives/Current Issue table of contents, either as its own PDF or its own article page.
5. **No abbreviations in article titles**, in the PDF or on the page — titles must be spelled out in full and must match verbatim everywhere they appear for that article.
6. **Every outbound link must actually resolve** — especially Editorial Board institutional profile links. A prior related application was held up because EB profile links 404'd when the ISSN office clicked them. QA every link before each round of use, not just once at build time.
7. **Editorial Board institutional profile links must be hosted on the member's own institution's website** — not the journal's own bio page, not a personal LinkedIn.
8. **The site must never be "under construction."** ISSN online applications require the site to already be live and complete — issues are not pre-assigned for online serials the way they can be for print.
9. **Publisher contact information (name + complete address) and Editor contact details must both be visible on the site**, not just in the application form.
10. **Open access, no login wall.** The "Is Username and Password required?" question on the ISSN form must be answerable "No."

---

## 5. Design system

The goal is a restrained, editorial, "world-class journal" feel — closer to The Lancet or NEJM than to a template-driven college brochure site. Colour directs attention; it does not fill space. Typography carries the authority.

### 5.1 Typography
- **Masthead/wordmark only:** Cormorant Garamond (serif) — "JMN Journal of Medical Sciences" in the header, set large, restrained, no drop shadow or gradient fill behind it.
- **Editorial headlines (page titles, section headers, article titles):** a proper text serif — **Source Serif 4** or **Lora** — not the masthead serif and not the body sans. This is what gives the site an "editorial" register rather than a "corporate brochure" one.
- **Body text, UI labels, nav, tables:** a humanist sans — **Inter** or **Public Sans** — optimised for dense, long-form reading at body size, not Montserrat (Montserrat is a geometric display sans; it reads well in a logo or a short headline, poorly across paragraphs of abstract text).
- **Scale:** establish a clear type scale (e.g. 40/32/24/18/16/14px) and use it consistently — headlines should visibly outrank body text; nothing should be bold-and-14px pretending to be a heading.

### 5.2 Colour
- **Primary:** Maroon `#5B1E1E` — used for the accent rule under the masthead, link colour, active nav state, and small UI accents. **Never as a large background fill** (that is the NRA anti-pattern — Section 2.1).
- **Neutral base:** the page background is white or a near-white off-white (`#FDFBF8`-ish), not a saturated colour block.
- **Secondary:** Cream `#E8D5B5` — used sparingly, for card backgrounds or subtle section dividers, not as a dominant surface.
- **Accent:** Gold `#B8860B` — smallest role of all: category tags, small dividers, hover underlines.
- No gradients, no heavy box-shadows. If a card needs separation from the background, use a 1px hairline border, not a shadow.

### 5.3 Layout
- Sticky, slim top navigation — logo/wordmark left, nav links right, no chunky full-width button bar.
- Generous white space and a real content grid (max content width ~1100–1200px, centred) — the site should never feel cramped edge-to-edge.
- **Every page in Section 7 is a real, separate, indexable route** — never an anchor-jump section on one long page (the NRA anti-pattern).

### 5.4 Components
- **Journal Particulars block** (Home): a clean bordered table or two-column definition list — plain text, no emoji icons standing in for labels.
- **Article card** (Current Issue / Archives / homepage teaser): article-type tag (small, coloured badge) + title (serif, prominent) + author line + page range + a single clear "Read full text" / "PDF" link. No dense unstyled paragraph blocks.
- **Editorial Board card**: one card or clearly bordered row per member — name (bold), role, designation, institutional address, e-mail, profile link — visually grouped by role heading (Editor-in-Chief, Managing Editor, Associate Editors, Assistant Editors, Members, Patron, Advisor), not one undifferentiated running list.
- **Footer**: structured columns (About / Quick Links / Contact / Publisher), not a single centred line of text.

### 5.5 Imagery
- No stock photography. If imagery is used at all, keep it to a subtle abstract texture or the institutional crest — never a hero photo competing with the masthead.
- Editorial Board headshots are optional and, if used, should be small, consistent (uniform crop/size), and never required — text data is what satisfies compliance (Rule 1, Section 4).

### 5.6 Tagline placement
"A Legacy of Learning" is a Foundation-level tagline — footer only, never in the journal's own masthead.

### 5.7 Logo
Use the existing JMN Medical College crest/roundel supplied separately; do not redesign it.

---

## 6. Global layout

**Header/Nav** (persistent, sticky, slim — not a chunky full-width button bar):
```
[Logo]  JMN Journal of Medical Sciences          Home  About  Editorial Board  Author Guidelines  Current Issue  Archives  Peer Review & Ethics  Downloads  Contact
```
Every link routes to a real page (Section 7) — no `#anchor` links.

**Footer** (persistent across all pages):
- Publisher name and complete address (see Section 8)
- ISSN (Print): [to be inserted once assigned] · ISSN (Online): [to be inserted once assigned]
- © [Year] JMN Journal of Medical Sciences · Published by JMN Education and Research Foundation
- "A Legacy of Learning"

---

## 7. Sitemap and page-by-page content

### 7.1 `/` — Home
This is the page ISSN reviewers check first — get it right.

At the very top, before any prose, a clearly labelled **Journal Particulars** panel (plain text, in a bordered box or table — see the IJMR pattern in Section 2):

| Field | Value |
|---|---|
| Title | JMN Journal of Medical Sciences |
| ISSN (Print) | *to be inserted once assigned* |
| ISSN (Online) | *to be inserted once assigned* |
| Frequency | Biannual |
| Language | English |
| Starting Year | *[fill in launch year]* |
| Publication Format | Print & Online |
| Subject | Medical Sciences |
| Publisher | JMN Education and Research Foundation |
| Publisher Address | A-2/15, P.O. & P.S. Kalyani, Dist. Nadia, PIN-741235, West Bengal, India |
| Institution | JMN Medical College and Hospital, Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN-741222, West Bengal |
| Editor-in-Chief | Dr. Chandana Chakraborti |
| E-mail | *[institutional contact email]* |

Below that, the **About the Journal**, **Aim of the Journal**, and **Scope of the Journal** text — use the final approved copy verbatim, reproduced in full in Section 9 below. Do not paraphrase or shorten it.

Below that, an optional "Recently Published" teaser (2–3 latest articles with title/authors/link) once Issue 1 exists — omit this block entirely until there is a real issue to show; never populate it with placeholder entries.

### 7.2 `/editorial-board` — Editorial Board
Plain text listing (not an image) of all 14 members, grouped by role exactly as below. Each member's block must show: **Full Name — Role — Designation — Complete Institutional Address — Institutional E-mail — Profile Link** (hyperlinked to their own institution's site). The exact roster and role grouping is in Section 10 below — build this page directly from that data once the Foundation supplies the missing address/e-mail/link fields.

Do **not** include the Journal Management Team (IT Executive, Librarian) on this page's list that feeds the ISSN submission — see Section 7.9 for where they do appear.

### 7.3 `/author-guidelines` — Author Guidelines
Full text of the journal's existing Author Guidelines document, reproduced in full (manuscript preparation, article types and word/reference limits, authorship criteria, conflicts of interest, submission checklist). Do not summarise or link out to a PDF only — the text must be on the page itself.

### 7.4 `/current-issue` — Current Issue
Table of contents for the latest issue: article type, title (full, no abbreviations), authors, page range, and a direct link to that article's own PDF/page. No combined-issue download.

### 7.5 `/archives` — Archives
Organised strictly **Year → Volume → Issue**, newest first, matching the IJMR pattern in Section 2. Each issue entry links to that issue's own table-of-contents page (same format as Current Issue). Do not pre-build empty year/volume placeholders — only years that have real published content should appear.

### 7.6 `/peer-review-ethics` — Peer Review & Publication Ethics
Double-blind peer review policy statement; ICMJE authorship criteria (reproduce the four ICMJE criteria from the Author Guidelines); conflict-of-interest disclosure policy; UGC-guideline plagiarism policy statement.

### 7.7 `/downloads` — Downloads
Copyright/Contributor Transfer Form (PDF), manuscript template (Word), Author Guidelines (PDF) — same content as the `/author-guidelines` page, offered as a downloadable file too.

### 7.8 `/submission` — Submission Guidelines
How and where to submit (e-mail-based submission is fine at this scale — state the submission e-mail clearly); no submission fee statement; Manuscript Processing Charges table (reproduce the table from Section 9.5 verbatim, including the flagged assumption on the foreign case-report tier); note that charges apply only on acceptance.

### 7.9 `/contact` — Contact Us
Show two clearly labelled address blocks, not merged into one:
- **Publisher:** JMN Education and Research Foundation — A-2/15, P.O. & P.S. Kalyani, Dist. Nadia, PIN-741235, West Bengal, India
- **Editorial Office / Institution:** JMN Medical College and Hospital — Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN-741222, West Bengal, India

Plus: Editor-in-Chief name and contact; general enquiries e-mail; and — separately, clearly labelled as **not** part of the Editorial Board — the Journal Management Team: Mr. Harsh Kumar Shaw (IT Executive) and Ms. Debahuti Roy (Librarian), for site/operational contact.

### 7.10 `/call-for-papers` — Call for Papers (optional)
Only build this once there's real content — a submission deadline, a scope statement for the next issue. Do not launch with a placeholder "coming soon" page anywhere on the site (Rule 8, Section 4).

---

## 8. Publisher details (for footer, Contact page, and Home particulars block)

**Two distinct addresses exist — do not conflate them anywhere on the site.**

- **Publisher (Foundation):** JMN Education and Research Foundation (registered public charitable trust)
  - **Registered office:** A-2/15, P.O. & P.S. Kalyani, Dist. Nadia, PIN-741235, West Bengal, India
  - **Trust registration:** Deed No. 00096 of 2020 (Book No. IV, Volume No. 1303-2020, pages 1532–1562), registered with the Office of the A.D.S.R. Kalyani, West Bengal, under a Deed of Trust dated 08/12/2020
  - This is the address that goes in the ISSN application's **Publisher Address** field, and on the Home particulars block's Publisher Address row — it must match the ISSN form exactly.
- **Institution (the College the journal is published under):** JMN Medical College and Hospital
  - **Address:** Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN-741222, West Bengal, India
  - This is the College's own operating address — different Dist./PIN pattern from the Foundation's registered office. Use this wherever the site refers to the College/editorial office location specifically (e.g. Contact page "Editorial Office"), never as a substitute for the Publisher Address on the ISSN-facing fields.
- **Founding relationship:** JMN Education and Research Foundation is the founding trust of JMN Medical College and Hospital — state this explicitly on the About page, and show both addresses side by side with clear labels (Publisher vs. Institution/Editorial Office) on the Contact page, so the relationship and the two locations are never ambiguous to a reviewer.
- **Chairperson / ISSN application signatory:** Dr. Sila Singh Ghosh

---

## 9. Home page copy — final approved text (reproduce verbatim)

### About the Journal
JMN Journal of Medical Sciences is an official publication of JMN Medical College and Hospital, which began its academic journey in 2023 with the MBBS course. The journal is a double-blind peer-reviewed, open-access publication, with a frequency of two issues per year (Biannual). The first issue will be published soon.

### Aim of the Journal
JMN Journal of Medical Sciences aims to disseminate reliable, evidence-based knowledge in the field of medicine and healthcare. It provides a platform for faculty, postgraduate trainees, and undergraduate students to publish research findings and emerging developments in medical sciences. The journal helps healthcare professionals stay current with new discoveries, diagnostic methods, treatments, and patient-care practices, and promotes critical thinking, scientific discussion, and exchange of ideas among researchers and practitioners — supporting evidence-based practice and better patient outcomes.

### Scope of the Journal
JMN Journal of Medical Sciences covers all branches of medical sciences, including public health, clinical research, environmental health, social determinants of health, and related policy, programmes, and law, across all medical specialties concerned with patient care. It particularly encourages research relevant to the Indian subcontinent and South-East Asia. The journal welcomes original research articles, review articles, special articles, case reports, commentaries, systematic reviews, meta-analyses, book reviews, and letters to the editor.

### Aims of the Journal (structured objectives)
- **Knowledge Dissemination** — To disseminate new and relevant knowledge, research findings, and advancements across all branches of medical sciences and multidisciplinary medicine, through original research articles, reviews, case reports, and commentaries.
- **Promotion of Evidence-Based Practice** — To promote evidence-based clinical and public-health practice, sharing research that can inform diagnosis, treatment, patient care, and health-policy decision-making.
- **Educational Outreach** — To contribute to the education of faculty, postgraduate trainees, undergraduate students, researchers, and healthcare professionals, publishing content accessible to a broad medical and academic audience.
- **Policy Influence** — To inform health policy and clinical practice by providing evidence and insights relevant to patient care and public health.
- **Regional and Global Health Equity** — To address health challenges and promote equitable health outcomes, with particular encouragement for research relevant to the Indian subcontinent and South-East Asia.
- **Interdisciplinary Collaboration** — To foster collaboration across medical specialties and allied disciplines, including clinical medicine, public health, epidemiology, environmental health, and health policy.
- **Peer Review and Quality Assurance** — To uphold rigorous double-blind peer review, ensuring the quality, validity, and reliability of published research.
- **Professional Development** — To support the professional growth of researchers, practitioners, postgraduate trainees, and students through a platform for the exchange of ideas and findings.
- **Community Engagement** — To promote awareness and understanding of medical and public-health issues among practitioners, students, and the wider community.

### Audience
- Researchers and Academics
- Practitioners
- Postgraduate Trainees and Undergraduate Students
- Policy Makers
- Healthcare Institutions and Organisations

### Types of Articles
Original Articles · Review Articles / Special Articles · Short Research/Theoretical Articles · Case Study/Case Series Reports · Letters to the Editor · Editorial and Guest Editorial (invited)

### 9.5 Manuscript Processing Charges

The journal charges manuscript processing charges to authors. Authors are required to pay only if the article is accepted for publication. Charges are levied per article. An author who does not wish to pay may withdraw their article.

| Article Category | Indian Authors | Foreign Authors |
|---|---|---|
| Original Research Articles, Systematic Reviews, and Narrative Reviews | ₹5,000 | USD 30 |
| Case Reports, Short Communications, Letters to the Editor, and Policy Briefs | ₹3,000 | USD 20* |

*Flagged assumption: the USD figure for this tier was not explicitly given by the publisher; USD 20 applies the same ratio as the Indian-author tiers (₹3,000/₹5,000 = 60%) to the USD 30 figure. Confirm with the publisher before this goes live.

---

## 10. Editorial Board roster

Build the `/editorial-board` page from this exact roster and grouping. **Address, institutional e-mail, and profile link columns are placeholders — do not publish the page until the Foundation supplies real values for every member; a blank or fabricated value is worse than not launching the page yet.**

| Role | Name | Designation |
|---|---|---|
| Editor-in-Chief | Dr. Chandana Chakraborti | Professor & HOD, Ophthalmology, JMNMCH |
| Managing Editor | Dr. Sarmila Mallick | Professor & HOD, Community Medicine, JMNMCH |
| Associate Editor | Prof. (Dr.) Partha Tripathi | Professor & HOD, Paediatrics, JMNMCH |
| Associate Editor | Prof. (Dr.) Saif Omar | Professor & HOD, Anatomy, JMNMCH |
| Associate Editor | Prof. (Dr.) Aditi Saha | Professor & HOD, Biochemistry, JMNMCH |
| Assistant Editor | Dr. Suprasanna Bandyopadhyay | Assistant Professor, Microbiology, JMNMCH |
| Assistant Editor | Ms. Namrata Chatterjee | Senior Resident (faculty), Biochemistry, JMNMCH — use her exact institutional designation on the page so the title reads unambiguously as faculty |
| Member | Dr. Saujen Basu | Professor & HOD, Physiology, JMNMCH |
| Member | Dr. Arpita Das | Assistant Professor, Community Medicine, JMNMCH |
| Member | Dr. Subhojit Roy | Assistant Professor, Community Medicine, JMNMCH |
| Member | Dr. Barnick Choudhury | Professor & HOD, Pathology, JMNMCH |
| Member | Dr. Matiur Rahaman | Professor & HOD, Pharmacology, JMNMCH |
| Patron | Dr. Aniruddha Neogi | Professor & Director (Academic Affairs), Physiology, JMNMCH |
| Advisor | Ms. Sila Singh Ghosh | Trustee |

**Journal Management Team** (shown on `/contact`, not on `/editorial-board`, and excluded from the ISSN submission list):
- Mr. Harsh Kumar Shaw — IT Executive, JMNMCH
- Ms. Debahuti Roy — Librarian, JMNMCH

---

## 11. Data model for issues/articles

One JSON (or equivalent) record per issue, e.g. `content/issues/2026-v1-i1.json`:

```json
{
  "year": 2026,
  "volume": 1,
  "issue": 1,
  "month": "January-June",
  "articles": [
    {
      "type": "Original Article",
      "title": "Full, unabbreviated title exactly as in the PDF",
      "authors": ["Author One", "Author Two"],
      "pages": "1-8",
      "pdfUrl": "/articles/2026-v1-i1/article-01.pdf"
    }
  ]
}
```

Every article PDF referenced here must itself carry the Journal Name | Volume | Issue | Month | Year | Page range block on its first page (Rule 3, Section 4) — this is a property of the PDF file, not something the website can add after the fact, so flag this to whoever compiles the article PDFs.

---

## 12. Definition of done — acceptance checklist

Before considering the build complete, verify every item:

- [ ] Every page in Section 7 exists and is reachable from the nav — no "coming soon" placeholders anywhere
- [ ] Home page particulars block is real text, not an image, and matches Section 7.1 exactly
- [ ] Subject reads "Medical Sciences" identically on Home, footer, and nowhere reads as a narrower phrase
- [ ] Editorial Board page is real text with all five required fields per member (once the Foundation supplies address/e-mail/link data)
- [ ] Every Editorial Board profile link opens successfully and points to the member's own institution's site
- [ ] Every article link/PDF opens successfully (test after every content update, not just at launch)
- [ ] No combined-issue PDF exists anywhere on the site
- [ ] No abbreviations appear in any article title, on-page or in the PDF
- [ ] Publisher name and complete address (Kalyani) appear identically on Home, Footer, and Contact — and are never substituted with or merged into the Institution's Chakdaha address
- [ ] Site requires no login/username/password anywhere
- [ ] Site is deployed to a permanent domain, not a preview/staging URL, before the ISSN application is submitted
- [ ] Manuscript Processing Charges table matches Section 9.5 exactly, including the flagged USD 20 assumption pending publisher confirmation
- [ ] Site is multi-page (real routes) — no anchor-jump single-page structure anywhere
- [ ] No large solid-colour gradient fills, no heavy drop-shadows, no emoji used as compliance-content labels — matches the restrained design system in Section 5
- [ ] No combined "Download Full Issue" link exists anywhere — individual article links only

---

*This brief was prepared alongside the publisher's ISSN application checklist, data collection sheet, and finalised About-page copy. Treat those as the source of truth if anything here needs updating — this document should be regenerated from them, not edited independently, if the underlying data changes.*