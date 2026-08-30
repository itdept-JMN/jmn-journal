import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import ArticlePageClient from "./ArticlePageClient";
import { ChevronRight, Calendar, UserCheck, BookOpen, Layers, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | JMN Journal of Medical Sciences",
    };
  }

  return {
    title: `${article.title} | JMN Journal of Medical Sciences`,
    description: article.abstract?.substring(0, 160) || article.title,
    authors: article.authors.map((name) => ({ name })),
  };
}

export default async function SingleArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 2);

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500 font-medium">
        <Link href="/" className="hover:text-[#5B1E1E] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <Link href="/archives" className="hover:text-[#5B1E1E] transition-colors">
          Archives
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <Link
          href={`/current-issue?issue=${article.issueId}`}
          className="hover:text-[#5B1E1E] transition-colors"
        >
          Vol. {article.volume} Issue {article.issue} ({article.month})
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <span className="text-stone-800 font-semibold truncate max-w-[200px] sm:max-w-xs">
          {article.title}
        </span>
      </nav>

      {/* Article Header & Masthead */}
      <header className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#5B1E1E] bg-[#F5EFE6] border border-[#E8D5B5] px-3.5 py-1 rounded-full uppercase tracking-wider">
              {article.type}
            </span>
            <span className="text-xs font-semibold text-[#B8860B] bg-[#FDFBF8] border border-[#E8D5B5] px-3 py-1 rounded-full">
              Open Access Article
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-600 font-semibold">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
              {article.month} {article.year}
            </span>
            <span>•</span>
            <span>Vol. {article.volume}, Issue {article.issue}</span>
            <span>•</span>
            <span>pp. {article.pages}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-masthead text-2xl sm:text-4xl font-bold text-[#5B1E1E] leading-tight pt-1">
          {article.title}
        </h1>

        {/* Authors */}
        <div className="pt-2 border-t border-[#E8D5B5]/60 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-stone-800">
          <div className="flex items-center gap-2 text-[#5B1E1E]">
            <UserCheck className="w-4 h-4 text-[#B8860B] shrink-0" />
            <span>Authors:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-stone-900 font-bold">
            {article.authors.map((author, i) => (
              <span key={author} className="bg-[#F5EFE6]/60 border border-[#E8D5B5]/60 px-2.5 py-1 rounded-md text-xs sm:text-sm">
                {author}
              </span>
            ))}
          </div>
        </div>

        {/* Journal Bibliographic Information Strip */}
        <div className="bg-[#F5EFE6]/40 border border-[#E8D5B5]/80 rounded-xl p-3.5 text-xs text-stone-600 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span><strong>Journal:</strong> JMN Journal of Medical Sciences</span>
            <span>•</span>
            <span><strong>ISSN (Online):</strong> Applied (Request #77227)</span>
            <span>•</span>
            <span><strong>Publisher:</strong> JMN Medical College</span>
          </div>
          <span className="text-[11px] font-semibold text-[#5B1E1E] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" />
            Double-Blind Peer Reviewed
          </span>
        </div>
      </header>

      {/* Interactive Client Component for Citation & Inline PDF Embed */}
      <ArticlePageClient article={article} />

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-[#E8D5B5]">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#B8860B]" />
              Other Articles in this Journal
            </h2>
            <Link
              href={`/current-issue?issue=${article.issueId}`}
              className="text-xs font-bold text-[#5B1E1E] hover:underline inline-flex items-center gap-1"
            >
              View Full Issue Table of Contents →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
