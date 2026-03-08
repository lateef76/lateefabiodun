import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    // Apply the theme to DOM on mount
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 15 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-700" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
