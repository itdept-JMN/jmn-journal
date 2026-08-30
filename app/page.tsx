import JournalParticulars from "@/components/JournalParticulars";
import ArticleCard from "@/components/ArticleCard";
import issueData from "@/content/issues/2026-v1-i1.json";
import Link from "next/link";
import { BookOpen, CheckCircle, ArrowRight, Shield, Award, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-10">
      
      {/* Hero Section */}
      <section className="bg-[#F5EFE6]/50 border border-[#E8D5B5] rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B1E1E] text-[#E8D5B5] text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            Official Biannual Open Access Publication
          </div>
          <h1 className="font-masthead text-3xl sm:text-5xl font-bold text-[#5B1E1E] tracking-tight leading-tight">
            JMN Journal of Medical Sciences
          </h1>
          <p className="font-headline text-lg sm:text-xl text-stone-700 leading-relaxed">
            Disseminating reliable, evidence-based medical knowledge across clinical research, public health, and healthcare delivery in the Indian subcontinent.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/current-issue"
              className="inline-flex items-center gap-2 bg-[#5B1E1E] text-white hover:bg-[#431616] px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-colors"
            >
              Browse Current Issue (Vol 1, Issue 1)
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/submission"
              className="inline-flex items-center gap-2 bg-[#FDFBF8] text-[#5B1E1E] hover:bg-[#E8D5B5] border border-[#E8D5B5] px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Submit Manuscript
            </Link>
          </div>
        </div>
      </section>

      {/* Journal Particulars Table (ISSN Compliance Block) */}
      <section id="particulars">
        <JournalParticulars />
      </section>

      {/* About, Aim, Scope Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About */}
        <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#5B1E1E]/10 text-[#5B1E1E] flex items-center justify-center font-bold mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="font-headline text-xl font-bold text-stone-900 mb-3">
              About the Journal
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              JMN Journal of Medical Sciences is an official publication of JMN Medical College and Hospital, which began its academic journey in 2023 with the MBBS course. The journal is a double-blind peer-reviewed, open-access publication, with a frequency of two issues per year (Biannual).
            </p>
          </div>
          <Link href="/about" className="text-xs font-bold text-[#5B1E1E] hover:underline inline-flex items-center gap-1 mt-4">
            Read Full Profile <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Aim */}
        <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 text-[#B8860B] flex items-center justify-center font-bold mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="font-headline text-xl font-bold text-stone-900 mb-3">
              Aim of the Journal
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Disseminating reliable, evidence-based knowledge in medicine and healthcare. Providing a platform for faculty, postgraduate trainees, and undergraduate students to publish research findings and emerging clinical developments.
            </p>
          </div>
          <Link href="/about" className="text-xs font-bold text-[#5B1E1E] hover:underline inline-flex items-center gap-1 mt-4">
            View Objectives <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Scope */}
        <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-stone-800/10 text-stone-800 flex items-center justify-center font-bold mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-headline text-xl font-bold text-stone-900 mb-3">
              Scope of the Journal
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Covers all branches of medical sciences, public health, clinical research, environmental health, social determinants of health, and related health policy across all specialties concerned with patient care.
            </p>
          </div>
          <Link href="/author-guidelines" className="text-xs font-bold text-[#5B1E1E] hover:underline inline-flex items-center gap-1 mt-4">
            Author Guidelines <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* Structured Objectives */}
      <section className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 sm:p-8">
        <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] mb-2">
          Structured Journal Objectives
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mb-6">
          Core commitments driving the editorial and publication process
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {[
            { title: "Knowledge Dissemination", desc: "Disseminate new and relevant research findings across all branches of medical sciences." },
            { title: "Evidence-Based Practice", desc: "Promote evidence-based clinical and public-health practice to inform diagnosis and care." },
            { title: "Educational Outreach", desc: "Contribute to education of faculty, postgraduates, undergraduates, and researchers." },
            { title: "Policy Influence", desc: "Inform health policy and clinical practice with relevant evidence." },
            { title: "Regional & Global Equity", desc: "Address regional health challenges with focus on South-East Asia and Indian subcontinent." },
            { title: "Interdisciplinary Collaboration", desc: "Foster collaboration across clinical medicine, epidemiology, and public health." },
            { title: "Peer Review Assurance", desc: "Uphold rigorous double-blind peer review for academic validity." },
            { title: "Professional Development", desc: "Support professional growth through scholarly exchange of findings." },
            { title: "Community Engagement", desc: "Promote awareness of medical and public-health issues." },
          ].map((item) => (
            <div key={item.title} className="bg-[#F5EFE6]/30 border border-[#E8D5B5]/60 rounded-lg p-3.5 space-y-1">
              <div className="font-semibold text-stone-900 flex items-center gap-1.5 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-[#B8860B] shrink-0" />
                {item.title}
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audience & Article Types */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F5EFE6]/40 border border-[#E8D5B5] rounded-xl p-6">
          <h3 className="font-headline text-lg font-bold text-[#5B1E1E] mb-3">
            Target Audience
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
            {["Researchers and Academics", "Practitioners & Clinicians", "Postgraduate Trainees and Undergraduate Students", "Policy Makers & Health Administrators", "Healthcare Institutions and Organizations"].map((aud) => (
              <li key={aud} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
                {aud}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#F5EFE6]/40 border border-[#E8D5B5] rounded-xl p-6">
          <h3 className="font-headline text-lg font-bold text-[#5B1E1E] mb-3">
            Types of Articles Accepted
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
            Original Articles · Review Articles / Special Articles · Short Research/Theoretical Articles · Case Study/Case Series Reports · Letters to the Editor · Editorial and Guest Editorial (invited)
          </p>
          <Link
            href="/submission"
            className="text-xs font-bold text-[#5B1E1E] hover:underline inline-flex items-center gap-1"
          >
            View Manuscript Processing Charges & Fees <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* Latest Published Issue Teaser */}
      <section className="space-y-4 pt-4 border-t border-[#E8D5B5]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline text-2xl font-bold text-[#5B1E1E]">
              Current Issue Publications
            </h2>
            <p className="text-xs text-stone-600">
              {issueData.title}
            </p>
          </div>
          <Link
            href="/current-issue"
            className="text-xs font-bold text-[#5B1E1E] hover:underline inline-flex items-center gap-1"
          >
            View Full Issue <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {issueData.articles.map((art) => (
            <ArticleCard
              key={art.id}
              article={art}
              fullIssuePdf={issueData.fullIssuePdf}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
