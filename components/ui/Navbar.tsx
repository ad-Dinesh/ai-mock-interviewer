"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { BrainCircuit, Menu, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/questions", label: "Questions" },
  { href: "/dashboard/history", label: "History" },
  { href: "/how-it-works", label: "How It Works" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/dashboard") return pathname === href;

    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/85"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center gap-2 text-lg font-bold text-slate-900 transition-colors hover:text-violet-700"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-violet-50 text-violet-700 ring-1 ring-violet-100">
              <BrainCircuit className="size-5" aria-hidden="true" />
            </span>
            <span>AI Mock Interview</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-violet-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-violet-600" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          

          <div className="hidden md:block">
            <UserButton />
          </div>
          

          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className="text-slate-600 hover:bg-slate-100 md:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-violet-50 text-violet-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-1 flex items-center justify-between border-t border-slate-100 pt-3">
              <Button
                asChild
                size="sm"
                className="bg-violet-600 font-semibold text-white hover:bg-violet-700"
              >
                <Link href="/dashboard/new" onClick={() => setOpen(false)}>
                  <Plus className="size-4" aria-hidden="true" />
                  Create Interview
                </Link>
              </Button>
              <UserButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}