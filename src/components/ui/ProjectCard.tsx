import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  ExternalLink,
  Calendar,
  Tag,
  X,
  Copy,
  CheckCircle,
  Zap,
  Clock,
  Users,
} from "lucide-react";
import type { Project } from "@types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = project.liveUrl || `${window.location.origin}#projects`;
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

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
        className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
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

          {/* Advanced Hover Info - Tags & Stats */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {/* Top: Difficulty Badge */}
            {project.tags && (
              <div className="flex gap-2">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full bg-white text-gray-900`}
                >
                  <Zap className="w-3 h-3" />
                  {project.tags.difficulty.charAt(0).toUpperCase() +
                    project.tags.difficulty.slice(1)}
                </span>
              </div>
            )}

            {/* Bottom: Build Details */}
            {project.tags && (
              <div className="flex flex-col gap-2 text-white text-xs bg-black/30 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">Build Time:</span>
                  <span>{project.tags.buildTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">Team:</span>
                  <span>{project.tags.teamSize}</span>
                </div>
              </div>
            )}
          </motion.div>

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
        <div className="p-4 sm:p-6 bg-white">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
            {project.technologies.slice(0, 3).map((tech: string, i: number) => (
              <span
                key={i}
                className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3">
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                  onClick={(e) => e.stopPropagation()}
                  title="View on GitHub"
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
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                  onClick={(e) => e.stopPropagation()}
                  title="View Live Demo"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCopyLink}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                  isCopied
                    ? "bg-green-100 text-green-600"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                title="Copy project link"
              >
                {isCopied ? (
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </motion.button>
            </div>

            <span className="text-xs text-gray-500 flex items-center gap-1">
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
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <>
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9999"
                onClick={() => setIsModalOpen(false)}
              />

              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl z-10000 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button - fixed to top right */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors z-20 text-gray-700"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Modal content */}
                <div className="overflow-y-auto flex-1">
                  {/* Modal image */}
                  <div className="h-48 sm:h-64 lg:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Modal body */}
                  <div className="p-4 sm:p-6 lg:p-8 bg-white">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                        {project.title}
                      </h2>
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 mb-6">
                      {project.longDescription || project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Tags/Stats */}
                    {project.tags && (
                      <div className="mb-6 grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-red-600" />
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                                project.tags.difficulty === "beginner"
                                  ? "bg-green-100 text-green-700"
                                  : project.tags.difficulty === "intermediate"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                              }`}
                            >
                              {project.tags.difficulty.charAt(0).toUpperCase() +
                                project.tags.difficulty.slice(1)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">Difficulty</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-gray-900">
                              {project.tags.buildTime}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">Build Time</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-semibold text-gray-900">
                              {project.tags.teamSize}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">Team</p>
                        </div>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
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
                          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-semibold border border-gray-300"
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
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default ProjectCard;
