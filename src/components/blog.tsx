"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { blogPosts } from "../lib/data";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

function BlogCard({ post, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ delay: Math.min(index * 0.08, 0.4), duration: 0.4 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-xl font-semibold text-blue-600">{post.title}</h3>
        {post.featured && (
          <span className="shrink-0 text-xs font-medium px-2 py-1 rounded-full bg-blue-600 text-white">
            Featured
          </span>
        )}
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</span>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
      <p className="text-gray-700 dark:text-gray-400 mb-4">{post.content}</p>
      <div className="mt-auto">
        {post.link && (
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ExternalLink size={18} className="mr-1" />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [showAll, setShowAll] = useState(false);

  const featuredPosts = useMemo(() => blogPosts.filter((p) => p.featured), []);
  const extraPosts = useMemo(() => blogPosts.filter((p) => !p.featured), []);
  const visiblePosts = showAll ? blogPosts : featuredPosts;

  return (
    <section
      id="blog"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
        >
          Blog
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Featured posts first. Open the full archive if you want every article.
        </p>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visiblePosts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {extraPosts.length > 0 && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show featured only
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Show all posts ({extraPosts.length} more)
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
