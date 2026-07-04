"use client";

import { useState } from "react";
import QuestionCard from "@/components/ui/QuestionCard";
import RecordAnswer from "@/components/ui/RecordAnswer";
import { Button } from "@/components/ui/button";

interface Props {
  questions: any[];
}

export default function Interview({ questions }: Props) {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-8">

        <QuestionCard
          question={questions[activeQuestion].question}
          currentQuestion={activeQuestion}
          totalQuestions={questions.length}
        />

        <RecordAnswer />

      </div>

      <div className="flex justify-between mt-8">

        <Button
          variant="outline"
          disabled={activeQuestion === 0}
          onClick={() => setActiveQuestion(activeQuestion - 1)}
        >
          Previous
        </Button>

        <Button
          disabled={activeQuestion === questions.length - 1}
          onClick={() => setActiveQuestion(activeQuestion + 1)}
        >
          Next
        </Button>

      </div>
    </div>
  );
}