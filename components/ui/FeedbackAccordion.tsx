"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  MessageSquare,
  CheckCircle2,
  CircleDashed,
  Star,
} from "lucide-react";

interface Props {
  item: any;
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
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6"
      >
        <div>

          <h2 className="text-xl font-bold">
            Question {index + 1}
          </h2>

          <p className="text-gray-500 mt-1">
            {badge.text}
          </p>

        </div>

        <div className="flex items-center gap-3">

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${badge.color}`}
          >
            {item.userAnswer ? `${rating}/10` : "--"}
          </span>

          {open ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}

        </div>

      </button>

      {open && (
        <div className="border-t p-6 space-y-6">

          <Section
            icon={<MessageSquare className="text-violet-600" />}
            title="Interview Question"
            color="bg-slate-50"
            value={item.question}
          />

          <Section
            icon={<CheckCircle2 className="text-green-600" />}
            title="Expected Answer"
            color="bg-green-50"
            value={item.correctAnswer}
          />

          <Section
            icon={<CircleDashed className="text-blue-600" />}
            title="Your Answer"
            color="bg-blue-50"
            value={
              item.userAnswer ||
              "You didn't answer this question."
            }
          />

          <Section
            icon={<Brain className="text-violet-700" />}
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
}: any) {
  return (
    <div className={`${color} rounded-xl p-5`}>

      <div className="flex items-center gap-2 mb-3">

        {icon}

        <h3 className="font-semibold">
          {title}
        </h3>

      </div>

      <p className="leading-8 text-gray-700">
        {value}
      </p>

    </div>
  );
}