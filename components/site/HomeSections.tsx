import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/marketing/Reveal";
import ProductVisual from "@/components/site/ProductVisual";
import { PhoneFrame, Shot } from "@/components/site/Frames";
import { ProductTile } from "@/components/site/SiteHeader";
import { CHURCHES, LOGOS_APPROVED, PRODUCTS, SCREENS, type Product } from "@/lib/site";

const byslug = (s: Product["slug"]) => PRODUCTS.find((p) => p.slug === s)!;

export function Hero() {
  const cms = byslug("cms");
  const presenter = byslug("presenter");
  const go = byslug("go");
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 text-center md:px-8 md:pt-24">
        <h1 className="mx-auto max-w-4xl animate-rise text-balance text-5xl font-semibold tracking-[-0.035em] text-ink md:text-7xl">
          Software for the whole church.
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl animate-rise text-pretty text-lg leading-relaxed text-ink-soft md:text-xl"
          style={{ animationDelay: "80ms" }}
        >
          Sermfy makes four products for churches and ministries: church management, live streaming, presentation
          and podcasts.
        </p>
        <div
          className="mt-9 flex animate-rise flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "160ms" }}
        >
          <Link
            href="#products"
            className="rounded-full bg-sermfy-green px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-sermfy-green-dark"
          >
            Explore Products
          </Link>
          <Link
            href="/apps"
            className="group inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-[15px] font-medium text-ink"
          >
            Explore Apps
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Campaign grid: real screens from three products */}
      <div className="mx-auto mt-16 max-w-7xl animate-rise px-4 md:mt-20 md:px-8" style={{ animationDelay: "240ms" }}>
        <div className="relative">
          <ProductVisual
            product={presenter}
            preload
            sizes="(min-width: 1280px) 1150px, 100vw"
          />
          <div className="absolute -bottom-6 right-2 w-[22%] min-w-[96px] md:-bottom-10 md:right-8">
            <PhoneFrame>
              <Shot screen="goPhoneShow" mark={go.mark.onDark} sizes="260px" dark />
            </PhoneFrame>
          </div>
          {SCREENS[cms.hero].src ? (
            <div className="absolute -bottom-8 left-2 hidden w-[38%] md:-bottom-14 md:left-6 md:block">
              <ProductVisual product={cms} sizes="440px" />
            </div>
          ) : null}
        </div>
      </div>
      <div className="h-20 md:h-32" />
    </section>
  );
}

