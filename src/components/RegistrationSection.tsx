import { motion } from "framer-motion";

const RegistrationSection = () => {
  return (
    <section id="register" className="relative py-20 md:py-32 px-5 md:px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[200px] md:h-[300px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12 text-center"
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-2 md:mb-3">
            Be a part of it
          </p>
          <h2 className="font-display text-3xl md:text-6xl text-primary text-glow-red mb-4">
            Register
          </h2>
          <p className="font-body text-foreground/60 text-sm md:text-base tracking-wider">
            Fill in the form below to register your team for Pratiyog 2K26
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-stranger p-1 md:p-2"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            className="w-full min-h-[800px] md:min-h-[1200px] bg-transparent"
            title="Pratiyog 2K26 Registration Form"
            style={{ colorScheme: "normal" }}
          >
            Loading…
          </iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
