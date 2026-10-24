"""Rebuild the Author Guidelines PDF (A4) without internal revision notes."""
import pymupdf, sys

OUT = sys.argv[1]
FONTS = "/usr/share/fonts/truetype/crosextra"
CSS = """
@font-face {font-family: C; src: url(Caladea-Regular.ttf);}
@font-face {font-family: C; src: url(Caladea-Bold.ttf); font-weight: bold;}
@font-face {font-family: C; src: url(Caladea-Italic.ttf); font-style: italic;}
@font-face {font-family: C; src: url(Caladea-BoldItalic.ttf); font-weight: bold; font-style: italic;}
* {font-family: C; font-size: 10pt; line-height: 1.27;}
body {text-align: justify;}
h1 {font-size: 13pt; color: #1F3864; text-align: center; margin: 0;}
.sub {font-style: italic; text-align: center; color: #555555; margin: 2pt 0 10pt 0;}
h2 {font-size: 11pt; color: #1F3864; margin: 9pt 0 2pt 0;}
p {margin: 0 0 4pt 0;}
ol, ul {margin: 0 0 5pt 0; padding-left: 18pt;}
li {margin-bottom: 2pt;}
table {border-collapse: collapse; width: 100%; margin: 4pt 0 6pt 0;}
th {background-color: #D9E2F3; font-size: 8.5pt; font-weight: bold; border: 0.6pt solid #555555; padding: 3pt; text-align: left;}
td {font-size: 8.5pt; border: 0.6pt solid #555555; padding: 3pt; text-align: left; vertical-align: top;}
"""

