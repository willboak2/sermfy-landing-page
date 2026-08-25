import Link from "next/link"
import Image from "next/image"
import { Globe } from "lucide-react"


function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.9 3.77-3.9 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2h3.3l-7.2 8.24L23.5 22h-6.6l-5.18-6.77L5.8 22H2.5l7.7-8.8L2 2h6.77l4.68 6.19L18.9 2Zm-1.16 18h1.83L7.34 3.9H5.38L17.74 20Z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Overview", href: "/" },
      { label: "Pricing", href: "/pricing" },
      { label: "Customer stories", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Guides & tutorials", href: "/documentation" },
      { label: "Help center", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Media kit", href: "#" },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">

         <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Image src="/images/sermfy-cms-logo-footer.png" alt="Sermfy CMS" width={160} height={44} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Apps and tools built for believers, churches, and ministries.
            </p>
          </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
         

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-sm font-bold text-foreground">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* CTA */}
          <div>
            <h3 className="text-lg font-bold text-foreground">Try It Today</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Want to see how <span className="font-semibold text-foreground">Sermfy Church</span>{" "}
              can support your ministry? Get in touch for a personalized walkthrough.
            </p>
            <a
              href="#demo"
              className="mt-5 inline-block rounded-full bg-gradient-to-r from-sky to-brand px-7 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Start today
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <button
              type="button"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Globe className="size-4" />
              English
            </button>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <span>&copy;2026 Sermfy LTD</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/sermfy" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-brand">
              <FacebookIcon className="size-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-brand">
            
            </a>
            <a href="#" aria-label="Youtube" className="text-muted-foreground transition-colors hover:text-brand">
            
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
