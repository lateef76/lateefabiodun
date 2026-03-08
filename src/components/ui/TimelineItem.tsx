import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import type { Experience, Education } from "@types";

type TimelineItemProps = {
  item: Experience | Education;
  type: "work" | "education";
  index: number;
};

const TimelineItem = ({ item, type, index }: TimelineItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isExperience = (item: Experience | Education): item is Experience => {
    return (item as Experience).company !== undefined;
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: index * 0.2 + 0.3,
        type: "spring" as const,
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative pl-8 sm:pl-12 pb-8 sm:pb-12 group"
    >
      {/* Timeline dot with animation */}
      <motion.div
        variants={dotVariants}
        className="absolute left-0 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900 shadow-lg group-hover:scale-125 transition-transform duration-300"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-primary-600 animate-ping opacity-20" />
      </motion.div>

      {/* Content card */}
      <motion.div
        whileHover={{ scale: 1.02, x: 5 }}
        className="bg-white dark:bg-secondary-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-secondary-900 dark:text-white">
              {isExperience(item) ? item.position : item.degree}
            </h3>
            <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium">
              {isExperience(item) ? item.company : item.institution}
            </p>
          </div>

          {/* Type badge */}
          <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400">
            {type === "work" ? "Work" : "Education"}
          </span>
        </div>

        {/* Location and date */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            {isExperience(item) ? item.location : "Remote"}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            {item.startDate} - {item.endDate}
          </span>
        </div>

        {/* Description */}
        {isExperience(item) && (
          <ul className="space-y-2 mb-3">
            {item.description.map((desc: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + i * 0.1 }}
                className="flex items-start gap-2 text-xs sm:text-sm text-secondary-700 dark:text-secondary-300"
              >
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-primary-600 shrink-0" />
                <span>{desc}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {/* Technologies/Tags */}
        {"technologies" in item && item.technologies && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 pt-3 border-t border-secondary-200 dark:border-secondary-700">
            {item.technologies.map((tech: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + i * 0.05 }}
                className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}

        {/* Grade for education */}
        {"grade" in item && item.grade && (
          <div className="mt-3 pt-3 border-t border-secondary-200 dark:border-secondary-700">
            <span className="text-xs sm:text-sm font-medium text-secondary-600 dark:text-secondary-400">
              Grade:{" "}
              <span className="text-primary-600 dark:text-primary-400">
                {item.grade}
              </span>
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
