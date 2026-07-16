"use client";

import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { Mic, StopCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

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
  const { user } = useUser();

  const [userAnswer, setUserAnswer] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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

  // Update transcript
  useEffect(() => {
    const transcript = results
      .map((result: any) => result.transcript)
      .join(" ");

    setUserAnswer(transcript);
  }, [results]);

  // Save automatically after recording stops
  useEffect(() => {
    if (
      !isRecording &&
      userAnswer.trim() !== "" &&
      !isSaved
    ) {
      saveAnswer();
    }
  }, [isRecording, userAnswer]);

  const saveAnswer = async () => {
    if (!userAnswer.trim()) {
      toast.error("Please record an answer first");
      return;
    }

    const toastId = toast.loading("Saving your answer...");

    try {
      setIsSaving(true);

      // Gemini Feedback
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

      if (!feedbackRes.ok) {
        throw new Error("Failed to get feedback");
      }

      const data = await feedbackRes.json();

      // Save to DB
      const saveRes = await fetch("/api/interview", {
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

      if (!saveRes.ok) {
        throw new Error("Failed to save answer");
      }

      const saveData = await saveRes.json();

      toast.dismiss(toastId);
      toast.success("Answer saved successfully!");
      setIsSaved(true);
    } catch (err) {
      toast.dismiss(toastId);
      toast.error(err instanceof Error ? err.message : "Failed to save answer");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="border rounded-xl p-5 flex flex-col items-center">

      <Webcam
        audio
        mirrored
        className="rounded-xl w-full"
      />

      <div className="w-full mt-5 p-4 border rounded-lg min-h-[120px] bg-gray-50">

        {results.map((result: any, index) => (
          <p key={index}>{result.transcript}</p>
        ))}

        {interimResult && (
          <p className="text-gray-400">
            {interimResult}
          </p>
        )}

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

      </div>

      <Button
        disabled={isSaving}
        className="mt-5 w-full"
        onClick={() => {
          if (isRecording) {
            stopSpeechToText();
          } else {
            setIsSaved(false);
            setUserAnswer("");
            startSpeechToText();
          }
        }}
      >
        {isSaving ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Saving...
          </>
        ) : isRecording ? (
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