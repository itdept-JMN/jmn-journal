import ArticleCard from "@/components/ArticleCard";
import issueData from "@/content/issues/2026-v1-i1.json";
import { Download, Calendar, Layers, FileCheck } from "lucide-react";

export default function CurrentIssuePage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
            Latest Publication
          </span>
          <span className="text-xs font-semibold text-[#B8860B] bg-[#FDFBF8] border border-[#E8D5B5] px-3 py-1 rounded-full flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {issueData.month} {issueData.year}
          </span>
        </div>

        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E]">
          Current Issue: Volume {issueData.volume}, Issue {issueData.issue}
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Table of Contents for JMN Journal of Medical Sciences — {issueData.month} {issueData.year}
        </p>
      </div>

      {/* Full Issue Download Banner */}
      <div className="bg-[#F5EFE6] border border-[#E8D5B5] rounded-xl p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-[#5B1E1E] text-white flex items-center justify-center font-bold">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-headline text-lg font-bold text-stone-900">
              Download Complete Combined Issue PDF
            </h2>
            <p className="text-xs text-stone-600">
              Includes front matter, editorial note, table of contents, and all published articles in a single file
            </p>
          </div>
        </div>

        <a
          href={issueData.fullIssuePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#5B1E1E] text-white hover:bg-[#431616] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold shadow-xs transition-colors"
        >
          <Download className="w-4 h-4 text-[#E8D5B5]" />
          Download Full Issue (PDF)
        </a>
      </div>

      {/* Articles List Header */}
      <div className="flex items-center justify-between border-b border-stone-300 pb-2">
        <h2 className="font-headline text-xl font-bold text-[#5B1E1E] flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-[#B8860B]" />
          Articles in this Issue ({issueData.articles.length})
        </h2>
        <span className="text-xs text-stone-500 font-medium">Individual Article Downloads Available Below</span>
      </div>

      {/* Article Cards */}
      <div className="grid grid-cols-1 gap-6">
        {issueData.articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            fullIssuePdf={issueData.fullIssuePdf}
          />
        ))}
      </div>
    </div>
  );
}
