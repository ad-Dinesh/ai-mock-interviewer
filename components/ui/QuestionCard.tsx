interface Props {
  question: string;
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md border p-6">
      <h2 className="text-sm text-gray-500 mb-2">
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>

      <h1 className="text-2xl font-semibold">
        {question}
      </h1>
    </div>
  );
}