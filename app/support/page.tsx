import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Sermfy CMS, Sermfy Stream, Sermfy Presenter and Sermfy Go.",
  alternates: { canonical: "/support" },
};

const OPTIONS = [
  {
    title: "Help Center",
    text: "Guides for setting up and using Sermfy.",
    href: LINKS.help,
    cta: "Open the Help Center",
  },
  {
    title: "Email us",
    text: "support@sermfy.com",
    href: LINKS.email,
    cta: "Send an email",
  },
  {
    title: "Downloads",
    text: "Installers for Sermfy Stream and Sermfy Presenter.",
    href: LINKS.downloads,
    cta: "Go to downloads",
  },
];

export default function SupportPage() {
  return (
    <section className="bg-white pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h1 className="animate-rise text-balance text-5xl font-semibold tracking-[-0.035em] md:text-7xl">Support</h1>
        <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-ink-soft md:text-xl">
          How to get help with any Sermfy product.
        </p>
        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {OPTIONS.map((o) => (
            <li key={o.title}>
              <a
                href={o.href}
                className="group flex h-full flex-col rounded-3xl bg-warm p-8 transition-transform hover:-translate-y-0.5"
              >
                <h2 className="text-xl font-semibold tracking-tight">{o.title}</h2>
                <p className="mt-2 leading-relaxed text-ink-soft">{o.text}</p>
                <span className="mt-8 inline-flex items-center gap-1 text-[15px] font-medium text-sermfy-green-dark">
                  {o.cta}
                  <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
