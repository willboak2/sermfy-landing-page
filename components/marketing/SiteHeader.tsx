// components/marketing/SiteHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Documentation", href: "/documentation" },
  { label: "About", href: "/about" },
];

const LOGIN_URL = "https://cms.sermfy.com/auth/login";
const SIGNUP_URL = "https://cms.sermfy.com/auth/signup";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-brand-navy">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/Sermfy-logo-white.png" alt="Sermfy CMS" width={170} height={69} priority />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  "pb-1 text-[17px] font-medium text-white " +
                  (active ? "underline underline-offset-4 decoration-2 decoration-brand-blue-end" : "")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={LOGIN_URL}
            className="rounded-full bg-brand-gradient px-6 py-2.5 text-[15px] font-medium text-white transition hover:opacity-90"
          >
            Login
          </Link>
          <Link
            href={SIGNUP_URL}
            className="rounded-full border-2 border-white px-6 py-2.5 text-[15px] font-medium text-white transition hover:bg-white hover:text-brand-navy"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-navy px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={
                    "relative w-fit pb-2 text-[17px] font-medium text-white " +
                    (active
                      ? "after:absolute after:-bottom-1 after:-left-2 after:-right-2 after:h-[2px] after:bg-white after:content-['']"
                      : "")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href={LOGIN_URL}
              className="rounded-full bg-brand-gradient px-6 py-3 text-center text-[15px] font-medium text-white"
            >
              Login
            </Link>
            <Link
              href={SIGNUP_URL}
              className="rounded-full border-2 border-white px-6 py-3 text-center text-[15px] font-medium text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
