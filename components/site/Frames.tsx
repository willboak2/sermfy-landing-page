import Image from "next/image";
import { SCREENS, type Screen } from "@/lib/site";

type ScreenKey = keyof typeof SCREENS;

/**
 * A real screenshot, or, while one isn't captured yet, the product mark on a plain surface.
 * Never an invented interface.
 */
export function Shot({
  screen,
  mark,
  sizes,
  preload = false,
  dark = false,
  className = "",
}: {
  screen: ScreenKey;
  mark?: string;
  sizes: string;
  preload?: boolean;
  dark?: boolean;
  className?: string;
}) {
  const s: Screen = SCREENS[screen];
  if (s.src) {
    return (
      <Image
        src={s.src}
        alt={s.alt}
        width={s.width}
        height={s.height}
        sizes={sizes}
        preload={preload}
        className={`block h-auto w-full ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${s.alt} (screenshot to come)`}
      style={{ aspectRatio: `${s.width} / ${s.height}` }}
      className={`flex w-full items-center justify-center ${dark ? "bg-charcoal-2" : "bg-warm"} ${className}`}
    >
      {mark ? (
        <Image src={mark} alt="" width={96} height={96} className="h-12 w-auto opacity-30 md:h-16" />
      ) : null}
    </div>
  );
}

/** A browser window: for the web products. */
export function BrowserFrame({
  url,
  dark = false,
  children,
  className = "",
}: {
  url: string;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`screen-shadow overflow-hidden rounded-xl border ${
        dark ? "border-white/10 bg-charcoal-2" : "border-black/10 bg-white"
      } ${className}`}
    >
      <div
        className={`flex h-8 items-center gap-1.5 border-b px-3 md:h-9 ${
          dark ? "border-white/10 bg-[#202329]" : "border-black/5 bg-[#f4f3f0]"
        }`}
      >
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span
          className={`mx-auto hidden max-w-xs flex-1 truncate rounded-md px-3 py-0.5 text-center text-[11px] sm:block ${
            dark ? "bg-white/5 text-on-dark-soft" : "bg-black/5 text-ink-soft"
          }`}
        >
          {url}
        </span>
        <span className="hidden w-[46px] sm:block" />
      </div>
      {children}
    </div>
  );
}

/** A laptop: screen in a thin bezel over a shallow base. */
export function LaptopFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div className="relative mx-auto w-[88%] rounded-t-[14px] border border-black/20 bg-[#0c0d10] p-[1.6%] pb-[2.2%]">
        <div className="overflow-hidden rounded-[3px]">{children}</div>
      </div>
      <div className="relative mx-auto h-3 w-full rounded-b-[14px] bg-gradient-to-b from-[#d9d9de] to-[#a9aab1] md:h-4">
        <div className="absolute left-1/2 top-0 h-1.5 w-[14%] -translate-x-1/2 rounded-b-md bg-[#8e8f96]" />
      </div>
      <div className="mx-auto h-4 w-[92%] bg-[radial-gradient(ellipse_at_top,rgb(0_0_0/0.22),transparent_70%)]" />
    </div>
  );
}

/** A desktop monitor on a stand. */
export function MonitorFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div className="screen-shadow rounded-[12px] border border-white/10 bg-[#0a0b0d] p-[1.2%]">
        <div className="overflow-hidden rounded-[4px]">{children}</div>
      </div>
      <div className="mx-auto h-10 w-[12%] bg-gradient-to-b from-[#2a2c31] to-[#1c1e22] md:h-16" />
      <div className="mx-auto h-2 w-[26%] rounded-t-md bg-[#2f3137]" />
    </div>
  );
}

/** A phone with rounded corners and a thin bezel. */
export function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`screen-shadow rounded-[2.4rem] border border-white/10 bg-[#0a0b0d] p-[3.2%] ${className}`}
    >
      <div className="overflow-hidden rounded-[2rem]">{children}</div>
    </div>
  );
}

/** A projection screen on a dark wall: what the congregation sees. */
export function ProjectionFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-[#08090b] p-[6%] pb-[8%] ${className}`}>
      <div className="overflow-hidden rounded-sm shadow-[0_0_80px_rgb(255_255_255/0.08)]">{children}</div>
    </div>
  );
}
