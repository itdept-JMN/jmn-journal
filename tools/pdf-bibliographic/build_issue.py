import pymupdf, json, os, html
from fixpdfs import ISSUES, SRC, OUT, JOURNAL

YEL = (1, 0.8392, 0)
BACK = os.path.join(SRC, "Assets/JMN_Volume_1_Issue_1/99-back-page.pdf")
GUIDE = os.path.join(SRC, "Assets/JMN_Volume_1_Issue_1/Author_Guidelines.pdf")
TOC = json.load(open(os.path.join(os.path.dirname(__file__), "toc.json"), encoding="utf-8"))
PAGIN = json.load(open(os.path.join(OUT, "pagination.json"), encoding="utf-8"))


def fix_cover(iss):
    d = pymupdf.open(os.path.join(SRC, iss["cover"]))
    p = d[0]
    band = pymupdf.Rect(50, 322, 300, 348)
    bi = pymupdf.Rect(50, 155, 135, 175)
    # sample background colour just left of the band
    pix = p.get_pixmap(dpi=72, clip=pymupdf.Rect(140, 326, 150, 344))
    r, g, b = pix.pixel(4, 8)[:3]
    bg = (r / 255, g / 255, b / 255)
    p.add_redact_annot(band)
    p.add_redact_annot(bi)
    p.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_NONE)
    p.draw_rect(band, color=None, fill=bg, overlay=True)
    # BI-ANNUAL (spelling corrected)
    p.insert_text((51.8, 170.5), "BI-ANNUAL", fontname="hebo", fontsize=12, color=YEL)
    parts = [f"VOL {iss['volume']}", f"ISSUE {iss['issue']}", iss["period"].upper().replace("–", "-")]
    fs = 14
    x = 57.3
    y = 340.0
    for i, t in enumerate(parts):
        p.insert_text((x, y), t, fontname="hebo", fontsize=fs, color=YEL)
        x += pymupdf.get_text_length(t, "hebo", fs)
        if i < len(parts) - 1:
            x += 12
            p.draw_line((x, 325.2), (x, 344.1), color=YEL, width=0.75)
            x += 12
    d.set_metadata({"title": f"{JOURNAL} — Volume {iss['volume']}, Issue {iss['issue']}, {iss['period']} — Cover",
                    "subject": f"{JOURNAL}, Volume {iss['volume']}, Issue {iss['issue']}, {iss['period']}"})
    out = os.path.join(OUT, iss["id"], "cover-page.pdf")
    d.save(out, garbage=3, deflate=True)
    return out


def contents_page(iss):
    rows = {r["id"]: r for r in PAGIN[iss["id"]]}
    arts = TOC[iss["id"]]
    tr = []
    n = 0
    for a in arts:
        label = html.escape(a["title"])
        if a["id"] != "editorial":
            n += 1
            label = f"{n}. {label}"
        auth = html.escape("; ".join(x.replace("Dr. ", "") for x in a["authors"]))
        tr.append(f"<tr><td>{label}</td><td>{auth}</td><td>{html.escape(a['type'])}</td>"
                  f"<td class='pg'>{rows[a['id']]['pages']}</td></tr>")
    body = f"""
<h1>{JOURNAL}</h1>
<p class='bib'>Volume {iss['volume']}, Issue {iss['issue']}, {iss['period']} &nbsp;•&nbsp; Published bi-annually</p>
<p class='bib'>ISSN (Print): Applied for &nbsp;•&nbsp; ISSN (Online): Applied for</p>
<h2>CONTENTS</h2>
<table>
<tr><th style='width:46%'>Section / Article</th><th style='width:24%'>Authors</th><th style='width:20%'>Type</th><th style='width:10%'>Pages</th></tr>
{''.join(tr)}
</table>
<p class='note'>Page numbers refer to the continuous pagination of Volume {iss['volume']}, Issue {iss['issue']} ({iss['period']}), as printed on each article.</p>
"""
    css = """
* {font-family: sans-serif;}
h1 {font-size: 17pt; font-weight: bold; margin: 0 0 4pt 0;}
.bib {font-size: 9.5pt; margin: 0 0 2pt 0;}
h2 {font-size: 15pt; text-align: center; margin: 22pt 0 14pt 0;}
table {border-collapse: collapse; width: 100%;}
th {background-color: #5B1E1E; color: white; font-size: 8pt; text-align: left; padding: 4pt;}
td {font-size: 8pt; padding: 4pt; border-bottom: 0.5pt solid #bbbbbb; vertical-align: top;}
td.pg {white-space: nowrap;}
.note {font-size: 7.5pt; font-style: italic; margin-top: 12pt;}
"""
    d = pymupdf.open()
    p = d.new_page(width=595.28, height=841.89)
    p.insert_htmlbox(pymupdf.Rect(51, 44, 544, 800), body, css=css)
    return d


def build_full(iss, cover):
    full = pymupdf.open()
    full.insert_pdf(pymupdf.open(cover))
    full.insert_pdf(contents_page(iss))
    for r in PAGIN[iss["id"]]:
        full.insert_pdf(pymupdf.open(os.path.join(OUT, iss["id"], r["id"] + ".pdf")))
    full.insert_pdf(pymupdf.open(GUIDE))
    full.insert_pdf(pymupdf.open(BACK))
    full.set_metadata({
        "title": f"{JOURNAL} — Volume {iss['volume']}, Issue {iss['issue']}, {iss['period']} (Full Issue)",
        "subject": f"{JOURNAL}, Volume {iss['volume']}, Issue {iss['issue']}, {iss['periodLong']}",
        "keywords": f"{JOURNAL}; Volume {iss['volume']}; Issue {iss['issue']}; {iss['year']}",
        "author": "JMN Medical College and Hospital", "creator": JOURNAL, "producer": JOURNAL})
    # bookmarks
    toc = [[1, "Cover", 1], [1, "Contents", 2]]
    pg = 3
    titles = {a["id"]: a["title"] for a in TOC[iss["id"]]}
    for r in PAGIN[iss["id"]]:
        toc.append([1, f"{titles[r['id']]} (pp. {r['pages']})", pg])
        pg += r["n"]
    toc.append([1, "Author Guidelines", pg])
    toc.append([1, "Back Page", pg + 3])
    full.set_toc(toc)
    full.subset_fonts()
    full.save(os.path.join(OUT, iss["id"], "full-issue.pdf"), garbage=3, deflate=True)
    print(iss["id"], "full issue pages:", full.page_count)


if __name__ == "__main__":
    for iss in ISSUES:
        c = fix_cover(iss)
        build_full(iss, c)
