"use client"
import { motion, useScroll } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ y: scrollYProgress }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;