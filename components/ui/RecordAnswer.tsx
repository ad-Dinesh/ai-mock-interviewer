"use client";

import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { Mic, StopCircle } from "lucide-react";
import useSpeechToText from "react-hook-speech-to-text";

export default function RecordAnswer() {
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
      <div className="w-full mt-5 p-3 border rounded-lg min-h-25 bg-gray-50">
        {results.map((result, index) => (
          <p key={index}>
            {typeof result === "string" ? result : result.transcript}
          </p>
        ))}
        {error && (
          <p className="text-red-500 mt-2">
            {error}
          </p>
        )}

        <p className="text-gray-500">{interimResult}</p>
      </div>

      <Button
        className="mt-5 w-full"
        onClick={() => {
          if (isRecording) {
            stopSpeechToText();
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