import { Trophy } from "lucide-react";

interface Props {
  average: string;
  progress: number;
  performance: string;
}

export default function FeedbackHero({
  average,
  progress,
  performance,
}: Props) {
  const badgeColor =
    performance === "Excellent"
      ? "bg-emerald-500"
      : performance === "Good"
      ? "bg-sky-500"
      : performance === "Average"
      ? "bg-amber-500"
      : "bg-rose-500";

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/30 md:p-10">
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.32),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.18),transparent_30%)] opacity-60" />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/90 backdrop-blur-sm">
            <Trophy className="h-4 w-4 text-cyan-300" />
            Interview Completed
          </div>

          <div className="mt-5 space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-sm md:text-5xl">
              Strong work. Your feedback is ready.
            </h1>

            <p className="max-w-xl text-base leading-7 text-slate-200 md:text-lg">
              Review your score, compare answers, and identify the next topic
              to practice before your next session.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-100">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Clear answer review
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Performance breakdown
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Retake anytime
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:min-w-115 lg:max-w-115">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-200">
              Average Score
            </p>
            <div className="mt-3 text-5xl font-semibold tracking-tight text-white">
              {average}
            </div>
            <p className="mt-2 text-sm text-slate-200">out of 10</p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-200">
              Status
            </p>
            <span
              className={`mt-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${badgeColor} text-white shadow-lg shadow-black/20`}
            >
              {performance}
            </span>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:col-span-3 lg:col-span-1">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Performance</span>
              <span>{progress}%</span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-cyan-300 via-teal-300 to-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.35)] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-300">
              Progress is based on the average score across the interview
              answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}