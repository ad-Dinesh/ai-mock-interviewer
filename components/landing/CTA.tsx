import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-16 text-center backdrop-blur-xl">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600">
            <Sparkles className="h-7 w-7 text-white" />
          </div>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            Ready to Ace Your Next Interview?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Practice with AI-powered mock interviews, receive instant
            personalized feedback, and improve your confidence before
            your real interview.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700"
              >
                Start Free Interview
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 bg-transparent text-white hover:bg-slate-900"
              >
                Explore Features
              </Button>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}