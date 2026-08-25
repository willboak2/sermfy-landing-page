import Image from "next/image"
import { Download } from "lucide-react"

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string }

export type LegalSection = {
  heading: string
  blocks: LegalBlock[]
}

type LegalPageProps = {
  bannerTitle: string
  documentTitle: string
  intro: LegalBlock[]
  sections: LegalSection[]
  pdfHref: string
  pdfFileName: string
}

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="leading-relaxed text-muted-foreground text-pretty">
              {block.text}
            </p>
          )
        }
        if (block.type === "subheading") {
          return (
            <h3 key={i} className="font-semibold text-foreground">
              {block.text}
            </h3>
          )
        }
        return (
          <ul key={i} className="flex flex-col gap-2 pl-5">
            {block.items.map((item, j) => (
              <li key={j} className="list-disc leading-relaxed text-muted-foreground marker:text-primary">
                {item}
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}

export function LegalPage({ bannerTitle, documentTitle, intro, sections, pdfHref, pdfFileName }: LegalPageProps) {
  return (
    <main>
      {/* Hero banner */}
      <section className="relative h-56 md:h-72 lg:h-80">
        <Image
          src="/images/legal-hero.png"
          alt="Two church administrators collaborating at a laptop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/70" aria-hidden />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold uppercase tracking-wide text-primary-foreground text-balance md:text-4xl lg:text-5xl">
            {bannerTitle}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">{documentTitle}</h2>
          <a
            href={pdfHref}
            download={pdfFileName}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="size-4" aria-hidden />
            Download PDF
          </a>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <Blocks blocks={intro} />
        </div>

        {sections.map((section, i) => (
          <section key={i}>
            <div className="my-8 border-t border-dashed border-border" aria-hidden />
            <h2 className="text-lg font-bold uppercase tracking-wide text-foreground md:text-xl">{section.heading}</h2>
            <div className="mt-4">
              <Blocks blocks={section.blocks} />
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
