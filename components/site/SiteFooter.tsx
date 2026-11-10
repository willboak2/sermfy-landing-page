import Image from "next/image";
import Link from "next/link";
import { LINKS, PRODUCTS, SOCIAL } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Products",
    links: PRODUCTS.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  },
  {
    heading: "Apps",
    links: [
      { label: "All apps", href: "/apps" },
      { label: "Web apps", href: "/apps#web" },
      { label: "Phone apps", href: "/apps#mobile" },
      { label: "Desktop apps", href: "/apps#desktop" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "CMS pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Support", href: "/support" },
      { label: "Help Center", href: LINKS.help },
      { label: "Contact", href: LINKS.email },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-warm text-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Sermfy home">
              <Image src="/brand/sermfy-mark.png" alt="" width={238} height={240} className="size-7" />
              <span className="text-[19px] font-semibold tracking-tight text-sermfy-navy">Sermfy</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Software for churches, ministries and organisations.
            </p>
            <ul className="mt-6 flex gap-4 text-sm">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:contents">
            {COLUMNS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="text-sm font-semibold">{col.heading}</h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sermfy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
