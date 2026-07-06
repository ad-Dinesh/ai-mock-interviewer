"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  MessageSquare,
  CheckCircle2,
  CircleDashed,
} from "lucide-react";

interface FeedbackItem {
  question: string;
  correctAnswer: string;
  userAnswer: string;
  feedback: string | null;
  rating: string | number | null;
}

interface Props {
  item: FeedbackItem;
  index: number;
}

export default function FeedbackAccordion({
  item,
  index,
}: Props) {
  const [open, setOpen] = useState(index === 0);

  const rating = Number(item.rating ?? 0);

  const getBadge = () => {
    if (!item.userAnswer)
      return {
        text: "Not Attempted",
        color: "bg-gray-100 text-gray-700",
      };

    if (rating >= 8)
      return {
        text: "Excellent",
        color: "bg-green-100 text-green-700",
      };

    if (rating >= 6)
      return {
        text: "Good",
        color: "bg-blue-100 text-blue-700",
      };

    if (rating >= 4)
      return {
        text: "Average",
        color: "bg-yellow-100 text-yellow-700",
      };

    return {
      text: "Needs Improvement",
      color: "bg-red-100 text-red-700",
    };
  };

  const badge = getBadge();

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left"
      >
        <div className="min-w-0">

          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
              {index + 1}
            </span>

            <h2 className="truncate text-xl font-semibold tracking-tight text-slate-950">
              Question {index + 1}
            </h2>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            {badge.text}
          </p>

        </div>

        <div className="flex shrink-0 items-center gap-3">

          <span
            className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${badge.color}`}
          >
            {item.userAnswer ? `${rating}/10` : "--"}
          </span>

          <span className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600">
            {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </span>

        </div>

      </button>

      {open && (
        <div className="border-t border-slate-200 bg-slate-50/70 p-6 space-y-5">

          <Section
            icon={<MessageSquare className="h-5 w-5 text-violet-600" />}
            title="Interview Question"
            color="bg-white"
            value={item.question}
          />

          <Section
            icon={<CheckCircle2 className="h-5 w-5 text-emerald-600" />}
            title="Expected Answer"
            color="bg-emerald-50"
            value={item.correctAnswer}
          />

          <Section
            icon={<CircleDashed className="h-5 w-5 text-blue-600" />}
            title="Your Answer"
            color="bg-blue-50"
            value={
              item.userAnswer ||
              "You didn't answer this question."
            }
          />

          <Section
            icon={<Brain className="h-5 w-5 text-violet-700" />}
            title="AI Feedback"
            color="bg-violet-50"
            value={
              item.feedback ||
              "No feedback available."
            }
          />

        </div>
      )}
    </div>
  );
}

function Section({
  icon,
  title,
  value,
  color,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`${color} rounded-2xl border border-slate-200 p-5`}>

      <div className="mb-3 flex items-center gap-2">

        {icon}

        <h3 className="font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

      </div>

      <p className="whitespace-pre-wrap leading-7 text-slate-700">
        {value}
      </p>

    </div>
  );
}