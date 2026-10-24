import pymupdf, re, os, json, sys

SRC = "/mnt/user-data/uploads/jmn-journal"
OUT = "/tmp/claude-0/-home-claude/87ce0310-1ab9-56b2-a716-be42bb04160c/scratchpad/out"
FONTDIR = "/usr/share/texmf/fonts/opentype/public/tex-gyre"
PAG = {"reg": f"{FONTDIR}/texgyrepagella-regular.otf", "it": f"{FONTDIR}/texgyrepagella-italic.otf",
       "bd": f"{FONTDIR}/texgyrepagella-bold.otf"}
JOURNAL = "JMN Journal of Medical Sciences"
ABBR = "JMN J Med Sci"

ISSUES = [
    {
        "id": "2025-v1-i1", "volume": 1, "issue": 1, "year": 2025,
        "period": "Jul–Dec 2025", "periodLong": "July–December 2025", "vanc": "2025 Jul–Dec",
        "cover": "_junk_for_review/public/articles/2025-v1-i1-original/cover-page.pdf",
        "items": [
            ("editorial", "_junk_for_review/public/articles/2025-v1-i1-original/editorial.pdf", None),
            ("article-01", "_junk_for_review/public/articles/2025-v1-i1-original/article-01.pdf", None),
            ("article-02", "_junk_for_review/public/articles/2025-v1-i1-original/article-02.pdf", None),
            ("article-03", "_junk_for_review/public/articles/2025-v1-i1-original/article-03.pdf", None),
            ("article-04", "_junk_for_review/public/articles/2025-v1-i1-original/article-04.pdf", None),
            ("article-05", "_junk_for_review/public/articles/2025-v1-i1-original/article-05.pdf", None),
        ],
    },
    {
        "id": "2026-v2-i1", "volume": 2, "issue": 1, "year": 2026,
        "period": "Jan–Jun 2026", "periodLong": "January–June 2026", "vanc": "2026 Jan–Jun",
        "cover": "_junk_for_review/public/articles/2026-v1-i2/cover-page.pdf",
        "items": [
            ("article-01", "_junk_for_review/public/articles/2026-v1-i2/article-01.pdf", None),
            ("article-02", "_junk_for_review/public/articles/2026-v1-i2/article-02.pdf", None),
            ("article-03", "/tmp/claude-0/-home-claude/87ce0310-1ab9-56b2-a716-be42bb04160c/scratchpad/geo/article.pdf", None),  # re-typeset from authors' Word file (adds Dr. Anurag Mondal, Table 1, Figures 1-2)
            ("article-04", "_junk_for_review/public/articles/2026-v1-i2/article-04.pdf", None),
            ("article-05", "_junk_for_review/public/articles/2026-v1-i2/article-05.pdf", None),
            ("article-06", "_junk_for_review/public/articles/2026-v1-i2/article-06.pdf", 5),  # drop stray 6th page
        ],
    },
]

CSS_FONTS = """
@font-face {font-family: P; src: url(texgyrepagella-regular.otf);}
@font-face {font-family: P; src: url(texgyrepagella-bold.otf); font-weight: bold;}
@font-face {font-family: P; src: url(texgyrepagella-italic.otf); font-style: italic;}
* {font-family: P;}
"""
ARCH = pymupdf.Archive(FONTDIR)
STEM_OVERRIDE = {
    ("2025-v1-i1", "article-03"): "Sahoo R, Hari R. Management of mesiodens: a supernumerary tooth.",
    ("2026-v2-i1", "article-03"): "Roy S, Nandi R, Mondal A. Geospatial network analysis of maternal healthcare access and travel impedance in South 24 Parganas district, West Bengal.",
    ("2025-v1-i1", "article-05"): "Basu S. Vestibulo-cerebellar modulation of stress-related immune responses: a narrative review.",
    ("2025-v1-i1", "article-04"): "Hasan M, Sarwar ME, Ali A, Roy R. Scrub typhus presenting as severe pneumonia and acute febrile illness in a malnourished infant with infantile tremor syndrome.",
}

