import {
  CheckCircle2,
  MessageSquare,
  Star,
  User,
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

  const badgeColor =
    rating >= 8
      ? "bg-green-100 text-green-700 border-green-200"
      : rating >= 5
      ? "bg-yellow-100 text-yellow-700 border-yellow-200"
      : "bg-red-100 text-red-700 border-red-200";

  return (
    <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between border-b px-6 py-5">

        <div>
          <h2 className="text-2xl font-bold">
            Question {index + 1}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            AI Interview Evaluation
          </p>
        </div>

        <div
          className={`px-5 py-2 rounded-full border font-semibold ${badgeColor}`}
        >
          ⭐ {rating}/10
        </div>

      </div>

      {/* Body */}

      <div className="p-6 space-y-6">

        {/* Question */}

        <div>

          <div className="flex items-center gap-2 mb-3">

            <MessageSquare className="h-5 w-5 text-violet-600" />

            <h3 className="font-semibold text-lg">
              Interview Question
            </h3>

          </div>

          <div className="bg-gray-50 rounded-xl border p-4 leading-7">
            {item.question}
          </div>

        </div>

        {/* Correct */}

        <div>

          <div className="flex items-center gap-2 mb-3">

            <CheckCircle2 className="h-5 w-5 text-green-600" />

            <h3 className="font-semibold text-lg">
              Correct Answer
            </h3>

          </div>

          <div className="bg-green-50 border border-green-100 rounded-xl p-4 leading-7">
            {item.correctAnswer}
          </div>

        </div>

        {/* User */}

        <div>

          <div className="flex items-center gap-2 mb-3">

            <User className="h-5 w-5 text-blue-600" />

            <h3 className="font-semibold text-lg">
              Your Answer
            </h3>

          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 leading-7">

            {item.userAnswer || (
              <span className="text-red-500">
                No answer submitted.
              </span>
            )}

          </div>

        </div>

        {/* Feedback */}

        <div>

          <div className="flex items-center gap-2 mb-3">

            <Star className="h-5 w-5 text-orange-500" />

            <h3 className="font-semibold text-lg">
              AI Feedback
            </h3>

          </div>

          <div className="bg-violet-50 border border-violet-100 rounded-xl p-4 leading-7">

            {item.feedback || (
              <span className="text-gray-500">
                No feedback available.
              </span>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}