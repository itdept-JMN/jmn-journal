import Link from "next/link";
import { ISSUES, CURRENT_ISSUE } from "@/lib/issues";
import { FolderArchive, Calendar, BookOpen, ArrowRight, FileText } from "lucide-react";

export default function ArchivesPage() {
  // Year → Volume → Issue (one volume per calendar year)
  const years = Array.from(new Set(ISSUES.map((i) => i.year))).sort((a, b) => b - a);
  const archives = years.map((year) => {
    const ofYear = ISSUES.filter((i) => i.year === year);
    const volNos = Array.from(new Set(ofYear.map((i) => i.volume)));
    return {
      year,
      volumes: volNos.map((volumeNumber) => ({
        volumeNumber,
        issues: ofYear
          .filter((i) => i.volume === volumeNumber)
          .sort((a, b) => b.issue - a.issue)
          .map((i) => ({
            issueNumber: i.issue,
            month: i.period,
            title: i.title,
            articleCount: i.articles.length,
            href: `/current-issue?issue=${i.issueId}`,
            fullIssuePdf: i.fullIssuePdf,
            isLatest: i.issueId === CURRENT_ISSUE.issueId,
          })),
      })),
    };
  });

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
          Journal Repository
        </span>
        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E] mt-2">
          Journal Archives
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Historical repository organized strictly by Year → Volume → Issue
        </p>
      </div>

      {/* Archives Tree */}
      <div className="space-y-6">
        {archives.map((yearGroup) => (
          <section key={yearGroup.year} className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 shadow-xs">
            <div className="flex items-center gap-3 border-b border-[#E8D5B5] pb-3 mb-5">
              <FolderArchive className="w-6 h-6 text-[#5B1E1E]" />
              <h2 className="font-headline text-2xl font-bold text-[#5B1E1E]">
                Year {yearGroup.year}
              </h2>
            </div>

            {yearGroup.volumes.map((vol) => (
              <div key={vol.volumeNumber} className="space-y-4">
                <h3 className="font-headline text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B8860B]" />
                  Volume {vol.volumeNumber} ({yearGroup.year})
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                  {vol.issues.map((iss) => (
                    <div
                      key={iss.issueNumber}
                      className="bg-[#F5EFE6]/40 border border-[#E8D5B5] rounded-lg p-5 flex flex-col justify-between hover:border-[#5B1E1E] transition-colors"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-stone-500">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-[#5B1E1E]">Issue {iss.issueNumber}</span>
                            {iss.isLatest && (
                              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                                Latest Issue
                              </span>
                            )}
                          </div>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
                            {iss.month}
                          </span>
                        </div>

                        <h4 className="font-headline text-base font-bold text-stone-900 leading-snug">
                          {iss.title}
                        </h4>

                        <p className="text-xs text-stone-600">
                          Contains {iss.articleCount} Peer-Reviewed Articles
                        </p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-[#E8D5B5]/60 flex items-center justify-between gap-2 text-xs">
                        <Link
                          href={iss.href}
                          className="inline-flex items-center gap-1 text-[#5B1E1E] font-bold hover:underline"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          View Table of Contents
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <a
                          href={iss.fullIssuePdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-stone-700 font-semibold hover:text-[#5B1E1E]"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          Full Issue PDF
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

