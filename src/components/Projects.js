"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../lib/data";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";

function ProjectCard({ project, index }) {
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
        <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
        {project.featured && (
          <span className="shrink-0 text-xs font-medium px-2 py-1 rounded-full bg-blue-600 text-white">
            Featured
          </span>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ExternalLink size={18} className="mr-1" />
            Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <Github size={18} className="mr-1" />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );
  const extraProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    []
  );
  const visibleProjects = showAll ? projects : featuredProjects;

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
        >
          Projects
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Featured work first. Open the full archive if you want every project.
        </p>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {extraProjects.length > 0 && (
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
                  Show all projects ({extraProjects.length} more)
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
