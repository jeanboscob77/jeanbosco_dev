"use client";

import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

import InfoTech from "../../../public/Info_tech.png";
import Edtech from "../../../public/EdTech.png";
import PublicEcho from "../../../public/publicecho.jpeg";

const projects = [
  {
    title: "InfoTech Scholars – Smart Online Services & Educational Hub",
    description:
      "InfoTech Scholars is a versatile platform that combines educational blogging with essential digital services. Alongside sharing insightful content on education and technology, it provides assistance with key online services such as visa applications, university admissions, Irembo services, and more. Our mission is to simplify access to public and academic services while promoting digital literacy.",
    image: InfoTech,
    technologies: ["React", "Node.js", "Mysql", "Express", "Bootstrap"],
    link: "https://www.infotechscholars.com/",
    category: "Full Stack",
    createdAt: new Date("2024-09-01"),
  },
  {
    title: "EdTech Course Platform",
    description:
      "An online platform for students and employees to explore and enroll in courses. Built with MERN stack and modern UX principles.",
    image: Edtech,
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    link: "https://ed-tech-red.vercel.app",
    category: "Full Stack",
    createdAt: new Date("2025-05-15"),
  },
  {
    title: "PublicEcho – Citizen Feedback & Complaint Portal",
    description:
      "PublicEcho is a civic engagement platform that empowers citizens to voice their concerns and report issues directly to relevant authorities. With a clean interface and seamless experience, the system ensures that public complaints are categorized, tracked, and addressed transparently. Built to bridge the gap between the people and their leaders, PublicEcho amplifies community voices for better governance and accountability.",
    image: PublicEcho,
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    link: "https://publicecho.vercel.app",
    category: "Full Stack",
    createdAt: new Date("2025-06-01"),
  },
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

type SortOption = "latest" | "oldest" | "title-asc" | "title-desc";

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState<SortOption>("latest");

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Sort filtered projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortOption) {
      case "latest":
        return b.createdAt.getTime() - a.createdAt.getTime();
      case "oldest":
        return a.createdAt.getTime() - b.createdAt.getTime();
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

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
          data-aos-delay="100"
        >
          Here are a few projects I've worked on that showcase my full-stack
          skills, creativity, and problem-solving abilities.
        </p>
      </section>

      {/* Filters & Sort Controls */}
      <section
        className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 max-w-4xl mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition
                ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-400/40"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }
              `}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-3">
          <label
            htmlFor="sort"
            className="font-medium text-gray-700 dark:text-gray-300 select-none"
          >
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="rounded-md border border-gray-300 bg-white dark:bg-gray-700 dark:text-gray-100 py-2 px-3 text-gray-800 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-sm"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
          </select>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid md:grid-cols-2 gap-12 px-4 max-w-6xl mx-auto">
        {sortedProjects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-[1.03] transition-all"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-t-lg w-full h-56 object-cover"
              priority
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
