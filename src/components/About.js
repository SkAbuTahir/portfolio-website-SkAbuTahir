"use client";
import { Code, Database, Globe, Server, Brain, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

const skillIcons = [
  { icon: Code, color: "text-blue-500" },
  { icon: Globe, color: "text-cyan-500" },
  { icon: Database, color: "text-purple-500" },
  { icon: Server, color: "text-green-500" },
  { icon: Brain, color: "text-orange-500" },
  { icon: Cloud, color: "text-indigo-500" },
];

const stats = [
  { number: "3", label: "Internships" },
  { number: "9.48", label: "SGPA / 10" },
  { number: "2028", label: "Expected Grad" },
  { number: "10+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-10"
        >
          About
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <p>
              I&apos;m pursuing B.Tech in Information Technology at Jalpaiguri Government
              Engineering College (expected 2028, SGPA 9.48/10). I work across React,
              Next.js, Node.js, PostgreSQL, and Supabase, and apply deep learning
              with TensorFlow and PyTorch for computer vision and sequence models.
            </p>
            <p>
              Recent work includes a CNN-LSTM image captioning model at NIT Jamshedpur,
              a conference management platform at DeepDuo Foundation, and a CRM used by
              25+ internal users at IISPPR.
            </p>
            <p>
              Outside internships I contribute to JWOC, volunteer with JGEC Coders Club,
              and compete on CodeChef and Codeforces.
            </p>
            <a
              href="#projects"
              className="inline-block mt-2 text-blue-600 hover:underline text-sm font-medium"
            >
              View my work →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {skillGroups.map((skill, index) => {
              const Icon = skillIcons[index].icon;
              return (
                <div
                  key={skill.name}
                  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800"
                >
                  <div className={`mb-3 ${skillIcons[index].color}`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{skill.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">{skill.items}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
