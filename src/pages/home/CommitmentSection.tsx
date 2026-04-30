import { motion } from "framer-motion";
import {
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
} from "@/lib/icons";
import image1 from "@/assets/home_assets/oil_fac.jpg";
import image2 from "@/assets/home_assets/image5.jpg";
import image3 from "@/assets/home_assets/build.jpg";

type CommitmentItem = {
  image: string;
  alt: string;
  title: string;
  eyebrow: string;
  summary: string;
  details: string;
  points: string[];
};

const commitmentItems: CommitmentItem[] = [
  {
    image: image1,
    alt: "Oil and gas operations",
    title: "Oil & Gas",
    eyebrow: "Core market",
    summary:
      "We support clients across production, transport, storage, and supply with practical technical expertise and dependable delivery discipline.",
    details:
      "Our oil and gas commitment covers LNG and CNG infrastructure, onshore pipelines, receiving terminals, offshore and onshore production facilities, LPG systems, and petroleum product supply support built around operational reliability.",
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
    summary:
      "We contribute to stronger generation, transmission, and cleaner energy systems with disciplined technical planning and project support.",
    details:
      "Our teams help across gas turbine power plants, transmission networks, renewable energy systems, and broader operational planning where technical guidance and execution clarity are essential to long-term performance.",
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
      "We help industrial and public-sector clients improve reliability, delivery capability, and system performance across essential sectors.",
    details:
      "This commitment extends into environment, water, transport, medicine, research, and automation services, where we apply the same structured support model to strengthen operational continuity and smarter system outcomes.",
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

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -28, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariantsReverse = {
  hidden: { opacity: 0, x: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const textGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const getPointStyle = (
  point: string,
): { icon: LucideIcon; iconClassName: string; badgeClassName: string } => {
  const label = point.toLowerCase();

  if (label.includes("renewable") || label.includes("environment")) {
    return {
      icon: Leaf,
      iconClassName: "text-[#2f9e44]",
      badgeClassName: "bg-[#e6f7ea]",
    };
  }

  if (label.includes("water") || label.includes("wastewater")) {
    return {
      icon: Droplets,
      iconClassName: "text-[#1677c8]",
      badgeClassName: "bg-[#e8f4ff]",
    };
  }

  if (label.includes("power") || label.includes("transmission")) {
    return {
      icon: Zap,
      iconClassName: "text-[#d99700]",
      badgeClassName: "bg-[#fff6db]",
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
      iconClassName: "text-[#e76f1f]",
      badgeClassName: "bg-[#fff0e8]",
    };
  }

  if (label.includes("research") || label.includes("technical")) {
    return {
      icon: ShieldCheck,
      iconClassName: "text-[#516fc6]",
      badgeClassName: "bg-[#eef2ff]",
    };
  }

  if (label.includes("medicine") || label.includes("health")) {
    return {
      icon: Stethoscope,
      iconClassName: "text-[#d94878]",
      badgeClassName: "bg-[#fff0f5]",
    };
  }

  if (label.includes("transport")) {
    return {
      icon: TowerControl,
      iconClassName: "text-[#7a52d1]",
      badgeClassName: "bg-[#f3edff]",
    };
  }

  if (label.includes("automation") || label.includes("systems")) {
    return {
      icon: Settings2,
      iconClassName: "text-[#1388a5]",
      badgeClassName: "bg-[#e7fbff]",
    };
  }

  if (
    label.includes("production") ||
    label.includes("facility") ||
    label.includes("facilities")
  ) {
    return {
      icon: Factory,
      iconClassName: "text-[#5f6b76]",
      badgeClassName: "bg-[#eff2f4]",
    };
  }

  if (label.includes("pipeline")) {
    return {
      icon: Waves,
      iconClassName: "text-[#1677c8]",
      badgeClassName: "bg-[#e8f4ff]",
    };
  }

  return {
    icon: Wrench,
    iconClassName: "text-[#0c6b2f]",
    badgeClassName: "bg-[#e8f6ec]",
  };
};

const CommitmentSection = () => {
  return (
    <section className='border-t border-[#012402]/10 bg-[#eef3ef] py-16 lg:py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
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
          <p className='copy-justify mx-auto mt-5 max-w-4xl text-base leading-7 text-[#012402]/80 sm:text-lg'>
            We offer multi-discipline services across Energy, Oil & Gas,
            Petrochemicals, Infrastructure, Power, Renewables, Manufacturing,
            Health, Education, Mining, and Information Technology. Our focus is
            clear delivery, dependable quality, and practical value.
          </p>
        </motion.div>

        <div className='mt-12 space-y-8'>
          {commitmentItems.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.section
                key={item.title}
                variants={sectionVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className='overflow-hidden rounded-[1.5rem] border border-[#d7e0d8] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.06)]'
              >
                <div
                  className={`grid items-stretch lg:grid-cols-[1.05fr_0.95fr] ${
                    reverse
                      ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                      : ""
                  }`}
                >
                  <motion.div
                    variants={reverse ? imageVariantsReverse : imageVariants}
                    className='relative min-h-[260px] overflow-hidden bg-[#dfe7ee] sm:min-h-[320px] lg:min-h-full'
                  >
                    <motion.img
                      src={item.image}
                      alt={item.alt}
                      className='absolute inset-0 h-full w-full object-cover'
                      loading='lazy'
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(1,36,2,0.16)_0%,rgba(1,36,2,0.02)_48%,rgba(1,36,2,0)_100%)]' />
                  </motion.div>

                  <motion.div
                    variants={textGroupVariants}
                    className='flex items-center bg-[#f5f5f2] px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[440px] lg:px-12 lg:py-12'
                  >
                    <div className='mx-auto w-full max-w-xl overflow-hidden'>
                      <motion.p
                        variants={textItemVariants}
                        className='text-left text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#0c6b2f]'
                      >
                        {item.eyebrow}
                      </motion.p>
                      <motion.h3
                        variants={textItemVariants}
                        className='mt-4 text-left text-3xl font-bold uppercase tracking-[0.04em] text-[#012402] sm:text-4xl'
                      >
                        {item.title}
                      </motion.h3>
                      <motion.div
                        variants={textItemVariants}
                        className='mt-5 h-px w-16 bg-[#0c6b2f]/25'
                      />
                    <motion.p
                      variants={textItemVariants}
                        className='copy-justify mt-6 max-w-lg text-[0.96rem] leading-7 text-[#27372a]'
                      >
                        {item.summary}
                      </motion.p>
                      <motion.p
                        variants={textItemVariants}
                        className='copy-justify mt-4 max-w-lg text-[0.96rem] leading-7 text-[#27372a]'
                      >
                        {item.details}
                      </motion.p>

                      <motion.ul
                        variants={textGroupVariants}
                        className='mt-7 grid gap-x-8 gap-y-4 border-t border-[#012402]/10 pt-6 sm:grid-cols-2'
                      >
                        {item.points.map((point, pointIndex) => {
                          const {
                            icon: PointIcon,
                            iconClassName,
                            badgeClassName,
                          } = getPointStyle(point);

                          return (
                            <motion.li
                              key={point}
                              variants={textItemVariants}
                              className='flex items-start gap-3'
                              transition={{
                                delay: pointIndex * 0.04,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            >
                              <span
                                className={`mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${badgeClassName}`}
                              >
                                <PointIcon
                                  className={`h-4 w-4 ${iconClassName}`}
                                />
                              </span>
                              <span className='copy-justify text-sm leading-6 text-[#012402]/82'>
                                {point}
                              </span>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
