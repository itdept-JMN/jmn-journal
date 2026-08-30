import Link from "next/link";
import { Mail, MapPin, Building, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t-4 border-[#5B1E1E] pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: About & Masthead */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="font-masthead text-2xl text-white font-bold tracking-tight">
              JMN Journal of Medical Sciences
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              A biannual, double-blind peer-reviewed, open-access medical journal dedicated to publishing high-quality medical research and advancing healthcare clinical practice.
            </p>
            <div className="inline-block text-[11px] font-semibold text-[#E8D5B5] bg-stone-800 border border-stone-700 px-2.5 py-1 rounded">
              Subject: Medical Sciences
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8860B] border-b border-stone-800 pb-1">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Journal
                </Link>
              </li>
              <li>
                <Link href="/editorial-board" className="hover:text-white transition-colors">
                  Editorial Board Roster
                </Link>
              </li>
              <li>
                <Link href="/author-guidelines" className="hover:text-white transition-colors">
                  Author Guidelines
                </Link>
              </li>
              <li>
                <Link href="/current-issue" className="hover:text-white transition-colors">
                  Current Issue (Vol 1, Issue 1)
                </Link>
              </li>
              <li>
                <Link href="/archives" className="hover:text-white transition-colors">
                  Journal Archives
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policy & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8860B] border-b border-stone-800 pb-1">
              Ethics & Governance
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/peer-review-ethics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" />
                  Peer Review & Ethics Policy
                </Link>
              </li>
              <li>
                <Link href="/submission" className="hover:text-white transition-colors">
                  Manuscript Processing Charges
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-white transition-colors">
                  Downloads & Forms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Editorial Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Institution Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8860B] border-b border-stone-800 pb-1">
              Institutional Address
            </h4>
            <div className="text-xs text-stone-300 space-y-2 leading-snug">
              <div className="flex items-start gap-2">
                <Building className="w-4 h-4 text-[#E8D5B5] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">JMN Medical College and Hospital</strong>
                  <span>Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN-741222, West Bengal, India</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-stone-800 text-stone-400">
                <Mail className="w-3.5 h-3.5 text-[#E8D5B5] shrink-0" />
                <span>journal@jmnmch.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bibliographic ISSN Status Strip */}
        <div className="border-t border-stone-800 pt-6 pb-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center gap-4">
            <span><strong>ISSN (Print):</strong> Pending Assignment</span>
            <span className="hidden md:inline">·</span>
            <span><strong>ISSN (Online):</strong> Pending Assignment</span>
            <span className="hidden md:inline">·</span>
            <span><strong>Frequency:</strong> Biannual</span>
          </div>
          <div className="font-masthead italic text-stone-300 text-sm">
            "A Legacy of Learning"
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-stone-800/60 pt-4 text-center text-[11px] text-stone-500">
          © {new Date().getFullYear()} JMN Journal of Medical Sciences. Published by JMN Education and Research Foundation. All rights reserved. Open Access.
        </div>
      </div>
    </footer>
  );
}
