import Image from "next/image";
import { ExternalLink } from "lucide-react";

const previews = [
  {
    title: "Dashboard",
    description:
      "Manage interviews, view analytics, and continue practicing from one place.",
    image: "/screenshots/dashboard.png",
  },
  {
    title: "Interview Experience",
    description:
      "AI-generated questions with voice recording for a realistic interview.",
    image: "/screenshots/interview.png",
  },
  {
    title: "AI Feedback",
    description:
      "Detailed ratings, strengths, weaknesses, and suggestions after every interview.",
    image: "/screenshots/feedback.png",
  },
];

export default function DashboardPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Product Preview
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            See the Platform in Action
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Explore the clean interface, AI-powered interview flow, and
            personalized feedback designed to help you improve.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {previews.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border bg-white shadow-xl"
            >
              {/* Browser Header */}
              <div className="flex items-center gap-2 border-b bg-slate-100 px-6 py-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-4 text-sm text-slate-500">
                  aimockinterview.vercel.app
                </span>
              </div>

              <div className="grid gap-10 p-8 lg:grid-cols-2">

                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {item.description}
                  </p>

                  <button className="mt-8 flex items-center gap-2 font-semibold text-violet-600">
                    Live Preview
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>

                <div className="overflow-hidden rounded-2xl border shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={700}
                    className="transition duration-500 hover:scale-105"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}