import Link from "next/link";
import {
  Mic,
  FileText,
  Brain,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Clock,
  RotateCcw,
  Target,
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="bg-white text-[#17131F]">
      {/* Local keyframes — kept scoped to this page */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 1; }
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rise { animation: rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .rise-1 { animation-delay: 0.05s; }
        .rise-2 { animation-delay: 0.18s; }
        .rise-3 { animation-delay: 0.32s; }
        .dot { animation: blink 1.4s ease-in-out infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden border-b border-[#EFEAFB]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 78% 8%, rgba(109,40,217,0.10) 0%, rgba(109,40,217,0) 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:py-32">
          {/* Copy */}
          <div className="rise rise-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E4DBFB] bg-[#F7F5FF] px-3 py-1 text-xs font-medium tracking-wide text-[#6D28D9]">
              <Brain className="h-3.5 w-3.5" />
              How it works
            </span>
            <h1 className="mt-6 font-[var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-[#17131F] sm:text-5xl">
              Practice the interview
              <br />
              before it counts.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#6B6478]">
              Pick a role, answer real questions out loud, and get scored
              feedback in seconds — the same way a hiring panel would judge
              you, minus the stakes.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg bg-[#6D28D9] px-5 py-3 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(109,40,217,0.2)] transition-colors hover:bg-[#5B21B6]"
              >
                Create your first interview
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-sm text-[#8B8496]">
                No setup. Takes about 15 minutes.
              </span>
            </div>
          </div>

          {/* Signature element: live transcript mock */}
          <div className="rise rise-2">
            <div className="mx-auto w-full max-w-md rounded-2xl border border-[#ECE7FA] bg-white shadow-[0_20px_60px_-20px_rgba(76,29,149,0.25)]">
              <div className="flex items-center justify-between border-b border-[#F0ECFA] px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D1CBE8]" />
                  <span className="h-2 w-2 rounded-full bg-[#D1CBE8]" />
                  <span className="h-2 w-2 rounded-full bg-[#D1CBE8]" />
                </div>
                <span className="text-xs font-medium text-[#A69FBB]">
                  Frontend Engineer · Behavioral
                </span>
              </div>

              <div className="space-y-4 px-5 py-6">
                {/* AI question */}
                <div className="flex gap-3">
                  <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#6D28D9] text-[11px] font-semibold text-white">
                    AI
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-[#F7F5FF] px-4 py-2.5 text-sm leading-relaxed text-[#3A3450]">
                    Tell me about a time you disagreed with a teammate's
                    technical decision.
                  </div>
                </div>

                {/* User answer */}
                <div className="flex justify-end gap-3">
                  <div className="rounded-2xl rounded-tr-sm bg-[#17131F] px-4 py-2.5 text-sm leading-relaxed text-[#F1EEFA]">
                    In my last project, a teammate wanted to skip code
                    review to hit a deadline. I proposed a lighter…
                  </div>
                  <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#F0ECFA] text-[11px] font-semibold text-[#6D28D9]">
                    You
                  </div>
                </div>

                {/* Typing indicator → feedback */}
                <div className="flex gap-3">
                  <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#6D28D9] text-[11px] font-semibold text-white">
                    AI
                  </div>
                  <div className="w-full rounded-2xl rounded-tl-sm border border-[#EFEAFB] bg-white px-4 py-3">
                    <div className="mb-2 flex items-center gap-1.5">
                      <span className="dot h-1.5 w-1.5 rounded-full bg-[#B7ADD6]" />
                      <span className="dot h-1.5 w-1.5 rounded-full bg-[#B7ADD6]" />
                      <span className="dot h-1.5 w-1.5 rounded-full bg-[#B7ADD6]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#8B8496]">
                        Structure · Clarity · Ownership
                      </span>
                      <span className="rounded-full bg-[#EFFAF1] px-2 py-0.5 text-xs font-semibold text-[#15803D]">
                        Score 8.4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS (real sequence → numbered) ---------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 max-w-lg">
          <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-[#17131F]">
            Four steps, one loop
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#6B6478]">
            Every mock interview follows the same cycle real candidates go
            through — set up, respond, review, repeat.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          {/* connecting line for large screens */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-[#EFEAFB] sm:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex gap-5">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[#E4DBFB] bg-white text-sm font-semibold text-[#6D28D9]">
                {step.number}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#17131F]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[#6B6478]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FEATURE GRID ---------------- */}
      <section className="border-y border-[#F3F0FB] bg-[#FBFAFF]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-lg">
            <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-[#17131F]">
              What makes the feedback useful
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#6B6478]">
              Not just a transcript — a breakdown you can act on before your
              next real interview.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-[#EFEAFB] bg-white p-6 transition-shadow hover:shadow-[0_12px_30px_-16px_rgba(76,29,149,0.25)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7F5FF] text-[#6D28D9]">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[#17131F]">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#6B6478]">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-[#17131F] px-8 py-12 sm:px-12 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Your next interview starts here.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#B7ADD6]">
              Set a role, get matched questions, and see exactly where to
              improve — before it's the real thing.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex flex-none items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17131F] transition-colors hover:bg-[#F0ECFA]"
          >
            Create Interview
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Choose a role and format",
    description:
      "Pick the job title, seniority, and interview type — behavioral, system design, or technical — so questions match what you'll actually face.",
  },
  {
    number: "02",
    title: "Get tailored questions",
    description:
      "The AI generates a question set from your role and past history, mixing familiar patterns with ones you haven't seen yet.",
  },
  {
    number: "03",
    title: "Answer out loud, in real time",
    description:
      "Respond by voice or text under a timer, the way you would in an actual panel — no pausing to draft the perfect sentence.",
  },
  {
    number: "04",
    title: "Review scored feedback",
    description:
      "Each answer is scored on structure, clarity, and specifics, with a rewritten sample answer so you know what 'better' looks like.",
  },
];

const features = [
  {
    icon: Mic,
    title: "Voice or text",
    description: "Answer however you think best — spoken like a real call, or typed at your own pace.",
  },
  {
    icon: Target,
    title: "Role-matched questions",
    description: "Question sets adapt to the title and seniority you set, not a generic bank.",
  },
  {
    icon: BarChart3,
    title: "Scored breakdowns",
    description: "Structure, clarity, and specificity scored per answer, not just a pass or fail.",
  },
  {
    icon: RotateCcw,
    title: "Full history",
    description: "Every past interview is saved, so you can retry the questions that tripped you up.",
  },
];