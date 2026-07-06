"use client";

import { useState } from "react";
import QuestionCard from "@/components/ui/QuestionCard";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";

const RecordAnswer = dynamic(
  () => import("@/components/ui/RecordAnswer"),
  {
    ssr: false,
  }
);



interface Props {
  questions: any[];
  interviewId: number;
}

export default function Interview({ questions, interviewId }: Props) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-8">

        <QuestionCard
          question={questions[activeQuestion].question}
          currentQuestion={activeQuestion}
          totalQuestions={questions.length}
        />

        <RecordAnswer
  question={questions[activeQuestion].question}
  correctAnswer={questions[activeQuestion].answer}
  interviewId={interviewId}
/>

      </div>

      <div className="flex justify-between mt-8">

        <Button
          variant="outline"
          disabled={activeQuestion === 0}
          onClick={() => setActiveQuestion(activeQuestion - 1)}
        >
          Previous
        </Button>

        {activeQuestion === questions.length - 1 ? (
  <Button
    onClick={() => {
      router.push(`/dashboard/interview/${interviewId}/feedback`);
    }}
  >
    Finish Interview
  </Button>
) : (
  <Button
    onClick={() => setActiveQuestion(activeQuestion + 1)}
  >
    Next
  </Button>
)}

      </div>
    </div>
  );
}