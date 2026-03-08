import { motion } from "framer-motion";
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUp,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/lateef76",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lateef-abiodun-7813a4354",
      label: "LinkedIn",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/233532344630",
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:lateefabiodun76@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-950 text-white mt-auto overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="h-1 w-full bg-linear-to-r from-blue-600 via-purple-600 to-blue-600" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <Code2 className="w-7 h-7 text-blue-400" />
              <h3 className="text-2xl font-bold tracking-tight">
                Abiodun<span className="text-blue-400">.</span>dev
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Full-stack developer passionate about crafting beautiful,
              performant web experiences. Based in Cape Coast, Ghana — open to
              remote opportunities worldwide.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Cape Coast, Ghana • University of Cape Coast</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-gray-800/80 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + CTA */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:lateefabiodun76@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                lateefabiodun76@gmail.com
              </a>
              <a
                href="https://wa.me/233532344630"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                +233 53 234 4630
              </a>
            </div>

            {/* CTA */}
            <div className="mt-6 p-5 rounded-xl bg-gray-800/50 border border-gray-800">
              <p className="text-sm text-gray-300 mb-3">
                Have a project in mind?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Let's Talk
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Abiodun Lateef. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-xs sm:text-sm flex items-center">
                Built with{" "}
                <Heart className="w-3.5 h-3.5 mx-1 text-red-500 fill-current" />{" "}
                using React & Tailwind
              </p>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
