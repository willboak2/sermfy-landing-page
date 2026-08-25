// components/marketing/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-40 pt-20 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(54,135,243,0.08) 0%, rgba(255,255,255,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/images/wavebackground.png)" }}
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-6xl">
          Sermfy{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Church Growth
          </span>{" "}
          Management System
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#5E5E5E] sm:text-2xl">
          Premium church growth software built for modern churches.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://cms.sermfy.com/auth/login"
            className="w-auto rounded-full bg-brand-gradient px-8 py-4 text-center text-lg font-medium text-white transition hover:opacity-90"
          >
            Request Demo
          </a>

          <a
            href="#explore-features"
            className="hidden rounded-full border border-[#D0D0D0] px-8 py-4 text-center text-lg font-medium text-[#3D3D3D] transition hover:border-brand-blue-end sm:inline-block"
          >
            See Features
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 -mb-32 max-w-7xl px-6 sm:-mb-120">
        <Image
          src="/images/laptop.png"
          alt="Sermfy CMS dashboard shown on a laptop and mobile phone"
          width={1024}
          height={1024}
          className="h-auto w-full max-w-5xl mx-auto"
          priority
        />
      </div>
    </section>
  );
}