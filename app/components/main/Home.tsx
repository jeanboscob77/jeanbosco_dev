"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Jean from "../../../public/Jean Bosco.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-12 z-10 relative">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-blue-500 dark:border-purple-600 shadow-lg">
            <Image
              src={Jean}
              alt="Jean Bosco"
              width={120}
              height={120}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hi, I'm Jean Bosco
        </motion.h1>

        <motion.h2
          className="text-2xl font-semibold mb-6 h-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typewriter
            words={[
              "Creative Web Developer",
              "Backend Developer",
              "Frontend Developer",
              "Tech Enthusiast",
              "Problem Solver",
              "Full stack developer",
              "Database Administrator",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I create beautiful, fast, and user-friendly websites and apps. Let's
          build something amazing together.
        </motion.p>

        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg hover:bg-gray-400 dark:hover:bg-gray-600 hover:scale-105 transition-transform"
          >
            Contact Me
          </Link>
        </motion.div>
        {/* CALL TO ACTION SECTION */}
        <motion.section
          className="mt-16 bg-blue-600 dark:bg-purple-700 text-white py-10 px-6 rounded-xl shadow-xl max-w-3xl mx-auto text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Let’s build something amazing!
          </h2>
          <p className="text-lg mb-6">
            Whether you need a developer for a project or just want to connect,
            I’m open to opportunities and collaborations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 dark:text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Contact Me
          </Link>
        </motion.section>
      </main>
    </div>
  );
}
