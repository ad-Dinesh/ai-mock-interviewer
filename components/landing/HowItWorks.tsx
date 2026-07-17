import {
  Briefcase,
  BrainCircuit,
  Mic,
  MessageSquareText,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    title: "Create Interview",
    description:
      "Select your job role, experience level, and technologies to generate a personalized interview.",
    icon: Briefcase,
  },
  {
    title: "AI Generates Questions",
    description:
      "Gemini AI creates realistic technical interview questions based on your inputs.",
    icon: BrainCircuit,
  },
  {
    title: "Record Your Answers",
    description:
      "Answer every question using your microphone just like a real interview.",
    icon: Mic,
  },
  {
    title: "Receive AI Feedback",
    description:
      "Get ratings, detailed explanations, and suggestions to improve every answer.",
    icon: MessageSquareText,
  },
  {
    title: "Track Progress",
    description:
      "Review your interview history, question bank, and keep improving over time.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#050816] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Process
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            How It Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Practice interviews in just five simple steps.
          </p>

        </div>

        <div className="relative mt-20">

          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-violet-700/40 md:block" />

          <div className="space-y-12">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col gap-6 md:flex-row"
                >

                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>

                  <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                    <span className="text-sm font-semibold text-violet-400">
                      STEP {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}