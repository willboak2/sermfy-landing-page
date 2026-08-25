// app/pricing/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

type Plan = {
  name: string
  tagline: string
  monthlyPrice: number | "custom"
  features: string[]
  cta: string
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "Starter Churches",
    monthlyPrice: 0,
    features: [
      "Up to 50 active members",
      "Member registration & profiles",
      "Attendance tracking",
      "Departments & groups",
      "Single admin access",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Basic",
    tagline: "small churches",
    monthlyPrice: 159,
    features: [
      "Up to 200 active members",
      "Everything in Free",
      "SMS communication dashboard (pay-as-you-go)",
      "Group & department messaging",
      "Data export (Excel / PDF)",
      "Multiple admin access",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Standard",
    tagline: "Growing churches",
    monthlyPrice: 299,
    features: [
      "Up to 1500 active members",
      "Everything in Basic",
      "Finance module (Tithes, Offerings, Expenses)",
      "Multi-branch management",
      "Advanced analytics & reports",
      "Custom roles & permissions",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Mega",
    tagline: "Large & Mega Churches",
    monthlyPrice: "custom",
    features: [
      "Unlimited active members",
      "Everything in Standard",
      "Multi-branch management",
      "Advanced analytics & reports",
      "Custom roles & permissions",
      "Custom Website",
      "Dedicated onboarding",
      "Priority support",
    ],
    cta: "Get Started",
    featured: false,
  },
]

const YEARLY_DISCOUNT = 0.15

function formatGhc(amount: number) {
  return `GH₵ ${amount.toLocaleString("en-GH")}`
}

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Simple pricing for every ministry
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Start free and upgrade as your church grows. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex rounded-full border border-border bg-card p-1">
            <span
              aria-hidden
              className={
                "absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-navy transition-transform duration-300 ease-out " +
                (billing === "monthly" ? "translate-x-0" : "translate-x-[calc(100%+8px)]")
              }
            />
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={
                "relative z-10 w-28 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 " +
                (billing === "monthly" ? "text-navy-foreground" : "text-muted-foreground")
              }
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={
                "relative z-10 w-28 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 " +
                (billing === "yearly" ? "text-navy-foreground" : "text-muted-foreground")
              }
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {plans.map((plan) => {
            const isCustom = plan.monthlyPrice === "custom"
            const yearlyFull = !isCustom ? (plan.monthlyPrice as number) * 12 : 0
            const yearlyDiscounted = Math.round(yearlyFull * (1 - YEARLY_DISCOUNT))
            const showYearlyDiscount = billing === "yearly" && !isCustom && (plan.monthlyPrice as number) > 0

            return (
              <div
                key={plan.name}
                className={
                  "flex flex-col rounded-2xl border p-8 " +
                  (plan.featured
                    ? "border-brand bg-navy text-navy-foreground shadow-xl"
                    : "border-border bg-card text-card-foreground")
                }
              >
                {plan.featured && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-gradient-to-r from-sky to-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                    Most popular
                  </span>
                )}

                <h2 className="text-lg font-bold">{plan.name}</h2>

                {isCustom ? (
                  <>
                    <div className="mt-4 text-4xl font-extrabold tracking-tight">Custom Price</div>
                    <p className={"mt-1 text-xs " + (plan.featured ? "text-navy-foreground/70" : "text-muted-foreground")}>
                      discount applied during sales
                    </p>
                  </>
                ) : (
                  <>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight">
                        {formatGhc(billing === "monthly" ? (plan.monthlyPrice as number) : yearlyDiscounted)}
                      </span>
                      <span className={plan.featured ? "text-navy-foreground/70" : "text-muted-foreground"}>
                        /{billing === "monthly" ? "Month" : "yearly"}
                      </span>
                    </div>
                    {showYearlyDiscount && (
                      <p className="mt-1 text-xs">
                        <span className="font-semibold text-red-500">{Math.round(YEARLY_DISCOUNT * 100)}% off</span>{" "}
                        <span className={plan.featured ? "text-navy-foreground/60 line-through" : "text-muted-foreground line-through"}>
                          {formatGhc(yearlyFull)}
                        </span>
                      </p>
                    )}
                  </>
                )}

                <p className={"mt-3 text-sm leading-relaxed " + (plan.featured ? "text-navy-foreground/80" : "text-muted-foreground")}>
                  {plan.tagline}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={"mt-0.5 size-4 shrink-0 " + (plan.featured ? "text-sky" : "text-brand")} />
                      <span className={plan.featured ? "text-navy-foreground/90" : "text-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://cms.sermfy.com/auth/signup?plan=${plan.name.toLowerCase()}`}
                  className={
                    "mt-8 rounded-full px-6 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90 " +
                    (plan.featured
                      ? "bg-gradient-to-r from-sky to-brand text-brand-foreground"
                      : "border border-brand text-brand")
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Note: SMS credits are billed separately on a pay-as-you-go basis. Subscriptions are primarily based on active
          member count and enabled modules.
        </p>
      </section>
    </div>
  )
}