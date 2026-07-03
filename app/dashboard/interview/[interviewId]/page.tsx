import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import QuestionCard from "@/components/ui/QuestionCard";
import RecordAnswer from "@/components/ui/RecordAnswer";

interface Props {
  params: Promise<{
    interviewId: string;
  }>;
}

export default async function InterviewPage({ params }: Props) {
  const { interviewId } = await params;

  const interview = await db
    .select()
    .from(MockInterview)
    .where(eq(MockInterview.id, Number(interviewId)));

  const questions = JSON.parse(
    interview[0].jsonMockResp
      .replace("```json", "")
      .replace("```", "")
  );

  const currentQuestion = questions[0];

  return (
    <div className="max-w-7xl mx-auto p-10">
    <div className="grid md:grid-cols-2 gap-8">

      <QuestionCard
        question={currentQuestion.question}
        currentQuestion={0}
        totalQuestions={questions.length}
      />

      <RecordAnswer />

    </div>
  </div>
  );
}