DATE_TAIL = re.compile(r"\.?\s*(JMN Journal of Medical\s*Sciences|JMN J Med Sci)?\s*\.?\s*(December 2025|July 2026)\s*;\s*1\s*\(\s*[12]\s*\)\s*:\s*\d+\s*[–?\-]\s*\d+\.?\s*$", re.S)


def add_fonts(page):
    page.insert_font(fontname="pagr", fontfile=PAG["reg"])
    page.insert_font(fontname="pagi", fontfile=PAG["it"])


def _mesiodens_names(page):
    # byline: "Rahul Sahoo1*, Rishita Hari1" (first name, surname; corresponding author starred)
    reg = pymupdf.Font(fontfile=PAG["reg"])
    parts = [("Rahul Sahoo", 10, 0), ("1", 7.6, -3.6), ("∗", 7.9, -3.6), (", Rishita Hari", 10, 0), ("1", 7.6, -3.6)]
    w = sum(reg.text_length(t, s) for t, s, _ in parts)
    x = (page.rect.width - w) / 2
    for t, s, dy in parts:
        page.insert_text((x, 177.9 + dy), t, fontname="pagr", fontsize=s)
        x += reg.text_length(t, s)
    page.insert_text((116.0, 418.6), "Corresponding Author: Dr. Rahul Sahoo, Department of Dentistry, JMN Medical College and Hospital",
                     fontname="tiro", fontsize=8.2)


def _fluoride_affil(page):
    # Ms. Namrata Chatterjee is a Senior Resident (confirmed by publisher, 24 Oct 2026)
    page.insert_text((116.9, 210.0), "Senior Resident, Department of Biochemistry, JMN Medical College, Chakdaha",
                     fontname="pagr", fontsize=9)


NAME_PATCH = {
    ("2026-v2-i1", "article-04"): {
        "redact": [(116.5, 203.0, 400, 211.8)],
        "draw": _fluoride_affil,
    },
    ("2025-v1-i1", "article-03"): {
        "redact": [(200, 167.5, 412, 181.5), (114, 411.0, 470, 419.2)],
        "draw": _mesiodens_names,
    },
}


def find_cite_block(page):
    """Return (rect, stem_text) of the 'How to cite this article' block, or None."""
    lines = []
    for b in page.get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            t = "".join(s["text"] for s in l["spans"])
            lines.append([pymupdf.Rect(l["bbox"]), t])
    # merge lines sharing a baseline
    lines.sort(key=lambda x: (round(x[0].y1), x[0].x0))
    rows = []
    for r, t in lines:
        if rows and abs(rows[-1][0].y1 - r.y1) < 2.5:
            rows[-1][0] |= r
            rows[-1][1] += " " + t
        else:
            rows.append([pymupdf.Rect(r), t])
    for i, (r, t) in enumerate(rows):
        if "cite this article" in t or re.search(r"\bis article:", t):
            blk = pymupdf.Rect(r)
            txt = t
            j = i
            while not re.search(r"(2025|2026)[^;]{0,12};\s*\d\s*\(", txt) and j + 1 < len(rows) and j - i < 5:
                j += 1
                blk |= rows[j][0]
                txt += " " + rows[j][1]
            return blk, txt
    return None


def clean_stem(txt):
    txt = re.sub(r"\s+", " ", txt)
    txt = re.sub(r"^.*?cite this article:\s*", "", txt)
    # remove stray abbreviated journal spans and old tail
    m = re.search(r"(JMN Journal of Medical\s*Sciences|JMN J Med Sci|\.\s*(December 2025|July 2026))", txt)
    stem = txt[:m.start()] if m else txt
    stem = stem.replace("JMN J Med Sci", "")
    stem = re.sub(r"\s+\.", ".", stem).strip().rstrip(".").strip()
    return stem + "."


