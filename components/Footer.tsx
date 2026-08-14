import { Facebook, Twitter, Linkedin, Globe, ChevronDown, X, Youtube, Instagram } from "lucide-react";

const columns = [
  {
    heading: "Product",
    links: ["Overview", "Pricing", "Customer stories"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Guides & tutorials", "Help center"],
  },
  {
    heading: "Company",
    links: ["About us", "Careers", "Media kit"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#BBBBBB] bg-white">
      <div className="mx-auto max-w-8xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo + description */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <path d="M13 0L26 7.5V18.5L13 26L0 18.5V7.5L13 0Z" fill="#3687F3" />
                <path d="M13 0L26 7.5L13 13L0 7.5L13 0Z" fill="#0BB1D7" />
                <path d="M13 13L26 18.5L13 26V13Z" fill="#8AC541" />
              </svg>
              <span className="text-2xl font-bold text-navy">Sermfy</span>
            </a>
            <p className="mt-4 max-w-[240px] text-[17px] leading-[30px] tracking-tight text-ink-700">
              Apps and tools built for believers, churches, and ministries.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-lg font-bold text-ink-800">{col.heading}</p>
              <ul className="mt-4 flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[17px] text-ink-800 tracking-tight transition hover:text-brand-blue"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Try it today */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-2xl font-bold text-ink-800">Try It Today</p>
            <p className="mt-4 max-w-[280px] text-[17px] leading-5 tracking-tight text-ink-800">
              Want to see how <span className="font-bold">Sermfy Church</span>{" "}
              can support your ministry? Get in touch for a personalized
              walkthrough.
            </p>
            <button className="mt-6 rounded-lg bg-brand-gradient px-8 py-4 text-lg text-white transition hover:brightness-105 active:scale-[0.98]">
              Start today
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-[#A3ACB1] pt-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex flex-col items-center gap-4 text-sm text-ink-800 sm:flex-row sm:gap-10 sm:text-base">
              <button className="flex items-center gap-1.5 tracking-tight">
                <Globe size={18} />
                English
                <ChevronDown size={14} />
              </button>
              <a href="#" className="tracking-tight">
                Terms &amp; privacy
              </a>
              <p className="tracking-tight">&copy;2026 Sermfy</p>
            </div>

            <div className="flex items-center gap-8">
              <a href="https://www.facebook.com/sermfy" aria-label="Facebook" className="text-ink-800 transition hover:text-brand-blue">
                <Facebook size={20} />
              </a>

              <a href="#" aria-label="Youtube" className="text-ink-800 transition hover:text-brand-blue">
                <Youtube size={20} />
              </a>

               <a href="www.instagram.com/sermfy" aria-label="Instagram" className="text-ink-800 transition hover:text-brand-blue">
                <Instagram size={20} />
              </a>

              <a href="www.linkedin.com/in/sermfy" aria-label="LinkedIn" className="text-ink-800 transition hover:text-brand-blue">
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
