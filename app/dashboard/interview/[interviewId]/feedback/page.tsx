import { db } from "@/lib/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
    ArrowLeft,
    RotateCcw,
    Target,
    CircleCheckBig,
    BrainCircuit,
} from "lucide-react";

// import {
//   Trophy,
//   ArrowLeft,
//   RotateCcw,
//   CircleCheckBig,
//   Target,
//   BrainCircuit,
// } from "lucide-react";

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
        totalQuestions > 0
            ? Number(totalRating / totalQuestions).toFixed(1)
            : "0";

    const progress = Number(average) * 10;

    const performance =
        Number(average) >= 8
            ? "Excellent"
            : Number(average) >= 6
                ? "Good"
                : Number(average) >= 4
                    ? "Average"
                    : "Needs Improvement";

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_32%),linear-gradient(180deg,#f8fafc_0%,#eff6ff_100%)] pb-12">

            <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">

                <div className="mb-8 space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">
                        Interview Review
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                        Feedback that is easy to scan and act on.
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                        Review the score, see what you answered well, and focus on
                        the questions that need another pass.
                    </p>
                </div>

                {/* Hero */}

                <FeedbackHero
                    average={average}
                    progress={progress}
                    performance={performance}
                />







                {/* Summary */}

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

                    <SummaryCard
                        title="Questions"
                        value={totalQuestions}
                        icon={Target}
                        color="bg-violet-600"
                    />

                    <SummaryCard
                        title="Answered"
                        value={answeredQuestions}
                        icon={CircleCheckBig}
                        color="bg-green-600"
                    />

                    <SummaryCard
                        title="AI Result"
                        value={performance}
                        icon={BrainCircuit}
                        color="bg-orange-600"
                    />

                </div>

                {/* Cards */}

                <div className="mt-10 space-y-8">
                    {feedbackList.length > 0 ? (
                        feedbackList.map((item, index) => (
                            <FeedbackAccordion
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))
                    ) : (
                        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center shadow-sm">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                                <BrainCircuit className="h-8 w-8" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                                No feedback yet
                            </h2>
                            <p className="mx-auto mt-2 max-w-xl text-slate-600">
                                Complete an interview to generate answer-by-answer
                                feedback and a performance score.
                            </p>
                        </div>
                    )}
                </div>

                {/* Buttons */}

                <div className="mt-12 flex flex-wrap justify-center gap-4">

                    <Link href="/dashboard">

                        <Button
                            variant="outline"
                            className="rounded-xl border-slate-300 bg-white px-6 text-slate-700 hover:bg-slate-50"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />

                            Dashboard

                        </Button>

                    </Link>

                    <Link
                        href={`/dashboard/interview/${interviewId}`}
                    >

                        <Button className="rounded-xl bg-slate-950 px-6 text-white shadow-lg shadow-slate-950/20 hover:bg-slate-800">

                            <RotateCcw className="mr-2 h-4 w-4" />

                            Retake Interview

                        </Button>

                    </Link>

                </div>

            </div>

        </div>
    );
}