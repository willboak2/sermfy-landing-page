"use client";

import { newTab } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { PRODUCTS } from "@/lib/site";

const NAV = [
  { label: "Apps", href: "/apps" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  // Close everything when the page changes.
  const [shownPath, setShownPath] = useState(pathname);
  if (shownPath !== pathname) {
    setShownPath(pathname);
    setMenuOpen(false);
    setMobileOpen(false);
    setMobileProducts(false);
  }

  useEffect(() => {
    if (!menuOpen && !mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (menuOpen) triggerRef.current?.focus();
      setMenuOpen(false);
      setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Set when hovering opened the menu, so the click that usually follows keeps it open.
  const openedByHover = useRef(false);
  const openSoon = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen((was) => {
      if (!was) openedByHover.current = true;
      return true;
    });
  }, []);
  const onTriggerClick = useCallback(() => {
    if (openedByHover.current) {
      openedByHover.current = false;
      setMenuOpen(true);
      return;
    }
    setMenuOpen((v) => !v);
  }, []);
  const closeSoon = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      openedByHover.current = false;
      setMenuOpen(false);
    }, 140);
  }, []);

  const productsActive = pathname.startsWith("/products");

  return (
    <header className="sticky top-0 z-50 border-b border-black/6">
      {/* The blur sits on its own layer: a filter on the header itself would trap the full-screen phone menu inside it. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-white/85 backdrop-blur-xl backdrop-saturate-150" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sermfy home">
          <Image src="/brand/sermfy-mark.png" alt="" width={238} height={240} preload className="size-7" />
          <span className="text-[19px] font-semibold tracking-tight text-sermfy-navy">Sermfy</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <div onMouseEnter={openSoon} onMouseLeave={closeSoon} className="relative">
            <button
              ref={triggerRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls={panelId}
              onClick={onTriggerClick}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] transition-colors hover:text-ink ${
                productsActive || menuOpen ? "text-ink" : "text-ink-soft"
              }`}
            >
              Products
              <ChevronDown
                aria-hidden
                className={`size-4 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href} {...newTab(item.href)}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[15px] transition-colors hover:text-ink ${
                  active ? "text-ink" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#products"
            className="hidden rounded-full bg-sermfy-green px-5 py-2 text-[15px] font-medium text-white transition-colors hover:bg-sermfy-green-dark lg:inline-flex"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="-mr-2 rounded-full p-2 text-ink lg:hidden"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      {menuOpen ? (
        <div
          id={panelId}
          onMouseEnter={openSoon}
          onMouseLeave={closeSoon}
          className="absolute inset-x-0 top-full hidden animate-menu border-b border-black/6 bg-white lg:block"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-4 gap-4 px-8 py-8">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                onClick={() => setMenuOpen(false)}
                className="group rounded-2xl p-5 transition-colors hover:bg-warm focus-visible:bg-warm focus-visible:outline-none"
              >
                <ProductTile product={p} />
                <div className="mt-4 text-[17px] font-semibold tracking-tight text-ink">{p.name}</div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                <span className="mt-3 inline-block text-sm font-medium text-sermfy-green group-hover:underline">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
          <div className="border-t border-black/6 bg-warm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3 text-sm text-ink-soft">
              <span>Every Sermfy app on web, phone and desktop.</span>
              <Link href="/apps" onClick={() => setMenuOpen(false)} className="font-medium text-ink hover:underline">
                See all apps
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Main" className="px-4 pb-10 pt-2">
            <button
              type="button"
              aria-expanded={mobileProducts}
              onClick={() => setMobileProducts((v) => !v)}
              className="flex w-full items-center justify-between border-b border-line py-4 text-2xl font-semibold tracking-tight"
            >
              Products
              <ChevronDown
                aria-hidden
                className={`size-5 transition-transform ${mobileProducts ? "rotate-180" : ""}`}
              />
            </button>
            {mobileProducts ? (
              <ul className="border-b border-line py-2">
                {PRODUCTS.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/products/${p.slug}`} className="flex items-center gap-4 py-3">
                      <ProductTile product={p} small />
                      <span>
                        <span className="block font-semibold">{p.name}</span>
                        <span className="block text-sm text-ink-soft">{p.summary}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href} {...newTab(item.href)}
                className="block border-b border-line py-4 text-2xl font-semibold tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#products"
              onClick={() => setMobileOpen(false)}
              className="mt-8 flex justify-center rounded-full bg-sermfy-green px-5 py-3 font-medium text-white"
            >
              Get Started
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

/** The product's own mark on a tile in its own colours. */
export function ProductTile({
  product,
  small = false,
}: {
  product: (typeof PRODUCTS)[number];
  small?: boolean;
}) {
  const darkTile = product.slug === "stream" || product.slug === "go";
  const src = darkTile && product.mark.onDark ? product.mark.onDark : product.mark.src;
  return (
    <span
      className={`flex shrink-0 items-center justify-center ${small ? "size-11 rounded-xl" : "size-14 rounded-2xl"} ${
        product.slug === "go" ? "bg-go-deep" : darkTile ? "bg-charcoal" : "bg-warm ring-1 ring-black/5"
      }`}
    >
      <Image
        src={src}
        alt=""
        width={product.mark.width}
        height={product.mark.height}
        className={`${small ? "h-6" : "h-7"} w-auto`}
      />
    </span>
  );
}
