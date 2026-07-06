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
      ? "bg-green-500"
      : performance === "Good"
      ? "bg-blue-500"
      : performance === "Average"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-10 text-white shadow-xl">

      {/* Background Blur */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10">

        {/* Left */}

        <div>

          <div className="flex items-center gap-4">

            <div className="bg-white/20 p-4 rounded-2xl">

              <Trophy className="h-10 w-10 text-yellow-300" />

            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Interview Completed 🎉
              </h1>

              <p className="text-violet-100 mt-2 text-lg">
                Great work! Here is your AI performance report.
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="text-center">

          <h2 className="text-7xl font-extrabold tracking-tight">
            {average}
          </h2>

          <p className="text-violet-100 mt-2">
            Overall Score /10
          </p>

          <span
            className={`inline-block mt-5 px-5 py-2 rounded-full text-sm font-semibold ${badgeColor}`}
          >
            {performance}
          </span>

        </div>

      </div>

      {/* Progress */}

      <div className="relative mt-10">

        <div className="flex justify-between text-sm mb-2">

          <span>Performance</span>

          <span>{progress}%</span>

        </div>

        <div className="h-3 rounded-full bg-white/20 overflow-hidden">

          <div
            className="h-full rounded-full bg-yellow-300 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}