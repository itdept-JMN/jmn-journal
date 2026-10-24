import { ISSUES } from "@/lib/issues";

export interface Article {
  id: string;
  type: string;
  title: string;
  authors: string[];
  pages: string;
  pdfUrl: string;
  abstract?: string;
  keywords?: string[];
  affiliations?: string[];
  issueId: string;
  issueTitle: string;
  volume: number;
  issue: number;
  month: string;
  period: string;
  periodLong: string;
  year: number;
  fullIssuePdf: string;
  slug: string;
}

export function getAllArticles(): Article[] {
  const all: Article[] = [];

  for (const iss of ISSUES) {
    for (const art of iss.articles) {
      all.push({
        ...art,
        issueId: iss.issueId,
        issueTitle: iss.title,
        volume: iss.volume,
        issue: iss.issue,
        month: iss.month,
        period: iss.period,
        periodLong: iss.periodLong,
        year: iss.year,
        fullIssuePdf: iss.fullIssuePdf,
        slug: `${iss.issueId}-${art.id}`,
      });
    }
  }

  return all;
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();

  // Exact match by full slug (e.g., 2026-v2-i1-article-01)
  const match = articles.find((a) => a.slug === slug);
  if (match) return match;

  return null;
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];

  const all = getAllArticles();
  // Prefer articles from the same issue
  const sameIssue = all.filter((a) => a.issueId === current.issueId && a.slug !== current.slug);
  if (sameIssue.length >= limit) return sameIssue.slice(0, limit);

  // Fill remaining from other issues
  const otherIssue = all.filter((a) => a.issueId !== current.issueId);
  return [...sameIssue, ...otherIssue].slice(0, limit);
}
