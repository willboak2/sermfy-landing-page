import WaveBackground from "./WaveBackground";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pb-24 pt-16 sm:pb-36 sm:pt-20 md:pb-48 lg:pb-56">
      <WaveBackground />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-[28px] font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
            Sermfy Church Management System (CMS)
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-ink-700 sm:text-2xl md:text-[28px]">
            Church Management Made Simple
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-full bg-brand-gradient px-9 py-4 text-base font-medium text-white shadow-lg shadow-brand-blue/20 transition hover:brightness-105 active:scale-[0.98] sm:w-auto sm:text-lg">
              Request Demo
            </button>
            <button className="w-full rounded-full border-2 border-brand-blue px-9 py-4 text-base font-medium text-ink-800 transition hover:bg-brand-blue/5 active:scale-[0.98] sm:w-auto sm:text-lg">
              See Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


