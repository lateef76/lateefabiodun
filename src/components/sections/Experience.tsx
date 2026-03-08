import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import SectionTitle from "@components/ui/SectionTitle";
import TimelineItem from "@components/ui/TimelineItem";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import { experiences, education, certifications } from "@data/experience";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState<
    "work" | "education" | "certifications"
  >("work");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const tabVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.05 },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-secondary-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey and academic background"
          align="center"
          gradient
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {[
            { id: "work", label: "Work Experience", icon: Briefcase },
            { id: "education", label: "Education", icon: GraduationCap },
            { id: "certifications", label: "Certifications", icon: Award },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              variants={tabVariants}
              animate={activeTab === tab.id ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`
                relative flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base
                transition-all duration-300 overflow-hidden
                ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400"
                }
              `}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary-600"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <tab.icon className="relative z-10 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {/* Work Experience */}
            {activeTab === "work" && (
              <motion.div
                key="work"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={exp.id}
                    item={exp}
                    type="work"
                    index={index}
                  />
                ))}

                {/* Download Resume Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-8"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    icon={<Download className="w-4 h-4 sm:w-5 sm:h-5" />}
                    iconPosition="left"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                  >
                    Download Full Resume
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {/* Education */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                {education.map((edu, index) => (
                  <TimelineItem
                    key={edu.id}
                    item={edu}
                    type="education"
                    index={index}
                  />
                ))}
              </motion.div>
            )}

            {/* Certifications */}
            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card
                      className="h-full cursor-pointer"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      <div className="flex items-start gap-4">
                        {/* Certification Image */}
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-secondary-100 dark:bg-secondary-800 shrink-0">
                          <img
                            src={cert.image}
                            alt={cert.issuer}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base font-bold text-secondary-900 dark:text-white mb-1">
                            {cert.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 mb-1">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-secondary-500 dark:text-secondary-500">
                            Issued {cert.date}
                          </p>
                        </div>

                        {/* Verified Badge */}
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 shrink-0" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          <Card className="text-center p-6">
            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-primary-600" />
            <div className="text-2xl sm:text-3xl font-bold text-secondary-900 dark:text-white">
              {experiences.length}
            </div>
            <div className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400">
              Years Experience
            </div>
          </Card>

          <Card className="text-center p-6">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-primary-600" />
            <div className="text-2xl sm:text-3xl font-bold text-secondary-900 dark:text-white">
              {education.length}
            </div>
            <div className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400">
              Degrees Earned
            </div>
          </Card>

          <Card className="text-center p-6">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-primary-600" />
            <div className="text-2xl sm:text-3xl font-bold text-secondary-900 dark:text-white">
              {certifications.length}
            </div>
            <div className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400">
              Certifications
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
