import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  ArrowRight,
  LayoutGrid,
  Server,
  Terminal,
  Coffee,
  Code2,
} from "lucide-react";

interface InterviewCardProps {
  interview: any;
}

function getRoleStyle(jobPosition: string) {
  const p = (jobPosition || "").toLowerCase();

  if (p.includes("frontend") || p.includes("front-end") || p.includes("react")) {
    return {
      icon: LayoutGrid,
      bg: "bg-blue-50",
      text: "text-blue-700",
      ring: "ring-blue-100",
    };
  }

  if (p.includes("backend") || p.includes("back-end") || p.includes("node")) {
    return {
      icon: Server,
      bg: "bg-teal-50",
      text: "text-teal-700",
      ring: "ring-teal-100",
    };
  }

  if (p.includes("python")) {
    return {
      icon: Terminal,
      bg: "bg-orange-50",
      text: "text-orange-700",
      ring: "ring-orange-100",
    };
  }

  if (p.includes("java")) {
    return {
      icon: Coffee,
      bg: "bg-violet-50",
      text: "text-violet-700",
      ring: "ring-violet-100",
    };
  }

  return {
    icon: Code2,
    bg: "bg-slate-100",
    text: "text-slate-700",
    ring: "ring-slate-200",
  };
}

export default function InterviewCard({ interview }: InterviewCardProps) {
  const formattedDate = new Date(interview.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  const role = getRoleStyle(interview.jobPosition);
  const RoleIcon = role.icon;

  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${role.bg} ${role.text} ring-1 ${role.ring}`}
        >
          <RoleIcon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-slate-900">
            {interview.jobPosition}
          </h2>
          <p className="mt-0.5 text-sm text-slate-500">
            {interview.jobExperience} year
            {Number(interview.jobExperience) === 1 ? "" : "s"} experience
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
        {interview.jobDesc}
      </p>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <CalendarDays className="h-3.5 w-3.5" />
          {formattedDate}
        </div>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          Ready
        </span>
      </div>

      {/* Button */}
      <Link href={`/dashboard/interview/${interview.id}`}>
        <Button
          variant="outline"
          className="mt-5 w-full rounded-xl border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white"
        >
          Start interview
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </Link>
    </div>
  );
}