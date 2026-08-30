import { ShieldCheck, EyeOff, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function PeerReviewEthicsPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
          Editorial Governance
        </span>
        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E] mt-2">
          Peer Review & Publication Ethics
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Standards governing double-blind evaluation, authorship, conflicts of interest, and anti-plagiarism oversight
        </p>
      </div>

      <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 sm:p-8 space-y-8 text-stone-800 text-sm leading-relaxed">
        
        {/* Section 1: Double-Blind Peer Review */}
        <section className="space-y-3">
          <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] border-b border-[#E8D5B5] pb-2 flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-[#B8860B]" />
            Double-Blind Peer Review Policy
          </h2>
          <p>
            JMN Journal of Medical Sciences enforces a strict <strong>double-blind peer review policy</strong> for all submitted research manuscripts. Both the reviewer identities and the author identities remain completely concealed from each other throughout the review workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs pt-2">
            {[
              { step: "1. Initial Screening", desc: "Technical check for scope, formatting, and plagiarism screening." },
              { step: "2. Anonymized Review", desc: "Assigned to minimum 2 subject experts without author identifiers." },
              { step: "3. Editorial Decision", desc: "Accept, minor revision, major revision, or reject based on reports." },
              { step: "4. Verification", desc: "Re-evaluation of revised manuscript prior to formal acceptance." },
            ].map((s) => (
              <div key={s.step} className="bg-[#F5EFE6]/50 border border-[#E8D5B5] rounded-lg p-3 space-y-1">
                <div className="font-bold text-[#5B1E1E]">{s.step}</div>
                <p className="text-stone-600 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: ICMJE Authorship Criteria */}
        <section className="space-y-3">
          <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] border-b border-[#E8D5B5] pb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B8860B]" />
            ICMJE Authorship Criteria
          </h2>
          <p>
            All listed authors must qualify under the four International Committee of Medical Journal Editors (ICMJE) criteria:
          </p>
          <div className="space-y-2 bg-[#F5EFE6]/30 p-4 rounded-lg border border-[#E8D5B5]">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
              <span>Substantial contributions to conception/design of the work or acquisition/analysis/interpretation of data.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
              <span>Drafting the manuscript or revising it critically for important intellectual content.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
              <span>Final approval of the version to be published.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
              <span>Agreement to be accountable for all aspects of the work's accuracy and scientific integrity.</span>
            </div>
          </div>
        </section>

        {/* Section 3: Plagiarism & Anti-Misconduct Policy */}
        <section className="space-y-3">
          <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] border-b border-[#E8D5B5] pb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            UGC Plagiarism Policy & Scientific Misconduct
          </h2>
          <p>
            The journal strictly complies with University Grants Commission (UGC) anti-plagiarism regulations. Every submission is subjected to automated similarity analysis prior to peer review. Manuscripts exhibiting similarity index exceeding 10% (excluding references and standard methodology text) will be returned for revision or rejected.
          </p>
          <p>
            Fabrication, falsification of data, duplicate submission, or redundant publication will result in immediate rejection, notification to author institutions, and permanent retraction if discovered post-publication.
          </p>
        </section>

        {/* Section 4: Conflict of Interest */}
        <section className="space-y-3">
          <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] border-b border-[#E8D5B5] pb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#B8860B]" />
            Conflict of Interest Disclosure
          </h2>
          <p>
            Authors must declare any financial or personal relationships with commercial entities, funding bodies, or institutions that could inappropriately influence their work. A signed Conflict of Interest declaration form must accompany every manuscript submission.
          </p>
        </section>

      </div>
    </div>
  );
}
