import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Code2, Users, Target, Zap, BookOpen } from "lucide-react";
import SectionTitle from "@components/ui/SectionTitle";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Code2,
      value: "3+",
      label: "Years Experience",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      value: "25+",
      label: "Projects Completed",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      value: "15+",
      label: "Happy Clients",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Target,
      value: "100%",
      label: "Client Satisfaction",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const qualities = [
    {
      icon: Zap,
      title: "Fast Learner",
      description:
        "Quickly adapt to new technologies and frameworks, always staying up-to-date with industry trends.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Write maintainable, scalable, and well-documented code following best practices and design patterns.",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Excellent communication skills and experience working in agile teams across different time zones.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Constantly expanding my knowledge through courses, workshops, and side projects.",
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
    <section
      id="about"
      className="section-padding bg-white dark:bg-secondary-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better and discover what drives my passion for web development"
          align="center"
          gradient
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Bio */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-secondary-900 dark:text-white mb-4">
                Who is <span className="text-gradient">Abiodun Lateef?</span>
              </h3>
              <div className="space-y-4 text-secondary-600 dark:text-secondary-400 text-sm sm:text-base">
                <p>
                  I'm a passionate web developer with over 3 years of experience
                  creating beautiful and functional web applications. My journey
                  in web development started during my college years, and since
                  then, I've never stopped learning and improving my skills.
                </p>
                <p>
                  I specialize in React and TypeScript, but I'm always excited
                  to explore new technologies and frameworks. I believe in
                  writing clean, maintainable code and creating intuitive user
                  experiences that make a difference.
                </p>
                <p>
                  When I'm not coding, you can find me reading tech blogs,
                  contributing to open-source projects, or exploring the latest
                  trends in web development. I'm also an avid coffee enthusiast
                  and love hiking on weekends.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative overflow-hidden rounded-xl bg-linear-to-br from-secondary-50 to-secondary-100 dark:from-secondary-800 dark:to-secondary-700 p-4 sm:p-6 shadow-lg"
                >
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${stat.color} opacity-10 rounded-bl-full`}
                  />
                  <stat.icon
                    className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 text-transparent bg-linear-to-br ${stat.color} bg-clip-text`}
                  />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Qualities & Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Image Card */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/about.jpg"
                alt="About me"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm sm:text-base font-medium">Based in</p>
                <p className="text-lg sm:text-xl font-bold">
                  San Francisco, CA
                </p>
              </div>
            </motion.div>

            {/* Qualities Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary-50 dark:bg-secondary-800/50 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-all duration-300 cursor-default"
                >
                  <div className="shrink-0">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                      <quality.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-secondary-900 dark:text-white mb-1">
                      {quality.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                      {quality.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              variants={itemVariants}
              className="p-4 rounded-xl bg-linear-to-r from-primary-500 to-primary-600 text-white"
            >
              <p className="text-sm sm:text-base font-medium">
                💡 Fun fact: I've built over 25 projects and contributed to 10+
                open-source repositories!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400 mb-4">
            Tech stack I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Node.js",
              "Python",
              "Tailwind",
              "MongoDB",
              "GraphQL",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-white dark:bg-secondary-800 rounded-full shadow-md text-xs sm:text-sm font-medium text-secondary-700 dark:text-secondary-300 border border-secondary-200 dark:border-secondary-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
