import { motion } from "framer-motion";
import { Cpu, Droplets, Factory, Leaf, Pickaxe, Zap } from "lucide-react";
import oilAndGasImage from "@/assets/industries/oil.jpg";
import energyImage from "@/assets/industries/grid.jpg";
import manufacturingImage from "@/assets/industries/constructs.jpg";
import miningImage from "@/assets/industries/mining.jpg";
import agricultureImage from "@/assets/industries/agric.jpg";
import technologyImage from "@/assets/industries/technology.jpg";

type Industry = {
  icon: typeof Droplets;
  title: string;
  description: string;
  image: string;
  alt: string;
  capabilities: string[];
};

const industries: Industry[] = [
  {
    icon: Droplets,
    title: "Oil & Gas",
    description:
      "Comprehensive solutions for upstream, midstream, and downstream operations including exploration, production, refining, and distribution.",
    image: oilAndGasImage,
    alt: "Offshore oil and gas installation",
    capabilities: [
      "Asset management & optimization",
      "Pipeline & infrastructure",
      "Reservoir engineering",
      "HSE & compliance",
    ],
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description:
      "Sustainable energy solutions covering renewable and traditional power generation, transmission, and distribution systems.",
    image: energyImage,
    alt: "Solar energy panels on a rooftop",
    capabilities: [
      "Renewable integration",
      "Grid modernization",
      "Energy storage solutions",
      "Utility operations support",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Infrastructure",
    description:
      "Operational support and engineering services for industrial facilities, public infrastructure, and performance-driven production environments.",
    image: manufacturingImage,
    alt: "Manufacturing and industrial infrastructure",
    capabilities: [
      "Process improvement",
      "Plant engineering support",
      "Infrastructure delivery",
      "Automation systems",
    ],
  },
  {
    icon: Pickaxe,
    title: "Mining",
    description:
      "Technical support for extraction, mineral processing, and project execution that improves reliability, safety, and production output.",
    image: miningImage,
    alt: "Mining operations and heavy industrial equipment",
    capabilities: [
      "Mineral processing",
      "Operational consulting",
      "Field execution support",
      "Production efficiency",
    ],
  },
  {
    icon: Leaf,
    title: "Agriculture",
    description:
      "Solutions that strengthen agro-processing, logistics, and sustainable production across modern agricultural value chains.",
    image: agricultureImage,
    alt: "Agricultural operations and sustainable farming",
    capabilities: [
      "Agro-processing",
      "Supply chain coordination",
      "Sustainable farming solutions",
      "Operations planning",
    ],
  },
  {
    icon: Cpu,
    title: "Information Technology",
    description:
      "Digital transformation and automation support that helps organizations modernize infrastructure and connect systems with confidence.",
    image: technologyImage,
    alt: "Digital systems and information technology infrastructure",
    capabilities: [
      "IT infrastructure",
      "Digital transformation",
      "Automation solutions",
      "Systems integration",
    ],
  },
];

const IndustriesShowcase = () => {
  return (
    <section className='bg-white py-14 sm:py-16 lg:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-10 max-w-4xl text-center sm:mb-14 lg:mb-16'
        >
          <p className='mx-auto max-w-fit text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
            Industry Coverage
          </p>
          <h2 className='mx-auto mt-3 max-w-fit justify-center  text-[2rem] font-bold tracking-tight text-[#081b09] sm:text-4xl md:text-5xl '>
            Expertise presented with a cleaner, premium structure
          </h2>
          <p className='mt-4 text-sm leading-7 text-[#415244] sm:text-base '>
            Each sector combines practical engineering experience, delivery
            discipline, and tailored support for high-value operations.
          </p>
        </motion.div>

        <div className='mx-auto flex max-w-7xl flex-col gap-12 md:gap-14 lg:gap-16'>
          {industries.map((industry, index) => {
            const reverseLayout = index % 2 === 1;
            const Icon = industry.icon;
            const textInitialX = reverseLayout ? 64 : -64;
            const imageInitialX = reverseLayout ? -64 : 64;

            return (
              <div
                key={industry.title}
                className='grid items-center gap-7 sm:gap-8 lg:grid-cols-2 lg:gap-12'
              >
                <motion.div
                  initial={{ opacity: 0, x: textInitialX, y: 24 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={reverseLayout ? "lg:order-2" : ""}
                >
                  <h3 className='mx-auto max-w-xl text-center text-[2.2rem] font-semibold tracking-tight text-[#012402] sm:text-4xl md:text-[3.05rem] md:leading-[1.08]'>
                    {industry.title}
                  </h3>

                  <p className='mt-4 max-w-xl text-[0.98rem] leading-7 text-[#334638] sm:mt-5 sm:text-[1.04rem] sm:leading-8'>
                    {industry.description}
                  </p>

                  <div className='mt-7 sm:mt-9'>
                    <p className='mb-4 text-base font-semibold text-[#012402] sm:mb-5 sm:text-lg'>
                      Key Capabilities:
                    </p>
                    <ul className='space-y-3 sm:space-y-4'>
                      {industry.capabilities.map((item, itemIndex) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: textInitialX * 0.55 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{
                            delay: 0.08 + itemIndex * 0.07,
                            duration: 0.72,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className='flex items-start gap-3 sm:gap-4 text-[#2f4233]'
                        >
                          <span className='mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#17a34a] sm:mt-3' />
                          <span className='text-[0.98rem] leading-7 sm:text-base'>
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: imageInitialX, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    delay: 0.08,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={reverseLayout ? "lg:order-1" : ""}
                >
                  <div className='relative overflow-hidden rounded-[1.5rem] shadow-[0_22px_46px_rgba(15,23,42,0.12)] sm:rounded-[1.7rem] lg:rounded-[1.9rem] lg:shadow-[0_28px_60px_rgba(15,23,42,0.14)]'>
                    <motion.img
                      src={industry.image}
                      alt={industry.alt}
                      loading='lazy'
                      decoding='async'
                      width={500}
                      height={390}
                      className='h-[240px] w-full object-cover sm:h-[300px] md:h-[340px] lg:h-[390px]'
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_38%,rgba(15,23,42,0.1)_100%)]' />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesShowcase;
