"use client";

import { useState } from "react";
import { Article } from "@/lib/articles";
import { FileText, Download, Copy, Check, Quote, Eye, EyeOff, Share2, BookOpen, ScrollText, CheckCircle } from "lucide-react";

export default function ArticlePageClient({ article }: { article: Article }) {
  const [showPdfEmbed, setShowPdfEmbed] = useState(true);
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Format Vancouver / NLM Citation
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
  const citationText = `${formattedAuthors}. ${article.title.replace(/\.$/, "")}. J JMN Med Sci. ${article.month};${article.volume}(${article.issue}):${article.pages}.`;

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const copyPageLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="space-y-8">
      {/* Primary Action Bar */}
      <div className="bg-[#F5EFE6] border border-[#E8D5B5] rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#5B1E1E] text-white flex items-center justify-center font-bold">
            <FileText className="w-5 h-5 text-[#E8D5B5]" />
          </div>
          <div>
            <h2 className="font-headline font-bold text-stone-900 text-sm sm:text-base">
              Article Manuscript Downloads & Inline Viewer
            </h2>
            <p className="text-xs text-stone-600">
              Download the standalone PDF edition or view the complete article below
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={article.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 bg-[#5B1E1E] text-white hover:bg-[#431616] px-4 py-2.5 rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            <Download className="w-4 h-4 text-[#E8D5B5]" />
            Download Article PDF
          </a>

          <button
            onClick={() => setShowPdfEmbed(!showPdfEmbed)}
            className="inline-flex items-center gap-1.5 bg-[#FDFBF8] text-[#5B1E1E] hover:bg-[#E8D5B5] border border-[#E8D5B5] px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors"
          >
            {showPdfEmbed ? (
              <>
                <EyeOff className="w-4 h-4" />
                Hide PDF Viewer
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                View PDF Inline
              </>
            )}
          </button>

          <button
            onClick={copyPageLink}
            className="inline-flex items-center gap-1.5 bg-[#FDFBF8] text-stone-700 hover:text-[#5B1E1E] border border-[#E8D5B5] px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors"
            title="Share or copy direct link"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" />
                <span className="text-emerald-700 font-bold">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                Share
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Abstract Section */}
      {article.abstract && (
        <section className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 border-b border-[#E8D5B5] pb-3">
            <ScrollText className="w-5 h-5 text-[#5B1E1E]" />
            <h2 className="font-headline text-xl font-bold text-[#5B1E1E]">
              Abstract & Summary
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-stone-800 leading-relaxed space-y-3 font-body text-justify">
            <p className="whitespace-normal leading-relaxed text-stone-700 bg-[#F5EFE6]/30 p-4 rounded-xl border border-[#E8D5B5]/60">
              {article.abstract}
            </p>
          </div>
        </section>
      )}

      {/* Bibliographic Record & How to Cite Block */}
      <section className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#E8D5B5] pb-3">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-[#B8860B]" />
            <h2 className="font-headline text-xl font-bold text-[#5B1E1E]">
              How to Cite this Article (Vancouver / NLM Format)
            </h2>
          </div>

          <button
            onClick={copyCitation}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B1E1E] bg-[#F5EFE6] hover:bg-[#E8D5B5] border border-[#E8D5B5] px-3.5 py-1.5 rounded-lg transition-colors"
          >
            {copiedCitation ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-700 font-bold">Citation Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Copy Citation</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-[#F5EFE6]/40 p-4 rounded-xl border border-[#E8D5B5]/60 font-mono text-xs sm:text-sm text-stone-900 select-all leading-relaxed">
          {citationText}
        </div>

        {/* Complete Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs pt-2">
          <div className="bg-[#F5EFE6]/30 p-3 rounded-lg border border-[#E8D5B5]/50">
            <span className="text-stone-500 font-medium block">Journal</span>
            <strong className="text-stone-900 font-semibold">JMN Journal of Medical Sciences</strong>
          </div>

          <div className="bg-[#F5EFE6]/30 p-3 rounded-lg border border-[#E8D5B5]/50">
            <span className="text-stone-500 font-medium block">Volume & Issue</span>
            <strong className="text-stone-900 font-semibold">Vol. {article.volume}, Issue {article.issue} ({article.month})</strong>
          </div>

          <div className="bg-[#F5EFE6]/30 p-3 rounded-lg border border-[#E8D5B5]/50">
            <span className="text-stone-500 font-medium block">Page Range</span>
            <strong className="text-stone-900 font-semibold">Pages {article.pages}</strong>
          </div>

          <div className="bg-[#F5EFE6]/30 p-3 rounded-lg border border-[#E8D5B5]/50">
            <span className="text-stone-500 font-medium block">Publisher</span>
            <strong className="text-stone-900 font-semibold">JMN Medical College</strong>
          </div>
        </div>
      </section>

      {/* Embedded Full PDF Document Viewer */}
      {showPdfEmbed && (
        <section className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-lg font-bold text-[#5B1E1E] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#B8860B]" />
              Embedded Document PDF Viewer
            </h2>
            <a
              href={article.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#5B1E1E] hover:underline flex items-center gap-1"
            >
              Open PDF in New Window →
            </a>
          </div>

          <div className="bg-stone-900 border border-[#E8D5B5] rounded-2xl overflow-hidden shadow-lg p-1">
            <iframe
              src={`${article.pdfUrl}#view=FitH`}
              title={article.title}
              className="w-full h-[800px] rounded-xl bg-white"
            />
          </div>
        </section>
      )}
    </div>
  );
}
