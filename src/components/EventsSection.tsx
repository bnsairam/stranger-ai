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
    <section id="events" className="relative py-20 md:py-32 px-5 md:px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[200px] md:h-[300px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-2 md:mb-3">
            What awaits you
          </p>
          <h2 className="font-display text-3xl md:text-6xl text-primary text-glow-red">
            Events
          </h2>
        </motion.div>

        <div className="space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {i === 0 && <div className="divider-ember" />}

              {/* Desktop layout – clickable */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden md:grid grid-cols-12 items-center py-10 border-b border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 cursor-pointer"
              >
                <div className="col-span-1">
                  <span className="font-body text-xs text-muted-foreground/50 tracking-widest">
                    {event.number}
                  </span>
                </div>
                <div className="col-span-2">
                  <div className="font-cinzel text-base text-primary/80 font-semibold">
                    {event.fee}
                  </div>
                  <div className="font-body text-xs text-muted-foreground/50">per team</div>
                </div>
                <div className="col-span-4">
                  <h3 className="font-cinzel text-2xl text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
                    {event.name}
                  </h3>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground/60 mt-1">
                    {event.type}
                  </p>
                </div>
                <div className="col-span-4">
                  <p className="font-elegant italic text-sm text-muted-foreground/60 group-hover:text-muted-foreground/90 transition-colors duration-500">
                    "{event.tagline}"
                  </p>
                </div>
                <div className="col-span-1 flex justify-end">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_12px_hsl(3_100%_50%/0.6)] transition-all duration-500" />
                </div>
              </a>

              {/* Mobile layout – stacked card, clickable */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group md:hidden block py-6 border-b border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-body text-[10px] text-muted-foreground/40 tracking-widest">
                      {event.number}
                    </span>
                    <h3 className="font-cinzel text-lg text-foreground group-hover:text-primary transition-colors duration-500">
                      {event.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-cinzel text-xs text-primary/80 font-semibold">
                      {event.fee}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pl-8">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60">
                    {event.type}
                  </p>
                  <p className="font-elegant italic text-xs text-muted-foreground/50 group-hover:text-muted-foreground/80 transition-colors duration-500">
                    {event.tagline}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Optional: small hint text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground/70">
            Click any event to register → opens registration form
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
