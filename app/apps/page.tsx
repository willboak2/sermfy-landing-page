import type { Metadata } from "next";
import Image from "next/image";
import { APP_GROUPS, SCREENS, type App } from "@/lib/site";
import { Shot } from "@/components/site/Frames";
import Reveal from "@/components/marketing/Reveal";
import { newTab } from "@/lib/links";

export const metadata: Metadata = {
  title: "Apps",
  description: "Every Sermfy app for the web, phones and computers, and how to get each one.",
  alternates: { canonical: "/apps" },
};

const STATUS_STYLE: Record<App["status"], string> = {
  available: "bg-sermfy-green/10 text-sermfy-green-dark",
  install: "bg-sermfy-sky/10 text-[#0077b3]",
  coming: "bg-black/5 text-ink-soft",
};

export default function AppsPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="max-w-3xl animate-rise text-balance text-5xl font-semibold tracking-[-0.035em] md:text-7xl">
            Sermfy apps
          </h1>
          <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-ink-soft md:text-xl">
            Where to find each app, what it runs on, and whether it&apos;s ready today.
          </p>
          <nav aria-label="App types" className="mt-8 flex flex-wrap gap-2">
            {APP_GROUPS.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                {g.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {APP_GROUPS.map((g, gi) => (
        <section key={g.id} id={g.id} className={`scroll-mt-16 py-16 md:py-20 ${gi % 2 === 0 ? "bg-warm" : "bg-white"}`}>
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{g.title}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {g.apps.map((a, i) => (
                <Reveal key={`${g.id}-${a.name}`} delay={(i % 2) * 60}>
                  <AppCard app={a} light={gi % 2 === 0} />
                </Reveal>
              ))}
            </div>
            {g.id === "mobile" ? (
              <>
                <AndroidSteps />
                <InstallSteps />
              </>
            ) : null}
          </div>
        </section>
      ))}
    </>
  );
}

function AppCard({ app: a, light }: { app: App; light: boolean }) {
  const phoneShot = a.screen ? SCREENS[a.screen].height > SCREENS[a.screen].width : false;
  return (
    <article
      id={a.id}
      className={`flex h-full scroll-mt-24 flex-col overflow-hidden rounded-3xl ${light ? "bg-white" : "bg-warm"}`}
    >
      <div className="flex items-start gap-4 p-6 md:p-8">
        <span
          className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-[22%] ring-1 ring-black/5"
          style={{ background: a.icon.tile ?? "#ffffff" }}
        >
          <Image
            src={a.icon.src}
            alt=""
            width={a.icon.width}
            height={a.icon.height}
            className={a.icon.full ? "size-full" : "h-7 w-auto"}
          />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-xl font-semibold tracking-tight">{a.name}</h3>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLE[a.status]}`}>{a.statusLabel}</span>
          </div>
          <p className="mt-1 text-sm text-ink-soft">{a.platforms}</p>
          <p className="mt-3 leading-relaxed text-ink">{a.description}</p>
          {a.action || a.secondary ? (
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              {a.action ? (
                <a
                  href={a.action.href} {...newTab(a.action.href)}
                  className="inline-flex rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  {a.action.label}
                </a>
              ) : null}
              {a.secondary ? (
                <a href={a.secondary.href} {...newTab(a.secondary.href)} className="text-sm font-medium text-ink hover:underline">
                  {a.secondary.label}
                </a>
              ) : null}
            </div>
          ) : null}
          {a.note ? <p className="mt-3 text-xs text-ink-soft">{a.note}</p> : null}
          {a.installable && !a.id ? (
            <p className="mt-4 text-sm text-ink-soft">Can be added to your phone or computer as an app.</p>
          ) : null}
        </div>
      </div>
      {a.screen ? (
        <div className={`mt-auto px-6 md:px-8 ${phoneShot ? "flex justify-center" : ""}`}>
          <div className={`overflow-hidden rounded-t-xl ring-1 ring-black/5 ${phoneShot ? "w-1/2 max-w-[220px] rounded-t-[1.6rem]" : ""}`}>
            <div className={phoneShot ? "aspect-[9/12] overflow-hidden" : "aspect-[16/8] overflow-hidden"}>
              <Shot screen={a.screen} mark={a.icon.src} sizes="(min-width: 768px) 560px, 100vw" />
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function AndroidSteps() {
  const steps = [
    "Tap Download for Android and wait for the download to finish.",
    "Open the downloaded file. If your phone asks, allow your browser to install apps.",
    "Tap Install, then open the app.",
  ];
  return (
    <div className="mt-14">
      <h3 className="text-xl font-semibold tracking-tight">Install on Android</h3>
      <p className="mt-2 text-ink-soft">The apps aren&apos;t on Google Play yet, so they install from the downloaded file.</p>
      <ol className="mt-6 grid gap-5 md:grid-cols-3">
        {steps.map((text, i) => (
          <li key={text} className="rounded-2xl border border-line p-6">
            <span className="text-sm font-semibold text-sermfy-green">{i + 1}</span>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function InstallSteps() {
  const steps = [
    {
      title: "iPhone",
      text: "Open the web app in Safari, tap the Share button, then Add to Home Screen.",
    },
    {
      title: "Android",
      text: "Open the web app in Chrome, tap the menu, then Install app or Add to Home screen.",
    },
    {
      title: "Computer",
      text: "Open the web app in Chrome or Edge and click the install icon at the end of the address bar.",
    },
  ];
  return (
    <div className="mt-14">
      <h3 className="text-xl font-semibold tracking-tight">iPhone and computers: add the web app</h3>
      <p className="mt-2 text-ink-soft">On iPhone, Sermfy Go works this way until the iPhone app is out. Sermfy CMS can be added the same way.</p>
      <ol className="mt-6 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-line p-6">
            <span className="text-sm font-semibold text-sermfy-green">{i + 1}</span>
            <h4 className="mt-2 font-semibold">{s.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
