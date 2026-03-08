import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiBriefcase,
  FiTarget,
  FiZap,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import Logo from "@components/common/Logo";

const navLinks = [
  { name: "Home", href: "#home", icon: FiHome },
  { name: "About", href: "#about", icon: FiUser },
  { name: "Projects", href: "#projects", icon: FiBriefcase },
  { name: "Experience", href: "#experience", icon: FiTarget },
  { name: "Skills", href: "#skills", icon: FiZap },
  { name: "Contact", href: "#contact", icon: FiMail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
      setIsOpen(false);
    }
  };

  const sidebarLinkVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.06,
        duration: 0.3,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
          scrolled ? "shadow-xl" : "shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={() => handleNavClick("#home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Logo />
              <span className="font-display font-bold text-lg sm:text-xl text-secondary-900 hidden sm:inline">
                Abiodun
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-2 transition-colors duration-300 font-medium text-sm rounded-lg flex items-center space-x-2 ${
                      isActive
                        ? "text-primary-600 bg-primary-50"
                        : "text-secondary-900 hover:text-primary-600 hover:bg-primary-50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-lg hover:bg-secondary-100 transition-colors ${
                isOpen ? "hidden" : "block"
              }`}
              aria-label="Toggle menu"
            >
              <FiMenu className="w-6 h-6 text-secondary-900" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-70 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Logo />
                <div>
                  <span className="font-display font-bold text-lg text-gray-900 block leading-tight">
                    Abiodun
                  </span>
                  <span className="text-xs text-gray-500">Developer</span>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <FiX className="w-5 h-5 text-gray-700" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    custom={index}
                    variants={sidebarLinkVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-semibold shadow-sm"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-medium">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeDot"
                        className="ml-auto w-2 h-2 rounded-full bg-blue-500"
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-gray-100">
              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <a
                  href="https://github.com/lateef76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lateef-abiodun-7813a4354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="mailto:lateefabiodun76@gmail.com"
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
                >
                  <FiMail size={18} />
                </a>
              </div>
              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Let's Work Together
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
