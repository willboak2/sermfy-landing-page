import type { Metadata } from "next"
import { LegalPage, type LegalSection, type LegalBlock } from "@/components/marketing/legal-page"

export const metadata: Metadata = {
  title: "Sermfy Remote Privacy Policy",
  description:
    "What the Sermfy Remote phone app uses and where it goes: only to the computer you pair it with, on your own network.",
}

const intro: LegalBlock[] = [
  {
    type: "paragraph",
    text: "Sermfy Remote is a phone app with three tools: Stream Remote (controls Sermfy Stream), Presenter Remote (controls Sermfy Presenter) and Lyrics Sender (sends lyrics, slides and announcements to the Sermfy Presenter operator). This policy explains what the app uses and where it goes. Sermfy's general Privacy Policy at www.sermfy.com/privacy applies to everything else Sermfy offers.",
  },
  {
    type: "paragraph",
    text: "In short: the app talks only to the computer you pair it with, on your own network. Nothing is sent to Sermfy's servers or to anyone else.",
  },
]

const sections: LegalSection[] = [
  {
    heading: "What the app uses",
    blocks: [
      {
        type: "list",
        items: [
          "The camera, only to read the pairing code the computer shows. The app does not take, keep or send pictures.",
          "The phone's model name, sent to the computer once when you pair, so the operator can see which phone it is.",
          "The commands you tap (for example Take, Next or Black) and the text you send with the Lyrics Sender.",
          "A pairing secret for each computer, kept in the phone's secure storage, so the phone and the computer recognise each other.",
          "Your drafts and the list of what you sent with the Lyrics Sender, kept on the phone so you can update them.",
        ],
      },
      {
        type: "paragraph",
        text: "If the operator allows it, the app can show the live picture and play the live sound from Sermfy Stream. These come from the computer and are not kept on the phone.",
      },
      {
        type: "paragraph",
        text: "The app does not use the microphone, your location, your contacts, your photos or any account. It has no advertising and no analytics.",
      },
    ],
  },
  {
    heading: "Where it goes",
    blocks: [
      {
        type: "paragraph",
        text: "Only to the computer running Sermfy Stream or Sermfy Presenter that you paired the phone with, over your Wi-Fi. Sermfy does not receive any of it, and it is not shared with or sold to anyone. Each tool pairs on its own: pairing one never gives another tool access to a computer.",
      },
      {
        type: "paragraph",
        text: "What happens on the computer (for example what is shown on screen, streamed or recorded) is up to the church or organisation using it.",
      },
    ],
  },
  {
    heading: "Keeping and deleting",
    blocks: [
      {
        type: "paragraph",
        text: "In each tool, Settings then Forget this PC removes that computer's pairing and, for the Lyrics Sender, what was kept for it. The operator can also remove the phone on the computer. Uninstalling the app removes everything it kept.",
      },
    ],
  },
  {
    heading: "Children",
    blocks: [
      {
        type: "paragraph",
        text: "Sermfy Remote is made for church and ministry media teams. It is not designed for children.",
      },
    ],
  },
  {
    heading: "Changes and contact",
    blocks: [
      {
        type: "paragraph",
        text: "If this policy changes, the new version is posted on this page. Questions: support@mail.sermfy.com.",
      },
      { type: "subheading", text: "Sermfy" },
      {
        type: "list",
        items: ["Support: support@mail.sermfy.com", "Address: Takoradi, West Fijai"],
      },
    ],
  },
]

export default function SermfyRemotePrivacyPage() {
  return (
    <LegalPage
      bannerTitle="Sermfy Remote Privacy"
      documentTitle="Sermfy Remote Privacy Policy"
      intro={intro}
      sections={sections}
    />
  )
}
