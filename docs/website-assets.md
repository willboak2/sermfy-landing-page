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
| `public/screens/go-phone-show.webp` | BFMI show on a phone | live site, signed out |

## Screenshots still missing

| Key in `SCREENS` | Needed | Why not captured |
|---|---|---|
| `cmsDashboard`, `cmsMembers`, `cmsAttendance`, `cmsReports` | CMS dashboard, members, attendance, reports | Dev data is test junk ("Throwaway Deletetest"), shows a "grace period ended" banner and Ask Sera (not public). Needs a clean demo church. |
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
| Sermfy Go 0.2.9 | `go/latest/Sermfy-Go.apk` | `go/0.2.9/Sermfy-Go-0.2.9.apk` |

When a new build goes up, update the version and size in `lib/site.ts` (and in sermfy-member's
`lib/app-download.ts`).

## Content choices to confirm

- Sermfy green is `#19AB5D`, taken from the green triangle in the logo (no green existed in code).
- Go screenshots use Demo Church and BFMI content. Apostle Joshua Selman / Gospel Feed shows were
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
