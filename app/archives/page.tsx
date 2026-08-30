import Link from "next/link";
import issueData from "@/content/issues/2026-v1-i1.json";
import { FolderArchive, Calendar, BookOpen, ArrowRight, Download } from "lucide-react";

export default function ArchivesPage() {
  const archives = [
    {
      year: 2026,
      volumes: [
        {
          volumeNumber: 1,
          issues: [
            {
              issueNumber: 1,
              month: "January–June 2026",
              title: issueData.title,
              articleCount: issueData.articles.length,
              fullIssuePdf: issueData.fullIssuePdf,
              href: "/current-issue",
            },
          ],
        },
      ],
    },
  ];

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
          Historical repository organized strictly Year → Volume → Issue
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
                  Volume {vol.volumeNumber}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                  {vol.issues.map((iss) => (
                    <div
                      key={iss.issueNumber}
                      className="bg-[#F5EFE6]/40 border border-[#E8D5B5] rounded-lg p-5 flex flex-col justify-between hover:border-[#5B1E1E] transition-colors"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-stone-500">
                          <span className="font-semibold text-[#5B1E1E]">Issue {iss.issueNumber}</span>
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
                          className="inline-flex items-center gap-1 text-stone-700 hover:text-[#5B1E1E] bg-[#FDFBF8] border border-[#E8D5B5] px-2.5 py-1 rounded text-[11px] font-semibold"
                        >
                          <Download className="w-3 h-3 text-[#B8860B]" />
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
