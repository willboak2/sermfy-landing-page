"use client";

import Image from "next/image";
import { Sora, Inter } from "next/font/google";
import { useState } from "react";
import {
  Menu,
  X,
  Users,
  CheckCircle2,
  MessageCircle,
  CircleDollarSign,
  TrendingUp,
  Unlock,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Building,
  User2,
  Users2,
  Zap,
} from "lucide-react";

const display = Sora({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

const NAV_LINKS = [
  { label: "Home", active: true },
  { label: "Pricing", active: false },
  { label: "Documentation", active: false },
  { label: "About", active: false },
];

const FEATURES = [
  { icon: Users, title: "Member Management", copy: "Add, update, and organize church members with ease." },
  { icon: CheckCircle2, title: "Event & Attendance Tracking", copy: "Track attendance for services, events, and groups." },
  { icon: MessageCircle, title: "Communication Tools", copy: "Send announcements, updates, and event reminders." },
  { icon: CircleDollarSign, title: "Finance Management", copy: "Track tithes, offerings, and donation reports securely." },
  { icon: Building, title: "Multi-Branch Support", copy: "Oversee every branch with unified management, reporting, and administration" },
  { icon: Users2, title: "Groups & Ministries", copy: "Create and organize ministries, departments, and groups." },
  { icon: Zap, title: "Automation for Follow-ups", copy: "Manage first timers, new converts, visitors and members." },
  { icon: TrendingUp, title: "Reports & Analytics", copy: "View insights on attendance, Finance, growth, and engagement." },
  { icon: Unlock, title: "Role-Based Access", copy: "Assign roles to pastors, admins, or volunteers with permissions." },
];

const FOOTER_COLUMNS = [
  { title: "Product", links: ["Overview", "Pricing", "Customer stories"] },
  { title: "Resources", links: ["Blog", "Guides & tutorials", "Help center"] },
  { title: "Company", links: ["About us", "Careers", "Media kit"] },
];

// colorful diamond mark used on light backgrounds (footer)
function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <polygon points="20,2 20,20 4,20" fill="#2563EB" />
      <polygon points="20,2 20,20 36,20" fill="#16A34A" />
      <polygon points="20,38 20,20 4,20" fill="#38BDF8" />
      <polygon points="20,38 20,20 36,20" fill="#4ADE80" />
    </svg>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${display.variable} ${body.variable} font-[var(--font-body)] bg-white text-[#0F1330]`}>
      {/* ---------- NAV ---------- */}
      <header className="relative z-30 bg-[#131B4D]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Image
  src="/sermfy-logo-white.png"
  alt="Sermfy"
  width={205}
  height={56}
  className="h-8 w-auto"
/>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`text-sm font-medium text-white/90 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80F5] rounded-sm ${
                  link.active ? "border-b-2 border-white pb-1" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://cms.sermfy.com/"
              className="rounded-full bg-gradient-to-r from-[#22C1E8] to-[#2F80F5] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#131B4D] focus-visible:ring-[#2F80F5]"
            >
              Login
            </a>
            <a
              href="https://cms.sermfy.com/auth/signup"
              className="rounded-full border border-white/70 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#131B4D] focus-visible:ring-white"
            >
              Sign Up
            </a>
          </div>

          <button
            className="text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-6 mb-4 flex flex-col gap-4 rounded-2xl bg-[#1B2560] p-6 md:hidden">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href="#" className="text-sm font-medium text-white/90 hover:text-white">
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-4">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-[#22C1E8] to-[#2F80F5] px-6 py-2 text-center text-sm font-semibold text-white"
              >
                Login
              </a>
              <a
                href="#"
                className="rounded-full border border-white/70 px-6 py-2 text-center text-sm font-semibold text-white"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative z-10 bg-white pt-14 lg:pt-20 pb-10">
        
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
  <div className="absolute inset-x-[-8%] top-6 opacity-30">
    <Image src="/wavebackground.png" alt="" width={1980} height={550} className="w-full" />
  </div>
</div>

        <div className="relative z-10 mx-auto max-w-3xl pt-5 px-6 text-center">
          <h1 className="font-[var(--font-display)] text-4xl font-bold leading-tight text-[#646464] sm:text-5xl">
            Sermfy Church Management
            <br />
            System (CMS)
          </h1>
          <p className="mt-6 text-xl font-medium text-[#4B5170] sm:text-2xl">
            Church Management Made Simple
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-[#22C1E8] to-[#2F80F5] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2F80F5]"
            >
              Request Demo
            </a>
            <a
              href="#features"
              className="rounded-full border-2 border-[#2D88D4] px-8 py-3 text-sm font-semibold text-[#0F1330] transition hover:bg-[#2F80F5]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2F80F5]"
            >
              See Features
            </a>
          </div>
        </div>

        {/* product mockup, overlapping into the gradient section below */}
        {/* product mockup, straddling the hero/features boundary */}
<div className="relative z-10 mx-auto mt-12 max-w-[1256px] px-6">
  <div className="-mb-[36%]">
    <Image
      src="/laptop-2.png"
      alt="Sermfy dashboard shown on laptop and mobile"
      width={1400}
      height={1000}
      className="mx-auto w-full drop-shadow-2xl"
      priority
    />
  </div>
</div>
      </section>

     {/* ---------- FEATURES (gradient band) ---------- */}
<section id="features" className="relative bg-[linear-gradient(139.69deg,#0BB1D7_-4.87%,#3687F3_88.18%)] pb-24">
  <div className="mx-auto max-w-[1256px] px-6 pt-[36%]" />

  <div className="mx-auto max-w-[1352px] px-6">
    <h2 className="text-center text-[36px] font-bold leading-[1.2] text-white sm:text-[48px] lg:text-[64px]">
      Features You&apos;ll Love
    </h2>
    <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map(({ icon: Icon, title, copy }, i) => (
        <div key={i} className="flex flex-col items-center px-2">
          <div className="mb-5 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#152259]">
            <Icon className="h-9 w-9 text-white" strokeWidth={2.25} />
          </div>
          <h3 className="text-[22px] font-bold leading-[1.2] text-white sm:text-[26px] lg:text-[30px]">
            {title}
          </h3>
          <p className="mt-3 max-w-[380px] text-[17px] leading-[1.4] text-white sm:text-[19px] lg:text-[22px]">
            {copy}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 px-6 py-16 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Image
                  src="/sermfy-logo-colored-blue.png"
                  alt="Sermfy"
                  width={205}
                  height={56}
                  className="h-9 w-auto"
                />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6B7094]">
              Apps and tools built for believers, churches, and ministries.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-[var(--font-display)] text-sm font-bold text-[#131B4D]">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#4B5170] transition hover:text-[#131B4D]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-[var(--font-display)] text-sm font-bold text-[#131B4D]">Try It Today</h4>
            <p className="mt-4 text-sm leading-relaxed text-[#4B5170]">
              Want to see how <span className="font-semibold text-[#131B4D]">Sermfy Church</span> can support your
              ministry? Get in touch for a personalized walkthrough.
            </p>
            <a
              href="https://cms.sermfy.com/auth/signup"
              className="mt-5 inline-block rounded-lg bg-gradient-to-r from-[#22C1E8] to-[#2F80F5] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2F80F5]"
            >
              Start today
            </a>
          </div>
        </div>

        <div className="border-t border-[#EAECF5]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-[#6B7094] sm:flex-row">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Globe className="h-4 w-4" />
                English
              </span>
              <a href="#" className="hover:text-[#131B4D]">Terms &amp; privacy</a>
              <span>© {new Date().getFullYear()} Sermfy LTD</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-[#131B4D] hover:opacity-70">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#131B4D] hover:opacity-70">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#131B4D] hover:opacity-70">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
        <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
    </div>
  );
}