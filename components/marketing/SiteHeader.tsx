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
    <header className="sticky top-0 z-50 bg-white lg:bg-brand-navy">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/sermfy-cms-logo-footer.png"
            alt="Sermfy CMS"
            width={150}
            height={41}
            priority
            className="block h-auto w-24 lg:hidden"
          />
          <Image
            src="/images/Sermfy-logo-white.png"
            alt="Sermfy CMS"
            width={170}
            height={69}
            priority
            className="hidden lg:block"
          />
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

        <div className="flex items-center gap-6 lg:hidden">
          <Link
            href={LOGIN_URL}
            className="rounded-full border border-brand-navy px-4 py-1.5 text-sm font-medium text-brand-navy transition hover:bg-brand-navy hover:text-white"
          >
            Login
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="text-brand-navy"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-border bg-white px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={
                    "relative w-fit pb-2 text-[17px] font-medium text-brand-navy " +
                    (active
                      ? "after:absolute after:-bottom-1 after:-left-2 after:-right-2 after:h-[2px] after:bg-brand-blue-end after:content-['']"
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
              href={SIGNUP_URL}
              className="rounded-full bg-brand-gradient px-6 py-3 text-center text-[15px] font-medium text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
