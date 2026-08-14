import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Overview", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Help Center", href: "/help-center" },
    ],
  },

  {
    heading: "Solutions",
    links: [
      { label: "Member Management", href: "/features/members" },
      { label: "Attendance Tracking", href: "/features/attendance" },
      { label: "Church Finance", href: "/features/finance" },
      { label: "Communication", href: "/features/communication" },
    ],
  },

  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides & Tutorials", href: "/guides" },
      { label: "Documentation", href: "/docs" },
      { label: "Support", href: "/support" },
    ],
  },

  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/Sermfy-logo-colored-blue.png"
                alt="Sermfy"
                width={180}
                height={48}
                priority
              />
            </Link>

            <p className="mt-6 text-base leading-7 text-gray-600">
              Modern church management software designed to help churches
              manage members, attendance, finances, communication, events,
              and ministry operations from one platform.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-brand-gradient px-6 py-3 text-white transition hover:brightness-105"
            >
              Request a Demo
            </Link>
          </div>

          {/* Navigation */}
          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-lg font-semibold">
                {column.heading}
              </h3>

              <ul className="mt-5 space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 transition hover:text-brand-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-gray-200 pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <button className="flex items-center gap-2">
                <Globe size={18} />
                English
                <ChevronDown size={14} />
              </button>

              <Link href="/terms">
                Terms of Service
              </Link>

              <Link href="/privacy">
                Privacy Policy
              </Link>

              <span>© 2026 Sermfy. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/sermfy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.youtube.com/@sermfy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>

              <a
                href="https://www.instagram.com/sermfy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/sermfy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}