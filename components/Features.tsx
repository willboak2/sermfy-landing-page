import Image from "next/image";
import {
  Users,
  CalendarCheck,
  MessageCircle,
  CircleDollarSign,
  Building2,
  Layers,
  RefreshCw,
  BarChart3,
  Unlock,
  LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Member Management",
    description: "Add, update, and organize church members with ease.",
    icon: Users,
  },
  {
    title: "Event & Attendance Tracking",
    description: "Track attendance for services, events, and groups.",
    icon: CalendarCheck,
  },
  {
    title: "Communication Tools",
    description: "Send announcements, updates, and event reminders.",
    icon: MessageCircle,
  },
  {
    title: "Finance Management",
    description: "Track tithes, offerings, and donation reports securely.",
    icon: CircleDollarSign,
  },
  {
    title: "Multi-Branch Support",
    description: "Oversee every branch with unified management, reporting, and administration",
    icon: Building2,
  },
  {
    title: "Groups & Ministries",
    description: "Create and organize ministries, departments, and groups.",
    icon: Layers,
  },
  {
    title: "Automation for Follow-ups",
    description: "Manage first timers, new converts, visitors and members.",
    icon: RefreshCw,
  },
  {
    title: "Reports & Analytics",
    description: "View insights on attendance, finance, growth, and engagement.",
    icon: BarChart3,
  },
  {
    title: "Role-Based Access",
    description: "Assign roles to pastors, admins, or volunteers with permissions.",
    icon: Unlock,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-brand-gradient pt-30 pb-20 sm:pb-28">
      {/* Laptop + phone preview: pinned to the top of this section, then pulled
          up by half its own height so it straddles the white/blue seam. */}
  ``     <div className="absolute inset-x-0 top-80 z-20 -translate-y-1/2 px-5 sm:px-8">
        <div className="relative mx-auto w-full max-w-[1000px]">
          <Image
            src="/laptop.png"
            alt="Sermfy CMS dashboard shown on a laptop, with the member list open on a phone in front"
            width={1256}
            height={1108}
            sizes="(min-width: 1024px) 1000px, (min-width: 640px) 90vw, 100vw"
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-5 pt-[170px] sm:px-8 sm:pt-[230px] md:pt-[320px] lg:px-12 lg:pt-[420px] xl:pt-[460px]">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[56px] md:leading-tight">
          Features You&rsquo;ll Love
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-navy">
                <Icon size={36} strokeWidth={2} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
              <p className="mt-2 max-w-xs text-base text-white/90 sm:text-lg">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
