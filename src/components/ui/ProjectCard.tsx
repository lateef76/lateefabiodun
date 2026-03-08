import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Calendar, Tag, X } from "lucide-react";
import type { Project } from "@types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants: Variants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.4 },
    },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ y: -10 }}
        className="group relative bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-40 sm:h-48 lg:h-56">
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay with quick actions */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          <span className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-primary-600 text-white">
            {project.category}
          </span>

          {/* Featured badge */}
          {project.featured && (
            <span className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2 py-1 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-yellow-500 text-white">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary-900 dark:text-white mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400 mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
            {project.technologies.slice(0, 3).map((tech: string, i: number) => (
              <span
                key={i}
                className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center gap-2 sm:gap-3">
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
            </div>

            <span className="text-xs text-secondary-500 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(project.completionDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-secondary-900 rounded-2xl shadow-2xl z-50"
            >
              {/* Modal content */}
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors z-10"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Modal image */}
                <div className="h-48 sm:h-64 lg:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal body */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-900 dark:text-white">
                      {project.title}
                    </h2>
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-secondary-700 dark:text-secondary-300 mb-6">
                    {project.longDescription || project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3 flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary-200 dark:bg-secondary-800 text-secondary-900 dark:text-white rounded-lg hover:bg-secondary-300 dark:hover:bg-secondary-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
