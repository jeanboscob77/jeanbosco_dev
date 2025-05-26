import Home from "./components/main/Home";
// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jean Bosco | Full-Stack Developer Portfolio",
  description:
    "Explore the professional portfolio of Jean Bosco, a Full-Stack Developer skilled in React, Next.js, Node.js, MongoDB, and more.",
  keywords: [
    "Jean Bosco",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Rwanda",
    "JavaScript Developer",
    "MERN Stack",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Jean Bosco" }],
  creator: "Jean Bosco",
  metadataBase: new URL("https://your-portfolio-domain.com"),
  openGraph: {
    title: "Jean Bosco | Full-Stack Developer",
    description:
      "Crafting modern web applications with clean design and robust backend solutions.",
    url: "https://your-portfolio-domain.com",
    siteName: "Jean Bosco Portfolio",
    images: [
      {
        url: "https://your-portfolio-domain.com/og-image.jpg",
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
    title: "Jean Bosco | Full-Stack Developer",
    description:
      "Explore Jean Bosco’s portfolio showcasing web development projects, skills, and contact information.",
    creator: "@yourTwitterHandle",
    images: ["https://your-portfolio-domain.com/og-image.jpg"],
  },
};

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
