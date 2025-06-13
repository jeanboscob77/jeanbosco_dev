import ProjectPage from "../components/main/Project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Jean Bosco",
  description:
    "A showcase of Jean Bosco's web development projects, built with modern technologies like React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Jean Bosco",
    "Bikorimana Jean Bosco",
    "web development portfolio",
    "React projects",
    "Next.js applications",
    "full-stack development",
    "MERN stack portfolio",
    "JavaScript projects",
    "Rwanda developer",
  ],
  authors: [{ name: "Jean Bosco" }],
  creator: "Jean Bosco",
  metadataBase: new URL("https://jeanbosco-dev.vercel.app"),
  openGraph: {
    title: "Projects | Jean Bosco Portfolio",
    description:
      "Explore web apps and tools developed by Jean Bosco using cutting-edge frontend and backend technologies.",
    url: "https://jeanbosco-dev.vercel.app/projects",
    siteName: "Jean Bosco Portfolio",
    images: [
      {
        url: "https://jeanbosco-dev.vercel.app/Jean Bosco.png",
        width: 1200,
        height: 630,
        alt: "Jean Bosco Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Bosco Projects | Web Developer Portfolio",
    description:
      "Showcasing React, Next.js, and Node.js projects created by Jean Bosco.",
    creator: "@yourTwitterHandle",
    images: ["https://jeanbosco-dev.vercel.app/Jean Bosco.jpg"],
  },
};

const page = () => {
  return (
    <>
      <ProjectPage />
    </>
  );
};

export default page;
