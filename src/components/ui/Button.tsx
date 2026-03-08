import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { ButtonVariant, ButtonSize } from "@types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      icon,
      iconPosition = "left",
      className = "",
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 active:bg-primary-800",
      secondary:
        "bg-secondary-200 text-secondary-800 hover:bg-secondary-300 focus:ring-secondary-400 dark:bg-secondary-700 dark:text-secondary-200 dark:hover:bg-secondary-600",
      outline:
        "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20",
      ghost:
        "text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-400 dark:text-secondary-300 dark:hover:bg-secondary-800",
    };

    const sizeClasses: Record<ButtonSize, string> = {
      sm: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm gap-1.5",
      md: "px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base gap-2",
      lg: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg gap-2.5",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
        ${baseClasses}
        ${variantClasses[variant as ButtonVariant]}
        ${sizeClasses[size as ButtonSize]}
        ${widthClass}
        ${className}
      `}
        disabled={disabled || isLoading}
        {...(props as any)}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="inline-flex">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="inline-flex">{icon}</span>
            )}
          </>
        )}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
