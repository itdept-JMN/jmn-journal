import Link from "next/link";
import { FileText, Download, CheckSquare, ShieldCheck } from "lucide-react";

export default function AuthorGuidelinesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
          Submission Instructions
        </span>
        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E] mt-2">
          Author Guidelines & Manuscript Formatting
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Comprehensive instructions for authors preparing manuscripts for JMN Journal of Medical Sciences
        </p>
      </div>

      {/* Quick Download Banner */}
      <div className="bg-[#F5EFE6]/50 border border-[#E8D5B5] rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-[#5B1E1E]" />
          <div>
            <h2 className="font-headline text-base font-bold text-stone-900">Download Offline Templates</h2>
            <p className="text-xs text-stone-600">Download author guidelines PDF and Word manuscript submission template</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/downloads"
            className="inline-flex items-center gap-1.5 bg-[#5B1E1E] text-white hover:bg-[#431616] px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download Forms & Templates
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 sm:p-8 space-y-8 text-stone-800 text-sm leading-relaxed">
        
        {/* Section 1: General Information */}
        <section className="space-y-3">
          <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] border-b border-[#E8D5B5] pb-2">
            1. General Requirements & Open Access Policy
          </h2>
          <p>
            JMN Journal of Medical Sciences is a biannual double-blind peer-reviewed open-access publication. All submitted manuscripts must represent original research not published previously nor currently under consideration elsewhere.
          </p>
          <p>
            Manuscripts must be written in clear, concise English. Authors are strongly encouraged to spell out all technical abbreviations in full at first occurrence both in the text and in the abstract.
          </p>
        </section>

        {/* Section 2: Article Types & Word Limits */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] border-b border-[#E8D5B5] pb-2">
            2. Article Categories & Limits
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border-collapse border border-[#E8D5B5]">
              <thead>
                <tr className="bg-[#F5EFE6] text-[#5B1E1E]">
                  <th className="p-3 border border-[#E8D5B5]">Article Type</th>
                  <th className="p-3 border border-[#E8D5B5]">Word Count Limit</th>
                  <th className="p-3 border border-[#E8D5B5]">Abstract Limit</th>
                  <th className="p-3 border border-[#E8D5B5]">Max References</th>
                  <th className="p-3 border border-[#E8D5B5]">Tables / Figures</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E8D5B5]/60">
                  <td className="p-3 font-semibold border border-[#E8D5B5]/60">Original Research Article</td>
                  <td className="p-3 border border-[#E8D5B5]/60">3,500 words</td>
                  <td className="p-3 border border-[#E8D5B5]/60">250 words (Structured)</td>
                  <td className="p-3 border border-[#E8D5B5]/60">30 references</td>
                  <td className="p-3 border border-[#E8D5B5]/60">Up to 6 total</td>
                </tr>
                <tr className="border-b border-[#E8D5B5]/60 bg-[#F5EFE6]/20">
                  <td className="p-3 font-semibold border border-[#E8D5B5]/60">Review / Systematic Review</td>
                  <td className="p-3 border border-[#E8D5B5]/60">4,500 words</td>
                  <td className="p-3 border border-[#E8D5B5]/60">300 words (Unstructured)</td>
                  <td className="p-3 border border-[#E8D5B5]/60">50 references</td>
                  <td className="p-3 border border-[#E8D5B5]/60">Up to 8 total</td>
                </tr>
                <tr className="border-b border-[#E8D5B5]/60">
                  <td className="p-3 font-semibold border border-[#E8D5B5]/60">Case Report / Series</td>
                  <td className="p-3 border border-[#E8D5B5]/60">1,500 words</td>
                  <td className="p-3 border border-[#E8D5B5]/60">150 words</td>
                  <td className="p-3 border border-[#E8D5B5]/60">15 references</td>
                  <td className="p-3 border border-[#E8D5B5]/60">Up to 4 total</td>
                </tr>
                <tr className="border-b border-[#E8D5B5]/60 bg-[#F5EFE6]/20">
                  <td className="p-3 font-semibold border border-[#E8D5B5]/60">Short Communication</td>
                  <td className="p-3 border border-[#E8D5B5]/60">1,200 words</td>
                  <td className="p-3 border border-[#E8D5B5]/60">100 words</td>
                  <td className="p-3 border border-[#E8D5B5]/60">10 references</td>
                  <td className="p-3 border border-[#E8D5B5]/60">Up to 2 total</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-[#E8D5B5]/60">Letter to Editor</td>
                  <td className="p-3 border border-[#E8D5B5]/60">750 words</td>
                  <td className="p-3 border border-[#E8D5B5]/60">N/A</td>
                  <td className="p-3 border border-[#E8D5B5]/60">5 references</td>
                  <td className="p-3 border border-[#E8D5B5]/60">1 total</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: ICMJE Authorship Criteria */}
        <section className="space-y-3">
          <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] border-b border-[#E8D5B5] pb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B8860B]" />
            3. ICMJE Authorship Criteria
          </h2>
          <p>
            In accordance with International Committee of Medical Journal Editors (ICMJE) guidelines, authorship credit must be based on the following 4 criteria:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-stone-700 bg-[#F5EFE6]/30 p-4 rounded-lg border border-[#E8D5B5]/60">
            <li>Substantial contributions to the conception or design of the work; or the acquisition, analysis, or interpretation of data for the work; AND</li>
            <li>Drafting the work or revising it critically for important intellectual content; AND</li>
            <li>Final approval of the version to be published; AND</li>
            <li>Agreement to be accountable for all aspects of the work in ensuring that questions related to the accuracy or integrity of any part of the work are appropriately investigated and resolved.</li>
          </ol>
        </section>

        {/* Section 4: Manuscript Preparation & Structure */}
        <section className="space-y-3">
          <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] border-b border-[#E8D5B5] pb-2">
            4. Manuscript Structure Order
          </h2>
          <p>Each submitted manuscript should follow this order:</p>
          <ul className="list-disc list-inside space-y-1.5 text-stone-700">
             animate-pulse
            <li><strong>Title Page:</strong> Full title (no abbreviations), complete author details, institutional affiliations, and corresponding author email.</li>
            <li><strong>Abstract & Keywords:</strong> 3 to 6 MeSH keywords following the abstract.</li>
            <li><strong>Main Text:</strong> Introduction, Material & Methods, Results, Discussion, Conclusion.</li>
            <li><strong>Declarations:</strong> Ethical approval details, consent statement, conflict of interest declaration, funding source.</li>
            <li><strong>References:</strong> Vancouver style numbering matching occurrence in text.</li>
          </ul>
        </section>

        {/* Section 5: Author Checklist */}
        <section className="space-y-3 bg-[#F5EFE6]/50 p-5 rounded-xl border border-[#E8D5B5]">
          <h2 className="font-headline text-xl font-bold text-[#5B1E1E] flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-[#B8860B]" />
            5. Final Submission Checklist
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
            <li className="flex items-center gap-2">
              <span className="text-[#5B1E1E] font-bold">✓</span> Full unabbreviated title present on title page and abstract.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#5B1E1E] font-bold">✓</span> Signed Copyright & Contributor Transfer Form attached.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#5B1E1E] font-bold">✓</span> Institutional Ethics Committee clearance certificate uploaded for human/animal studies.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#5B1E1E] font-bold">✓</span> Conflict of interest disclosure statement signed by corresponding author.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
