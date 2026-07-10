import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { desc } from "drizzle-orm";

import AddNewInterview from "@/components/ui/AddNewInterview";
import InterviewCard from "@/components/ui/InterviewCard";

import {
  Briefcase,
  BrainCircuit,
  FolderGit2,
  Sparkles,
} from "lucide-react";

export default async function Dashboard() {
  const interviews = await db
    .select()
    .from(MockInterview)
    .orderBy(desc(MockInterview.id));

  const totalInterviews = interviews.length;

  const latestInterview =
    interviews.length > 0
      ? interviews[0].jobPosition
      : "No Interviews";

  const latestExperience =
    interviews.length > 0
      ? interviews[0].jobExperience
      : "0";

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Hero */}

        <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-10 text-white shadow-xl">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>

              <p className="uppercase tracking-widest text-violet-200 text-sm font-semibold">
                AI MOCK INTERVIEW
              </p>

              <h1 className="text-4xl font-bold mt-3">
                Welcome Back 👋
              </h1>

              <p className="text-violet-100 mt-4 max-w-2xl">
                Practice interviews, improve your communication,
                receive AI-powered feedback and prepare for your
                dream job with confidence.
              </p>

            </div>

            <div>
              <AddNewInterview />
            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <FolderGit2 className="h-8 w-8 text-violet-600 mb-4" />

            <p className="text-gray-500 text-sm">
              Total Interviews
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {totalInterviews}
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <Briefcase className="h-8 w-8 text-blue-600 mb-4" />

            <p className="text-gray-500 text-sm">
              Latest Role
            </p>

            <h2 className="text-xl font-bold mt-1 line-clamp-1">
              {latestInterview}
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <BrainCircuit className="h-8 w-8 text-orange-500 mb-4" />

            <p className="text-gray-500 text-sm">
              Experience
            </p>

            <h2 className="text-3xl font-bold mt-1">
              {latestExperience}
              <span className="text-lg ml-1">yrs</span>
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <Sparkles className="h-8 w-8 text-green-600 mb-4" />

            <p className="text-gray-500 text-sm">
              AI Status
            </p>

            <h2 className="text-2xl font-bold mt-1 text-green-600">
              Ready
            </h2>

          </div>

        </div>

        {/* Recent Interviews */}

        <div className="mt-12">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-3xl font-bold">
                Recent Interviews
              </h2>

              <p className="text-gray-500 mt-1">
                Continue practicing and review your previous interviews.
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {interviews.map((interview) => (

              <InterviewCard
                key={interview.id}
                interview={interview}
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}