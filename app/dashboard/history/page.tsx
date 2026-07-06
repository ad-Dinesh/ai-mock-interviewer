import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Clock, Sparkles } from "lucide-react";

export default async function HistoryPage() {
  const interviews = await db
    .select()
    .from(MockInterview)
    .orderBy(desc(MockInterview.createdAt));

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Interview History
          </h1>
          <p className="text-gray-500 mt-1">
            Review your past mock interviews and revisit your feedback.
          </p>
        </div>
        <Link href="/dashboard">
          <Button className="gap-2">
            <Sparkles className="w-4 h-4" />
            New Interview
          </Button>
        </Link>
      </div>

      {/* Empty state */}
      {interviews.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center py-24 border border-dashed rounded-2xl bg-gray-50">
          <div className="bg-white p-4 rounded-full shadow-sm mb-4">
            <Briefcase className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">
            No interviews yet
          </h3>
          <p className="text-gray-500 mt-1 mb-4 max-w-sm">
            Start your first mock interview to see your history and feedback here.
          </p>
          <Link href="/dashboard">
            <Button>Start an Interview</Button>
          </Link>
        </div>
      )}

      {/* Interview grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {interviews.map((interview) => (
          <Card
            key={interview.id}
            className="group relative overflow-hidden border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />

            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                  {interview.jobPosition || "Untitled Role"}
                </h3>
                <span className="flex items-center gap-1 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  <Clock className="w-3 h-3" />
                  {interview.jobExperience}
                  {Number(interview.jobExperience) === 1 ? " yr" : " yrs"}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-500 line-clamp-2">
                {interview.jobDesc || "No description provided."}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
                {interview.createdAt}
              </div>

              <div className="flex gap-2 pt-2">
                <Link
                  href={`/dashboard/interview/${interview.id}/feedback`}
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    View Feedback
                  </Button>
                </Link>
                <Link
                  href={`/dashboard/interview/${interview.id}`}
                  className="flex-1"
                >
                  <Button size="sm" className="w-full">
                    Retake
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}