export default function JournalParticulars() {
  const particulars = [
    { label: "Title of Journal", value: "JMN Journal of Medical Sciences" },
    { label: "ISSN Application Request ID", value: "77227 (Registered Aug 29, 2026, NIScPR, New Delhi)" },
    { label: "ISSN (Online)", value: "Applied (Request ID: 77227)" },
    { label: "ISSN (Print)", value: "Applied" },
    { label: "Frequency", value: "Two issues per year (Biannual)" },
    { label: "Language", value: "English" },
    { label: "Starting Year", value: "2025" },
    { label: "Publication Format", value: "Online (Open Access)" },
    { label: "Publication URL", value: "https://journal.jmnmedicalcollege.org.in/" },
    { label: "Subject", value: "Medical sciences" },
    { label: "Name of Issuing / Publishing Body", value: "JMN Medical College" },
    { label: "Owner / Responsible Person", value: "Harsh Kumar Shaw" },
    { label: "Publisher Address", value: "JMN Medical College, Uttar Panchpota, P.O & P.S. Chakdaha, Dist. Nadia, PIN: 741222, West Bengal, India" },
    { label: "Founding Trust", value: "JMN Education and Research Foundation" },
    { label: "Editor-in-Chief", value: "Dr. Chandana Chakraborti" },
    { label: "Contact Email", value: "journal@jmnmch.com" },
    { label: "Contact Mobile", value: "+91 7980415085" },
  ];

  return (
    <div className="bg-[#F5EFE6]/40 border border-[#E8D5B5] rounded-xl p-5 sm:p-6 shadow-xs my-6">
      <div className="flex items-center justify-between border-b border-[#E8D5B5] pb-3 mb-4">
        <div>
          <h2 className="font-headline text-lg sm:text-xl font-bold text-[#5B1E1E]">
            Journal Particulars
          </h2>
          <p className="text-xs text-stone-600 mt-0.5">
            Official bibliographic metadata & ISSN registration details (Application ID: 77227)
          </p>
        </div>
        <span className="text-xs font-semibold text-[#5B1E1E] bg-[#E8D5B5]/60 border border-[#E8D5B5] px-2.5 py-1 rounded">
          ISSN Application Record
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
                  {item.label === "Publication URL" ? (
                    <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-[#5B1E1E] font-semibold underline">
                      {item.value}
                    </a>
                  ) : item.label === "Contact Email" ? (
                    <a href={`mailto:${item.value}`} className="text-[#5B1E1E] font-semibold underline">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
