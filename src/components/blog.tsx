"use client";
import { motion } from "framer-motion";
import { blogPosts } from "../lib/data";

// interface BlogPost {
//   title: string;
//   date: string;
//   excerpt: string;
//   content: string;
//   link?: string;
// }



// const blogPosts: BlogPost[] = [
//   {
//     title: "My Full-Stack Journey ",
//     date: "September 2025",
//     excerpt:
//       "From starting as a B.Tech IT student to working as a Full-Stack Developer Intern, here’s how I began my journey into scalable web development.",
//     content:
//       "I started learning web development with the basics of HTML, CSS, and JavaScript. Over time, I discovered React and Next.js, which allowed me to build dynamic, production-ready apps. My internship at IISPPR gave me hands-on experience working with client management systems, role-based authentication, and real-time analytics.",
//   },
//   {
//     title: "Client Management System (ClientPro)",
//     date: "August 2025",
//     excerpt:
//       "How I built an enterprise-grade business dashboard using Next.js, Tailwind, and Vercel.",
//     content:
//       "ClientPro was my biggest project so far — it included real-time analytics, project tracking, role-based access (Admin, Manager, Employee), and even invoice management. It was deployed on Vercel with production optimization for fast performance.",
//     link: "https://new-client-management-system-vercel-plum.vercel.app/",
//   },
//   {
//     title: "Balancing College & Development",
//     date: "July 2025",
//     excerpt:
//       "Being a 1st-year student at Jalpaiguri Government Engineering College while also pursuing real-world development experience wasn’t easy, but it was rewarding.",
//     content:
//       "Between academics, hackathons, and internships, I learned how to manage my time better. Participating in contests and being active in the JGEC Coders Club also pushed me to solve problems faster and collaborate with peers.",
//   },
// ];

export default function BlogPage() {
  return (
    <section
      id="blog"
      className="py-20 dark:bg-gray-900 bg-gray-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-amber-50 mb-12"
        >
          Blog
        </motion.h2>

        <div className="space-y-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <span className="text-sm text-gray-500">{post.date}</span>
              <p className="text-gray-600 dark:text-gray-300 mt-3">
                {post.excerpt}
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-4">
                {post.content}
              </p>

              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  Live Demo →
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
