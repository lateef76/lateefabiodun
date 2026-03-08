import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Variants } from "framer-motion";

interface MobileMenuProps {
  links: { name: string; href: string }[];
  onClose: () => void;
}

const MobileMenu = ({ links, onClose }: MobileMenuProps) => {
  const menuVariants: Variants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 200,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
      },
    }),
  };

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="mobile-menu-overlay"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 right-0 h-full w-70 sm:w-80 bg-white dark:bg-secondary-900 shadow-2xl z-50 overflow-y-auto"
      >
        <div className="p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation links */}
          <nav className="mt-12">
            <ul className="space-y-4">
              {links.map((link, index) => (
                <motion.li
                  key={link.name}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 text-lg sm:text-xl font-medium text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Social links or additional content */}
          <div className="absolute bottom-8 left-6 right-6">
            <p className="text-sm text-secondary-500 dark:text-secondary-400 text-center">
              Let's connect and build something amazing!
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
