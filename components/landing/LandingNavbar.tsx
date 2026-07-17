"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { BrainCircuit, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-500/30">
            <BrainCircuit className="h-6 w-6" />
          </div>

          <span className="text-xl font-bold text-white">
            AI Mock Interview
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Sign In
              </Button>
            </SignInButton>
          ) : (
            <UserButton />
          )}

          <Link href="/dashboard">
            <Button className="bg-violet-600 hover:bg-violet-700">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#050816] lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            {!isSignedIn ? (
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  className="w-full"
                >
                  Sign In
                </Button>
              </SignInButton>
            ) : null}

            <Link href="/dashboard">
              <Button className="w-full bg-violet-600 hover:bg-violet-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}