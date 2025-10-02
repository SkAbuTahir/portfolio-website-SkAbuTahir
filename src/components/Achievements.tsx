"use client";
import { motion } from "framer-motion";
import { achievements } from "../lib/data";

// interface Achievement {
//   title: string;
//   description: string;
//   year?: string;
// }

// const achievements: Achievement[] = [
//   {
//     title: "Multiple Olympiad Winner",
//     description:
//       "Achieved top ranks in National Science Olympiad (NSO), International Mathematics Olympiad (IMO), and International English Olympiad (IEO).",
//   },
//   {
//     title: "Three-time Academic Topper",
//     description:
//       "Secured top position in Britti Examination (Classes 6-8) with consistent academic excellence.",
//   },
//   {
//     title: "Robotics Project",
//     description:
//       "Built a Bluetooth-controlled RoboCar and competed in Robo-Soccer tournaments.",
//   },
//   {
//     title: "Hackathons & Coding Contests",
//     description:
//       "Active member of JGEC Coders Club, regularly participating in hackathons and coding competitions.",
//   },
//   {
//     title: "Full-Stack Developer Internship",
//     description:
//       "Currently interning at IISPPR as a Full-Stack Developer, working with Next.js, React, and full-stack features.",
//   },
// ];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 dark:bg-gray-900 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-amber-50 mb-12"
        >
          Achievements & Activities 🏆
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
              {item.year && (
                <span className="text-sm text-gray-500 mt-2 block">
                  {item.year}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
