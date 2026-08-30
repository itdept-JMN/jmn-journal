import { Download, FileText, FileCode, ShieldAlert } from "lucide-react";

export default function DownloadsPage() {
  const downloads = [
    {
      title: "Copyright & Contributor Transfer Form",
      description: "Mandatory form requiring signatures of all co-authors transferring publishing copyright to JMN Education and Research Foundation upon acceptance.",
      filename: "copyright-transfer-form.pdf",
      url: "/downloads/copyright-transfer-form.pdf",
      format: "PDF Document",
      size: "245 KB",
      icon: FileText,
    },
    {
      title: "Manuscript Formatting Template",
      description: "Pre-formatted Microsoft Word template adhering to journal font typography, section headers, reference formatting, and table styles.",
      filename: "manuscript-template.docx",
      url: "/downloads/manuscript-template.docx",
      format: "DOCX Word Template",
      size: "180 KB",
      icon: FileCode,
    },
    {
      title: "Author Guidelines Manual",
      description: "Full printable PDF edition of author instructions, word limits, ICMJE rules, and manuscript preparation guidelines.",
      filename: "author-guidelines.pdf",
      url: "/downloads/author-guidelines.pdf",
      format: "PDF Document",
      size: "420 KB",
      icon: FileText,
    },
    {
      title: "Conflict of Interest Declaration Form",
      description: "Standardized disclosure form for declaring financial interests, institutional grants, or commercial affiliations.",
      filename: "coi-declaration-form.pdf",
      url: "/downloads/coi-declaration-form.pdf",
      format: "PDF Document",
      size: "190 KB",
      icon: ShieldAlert,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
          Author Resources
        </span>
        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E] mt-2">
          Official Downloads & Templates
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Download author forms, Word manuscript templates, and editorial guidelines
        </p>
      </div>

      {/* Grid of Downloads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {downloads.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.filename}
              className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-xl p-6 shadow-xs flex flex-col justify-between hover:border-[#5B1E1E] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#5B1E1E]/10 text-[#5B1E1E] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#B8860B] bg-[#F5EFE6] border border-[#E8D5B5] px-2.5 py-1 rounded">
                    {item.format} · {item.size}
                  </span>
                </div>

                <h2 className="font-headline text-lg font-bold text-stone-900 leading-snug">
                  {item.title}
                </h2>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8D5B5]/60 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-mono">{item.filename}</span>
                <a
                  href={item.url}
                  download
                  className="inline-flex items-center gap-1.5 bg-[#5B1E1E] text-white hover:bg-[#431616] px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download File
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
