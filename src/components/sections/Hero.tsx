import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Button from "@components/ui/Button";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  const socialVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        type: "spring" as const,
        stiffness: 100,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900/20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.span
              variants={itemVariants}
              className="inline-block text-sm sm:text-base font-semibold text-primary-600 dark:text-primary-400 mb-2 sm:mb-3"
            >
              👋 Welcome to my portfolio
            </motion.span>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4"
            >
              <span className="text-secondary-900 dark:text-white">
                Hi, I'm{" "}
              </span>
              <span className="text-gradient block sm:inline-block">
                Your Name
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-700 dark:text-secondary-300 mb-4"
            >
              Web Developer & UI/UX Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-secondary-600 dark:text-secondary-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I create beautiful, responsive web applications with modern
              technologies. Passionate about crafting exceptional user
              experiences and writing clean, maintainable code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto"
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/yourusername",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/yourusername",
                  label: "LinkedIn",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/yourusername",
                  label: "Twitter",
                },
                {
                  icon: Mail,
                  href: "mailto:your.email@example.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  custom={index}
                  variants={socialVariants}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 rounded-lg bg-white dark:bg-secondary-800 shadow-md hover:shadow-xl transition-all duration-300 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-linear-to-r from-primary-400 to-primary-600 rounded-full blur-2xl opacity-20 animate-pulse" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-secondary-700 shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
                className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg"
              >
                ✦
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-14 sm:h-14 bg-secondary-500 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-bold shadow-lg"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
