import { motion } from "framer-motion";
import Hero from "@components/sections/Hero";
import About from "@components/sections/About";
import Projects from "@components/sections/Projects";
import Experience from "@components/sections/Experience";
import Skills from "@components/sections/Skills";
import Contact from "@components/sections/Contact";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </motion.div>
  );
};

export default Home;
