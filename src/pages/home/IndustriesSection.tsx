import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplets, Zap, Factory, Leaf, Pickaxe, Cpu } from "lucide-react";

const industries = [
  {
    icon: Droplets,
    title: "Oil & Gas",
    items: [
      "LNG & CNG facilities",
      "Onshore Pipelines & Receiving Terminals",
      "Onshore / Offshore Oil & Gas Production Facilities",
      "LPG Skids",
      "Mobile Filling Stations",
      "Petroleum Products Supply",
    ],
  },
  {
    icon: Zap,
    title: "Energy & Power",
    items: [
      "Renewable energy",
      "Gas turbine based powerplants",
      "Transmission networks",
      "Auto Gas",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Infrastructure",
    items: [
      "Environment",
      "Water & waste water",
      "Transport",
      "Medicine",
      "Research",
      "Automation",
    ],
  },
  {
    icon: Pickaxe,
    title: "Mining",
    items: [
      "Mineral processing",
      "Resource extraction",
      "Operational consulting",
    ],
  },
  {
    icon: Leaf,
    title: "Agriculture",
    items: [
      "Agro-processing",
      "Supply chain management",
      "Sustainable farming solutions",
    ],
  },
  {
    icon: Cpu,
    title: "Information Technology",
    items: [
      "IT infrastructure",
      "Digital transformation",
      "Automation solutions",
    ],
  },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="industries"
      className="py-20 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-10 h-px bg-[#012402]" />
            <span className="text-[#012402] text-sm font-semibold uppercase tracking-widest">
              Our Industries
            </span>
            <div className="w-10 h-px bg-[#012402]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#012402] leading-tight mb-4">
            We Serve{" "}
            <span className="text-[#012402]">Key Industries</span>
          </h2>
          <p className="text-[#012402]/70">
            We offer multi-discipline services in the following key markets:
            Energy / Oil & Gas, Petrochemicals, Infrastructures, Power, Renewables,
            Manufacturing, Health, Education, Mining, and Information Technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.3 + i * 0.14 }}
                className="group bg-white rounded-xl p-8 border border-[#012402]/10 hover:shadow-xl transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ebf5ec] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#ebf5ec] flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-[#012402] transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-[#012402] mb-3">
                    {ind.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {ind.items.map((item) => (
                      <li
                        key={item}
                        className="text-[#012402]/70 text-sm flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#012402] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
