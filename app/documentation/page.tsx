import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Rocket, Users, Wallet, Bell, ShieldCheck, FilePen, ShieldLock, Users2, Users2Icon } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation — Sermfy CMS",
  description: "Guides, tutorials, and references to help you get the most out of Sermfy Church Management System.",
}

const sections = [
   { icon: Rocket, title: "Getting started", href: "#getting-started", desc: "Set up your church, add your first branch, and invite your team." },
  { icon: FilePen, title: "Terms and Conditions", href: "/terms", desc: "Understand the rules and guidelines that govern the use of Sermfy and its services.." },
  { icon: ShieldLock, title: "Privacy Policy", href: "/privacy", desc: "Learn how Sermfy collects, uses, protects, and manages church and member information." },
  { icon: Users, title: "Member management", href: "#members", desc: "Add, import, organize, and segment members and groups." },
  { icon: Users2Icon, title: "Groups and Departments", href: "#groups", desc: "Organize your church into groups, departments, ministries, and branches with ease." },
  { icon: Wallet, title: "Finance & giving", href: "#finance", desc: "Record tithes and offerings, and generate donation reports." },
  { icon: Bell, title: "Communication & Automation", href: "#communication", desc: "Send announcements, reminders, and targeted messages while automating important church communications and follow-ups." },
  { icon: ShieldCheck, title: "Roles & access", href: "#access", desc: "Configure role-based permissions for pastors and volunteers." },
  { icon: BookOpen, title: "Online Giving Portal", href: "#api", desc: "Configure secure online giving with trusted third-party payment providers such as Paystack and other supported gateways." },
]

export default function DocumentationPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to set up, manage, and grow your church with Sermfy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-navy text-navy-foreground">
                <section.icon className="size-5" />
              </span>
              <h2 className="mt-4 text-lg font-bold text-card-foreground group-hover:text-brand">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
          
          <div id="getting-started" className="scroll-mt-24"><h3 className="font-bold text-slate-950">Getting started</h3><p className="mt-1 text-sm leading-6 text-slate-600">Create your church workspace, configure your branch and invite your team.</p></div>
          <div id="members" className="scroll-mt-24"><h3 className="font-bold text-slate-950">Member management</h3><p className="mt-1 text-sm leading-6 text-slate-600">Manage members, visitors, profiles, groups and membership information.</p></div>
          <div id="groups" className="scroll-mt-24"><h3 className="font-bold text-slate-950">Groups and Departments</h3><p className="mt-1 text-sm leading-6 text-slate-600">Organize your church into groups, departments, ministries, and branches with ease.</p></div>
          <div id="finance" className="scroll-mt-24"><h3 className="font-bold text-slate-950">Finance & giving</h3><p className="mt-1 text-sm leading-6 text-slate-600">Record church income and expenses and keep financial reporting organized.</p></div>
          <div id="communication" className="scroll-mt-24"><h3 className="font-bold text-slate-950">Communication</h3><p className="mt-1 text-sm leading-6 text-slate-600">Use messaging and automated reminders to keep your congregation informed.</p></div>
          <div id="access" className="scroll-mt-24"><h3 className="font-bold text-slate-950">Roles & access</h3><p className="mt-1 text-sm leading-6 text-slate-600">Control access by role and permission so every team member sees what they need.</p></div>
          <div id="api" className="scroll-mt-24"><h3 className="font-bold text-slate-950">API reference</h3><p className="mt-1 text-sm leading-6 text-slate-600">API documentation can be connected here when the public API is ready.</p></div>
        </div>

        <div className="mt-12 rounded-2xl bg-navy px-6 py-10 text-center text-navy-foreground md:px-12">
          <h2 className="text-2xl font-bold">Can&apos;t find what you need?</h2>
          <p className="mx-auto mt-2 max-w-md text-navy-foreground/80">
            Our support team is here to help you get up and running.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-sky to-brand px-7 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Contact support
          </Link>
        </div>
      </section>
    </div>
  )
}
