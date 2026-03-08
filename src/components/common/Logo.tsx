import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="drop-shadow-lg"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066ff" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
      </defs>

      {/* Outer glowing circle */}
      <motion.circle
        cx="20"
        cy="20"
        r="18"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        style={{ originX: "50%", originY: "50%" }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.055, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner glowing circle */}
      <circle cx="20" cy="20" r="15" fill="url(#gradient)" opacity="0.1" />

      {/* Central circle with gradient */}
      <motion.circle
        cx="20"
        cy="20"
        r="12"
        fill="url(#gradient)"
        filter="url(#glow)"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Letter A */}
      <text
        x="20"
        y="26"
        fontSize="16"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="system-ui"
      >
        A
      </text>
    </motion.svg>
  );
};

export default Logo;
