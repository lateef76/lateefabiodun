import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Filter } from "lucide-react";
import SectionTitle from "@components/ui/SectionTitle";
import ProjectCard from "@components/ui/ProjectCard";
import Button from "@components/ui/Button";
import { projects } from "@data/projects";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "mobile", label: "Mobile" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((p) => p.featured);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const filterVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      id="projects"
      className="section-padding bg-secondary-50 dark:bg-secondary-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Projects"
          subtitle="Here are some of my recent works. Each project is unique and crafted with love."
          align="center"
          gradient
        />

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-center mb-6">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            icon={<Filter className="w-4 h-4" />}
            iconPosition="left"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Filter Buttons */}
        <AnimatePresence>
          <motion.div
            variants={filterVariants}
            initial="hidden"
            animate={
              showFilters || window.innerWidth >= 1024 ? "visible" : "hidden"
            }
            exit="exit"
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFilter(category.id);
                  setShowFilters(false);
                }}
                className={`
                  relative px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium
                  transition-all duration-300 overflow-hidden
                  ${
                    filter === category.id
                      ? "text-white"
                      : "text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }
                `}
              >
                {filter === category.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary-600"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured Projects Section (shown only on 'all' filter) */}
        {filter === "all" && featuredProjects.length > 0 && (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-secondary-900 dark:text-white mb-6">
              Featured Projects ⭐
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects
            .filter((p) => (filter === "all" ? !p.featured : true))
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </motion.div>

        {/* Show more button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-10 sm:mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </motion.div>
        )}

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-secondary-600 dark:text-secondary-400 text-lg">
              No projects found in this category.
            </p>
            <Button
              variant="ghost"
              onClick={() => setFilter("all")}
              className="mt-4"
            >
              View all projects
            </Button>
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { label: "Total Projects", value: projects.length },
            {
              label: "Frontend",
              value: projects.filter((p) => p.category === "frontend").length,
            },
            {
              label: "Full Stack",
              value: projects.filter((p) => p.category === "fullstack").length,
            },
            {
              label: "Featured",
              value: projects.filter((p) => p.featured).length,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-xl bg-white dark:bg-secondary-800 shadow-lg"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