HTML = """
<h1>AUTHOR GUIDELINES</h1>
<p class="sub">JMN Journal of Medical Sciences</p>
<p>All authors are advised to read the following particulars before submitting an article to the journal. The Journal follows ICMJE (International Committee of Medical Journal Editors) guidelines. Authors are requested to visit http://icmje.org/ on how to prepare an article. Please go through the latest recommendations and then submit the article.</p>
<p>All papers are double-blind peer reviewed. The responsibility for any statement in the article rests with the author(s).</p>
<p>The manuscript should be in English, in an MS Word file typed in Times New Roman with a font size of 12, double spaced and prepared per the following guidelines.</p>

<h2>Title Page</h2>
<p>The title page should contain the following particulars:</p>
<ol>
<li>Type of article: Original Article, Review Article, Special Article, Short Article, Case Study/Case Series, Letter to the Editor.</li>
<li>Title: should be brief, specific and informative.</li>
<li>Authors: names of authors with their qualification and designation.</li>
<li>Running title (not more than 50 characters).</li>
<li>Name of the institution where the work was carried out.</li>
<li>Corresponding author: name, address, e-mail, mobile number.</li>
<li>Total number of pages, total number of photographs and word counts separately for the abstract and for the text (excluding references, tables and abstract).</li>
<li>Ethics Committee clearance: name of the institution with number.</li>
<li>Source(s) of support in the form of grants, equipment, drugs or all of these.</li>
<li>Acknowledgement, if any. One or more statements should specify: (1) contributions that need acknowledging but do not justify authorship, such as general support by a departmental chair; (2) acknowledgments of technical help; and (3) acknowledgments of financial and material support, which should specify the nature of the support. This should be included on the title page of the manuscript, not in the main article.</li>
<li>Conflict of interest: if any.</li>
</ol>

<h2>Abstract Page</h2>
<p>The abstract page should contain: the type of article; the title of the article; the abstract; and key words.</p>
<p>The abstract may be structured or unstructured, per the category limits in the table below. It should be informative and completely self-explanatory, briefly present the topic, state the scope of the experiments, indicate significant data and point out major findings and conclusions. Standard nomenclature should be used and abbreviations should be avoided. No literature should be cited in the abstract.</p>
<p>Key Words: following the abstract, list not more than 6 key words, in alphabetical order, to support indexing.</p>

<h2>Text Page</h2>
<p>The article should be written in the following format:</p>
<h2>Introduction</h2>
<p>This should be brief and the review of the literature should be pertinent to the theme of the paper. Extensive review and unnecessary detail of earlier work should be avoided. State the purpose and summarize the rationale for the study or observation.</p>
<h2>Materials and Methods</h2>
<p>This should cover all relevant aspects: type of study, study design, study population, period of study, study area, tools and techniques used and statistical analysis, with Ethics Committee approval stated.</p>
<h2>Results</h2>
<p>Present results in a logical sequence in the text, tables and illustrations, giving the main or most important findings first. Do not repeat in the text all the data in the tables or illustrations; emphasize or summarize only important observations.</p>
<h2>Discussion</h2>
<p>Include a summary of key findings; results as they relate to a prior hypothesis; comparison with similar work; strengths and limitations of the study; what the study adds to the available evidence; effects on patient care and health policy; and future research directions. Do not repeat in detail data or other material already given in the Introduction or Results.</p>
<h2>Conclusion and Recommendations</h2>
<p>State the conclusions drawn from the findings, linked to the objectives of the study, with recommendations where appropriate.</p>
<h2>References</h2>
<p>References should be numbered consecutively in the order in which they are first mentioned in the text (not alphabetical order). Identify references in text, tables and legends by Arabic numerals in superscript after punctuation marks. References cited only in tables or figure legends should be numbered according to the sequence established by the first identification, in the text, of that table or figure. Use the style based on the formats used by the NLM in Index Medicus. Information from manuscripts submitted but not accepted/published should be cited in the text as unpublished observations, with written permission from the source.</p>
<h2>Tables and Figures</h2>
<p>Table numbers should be followed by the title of the table. Line drawings/photographs should contain a figure number and description. The corresponding number(s) of tables, figures, etc. should be quoted in the text.</p>
<p>Page/Line Number: authors are requested to mark the page number at bottom middle and a line number on each line of the manuscript for easy and quick review. Text alignment, line spacing, word count, figures and tables must follow the format below.</p>

<h2>Submission Categories</h2>
<p>The journal invites the following kinds of submissions, within these limits:</p>
<table>
<tr><th>Article Type</th><th>Word Count</th><th>Abstract/Summary</th><th>References</th><th>Tables/Figures</th><th>Authors</th></tr>
<tr><td>Original Article</td><td>2,500&#8211;3,000 (excl. abstract/refs/tables)</td><td>Structured, 250&#8211;300 words</td><td>&#8804;50</td><td>&#8804;10 combined</td><td>&#8804;6</td></tr>
<tr><td>Review / Special Article</td><td>&#8804;4,000</td><td>Unstructured, 250&#8211;300 words</td><td>&#8804;50</td><td>&#8804;10 combined</td><td>&#8804;6</td></tr>
<tr><td>Short Research/Theoretical Article</td><td>&#8804;1,500</td><td>Unstructured, &#8804;150 words</td><td>&#8804;50</td><td>&#8804;10 combined</td><td>&#8804;6</td></tr>
<tr><td>Case Study / Case Series Report</td><td>&#8804;1,000 (excl. abstract/refs)</td><td>Unstructured, &#8804;100 words</td><td>&#8804;50</td><td>&#8804;10 combined</td><td>&#8804;4</td></tr>
<tr><td>Letter to the Editor</td><td>&#8804;500</td><td>None</td><td>&#8804;50</td><td>n/a</td><td>&#8804;4</td></tr>
<tr><td>Editorial / Guest Editorial</td><td>n/a</td><td>None</td><td>n/a</td><td>n/a</td><td>n/a (editorial team / invited)</td></tr>
</table>
<p>Editorial and Guest Editorial (no summary/abstract) are authored by the editorial team or invited by the editorial board from eminent clinicians, public health specialists, faculty or practitioners.</p>

<h2>Authorship Criteria</h2>
<p>Authorship credit shall be based on International Committee of Medical Journal Editors (ICMJE) criteria, as follows:</p>
<ol>
<li>Substantial contributions to the conception or design of the work; or the acquisition, analysis or interpretation of data for the work; AND</li>
<li>Drafting the work or revising it critically for important intellectual content; AND</li>
<li>Final approval of the version to be published; AND</li>
<li>Agreement to be accountable for all aspects of the work, ensuring that questions related to the accuracy or integrity of any part of the work are appropriately investigated and resolved.</li>
</ol>
<p>All those designated as authors should meet all four criteria for authorship and all who meet the four criteria should be identified as authors. Those who do not meet all four criteria should be acknowledged.</p>
<p>Once submitted, the author order cannot be changed without the written consent of all contributors. No changes are permissible after approval of the author proofs. The journal prescribes a maximum number of authors for manuscripts depending on the type of manuscript, its scope and the number of institutions involved. Authors should provide justification if the number of authors exceeds these limits; in exceptional cases, the decision rests with the Chief Editor, Editor and Managing Editor, based on the merits of the claim.</p>

<h2>Conflicts of Interest / Competing Interests</h2>
<p>All authors must disclose all conflicts of interest they may have with publication of the manuscript or with an institution or product mentioned in the manuscript and/or important to the outcome of the study presented.</p>
<h2>Contributors' / Copyright Transfer Form</h2>
<p>This must be submitted in original, with the signatures of all contributors.</p>
<h2>Submission Checklist</h2>
<ul>
<li>Covering letter: signed by all contributors</li>
<li>Title page: contains all required information</li>
<li>Abstract page: abstract with key words</li>
<li>Text page</li>
<li>Tables and figures</li>
<li>Authors' Contribution details</li>
<li>Copyright form</li>
</ul>
"""

