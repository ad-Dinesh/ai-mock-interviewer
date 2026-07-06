import type { ReactNode } from "react";
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
  const interviewKey = Number(interviewId);

  const feedbackList = await db
    .select()
    .from(UserAnswer)
    .where(eq(UserAnswer.mockIdRef, interviewKey));

  const totalScore = feedbackList.reduce(
    (sum, item) => sum + Number(item.rating ?? 0),
    0
  );
  const averageScore =
    feedbackList.length > 0
      ? (totalScore / feedbackList.length).toFixed(1)
      : "0";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="rounded-3xl bg-linear-to-r from-violet-600 to-indigo-600 p-10 text-white shadow-xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold">Interview Feedback</h1>
              <p className="mt-3 text-lg text-violet-100">
                Great job completing your interview. Here&apos;s your detailed
                performance report.
              </p>
            </div>

            <div className="min-w-55 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Trophy className="h-8 w-8 text-yellow-300" />
                <div>
                  <p className="text-sm text-violet-100">Average Score</p>
                  <h2 className="text-4xl font-bold">{averageScore}</h2>
                  <p className="text-violet-100">out of 10</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {feedbackList.length > 0 ? (
          <div className="mt-10 space-y-8">
            {feedbackList.map((item, index) => {
              const rating = Number(item.rating ?? 0);

              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="flex flex-col gap-4 border-b px-8 py-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Question {index + 1}
                      </h2>
                      <p className="text-slate-500">Interview Evaluation</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Star
                        className={`h-8 w-8 ${
                          rating >= 7
                            ? "text-yellow-500"
                            : rating >= 4
                              ? "text-orange-500"
                              : "text-red-500"
                        }`}
                      />
                      <span className="text-3xl font-bold text-slate-900">
                        {item.rating}/10
                      </span>
                    </div>
                  </div>

                  <div className="space-y-8 p-8">
                    <FeedbackBlock
                      icon={<MessageSquare className="text-violet-600" />}
                      title="Interview Question"
                      titleClassName="text-slate-900"
                      bodyClassName="bg-slate-50 border border-slate-200"
                      content={item.question}
                    />

                    <FeedbackBlock
                      icon={<CheckCircle2 className="text-green-600" />}
                      title="Correct Answer"
                      titleClassName="text-green-700"
                      bodyClassName="bg-green-50 border border-green-200"
                      content={item.correctAnswer}
                    />

                    <FeedbackBlock
                      icon={<CircleDashed className="text-blue-600" />}
                      title="Your Answer"
                      titleClassName="text-blue-700"
                      bodyClassName="bg-blue-50 border border-blue-200"
                      content={item.userAnswer}
                    />

                    <FeedbackBlock
                      icon={<Star className="text-orange-500" />}
                      title="AI Feedback"
                      titleClassName="text-orange-600"
                      bodyClassName="bg-orange-50 border border-orange-200"
                      content={
                        item.feedback ??
                        "No AI feedback was saved for this response."
                      }
                    />
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center shadow-sm">
            <Trophy className="mx-auto h-12 w-12 text-violet-500" />
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              No feedback yet
            </h2>
            <p className="mt-2 text-slate-500">
              Complete an interview to see your score, answers, and AI feedback
              here.
            </p>
          </div>
        )}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-xl px-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button className="rounded-xl bg-violet-600 px-8 hover:bg-violet-700">
              Start New Interview
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeedbackBlock({
  icon,
  title,
  titleClassName,
  bodyClassName,
  content,
}: {
  icon: ReactNode;
  title: string;
  titleClassName: string;
  bodyClassName: string;
  content: string;
}) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        {icon}
        <h3 className={`text-xl font-semibold ${titleClassName}`}>{title}</h3>
      </div>

      <div className={`rounded-2xl p-5 ${bodyClassName}`}>
        <p className="leading-8 text-gray-700">{content}</p>
      </div>
    </section>
  );
}
