// import { Bell, ChevronDown, LayoutDashboard, Users, Church, CreditCard } from "lucide-react";

// const stats = [
//   { label: "Total Members", value: "1,000", bg: "bg-violet-100", fg: "text-violet-700" },
//   { label: "Branches", value: "22", bg: "bg-sky-100", fg: "text-sky-700" },
//   { label: "Pastors", value: "22", bg: "bg-rose-100", fg: "text-rose-700" },
//   { label: "Active Groups", value: "22", bg: "bg-amber-100", fg: "text-amber-700" },
//   { label: "Birthdays", value: "22", bg: "bg-pink-100", fg: "text-pink-700" },
//   { label: "Pending Follow Ups", value: "22", bg: "bg-orange-100", fg: "text-orange-700" },
//   { label: "Done Follow Ups", value: "1,000", bg: "bg-indigo-100", fg: "text-indigo-700" },
//   { label: "Offering (Last week)", value: "GH\u20b52,000", bg: "bg-cyan-100", fg: "text-cyan-700" },
// ];

// const sidebarItems = [
//   { label: "Dashboard", icon: LayoutDashboard, active: true },
//   { label: "Church", icon: Church },
//   { label: "Membership", icon: Users },
//   { label: "Cards", icon: CreditCard },
// ];

// function DashboardScreen() {
//   return (
//     <div className="flex h-full w-full bg-white text-left">
//       {/* Sidebar */}
//       <div className="hidden w-[26%] shrink-0 flex-col bg-navy px-3 py-4 sm:flex">
//         <div className="mb-4 flex flex-col items-center gap-1.5 border-b border-white/10 pb-4">
//           <div className="h-8 w-8 rounded-full bg-white/20" />
//           <p className="text-[7px] font-semibold text-white sm:text-[8px]">Demo Church</p>
//         </div>
//         <nav className="flex flex-col gap-1">
//           {sidebarItems.map(({ label, icon: Icon, active }) => (
//             <div
//               key={label}
//               className={`flex items-center justify-between rounded px-2 py-1.5 ${
//                 active ? "bg-brand-blue text-white" : "text-white/70"
//               }`}
//             >
//               <span className="flex items-center gap-1.5">
//                 <Icon size={9} />
//                 <span className="text-[7px] font-medium sm:text-[8px]">{label}</span>
//               </span>
//               <ChevronDown size={8} />
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* Main */}
//       <div className="flex-1 overflow-hidden bg-slate-50 px-3 py-3">
//         <div className="mb-2 flex items-center justify-between">
//           <p className="text-[8px] font-semibold text-ink-800 sm:text-[9px]">Demo Accra</p>
//           <div className="flex items-center gap-2">
//             <Bell size={10} className="text-ink-500" />
//             <div className="h-4 w-4 rounded-full bg-brand-blue/30" />
//           </div>
//         </div>
//         <p className="mb-2 text-[6px] text-ink-500 sm:text-[7px]">
//           Dashboards &gt; Main Dashboard
//         </p>
//         <div className="grid grid-cols-4 gap-1.5">
//           {stats.map((s) => (
//             <div key={s.label} className={`rounded ${s.bg} p-1.5`}>
//               <p className={`text-[6.5px] font-bold sm:text-[8px] ${s.fg}`}>{s.value}</p>
//               <p className="text-[5px] text-ink-700 sm:text-[6px]">{s.label}</p>
//             </div>
//           ))}
//         </div>
//         <p className="mb-1.5 mt-2.5 text-[7px] font-semibold text-ink-800 sm:text-[8px]">
//           Church Overview
//         </p>
//         <div className="grid grid-cols-4 gap-1.5">
//           {["New Members", "First Timers", "Follow Ups", "Events"].map((label) => (
//             <div key={label} className="rounded bg-white p-1.5 shadow-sm">
//               <p className="text-[6.5px] font-bold text-ink-800 sm:text-[8px]">1,000</p>
//               <p className="text-[5px] text-ink-500 sm:text-[6px]">{label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function DashboardMockup() {
//   return (
//     <div className="relative mx-auto w-full max-w-4xl">
//       {/* Laptop */}
//       <div className="relative rounded-t-2xl border-[6px] border-slate-800 bg-slate-800 shadow-2xl sm:rounded-t-3xl sm:border-[10px]">
//         <div className="aspect-[16/10] overflow-hidden rounded-t-lg bg-black sm:rounded-t-xl">
//           <DashboardScreen />
//         </div>
//       </div>
//       <div className="relative h-3 rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-500 sm:h-4">
//         <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-md bg-slate-600 sm:w-32" />
//       </div>

//       {/* Phone, overlapping bottom-left */}
//       <div className="absolute -bottom-10 left-2 hidden w-[22%] max-w-[170px] sm:block">
//         <div className="overflow-hidden rounded-[1.4rem] border-[6px] border-slate-900 bg-slate-900 shadow-xl">
//           <div className="aspect-[9/18.5] overflow-hidden bg-white">
//             <div className="bg-brand-gradient px-2 py-2">
//               <p className="text-[7px] font-semibold text-white">Demo Accra</p>
//             </div>
//             <div className="px-2 py-1.5">
//               <p className="text-[7px] font-semibold text-ink-800">Member List</p>
//               <div className="mt-1.5 flex flex-col gap-1.5">
//                 {["Yaw Boateng", "Yaa Ofori", "Stephanie Narh", "Rodger Rims"].map((name) => (
//                   <div key={name} className="flex items-center gap-1.5">
//                     <div className="h-3 w-3 rounded-full bg-slate-200" />
//                     <p className="text-[6px] text-ink-700">{name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
