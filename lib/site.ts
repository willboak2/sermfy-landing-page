/**
 * Everything the website says about Sermfy lives here, so it can be checked in one place.
 *
 * Rules (from the sermfy.com brief):
 * - Features are only what the software does today (checked in each product's code, 2026-11-09).
 * - Links are only addresses that were checked and answer (2026-11-10).
 * - Screenshots are only real captures. A screen whose `src` is null is not captured yet: the site
 *   shows the product mark in its place, and docs/website-assets.md lists it as missing.
 */

export const LINKS = {
  cmsSignIn: "https://cms.sermfy.com/auth/login",
  cmsSignUp: "https://cms.sermfy.com/auth/signup",
  studioStream: "https://studio.sermfy.com/stream",
  studioPresenter: "https://studio.sermfy.com/presenter",
  downloads: "https://studio.sermfy.com/downloads",
  go: "https://go.sermfy.com",
  creator: "https://creator.sermfy.com",
  members: "https://members.sermfy.com",
  /** Android app files, in the public `downloads` bucket next to the Stream installers. */
  membersAndroid: "https://members.sermfy.com/download/android",
  goAndroid: "https://br-dry-term-b1sgkcop.storage.c-5.eu-central-1.aws.neon.tech/downloads/go/latest/Sermfy-Go.apk",
  help: "https://help.sermfy.com",
  email: "mailto:support@sermfy.com",
} as const;

export const SOCIAL = [
  { label: "YouTube", href: "https://www.youtube.com/@sermfy" },
  { label: "Facebook", href: "https://www.facebook.com/sermfy" },
  { label: "Instagram", href: "https://www.instagram.com/sermfy" },
] as const;

export type Screen = {
  /** Path under /public, or null while the real screenshot hasn't been captured. */
  src: string | null;
  alt: string;
  width: number;
  height: number;
};

export const SCREENS = {
  cmsDashboard: { src: null, alt: "Sermfy CMS dashboard", width: 1440, height: 900 },
  cmsMembers: { src: null, alt: "Sermfy CMS members list", width: 1440, height: 900 },
  cmsReports: { src: null, alt: "Sermfy CMS reports", width: 1440, height: 900 },
  cmsAttendance: { src: null, alt: "Sermfy CMS attendance", width: 1440, height: 900 },
  streamProduction: { src: null, alt: "Sermfy Stream production window", width: 1440, height: 900 },
  streamMultiview: { src: null, alt: "Sermfy Stream multiview", width: 1440, height: 900 },
  presenterScripture: {
    src: "/screens/presenter-scripture.webp",
    alt: "Sermfy Presenter with Genesis 1:1 on the live output",
    width: 1400,
    height: 900,
  },
  presenterLyrics: {
    src: "/screens/presenter-lyrics.webp",
    alt: "Sermfy Presenter song library",
    width: 1400,
    height: 900,
  },
  presenterSlides: {
    src: "/screens/presenter-slides.webp",
    alt: "Sermfy Presenter slides",
    width: 1400,
    height: 900,
  },
  presenterOutput: {
    src: "/screens/presenter-output.webp",
    alt: "Scripture on the congregation screen",
    width: 321,
    height: 179,
  },
  goWebHome: {
    src: "/screens/go-web-home.webp",
    alt: "Sermfy Go home on the web",
    width: 2560,
    height: 1600,
  },
  goPhoneShow: {
    src: "/screens/go-phone-show.webp",
    alt: "A Breakthrough Family Ministries International podcast on Sermfy Go",
    width: 1170,
    height: 2532,
  },
  creatorStudio: { src: null, alt: "Sermfy Creator Studio", width: 1440, height: 900 },
  memberPortal: { src: null, alt: "Sermfy Members app", width: 1170, height: 2532 },
  adminApp: { src: null, alt: "Sermfy Admin app", width: 1170, height: 2532 },
} satisfies Record<string, Screen>;

export type ProductSlug = "cms" | "stream" | "presenter" | "go";

