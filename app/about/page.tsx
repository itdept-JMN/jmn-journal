import JournalParticulars from "@/components/JournalParticulars";
import { Building, Award, CheckCircle, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
          Institutional Profile
        </span>
        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E] mt-2">
          About JMN Journal of Medical Sciences
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Official Biannual Open-Access Journal of JMN Medical College and Hospital
        </p>
      </div>

      {/* Main Copy */}
      <section className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="font-headline text-xl font-bold text-[#5B1E1E] mb-2">
            About the Journal
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            JMN Journal of Medical Sciences is an official publication of JMN Medical College and Hospital, which began its academic journey in 2023 with the MBBS course. The journal is a double-blind peer-reviewed, open-access publication, with a frequency of two issues per year (Biannual). The first issue will be published soon.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-xl font-bold text-[#5B1E1E] mb-2">
            Aim of the Journal
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            JMN Journal of Medical Sciences aims to disseminate reliable, evidence-based knowledge in the field of medicine and healthcare. It provides a platform for faculty, postgraduate trainees, and undergraduate students to publish research findings and emerging developments in medical sciences. The journal helps healthcare professionals stay current with new discoveries, diagnostic methods, treatments, and patient-care practices, and promotes critical thinking, scientific discussion, and exchange of ideas among researchers and practitioners — supporting evidence-based practice and better patient outcomes.
          </p>
        </div>

        <div>
          <h2 className="font-headline text-xl font-bold text-[#5B1E1E] mb-2">
            Scope of the Journal
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            JMN Journal of Medical Sciences covers all branches of medical sciences, including public health, clinical research, environmental health, social determinants of health, and related policy, programmes, and law, across all medical specialties concerned with patient care. It particularly encourages research relevant to the Indian subcontinent and South-East Asia. The journal welcomes original research articles, review articles, special articles, case reports, commentaries, systematic reviews, meta-analyses, book reviews, and letters to the editor.
          </p>
        </div>
      </section>

      {/* Founding Trust & Institutional Relationship */}
      <section className="bg-[#F5EFE6]/50 border border-[#E8D5B5] rounded-xl p-6 sm:p-8 space-y-4">
        <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] flex items-center gap-2">
          <Building className="w-5 h-5 text-[#B8860B]" />
          Founding Trust & Institutional Background
        </h2>
        <p className="text-sm text-stone-700 leading-relaxed">
          The journal is published under the aegis of <strong>JMN Education and Research Foundation</strong> (a registered public charitable trust under Deed No. 00096 of 2020, Book No. IV, Volume No. 1303-2020, pages 1532–1562, Office of the A.D.S.R. Kalyani, West Bengal). The Foundation is the founding trust of <strong>JMN Medical College and Hospital</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
          <div className="bg-[#FDFBF8] p-4 rounded-lg border border-[#E8D5B5]">
            <h3 className="font-bold text-stone-900 mb-1">Institution & Editorial Office</h3>
            <p className="text-stone-700">JMN Medical College and Hospital</p>
            <p className="text-stone-600">Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN-741222, West Bengal, India</p>
          </div>
          <div className="bg-[#FDFBF8] p-4 rounded-lg border border-[#E8D5B5]">
            <h3 className="font-bold text-stone-900 mb-1">Chairperson / Trustee</h3>
            <p className="text-stone-700">Dr. Sila Singh Ghosh</p>
            <p className="text-stone-600">JMN Education and Research Foundation</p>
          </div>
        </div>
      </section>

      {/* Particulars Block */}
      <JournalParticulars />
    </div>
  );
}
