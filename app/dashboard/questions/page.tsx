import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import { desc } from "drizzle-orm";

import QuestionsContent from "@/components/ui/QuestionsContent";

export default async function QuestionsPage() {
  const interviews = await db
    .select()
    .from(MockInterview)
    .orderBy(desc(MockInterview.id));
    const totalInterviews = interviews.length;

const totalQuestions = interviews.reduce((total, interview) => {
  try {
    return total + JSON.parse(interview.jsonMockResp).length;
  } catch {
    return total;
  }
}, 0);

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

  <div>

    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
      Question Bank
    </p>

    <h1 className="mt-2 text-4xl font-bold text-slate-900">
      AI Interview Questions
    </h1>

    <p className="mt-3 max-w-2xl text-slate-500">
      Review every AI-generated interview question and answer anytime.
    </p>

  </div>

  <div className="grid grid-cols-2 gap-4">

    <div className="rounded-2xl border bg-white px-8 py-5 shadow-sm">

      <p className="text-sm text-slate-500">
        Interviews
      </p>

      <h2 className="mt-1 text-3xl font-bold">
        {totalInterviews}
      </h2>

    </div>

    <div className="rounded-2xl border bg-white px-8 py-5 shadow-sm">

      <p className="text-sm text-slate-500">
        Questions
      </p>

      <h2 className="mt-1 text-3xl font-bold">
        {totalQuestions}
      </h2>

    </div>

  </div>

</div>

        {interviews.length === 0 ? (

          <div className="rounded-3xl border border-dashed bg-white p-20 text-center">

            <h2 className="text-2xl font-semibold">
              No Questions Found
            </h2>

            <p className="mt-3 text-slate-500">
              Create your first interview to build your personal question bank.
            </p>

          </div>

        ) : (

          <QuestionsContent interviews={interviews} />

        )}

      </div>

    </div>
  );
}