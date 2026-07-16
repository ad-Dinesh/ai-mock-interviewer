"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
        <div className="border-t bg-gradient-to-r from-violet-50 to-indigo-50 px-5 py-4">

          <div className="w-full">

            <div className="flex items-center justify-between mb-3">

              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                AI Recommended Answer
              </p>

              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(answer);
                  toast.success("Answer copied to clipboard!");
                }}
              >
                Copy
              </Button>

            </div>

            <p className="leading-7 text-slate-700">
              {answer}
            </p>

          </div>


        </div>
      )}

    </div>
  );
}