import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Briefcase,
  ArrowRight,
  Clock3,
} from "lucide-react";

interface InterviewCardProps {
  interview: any;
}

export default function InterviewCard({
  interview,
}: InterviewCardProps) {
  const formattedDate = new Date(
    interview.createdAt
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Top Accent */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 line-clamp-1">
            {interview.jobPosition}
          </h2>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">

            <Briefcase className="h-4 w-4" />

            {interview.jobExperience} Years Experience

          </div>

        </div>

      </div>

      {/* Description */}

      <p className="mt-5 line-clamp-2 text-sm leading-6 text-slate-500">
        {interview.jobDesc}
      </p>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t pt-4">

        <div className="flex items-center gap-2 text-sm text-slate-500">

          <CalendarDays className="h-4 w-4" />

          {formattedDate}

        </div>

        <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">

          <Clock3 className="h-3.5 w-3.5" />

          Ready

        </div>

      </div>

      {/* Button */}

      <Link href={`/dashboard/interview/${interview.id}`}>

        <Button className="mt-6 w-full rounded-xl">

          Start Interview

          <ArrowRight className="ml-2 h-4 w-4" />

        </Button>

      </Link>

    </div>
  );
}