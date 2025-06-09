"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

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

const values = ["Integrity", "Innovation", "Service", "Faith", "Collaboration"];

export default function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true });

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
        <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">
          My Journey
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              With a background in Business Information Technology, I discovered
              a passion for development early on.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              I've worked on impactful platforms in education, public service,
              and community engagement—balancing clean design and scalable
              backend infrastructure.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              I'm expanding my skillset, exploring cloud technologies and
              contributing to open-source projects focused on accessibility and
              innovation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Core Values */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">
          What Drives Me
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To empower lives and communities by building digital products that
              make access to services, learning, and engagement seamless and
              impactful.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              A future where ethical tech bridges gaps in education, governance,
              and spiritual growth across Africa and beyond.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Core Values
            </h3>
            <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Counters */}
      <motion.section
        ref={ref}
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">
          Stats
        </h2>
        {inView && (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                <CountUp end={5} duration={3} />+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Projects</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                <CountUp end={1} duration={3} />
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Years Experience
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                <CountUp end={20} duration={3} />+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Students Impacted
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                <CountUp end={1000} duration={3} />+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Hours Coded
              </p>
            </div>
          </div>
        )}
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">
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
          you.
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
