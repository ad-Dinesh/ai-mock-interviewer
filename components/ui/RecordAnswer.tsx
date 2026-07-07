"use client";

import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { Mic, StopCircle } from "lucide-react";
import { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import { useUser } from "@clerk/nextjs";

interface Props {
  question: string;
  correctAnswer: string;
  interviewId: number;
}

export default function RecordAnswer({
  question,
  correctAnswer,
  interviewId,
}: Props) {
  const [userAnswer, setUserAnswer] = useState("");

  const { user } = useUser();

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    const transcript = results
      .map((result: any) => result.transcript)
      .join(" ");

    setUserAnswer(transcript);
  }, [results]);

  const saveAnswer = async () => {
    if (!userAnswer) return;

    // Gemini Feedback API
    const feedbackRes = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        correctAnswer,
        userAnswer,
      }),
    });

    const data = await feedbackRes.json();

    console.log(data);

    // Save into DB
    await fetch("/api/interview", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mockIdRef: interviewId,
        question,
        correctAnswer,
        userAnswer,
        feedback: data.feedback,
        rating: data.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    });
  };

  return (
    <div className="border rounded-xl p-5 flex flex-col items-center">
      <Webcam
        audio={true}
        mirrored
        style={{
          width: "100%",
          borderRadius: "12px",
        }}
      />

      <div className="w-full mt-5 p-3 border rounded-lg min-h-[100px] bg-gray-50">
        {results.map((result: any, index) => (
          <p key={index}>{result.transcript}</p>
        ))}

        {error && <p className="text-red-500">{error}</p>}

        <p className="text-gray-500">{interimResult}</p>
      </div>

      <p className="mt-4 text-sm">{userAnswer}</p>

      <Button
        className="mt-5 w-full"
        onClick={async () => {
          if (isRecording) {
            stopSpeechToText();
            await saveAnswer();
          } else {
            startSpeechToText();
          }
        }}
      >
        {isRecording ? (
          <>
            <StopCircle className="mr-2 h-5 w-5" />
            Stop Recording
          </>
        ) : (
          <>
            <Mic className="mr-2 h-5 w-5" />
            Start Recording
          </>
        )}
      </Button>
    </div>
  );
}