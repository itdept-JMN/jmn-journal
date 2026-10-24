import v1i1 from "@/content/issues/2025-v1-i1.json";
import v2i1 from "@/content/issues/2026-v2-i1.json";

/**
 * Bibliographic numbering rule (ISSN India):
 *  - One volume per calendar year (2025 = Volume 1, 2026 = Volume 2, ...).
 *  - Within a year only the issue number changes, per the biannual frequency.
 *  - Every display of an issue must state Volume, Issue and the period + year,
 *    e.g. "Volume 2, Issue 1, Jan–Jun 2026".
 */

export const JOURNAL_TITLE = "JMN Journal of Medical Sciences";
export const JOURNAL_ABBR = "JMN J Med Sci";

export interface IssueRecord {
  issueId: string;
  year: number;
  volume: number;
  issue: number;
  month: string; // month range without year, e.g. "Jan–Jun"
  period: string; // e.g. "Jan–Jun 2026"
  periodLong: string; // e.g. "January–June 2026"
  title: string; // e.g. "Volume 2, Issue 1, Jan–Jun 2026"
  fullIssuePdf: string;
  articles: Array<{
    id: string;
    type: string;
    title: string;
    authors: string[];
    pages: string;
    pdfUrl: string;
    abstract?: string;
    keywords?: string[];
    affiliations?: string[];
  }>;
}

// Latest issue first
export const ISSUES: IssueRecord[] = [
  { issueId: "2026-v2-i1", ...(v2i1 as Omit<IssueRecord, "issueId">) },
  { issueId: "2025-v1-i1", ...(v1i1 as Omit<IssueRecord, "issueId">) },
];

export const CURRENT_ISSUE = ISSUES[0];
export const INAUGURAL_ISSUE = ISSUES[ISSUES.length - 1];

export function getIssue(issueId?: string | null): IssueRecord {
  return ISSUES.find((i) => i.issueId === issueId) || CURRENT_ISSUE;
}

/** "Volume 2, Issue 1, Jan–Jun 2026" */
export function bibLabel(i: { volume: number; issue: number; period: string }): string {
  return `Volume ${i.volume}, Issue ${i.issue}, ${i.period}`;
}

/** Vancouver / NLM style: Surname AB, ... Title. JMN J Med Sci. 2026 Jan–Jun;2(1):1–5. */
export function vancouverCitation(a: {
  authors: string[];
  title: string;
  year: number;
  month: string;
  volume: number;
  issue: number;
  pages: string;
}): string {
  const fmt = (name: string) => {
    const clean = name.replace(/^(Dr\.|Prof\.|Ms\.|Md\.|Mr\.)\s+/i, "").trim();
    const parts = clean.split(/\s+/);
    if (parts.length === 1) return parts[0];
    const last = parts[parts.length - 1];
    const initials = parts
      .slice(0, -1)
      .map((p) => p.replace(/[^A-Za-z]/g, "")[0]?.toUpperCase() || "")
      .join("");
    return `${last} ${initials}`;
  };
  const authors = a.authors.map(fmt).join(", ");
  return `${authors}. ${a.title.replace(/\.$/, "")}. ${JOURNAL_ABBR}. ${a.year} ${a.month};${a.volume}(${a.issue}):${a.pages}.`;
}