export type Product = {
  slug: ProductSlug;
  name: string;
  /** One line for menus and the product grid. */
  summary: string;
  headline: string;
  intro: string;
  mark: { src: string; width: number; height: number; onDark?: string };
  /** Accent colour taken from the product itself. */
  accent: string;
  theme: "light" | "dark";
  /** Three to five features for the homepage. */
  highlights: string[];
  /** The full list for the product page, in groups. */
  features: { title: string; items: string[] }[];
  hero: keyof typeof SCREENS;
  gallery: (keyof typeof SCREENS)[];
  frame: "browser" | "monitor" | "laptop";
  platforms: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export const PRODUCTS: Product[] = [
  {
    slug: "cms",
    name: "Sermfy CMS",
    summary: "Church management for members, attendance, finance and more.",
    headline: "Run the whole church from one place.",
    intro:
      "Members, attendance, giving, groups, follow-up and reports, for one church or many branches.",
    mark: { src: "/brand/sermfy-mark.png", width: 238, height: 240, onDark: "/brand/sermfy-mark-white.png" },
    accent: "#3687f3",
    theme: "light",
    highlights: [
      "Members, families, visitors and children",
      "Attendance with check-in, QR codes and kiosk mode",
      "Tithes, offerings, dues, expenses and online giving",
      "SMS messages, announcements and follow-up",
      "Reports for every branch",
    ],
    features: [
      {
        title: "People",
        items: [
          "Members, families and visitors",
          "Children ministry with classes and teachers",
          "Church leadership and personal titles",
          "Baptism certificates and membership cards",
        ],
      },
      {
        title: "Attendance and events",
        items: [
          "Check-in, headcount and attendance history",
          "QR code check-in and kiosk mode",
          "Event calendar, services and life events",
        ],
      },
      {
        title: "Finance",
        items: [
          "Tithes, offerings and group offerings",
          "Dues, funds, expenses and salaries",
          "Online giving",
        ],
      },
      {
        title: "Communication and care",
        items: [
          "SMS broadcasts with your own sender ID",
          "Announcements and automatic messages",
          "Follow-up for absent members, with a follow-up team",
        ],
      },
      {
        title: "Groups",
        items: ["Group meetings and attendance", "Group contributions and expenses"],
      },
      {
        title: "Reports and branches",
        items: [
          "Attendance, finance and member reports",
          "Branch reports and report templates",
          "Many branches under one church, with roles for each person",
        ],
      },
    ],
    hero: "cmsDashboard",
    gallery: ["cmsMembers", "cmsAttendance", "cmsReports"],
    frame: "browser",
    platforms: "Web, on any computer or phone",
    primary: { label: "Sign in", href: LINKS.cmsSignIn },
    secondary: { label: "Create an account", href: LINKS.cmsSignUp },
  },
  {
    slug: "stream",
    name: "Sermfy Stream",
    summary: "Live video production and streaming for church services.",
    headline: "Produce the service. Stream it everywhere.",
    intro:
      "Switch cameras, add titles, mix sound and go live on several platforms at once, from one computer.",
    mark: { src: "/brand/stream-mark.png", width: 341, height: 343 },
    accent: "#a66dfb",
    theme: "dark",
    highlights: [
      "Cameras, capture cards, screens, media and NDI",
      "Preview and Program with transitions",
      "Titles and lower thirds from templates",
      "Stream to several platforms at once",
      "Record the Program and each camera",
    ],
    features: [
      {
        title: "Inputs",
        items: [
          "Cameras and capture cards",
          "Screen and window capture",
          "Video and picture files",
          "NDI in and out",
        ],
      },
      {
        title: "Production",
        items: [
          "Preview and Program with transitions",
          "Layers, titles and lower thirds with templates",
          "Colour correction, LUTs and chroma key",
          "Multiview and a second screen output",
        ],
      },
      {
        title: "Going live",
        items: [
          "Stream to several platforms at the same time",
          "Sign in to YouTube and Facebook from the app",
          "Record the Program and each camera",
        ],
      },
      {
        title: "Sound and control",
        items: [
          "Audio mixer",
          "Keyboard shortcuts and gamepad",
          "Phone remote and Bitfocus Companion",
        ],
      },
    ],
    hero: "streamProduction",
    gallery: ["streamMultiview"],
    frame: "monitor",
    platforms: "Windows and Mac",
    primary: { label: "Download", href: LINKS.downloads },
    secondary: { label: "Plans and accounts", href: LINKS.studioStream },
  },
  {
    slug: "presenter",
    name: "Sermfy Presenter",
    summary: "Lyrics, scripture and slides on the church screen.",
    headline: "Scripture and songs on screen, without the scramble.",
    intro:
      "Plan the service order, find any verse in seconds and send lyrics, slides and media to the congregation screen.",
    mark: {
      src: "/brand/presenter-mark.png",
      width: 316,
      height: 260,
      onDark: "/brand/presenter-mark-white.png",
    },
    accent: "#00aeff",
    theme: "light",
    highlights: [
      "Bible lookup that works without internet",
      "Song library with sections and CCLI details",
      "Service order for the whole service",
      "Backgrounds, media and lower thirds",
      "Congregation screen output and NDI",
    ],
    features: [
      {
        title: "Scripture",
        items: [
          "Find a verse by reference or by words",
          "Many translations, including Twi and Hausa",
          "Works without internet",
        ],
      },
      {
        title: "Songs",
        items: ["Song library with verses, choruses and bridges", "CCLI details for each song", "Import songs"],
      },
      {
        title: "The service",
        items: ["Service order with times", "Slides, media and timers", "Preview before anything goes live"],
      },
      {
        title: "Output",
        items: ["Congregation screen", "Backgrounds and lower thirds", "NDI out to your video system"],
      },
    ],
    hero: "presenterScripture",
    gallery: ["presenterLyrics", "presenterSlides"],
    frame: "laptop",
    platforms: "Windows",
    primary: { label: "Download", href: LINKS.downloads },
    secondary: { label: "Plans and accounts", href: LINKS.studioPresenter },
  },
  {
    slug: "go",
    name: "Sermfy Go",
    summary: "Podcasts from churches and ministries.",
    headline: "Sermons and podcasts, wherever you are.",
    intro:
      "Listen to podcasts from churches and ministries, follow the shows you love, and publish your own with Creator Studio.",
    mark: { src: "/brand/go-mark-light.png", width: 529, height: 406, onDark: "/brand/go-mark.png" },
    accent: "#c0fb01",
    theme: "dark",
    highlights: [
      "Podcasts from churches and ministries",
      "Follow shows, like, save and comment",
      "Recommendations made for each listener",
      "Share any show or episode with a link",
      "Creator Studio to publish your own podcast",
    ],
    features: [
      {
        title: "Listening",
        items: [
          "Shows and episodes from churches and ministries",
          "Playlists, history and playback speed",
          "Download episodes to listen offline in the Android app",
          "Recommendations made for each listener",
        ],
      },
      {
        title: "Community",
        items: [
          "Follow shows and people",
          "Like, save and comment",
          "Public profiles and share links",
          "Notifications for new episodes",
        ],
      },
      {
        title: "Creator Studio",
        items: [
          "Upload shows and episodes",
          "Every episode is reviewed before it goes public",
          "Reply to comments and see your listens",
        ],
      },
    ],
    hero: "goWebHome",
    gallery: ["goPhoneShow", "creatorStudio"],
    frame: "browser",
    platforms: "Web, on any computer or phone",
    primary: { label: "Open Sermfy Go", href: LINKS.go },
    secondary: { label: "Creator Studio", href: LINKS.creator },
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export type AppStatus = "available" | "install" | "coming";

export type App = {
  name: string;
  /** `full`: a square app icon that fills its tile; otherwise a mark centred on `tile`. */
  icon: { src: string; width: number; height: number; tile?: string; full?: boolean };
  description: string;
  platforms: string;
  status: AppStatus;
  statusLabel: string;
  /** Anchor on /apps, e.g. /apps#sermfy-go (the Go website's Get the app links there). */
  id?: string;
  action?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** A line under the buttons, e.g. version and size. */
  note?: string;
  /** Shown when the web app can be added to a home screen. */
  installable?: boolean;
  screen?: keyof typeof SCREENS;
};

export const APP_GROUPS: { id: string; title: string; apps: App[] }[] = [
  {
    id: "web",
    title: "Web apps",
    apps: [
      {
        name: "Sermfy CMS",
        icon: { src: "/brand/sermfy-mark.png", width: 238, height: 240 },
        description: "Church management in the browser, for church staff.",
        platforms: "Any browser",
        status: "available",
        statusLabel: "Available",
        action: { label: "Sign in", href: LINKS.cmsSignIn },
        installable: true,
        screen: "cmsDashboard",
      },
      {
        name: "Sermfy Go",
        icon: { src: "/brand/go-icon.png", width: 256, height: 256, full: true },
        description: "Listen to podcasts from churches and ministries.",
        platforms: "Any browser",
        status: "available",
        statusLabel: "Available",
        action: { label: "Open", href: LINKS.go },
        installable: true,
        screen: "goWebHome",
      },
      {
        name: "Sermfy Creator Studio",
        icon: { src: "/brand/go-mark.png", width: 529, height: 406, tile: "#044a1a" },
        description: "Publish shows and episodes to Sermfy Go.",
        platforms: "Any browser",
        status: "available",
        statusLabel: "Available",
        action: { label: "Open", href: LINKS.creator },
        screen: "creatorStudio",
      },
    ],
  },
  {
    id: "mobile",
    title: "Phone apps",
    apps: [
      {
        name: "Sermfy Admin",
        icon: { src: "/brand/admin-icon.png", width: 256, height: 256, full: true },
        description: "Sermfy CMS on your phone, for church staff.",
        platforms: "Android and iPhone",
        status: "coming",
        statusLabel: "Not in app stores yet",
        screen: "adminApp",
      },
      {
        id: "sermfy-members",
        name: "Sermfy Members",
        icon: { src: "/brand/member-icon.png", width: 256, height: 256, full: true },
        description: "The app for church members. Sign in with your church code.",
        platforms: "Android. iPhone coming soon.",
        status: "available",
        statusLabel: "Android download",
        action: { label: "Download for Android", href: LINKS.membersAndroid },
        note: "Version 0.4.2, about 75 MB",
        screen: "memberPortal",
      },
      {
        id: "sermfy-go",
        name: "Sermfy Go",
        icon: { src: "/brand/go-icon.png", width: 256, height: 256, full: true },
        description: "Podcasts from churches and ministries, with downloads for listening offline.",
        platforms: "Android. On iPhone, add the web app to your home screen.",
        status: "available",
        statusLabel: "Android download",
        action: { label: "Download for Android", href: LINKS.goAndroid },
        secondary: { label: "Open on the web", href: LINKS.go },
        note: "Version 0.2.10, about 112 MB",
        installable: true,
        screen: "goPhoneShow",
      },
    ],
  },
  {
    id: "desktop",
    title: "Desktop apps",
    apps: [
      {
        name: "Sermfy Stream",
        icon: { src: "/brand/stream-mark.png", width: 341, height: 343, tile: "#111317" },
        description: "Live video production and streaming.",
        platforms: "Windows and Mac",
        status: "available",
        statusLabel: "Available",
        action: { label: "Download", href: LINKS.downloads },
        screen: "streamProduction",
      },
      {
        name: "Sermfy Presenter",
        icon: { src: "/brand/presenter-mark.png", width: 316, height: 260 },
        description: "Lyrics, scripture and slides for the church screen.",
        platforms: "Windows",
        status: "coming",
        statusLabel: "Download coming soon",
        action: { label: "See Presenter", href: "/products/presenter" },
        screen: "presenterScripture",
      },
    ],
  },
];

/**
 * Churches shown under "Churches using Sermfy CMS". Logos are each church's own file.
 * Nothing shows on the live site until `LOGOS_APPROVED` is true: the owner must confirm each
 * church agreed to have its logo shown, and supply the files (see docs/website-assets.md).
 */
export const LOGOS_APPROVED = false;

export const CHURCHES: { name: string; logo: string | null; width: number; height: number }[] = [
  { name: "Breakthrough Family Ministries International", logo: null, width: 770, height: 770 },
  { name: "Altar of Fire", logo: null, width: 1280, height: 1280 },
  { name: "Christ Revival Nation", logo: null, width: 1080, height: 1080 },
  { name: "Grace Community Baptist Church", logo: null, width: 0, height: 0 },
];
