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

            <div className="mt-4 flex items-center gap-6 text-sm text-slate-500">

              <span>
                {questions.length} Questions
              </span>

              <span>
                {interview.jobExperience} Years Experience
              </span>

              <span className="flex items-center gap-1">

                <CalendarDays className="h-4 w-4" />

                {formattedDate}

              </span>

            </div>

          </div>

          <button>

            {open ? (
              <ChevronUp className="h-6 w-6" />
            ) : (
              <ChevronDown className="h-6 w-6" />
            )}

          </button>

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