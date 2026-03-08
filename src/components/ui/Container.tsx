import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  noPadding?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { children, maxWidth = "xl", noPadding = false, className = "", ...props },
    ref,
  ) => {
    const maxWidthClasses = {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    };

    return (
      <motion.div
        ref={ref}
        className={`
        w-full mx-auto
        ${maxWidthClasses[maxWidth]}
        ${noPadding ? "" : "px-4 sm:px-6 lg:px-8"}
        ${className}
      `}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

Container.displayName = "Container";

export default Container;
