"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "JWT Auth",
];

export default function AboutPage() {
  return (
    <main className="px-6 py-20 max-w-6xl mx-auto text-gray-900 dark:text-gray-100 font-sans">
      {/* Header */}
      <motion.section
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Passionate about crafting full-stack solutions that merge
          functionality with user delight.
        </p>
      </motion.section>

      {/* Journey */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">
          My Journey
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            With a background in Business Information Technology, I discovered a
            passion for development early on. The thrill of building something
            from scratch and solving real-world problems through code quickly
            became my mission.
          </p>
          <p>
            I've worked on impactful platforms in education, public service, and
            community engagement—learning to balance clean design, intuitive UX,
            and scalable backend infrastructure.
          </p>
          <p>
            I'm currently expanding my skillset, exploring cloud technologies
            and contributing to open-source projects that align with my values
            of accessibility and innovation.
          </p>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-full text-sm font-semibold text-gray-800 dark:text-white shadow-md transition-transform"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          Let’s Build Something Great
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Let's turn ideas into reality together.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Contact Me
        </Link>
      </motion.section>
    </main>
  );
}
