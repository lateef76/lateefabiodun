import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import SectionTitle from "@components/ui/SectionTitle";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (234) 567-890",
      link: "tel:+1234567890",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco+CA",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
      username: "@yourusername",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      username: "yourusername",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      username: "@yourusername",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
      username: "@yourusername",
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus("loading");

    // Simulate form submission
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (_error) {
      setFormStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
      id="contact"
      className="section-padding bg-white dark:bg-secondary-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
          align="center"
          gradient
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                Let's Connect
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 text-sm sm:text-base mb-8">
                I'm always interested in hearing about new opportunities,
                collaborations, or just having a chat about web development.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, _index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`p-3 rounded-lg bg-linear-to-br ${info.color}`}
                    >
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-400">
                        {info.label}
                      </p>
                      <p className="text-sm sm:text-base font-medium text-secondary-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-4">
                  Follow me on social media
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, _index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className="p-2 sm:p-3 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 dark:hover:bg-primary-600 transition-all duration-300">
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-700 dark:text-secondary-300 group-hover:text-white transition-colors" />
                      </div>
                      {/* Tooltip */}
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-secondary-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.username}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    Abiodun Lateef *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-lg border
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      bg-white dark:bg-secondary-800
                      text-secondary-900 dark:text-white
                      transition-all duration-300
                      ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-secondary-300 dark:border-secondary-700"
                      }
                    `}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-lg border
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      bg-white dark:bg-secondary-800
                      text-secondary-900 dark:text-white
                      transition-all duration-300
                      ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-secondary-300 dark:border-secondary-700"
                      }
                    `}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-lg border
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      bg-white dark:bg-secondary-800
                      text-secondary-900 dark:text-white
                      transition-all duration-300
                      ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-500"
                          : "border-secondary-300 dark:border-secondary-700"
                      }
                    `}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`
                      w-full px-4 py-3 rounded-lg border resize-none
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      bg-white dark:bg-secondary-800
                      text-secondary-900 dark:text-white
                      transition-all duration-300
                      ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-secondary-300 dark:border-secondary-700"
                      }
                    `}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={formStatus === "loading"}
                  icon={
                    formStatus === "success" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                  iconPosition="right"
                  disabled={
                    formStatus === "loading" || formStatus === "success"
                  }
                >
                  {formStatus === "success" ? "Message Sent!" : "Send Message"}
                </Button>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Thank you! Your message has been sent successfully. I'll get
                    back to you soon!
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg flex items-center gap-2 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Oops! Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>
        </motion.div>

        {/* Map or Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 sm:mt-12"
        >
          <Card className="p-4 sm:p-6 text-center">
            <p className="text-secondary-600 dark:text-secondary-400 text-sm sm:text-base">
              📍 Based in San Francisco, CA • Available for remote work
              worldwide
            </p>
            <p className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-500 mt-2">
              Typically replies within 24-48 hours
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
