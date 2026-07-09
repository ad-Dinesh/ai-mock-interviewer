import { db } from "@/lib/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import FeedbackHeader from "@/components/ui/FeedbackHeader";
import FeedbackCard from "@/components/ui/FeedbackCard";

import { ArrowLeft, RotateCcw, FileQuestion } from "lucide-react";

interface Props {
  params: Promise<{
    interviewId: string;
  }>;
}

export default async function FeedbackPage({ params }: Props) {
  const { interviewId } = await params;

  const feedbackList = await db
    .select()
    .from(UserAnswer)
    .where(eq(UserAnswer.mockIdRef, Number(interviewId)));

  const totalQuestions = feedbackList.length;

  const answeredQuestions = feedbackList.filter(
    (item) => item.userAnswer && item.userAnswer.trim() !== ""
  ).length;

  const totalRating = feedbackList.reduce(
    (sum, item) => sum + Number(item.rating ?? 0),
    0
  );

  const average =
    totalQuestions > 0 ? (totalRating / totalQuestions).toFixed(1) : "0.0";

  const performance =
    Number(average) >= 8
      ? "Excellent"
      : Number(average) >= 6
      ? "Good"
      : Number(average) >= 4
      ? "Average"
      : "Needs Improvement";

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        {/* Header */}
        <FeedbackHeader
          average={average}
          performance={performance}
          totalQuestions={totalQuestions}
          answeredQuestions={answeredQuestions}
        />

        {/* Empty State */}
        {feedbackList.length === 0 && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-16 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <FileQuestion className="h-7 w-7 text-slate-400" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              No feedback available
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-slate-500">
              Complete an interview first to generate your AI feedback report.
            </p>

            <Link href="/dashboard">
              <Button className="mt-8 rounded-xl px-6">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        )}

        {/* Feedback Cards */}
        {feedbackList.length > 0 && (
          <div className="mt-10 space-y-6">
            {/* Section label */}
            <div className="flex items-center gap-3 px-1">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Question breakdown
              </h2>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {feedbackList.map((item, index) => (
              <FeedbackCard key={item.id} item={item} index={index} />
            ))}
          </div>
        )}

        {/* Bottom Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-xl px-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          <Link href={`/dashboard/interview/${interviewId}`}>
            <Button className="rounded-xl bg-slate-900 px-6 hover:bg-slate-800">
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake Interview
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}