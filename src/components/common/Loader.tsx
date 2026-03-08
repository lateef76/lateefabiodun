import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Loader = () => {
  const loaderVariants: Variants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear" as const,
      },
    },
  };

  const dotVariants: Variants = {
    animate: (i: number) => ({
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <motion.div
          variants={loaderVariants}
          animate="animate"
          className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4"
        />

        {/* Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              custom={index}
              variants={dotVariants}
              animate="animate"
              className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-600 rounded-full"
            />
          ))}
        </div>

        <p className="mt-4 text-secondary-600 dark:text-secondary-400 text-sm sm:text-base">
          Loading amazing things...
        </p>
      </div>
    </div>
  );
};

export default Loader;
