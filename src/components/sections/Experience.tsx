import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import SectionTitle from "@components/ui/SectionTitle";
import { experiences, education } from "@data/experience";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-20"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <SectionTitle
              title="Experience & Education"
              subtitle="My professional journey and academic background"
              align="center"
              gradient
            />
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            variants={containerVariants}
            className="w-full max-w-4xl mb-16"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-8 h-8 text-blue-600" />
              Work Experience
            </motion.h3>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={containerVariants} className="w-full max-w-4xl">
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-8 h-8 text-green-600" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.degree} in {edu.fieldOfStudy}
                      </h4>
                      <p className="text-green-600 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Grade Badge */}
                  <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-200 mb-4">
                    {edu.grade}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Highlights - Academic Projects */}
                  {edu.description &&
                    edu.description.includes("Academic Projects:") && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm font-semibold text-gray-900 mb-2">
                          Key Projects:
                        </p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {edu.description
                            .split("Academic Projects: ")[1]
                            ?.split(", ")
                            .map((project, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-green-600">•</span>
                                {project}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                  {/* Focus Areas */}
                  {edu.description && edu.description.includes("Focus:") && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        Focus Areas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.description
                          .split("Focus: ")[1]
                          ?.split(", ")
                          .slice(0, 3)
                          .map((focus, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200"
                            >
                              {focus}
                            </span>
                          ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
