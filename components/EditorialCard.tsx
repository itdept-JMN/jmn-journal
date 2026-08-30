import { ExternalLink, Mail, MapPin } from "lucide-react";

export interface EditorialMember {
  role: string;
  name: string;
  designation: string;
  department?: string;
  institution: string;
  address: string;
  email?: string;
  profileUrl?: string;
}

export default function EditorialCard({ member }: { member: EditorialMember }) {
  return (
    <div className="bg-[#FDFBF8] border border-[#E8D5B5] rounded-lg p-5 shadow-xs hover:border-[#5B1E1E] transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-headline text-lg font-bold text-stone-900 leading-snug">
            {member.name}
          </h3>
          <span className="shrink-0 text-xs font-semibold text-[#5B1E1E] bg-[#F5EFE6] border border-[#E8D5B5] px-2.5 py-1 rounded-full">
            {member.role}
          </span>
        </div>

        <p className="text-xs font-medium text-stone-700 mb-3 leading-relaxed">
          {member.designation}
        </p>

        <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-200/80 pt-3 mb-4">
          <div className="flex items-start gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
            <span>{member.institution}, {member.address}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
            {member.email ? (
              <a href={`mailto:${member.email}`} className="text-[#5B1E1E] hover:underline">
                {member.email}
              </a>
            ) : (
              <span className="italic text-stone-400">Institutional e-mail pending</span>
            )}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#E8D5B5]/60 flex items-center justify-between text-xs">
        <span className="text-stone-500 font-medium">Faculty Profile</span>
        {member.profileUrl ? (
          <a
            href={member.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#5B1E1E] hover:text-[#B8860B] font-semibold transition-colors"
          >
            View Institutional Profile
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="italic text-stone-400">Profile link pending</span>
        )}
      </div>
    </div>
  );
}
