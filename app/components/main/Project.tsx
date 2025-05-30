"use client";

import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS
import { useEffect } from "react"; // For initializing AOS
import InfoTech from "../../../public/Info_tech.png";
import Edtech from "../../../public/EdTech.png";
import PublicEcho from "../../../public/publicecho.jpeg";
const projects = [
  {
    title: "InfoTech Scholars – Smart Online Services & Educational Hub",
    description:
      "InfoTech Scholars is a versatile platform that combines educational blogging with essential digital services. Alongside sharing insightful content on education and technology, it provides assistance with key online services such as visa applications, university admissions, Irembo services, and more. Our mission is to simplify access to public and academic services while promoting digital literacy.",
    image: InfoTech, // replace with your image path
    technologies: ["React", "Node.js", "Mysql", "Express", "Bootstrap"],
    link: "https://www.infotechscholars.com/",
  },
  {
    title: "EdTech Course Platform",
    description:
      "An online platform for students and employees to explore and enroll in courses. Built with MERN stack and modern UX principles.",
    image: Edtech, // replace with your image path
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    link: "https://ed-tech-red.vercel.app",
  },
  {
    title: "PublicEcho – Citizen Feedback & Complaint Portal",
    description:
      "PublicEcho is a civic engagement platform that empowers citizens to voice their concerns and report issues directly to relevant authorities. With a clean interface and seamless experience, the system ensures that public complaints are categorized, tracked, and addressed transparently. Built to bridge the gap between the people and their leaders, PublicEcho amplifies community voices for better governance and accountability.",
    image: PublicEcho, // replace with your image path
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    link: "https://publicecho.example.com", // replace with your actual link
  },
];

export default function ProjectPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <main className="px-6 py-20 max-w-6xl mx-auto text-gray-900 dark:text-gray-100 font-sans">
      {/* Header */}
      <section className="text-center mb-20">
        <h1
          className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          My Projects
        </h1>
        <p
          className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          data-aos="fade-up"
        >
          Here are a few projects I've worked on that showcase my full-stack
          skills, creativity, and problem-solving abilities.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-all"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3
                className="text-2xl font-semibold text-gray-800 dark:text-white mb-3"
                data-aos="fade-up"
              >
                {project.title}
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300 mb-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={project.link}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
