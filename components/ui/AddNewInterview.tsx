"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { INTERVIEW_PROMPT } from "@/lib/Prompt";

export default function AddNewInterview() {
    const [open, setOpen] = useState(false);

    const [jobPosition, setJobPosition] = useState("");
    const [jobDesc, setJobDesc] = useState("");
    const [experience, setExperience] = useState("");

   const onGenerate = async () => {
  const FINAL_PROMPT = INTERVIEW_PROMPT
    .replace("{jobPosition}", jobPosition)
    .replace("{jobDescription}", jobDesc)
    .replace("{jobExperience}", experience);

  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: FINAL_PROMPT,
    }),
  });

  const data = await response.json();

await fetch("/api/interview", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    jobPosition,
    jobDesc,
    experience,
    jsonMockResp: data.result,
  }),
});
};


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Create Interview</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>Create New Interview</DialogTitle>

                    <DialogDescription>
                        Enter the job details below. AI will generate interview questions based on your role and experience.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-5 mt-4">

                    <div>
                        <label className="text-sm font-medium">
                            Job Position
                        </label>

                        <Input
                            placeholder="Frontend Developer"
                            value={jobPosition}
                            onChange={(e) =>
                                setJobPosition(e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">
                            Job Description
                        </label>

                        <Textarea
                            rows={5}
                            placeholder="React, Next.js, Tailwind CSS..."
                            value={jobDesc}
                            onChange={(e) =>
                                setJobDesc(e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">
                            Years of Experience
                        </label>

                        <Input
                            type="number"
                            placeholder="0"
                            value={experience}
                            onChange={(e) =>
                                setExperience(e.target.value)
                            }
                        />
                    </div>

                    <Button
                        onClick={onGenerate}
                        className="w-full"
                    >
                        Generate Questions
                    </Button>

                </div>
            </DialogContent>
        </Dialog>
    );
}