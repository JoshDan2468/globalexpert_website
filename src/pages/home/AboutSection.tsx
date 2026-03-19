import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";

const locations = [
  "Lagos, Nigeria",
  "Maputo, Mozambique",
  "Freetown, Sierra Leone",
  "Accra, Ghana",
  "Windhoek, Namibia",
  "Houston, Texas, USA",
  "Oklahoma City, Oklahoma, USA",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent font-display text-sm font-semibold uppercase tracking-widest">
                Welcome To
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Global Experts{" "}
              <span className="text-accent">Consultoria</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              We are a global company with presence in Lagos, Nigeria; Maputo,
              Mozambique; Freetown, Sierra Leone; Accra, Ghana; Windhoek,
              Namibia; Houston, Texas; Oklahoma City, Oklahoma (USA) and other
              Africa countries.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Incorporated to engage in the provision of: Engineering, Project
              Management, Market Research, Bid Administration, Health,
              Information Technology, Registration, Procurement, Automation,
              Product Management and other services globally.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our focus is to provide world class Engineering, Project
              Management, Asset Integrity and Operations & Maintenance, Product
              Management and Consultancy solutions to our clients.
            </p>

            {/* Global presence */}
            <div>
              <h4 className="font-display font-semibold text-foreground text-sm mb-3 uppercase tracking-wider">
                Global Presence
              </h4>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc, i) => (
                  <motion.span
                    key={loc}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/10"
                  >
                    {loc}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutBg}
                alt="GEC engineering team reviewing project blueprints on site"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-6 shadow-xl">
              <div className="text-accent font-display font-bold text-xl">
                GExperts
              </div>
              <div className="text-primary-foreground/70 text-sm">
                Consultoria Limited
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
