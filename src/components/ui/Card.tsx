import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hoverable?: boolean;
  glass?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      hoverable = true,
      glass = false,
      padding = "md",
      className = "",
      ...props
    },
    ref,
  ) => {
    const paddingClasses = {
      none: "",
      sm: "p-4 sm:p-6",
      md: "p-6 sm:p-8",
      lg: "p-8 sm:p-10 lg:p-12",
    };

    const baseClasses = "rounded-xl overflow-hidden";
    const glassClasses = glass
      ? "glass"
      : "bg-white dark:bg-secondary-800 shadow-lg";
    const hoverClasses = hoverable
      ? "hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      : "";

    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? { scale: 1.02 } : {}}
        whileTap={hoverable ? { scale: 0.98 } : {}}
        className={`
        ${baseClasses}
        ${glassClasses}
        ${hoverClasses}
        ${paddingClasses[padding]}
        ${className}
      `}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

Card.displayName = "Card";

export default Card;
