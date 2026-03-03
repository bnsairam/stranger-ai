import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative">
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
      className="section-glow-line max-w-4xl mx-auto"
    />
  </div>
);

export default SectionDivider;
