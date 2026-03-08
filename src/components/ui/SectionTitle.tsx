import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  gradient?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  gradient = false,
}: SectionTitleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const titleVariants: Variants = {
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

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`mb-8 sm:mb-12 lg:mb-16 ${alignClasses[align]}`}
    >
      {/* Decorative line for left alignment */}
      {align === "left" && (
        <motion.div
          variants={{
            hidden: { width: 0 },
            visible: {
              width: 80,
              transition: { duration: 0.6, delay: 0.3 },
            },
          }}
          className="h-1 bg-primary-600 mb-4 rounded-full"
        />
      )}

      {/* Title */}
      <motion.h2
        variants={titleVariants}
        className={`
          heading-2 mb-4
          ${gradient ? "text-gradient" : "text-secondary-900 dark:text-white"}
        `}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          className="body-text max-w-2xl mx-auto"
          style={{ textAlign: align }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative underline for center alignment */}
      {align === "center" && (
        <motion.div
          variants={{
            hidden: { width: 0, opacity: 0 },
            visible: {
              width: 60,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.4 },
            },
          }}
          className="h-1 bg-primary-600 mx-auto mt-4 rounded-full"
        />
      )}
    </motion.div>
  );
};

export default SectionTitle;
