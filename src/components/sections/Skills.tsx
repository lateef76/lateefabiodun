import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SectionTitle from "@components/ui/SectionTitle";
import SkillBadge from "@components/ui/SkillBadge";
import Card from "@components/ui/Card";
import { skillsByCategory } from "@data/skills";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "frontend",
    "backend",
    "database",
    "tools",
    "soft-skills",
  ]);

  const categories = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: Code2,
      color: "blue",
      description: "Building responsive and interactive user interfaces",
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: Server,
      color: "green",
      description: "Creating robust server-side applications and APIs",
    },
    {
      id: "database",
      name: "Database",
      icon: Database,
      color: "purple",
      description: "Designing and managing data structures",
    },
    {
      id: "tools",
      name: "Tools & Methods",
      icon: Wrench,
      color: "orange",
      description: "Using modern development tools and practices",
    },
    {
      id: "soft-skills",
      name: "Soft Skills",
      icon: Users,
      color: "pink",
      description: "Essential skills for effective collaboration",
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      pink: "from-pink-500 to-pink-600",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="skills"
      className="section-padding bg-secondary-50 dark:bg-secondary-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills and competencies"
          align="center"
          gradient
        />

        {/* Skills Overview */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={categoryVariants}
              whileHover={{ y: -5 }}
              className="lg:hidden"
            >
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg bg-linear-to-br ${getCategoryColor(category.color)}`}
                  >
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-white">
                    {
                      skillsByCategory[
                        category.id as keyof typeof skillsByCategory
                      ].length
                    }
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                  {category.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Skills by Category */}
        <div className="space-y-6 sm:space-y-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills =
              skillsByCategory[category.id as keyof typeof skillsByCategory];
            const isExpanded = expandedCategories.includes(category.id);

            return (
              <motion.div
                key={category.id}
                variants={categoryVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="overflow-hidden">
                  {/* Category Header */}
                  <div
                    className="flex items-center justify-between p-4 sm:p-6 cursor-pointer"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`p-2 sm:p-3 rounded-lg bg-linear-to-br ${getCategoryColor(category.color)}`}
                      >
                        <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-secondary-900 dark:text-white">
                          {category.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                          {category.description} • {categorySkills.length}{" "}
                          skills
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm text-secondary-500">
                        {isExpanded ? "Show less" : "Show more"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500" />
                      )}
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.3, delay: 0.1 },
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 },
                          },
                        }}
                        className="border-t border-secondary-200 dark:border-secondary-700"
                      >
                        <div className="p-4 sm:p-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {categorySkills.map((skill, index) => (
                              <SkillBadge
                                key={skill.name}
                                skill={skill}
                                index={index}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-lg"
        >
          <h4 className="text-sm sm:text-base font-semibold text-secondary-900 dark:text-white mb-4">
            Proficiency Levels
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {[
              { level: 1, label: "Beginner", color: "bg-red-100 text-red-700" },
              {
                level: 2,
                label: "Elementary",
                color: "bg-orange-100 text-orange-700",
              },
              {
                level: 3,
                label: "Intermediate",
                color: "bg-yellow-100 text-yellow-700",
              },
              {
                level: 4,
                label: "Advanced",
                color: "bg-green-100 text-green-700",
              },
              {
                level: 5,
                label: "Expert",
                color: "bg-primary-100 text-primary-700",
              },
            ].map((level) => (
              <div key={level.level} className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${level.color.split(" ")[0]}`}
                />
                <span className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                  {level.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400">
            🚀 Currently learning:{" "}
            <span className="font-semibold text-primary-600">GraphQL</span> and{" "}
            <span className="font-semibold text-primary-600">AWS</span>
          </p>
          <div className="w-full max-w-md mx-auto mt-4 h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "75%" } : {}}
              transition={{ delay: 1.2, duration: 1 }}
              className="h-full bg-linear-to-r from-primary-500 to-primary-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
