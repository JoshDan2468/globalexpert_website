import { motion } from "framer-motion";
import { Check } from "lucide-react";
import image1 from "@/assets/home_assets/image14.jpg";
import image2 from "@/assets/home_assets/image13.jpg";
import image3 from "@/assets/home_assets/image16.jpg";

type ServiceCard = {
  image: string;
  alt: string;
  title: string;
  points: string[];
  featured?: boolean;
};

const quickHighlights = ["LNG", "Renewable energy", "Environment", "Water"];

const serviceCards: ServiceCard[] = [
  {
    image: image1,
    alt: "Oil and gas operations",
    title: "Oil & Gas",
    points: [
      "LNG & CNG facilities",
      "Onshore Pipelines & Receiving Terminals",
      "Onshore / Offshore Oil & Gas Production Facilities",
      "LPG Skids",
      "Mobile Filling Stations",
      "Petroleum Products Supply",
      "Renewable energy",
      "Gas turbine based powerplants",
      "Transmission networks",
      "Auto Gas",
    ],
  },
  {
    image: image2,
    alt: "Power infrastructure and transmission",
    title: "Energy & Power",
    featured: true,
    points: [
      "Renewable energy",
      "Gas turbine based powerplants",
      "Transmission networks",
      "Auto Gas",
    ],
  },
  {
    image: image3,
    alt: "Manufacturing and infrastructure systems",
    title: "Manufacturing & Infrastructure",
    points: [
      "Environment",
      "Water & waste water",
      "Transport",
      "Medicine",
      "Research",
      "Automation",
    ],
  },
];

const CommitmentSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section className='py-16 lg:py-20 bg-[#ebf5ec] border-t border-[#012402]/10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className='mx-auto max-w-5xl text-center'
        >
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012402]'>
            Our Commitment
          </h2>
          <p className='mt-4 text-xl sm:text-2xl font-semibold text-[#012402] text-center'>
            We promise the best quality
          </p>
          <p className='mt-5 text-base sm:text-lg text-[#012402]/80 text-left'>
            We offer multi-discipline services in the following key markets:
            Energy / Oil & Gas, Petrochemicals, Infrastructures (Transport &
            waste-water), Power (Gas turbine power plants), Renewables,
            Manufacturing, Health, Education, Mining, Information Technology.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            {quickHighlights.map((item) => (
              <span
                key={item}
                className='inline-flex items-center gap-2 rounded-full border border-[#012402]/20 bg-white px-4 py-2 text-sm text-[#012402]'
              >
                <Check className='h-4 w-4 text-[#012402]' />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {serviceCards.map((card) => {
            const isFeatured = Boolean(card.featured);

            return (
              <motion.article
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#012402] border-[#e3641b]/80 shadow-lg"
                    : "bg-white border-[#012402]/10 shadow-sm hover:shadow-lg"
                }`}
              >
                <div className='relative h-40 overflow-hidden'>
                  <img
                    src={card.image}
                    alt={card.alt}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div
                    className={`absolute inset-0 ${
                      isFeatured
                        ? "bg-gradient-to-t from-[#012402]/85 to-transparent"
                        : "bg-gradient-to-t from-[#012402]/70 to-transparent"
                    }`}
                  />
                  <h3 className='absolute left-0 right-0 bottom-3 px-5 text-2xl font-bold text-white'>
                    {card.title}
                  </h3>
                </div>

                <div className={`p-5 ${isFeatured ? "border-t-2 border-[#e3641b]" : ""}`}>
                  <ul className='space-y-2'>
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-2 text-sm ${
                          isFeatured ? "text-white/85" : "text-[#012402]/80"
                        }`}
                      >
                        <Check
                          className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                            isFeatured ? "text-[#ff9d63]" : "text-[#012402]"
                          }`}
                        />
                        <span className='text-left'>{point}</span>
                      </li>
                    ))}
                  </ul>
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
