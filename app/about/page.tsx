import React from "react";
import AboutPage from "../components/main/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Jean Bosco",
  description:
    "Learn more about my journey, skills, and mission as a full-stack developer passionate about crafting impactful solutions.",
  keywords: [
    "Jean Bosco",
    "Bikorimana",
    "Jean Bosco Bikorimana",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Web Development Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
  ],
  authors: [{ name: "Jean Bosco B", url: "https://jeanbosco-dev.vercel.app" }],
  creator: "Jean Bosco",
  openGraph: {
    title: "About Me | Jean Bosco",
    description:
      "I'm a full-stack developer passionate about building intuitive and scalable web applications. Here's my story and tech stack.",
    url: "https://jeanbosco-dev.vercel.app/about",
    siteName: "Jean Bosco Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Jean Bosco Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Jean Bosco",
    description:
      "Check out my background, journey, and skills as a full-stack developer.",
    images: ["https://yourportfolio.com/og-image.jpg"],
    creator: "@yourTwitterHandle", // Optional
  },
  metadataBase: new URL("https://jeanbosco-dev.vercel.app"),
};

const AoutPage = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default AoutPage;
