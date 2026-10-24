"""Correct the text of the journal profile / back page (typos, stale 'first issue' sentence)."""
import pymupdf, sys

SRC, OUT = sys.argv[1], sys.argv[2]
FD = "/tmp/claude-0/-home-claude/87ce0310-1ab9-56b2-a716-be42bb04160c/scratchpad/fix/pf"
CSS = """
@font-face {font-family: PF; src: url(PlayfairDisplay-400.ttf);}
@font-face {font-family: PF; src: url(PlayfairDisplay-700.ttf); font-weight: bold;}
* {font-family: PF;}
.p {font-size: 9.4pt; line-height: 12.75pt; color: #FFE8D3; text-align: justify;}
.h {font-size: 11pt; font-weight: bold; color: #FFFFFF;}
"""
ARCH = pymupdf.Archive(FD)

SECTIONS = [
    ("About the Journal",
     "JMN Journal of Medical Sciences is an official publication of JMN Medical College and Hospital, which started "
     "its journey in 2023 with the MBBS course. The journal is a double-blind peer-reviewed, open-access journal "
     "with a frequency of publication of twice a year (biannual)."),
    ("Aim of the Journal",
     "JMN Journal of Medical Sciences aims to disseminate reliable, evidence-based knowledge in the field of medicine "
     "and health care. It provides a platform for publishing research findings, newer developments and knowledge in "
     "medical sciences to all faculty members, postgraduate trainees and undergraduate students. The journal helps "
     "health care professionals stay updated with new discoveries, diagnostic methods, treatments and patient care "
     "services. It promotes critical thinking, scientific discussion and exchange of thoughts among researchers and "
     "medical practitioners, thus improving and supporting evidence-based practice and contributing to better patient "
     "care and health outcomes."),
    ("Scope of the Journal",
     "JMN Journal of Medical Sciences deals with all branches of medical sciences, including public health, clinical "
     "research, environmental health, social determinants of health, and related policy, programmes and laws, and "
     "covers all medical specialties concerned with patient care services. It strongly encourages research and "
     "development carried out for the people of the Indian subcontinent and South-East Asia. The journal encourages "
     "submission of original research articles, review articles, special articles, case reports, commentaries, "
     "systematic reviews, meta-analyses, book reviews and letters to the editor."),
]

doc = pymupdf.open(SRC)
page = doc[0]
blocks = [b for b in page.get_text("dict")["blocks"] if b["type"] == 0]
heads = sorted([b for b in blocks if b["lines"][0]["spans"][0]["size"] > 10.5 and b["lines"][0]["spans"][0]["size"] < 12],
               key=lambda b: b["bbox"][1])
paras = sorted([b for b in blocks if abs(b["lines"][0]["spans"][0]["size"] - 9.4) < 0.3], key=lambda b: b["bbox"][1])
assert len(heads) == 3 and len(paras) == 3, (len(heads), len(paras))
for b in heads + paras:
    page.add_redact_annot(pymupdf.Rect(b["bbox"]))
page.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_NONE)

import re
nolig = lambda t: re.sub(r"f(?=[fil])", "f\u200c", t)  # keep fi/fl/ff as separate glyphs so the text layer stays searchable
for (title, text), h, p in zip(SECTIONS, heads, paras):
    text = nolig(text)
    hr = pymupdf.Rect(h["bbox"]); pr = pymupdf.Rect(p["bbox"])
    page.insert_htmlbox(pymupdf.Rect(hr.x0, hr.y0 - 1, 552.1, hr.y1 + 6), f"<div class='h'>{title}</div>", css=CSS, archive=ARCH)
    rc = page.insert_htmlbox(pymupdf.Rect(pr.x0, pr.y0 - 1.5, 552.1, pr.y1 + 30), f"<div class='p'>{text}</div>", css=CSS, archive=ARCH)
    assert rc[0] >= 0, title

doc.subset_fonts()
doc.save(OUT, garbage=4, deflate=True)
print("saved", OUT)
