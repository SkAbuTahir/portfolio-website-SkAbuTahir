"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sk Abu Tahir",
            jobTitle: "Software Engineer",
            description: "B.Tech IT student and Software Engineer specializing in full-stack development and applied machine learning",
            url: "https://skabutahirportfolio.vercel.app/",
            sameAs: [
              "https://github.com/SkAbuTahir",
              "https://www.linkedin.com/in/sk-abu-tahir-/",
            ],
          }),
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Image
            src="/profile.jpg"
            alt="SK Abu Tahir"
            width={120}
            height={120}
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-medium"
        >
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
        >
          Sk Abu Tahir
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-xl text-gray-500 dark:text-gray-400 mb-4 max-w-xl"
        >
          Software Engineer · Full-Stack &amp; Machine Learning
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-base text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed"
        >
          B.Tech IT at JGEC (SGPA 9.48). I build full-stack products and applied
          ML systems — CRMs, conference platforms, CNN-LSTM models, AI attendance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-200 shadow-md"
          >
            <Download size={18} />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 rounded-full font-medium transition-colors duration-200"
          >
            <Mail size={18} />
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex gap-5"
        >
          <a
            href="https://github.com/SkAbuTahir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/sk-abu-tahir-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — dot animates, not the container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
        />
      </motion.div>
    </section>
  );
}
