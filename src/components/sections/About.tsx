import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Zap, Users, BookOpen, Target, Lightbulb } from "lucide-react";
import SectionTitle from "@components/ui/SectionTitle";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Code2,
      value: "2+",
      label: "Years of Experience",
    },
    {
      icon: Target,
      value: "10+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: "10+",
      label: "Happy Clients",
    },
  ];

  const highlights = [
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Quick to adapt to new technologies and deliver results",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Maintainable, scalable code following best practices",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration and communication skills",
    },
    {
      icon: BookOpen,
      title: "Always Learning",
      description: "Constantly expanding knowledge and staying current",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative solutions with technical excellence",
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Attention to detail in every aspect of work",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Discover who I am and what drives my passion for creating digital experiences"
          align="center"
          gradient
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Intro Card */}
          <motion.div
            variants={itemVariants}
            className="bg-linear-to-br from-white to-primary-50 rounded-2xl p-8 sm:p-10 border border-primary-100 shadow-lg"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              Hi, I'm <span className="text-gradient">Abiodun Lateef</span>
            </h3>
            <p className="text-lg text-secondary-700 leading-relaxed mb-4">
              I'm a passionate full-stack developer with 2+ years of experience
              building beautiful and functional web applications. I love turning
              ideas into reality through clean code and innovative design.
            </p>
            <p className="text-base text-secondary-600 leading-relaxed">
              My expertise lies in React, TypeScript, and modern web
              technologies. I'm dedicated to creating exceptional user
              experiences while maintaining code quality and best practices. I'm
              always eager to learn new technologies and tackle challenging
              problems.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 sm:p-8 border-2 border-primary-100 shadow-md text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <p className="text-4xl font-bold bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-secondary-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5, y: -3 }}
                className="bg-white rounded-xl p-6 border border-secondary-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100">
                      <highlight.icon className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-secondary-900 mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-secondary-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
