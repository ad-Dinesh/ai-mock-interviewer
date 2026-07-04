import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import Interview from "./Interview";

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

  return <Interview questions={questions} />;
}