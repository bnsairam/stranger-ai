import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const AgendaSection = () => {
  return (
    <section id="agenda" className="relative py-20 sm:py-28 md:py-36 px-4 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={itemVariants} className="mb-10 sm:mb-14 md:mb-20">
          <p className="font-montserrat text-[10px] sm:text-xs md:text-sm tracking-[0.4em] uppercase text-accent/60 mb-2 sm:mb-4 font-medium">
            Full Schedule
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-7xl text-primary text-glow-gold leading-[0.9] font-black">
            Agenda
          </h2>
          <motion.div
            className="divider-ember w-16 sm:w-20 md:w-36 mt-4 sm:mt-6 md:mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full rounded-lg overflow-hidden neon-border-gold"
          style={{
            boxShadow: "0 0 40px hsl(275 70% 55% / 0.08), 0 0 80px hsl(48 95% 55% / 0.04)",
          }}
        >
          <iframe
            src="/agenda.pdf"
            title="PRATIYOG 2K26 Agenda"
            className="w-full bg-black/20"
            style={{ height: "80vh", minHeight: "500px" }}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-center"
        >
          <a
            href="/agenda.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-xs sm:text-sm tracking-widest uppercase text-primary/70 hover:text-primary transition-colors duration-300"
          >
            Open full agenda ↗
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AgendaSection;
