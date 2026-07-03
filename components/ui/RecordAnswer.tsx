"use client";

import Webcam from "react-webcam";

export default function RecordAnswer() {
  return (
    <div className="border rounded-xl p-5 flex flex-col items-center">
      <Webcam
        mirrored
        style={{
          width: "100%",
          borderRadius: "12px",
        }}
      />

      <button className="mt-5 bg-purple-600 text-white px-5 py-2 rounded-lg">
        Record Answer
      </button>
    </div>
  );
}