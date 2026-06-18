import Link from "next/link";

import { ArrowRight, Mic, Sparkles, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highlights = [
  {
    title: "Realistic interview drills",
    description:
      "Practice behavioral, technical, and role-specific questions in a focused flow.",
    icon: Mic,
  },
  {
    title: "Structured feedback",
    description:
      "Turn each answer into concrete improvements with clear, actionable guidance.",
    icon: Sparkles,
  },
  {
    title: "Built for consistency",
    description:
      "Track progress across sessions so every practice round moves you forward.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.08),transparent_35%),linear-gradient(180deg,#f8fafc_0%,#ffffff_46%,#eff6ff_100%)] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-slate-200/80 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              AI Mock Interview
            </p>
            <h1 className="mt-2 text-xl font-semibold text-slate-950">
              Practice with intention
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/sign-up">
                Start practicing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-slate-900" />
              Sharper interviews, calmer delivery, better outcomes.
            </span>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Rehearse interviews like they are the real thing.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              AI Mock Interview helps you practice answers, review feedback, and build
              confidence before the actual interview starts.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/sign-up">
                  Create account
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 px-6">
                <Link href="/dashboard">Open dashboard</Link>
              </Button>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                <dt className="text-sm text-slate-500">Mock sessions</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-950">12+</dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                <dt className="text-sm text-slate-500">Feedback focus</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-950">Clear</dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                <dt className="text-sm text-slate-500">Interview types</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-950">Hybrid</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="border-slate-200/80 bg-white/90 shadow-lg shadow-slate-200/50 backdrop-blur"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500">
                      Designed to keep the practice flow simple, fast, and useful.
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}