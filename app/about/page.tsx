import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About — Sermfy CMS",
  description:
    "Sermfy builds apps and tools for believers, churches, and ministries. Learn about our mission to make church management simple.",
}

const stats = [
  { value: "1,200+", label: "Churches served" },
  { value: "45", label: "Countries" },
  { value: "500K+", label: "Members managed" },
  { value: "99.9%", label: "Uptime" },
]

const values = [
  {
    title: "Built for ministry",
    desc: "Every feature is shaped by the real needs of pastors, admins, and volunteers serving their congregations.",
  },
  {
    title: "Simple by design",
    desc: "Powerful church management shouldn't require a manual. We obsess over clarity and ease of use.",
  },
  {
    title: "Secure & trusted",
    desc: "Your members' data is protected with role-based access, encryption, and reliable infrastructure.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">About Sermfy</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Apps and tools built for believers, churches, and ministries
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Sermfy Church Management System helps churches of every size manage members, events, finances, and
            communication in one simple platform, so leaders can spend less time on admin and more time on ministry.
          </p>
        </div>


        {/* Values */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 rounded-2xl bg-navy px-6 py-10 text-navy-foreground">
          {values.map((value) => (
            <div key={value.title}>
              <h2 className="text-lg font-bold text-navy-foreground">{value.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            Ready to simplify your church management?
          </h2>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://cms.sermfy.com/auth/signup"
              className="rounded-full bg-gradient-to-r from-sky to-brand px-7 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-brand px-7 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand/10"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
