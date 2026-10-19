"use client";
import { motion } from "framer-motion";
import { achievements } from "../lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-10"
        >
          Achievements
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                {item.year && (
                  <span className="shrink-0 text-xs text-gray-400">{item.year}</span>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
