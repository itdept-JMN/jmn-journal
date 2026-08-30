"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, UserCheck, Calendar, BookOpen, Copy, Check, Quote, ScrollText } from "lucide-react";

export interface IssueMeta {
  volume?: number;
  issue?: number;
  month?: string;
  year?: number;
}

export interface ArticleData {
  id: string;
  type: string;
  title: string;
  authors: string[];
  pages: string;
  pdfUrl: string;
  abstract?: string;
  fullIssuePdf?: string;
  issueMeta?: IssueMeta;
}

export default function ArticleCard({
  article,
  fullIssuePdf,
  issueMeta,
}: {
  article: ArticleData;
  fullIssuePdf?: string;
  issueMeta?: IssueMeta;
}) {
  const [copied, setCopied] = useState(false);
  const [isAbstractExpanded, setIsAbstractExpanded] = useState(false);

  // Determine Volume, Issue, Month, Year (from prop or default fallback)
  const vol = article.issueMeta?.volume || issueMeta?.volume || 1;
  const iss = article.issueMeta?.issue || issueMeta?.issue || 1;
  const month = article.issueMeta?.month || issueMeta?.month || "July 2026";
  const year = article.issueMeta?.year || issueMeta?.year || 2026;

  // Format Vancouver / NLM Bibliographic Citation String
  const formatAuthorName = (name: string) => {
    const clean = name.replace(/^(Dr\.|Prof\.|Ms\.|Md\.|Mr\.)\s+/i, "").trim();
    const parts = clean.split(/\s+/);
    if (parts.length === 1) return parts[0];
    const lastName = parts[parts.length - 1];
    const initials = parts
      .slice(0, parts.length - 1)
      .map((p) => p[0].toUpperCase())
      .join("");
    return `${lastName} ${initials}`;
  };

  const formattedAuthors = article.authors.map(formatAuthorName).join(", ");
  const citationText = `${formattedAuthors}. ${article.title.replace(/\.$/, "")}. J JMN Med Sci. ${month};${vol}(${iss}):${article.pages}.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const articleSlug = (article as any).slug || `${year === 2026 ? "2026-v1-i2" : "2025-v1-i1"}-${article.id}`;

  return (
    <article className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#5B1E1E] transition-all space-y-4">
      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8D5B5]/60 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#5B1E1E] bg-[#F5EFE6] border border-[#E8D5B5] px-3 py-1 rounded-full uppercase tracking-wider">
            {article.type}
          </span>
          <span className="text-[11px] font-semibold text-[#B8860B] bg-[#FDFBF8] border border-[#E8D5B5] px-2.5 py-0.5 rounded-full">
            Vol. {vol}, Issue {iss} ({year})
          </span>
        </div>

        <span className="text-xs text-stone-600 font-medium flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
          Pages {article.pages}
        </span>
      </div>

      {/* Article Title (Clickable link to single page) */}
      <h3 className="font-headline text-lg sm:text-xl font-bold text-stone-900 leading-snug hover:text-[#5B1E1E] transition-colors">
        <Link href={`/article/${articleSlug}`}>
          {article.title}
        </Link>
      </h3>

      {/* Author List */}
      <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
        <UserCheck className="w-4 h-4 text-[#B8860B] shrink-0" />
        <span>{article.authors.join(" · ")}</span>
      </div>

      {/* Scrollable & Fully Readable Abstract Box */}
      {article.abstract && (
        <div className="bg-[#F5EFE6]/30 border border-[#E8D5B5]/60 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5 uppercase tracking-wider">
              <ScrollText className="w-3.5 h-3.5 text-[#5B1E1E]" />
              Abstract
            </span>
            <button
              onClick={() => setIsAbstractExpanded(!isAbstractExpanded)}
              className="text-[11px] font-semibold text-[#5B1E1E] hover:underline focus:outline-none"
            >
              {isAbstractExpanded ? "Show Condensed View" : "Scroll / Full Abstract"}
            </button>
          </div>

          <div
            className={`text-xs sm:text-sm text-stone-700 leading-relaxed overflow-y-auto transition-all ${
              isAbstractExpanded ? "max-h-none" : "max-h-36"
            } pr-1.5 scrollbar-thin scrollbar-thumb-[#E8D5B5] scrollbar-track-transparent`}
          >
            <p className="whitespace-normal leading-relaxed text-justify">
              {article.abstract}
            </p>
          </div>
        </div>
      )}

      {/* Bibliographic Citation & How to Cite Block */}
      <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-lg p-3.5 space-y-2">
        <div className="flex items-center justify-between border-b border-[#E8D5B5]/60 pb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#5B1E1E]">
            <Quote className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>How to Cite this Article (Bibliographic Record)</span>
          </div>

          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5B1E1E] bg-[#F5EFE6] hover:bg-[#E8D5B5] border border-[#E8D5B5] px-2.5 py-1 rounded transition-colors"
            title="Copy bibliographic citation to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-700" />
                <span className="text-emerald-700 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#B8860B]" />
                <span>Copy Citation</span>
              </>
            )}
          </button>
        </div>

        {/* Citation Box */}
        <p className="text-xs text-stone-700 font-mono bg-[#F5EFE6]/40 p-2.5 rounded border border-[#E8D5B5]/50 leading-relaxed select-all">
          {citationText}
        </p>

        {/* Bibliographical Meta Summary */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-stone-500 pt-1">
          <span><strong>Journal:</strong> JMN Journal of Medical Sciences</span>
          <span>•</span>
          <span><strong>Volume/Issue:</strong> Vol. {vol}, Issue {iss}</span>
          <span>•</span>
          <span><strong>Pagination:</strong> pp. {article.pages}</span>
          <span>•</span>
          <span><strong>Publisher:</strong> JMN Medical College</span>
        </div>
      </div>

      {/* Access & PDF Downloads & Single Page Link */}
      <div className="pt-2 border-t border-[#E8D5B5]/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/article/${articleSlug}`}
            className="inline-flex items-center gap-2 bg-[#5B1E1E] text-white hover:bg-[#431616] px-4 py-2.5 rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            <BookOpen className="w-4 h-4 text-[#E8D5B5]" />
            Read Full Article Page
          </Link>

          <a
            href={article.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#FDFBF8] text-[#5B1E1E] hover:bg-[#F5EFE6] border border-[#E8D5B5] px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            PDF File
          </a>
        </div>

        {fullIssuePdf && (
          <a
            href={fullIssuePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-[#5B1E1E] bg-[#F5EFE6] hover:bg-[#E8D5B5] px-3 py-2 rounded-lg border border-[#E8D5B5] transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#B8860B]" />
            Full Issue PDF
          </a>
        )}
      </div>
    </article>
  );
}

