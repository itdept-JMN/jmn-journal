import { FileText, Download, UserCheck, Calendar } from "lucide-react";

export interface ArticleData {
  id: string;
  type: string;
  title: string;
  authors: string[];
  pages: string;
  pdfUrl: string;
  abstract?: string;
  fullIssuePdf?: string;
}

export default function ArticleCard({ article, fullIssuePdf }: { article: ArticleData; fullIssuePdf?: string }) {
  return (
    <article className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#5B1E1E] transition-all">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-xs font-bold text-[#5B1E1E] bg-[#F5EFE6] border border-[#E8D5B5] px-3 py-1 rounded-full uppercase tracking-wider">
          {article.type}
        </span>
        <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
          Pages {article.pages}
        </span>
      </div>

      <h3 className="font-headline text-lg sm:text-xl font-bold text-stone-900 leading-snug mb-2 hover:text-[#5B1E1E] transition-colors">
        {article.title}
      </h3>

      <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 mb-3">
        <UserCheck className="w-4 h-4 text-[#B8860B] shrink-0" />
        <span>{article.authors.join(" · ")}</span>
      </div>

      {article.abstract && (
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3 bg-[#F5EFE6]/30 p-3 rounded-lg border border-[#E8D5B5]/40">
          <strong className="text-stone-800 font-semibold block mb-1">Abstract:</strong>
          {article.abstract}
        </p>
      )}

      {/* Access & PDF Downloads */}
      <div className="pt-3 border-t border-[#E8D5B5]/80 flex flex-wrap items-center justify-between gap-3">
        <a
          href={article.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#5B1E1E] text-white hover:bg-[#431616] px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
        >
          <FileText className="w-4 h-4" />
          Download Article PDF
        </a>

        {fullIssuePdf && (
          <a
            href={fullIssuePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-[#5B1E1E] bg-[#F5EFE6] hover:bg-[#E8D5B5] px-3 py-2 rounded-lg border border-[#E8D5B5] transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#B8860B]" />
            Full Issue PDF
          </a>
        )}
      </div>
    </article>
  );
}
