"use client";

import { useState } from "react";
import {
  CalendarDays,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import QuestionAccordion from "./QuestionAccordion";

interface Props {
  interview: any;
}

export default function QuestionBankCard({
  interview,
}: Props) {
  const [open, setOpen] = useState(false);

  const questions = JSON.parse(interview.jsonMockResp);

  const formattedDate = new Date(
    interview.createdAt
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer p-6 transition hover:bg-slate-50"
      >

        <div className="flex items-start justify-between">

          <div>

            <div className="flex items-center gap-2">

              <Briefcase className="h-5 w-5 text-violet-600" />

              <h2 className="text-2xl font-bold text-slate-900">
                {interview.jobPosition}
              </h2>

            </div>

            <p className="mt-2 text-slate-500">
              {interview.jobDesc}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              <div className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">

                📄 {questions.length} Questions

              </div>

              <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

                💼 {interview.jobExperience} Years

              </div>

              <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">

                📅 {formattedDate}

              </div>

            </div>

          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-violet-100">

  {open ? (
    <ChevronUp className="h-5 w-5 text-violet-700" />
  ) : (
    <ChevronDown className="h-5 w-5 text-slate-700" />
  )}

</div>

        </div>

      </div>

      {/* Questions */}

      {open && (
        <div className="border-t bg-slate-50 p-6 space-y-4">

          {questions.map((item: any, index: number) => (

            <QuestionAccordion
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
            />

          ))}

        </div>
      )}

    </div>
  );
}