story = pymupdf.Story(html=HTML, user_css=CSS, archive=pymupdf.Archive(FONTS))
W, H = pymupdf.paper_size("a4")
where = pymupdf.Rect(72, 60, W - 72, H - 64)
writer = pymupdf.DocumentWriter(OUT + ".tmp.pdf")
more = 1
while more:
    dev = writer.begin_page(pymupdf.Rect(0, 0, W, H))
    more, _ = story.place(where)
    story.draw(dev)
    writer.end_page()
writer.close()

doc = pymupdf.open(OUT + ".tmp.pdf")
reg = pymupdf.Font(fontfile=f"{FONTS}/Caladea-Regular.ttf")
for i, page in enumerate(doc):
    # remove empty table-header shading that Story leaves on pages without the table
    if "Article Type" not in page.get_text():
        hits = [d["rect"] for d in page.get_drawings() if d.get("fill") and abs(d["fill"][0] - 0.851) < 0.03]
        for r in hits:
            page.add_redact_annot(r + (-1, -1, 1, 1))
        if hits:
            page.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED, text=pymupdf.PDF_REDACT_TEXT_NONE)
    page.insert_font(fontname="cal", fontfile=f"{FONTS}/Caladea-Regular.ttf")
    t = f"JMN Journal of Medical Sciences  •  Author Guidelines  •  {i + 1}"
    w = reg.text_length(t, 8)
    page.insert_text(((W - w) / 2, H - 34), t, fontname="cal", fontsize=8, color=(0.25, 0.25, 0.25))
doc.set_metadata({"title": "Author Guidelines — JMN Journal of Medical Sciences",
                  "author": "JMN Journal of Medical Sciences", "subject": "Author Guidelines",
                  "creator": "JMN Journal of Medical Sciences", "producer": "JMN Journal of Medical Sciences"})
doc.subset_fonts()
doc.save(OUT, garbage=4, deflate=True)
import os; os.remove(OUT + ".tmp.pdf")
print("pages:", doc.page_count if not doc.is_closed else "saved")
