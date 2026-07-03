import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";

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
  <div className="max-w-4xl mx-auto p-10">
    <h1 className="text-3xl font-bold mb-6">
      Mock Interview
    </h1>

    <div className="border rounded-xl p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">
        Question 1 of {questions.length}
      </h2>

      <p className="text-lg">
        {currentQuestion.question}
      </p>
    </div>
  </div>
);
}