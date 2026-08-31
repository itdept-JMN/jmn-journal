import issue1Data from "@/content/issues/2025-v1-i1.json";
import issue2Data from "@/content/issues/2026-v1-i2.json";

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
  year: number;
  fullIssuePdf: string;
  slug: string;
}

export interface Issue {
  year: number;
  volume: number;
  issue: number;
  month: string;
  title: string;
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

const rawIssues = [
  { issueId: "2026-v1-i2", data: issue2Data },
  { issueId: "2025-v1-i1", data: issue1Data },
];

export function getAllArticles(): Article[] {
  const all: Article[] = [];

  for (const item of rawIssues) {
    const iss = item.data as unknown as Issue;
    for (const art of iss.articles) {
      const slug = `${item.issueId}-${art.id}`;
      all.push({
        ...art,
        issueId: item.issueId,
        issueTitle: iss.title,
        volume: iss.volume,
        issue: iss.issue,
        month: iss.month,
        year: iss.year,
        fullIssuePdf: iss.fullIssuePdf,
        slug: slug,
      });
    }
  }

  return all;
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();
  
  // Try exact match by full slug (e.g., 2026-v1-i2-article-01)
  let match = articles.find((a) => a.slug === slug);
  if (match) return match;

  // Try match by article id (e.g. article-01 or editorial)
  match = articles.find((a) => a.id === slug);
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
