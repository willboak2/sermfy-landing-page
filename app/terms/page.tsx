import type { Metadata } from "next"
import { LegalPage, type LegalSection, type LegalBlock } from "@/components/marketing/legal-page"

export const metadata: Metadata = {
  title: "Terms & Conditions | Sermfy",
  description: "The terms and conditions governing your access to and use of the Sermfy platform.",
}

const intro: LegalBlock[] = [
  { type: "paragraph", text: "Last Updated: 25th August 2026" },
  {
    type: "paragraph",
    text: 'These Terms & Conditions ("Terms") govern your access to and use of Sermfy ("Sermfy," "Company," "we," "us," or "our"), a registered software company that develops and provides digital solutions for churches, ministries, faith-based organisations, and other institutions.',
  },
  {
    type: "paragraph",
    text: "By accessing or using Sermfy, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the platform.",
  },
]

const sections: LegalSection[] = [
  {
    heading: "1. About Sermfy",
    blocks: [
      {
        type: "paragraph",
        text: "Sermfy is a software company that develops and operates digital products and services designed for churches, ministries, and faith-based organisations, including, but not limited to:",
      },
      { type: "list", items: ["Sermfy CMS (Church Management System)", "Sermfy Stream", "Eventry (Event Management and Ticketing)"] },
      {
        type: "paragraph",
        text: "Sermfy provides software solutions that help organisations manage members, events, communication, attendance, finances, and other administrative activities.",
      },
    ],
  },
  {
    heading: "2. Eligibility",
    blocks: [
      { type: "paragraph", text: "By using Sermfy, you confirm that:" },
      {
        type: "list",
        items: [
          "You are at least 18 years old, or",
          "You are authorised to act on behalf of a church, ministry, or organisation, and",
          "All information you provide is accurate, complete, and lawful",
        ],
      },
    ],
  },
  {
    heading: "3. Account Registration",
    blocks: [
      { type: "paragraph", text: "By creating an account, you agree that:" },
      {
        type: "list",
        items: [
          "You are responsible for maintaining the confidentiality of your login credentials",
          "You are responsible for all activities performed under your account",
          "Information submitted during registration must be accurate and up to date",
        ],
      },
      {
        type: "paragraph",
        text: "Sermfy reserves the right to suspend, restrict, or terminate accounts that provide false information or violate these Terms.",
      },
    ],
  },
  {
    heading: "4. Use of the Platform",
    blocks: [
      { type: "paragraph", text: "You agree to use Sermfy only for lawful purposes, including:" },
      {
        type: "list",
        items: [
          "Managing church or organisational operations",
          "Communicating with members",
          "Managing events, attendance, finances, and administrative records",
        ],
      },
      { type: "paragraph", text: "You must not:" },
      {
        type: "list",
        items: [
          "Use Sermfy for fraudulent, abusive, or unlawful activities",
          "Upload or distribute content that violates any applicable law or third-party rights",
          "Attempt to gain unauthorised access to the platform, servers, or databases",
          "Use Sermfy to send spam or unsolicited communications",
          "Interfere with the operation or security of the platform",
        ],
      },
    ],
  },
  {
    heading: "5. Data Ownership and Responsibilities",
    blocks: [
      {
        type: "paragraph",
        text: "Churches, ministries, and organisations retain full ownership of all data uploaded to the platform.",
      },
      {
        type: "paragraph",
        text: "Sermfy acts as a data processor and technology provider and does not claim ownership of customer data.",
      },
      { type: "paragraph", text: "You are responsible for:" },
      {
        type: "list",
        items: [
          "Ensuring that you have the legal authority to collect and upload personal information",
          "Obtaining all required consents from members and users",
          "Complying with all applicable data protection and privacy laws, including the Data Protection Act, 2012 (Act 843) of the Republic of Ghana",
        ],
      },
      {
        type: "paragraph",
        text: "Sermfy does not independently contact members or process personal data without instructions from the account holder.",
      },
    ],
  },
  {
    heading: "6. Payments, Subscriptions, and Fees",
    blocks: [
      { type: "paragraph", text: "Certain features and services may require payment." },
      { type: "paragraph", text: "By subscribing to a paid service, you agree that:" },
      {
        type: "list",
        items: [
          "Subscription fees and billing cycles will be displayed within the platform",
          "Payments will be processed through authorised third-party payment providers",
          "Sermfy does not store debit card, credit card, or mobile money credentials",
        ],
      },
      { type: "paragraph", text: "Failure to pay applicable fees may result in:" },
      {
        type: "list",
        items: ["Suspension of premium features", "Downgrading of services", "Termination of access after reasonable notice"],
      },
    ],
  },
  {
    heading: "7. Third-Party Services",
    blocks: [
      { type: "paragraph", text: "Sermfy may integrate with third-party services, including:" },
      { type: "list", items: ["Payment gateways", "SMS providers", "Streaming services", "Communication platforms"] },
      { type: "paragraph", text: "You acknowledge that:" },
      {
        type: "list",
        items: [
          "Third-party services are governed by their own terms and privacy policies",
          "Sermfy is not responsible for the operation, availability, or security of third-party services",
          "Sermfy shall not be liable for interruptions or failures caused by third-party providers",
        ],
      },
    ],
  },
  {
    heading: "8. Intellectual Property",
    blocks: [
      {
        type: "paragraph",
        text: "All software, technology, trademarks, branding, logos, content, documentation, designs, and other intellectual property associated with Sermfy are the exclusive property of Sermfy.",
      },
      {
        type: "paragraph",
        text: "Subject to these Terms, you are granted a limited, non-exclusive, non-transferable, and revocable licence to use the platform.",
      },
      { type: "paragraph", text: "You may not:" },
      {
        type: "list",
        items: [
          "Copy any part of the software",
          "Modify the platform",
          "Distribute proprietary materials",
          "Reverse-engineer, decompile, or attempt to extract the source code of the platform",
        ],
      },
      {
        type: "paragraph",
        text: "Written permission must be obtained before any unauthorised use of Sermfy's intellectual property.",
      },
    ],
  },
  {
    heading: "9. Service Availability",
    blocks: [
      { type: "paragraph", text: 'Sermfy is provided on an "as-is" and "as-available" basis.' },
      { type: "paragraph", text: "We do not guarantee that the platform will always be:" },
      { type: "list", items: ["Uninterrupted", "Error-free", "Completely secure", "Continuously available"] },
      {
        type: "paragraph",
        text: "Scheduled maintenance, technical updates, or unforeseen outages may occasionally affect service availability.",
      },
    ],
  },
  {
    heading: "10. Termination",
    blocks: [
      { type: "paragraph", text: "We may suspend, restrict, or terminate your account if:" },
      {
        type: "list",
        items: [
          "You violate these Terms",
          "You misuse the platform",
          "Required fees remain unpaid",
          "Termination is required by law or regulation",
        ],
      },
      {
        type: "paragraph",
        text: "You may terminate your account at any time by discontinuing use of the platform or requesting account deletion.",
      },
    ],
  },
  {
    heading: "11. Limitation of Liability",
    blocks: [
      { type: "paragraph", text: "To the maximum extent permitted by applicable law:" },
      {
        type: "list",
        items: [
          "Sermfy shall not be liable for indirect, incidental, consequential, or special damages",
          "We shall not be responsible for the loss of data resulting from user actions, third-party failures, cyberattacks, or force majeure events",
          "Our total liability shall not exceed the total amount paid by you to Sermfy during the preceding 12 months",
        ],
      },
    ],
  },
  {
    heading: "12. Indemnification",
    blocks: [
      {
        type: "paragraph",
        text: "You agree to indemnify, defend, and hold harmless Sermfy, its officers, employees, contractors, affiliates, and partners from any claims, damages, liabilities, costs, or losses arising from:",
      },
      {
        type: "list",
        items: [
          "Your use of the platform",
          "Data uploaded by you",
          "Your violation of these Terms",
          "Your violation of any applicable law or third-party rights",
        ],
      },
    ],
  },
  {
    heading: "13. Privacy",
    blocks: [
      {
        type: "paragraph",
        text: "Your use of Sermfy is also governed by our Privacy Policy, which explains how personal information is collected, processed, stored, and protected in accordance with applicable data protection laws.",
      },
    ],
  },
  {
    heading: "14. Modifications to the Service or Terms",
    blocks: [
      { type: "paragraph", text: "We reserve the right to:" },
      {
        type: "list",
        items: ["Modify any feature or functionality of the platform", "Discontinue any service", "Update these Terms at any time"],
      },
      {
        type: "paragraph",
        text: "Continued use of the platform after any modifications constitutes acceptance of the revised Terms.",
      },
    ],
  },
  {
    heading: "15. Governing Law",
    blocks: [
      {
        type: "paragraph",
        text: "These Terms shall be governed by and interpreted in accordance with the laws of the Republic of Ghana.",
      },
      {
        type: "paragraph",
        text: "Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Ghana.",
      },
    ],
  },
  {
    heading: "16. Contact Information",
    blocks: [
      { type: "subheading", text: "Sermfy" },
      {
        type: "list",
        items: [
          "+233506698846",
          "Email: support@sermfy.com",
          "Address: Takoradi, Western Region, Ghana",
        ],
      },
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      bannerTitle="Terms and Conditions"
      documentTitle="Sermfy Terms & Conditions"
      intro={intro}
      sections={sections}
      pdfHref="/legal/sermfy-terms-and-conditions.pdf"
      pdfFileName="Sermfy Terms and Conditions.pdf"
    />
  )
}
