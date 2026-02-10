import { motion } from "framer-motion";
import { MapPin, Phone as PhoneIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-5 md:px-4">
      <div className="divider-ember max-w-xs md:max-w-xl mx-auto mb-16 md:mb-24" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-2 md:mb-3">
            Locate the gate
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-primary text-glow-red">
            Find Us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center space-y-5 md:space-y-6"
        >
          <div className="flex items-start justify-center gap-2 md:gap-3">
            <MapPin size={15} className="text-primary/60 mt-1 shrink-0" />
            <p className="font-elegant text-base md:text-xl text-foreground/70 leading-relaxed">
              Rajiv Gandhi Salai, Old Mamallapuram Road,<br />
              Semmancheri, Chennai
            </p>
          </div>

          <a
            href="tel:04424502818"
            className="inline-flex items-center gap-2 md:gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <PhoneIcon size={13} className="text-primary/50 group-hover:text-primary transition-colors" />
            <span className="font-body text-sm md:text-base tracking-wider">044 2450 2818</span>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-24 md:mt-32 text-center"
      >
        <div className="divider-ember w-16 md:w-20 mx-auto mb-6 md:mb-8" />
        
        <p className="font-display text-[10px] md:text-xs text-muted-foreground/60 tracking-[0.2em] md:tracking-[0.3em]">
          JEPPIAAR ENGINEERING COLLEGE
        </p>
        <p className="font-body text-[8px] md:text-[10px] text-muted-foreground/30 mt-2 tracking-[0.3em] md:tracking-[0.4em] uppercase">
          AI & ML · XENZO · Pratiyog'26
        </p>

        <div className="mt-5 md:mt-6 flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-primary/20 animate-ember-glow"
              style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${2 + i * 0.3}s` }}
            />
          ))}
        </div>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
