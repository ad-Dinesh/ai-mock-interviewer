import {
  Brain,
  CheckCircle2,
  CircleDashed,
  MessageSquare,
  Star,
} from "lucide-react";

interface Props {
  item: any;
  index: number;
}

export default function FeedbackCard({
  item,
  index,
}: Props) {
  const rating = Number(item.rating ?? 0);

  const getRatingBadge = () => {
    if (!item.userAnswer || item.userAnswer.trim() === "") {
      return {
        label: "Not Attempted",
        color:
          "bg-gray-100 text-gray-700 border-gray-300",
      };
    }

    if (rating >= 8) {
      return {
        label: "Excellent",
        color:
          "bg-green-100 text-green-700 border-green-300",
      };
    }

    if (rating >= 6) {
      return {
        label: "Good",
        color:
          "bg-blue-100 text-blue-700 border-blue-300",
      };
    }

    if (rating >= 4) {
      return {
        label: "Average",
        color:
          "bg-yellow-100 text-yellow-700 border-yellow-300",
      };
    }

    return {
      label: "Needs Improvement",
      color:
        "bg-red-100 text-red-700 border-red-300",
    };
  };

  const badge = getRatingBadge();

  return (
    <div className="rounded-3xl bg-white border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      <div className="flex justify-between items-center border-b px-8 py-6 bg-slate-50">

        <div>

          <h2 className="text-2xl font-bold">
            Question {index + 1}
          </h2>

          <p className="text-gray-500 mt-1">
            AI Interview Evaluation
          </p>

        </div>

        <div className="text-right">

          <div
            className={`inline-flex px-4 py-2 rounded-full border font-semibold ${badge.color}`}
          >
            {badge.label}
          </div>

          <p className="text-3xl font-bold mt-3">

            {item.userAnswer
              ? `${rating}/10`
              : "--"}

          </p>

        </div>

      </div>

      <div className="p-8 space-y-6">

        <div className="bg-slate-50 rounded-2xl p-5">

          <div className="flex items-center gap-2 mb-3">

            <MessageSquare className="text-violet-600" />

            <h3 className="font-bold text-lg">
              Interview Question
            </h3>

          </div>

          <p className="leading-8 text-gray-700">
            {item.question}
          </p>

        </div>

        <div className="bg-green-50 rounded-2xl p-5">

          <div className="flex items-center gap-2 mb-3">

            <CheckCircle2 className="text-green-600" />

            <h3 className="font-bold text-lg text-green-700">
              Expected Answer
            </h3>

          </div>

          <p className="leading-8 text-gray-700">
            {item.correctAnswer}
          </p>

        </div>

        <div className="bg-blue-50 rounded-2xl p-5">

          <div className="flex items-center gap-2 mb-3">

            <CircleDashed className="text-blue-600" />

            <h3 className="font-bold text-lg text-blue-700">
              Your Answer
            </h3>

          </div>

          <p className="leading-8 text-gray-700">

            {item.userAnswer
              ? item.userAnswer
              : "You did not answer this question."}

          </p>

        </div>

        <div className="bg-violet-50 rounded-2xl p-5">

          <div className="flex items-center gap-2 mb-3">

            <Brain className="text-violet-700" />

            <h3 className="font-bold text-lg text-violet-700">
              AI Feedback
            </h3>

          </div>

          <p className="leading-8 text-gray-700">

            {item.feedback
              ? item.feedback
              : "No feedback available."}

          </p>

        </div>

      </div>

    </div>
  );
}