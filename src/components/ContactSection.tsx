import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone as PhoneIcon } from "lucide-react";
import { useRef } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const dividerScale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-44 px-5 md:px-4 overflow-hidden">
      {/* Parallax ambient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, hsl(280 60% 45% / 0.04), hsl(48 95% 55% / 0.02), transparent)`,
        }}
      />

      <motion.div
        className="divider-ember max-w-xs md:max-w-xl mx-auto mb-24 md:mb-32"
        style={{ scaleX: dividerScale, transformOrigin: "center" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-accent/70 mb-3 md:mb-4">
            Locate the gate
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-primary text-glow-red leading-[0.9]">
            Find Us
          </h2>
          <motion.div
            className="divider-ember w-16 md:w-28 mx-auto mt-5 md:mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-8"
        >
          <div className="flex items-start justify-center gap-3">
            <MapPin size={18} className="text-accent/50 mt-1.5 shrink-0" />
            <p className="font-elegant text-lg md:text-2xl text-foreground/75 leading-relaxed">
              Rajiv Gandhi Salai, Old Mamallapuram Road,<br />
              Semmancheri, Chennai
            </p>
          </div>

          <a
            href="tel:04424502818"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-500 group"
          >
            <PhoneIcon size={15} className="text-accent/40 group-hover:text-primary transition-colors duration-500" />
            <span className="font-body text-base md:text-lg tracking-wider group-hover:tracking-[0.15em] transition-all duration-500">
              044 2450 2818
            </span>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mt-32 md:mt-44 text-center"
      >
        <motion.div
          className="divider-ember w-16 md:w-20 mx-auto mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        <p className="font-display text-xs md:text-sm text-muted-foreground/50 tracking-[0.3em]">
          JEPPIAAR ENGINEERING COLLEGE
        </p>
        <p className="font-body text-[10px] md:text-xs text-muted-foreground/25 mt-3 tracking-[0.4em] uppercase">
          AI & ML · XENZO · Pratiyog'26
        </p>

        <div className="mt-8 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full animate-ember-glow"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2.5 + i * 0.3}s`,
                background: i % 2 === 0 ? `hsl(48 95% 55% / 0.35)` : `hsl(280 60% 45% / 0.35)`,
              }}
            />
          ))}
        </div>

        <div className="h-20" />
      </motion.footer>
    </section>
  );
};

export default ContactSection;