export function ProductGrid() {
  return (
    <section id="products" className="scroll-mt-16 bg-warm py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          Four products. One Sermfy.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
          {PRODUCTS.map((p, i) => {
            const dark = p.theme === "dark";
            return (
              <Reveal key={p.slug} delay={i * 60}>
                <Link
                  href={`/products/${p.slug}`}
                  className={`group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1 ${
                    dark ? "bg-charcoal text-on-dark" : "bg-white text-ink"
                  }`}
                >
                  <div className="p-7 md:p-9">
                    <ProductTile product={p} />
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.name}</h3>
                    <p className={`mt-2 max-w-md leading-relaxed ${dark ? "text-on-dark-soft" : "text-ink-soft"}`}>
                      {p.summary}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-1 text-[15px] font-medium"
                      style={{ color: dark ? p.accent : undefined }}
                    >
                      Learn more
                      <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                  <div className="mt-auto translate-y-2 px-7 transition-transform duration-500 group-hover:translate-y-0 md:px-9">
                    <div className="overflow-hidden rounded-t-xl">
                      <Shot
                        screen={p.hero}
                        mark={dark ? p.mark.onDark ?? p.mark.src : p.mark.src}
                        sizes="(min-width: 768px) 560px, 100vw"
                        dark={dark}
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductCampaign({ product }: { product: Product }) {
  const dark = product.theme === "dark";
  return (
    <section
      id={product.slug}
      className={`overflow-hidden py-24 md:py-32 ${dark ? "bg-charcoal text-on-dark" : "bg-white text-ink"}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-semibold" style={{ color: dark ? product.accent : undefined }}>
            {product.name}
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">{product.headline}</h2>
          <p className={`mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed ${dark ? "text-on-dark-soft" : "text-ink-soft"}`}>
            {product.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link
              href={`/products/${product.slug}`}
              className={`rounded-full px-6 py-2.5 text-[15px] font-medium transition-opacity hover:opacity-90 ${
                dark ? "bg-white text-ink" : "bg-ink text-white"
              }`}
            >
              Explore {product.name.replace("Sermfy ", "")}
            </Link>
            <a href={product.primary.href} className="group inline-flex items-center gap-1 text-[15px] font-medium">
              {product.primary.label}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-6xl md:mt-20">
          {product.slug === "go" ? (
            <GoStage product={product} />
          ) : (
            <ProductVisual product={product} />
          )}
        </Reveal>

        <Reveal>
          <ul className="mx-auto mt-16 grid max-w-5xl gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[15px] leading-relaxed">
                <Check aria-hidden className="mt-1 size-4 shrink-0" style={{ color: dark ? product.accent : "#19ab5d" }} />
                <span className={dark ? "text-on-dark" : "text-ink"}>{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** Go: the website on a computer next to the phone. */
function GoStage({ product }: { product: Product }) {
  return (
    <div className="relative pb-6">
      <div className="md:w-[86%]">
        <ProductVisual product={product} />
      </div>
      <div className="absolute bottom-0 right-0 w-[28%] min-w-[110px] md:w-[24%]">
        <PhoneFrame>
          <Shot screen="goPhoneShow" mark={product.mark.onDark} sizes="300px" dark />
        </PhoneFrame>
      </div>
    </div>
  );
}

export function ChurchLogos() {
  // Hidden on the live site until the owner confirms permission and supplies the files.
  if (!LOGOS_APPROVED && process.env.NODE_ENV === "production") return null;
  return (
    <section className="border-t border-line bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">Churches using Sermfy CMS</h2>
        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-center gap-x-8 gap-y-10 md:grid-cols-4">
          {CHURCHES.map((c) => (
            <li key={c.name} className="flex h-28 items-center justify-center">
              {c.logo ? (
                <Image src={c.logo} alt={c.name} width={c.width} height={c.height} className="max-h-28 w-auto object-contain" />
              ) : (
                <span className="rounded-xl border border-dashed border-line px-4 py-6 text-center text-xs text-ink-soft">
                  {c.name}
                  <br />
                  logo needed
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AppsTeaser() {
  return (
    <section className="bg-warm py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            On the web, on your phone and on your computer.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
            Download Sermfy Members and Sermfy Go for Android, sign in to Sermfy CMS on the web, and download
            Sermfy Stream for Windows or Mac.
          </p>
          <Link
            href="/apps"
            className="mt-8 inline-flex rounded-full bg-ink px-6 py-2.5 text-[15px] font-medium text-white hover:opacity-90"
          >
            See all apps
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <ul className="grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { src: "/brand/sermfy-mark.png", label: "CMS", tile: "bg-white" },
              { src: "/brand/admin-icon.png", label: "Admin", full: true },
              { src: "/brand/member-icon.png", label: "Member", full: true },
              { src: "/brand/go-icon.png", label: "Go", full: true },
              { src: "/brand/stream-mark.png", label: "Stream", tile: "bg-charcoal" },
              { src: "/brand/presenter-mark.png", label: "Presenter", tile: "bg-white" },
            ].map((a) => (
              <li key={a.label} className="flex flex-col items-center gap-3">
                <span
                  className={`flex aspect-square w-full max-w-[120px] items-center justify-center overflow-hidden rounded-[22%] shadow-sm ring-1 ring-black/5 ${a.tile ?? ""}`}
                >
                  <Image
                    src={a.src}
                    alt=""
                    width={256}
                    height={256}
                    className={a.full ? "size-full object-cover" : "h-[45%] w-auto"}
                  />
                </span>
                <span className="text-sm text-ink-soft">{a.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Reveal className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] md:text-4xl">About Sermfy</h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
          Sermfy builds software for churches and ministries: Sermfy CMS for church administration, Sermfy Stream
          and Sermfy Presenter for Sunday services, and Sermfy Go for podcasts.
        </p>
        <Link href="/about" className="mt-6 inline-flex items-center gap-1 font-medium text-sermfy-green hover:underline">
          More about Sermfy
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}
