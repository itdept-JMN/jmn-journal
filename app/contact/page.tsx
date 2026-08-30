import { Mail, MapPin, Building, User, Laptop, BookOpen } from "lucide-react";

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
          Editorial office address, Editor contact details, and IT management support
        </p>
      </div>

      {/* Primary Contact Card: Institution & Editorial Office */}
      <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="font-headline text-2xl font-bold text-[#5B1E1E] flex items-center gap-2 border-b border-[#E8D5B5] pb-3">
          <Building className="w-6 h-6 text-[#B8860B]" />
          Institution & Editorial Office Address
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-800">
          <div className="space-y-3 bg-[#F5EFE6]/40 p-5 rounded-lg border border-[#E8D5B5]/60">
            <h3 className="font-bold text-stone-900 text-base">JMN Medical College and Hospital</h3>
            <div className="space-y-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5B1E1E] shrink-0 mt-0.5" />
                <span>Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN-741222, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-[#E8D5B5]/60">
                <Mail className="w-4 h-4 text-[#5B1E1E] shrink-0" />
                <a href="mailto:editor@jmnmedicalcollege.org" className="text-[#5B1E1E] font-semibold hover:underline">
                  editor@jmnmedicalcollege.org
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3 bg-[#F5EFE6]/40 p-5 rounded-lg border border-[#E8D5B5]/60">
            <h3 className="font-bold text-stone-900 text-base">Editor-in-Chief Contact</h3>
            <div className="space-y-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-[#5B1E1E] shrink-0 mt-0.5" />
                <div>
                  <strong>Dr. Chandana Chakraborti</strong>
                  <p className="text-xs text-stone-600">Professor & HOD, Department of Ophthalmology</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-[#E8D5B5]/60">
                <Mail className="w-4 h-4 text-[#5B1E1E] shrink-0" />
                <a href="mailto:c.chakraborti@jmnmedicalcollege.org" className="text-[#5B1E1E] font-semibold hover:underline">
                  c.chakraborti@jmnmedicalcollege.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journal Management Team (Separately Labelled) */}
      <section className="bg-[#F5EFE6]/50 border border-[#E8D5B5] rounded-xl p-6 sm:p-8 space-y-4">
        <div>
          <h2 className="font-headline text-xl font-bold text-[#5B1E1E] flex items-center gap-2">
            <Laptop className="w-5 h-5 text-[#B8860B]" />
            Journal Management & IT Operations Team
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Note: The operational management team handles website infrastructure, library archiving, and technical support. They are excluded from the ISSN Editorial Board roster.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Mr. Harsh Kumar Shaw */}
          <div className="bg-[#FDFBF8] p-5 rounded-lg border border-[#E8D5B5] space-y-2">
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-[#5B1E1E]" />
              <h3 className="font-bold text-stone-900 text-sm">Mr. Harsh Kumar Shaw</h3>
            </div>
            <p className="text-xs font-semibold text-[#5B1E1E]">IT Executive, JMN Medical College and Hospital</p>
            <p className="text-xs text-stone-600">Responsible for website architecture, digital repository management, and technical compliance.</p>
            <div className="text-xs font-medium text-stone-700 pt-1 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
              <a href="mailto:h.shaw@jmnmedicalcollege.org" className="text-[#5B1E1E] hover:underline">
                h.shaw@jmnmedicalcollege.org
              </a>
            </div>
          </div>

          {/* Ms. Debahuti Roy */}
          <div className="bg-[#FDFBF8] p-5 rounded-lg border border-[#E8D5B5] space-y-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#5B1E1E]" />
              <h3 className="font-bold text-stone-900 text-sm">Ms. Debahuti Roy</h3>
            </div>
            <p className="text-xs font-semibold text-[#5B1E1E]">Librarian, JMN Medical College and Hospital</p>
            <p className="text-xs text-stone-600">Responsible for bibliographic archiving, indexation records, and physical/digital holdings.</p>
            <div className="text-xs font-medium text-stone-700 pt-1 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
              <a href="mailto:d.roy@jmnmedicalcollege.org" className="text-[#5B1E1E] hover:underline">
                d.roy@jmnmedicalcollege.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
