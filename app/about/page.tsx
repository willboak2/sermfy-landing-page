import type { Metadata } from "next";
import Link from "next/link";
import { ProductTile } from "@/components/site/SiteHeader";
import { LINKS, PRODUCTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Sermfy builds software for churches and ministries.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="animate-rise text-balance text-5xl font-semibold tracking-[-0.035em] md:text-7xl">
            About Sermfy
          </h1>
          <div className="mt-8 animate-rise space-y-5 text-lg leading-relaxed text-ink-soft md:text-xl">
            <p>Sermfy builds software for churches and ministries.</p>
            <p>
              Sermfy CMS runs church administration: members, attendance, finance, communication, follow-up, groups
              and reports, for one church or many branches. Sermfy Stream and Sermfy Presenter run the Sunday
              service: the live stream and the screen in the room. Sermfy Go carries sermons and podcasts to
              listeners on the web.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-warm py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our products</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="flex h-full flex-col rounded-3xl bg-white p-7 transition-transform hover:-translate-y-0.5"
                >
                  <ProductTile product={p} />
                  <span className="mt-5 text-lg font-semibold tracking-tight">{p.name}</span>
                  <span className="mt-1 text-sm leading-relaxed text-ink-soft">{p.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Talk to us</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Email{" "}
            <a href={LINKS.email} className="font-medium text-ink underline underline-offset-4">
              support@sermfy.com
            </a>{" "}
            or see the{" "}
            <a href={LINKS.help} className="font-medium text-ink underline underline-offset-4">
              Help Center
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
