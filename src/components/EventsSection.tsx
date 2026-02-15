import { motion } from "framer-motion";

const events = [
  {
    name: "Group Dance",
    type: "The Velvet Crew",
    tagline: "4–12 members · Any style · ₹500 per team",
    fee: "₹500",
    number: "01",
  },
  {
    name: "Ramp Walk",
    type: "The Lavish Lane",
    tagline: "8–12 members · Themed fashion · ₹1000 per team",
    fee: "₹1000",
    number: "02",
  },
];

const EventsSection = () => {
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfSpTsRhZDTRFCRvkTSksLzRy-Kg0-68jwW3PStLwkNfrXeng/viewform";

  return (
    <section id="events" className="relative py-24 md:py-36 px-5 md:px-4">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[700px] h-[250px] md:h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse, hsl(280 60% 45% / 0.06), hsl(48 95% 55% / 0.03), transparent)` }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-24"
        >
          <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-accent/70 mb-2 md:mb-3">
            What awaits you
          </p>
          <h2 className="font-display text-4xl md:text-7xl text-primary text-glow-red">
            Events
          </h2>
          <div className="divider-ember w-20 md:w-32 mt-4 md:mt-6" />
        </motion.div>

        <div className="space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {i === 0 && <div className="divider-ember" />}

              {/* Desktop layout */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden md:grid grid-cols-12 items-center py-10 border-b border-border/30 hover:border-accent/40 transition-all duration-700 relative overflow-hidden"
              >
                {/* Hover sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"
                  style={{ background: `linear-gradient(90deg, hsl(280 60% 45% / 0.05), hsl(48 95% 55% / 0.03), transparent)` }}
                />
                <div className="col-span-1 relative z-10">
                  <span className="font-body text-sm text-accent/40 tracking-widest">
                    {event.number}
                  </span>
                </div>
                <div className="col-span-2 relative z-10">
                  <div className="font-cinzel text-xl text-primary font-bold">
                    {event.fee}
                  </div>
                  <div className="font-body text-sm text-muted-foreground/60">per team</div>
                </div>
                <div className="col-span-4 relative z-10">
                  <h3 className="font-cinzel text-3xl text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
                    {event.name}
                  </h3>
                  <p className="font-body text-sm tracking-[0.2em] uppercase text-accent/50 mt-1 group-hover:text-accent/80 transition-colors duration-500">
                    {event.type}
                  </p>
                </div>
                <div className="col-span-3 relative z-10">
                  <p className="font-elegant italic text-base text-foreground/50 group-hover:text-foreground/70 transition-colors duration-500">
                    "{event.tagline}"
                  </p>
                </div>
                <div className="col-span-2 flex justify-end relative z-10">
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-primary border border-primary/30 px-5 py-2.5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500">
                    Register →
                  </span>
                </div>
              </a>

              {/* Mobile layout */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group md:hidden block py-7 border-b border-border/20 hover:border-accent/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, hsl(280 60% 45% / 0.05), transparent)` }}
                />
                <div className="flex items-baseline justify-between mb-3 relative z-10">
                  <div className="flex items-baseline gap-3">
                    <span className="font-body text-xs text-accent/30 tracking-widest">
                      {event.number}
                    </span>
                    <h3 className="font-cinzel text-xl text-foreground group-hover:text-primary transition-colors duration-500">
                      {event.name}
                    </h3>
                  </div>
                  <span className="font-cinzel text-sm text-primary font-bold">
                    {event.fee}
                  </span>
                </div>

                <div className="flex items-center justify-between pl-8 relative z-10">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-accent/40">
                    {event.type}
                  </p>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-4 py-1.5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    Register →
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground/50 font-body tracking-wider">
            Click any event to register · opens Google Form
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
