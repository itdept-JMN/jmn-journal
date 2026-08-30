export default function JournalParticulars() {
  const particulars = [
    { label: "Title of Journal", value: "JMN Journal of Medical Sciences" },
    { label: "ISSN (Print)", value: "Pending Assignment" },
    { label: "ISSN (Online)", value: "Pending Assignment" },
    { label: "Frequency", value: "Biannual (2 Issues / Year)" },
    { label: "Language", value: "English" },
    { label: "Starting Year", value: "2026" },
    { label: "Publication Format", value: "Print & Online (Open Access)" },
    { label: "Subject", value: "Medical Sciences" },
    { label: "Institution & Editorial Office", value: "JMN Medical College and Hospital, Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN-741222, West Bengal, India" },
    { label: "Editor-in-Chief", value: "Dr. Chandana Chakraborti" },
    { label: "Editorial Email", value: "editor@jmnmedicalcollege.org" },
  ];

  return (
    <div className="bg-[#F5EFE6]/40 border border-[#E8D5B5] rounded-xl p-5 sm:p-6 shadow-xs my-6">
      <div className="flex items-center justify-between border-b border-[#E8D5B5] pb-3 mb-4">
        <div>
          <h2 className="font-headline text-lg sm:text-xl font-bold text-[#5B1E1E]">
            Journal Particulars
          </h2>
          <p className="text-xs text-stone-600 mt-0.5">
            Bibliographic metadata and institutional registration summary (ISSN Compliance Record)
          </p>
        </div>
        <span className="text-xs font-semibold text-[#5B1E1E] bg-[#E8D5B5]/60 border border-[#E8D5B5] px-2.5 py-1 rounded">
          Selectable Text Data
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm text-left text-stone-800 border-collapse">
          <tbody>
            {particulars.map((item, index) => (
              <tr
                key={item.label}
                className={index % 2 === 0 ? "bg-[#FDFBF8]/80" : "bg-[#F5EFE6]/30"}
              >
                <th className="py-2.5 px-3.5 font-semibold text-stone-900 border border-[#E8D5B5]/60 w-1/3 sm:w-1/4">
                  {item.label}
                </th>
                <td className="py-2.5 px-3.5 border border-[#E8D5B5]/60 text-stone-700 select-text">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
