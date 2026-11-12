import { newTab } from "@/lib/links";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/marketing/Reveal";
import ProductVisual from "@/components/site/ProductVisual";
import { BrowserFrame, PhoneFrame, ProjectionFrame, Shot } from "@/components/site/Frames";
import { ProductTile } from "@/components/site/SiteHeader";
import { ChurchLogos } from "@/components/site/HomeSections";
import { PRODUCTS, SCREENS, getProduct, type Product } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.summary} ${p.intro}`,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: p.name, description: p.summary, url: `/products/${p.slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const dark = p.theme === "dark";

  return (
    <>
      <section className={`overflow-hidden pt-16 md:pt-24 ${dark ? "bg-charcoal text-on-dark" : "bg-white text-ink"}`}>
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <div className="flex animate-rise justify-center">
            <ProductTile product={p} />
          </div>
          <p className="mt-6 animate-rise text-[15px] font-semibold" style={{ color: dark ? p.accent : undefined }}>
            {p.name}
          </p>
          <h1 className="mx-auto mt-3 max-w-4xl animate-rise text-balance text-5xl font-semibold tracking-[-0.035em] md:text-7xl">
            {p.headline}
          </h1>
          <p className={`mx-auto mt-6 max-w-2xl animate-rise text-pretty text-lg leading-relaxed md:text-xl ${dark ? "text-on-dark-soft" : "text-ink-soft"}`}>
            {p.intro}
          </p>
          <div className="mt-9 flex animate-rise flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={p.primary.href} {...newTab(p.primary.href)}
              className="rounded-full bg-sermfy-green px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-sermfy-green-dark"
            >
              {p.primary.label}
            </a>
            {p.secondary ? (
              <a href={p.secondary.href} {...newTab(p.secondary.href)} className="group inline-flex items-center gap-1.5 px-5 py-3 text-[15px] font-medium">
                {p.secondary.label}
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            ) : null}
          </div>
          <p className={`mt-4 text-sm ${dark ? "text-on-dark-soft" : "text-ink-soft"}`}>{p.platforms}</p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl animate-rise px-4 md:mt-20 md:px-8">
          <ProductVisual product={p} preload />
        </div>
        <div className="h-20 md:h-28" />
      </section>

      <section className={`py-24 md:py-28 ${dark ? "bg-charcoal-2 text-on-dark" : "bg-warm text-ink"}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            What {p.name.replace("Sermfy ", "")} does
          </h2>
          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 60}>
                <h3 className="border-t pt-5 text-lg font-semibold" style={{ borderColor: dark ? "rgb(255 255 255 / 0.12)" : "#e6e3dc" }}>
                  {g.title}
                </h3>
                <ul className={`mt-4 space-y-2.5 text-[15px] leading-relaxed ${dark ? "text-on-dark-soft" : "text-ink-soft"}`}>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery product={p} />

      {p.slug === "cms" ? <ChurchLogos /> : null}

      <section className={`py-24 text-center md:py-28 ${dark ? "bg-charcoal text-on-dark" : "bg-white text-ink"}`}>
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            {p.slug === "go" ? "Start listening." : `Get ${p.name}.`}
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={p.primary.href} {...newTab(p.primary.href)}
              className="rounded-full bg-sermfy-green px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-sermfy-green-dark"
            >
              {p.primary.label}
            </a>
            <Link href="/apps" className="group inline-flex items-center gap-1.5 px-5 py-3 text-[15px] font-medium">
              All Sermfy apps
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Gallery({ product: p }: { product: Product }) {
  const dark = p.theme === "dark";
  const mark = dark ? p.mark.onDark ?? p.mark.src : p.mark.src;
  return (
    <section className={`overflow-hidden py-24 md:py-28 ${dark ? "bg-charcoal text-on-dark" : "bg-white text-ink"}`}>
      <div className="mx-auto max-w-7xl space-y-16 px-4 md:space-y-24 md:px-8">
        {p.slug === "presenter" ? (
          <Reveal className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What the room sees.</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
                Check every slide in Preview, then send it to the screen in the room.
              </p>
            </div>
            <ProjectionFrame>
              <Shot screen="presenterOutput" sizes="(min-width: 768px) 560px, 100vw" />
            </ProjectionFrame>
          </Reveal>
        ) : null}
        {p.gallery.map((key) => {
          const s = SCREENS[key];
          const isPhone = s.height > s.width;
          return (
            <Reveal key={key} className="mx-auto max-w-5xl">
              {isPhone ? (
                <div className="mx-auto w-[60%] max-w-[300px]">
                  <PhoneFrame>
                    <Shot screen={key} mark={mark} sizes="300px" dark={dark} />
                  </PhoneFrame>
                </div>
              ) : key === "creatorStudio" ? (
                <BrowserFrame url="creator.sermfy.com" dark={dark}>
                  <Shot screen={key} mark={mark} sizes="(min-width: 1024px) 1000px, 100vw" dark={dark} />
                </BrowserFrame>
              ) : (
                <ProductVisual product={p} screen={key} sizes="(min-width: 1024px) 1000px, 100vw" />
              )}
              <p className={`mt-5 text-center text-sm ${dark ? "text-on-dark-soft" : "text-ink-soft"}`}>{s.alt}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
