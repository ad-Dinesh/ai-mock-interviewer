import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  BrainCircuit,
} from "lucide-react";

const quickLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How It Works",
    href: "#how-it-works",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

const resources = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Question Bank",
    href: "/dashboard/questions",
  },
  {
    name: "Interview History",
    href: "/dashboard/history",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div className="md:col-span-2">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-violet-600 p-2">
                <BrainCircuit className="h-6 w-6 text-white" />
              </div>

              <span className="text-2xl font-bold text-white">
                AI Mock Interview
              </span>

            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Practice realistic AI-powered interviews, improve your
              communication skills, and prepare confidently for your
              dream job.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="https://github.com/ad-Dinesh"
                target="_blank"
              >
                <div className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-violet-500 hover:text-white">
                  <Github className="h-5 w-5" />
                </div>
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
              >
                <div className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-violet-500 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </div>
              </Link>

              <Link
                href="mailto:example@gmail.com"
              >
                <div className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-violet-500 hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
              </Link>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-6 space-y-4">

              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} AI Mock Interview. All rights reserved.
          </p>

          <p>
            Built with ❤️ using Next.js, Gemini AI & Clerk.
          </p>

        </div>

      </div>
    </footer>
  );
}