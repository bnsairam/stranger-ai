import { motion } from "framer-motion";
import { MapPin, Phone as PhoneIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-36 px-5 md:px-4">
      <div className="divider-ember max-w-xs md:max-w-xl mx-auto mb-20 md:mb-28" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-18"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-accent/70 mb-2 md:mb-3">
            Locate the gate
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-primary text-glow-red">
            Find Us
          </h2>
          <div className="divider-ember w-16 md:w-24 mx-auto mt-4 md:mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center space-y-6"
        >
          <div className="flex items-start justify-center gap-3">
            <MapPin size={18} className="text-accent/60 mt-1 shrink-0" />
            <p className="font-elegant text-lg md:text-2xl text-foreground/80 leading-relaxed">
              Rajiv Gandhi Salai, Old Mamallapuram Road,<br />
              Semmancheri, Chennai
            </p>
          </div>

          <a
            href="tel:04424502818"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <PhoneIcon size={15} className="text-accent/50 group-hover:text-primary transition-colors" />
            <span className="font-body text-base md:text-lg tracking-wider">044 2450 2818</span>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-28 md:mt-36 text-center"
      >
        <div className="divider-ember w-16 md:w-20 mx-auto mb-8" />

        <p className="font-display text-xs md:text-sm text-muted-foreground/60 tracking-[0.25em]">
          JEPPIAAR ENGINEERING COLLEGE
        </p>
        <p className="font-body text-[10px] md:text-xs text-muted-foreground/30 mt-2 tracking-[0.4em] uppercase">
          AI & ML · XENZO · Pratiyog'26
        </p>

        <div className="mt-6 flex items-center justify-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full animate-ember-glow"
              style={{
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2 + i * 0.3}s`,
                background: i % 2 === 0 ? `hsl(48 95% 55% / 0.4)` : `hsl(280 60% 45% / 0.4)`,
              }}
            />
          ))}
        </div>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
