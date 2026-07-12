"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  CheckCircle2,
} from "lucide-react";

interface Props {
  index: number;
  question: string;
  answer: string;
}

export default function QuestionAccordion({
  index,
  question,
  answer,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left transition hover:bg-slate-50"
      >
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
            <CircleHelp className="h-5 w-5 text-violet-600" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Question {index + 1}
            </p>

            <h3 className="font-semibold text-slate-900">
              {question}
            </h3>
          </div>
        </div>

        {open ? (
          <ChevronUp className="h-5 w-5 text-slate-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-500" />
        )}
      </button>

      {/* Answer */}

      {open && (
        <div className="border-t bg-slate-50 px-5 py-4">

          <div className="flex items-start gap-3">

            <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-700">
                Recommended Answer
              </p>

              <p className="leading-7 text-slate-700">
                {answer}
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}