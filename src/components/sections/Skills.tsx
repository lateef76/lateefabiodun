import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiVite,
  SiPython,
  SiFirebase,
  SiSupabase,
  SiExpress,
  SiPostman,
  SiCloudinary,
  SiDocker,
  SiVercel,
  SiGithub,
  SiGraphql,
  SiFigma,
  SiNestjs,
  SiSketch,
  SiN8N,
  SiZapier,
} from "react-icons/si";
import {
  Brain,
  Zap,
  Palette,
  Paintbrush,
  PenTool,
  Phone,
  Settings,
} from "lucide-react";
import SectionTitle from "@components/ui/SectionTitle";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      name: "Frontend Development",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
        { name: "Figma", icon: SiFigma },
      ],
    },
    {
      name: "Backend Development",
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "NestJS", icon: SiNestjs },
        { name: "Python", icon: SiPython },
        { name: "GraphQL", icon: SiGraphql },
        { name: "REST APIs", icon: Zap },
      ],
    },
    {
      name: "Databases & Cloud",
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
        { name: "Supabase", icon: SiSupabase },
        { name: "Cloudinary", icon: SiCloudinary },
      ],
    },
    {
      name: "Tools & DevOps",
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "Docker", icon: SiDocker },
        { name: "Vercel", icon: SiVercel },
      ],
    },
    {
      name: "AI & Emerging Tech",
      color: "from-indigo-500 to-indigo-600",
      skills: [
        { name: "AI Chatbot", icon: Brain },
        { name: "AI Voice Call", icon: Phone },
        { name: "Automation", icon: Settings },
        { name: "GenAI Integration", icon: Zap },
        { name: "n8n", icon: SiN8N },
        { name: "Zapier", icon: SiZapier },
      ],
    },
    {
      name: "UI/UX Design",
      color: "from-pink-500 to-pink-600",
      skills: [
        { name: "Figma", icon: SiFigma },
        { name: "Adobe XD", icon: PenTool },
        { name: "Photoshop", icon: Paintbrush },
        { name: "Sketch", icon: SiSketch },
        { name: "Design Systems", icon: Palette },
        { name: "Prototyping", icon: Palette },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-20"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Section Title */}
          <motion.div variants={categoryVariants} className="mb-16 text-center">
            <SectionTitle
              title="Skills & Technologies"
              subtitle="A comprehensive overview of my technical expertise and tools I work with"
              align="center"
              gradient
            />
          </motion.div>

          {/* Skills Categories Grid */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={categoryVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className={`bg-linear-to-r ${category.color} p-6`}>
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="p-6">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-2 gap-4"
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 cursor-pointer group"
                      >
                        <div className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300">
                          <skill.icon className="text-gray-700" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 max-w-2xl text-center"
          >
            <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                💡 Constantly Learning
              </h4>
              <p className="text-gray-700">
                I'm passionate about staying up-to-date with the latest
                technologies and best practices. I'm always exploring new
                frameworks, tools, and methodologies to improve my craft and
                deliver better solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
