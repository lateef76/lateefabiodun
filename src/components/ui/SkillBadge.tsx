import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Skill } from "@types";
import { Code2, Zap } from "lucide-react";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getProficiencyColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case 2:
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case 3:
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case 4:
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case 5:
        return "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400";
      default:
        return "bg-secondary-100 text-secondary-700 dark:bg-secondary-800 dark:text-secondary-400";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "border-blue-500";
      case "backend":
        return "border-green-500";
      case "database":
        return "border-purple-500";
      case "tools":
        return "border-orange-500";
      case "soft-skills":
        return "border-pink-500";
      default:
        return "border-secondary-500";
    }
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.05,
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={badgeVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`
        group relative flex items-center gap-2 sm:gap-3 
        px-3 py-2 sm:px-4 sm:py-3 
        bg-white dark:bg-secondary-800 
        rounded-lg shadow-md hover:shadow-xl 
        border-l-4 ${getCategoryColor(skill.category)}
        transition-all duration-300 cursor-default
      `}
    >
      {/* Icon */}
      <div className="text-xl sm:text-2xl text-secondary-700 dark:text-secondary-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {skill.icon ? <Code2 className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
      </div>

      {/* Skill Info */}
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-sm sm:text-base text-secondary-900 dark:text-white">
            {skill.name}
          </span>

          {/* Proficiency indicator for mobile */}
          <span className="sm:hidden text-xs font-medium px-2 py-0.5 rounded-full bg-secondary-100 dark:bg-secondary-700">
            {skill.proficiency}/5
          </span>
        </div>

        {/* Proficiency bar - hidden on mobile, shown on larger screens */}
        <div className="hidden sm:block mt-1">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={
                  inView
                    ? { width: `${(skill.proficiency / 5) * 100}%` }
                    : { width: 0 }
                }
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full rounded-full ${getProficiencyColor(skill.proficiency)}`}
              />
            </div>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${getProficiencyColor(skill.proficiency)}`}
            >
              {skill.proficiency}/5
            </span>
          </div>
        </div>
      </div>

      {/* Years of experience tooltip */}
      {skill.yearsOfExperience && (
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                      bg-secondary-900 text-white text-xs py-1 px-2 rounded 
                      opacity-0 group-hover:opacity-100 transition-opacity 
                      pointer-events-none whitespace-nowrap"
        >
          {skill.yearsOfExperience}+ years
        </div>
      )}
    </motion.div>
  );
};

export default SkillBadge;
