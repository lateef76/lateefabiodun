import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown } from "lucide-react";
import Button from "@components/ui/Button";
import profileImage from "../../assets/images/picture-removebg-preview.png";

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-semibold text-sm rounded-full mb-6">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight">
                <span className="text-secondary-900">Hi, I'm </span>
                <span className="text-gradient">Abiodun</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-secondary-600 font-medium mb-6"
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-secondary-600 mb-8 max-w-2xl leading-relaxed"
            >
              I create beautiful, responsive web applications with modern
              technologies. Passionate about crafting exceptional user
              experiences and writing clean, maintainable code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            className="hidden md:flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-linear-to-r from-primary-400 to-primary-600 rounded-full blur-2xl opacity-20 animate-pulse" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-100 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Abiodun Lateef"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-primary-100"
              >
                <span className="text-3xl"></span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-secondary-600 hover:text-primary-600 transition-colors"
          >
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
