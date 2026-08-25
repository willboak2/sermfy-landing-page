// components/marketing/FeatureGrid.tsx
import {
  Users,
  CalendarCheck,
  MessageCircle,
  CircleDollarSign,
  Building2,
  UsersRound,
  Workflow,
  BarChart3,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Feature = { icon: LucideIcon; title: string; description: string };

const FEATURES: Feature[] = [
  { icon: Users, title: "Member Management", description: "Add, update, and organize church members with ease." },
  { icon: CalendarCheck, title: "Event & Attendance Tracking", description: "Track attendance for services, events, and groups." },
  { icon: MessageCircle, title: "Communication Tools", description: "Send bulk SMS, announcements, updates, and event reminders." },
  { icon: CircleDollarSign, title: "Finance Management", description: "Track tithes, offerings, and donation reports securely." },
  { icon: Building2, title: "Multi-Branch Support", description: "Manage every branch from one connected account." },
  { icon: UsersRound, title: "Groups & Ministries", description: "Create and organize ministries, departments, and groups." },
  { icon: Workflow, title: "Automation for Follow-ups", description: "Manage first timers, new converts, visitors, and members." },
  { icon: BarChart3, title: "Reports & Analytics", description: "View insights on attendance, finance, growth, and engagement." },
  { icon: ShieldCheck, title: "Role-Based Access", description: "Assign roles to pastors, admins, or volunteers with permissions." },
];

export default function FeatureGrid() {
  return (
    <section id="explore-features" className="bg-brand-gradient py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">Explore Features</h2>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy">
                <Icon size={36} strokeWidth={2} className="text-white" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-white/90">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}