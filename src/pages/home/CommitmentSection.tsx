// Animation tools
import { motion } from "framer-motion";
import {
  Check,
  Droplets,
  Factory,
  Fuel,
  Leaf,
  Settings2,
  ShieldCheck,
  Stethoscope,
  TowerControl,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Card images
import image1 from "@/assets/home_assets/oil_fac.jpg";
import image2 from "@/assets/home_assets/image5.jpg";
import image3 from "@/assets/home_assets/build.jpg";

// This defines the shape of each commitment card.
type ServiceCard = {
  image: string;
  alt: string;
  title: string;
  eyebrow: string;
  summary: string;
  points: string[];
  featured?: boolean;
};

// Small highlight pills shown below the section intro.
const quickHighlights = ["LNG", "Renewable energy", "Environment", "Water"];

// Main cards shown in the commitment section.
const serviceCards: ServiceCard[] = [
  {
    image: image1,
    alt: "Oil and gas operations",
    title: "Oil & Gas",
    eyebrow: "Core market",
    summary: "Support across production, transport, storage, and supply.",
    points: [
      "LNG & CNG facilities",
      "Onshore pipelines and receiving terminals",
      "Onshore and offshore production facilities",
      "LPG skids and mobile filling stations",
      "Petroleum products supply",
      "Auto gas support solutions",
    ],
  },
  {
    image: image2,
    alt: "Power infrastructure and transmission",
    title: "Energy & Power",
    eyebrow: "Power sector",
    featured: true,
    summary:
      "Support across generation, transmission, and cleaner energy systems with disciplined technical delivery.",
    points: [
      "Renewable energy systems",
      "Gas turbine power plants",
      "Transmission network support",
      "Operational planning and technical guidance",
    ],
  },
  {
    image: image3,
    alt: "Manufacturing and infrastructure systems",
    title: "Manufacturing & Infrastructure",
    eyebrow: "Broader industries",
    summary:
      "Helping industrial clients improve reliability and systems delivery.",
    points: [
      "Environment",
      "Water and wastewater",
      "Transport systems",
      "Medicine and health support",
      "Research facilities",
      "Automation services",
    ],
  },
];

// Animation for the full card grid.
const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16 },
  },
};

// Animation for each card.
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Animation for each list group inside a card.
const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

// Animation for each list item inside a card.
const listItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// This picks a simple icon and color style for each bullet point.
const getPointStyle = (
  point: string,
  isFeatured: boolean,
): { icon: LucideIcon; iconClassName: string; badgeClassName: string } => {
  const label = point.toLowerCase();

  if (label.includes("renewable") || label.includes("environment")) {
    return {
      icon: Leaf,
      iconClassName: isFeatured ? "text-[#9ef5b0]" : "text-[#2f9e44]",
      badgeClassName: isFeatured ? "bg-[#12381c]" : "bg-[#e6f7ea]",
    };
  }

  if (label.includes("water") || label.includes("wastewater")) {
    return {
      icon: Droplets,
      iconClassName: isFeatured ? "text-[#8fd3ff]" : "text-[#1677c8]",
      badgeClassName: isFeatured ? "bg-[#0d2d46]" : "bg-[#e8f4ff]",
    };
  }

  if (label.includes("power") || label.includes("transmission")) {
    return {
      icon: Zap,
      iconClassName: isFeatured ? "text-[#ffd76a]" : "text-[#d99700]",
      badgeClassName: isFeatured ? "bg-[#3b2f0b]" : "bg-[#fff6db]",
    };
  }

  if (
    label.includes("gas") ||
    label.includes("lng") ||
    label.includes("cng") ||
    label.includes("lpg") ||
    label.includes("petroleum")
  ) {
    return {
      icon: Fuel,
      iconClassName: isFeatured ? "text-[#ffb38a]" : "text-[#e76f1f]",
      badgeClassName: isFeatured ? "bg-[#452313]" : "bg-[#fff0e8]",
    };
  }

  if (label.includes("research") || label.includes("technical")) {
    return {
      icon: ShieldCheck,
      iconClassName: isFeatured ? "text-[#b7c9ff]" : "text-[#516fc6]",
      badgeClassName: isFeatured ? "bg-[#1c254a]" : "bg-[#eef2ff]",
    };
  }

  if (label.includes("medicine") || label.includes("health")) {
    return {
      icon: Stethoscope,
      iconClassName: isFeatured ? "text-[#ffacc6]" : "text-[#d94878]",
      badgeClassName: isFeatured ? "bg-[#4b1d2f]" : "bg-[#fff0f5]",
    };
  }

  if (label.includes("transport")) {
    return {
      icon: TowerControl,
      iconClassName: isFeatured ? "text-[#cbb7ff]" : "text-[#7a52d1]",
      badgeClassName: isFeatured ? "bg-[#2e1f4f]" : "bg-[#f3edff]",
    };
  }

  if (label.includes("automation") || label.includes("systems")) {
    return {
      icon: Settings2,
      iconClassName: isFeatured ? "text-[#b7f0ff]" : "text-[#1388a5]",
      badgeClassName: isFeatured ? "bg-[#123946]" : "bg-[#e7fbff]",
    };
  }

  if (
    label.includes("production") ||
    label.includes("facility") ||
    label.includes("facilities")
  ) {
    return {
      icon: Factory,
      iconClassName: isFeatured ? "text-[#d6d6d6]" : "text-[#5f6b76]",
      badgeClassName: isFeatured ? "bg-[#2f363b]" : "bg-[#eff2f4]",
    };
  }

  if (label.includes("pipeline")) {
    return {
      icon: Waves,
      iconClassName: isFeatured ? "text-[#8fd3ff]" : "text-[#1677c8]",
      badgeClassName: isFeatured ? "bg-[#0d2d46]" : "bg-[#e8f4ff]",
    };
  }

  return {
    icon: Wrench,
    iconClassName: isFeatured ? "text-[#a9f3b1]" : "text-[#0c6b2f]",
    badgeClassName: isFeatured ? "bg-[#15361b]" : "bg-[#e8f6ec]",
  };
};

