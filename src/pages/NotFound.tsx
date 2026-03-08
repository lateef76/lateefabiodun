import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home as HomeIcon, Frown } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="inline-block"
        >
          <Frown className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-primary-600 mx-auto mb-6" />
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-secondary-900 dark:text-white mb-4">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary-700 dark:text-secondary-300 mb-4">
          Page Not Found
        </h2>

        <p className="text-secondary-600 dark:text-secondary-400 text-sm sm:text-base lg:text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the
          digital wilderness.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm sm:text-base"
          >
            <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto opacity-50">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              className="h-2 bg-primary-200 dark:bg-primary-900 rounded"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
