"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
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
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold text-slate-900">
            AI Mock Interview
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-medium px-2 py-1 rounded-md transition-colors ${
                  isActive(l.href)
                    ? "text-slate-900 bg-slate-100"
                    : "text-slate-700 hover:text-violet-600"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard/new" className="hidden sm:inline-block">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Create Interview
            </Button>
          </Link>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div className="hidden md:block">
            <UserButton />
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="absolute left-0 top-16 w-full border-t bg-white md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      isActive(l.href)
                        ? "text-slate-900 bg-slate-100"
                        : "text-slate-700 hover:text-violet-600"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}

                <Link href="/dashboard/new" onClick={() => setOpen(false)}>
                  <Button size="sm" className="w-full bg-blue-600 text-white">
                    Create Interview
                  </Button>
                </Link>

                <div className="pt-2">
                  <UserButton />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}