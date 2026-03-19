import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HardHat, ClipboardCheck, Cog, FlaskConical, Briefcase, BarChart3 } from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "EPCI Consultancy & Services",
    description:
      "GEC provides technical, safety and quality assurance services during construction activities. We offer comprehensive Engineering, Procurement, Construction, and Installation consultancy to ensure project success from concept to commissioning.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "GEC has an extensive track record in managing a wide range of projects and sub-contractors to deliver fit-for-purpose solutions. Our project management expertise ensures on-time, on-budget delivery with rigorous scheduling and risk management.",
  },
  {
    icon: Cog,
    title: "Engineering Services",
    description:
      "GEC works closely with clients to fully understand their objectives and drivers in order to identify the optimal technical and commercial solutions for field development. From feasibility studies to detailed engineering design.",
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    description:
      "GEC focuses on providing design-by-analysis engineering guidance using computational tools such as Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD) with access to material testing laboratories and the latest CAE software.",
  },
  {
    icon: Briefcase,
    title: "Technical Advisory & Business Processes",
    description:
      "GEC consulting team have the expertise and resources to complete the entire process of setting up and managing your business in the most efficient and cost-effective manner. Strategic guidance for operational excellence.",
  },
  {
    icon: BarChart3,
    title: "Products Management & Market Intelligence",
    description:
      "GEC data gathering helps unlock opportunities for organisations to shape change. We provide market research and analytics for effective business decision-making, empowering data-driven strategic decisions.",
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent font-display text-sm font-semibold uppercase tracking-widest">
              Our Services
            </span>
            <div className="w-10 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Our Specialities &{" "}
            <span className="text-accent">Popular Favourites</span>
          </h2>
          <p className="text-muted-foreground">
            We promise the best quality across all our multi-discipline services.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((s, i) => (
            <motion.button
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              onClick={() => setActive(i)}
              className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {s.title}
            </motion.button>
          ))}
        </div>

        {/* Active service detail */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-10 shadow-xl border border-border text-center"
        >
          {(() => {
            const Icon = services[active].icon;
            return (
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            );
          })()}
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            {services[active].title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {services[active].description}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                onMouseEnter={() => setActive(i)}
                className={`p-6 rounded-xl cursor-pointer transition-all group ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-xl scale-[1.03]"
                    : "bg-card border border-border hover:shadow-lg"
                }`}
              >
                <Icon
                  className={`w-6 h-6 mb-3 transition-colors ${
                    active === i ? "text-accent" : "text-primary"
                  }`}
                />
                <h4
                  className={`font-display font-semibold text-sm ${
                    active === i ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {s.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
