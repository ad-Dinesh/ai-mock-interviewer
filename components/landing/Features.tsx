import {
  BrainCircuit,
  Mic,
  MessageSquareText,
  History,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "AI Interview Questions",
    description:
      "Generate realistic technical interview questions tailored to your role and experience.",
    icon: BrainCircuit,
  },
  {
    title: "Voice Answer Recording",
    description:
      "Answer questions naturally using your microphone to simulate a real interview.",
    icon: Mic,
  },
  {
    title: "Instant AI Feedback",
    description:
      "Receive ratings, detailed explanations, strengths, and improvement suggestions instantly.",
    icon: MessageSquareText,
  },
  {
    title: "Interview History",
    description:
      "Access all your previous mock interviews and track your learning journey.",
    icon: History,
  },
  {
    title: "Question Bank",
    description:
      "Review every AI-generated question and recommended answer whenever you want.",
    icon: BookOpen,
  },
  {
    title: "Secure Authentication",
    description:
      "Sign in securely with Clerk and keep your interview data private.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Practice interviews like never before with AI-powered tools
            designed to help you prepare with confidence.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 transition group-hover:bg-violet-600">

                  <Icon className="h-7 w-7 text-violet-700 group-hover:text-white" />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}