def process_article(iss, key, path, keep_pages, first_page):
    src = pymupdf.open(os.path.join(SRC, path))
    doc = pymupdf.open()
    n = keep_pages or src.page_count
    doc.insert_pdf(src, from_page=0, to_page=n - 1)
    last_page = first_page + n - 1
    pp = f"{first_page}–{last_page}" if n > 1 else f"{first_page}"
    bib = f"Volume {iss['volume']}, Issue {iss['issue']}, {iss['period']}"
    footer = f"{JOURNAL}  •  {bib}  •  pp. {pp}"
    cite_report = None
    for i, page in enumerate(doc):
        W, H = page.rect.width, page.rect.height
        # 1. remove the old footer (date • Vol. x, No. y • pp. and page number)
        page.add_redact_annot(pymupdf.Rect(80, H - 52, W - 80, H - 36))
        patch = NAME_PATCH.get((iss["id"], key)) if i == 0 else None
        if patch:
            for r in patch["redact"]:
                page.add_redact_annot(pymupdf.Rect(*r))
        cite = find_cite_block(page)
        if cite:
            blk, txt = cite
            stem = STEM_OVERRIDE.get((iss["id"], key)) or clean_stem(txt)
            times = "Times" in (page.get_textbox(blk) and "".join(sp["font"] for b in page.get_text("dict", clip=blk)["blocks"] for l in b.get("lines", []) for sp in l["spans"]))
            crect = pymupdf.Rect(110.0, blk.y0 + 0.8, 545.0, blk.y1 - 0.8)
            page.add_redact_annot(crect)
        page.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE,
                              graphics=pymupdf.PDF_REDACT_LINE_ART_NONE)
        add_fonts(page)
        if patch:
            patch["draw"](page)
        # 2. new footer: full bibliographic line + page number
        y = H - 40.5
        page.insert_text((91.8, y), footer, fontname="pagr", fontsize=8)
        num = str(first_page + i)
        tw = pymupdf.get_text_length(num, fontname="tiro", fontsize=10)
        page.insert_text((520.2 - pymupdf.Font(fontfile=PAG["reg"]).text_length(num, 10), y), num,
                         fontname="pagr", fontsize=10)
        # 3. first page: bibliographic strip under the running head
        if i == 0:
            strip = f"{JOURNAL}  |  {bib}  |  pp. {pp}"
            f = pymupdf.Font(fontfile=PAG["it"])
            w = f.text_length(strip, 8.5)
            page.insert_text(((W - w) / 2, 73.5), strip, fontname="pagi", fontsize=8.5)
        # 4. rewritten citation
        if cite:
            new = (f"<b>How to cite this article:</b> {stem} {ABBR}. "
                   f"<span style='white-space:nowrap'>{iss['vanc']};{iss['volume']}({iss['issue']}):{pp}.</span>")
            box = pymupdf.Rect(116.7, blk.y0 - 0.5, 496.0, blk.y0 + 40)
            if times:
                box = pymupdf.Rect(116.0, blk.y0 - 0.5, 496.0, blk.y0 + 40)
                rc = page.insert_htmlbox(box, f"<div style='font-family:serif;font-size:8pt;line-height:1.2'>{new}</div>")
            else:
                rc = page.insert_htmlbox(box, f"<div style='font-size:9pt;line-height:1.25;text-align:justify'>{new}</div>",
                                         css=CSS_FONTS, archive=ARCH)
            cite_report = (stem, rc[0] if isinstance(rc, tuple) else rc, round(blk.y1 - blk.y0, 1))
    title = None
    src_meta = src.metadata or {}
    doc.set_metadata({
        "title": src_meta.get("title") or "",
        "author": src_meta.get("author") or "",
        "subject": f"{JOURNAL}, {bib}, pp. {pp}",
        "keywords": f"{JOURNAL}; Volume {iss['volume']}; Issue {iss['issue']}; {iss['periodLong']}; {iss['year']}",
        "creator": "JMN Journal of Medical Sciences",
        "producer": "JMN Journal of Medical Sciences",
    })
    od = os.path.join(OUT, iss["id"])
    os.makedirs(od, exist_ok=True)
    doc.subset_fonts()
    doc.save(os.path.join(od, f"{key}.pdf"), garbage=4, deflate=True)
    return n, pp, cite_report


if __name__ == "__main__":
    report = {}
    for iss in ISSUES:
        page = 1
        rows = []
        for key, path, keep in iss["items"]:
            n, pp, cr = process_article(iss, key, path, keep, page)
            rows.append({"id": key, "pages": pp, "n": n})
            print(iss["id"], key, n, pp, cr)
            page += n
        report[iss["id"]] = rows
    json.dump(report, open(os.path.join(OUT, "pagination.json"), "w"), indent=1, ensure_ascii=False)
