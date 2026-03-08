import { motion } from "framer-motion";
import {
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
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
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary-900 text-white mt-auto">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              &lt;YourName /&gt;
            </h3>
            <p className="text-secondary-400 text-sm sm:text-base leading-relaxed">
              Creating beautiful and functional web experiences. Let's build
              something amazing together.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-secondary-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-secondary-400">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Your City, Country</span>
              </li>
              <li className="flex items-center space-x-3 text-secondary-400">
                <Phone className="w-5 h-5 shrink-0" />
                <span className="text-sm sm:text-base">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3 text-secondary-400">
                <Mail className="w-5 h-5 shrink-0" />
                <a
                  href="mailto:your.email@example.com"
                  className="text-sm sm:text-base hover:text-primary-400 transition-colors"
                >
                  your.email@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter or Additional Info */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-secondary-400 text-sm sm:text-base">
              Subscribe for updates on new projects and articles.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-secondary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white text-sm sm:text-base"
              />
              <button
                type="submit"
                className="px-4 py-2 sm:px-6 sm:py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-secondary-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} YourName. All rights reserved.
            </p>
            <p className="text-secondary-400 text-xs sm:text-sm flex items-center">
              Made with{" "}
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 text-red-500 fill-current" />{" "}
              using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
