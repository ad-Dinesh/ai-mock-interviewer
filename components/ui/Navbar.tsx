"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Menu, X, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/questions", label: "Questions" },
  { href: "/dashboard/history", label: "History" },
  { href: "/how-it-works", label: "How it Works?" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (!pathname) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo + Nav links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900 shrink-0">
            <BrainCircuit className="h-5 w-5 text-violet-600" />
            <span>AI Mock Interview</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  isActive(l.href)
  ? "text-violet-700"           // remove bg-violet-50
  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-violet-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard/new" className="hidden sm:inline-block">
            <Button
              size="sm"
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow-sm"
            >
              + Create Interview
            </Button>
          </Link>

          <div className="hidden md:block">
            <UserButton />
          </div>

          {/* Mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — outside the flex row */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive(l.href)
                    ? "text-violet-700 bg-violet-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-slate-100 mt-1 flex items-center justify-between">
              <Link href="/dashboard/new" onClick={() => setOpen(false)}>
                <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold">
                  + Create Interview
                </Button>
              </Link>
              <UserButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}