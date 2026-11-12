# sermfy.com: assets and open items

Last updated 2026-11-10. Everything the site says is in `lib/site.ts`. A screen with `src: null`
shows only the product mark until a real screenshot is added.

## Screenshots in place (real captures, 2026-11-10)

| File | What | Source |
|---|---|---|
| `public/screens/presenter-scripture.webp` | Presenter, Genesis 1:1 live | Presenter 0.1.3 build on this PC, "Sunday Worship Service" |
| `public/screens/presenter-lyrics.webp` | Presenter song library | same |
| `public/screens/presenter-slides.webp` | Presenter slides tab | same |
| `public/screens/presenter-output.webp` | Live output crop (congregation screen) | same, small (321×179) |
| `public/screens/go-web-home.webp` | go.sermfy.com home, computer | live site, signed out |
| `public/screens/go-phone-home.webp` | Go home on a phone (shows from several ministries) | live site, signed out, 2026-11-11 |
| `public/screens/cms-*.webp` (dashboard, members, attendance, finance, follow-up) | Sermfy CMS | local CMS on DEV, "Sermfy Demo Church" (made-up people, login demo.admin@sermfy.test), 2026-11-10 |

## Screenshots still missing

| Key in `SCREENS` | Needed | Why not captured |
|---|---|---|
| `streamProduction`, `streamMultiview` | Stream during a real production | No cameras on this PC; best captured on the church PC during a service. |
| `creatorStudio` | Creator Studio | Needs a creator login. |
| `memberPortal`, `adminApp` | Member and Admin apps on a phone | Not captured yet (emulator). |

The Presenter shots are 1400 px wide (1× scale). A 2× recapture would look sharper on high
resolution screens.

## Church logos

Section "Churches using Sermfy CMS" is hidden on the live site until `LOGOS_APPROVED = true`.

- Permission from each church to show its logo: not recorded.
- Original files: none in this repo yet. The CMS has uploads for BFMI, Altar of Fire and Christ
  Revival Nation (Altar of Fire's has a grey frame baked in). Grace Community Baptist Church has no
  logo at all.

## Android app files

Hosted in the public `downloads` bucket (Neon Object Storage, prod branch, same place as the Stream
installers). `latest/` is overwritten on each release; each version also keeps its own copy.

| App | Latest | Version copy |
|---|---|---|
| Sermfy Members 0.4.2 | `members/latest/Sermfy-Members.apk` | `members/0.4.2/Sermfy-Members-0.4.2.apk` |
| Sermfy Go 0.2.10 | `go/latest/Sermfy-Go.apk` | `go/0.2.10/Sermfy-Go-0.2.10.apk` (0.2.9 kept too) |
| Sermfy Admin 0.2.0 | `admin/latest/Sermfy-Admin.apk` | `admin/0.2.0/Sermfy-Admin-0.2.0.apk` |
| Sermfy Remote 1.0.0 | `remote/latest/Sermfy-Remote.apk` | `remote/1.0.0/Sermfy-Remote-1.0.0.apk` |

## Presenter download (waiting for owner)

Presenter 0.1.8 installer is built (`Desktop/Sermfy Presenter Setup 0.1.8.exe`, about 243 MB) but
not uploaded to `presenter/latest/Sermfy-Presenter-Setup.exe`. Until it is, the site keeps
"Download coming soon". After the upload: switch Presenter's `primary` and its Apps entry to
`LINKS.presenterWindows` (see the comments in `lib/site.ts`), and add `presenter` to Studio's
`DOWNLOADS_PRODUCTS` so studio.sermfy.com/download/presenter works too.

When a new build goes up, update the version and size in `lib/site.ts` (and in sermfy-member's
`lib/app-download.ts`).

## Content choices to confirm

- Sermfy green is `#19AB5D`, taken from the green triangle in the logo (no green existed in code).
- Go phone screenshot (2026-11-11) is the Go home with shows from several ministries, incl. Gospel Feed (owner did not want one preacher only). The computer screenshot uses Demo Church and BFMI content; Selman / Gospel Feed shows were
  kept off, since they are another ministry's content.
- Presenter: AI Assist and speech to text are not advertised (AI Assist is off screen for a rebuild).
- Go and Members: Android downloads are offered as files from the downloads bucket (not Google Play).
- Get Started goes to the product list on the homepage.

## Problems found on other sites (not fixed here)

- go.sermfy.com "Get the app" linked to a Google Play page that returns 404. Fixed on CMS branch
  `fix/go-get-app-link`: it now goes to www.sermfy.com/apps#sermfy-go, so deploy it with or after
  this site.
- presenter.sermfy.com: download button points to a GitHub release that returns 404 (from the
  2026-11-09 inventory).
- members.sermfy.com: now a download page for the Android app (sermfy-member branch
  `feature/app-download-landing`), title fixed.
- stream.sermfy.com does not exist; the site links to studio.sermfy.com instead.
