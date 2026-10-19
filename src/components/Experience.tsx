"use client";
import { motion } from "framer-motion";
import { experiences } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-10"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {exp.company}
                  </a>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="space-y-1">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                    <span className="text-blue-500 mt-0.5">·</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
