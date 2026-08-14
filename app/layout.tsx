// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css" with { type: "css" };

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://sermfy.com"),

//   title: {
//     default: "Sermfy CMS — Church Management Made Simple",
//     template: "%s | Sermfy CMS",
//   },

//   description:
//     "Sermfy Church Management System (CMS) helps churches and ministries manage members, attendance, finances, communication, events, reports, and ministry operations from a single dashboard.",

//   keywords: [
//     "Sermfy",
//     "Sermfy CMS",
//     "Church Management System",
//     "Church Management Software",
//     "Church Administration Software",
//     "Church CRM",
//     "Church Membership Management",
//     "Church Attendance Software",
//     "Church Finance Software",
//     "Church Communication Software",
//     "Church Event Management",
//     "Ministry Management Software",
//     "Church Software Ghana",
//     "Church AI",
//     "Church Tech",
//     "Bulk SMS For churches",
//   ],

//   applicationName: "Sermfy CMS",

//   creator: "Sermfy",

//   publisher: "Sermfy",

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },

//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://sermfy.com",
//     siteName: "Sermfy CMS",

//     title: "Sermfy CMS — Church Management Made Simple",

//     description:
//       "Manage church members, attendance, finances, communication, events, and ministry operations from one dashboard.",

//     images: [
//       {
//         url: "/images/seo/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Sermfy CMS",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",

//     title: "Sermfy CMS — Church Management Made Simple",

//     description:
//       "Modern church management software for churches and ministries.",

//     images: ["/images/seo/og-image.png"],
//   },

//   icons: {
//     icon: [
//       {
//         url: "/favicon.ico",
//       },
//     ],

//     apple: [
//       {
//         url: "/apple-icon.png",
//       },
//     ],
//   },

//   category: "Technology",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={inter.variable}>
//       <body className="font-sans antialiased bg-white">
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sermfy.com"),

  title: {
    default: "Sermfy | Church Management Software",
    template: "%s | Sermfy",
  },

  description:
    "Sermfy is a modern church management platform that helps churches manage members, attendance, communication, finances, events, and ministry operations from one place.",

  applicationName: "Sermfy",

  creator: "Sermfy",

  publisher: "Sermfy",

  keywords: [
    "Sermfy",
    "Church management software",
    "Church management system",
    "Church CRM",
    "Church software",
    "Church membership management",
    "Church attendance software",
    "Church finance software",
    "Church communication software",
    "Church event management",
    "Ministry management software",
    "Church software Ghana",
  ],

  authors: [
    {
      name: "Sermfy",
    },
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://sermfy.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sermfy.com",
    siteName: "Sermfy",

    title: "Sermfy | Church Management Software",

    description:
      "Manage members, attendance, finances, communication, and ministry operations with Sermfy.",

    images: [
      {
        url: "/images/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sermfy Church Management Software",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sermfy | Church Management Software",

    description:
      "Modern church management software for churches and ministries.",

    images: ["/images/seo/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
