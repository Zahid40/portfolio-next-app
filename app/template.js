"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
    variants={{
        hidden: { opacity: 0, translateY: 90 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 8,
        delay: 0.2,
        stiffness: 80, 
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
