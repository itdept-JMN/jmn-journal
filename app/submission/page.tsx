import Link from "next/link";
import { Mail, CheckCircle, AlertCircle, FileText, ArrowRight } from "lucide-react";

export default function SubmissionPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
          Submission Portal
        </span>
        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E] mt-2">
          Submission Guidelines & Processing Charges
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Submission procedure, manuscript requirements, and article processing charges (APC)
        </p>
      </div>

      {/* Submission Box */}
      <div className="bg-[#F5EFE6]/60 border border-[#E8D5B5] rounded-xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#5B1E1E] text-white flex items-center justify-center font-bold">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-headline text-xl font-bold text-stone-900">
              How to Submit Your Manuscript
            </h2>
            <p className="text-xs text-stone-600">
              Direct email submission to the editorial office
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          Authors are invited to submit their completed manuscripts directly via email to the Editorial Office at:
        </p>

        <div className="bg-[#FDFBF8] p-4 rounded-lg border border-[#E8D5B5] inline-block font-mono text-sm sm:text-base font-bold text-[#5B1E1E]">
          journal@jmnmch.com
        </div>

        <div className="space-y-2 text-xs text-stone-700 pt-2 border-t border-[#E8D5B5]/60">
          <p className="font-semibold text-stone-900">Please attach the following files with your email submission:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Title Page with author details and affiliations (Word format)</li>
            <li>Anonymized Blinded Manuscript File (Word format)</li>
            <li>Signed Copyright & Contributor Transfer Form (PDF scan)</li>
            <li>Signed Conflict of Interest Disclosure Statement</li>
          </ul>
        </div>
      </div>

      {/* Zero Submission Fee Banner */}
      <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 space-y-3">
        <div className="flex items-center gap-2 text-[#5B1E1E] font-bold text-base font-headline">
          <CheckCircle className="w-5 h-5 text-[#B8860B]" />
          Zero Initial Submission Fee
        </div>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          There are <strong>no submission fees or charges for peer review</strong>. Authors are required to pay Manuscript Processing Charges (APC) <strong>only if the article is formally accepted for publication</strong> following double-blind peer review. An author who does not wish to pay may withdraw their article prior to publication.
        </p>
      </div>

      {/* Manuscript Processing Charges Table */}
      <section className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 sm:p-8 space-y-4">
        <h2 className="font-headline text-2xl font-bold text-[#5B1E1E]">
          Manuscript Processing Charges (APC) Table
        </h2>
        <p className="text-xs sm:text-sm text-stone-600">
          Charges are levied per accepted article to cover typesetting, copyediting, static web hosting, and DOI registration.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left border-collapse border border-[#E8D5B5]">
            <thead>
              <tr className="bg-[#F5EFE6] text-[#5B1E1E]">
                <th className="p-3.5 border border-[#E8D5B5] font-bold">Article Category</th>
                <th className="p-3.5 border border-[#E8D5B5] font-bold">Indian Authors (INR)</th>
                <th className="p-3.5 border border-[#E8D5B5] font-bold">Foreign Authors (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E8D5B5]/60">
                <td className="p-3.5 border border-[#E8D5B5]/60 font-semibold text-stone-900">
                  Original Research Articles, Systematic Reviews, and Narrative Reviews
                </td>
                <td className="p-3.5 border border-[#E8D5B5]/60 text-stone-800 font-medium">
                  ₹5,000
                </td>
                <td className="p-3.5 border border-[#E8D5B5]/60 text-stone-800 font-medium">
                  USD 30
                </td>
              </tr>
              <tr className="bg-[#F5EFE6]/20">
                <td className="p-3.5 border border-[#E8D5B5]/60 font-semibold text-stone-900">
                  Case Reports, Short Communications, Letters to the Editor, and Policy Briefs
                </td>
                <td className="p-3.5 border border-[#E8D5B5]/60 text-stone-800 font-medium">
                  ₹3,000
                </td>
                <td className="p-3.5 border border-[#E8D5B5]/60 text-stone-800 font-medium">
                  USD 20*
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Flagged Assumption Note */}
        <div className="bg-[#F5EFE6]/60 p-3.5 rounded-lg border border-[#E8D5B5] text-xs text-stone-600 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
          <span>
            <strong>*Note:</strong> The USD 20 figure for foreign case reports applies the 60% ratio of the Indian author tier (₹3,000 / ₹5,000). Confirmed by publisher for launch pricing.
          </span>
        </div>
      </section>

      {/* Guidelines Link */}
      <div className="flex justify-end">
        <Link
          href="/author-guidelines"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B1E1E] hover:underline"
        >
          Review Full Author Guidelines & Word Limits
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
