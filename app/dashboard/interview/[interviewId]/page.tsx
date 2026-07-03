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

  return (
    <div className="p-10">
      <pre>{JSON.stringify(interview, null, 2)}</pre>
    </div>
  );
}