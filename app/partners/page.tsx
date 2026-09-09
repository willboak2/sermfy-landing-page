// app/partners/page.tsx
import type { Metadata } from "next";
import { Link2, Share2, Wallet, Check, BarChart3, Banknote, Headset, Megaphone } from "lucide-react";
import Reveal from "@/components/marketing/Reveal";

export const metadata: Metadata = {
  title: "Sermfy Partner Program | Earn Commission Referring Churches",
  description:
    "Join the Sermfy Partner Program. Get a unique referral link, refer churches to Sermfy, and earn recurring commission on every church that subscribes.",
  alternates: {
    canonical: "https://www.sermfy.com/partners",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sermfy Partner Program | Earn Commission Referring Churches",
    description:
      "Get a unique referral link, refer churches to Sermfy, and earn recurring commission on every church that subscribes.",
    url: "https://www.sermfy.com/partners",
    siteName: "Sermfy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermfy Partner Program",
    description: "Earn recurring commission referring churches to Sermfy.",
  },
};

const STEPS = [
  {
    icon: Link2,
    title: "Get your referral link",
    description: "Once approved, you get a unique referral code and link to share — no setup required.",
  },
  {
    icon: Share2,
    title: "Refer churches",
    description: "Share your link with churches and ministries who could benefit from Sermfy.",
  },
  {
    icon: Wallet,
    title: "Earn commission",
    description: "Earn recurring commission on every subscription payment made by a church you referred.",
  },
];

const BENEFITS = [
  "Up to 20% recurring commission on referred subscriptions",
  "A partner dashboard to track referrals, commissions, and payouts in real time",
  "Timely payouts once your commission balance is eligible",
  "Marketing resources to help you promote Sermfy",
];

const APPLY_URL = "https://cms.sermfy.com/partners/apply";
const LOGIN_URL = "https://cms.sermfy.com/partners/login";

export default function PartnersPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-white pb-24 pt-20 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(60% 50% at 50% 0%, rgba(54,135,243,0.08) 0%, rgba(255,255,255,0) 70%)",
          }}
        />

        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-6xl">
            Partner with{" "}
            <span className="whitespace-nowrap bg-brand-gradient bg-clip-text text-transparent">Sermfy</span>
          </p>
          <h1 className="mx-auto mt-6 max-w-2xl text-lg text-[#5E5E5E] sm:text-2xl">
            Refer churches to Sermfy and earn recurring commission on every subscription — with your own dashboard to
            track every referral and payout.
          </h1>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APPLY_URL}
              className="w-auto rounded-full bg-brand-gradient px-8 py-4 text-center text-lg font-medium text-white transition hover:opacity-90"
            >
              Apply to Become a Partner
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-[#D0D0D0] px-8 py-4 text-center text-lg font-medium text-[#3D3D3D] transition hover:border-brand-blue-end"
            >
              How it works
            </a>
          </div>

          <p className="mt-6 text-sm text-[#5E5E5E]">
            Already a partner?{" "}
            <a href={LOGIN_URL} className="font-semibold text-brand hover:opacity-80">
              Log in
            </a>
          </p>
        </Reveal>
      </section>

      <section id="how-it-works" className="bg-brand-gradient py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">How it works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-white/90">
              Three simple steps — no technical setup, no upfront cost.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy">
                    <Icon size={36} strokeWidth={2} className="text-white" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-white/90">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Why partner with us
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Built for people and organizations who already work with churches — consultants, denominational
              leaders, and ministry networks.
            </p>

            <ul className="mt-8 space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <BarChart3 className="size-8 text-brand" />
                <h3 className="mt-4 text-base font-bold text-card-foreground">Real-time tracking</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  See every referred church, its subscription status, and your commission — as it happens.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Banknote className="size-8 text-brand" />
                <h3 className="mt-4 text-base font-bold text-card-foreground">Simple payouts</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Request a payout once your eligible balance clears the minimum threshold.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Megaphone className="size-8 text-brand" />
                <h3 className="mt-4 text-base font-bold text-card-foreground">Marketing support</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Get resources to help you introduce Sermfy to churches you already work with.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Headset className="size-8 text-brand" />
                <h3 className="mt-4 text-base font-bold text-card-foreground">Dedicated support</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A direct line to our team whenever you need help closing a referral.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-navy py-20">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">Ready to start earning?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Applications are reviewed by our team — we&rsquo;ll follow up by email once you&rsquo;re approved.
          </p>
          <a
            href={APPLY_URL}
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-sky to-brand px-8 py-4 text-center text-lg font-medium text-white transition hover:opacity-90"
          >
            Apply to Become a Partner
          </a>
          <p className="mt-4 text-sm text-white/70">
            Already a partner?{" "}
            <a href={LOGIN_URL} className="font-semibold text-white hover:opacity-80">
              Log in
            </a>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
