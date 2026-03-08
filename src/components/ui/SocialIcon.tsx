import { motion } from "framer-motion";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

const SocialIcon = ({ href, icon, label, delay = 0 }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary-100 hover:bg-primary-100 dark:bg-secondary-800 dark:hover:bg-primary-900/30 text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-all duration-300"
    >
      {icon}
    </motion.a>
  );
};

export default SocialIcon;
