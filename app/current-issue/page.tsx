"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import ArticleCard from "@/components/ArticleCard";
import { ISSUES, CURRENT_ISSUE, INAUGURAL_ISSUE, getIssue, bibLabel } from "@/lib/issues";
import { Calendar, Layers, FileCheck, BookOpen, FileText } from "lucide-react";

function CurrentIssueContent() {
  const searchParams = useSearchParams();
  const requestedIssue = searchParams.get("issue");

  // Default to the current (latest) issue unless another is requested
  const [selectedIssueId, setSelectedIssueId] = useState<string>(getIssue(requestedIssue).issueId);

  const issueData = getIssue(selectedIssueId);
  const isCurrent = issueData.issueId === CURRENT_ISSUE.issueId;

  return (
    <div className="space-y-8">
      {/* Issue Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#F5EFE6] border border-[#E8D5B5] p-3 rounded-xl shadow-xs">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#5B1E1E]" />
          <span className="font-headline font-bold text-stone-900 text-sm">Select Published Issue:</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {ISSUES.map((iss) => (
            <button
              key={iss.issueId}
              onClick={() => setSelectedIssueId(iss.issueId)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                selectedIssueId === iss.issueId
                  ? "bg-[#5B1E1E] text-white shadow-xs"
                  : "bg-[#FDFBF8] text-stone-700 hover:text-[#5B1E1E] border border-[#E8D5B5]"
              }`}
            >
              {bibLabel(iss)}
              {iss.issueId === CURRENT_ISSUE.issueId ? " — Latest" : iss.issueId === INAUGURAL_ISSUE.issueId ? " — Inaugural" : ""}
            </button>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
            {isCurrent ? "Current Issue" : issueData.issueId === INAUGURAL_ISSUE.issueId ? "Inaugural Issue" : "Past Issue"}
          </span>
          <span className="text-xs font-semibold text-[#B8860B] bg-[#FDFBF8] border border-[#E8D5B5] px-3 py-1 rounded-full flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {issueData.periodLong}
          </span>
        </div>

        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E]">
          Volume {issueData.volume}, Issue {issueData.issue}, {issueData.period}
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Table of Contents — JMN Journal of Medical Sciences, Volume {issueData.volume}, Issue {issueData.issue}, {issueData.period}
        </p>
      </div>

      {/* Cover PDF link */}
      <div className="bg-[#F5EFE6] border border-[#E8D5B5] rounded-xl p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-[#5B1E1E] text-white flex items-center justify-center font-bold">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-headline text-lg font-bold text-stone-900">
              {issueData.title}
            </h2>
            <p className="text-xs text-stone-600">
              Each article below is published as its own standalone PDF, individually linked
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={issueData.fullIssuePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5B1E1E] text-white hover:bg-[#431616] px-4 py-2.5 rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            <FileText className="w-4 h-4" />
            Full Issue PDF
          </a>
          <a
            href={issueData.coverPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FDFBF8] text-[#5B1E1E] hover:bg-[#F5EFE6] border border-[#E8D5B5] px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors"
          >
            Cover Page
          </a>
        </div>
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
            issueMeta={{
              volume: issueData.volume,
              issue: issueData.issue,
              month: issueData.month,
              period: issueData.period,
              year: issueData.year,
              issueId: issueData.issueId,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function CurrentIssuePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-stone-600 font-headline">Loading issue contents...</div>}>
      <CurrentIssueContent />
    </Suspense>
  );
}

