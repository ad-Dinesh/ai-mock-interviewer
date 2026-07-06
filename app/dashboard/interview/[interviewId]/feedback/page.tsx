import { db } from "@/lib/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Trophy,
  Star,
  MessageSquare,
  CheckCircle2,
  CircleDashed,
} from "lucide-react";

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

  const totalScore = feedbackList.reduce(
    (sum, item) => sum + Number(item.rating ?? 0),
    0
  );

  const average =
    feedbackList.length > 0
      ? (totalScore / feedbackList.length).toFixed(1)
      : "0";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div
          className="rounded-3xl p-8 text-white shadow-xl"
          style={{
            background: "linear-gradient(to right, #7c3aed, #4f46e5)",
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold">Interview Feedback</h1>
              <p className="mt-2 text-violet-100 text-base">
                Great job completing your interview. Here&apos;s your
                detailed performance report.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl px-6 py-4 min-w-[200px]">
              <div className="flex items-center gap-3">
                <Trophy className="h-7 w-7 text-yellow-300 shrink-0" />
                <div>
                  <p className="text-xs text-violet-100">Average Score</p>
                  <h2 className="text-3xl font-bold leading-tight">
                    {average}
                  </h2>
                  <p className="text-xs text-violet-100">out of 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback list */}
        <div className="mt-6 space-y-6">
          {feedbackList.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border shadow-sm overflow-hidden"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b bg-slate-50/60">
                <div>
                  <h2 className="text-xl font-bold">
                    Question {index + 1}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Interview Evaluation
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Star
                    className={`h-6 w-6 ${
                      Number(item.rating) >= 7
                        ? "text-yellow-500"
                        : Number(item.rating) >= 4
                        ? "text-orange-500"
                        : "text-red-500"
                    }`}
                  />
                  <span className="text-2xl font-bold">
                    {item.rating}/10
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Question */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-5 w-5 text-violet-600" />
                    <h3 className="text-base font-semibold">
                      Interview Question
                    </h3>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border text-sm">
                    <p className="text-gray-700 leading-6">
                      {item.question}
                    </p>
                  </div>
                </div>

                {/* Correct answer */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <h3 className="text-base font-semibold text-green-700">
                      Correct Answer
                    </h3>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm">
                    <p className="text-gray-700 leading-6">
                      {item.correctAnswer}
                    </p>
                  </div>
                </div>

                {/* User answer */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CircleDashed className="h-5 w-5 text-blue-600" />
                    <h3 className="text-base font-semibold text-blue-700">
                      Your Answer
                    </h3>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm">
                    <p className="text-gray-700 leading-6">
                      {item.userAnswer}
                    </p>
                  </div>
                </div>

                {/* AI feedback */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-orange-500" />
                    <h3 className="text-base font-semibold text-orange-600">
                      AI Feedback
                    </h3>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm">
                    <p className="text-gray-700 leading-6">
                      {item.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex justify-between mt-8">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-xl px-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button className="rounded-xl px-8 bg-violet-600 hover:bg-violet-700">
              Start New Interview
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}