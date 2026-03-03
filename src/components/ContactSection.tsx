import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone as PhoneIcon } from "lucide-react";
import { useRef } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const dividerScale = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const ambientRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 sm:py-28 md:py-40 px-4 sm:px-5 md:px-4 overflow-hidden">
      {/* Rotating parallax ambient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] pointer-events-none"
        style={{
          rotate: ambientRotate,
          background: `radial-gradient(ellipse 70% 50%, hsl(280 60% 45% / 0.05), hsl(48 95% 55% / 0.025), transparent)`,
        }}
      />

      {/* Section top fade */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-5" />

      <motion.div
        className="divider-ember max-w-[200px] sm:max-w-xs md:max-w-2xl mx-auto mb-16 sm:mb-24 md:mb-36"
        style={{ scaleX: dividerScale, transformOrigin: "center" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 45, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14 md:mb-24"
        >
          <p className="font-montserrat text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase text-accent/60 mb-2 sm:mb-3 md:mb-4 font-medium">
            Locate the gate
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-7xl text-primary text-glow-red leading-[0.9] font-black">
            Find Us
          </h2>
          <motion.div
            className="divider-ember w-12 sm:w-16 md:w-32 mx-auto mt-4 sm:mt-6 md:mt-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6 sm:space-y-8 md:space-y-10"
        >
          <div className="flex items-start justify-center gap-3 sm:gap-4 px-2">
            <MapPin size={16} className="text-accent/45 mt-1 sm:mt-1.5 shrink-0 sm:w-[18px] sm:h-[18px]" />
            <p className="font-playfair text-sm sm:text-base md:text-2xl text-foreground/70 leading-relaxed italic">
              Rajiv Gandhi Salai, Old Mamallapuram Road,<br />
              Semmancheri, Chennai
            </p>
          </div>

          <a
            href="tel:04424502818"
            className="inline-flex items-center gap-2 sm:gap-3 text-muted-foreground/60 hover:text-primary transition-all duration-[600ms] group"
          >
            <PhoneIcon size={14} className="text-accent/35 group-hover:text-primary group-hover:scale-110 transition-all duration-[600ms] sm:w-[15px] sm:h-[15px]" />
            <span className="font-montserrat text-sm sm:text-base md:text-lg tracking-wider group-hover:tracking-[0.18em] transition-all duration-[600ms] font-light">
              044 2450 2818
            </span>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 sm:mt-28 md:mt-52 text-center"
      >
        <motion.div
          className="divider-ember w-12 sm:w-16 md:w-24 mx-auto mb-8 sm:mb-10 md:mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        <p className="font-display text-[10px] sm:text-xs md:text-sm text-muted-foreground/45 tracking-[0.25em] sm:tracking-[0.35em] font-bold">
          JEPPIAAR ENGINEERING COLLEGE
        </p>
        <p className="font-montserrat text-[9px] sm:text-[10px] md:text-xs text-muted-foreground/20 mt-2 sm:mt-3 tracking-[0.3em] sm:tracking-[0.45em] uppercase font-light">
          AI & ML · XENZO · Pratiyog'26
        </p>

        <div className="mt-6 sm:mt-8 md:mt-10 flex items-center justify-center gap-2 sm:gap-2.5">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full"
              animate={{
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2.5 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
              style={{
                background: i % 2 === 0 ? `hsl(48 95% 55% / 0.4)` : `hsl(280 60% 45% / 0.4)`,
              }}
            />
          ))}
        </div>

        <div className="h-12 sm:h-16 md:h-24" />
      </motion.footer>
    </section>
  );
};

export default ContactSection;
