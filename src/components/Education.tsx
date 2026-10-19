"use client";
import { motion } from "framer-motion";
import { education } from "../lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-10"
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {education.map((item, i) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.degree}</h3>
                  <p className="text-blue-600 text-sm">{item.school}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap">{item.period}</span>
              </div>
              <ul className="space-y-1">
                {item.highlights.map((h) => (
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
