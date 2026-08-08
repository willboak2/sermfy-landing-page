"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "Pricing", href: "#pricing" },
  { label: "Documentation", href: "#documentation" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="#home" className="flex shrink-0 items-center">
          <Image
            src="/Sermfy-logo-white.png"
            alt="Sermfy CMS"
            width={470}
            height={100}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative pb-1 text-[17px] transition-colors hover:text-brand-cyan ${
                link.active ? "font-semibold" : "font-medium text-white/90"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-white" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="rounded-full bg-brand-gradient px-7 py-3 text-[17px] font-medium text-white transition hover:brightness-105 active:scale-[0.98]">
            Login
          </button>
          <button className="rounded-full border-2 border-white px-7 py-3 text-[17px] font-medium text-white transition hover:bg-white hover:text-navy active:scale-[0.98]">
            Sign Up
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy px-5 pb-6 pt-2 sm:px-8">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-[17px] ${
                  link.active ? "font-semibold" : "font-medium text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <button className="w-full rounded-full bg-brand-gradient px-7 py-3 text-[16px] font-medium text-white">
              Login
            </button>
            <button className="w-full rounded-full border-2 border-white px-7 py-3 text-[16px] font-medium text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
