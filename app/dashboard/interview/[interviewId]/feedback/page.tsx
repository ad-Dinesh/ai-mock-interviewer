import { db } from "@/lib/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import FeedbackHeader from "@/components/ui/FeedbackHeader";
import FeedbackCard from "@/components/ui/FeedbackCard";

import {
  ArrowLeft,
  RotateCcw,
} from "lucide-react";

interface Props {
  params: Promise<{
    interviewId: string;
  }>;
}

export default async function FeedbackPage({
  params,
}: Props) {
  const { interviewId } = await params;

  const feedbackList = await db
    .select()
    .from(UserAnswer)
    .where(
      eq(
        UserAnswer.mockIdRef,
        Number(interviewId)
      )
    );

  const totalQuestions = feedbackList.length;

  const answeredQuestions = feedbackList.filter(
    (item) =>
      item.userAnswer &&
      item.userAnswer.trim() !== ""
  ).length;

  const totalRating = feedbackList.reduce(
    (sum, item) => sum + Number(item.rating ?? 0),
    0
  );

  const average =
    totalQuestions > 0
      ? (
          totalRating / totalQuestions
        ).toFixed(1)
      : "0.0";

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

      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <FeedbackHeader
          average={average}
          performance={performance}
          totalQuestions={totalQuestions}
          answeredQuestions={answeredQuestions}
        />

        {/* Empty State */}

        {feedbackList.length === 0 && (

          <div className="bg-white rounded-3xl shadow-sm border mt-10 p-16 text-center">

            <h2 className="text-3xl font-bold">
              No Feedback Available
            </h2>

            <p className="text-gray-500 mt-4">

              Complete an interview first to
              generate AI feedback.

            </p>

            <Link href="/dashboard">

              <Button className="mt-8">

                Back to Dashboard

              </Button>

            </Link>

          </div>

        )}

        {/* Feedback Cards */}

        {feedbackList.length > 0 && (

          <div className="space-y-8 mt-10">

            {feedbackList.map(
              (item, index) => (

                <FeedbackCard
                  key={item.id}
                  item={item}
                  index={index}
                />

              )
            )}

          </div>

        )}

        {/* Bottom Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mt-14">

          <Link href="/dashboard">

            <Button
              variant="outline"
              className="rounded-xl px-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />

              Dashboard

            </Button>

          </Link>

          <Link
            href={`/dashboard/interview/${interviewId}`}
          >

            <Button className="rounded-xl px-6">

              <RotateCcw className="mr-2 h-4 w-4" />

              Retake Interview

            </Button>

          </Link>

        </div>

      </section>

    </main>
  );
}