import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BrainCircuit,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <Sparkles className="h-4 w-4" />
            AI Powered Interview Platform
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Ace Your
            <span className="block text-violet-500">
              Technical Interviews
            </span>
            with AI
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Practice realistic interview questions,
            receive instant AI feedback,
            improve communication skills,
            and confidently prepare for your dream job.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 bg-transparent text-white hover:bg-slate-900"
              >
                Learn More
              </Button>
            </Link>

          </div>

          {/* Highlights */}

          <div className="mt-12 flex flex-col gap-4 text-slate-300">

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              AI Generated Interview Questions
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              Instant AI Feedback
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              Voice Based Answers
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">

            <div className="mb-6 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-4">

              <div className="rounded-xl bg-violet-600 p-5 text-white">
                <div className="flex items-center justify-between">
                  <span>Overall Score</span>
                  <BrainCircuit className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-5xl font-bold">
                  9.2
                </h2>

                <p className="mt-2 text-violet-100">
                  Excellent Performance
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">

                <div className="mb-4 h-3 rounded-full bg-slate-700" />
                <div className="mb-4 h-3 w-4/5 rounded-full bg-slate-700" />
                <div className="mb-4 h-3 w-3/5 rounded-full bg-slate-700" />
                <div className="h-3 w-2/3 rounded-full bg-slate-700" />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}