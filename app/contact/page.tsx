import ContactForm from "../components/main/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jean Bosco",
  description:
    "Get in touch with Jean Bosco — full-stack web developer specializing in React, Next.js, and Node.js. Let's collaborate on your next project.",
  keywords: [
    "Jean Bosco",
    "contact Jean Bosco",
    "Rwanda full-stack developer",
    "React Next.js developer",
    "hire web developer Rwanda",
    "freelance developer contact",
    "web development Rwanda",
  ],

  authors: [{ name: "Jean Bosco" }],
  creator: "Jean Bosco",
  metadataBase: new URL("https://jeanbosco-dev.vercel.app"),
  openGraph: {
    title: "Contact | Jean Bosco Portfolio",
    description:
      "Reach out to Jean Bosco to discuss collaborations, freelance projects, or full-time opportunities.",
    url: "https://jeanbosco-dev.vercel.app/contact",
    siteName: "Jean Bosco",
    images: [
      {
        url: "https://your-portfolio-domain.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Jean Bosco",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Jean Bosco | Web Developer Portfolio",
    description:
      "Have a project idea or opportunity? Let’s talk. Contact Jean Bosco via email or social media.",
    creator: "@yourTwitterHandle",
    images: ["https://your-portfolio-domain.com/og-contact.jpg"],
  },
};

export default function Contact() {
  return (
    <>
      <ContactForm />
    </>
  );
}