const CommitmentSection = () => {
  return (
    // Main commitment section wrapper
    <section className='border-t border-[#012402]/10 bg-[#ebf5ec] py-16 lg:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section heading and short introduction */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className='mx-auto max-w-5xl text-center'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0c6b2f]'>
            Our Commitment
          </p>
          <h2 className='mt-3 text-4xl font-extrabold tracking-tight text-[#012402] sm:text-5xl lg:text-6xl'>
            Professional support across the markets we serve
          </h2>
          <p className='mx-auto mt-5 max-w-4xl text-left text-base leading-7 text-[#012402]/80 sm:text-lg'>
            We offer multi-discipline services across Energy, Oil & Gas,
            Petrochemicals, Infrastructure, Power, Renewables, Manufacturing,
            Health, Education, Mining, and Information Technology. Our focus is
            clear delivery, dependable quality, and practical value.
          </p>

          {/* Quick market highlight tags */}
          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            {quickHighlights.map((item) => (
              <span
                key={item}
                className='inline-flex items-center gap-2 rounded-full border border-[#012402]/15 bg-white px-4 py-2 text-sm font-medium text-[#012402] shadow-sm'
              >
                <Check className='h-4 w-4 text-[#0c6b2f]' />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Commitment cards grid */}
        <motion.div
          className='mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {serviceCards.map((card) => {
            const isFeatured = Boolean(card.featured);

            return (
              // Individual service card
              <motion.article
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group flex h-full flex-col overflow-hidden rounded-[28px] border transition-all duration-300 ${
                  isFeatured
                    ? "border-[#0c6b2f]/20 bg-[#012402] shadow-[0_20px_45px_rgba(1,36,2,0.20)]"
                    : "border-[#012402]/10 bg-white shadow-[0_18px_40px_rgba(1,36,2,0.10)] hover:shadow-[0_24px_50px_rgba(1,36,2,0.16)]"
                }`}
              >
                {/* Card image and title area */}
                <div className='relative h-44 overflow-hidden sm:h-48'>
                  <img
                    src={card.image}
                    alt={card.alt}
                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                    loading='lazy'
                    decoding='async'
                    width={400}
                    height={192}
                  />
                  <div
                    className={`absolute inset-0 ${
                      isFeatured
                        ? "bg-gradient-to-t from-[#012402]/80 via-[#012402]/32 to-transparent"
                        : "bg-gradient-to-t from-[#012402]/78 via-[#012402]/38 to-transparent"
                    }`}
                  />

                  {/* Card eyebrow and title */}
                  <div className='absolute inset-x-0 bottom-0 p-5'>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                        isFeatured ? "text-[#d8ffe0]" : "text-white/80"
                      }`}
                    >
                      {card.eyebrow}
                    </p>
                    <h3 className='mt-2 text-2xl font-bold text-white sm:text-[1.75rem]'>
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Card body content */}
                <div className='flex flex-1 flex-col p-5'>
                  {/* Short card summary */}
                  <p
                    className={`text-left leading-7 ${
                      isFeatured
                        ? "text-sm text-white"
                        : "text-sm text-[#012402]/76"
                    }`}
                  >
                    {card.summary}
                  </p>

                  {/* Card bullet points */}
                  <motion.ul
                    variants={listVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    className='mt-4 space-y-2.5'
                  >
                    {card.points.map((point) => (
                      <motion.li
                        key={point}
                        variants={listItemVariants}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className={`flex items-start gap-3 text-sm ${
                          isFeatured ? "text-white" : "text-[#012402]/82"
                        }`}
                      >
                        {/* Bullet icon */}
                        {(() => {
                          const {
                            icon: PointIcon,
                            iconClassName,
                            badgeClassName,
                          } = getPointStyle(point, isFeatured);

                          return (
                            <motion.span
                              whileHover={{ scale: 1.08, rotate: 4 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className={`mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${badgeClassName}`}
                            >
                              <PointIcon
                                className={`h-4 w-4 ${iconClassName}`}
                              />
                            </motion.span>
                          );
                        })()}

                        {/* Bullet text */}
                        <span className='text-left leading-5'>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentSection;
