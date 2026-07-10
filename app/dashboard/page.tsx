import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { desc } from "drizzle-orm";

import AddNewInterview from "@/components/ui/AddNewInterview";
import InterviewCard from "@/components/ui/InterviewCard";

import { Briefcase, BrainCircuit, FolderGit2, Sparkles } from "lucide-react";

export default async function Dashboard() {
  const interviews = await db
    .select()
    .from(MockInterview)
    .orderBy(desc(MockInterview.id));

  const totalInterviews = interviews.length;

  const latestInterview =
    interviews.length > 0 ? interviews[0].jobPosition : "No interviews";

  const latestExperience =
    interviews.length > 0 ? interviews[0].jobExperience : "0";

  const stats = [
    {
      icon: FolderGit2,
      label: "Total interviews",
      value: totalInterviews,
    },
    {
      icon: Briefcase,
      label: "Latest role",
      value: latestInterview,
    },
    {
      icon: BrainCircuit,
      label: "Experience",
      value: `${latestExperience} yrs`,
    },
    {
      icon: Sparkles,
      label: "AI status",
      value: "Ready",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0B1220] p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                AI mock interview
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Welcome back
              </h1>
              <p className="mt-3 text-base leading-relaxed text-slate-400">
                Practice interviews, sharpen your communication, and get
                AI-powered feedback to prepare for your dream job.
              </p>
            </div>

            <div className="relative">
              <AddNewInterview />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <stat.icon className="h-5 w-5 text-slate-400" />
              <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">
                {stat.label}
              </p>
              <p className="mt-1 truncate text-xl font-semibold text-slate-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Interviews */}
        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-900">
              Recent interviews
            </h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {interviews.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center">
              <p className="text-lg font-semibold text-slate-900">
                No interviews yet
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Create your first mock interview to get started.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {interviews.map((interview) => (
                <InterviewCard key={interview.id} interview={interview} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}