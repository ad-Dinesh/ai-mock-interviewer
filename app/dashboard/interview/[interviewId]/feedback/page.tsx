import { db } from "@/lib/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeedbackHero from "@/components/ui/FeedbackHero";
import SummaryCard from "@/components/ui/SummaryCard";
import FeedbackAccordion from "@/components/ui/FeedbackAccordion";

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
        <div className="bg-slate-50 pb-12">

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Hero */}

                <FeedbackHero
                    average={average}
                    progress={progress}
                    performance={performance}
                />







                {/* Summary */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

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

                <div className="space-y-8 mt-10">

                    {feedbackList.map((item, index) => (

                        <FeedbackAccordion
                            key={item.id}
                            item={item}
                            index={index}
                        />

                    ))}

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap justify-center gap-5 mt-12">

                    <Link href="/dashboard">

                        <Button
                            variant="outline"
                            className="rounded-xl"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />

                            Dashboard

                        </Button>

                    </Link>

                    <Link
                        href={`/dashboard/interview/${interviewId}`}
                    >

                        <Button className="rounded-xl">

                            <RotateCcw className="mr-2 h-4 w-4" />

                            Retake Interview

                        </Button>

                    </Link>

                </div>

            </div>

        </div>
    );
}