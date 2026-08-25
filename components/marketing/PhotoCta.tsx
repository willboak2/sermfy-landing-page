// components/marketing/PhotoCta.tsx
import Image from "next/image";
import Reveal from "./Reveal";

export default function PhotoCta() {
  return (
    <section className="relative isolate pt h-[560px] w-full overflow-hidden sm:h-[620px] pb-0">
      <Image
        src="/images/legal-hero.png"
        alt="Church staff reviewing Sermfy on a laptop"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#001838]/70 via-[#001838]/10 to-transparent"
      />
      <div className="relative flex h-full items-end justify-center px-6 pb-16 pt sm:items-center sm:pb-20 pt-100">
        <Reveal>
          <h2 className="max-w-2xl text-center text-3xl font-semibold leading-tight text-white sm:text-5xl">
            A better way to manage the modern church.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}