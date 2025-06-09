"use client";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-6 text-2xl">
              <Link href="https://x.com/bjeanbosco48" target="_blank">
                <FaTwitter className="hover:text-blue-400 transition" />
              </Link>
              <Link href="https://github.com/jeanboscob77" target="_blank">
                <FaGithub className="hover:text-gray-400 transition" />
              </Link>
              <Link href="https://linkedin.com/in/yourname" target="_blank">
                <FaLinkedin className="hover:text-blue-500 transition" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 flex items-center">
              <span className="mr-3">
                <Mail />
              </span>{" "}
              bjeanbosco48@gmail.com
            </p>
            <p className="text-gray-300 flex items-center mt-3">
              <span className="mr-3">
                <Phone />
              </span>{" "}
              +250 783 214 787
            </p>
            <p className="text-gray-300 flex items-center mt-3">
              <span className="mr-3">
                <BsWhatsapp size={24} className="text-green-600" />
              </span>{" "}
              +250 783 214 787
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Jean Bosco. All rights reserved.
          </p>
        </div>
        {/* Back to top */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-2 md:p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition z-50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </footer>
  );
}
