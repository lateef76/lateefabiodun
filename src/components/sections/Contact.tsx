import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  MessageCircle,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";
import SectionTitle from "@components/ui/SectionTitle";

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
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  const aiTopics = [
    {
      label: "Hire Me",
      subject: "Job Opportunity",
      message: (name: string) =>
        `Hi Abiodun,\n\nMy name is ${name || "[Your Name]"}. I came across your portfolio and I'm impressed by your work. We have an exciting opportunity that I believe aligns with your skills and experience.\n\nI'd love to schedule a call to discuss this further. When would be a convenient time for you?\n\nBest regards`,
    },
    {
      label: "Project Collab",
      subject: "Project Collaboration",
      message: (name: string) =>
        `Hey Abiodun,\n\nI'm ${name || "[Your Name]"} and I have a project idea that I think could benefit from your expertise. I'd love to explore the possibility of collaborating together.\n\nCould we set up a time to discuss the project scope and how we might work together?\n\nCheers`,
    },
    {
      label: "Freelance Work",
      subject: "Freelance Project Inquiry",
      message: (name: string) =>
        `Hello Abiodun,\n\nI'm ${name || "[Your Name]"}. I'm looking for a skilled developer to help with a freelance project. After reviewing your portfolio, I believe you'd be a great fit.\n\nHere's a brief overview of what I need:\n- [Describe your project]\n- [Timeline expectations]\n- [Budget range]\n\nLooking forward to hearing from you!`,
    },
    {
      label: "Say Hello",
      subject: "Just Saying Hello!",
      message: (name: string) =>
        `Hi Abiodun!\n\nI'm ${name || "[Your Name]"}. I stumbled upon your portfolio and really liked what I saw! Your projects are impressive and your skills are top-notch.\n\nJust wanted to reach out and connect. Keep up the amazing work!\n\nBest wishes`,
    },
  ];

  const handleAiTopicClick = (topic: (typeof aiTopics)[number]) => {
    setFormData((prev) => ({
      ...prev,
      subject: topic.subject,
      message: topic.message(prev.name),
    }));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors.subject;
      delete newErrors.message;
      return newErrors;
    });
  };

  const handleAiAssist = () => {
    if (!formData.subject.trim()) return;
    setIsAiGenerating(true);

    // Simulate a brief "thinking" delay for UX
    setTimeout(() => {
      const name = formData.name || "[Your Name]";
      const subject = formData.subject.trim().toLowerCase();

      let generated = "";

      if (
        subject.includes("hire") ||
        subject.includes("job") ||
        subject.includes("opportunity")
      ) {
        generated = `Hi Abiodun,\n\nMy name is ${name}. I'd like to discuss a potential role that matches your skillset. Your portfolio demonstrates exactly the kind of expertise we're looking for.\n\nWould you be available for a quick chat this week?\n\nBest regards`;
      } else if (
        subject.includes("collab") ||
        subject.includes("partner") ||
        subject.includes("together")
      ) {
        generated = `Hey Abiodun,\n\nI'm ${name}. I have an exciting project and I'm looking for a talented developer to collaborate with. Your work caught my eye and I think we'd make a great team.\n\nLet me know if you're interested and we can discuss the details!\n\nCheers`;
      } else if (
        subject.includes("freelance") ||
        subject.includes("project") ||
        subject.includes("build") ||
        subject.includes("website") ||
        subject.includes("app")
      ) {
        generated = `Hello Abiodun,\n\nI'm ${name}. I need help building a ${subject} and your portfolio shows you have the right skills for the job.\n\nHere's what I'm looking for:\n- [Key features needed]\n- [Expected timeline]\n- [Any specific technologies]\n\nLooking forward to discussing this with you!`;
      } else if (
        subject.includes("hello") ||
        subject.includes("hi") ||
        subject.includes("hey")
      ) {
        generated = `Hi Abiodun!\n\nI'm ${name}. Just wanted to reach out after seeing your portfolio. Really impressive work across the board!\n\nWould love to stay connected. Keep building awesome things!\n\nBest wishes`;
      } else {
        generated = `Hi Abiodun,\n\nI'm ${name}. I'm reaching out regarding "${formData.subject}". I came across your portfolio and would love to connect with you about this.\n\nPlease let me know a good time to discuss further.\n\nBest regards`;
      }

      setFormData((prev) => ({ ...prev, message: generated }));
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.message;
        return newErrors;
      });
      setIsAiGenerating(false);
    }, 800);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lateefabiodun76@gmail.com",
      link: "mailto:lateefabiodun76@gmail.com",
      color: "bg-red-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+233 53 234 4630",
      link: "https://wa.me/233532344630",
      color: "bg-green-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cape Coast, Ghana - UCC",
      link: "https://maps.google.com/?q=University+of+Cape+Coast+Ghana",
      color: "bg-purple-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/lateef76",
      label: "GitHub",
      color: "hover:bg-gray-900 hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lateef-abiodun-7813a4354",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/233532344630",
      label: "WhatsApp",
      color: "hover:bg-green-500 hover:text-white",
    },
    {
      icon: Mail,
      href: "mailto:lateefabiodun76@gmail.com",
      label: "Email",
      color: "hover:bg-red-500 hover:text-white",
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

    try {
      const response = await fetch("https://formspree.io/f/mnjgnwve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

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

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 pb-20"
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
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <SectionTitle
              title="Get In Touch"
              subtitle="Have a project in mind? Let's work together!"
              align="center"
              gradient
            />
          </motion.div>

          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-8">
                  I'm always interested in hearing about new opportunities,
                  collaborations, or just having a chat about web development.
                </p>

                {/* Contact Info Items */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className={`p-3 rounded-lg ${info.color}`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{info.label}</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">
                    Find me on
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl bg-gray-100 text-gray-700 transition-all duration-300 ${social.color}`}
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resume Download Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 shadow-lg text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-1">
                      Download My Resume
                    </h4>
                    <p className="text-blue-100 text-sm mb-4">
                      Get a detailed overview of my skills, experience, and
                      projects.
                    </p>
                    <a
                      href="/resume.pdf"
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Me a Message
                </h3>

                {/* AI Quick Topics */}
                <div className="mb-5">
                  <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                    AI Assist — pick a topic to auto-fill
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {aiTopics.map((topic) => (
                      <motion.button
                        key={topic.label}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAiTopicClick(topic)}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-all duration-200"
                      >
                        {topic.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your name"
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
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your email"
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
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter subject"
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
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message *
                      </label>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAiAssist}
                        disabled={!formData.subject.trim() || isAiGenerating}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                        title={
                          !formData.subject.trim()
                            ? "Enter a subject first"
                            : "Generate a message with AI"
                        }
                      >
                        {isAiGenerating ? (
                          <>
                            <div className="w-3 h-3 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
                            Writing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3" />
                            AI Assist
                          </>
                        )}
                      </motion.button>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border resize-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Write your message here..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={
                      formStatus === "loading" || formStatus === "success"
                    }
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                      formStatus === "success"
                        ? "bg-green-600"
                        : formStatus === "loading"
                          ? "bg-blue-400 cursor-wait"
                          : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {formStatus === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : formStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 text-sm border border-green-200"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Thank you! Your message has been sent successfully. I'll
                      get back to you soon!
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 text-sm border border-red-200"
                    >
                      <AlertCircle className="w-4 h-4" />
                      Oops! Something went wrong. Please try again later.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 w-full max-w-2xl text-center"
          >
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-gray-700 text-sm">
                Based in Cape Coast, Ghana • University of Cape Coast •
                Available for remote work worldwide
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Typically replies within 24 hours
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
