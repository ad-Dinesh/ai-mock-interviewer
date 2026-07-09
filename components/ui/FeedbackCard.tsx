import { CheckCircle2, MessageSquare, Star, User } from "lucide-react";

interface Props {
  item: any;
  index: number;
}

export default function FeedbackCard({ item, index }: Props) {
  const rating = Number(item.rating ?? 0);

  const badgeColor =
    rating >= 8
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : rating >= 5
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-red-50 text-red-700 border-red-200";

  const ringColor =
    rating >= 8
      ? "text-emerald-500"
      : rating >= 5
      ? "text-amber-500"
      : "text-red-500";

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-slate-50/60 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 font-mono text-sm font-bold text-white">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Question {index + 1}
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              AI interview evaluation
            </p>
          </div>
        </div>

        <div
          className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 font-mono text-sm font-semibold ${badgeColor}`}
        >
          <Star className={`h-3.5 w-3.5 fill-current ${ringColor}`} />
          {rating}/10
        </div>
      </div>

      {/* Body */}
      <div className="divide-y divide-slate-100">
        {/* Question */}
        <section className="px-6 py-5">
          <div className="mb-3 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-violet-600" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Interview Question
            </h3>
          </div>
          <p className="leading-7 text-slate-800">{item.question}</p>
        </section>

        {/* Correct answer */}
        <section className="border-l-2 border-l-emerald-400 bg-emerald-50/40 px-6 py-5">
          <div className="mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Correct Answer
            </h3>
          </div>
          <p className="leading-7 text-slate-800">{item.correctAnswer}</p>
        </section>

        {/* User answer */}
        <section className="border-l-2 border-l-blue-400 bg-blue-50/40 px-6 py-5">
          <div className="mb-3 flex items-center gap-2">
            <User className="h-4 w-4 text-blue-600" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Your Answer
            </h3>
          </div>
          <p className="leading-7 text-slate-800">
            {item.userAnswer || (
              <span className="italic text-red-500">
                No answer submitted.
              </span>
            )}
          </p>
        </section>

        {/* AI feedback */}
        <section className="border-l-2 border-l-violet-400 bg-violet-50/40 px-6 py-5">
          <div className="mb-3 flex items-center gap-2">
            <Star className="h-4 w-4 text-violet-600" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-700">
              AI Feedback
            </h3>
          </div>
          <p className="leading-7 text-slate-800">
            {item.feedback || (
              <span className="italic text-slate-500">
                No feedback available.
              </span>
            )}
          </p>
        </section>
      </div>
    </div>
  );
}