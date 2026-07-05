import { db } from "@/lib/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

  return (
    <div className="max-w-5xl mx-auto p-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Interview Feedback
        </h1>

        <p className="text-gray-500 mt-2">
          Review your interview performance and improve for the next one.
        </p>
      </div>

      <div className="space-y-8">

        {feedbackList.map((item, index) => (
          <div
            key={item.id}
            className="border rounded-2xl shadow-sm p-6 bg-white"
          >

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-xl font-semibold">
                Question {index + 1}
              </h2>

              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-semibold">
                Rating : {item.rating}/10
              </span>

            </div>

            <div className="space-y-5">

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Question
                </h3>

                <div className="bg-gray-50 p-4 rounded-lg">
                  {item.question}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-green-700 mb-2">
                  Correct Answer
                </h3>

                <div className="bg-green-50 p-4 rounded-lg">
                  {item.correctAnswer}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-blue-700 mb-2">
                  Your Answer
                </h3>

                <div className="bg-blue-50 p-4 rounded-lg">
                  {item.userAnswer}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-red-700 mb-2">
                  AI Feedback
                </h3>

                <div className="bg-red-50 p-4 rounded-lg">
                  {item.feedback}
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="flex justify-center mt-10">
        <Link href="/dashboard">
          <Button size="lg">
            Back To Dashboard
          </Button>
        </Link>
      </div>

    </div>
  );
}