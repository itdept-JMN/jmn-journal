import { Mail, MapPin, Building, User, Laptop, BookOpen, Phone, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
          Editorial & Operational Office
        </span>
        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E] mt-2">
          Contact Us
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Publisher & Editorial Office address, Owner details, and IT operations contact
        </p>
      </div>

      {/* ISSN Application Confirmation Notice */}
      <div className="bg-[#F5EFE6] border border-[#E8D5B5] rounded-xl p-5 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#5B1E1E]" />
            <h2 className="font-headline text-base font-bold text-stone-900">
              ISSN Application Record (National Science Library / NIScPR, New Delhi)
            </h2>
          </div>
          <p className="text-xs text-stone-600">
            Application Request ID: <strong>77227</strong> · Registered: <strong>Aug 29, 2026</strong> · Publication Format: <strong>Online</strong> · Frequency: <strong>Two issues per year</strong>
          </p>
        </div>
        <a
          href="https://journal.jmnmedicalcollege.org.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#5B1E1E] bg-[#FDFBF8] border border-[#E8D5B5] px-3 py-1.5 rounded-lg hover:bg-[#E8D5B5] transition-colors"
        >
          https://journal.jmnmedicalcollege.org.in/
        </a>
      </div>

      {/* Primary Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Publisher & Responsible Person */}
        <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="font-headline text-xl font-bold text-[#5B1E1E] flex items-center gap-2 border-b border-[#E8D5B5] pb-3 mb-3">
              <Building className="w-5 h-5 text-[#B8860B]" />
              Issuing / Publishing Body & Owner
            </h2>

            <div className="space-y-2 text-xs sm:text-sm text-stone-700">
              <div>
                <span className="text-stone-500 font-medium text-xs block">Name of Issuing / Publishing Body:</span>
                <strong className="text-stone-900 text-base font-bold">JMN Medical College</strong>
              </div>
              <div className="pt-2 border-t border-[#E8D5B5]/60">
                <span className="text-stone-500 font-medium text-xs block">Owner / Responsible Person:</span>
                <strong className="text-stone-900 font-semibold">Harsh Kumar Shaw</strong>
                <p className="text-xs text-stone-600">IT Executive & Digital Repository Administrator</p>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-[#E8D5B5]/60">
                <MapPin className="w-4 h-4 text-[#5B1E1E] shrink-0 mt-0.5" />
                <span>JMN Medical College, Uttar Panchpota, P.O & P.S. Chakdaha, Dist. Nadia, Pin: 741222, West Bengal, India</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-[#E8D5B5]/60 text-xs">
            <div className="flex items-center gap-2 text-stone-700">
              <Mail className="w-4 h-4 text-[#5B1E1E] shrink-0" />
              <a href="mailto:journal@jmnmch.com" className="text-[#5B1E1E] font-semibold hover:underline">
                journal@jmnmch.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <Phone className="w-4 h-4 text-[#5B1E1E] shrink-0" />
              <span className="font-semibold text-stone-800">+91 7980415085</span>
            </div>
          </div>
        </div>

        {/* Editor-in-Chief & Editorial Office */}
        <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="font-headline text-xl font-bold text-[#5B1E1E] flex items-center gap-2 border-b border-[#E8D5B5] pb-3 mb-3">
              <User className="w-5 h-5 text-[#B8860B]" />
              Editor-in-Chief & Editorial Desk
            </h2>

            <div className="space-y-2 text-xs sm:text-sm text-stone-700">
              <div>
                <strong className="text-stone-900 text-base font-bold block">Dr. Chandana Chakraborti</strong>
                <p className="text-xs text-stone-600">MD (AIIMS), FAICO (Oculoplasty)</p>
                <p className="text-xs text-stone-600 font-semibold">Professor & HOD, Department of Ophthalmology, JMN Medical College</p>
              </div>
              <div className="pt-2 border-t border-[#E8D5B5]/60">
                <span className="text-stone-500 font-medium text-xs block">Editorial Office Address:</span>
                <span>Department of Ophthalmology / Central Library, JMN Medical College, Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN: 741222, West Bengal, India</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-[#E8D5B5]/60 text-xs">
            <div className="flex items-center gap-2 text-stone-700">
              <Mail className="w-4 h-4 text-[#5B1E1E] shrink-0" />
              <a href="mailto:journal@jmnmch.com" className="text-[#5B1E1E] font-semibold hover:underline">
                journal@jmnmch.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <Phone className="w-4 h-4 text-[#5B1E1E] shrink-0" />
              <span className="font-semibold text-stone-800">+91 7980415085</span>
            </div>
          </div>
        </div>
      </div>

      {/* Journal Operations & Digital Administration Team */}
      <section className="bg-[#F5EFE6]/50 border border-[#E8D5B5] rounded-xl p-6 sm:p-8 space-y-4">
        <div>
          <h2 className="font-headline text-xl font-bold text-[#5B1E1E] flex items-center gap-2">
            <Laptop className="w-5 h-5 text-[#B8860B]" />
            Digital Infrastructure & Operational Support
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Note: The technical and library operations team manages site hosting, digital archiving, and indexing compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Mr. Harsh Kumar Shaw */}
          <div className="bg-[#FDFBF8] p-5 rounded-lg border border-[#E8D5B5] space-y-2">
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-[#5B1E1E]" />
              <h3 className="font-bold text-stone-900 text-sm">Mr. Harsh Kumar Shaw</h3>
            </div>
            <p className="text-xs font-semibold text-[#5B1E1E]">IT Executive, JMN Medical College (Owner / Responsible Person in ISSN App #77227)</p>
            <p className="text-xs text-stone-600">Responsible for cloud deployment, domain management, and technical compliance.</p>
            <div className="text-xs font-medium text-stone-700 pt-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                <a href="mailto:journal@jmnmch.com" className="text-[#5B1E1E] hover:underline">journal@jmnmch.com</a>
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                7980415085
              </span>
            </div>
          </div>

          {/* Ms. Debahuti Roy */}
          <div className="bg-[#FDFBF8] p-5 rounded-lg border border-[#E8D5B5] space-y-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#5B1E1E]" />
              <h3 className="font-bold text-stone-900 text-sm">Ms. Debahuti Roy</h3>
            </div>
            <p className="text-xs font-semibold text-[#5B1E1E]">Librarian, JMN Medical College</p>
            <p className="text-xs text-stone-600">Responsible for library submissions, physical holdings, and indexing records.</p>
            <div className="text-xs font-medium text-stone-700 pt-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                <a href="mailto:journal@jmnmch.com" className="text-[#5B1E1E] hover:underline">journal@jmnmch.com</a>
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                7980415085
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
