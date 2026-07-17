"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does AI generate interview questions?",
    answer:
      "The platform uses Google's Gemini AI to generate personalized interview questions based on your selected role, experience, and technologies.",
  },
  {
    question: "Can I retake an interview?",
    answer:
      "Yes. You can generate new interviews or revisit previous ones anytime from your dashboard.",
  },
  {
    question: "Are my interview results saved?",
    answer:
      "Yes. Your interview history, AI feedback, and question bank are securely stored for future review.",
  },
  {
    question: "Is voice recording mandatory?",
    answer:
      "Voice recording is used to simulate a real interview experience, helping you practice communication naturally.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>

              {open === index && (
                <div className="border-t px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}