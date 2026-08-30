import EditorialCard, { EditorialMember } from "@/components/EditorialCard";
import { Users, Info } from "lucide-react";

const INSTITUTION_ADDRESS = "JMN Medical College and Hospital, Uttar Panchpota, P.O. & P.S. Chakdaha, Dist. Nadia, PIN-741222, West Bengal, India";

const ROSTER_GROUPS: { groupName: string; members: EditorialMember[] }[] = [
  {
    groupName: "Editor-in-Chief",
    members: [
      {
        role: "Editor-in-Chief",
        name: "Dr. Chandana Chakraborti",
        designation: "Professor & HOD, Department of Ophthalmology",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
    ],
  },
  {
    groupName: "Managing Editor",
    members: [
      {
        role: "Managing Editor",
        name: "Dr. Sarmila Mallick",
        designation: "Professor & HOD, Department of Community Medicine",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
    ],
  },
  {
    groupName: "Associate Editors",
    members: [
      {
        role: "Associate Editor",
        name: "Prof. (Dr.) Partha Tripathi",
        designation: "Professor & HOD, Department of Paediatrics",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
      {
        role: "Associate Editor",
        name: "Prof. (Dr.) Saif Omar",
        designation: "Professor & HOD, Department of Anatomy",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
      {
        role: "Associate Editor",
        name: "Prof. (Dr.) Aditi Saha",
        designation: "Professor & HOD, Department of Biochemistry",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
    ],
  },
  {
    groupName: "Assistant Editors",
    members: [
      {
        role: "Assistant Editor",
        name: "Dr. Suprasanna Bandyopadhyay",
        designation: "Assistant Professor, Department of Microbiology",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
      {
        role: "Assistant Editor",
        name: "Ms. Namrata Chatterjee",
        designation: "Senior Resident (Faculty), Department of Biochemistry",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
    ],
  },
  {
    groupName: "Editorial Board Members",
    members: [
      {
        role: "Member",
        name: "Dr. Saujen Basu",
        designation: "Professor & HOD, Department of Physiology",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
      {
        role: "Member",
        name: "Dr. Arpita Das",
        designation: "Assistant Professor, Department of Community Medicine",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
      {
        role: "Member",
        name: "Dr. Subhojit Roy",
        designation: "Assistant Professor, Department of Community Medicine",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
      {
        role: "Member",
        name: "Dr. Barnick Choudhury",
        designation: "Professor & HOD, Department of Pathology",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
      {
        role: "Member",
        name: "Dr. Matiur Rahaman",
        designation: "Professor & HOD, Department of Pharmacology",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
    ],
  },
  {
    groupName: "Patron & Advisor",
    members: [
      {
        role: "Patron",
        name: "Dr. Aniruddha Neogi",
        designation: "Professor & Director (Academic Affairs), Department of Physiology",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
      {
        role: "Advisor",
        name: "Ms. Sila Singh Ghosh",
        designation: "Trustee, JMN Education and Research Foundation",
        institution: "JMN Medical College and Hospital",
        address: INSTITUTION_ADDRESS,
      },
    ],
  },
];

export default function EditorialBoardPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-[#E8D5B5] pb-4">
        <span className="text-xs font-bold text-[#5B1E1E] uppercase tracking-wider bg-[#F5EFE6] px-3 py-1 rounded-full">
          Governance & Peer Review Leadership
        </span>
        <h1 className="font-masthead text-3xl sm:text-4xl font-bold text-[#5B1E1E] mt-2">
          Editorial Board Roster
        </h1>
        <p className="font-headline text-stone-600 text-sm sm:text-base mt-1">
          Text listing of the 14 Editorial Board members governing JMN Journal of Medical Sciences
        </p>
      </div>

      {/* Compliance Note */}
      <div className="bg-[#F5EFE6]/60 border border-[#E8D5B5] rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-stone-700">
        <Info className="w-5 h-5 text-[#5B1E1E] shrink-0 mt-0.5" />
        <div>
          <strong className="text-stone-900 block font-semibold">ISSN India Compliance Notice:</strong>
          Every member below is listed in plain selectable text with institutional designation and department address. Institutional e-mail and institution-hosted profile links are being collected from each member and will be added here as they are confirmed &mdash; only real, verified values are published on this page.
        </div>
      </div>

      {/* Roster Groups */}
      <div className="space-y-10">
        {ROSTER_GROUPS.map((group) => (
          <section key={group.groupName} className="space-y-4">
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-[#5B1E1E] border-b-2 border-[#5B1E1E] pb-1.5 inline-block">
              {group.groupName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.members.map((member) => (
                <EditorialCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
