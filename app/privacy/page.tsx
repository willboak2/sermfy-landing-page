import type { Metadata } from "next"
import { LegalPage, type LegalSection, type LegalBlock } from "@/components/marketing/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | Sermfy",
  description:
    "How Sermfy collects, uses, stores, and protects personal information in compliance with the Data Protection Act, 2012 (Act 843) of Ghana.",
}

const intro: LegalBlock[] = [
  {
    type: "paragraph",
    text: "This Privacy Policy describes how Sermfy collects, uses, stores, and protects personal information in compliance with the Data Protection Act, 2012 (Act 843) of the Republic of Ghana.",
  },
]

const sections: LegalSection[] = [
  {
    heading: "Section 1 – What Do We Do With Your Information?",
    blocks: [
      {
        type: "paragraph",
        text: "When you sign up for Sermfy, as part of the account creation, subscription, payment, and church data management process, we collect personal information such as your name, email address, phone number, organisation name, address, and other details you voluntarily provide. This information enables us to provide and improve our services.",
      },
      {
        type: "paragraph",
        text: "When you browse or use the Sermfy platform, we may automatically receive your computer's Internet Protocol (IP) address and related technical information to help us:",
      },
      {
        type: "list",
        items: ["Secure accounts against unauthorised access", "Monitor system performance", "Improve user experience"],
      },
      {
        type: "paragraph",
        text: "Email communication: With your permission, we may send emails to the account owner or administrator regarding platform updates, new features, or service-related notices. We do not send marketing emails to church members.",
      },
    ],
  },
  {
    heading: "Section 2 – Consent",
    blocks: [
      { type: "subheading", text: "How do you get my consent?" },
      { type: "paragraph", text: "When you provide personal information to:" },
      {
        type: "list",
        items: ["Create an account", "Subscribe to a service", "Process payments", "Upload or manage church or member data"],
      },
      {
        type: "paragraph",
        text: "You consent to our collection and use of that information for the specific purpose for which it was provided.",
      },
      {
        type: "paragraph",
        text: "If we request your personal information for a secondary purpose, such as marketing, we will either ask for your express consent or give you the opportunity to decline.",
      },
      {
        type: "paragraph",
        text: "Some Sermfy features allow content to be shared within a general feed or dashboard accessible to authorised users of a church or organisation. Such content is not sent directly to members unless initiated by the church.",
      },
    ],
  },
  {
    heading: "Section 3 – Consent – Your Church Members' Data",
    blocks: [
      { type: "subheading", text: "We do not own your church data." },
      {
        type: "paragraph",
        text: "Sermfy acts as a data processor, while the church or organisation acts as the data controller.",
      },
      {
        type: "paragraph",
        text: "We do not contact or message church members without the explicit action, request, or acknowledgement of the church or authorised account holder.",
      },
      {
        type: "paragraph",
        text: "When a church captures member data into Sermfy (including personal information used for communication, attendance, or donations), the church confirms that it has obtained the necessary consent and authority to do so. Sermfy stores and protects this data on behalf of the church.",
      },
      {
        type: "paragraph",
        text: "When a user joins, follows, or registers with a church through a Sermfy platform, certain personal data such as name, phone number, email address, profile image, and gender may be shared with that church to enable communication and service delivery.",
      },
      {
        type: "paragraph",
        text: "If a user unfollows or disengages from a church, their data is removed from that church's access.",
      },
    ],
  },
  {
    heading: "Section 4 – How Do I Withdraw My Consent?",
    blocks: [
      {
        type: "paragraph",
        text: "If after you opt in, you change your mind, you may withdraw your consent for:",
      },
      { type: "list", items: ["Continued communication", "Continued collection or processing of your personal data"] },
      { type: "paragraph", text: "You may do so at any time by contacting us at:" },
      { type: "paragraph", text: "Support: support@sermfy.com" },
    ],
  },
  {
    heading: "Section 5 – Disclosure",
    blocks: [
      {
        type: "paragraph",
        text: "Since Sermfy does not own church data, we do not disclose church member data on behalf of churches. Churches are responsible for responding to lawful data requests relating to their members.",
      },
      {
        type: "paragraph",
        text: "However, we may disclose account owner information where required to do so by law, regulation, or a valid legal process.",
      },
    ],
  },
  {
    heading: "Section 6 – Hosting & Data Storage",
    blocks: [
      {
        type: "paragraph",
        text: "Sermfy is hosted on secure cloud infrastructure provided by reputable third-party hosting providers.",
      },
      {
        type: "paragraph",
        text: "Your data is stored through Sermfy's databases and application systems and is protected by appropriate security measures, including firewalls and access controls.",
      },
      { type: "subheading", text: "Payments" },
      {
        type: "paragraph",
        text: "If you choose a direct payment gateway to complete a transaction, Sermfy does not store your card or mobile money details. Payment information is encrypted and processed by third-party payment providers applicable to your location.",
      },
      {
        type: "paragraph",
        text: "Transaction references, dates, and amounts may be stored for record-keeping and reporting purposes.",
      },
      {
        type: "paragraph",
        text: "All payment processors used by Sermfy adhere to recognised security standards, including PCI-DSS requirements.",
      },
    ],
  },
  {
    heading: "Section 7 – Third-Party Services",
    blocks: [
      {
        type: "paragraph",
        text: "Third-party service providers used by Sermfy only collect, use, and disclose your information to the extent necessary to perform their services.",
      },
      {
        type: "paragraph",
        text: "These providers have their own privacy policies, and we encourage you to review them.",
      },
      {
        type: "paragraph",
        text: "Once you leave the Sermfy website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy.",
      },
    ],
  },
  {
    heading: "Section 8 – Security",
    blocks: [
      {
        type: "paragraph",
        text: "To protect personal information, we take reasonable precautions and follow industry best practices to prevent loss, misuse, unauthorised access, disclosure, alteration, or destruction of data.",
      },
      {
        type: "paragraph",
        text: "Data transmission is encrypted using secure communication technologies such as SSL/TLS.",
      },
    ],
  },
  {
    heading: "Section 9 – Cookies",
    blocks: [
      {
        type: "paragraph",
        text: "Sermfy may use cookies or similar technologies to support system functionality, security, and analytics. You may disable cookies through your browser settings; however, some features may not function properly.",
      },
    ],
  },
  {
    heading: "Section 10 – Age of Consent",
    blocks: [
      { type: "paragraph", text: "By using Sermfy, you confirm that:" },
      {
        type: "list",
        items: [
          "You are at least the age of majority in your jurisdiction, or",
          "You are authorised to act on behalf of a church or organisation, and",
          "You have obtained appropriate consent for any minor whose data is processed through the platform",
        ],
      },
    ],
  },
  {
    heading: "Section 11 – Changes to This Privacy Policy",
    blocks: [
      {
        type: "paragraph",
        text: "We reserve the right to modify this Privacy Policy at any time. Changes take effect immediately upon posting on the website.",
      },
      {
        type: "paragraph",
        text: "If our company or product is acquired or merged with another entity, your data will remain protected under this Privacy Policy or an equivalent standard.",
      },
    ],
  },
  {
    heading: "Section 12 – Data Protection & Regulatory Compliance",
    blocks: [
      {
        type: "paragraph",
        text: "Sermfy complies with the Data Protection Act, 2012 (Act 843) and, where applicable, international data protection principles.",
      },
      {
        type: "paragraph",
        text: "Data subjects have the right to access, correct, object to processing, or request deletion of their personal data, and to lodge complaints with the Ghana Data Protection Commission.",
      },
    ],
  },
  {
    heading: "Questions and Contact Information",
    blocks: [
      {
        type: "paragraph",
        text: "If you would like to access, correct, amend, or delete any personal information we hold, or if you wish to register a complaint, contact:",
      },
      { type: "subheading", text: "Sermfy" },
      {
        type: "list",
        items: ["Support: support@sermfy.com", "Address: Takoradi, West Fijai"],
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      bannerTitle="Privacy Policy"
      documentTitle="Privacy Policy"
      intro={intro}
      sections={sections}
      pdfHref="/legal/sermfy-privacy-policy.pdf"
      pdfFileName="Sermfy Privacy Policy.pdf"
    />
  )
}
