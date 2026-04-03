import { motion } from "framer-motion";
import visionImage from "@/assets/about/vision.jpg";
import missionImage from "@/assets/about/mission1.png";

const cards = [
  {
    label: "Vision",
    title:
      "To become a leading and referenced consultancy services company in Africa and globally.",
    image: visionImage,
    imageAlt: "Global expansion and long-term vision",
    accent: "from-[#012402] to-[#ffffff]",
    textTone: "text-white/84",
    surface: "bg-[#ffffff] border-white/10",
  },
  {
    label: "Mission",
    title:
      "To provide solutions at highly cost effective, best value and excellent quality that meets clients expectations, coupled with local and international standards and best practices. Clients' satisfaction will be vital.",
    image: missionImage,
    imageAlt: "Mission-focused operational delivery",
    accent: "from-[#012402] to-[#ffffff]",
    textTone: "text-[#516355]",
    surface:
      "bg-[linear-gradient(180deg,#ffffff_100%,#ffffff_100%)] border-[#0b3b12]/8",
  },
];

const MissionVisionSection = () => {
  return (
    <section className='bg-[#012402] px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-10 max-w-3xl text-center sm:mb-14'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#21ec40]'>
            Direction & Purpose
          </p>
          <h2 className='mt-3 text-4xl font-bold tracking-tight text-[#f3f8f4] sm:text-4xl md:text-5xl'>
            Mission and vision that guide how we deliver value
          </h2>
        </motion.div>

        <div className='grid gap-6 lg:grid-cols-2'>
          {cards.map((card, index) => {
            return (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  delay: index * 0.12,
                  duration: 1.02,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`overflow-hidden rounded-[1.9rem] border p-6 shadow-[0_24px_50px_rgba(15,23,42,0.06)] sm:p-8 ${card.surface}`}
              >
                <div
                  className={`mb-8 h-1.5 w-24 rounded-full bg-gradient-to-r ${card.accent}`}
                />

                <div className='flex items-center gap-4'>
                  <div className='h-24 w-24 overflow-hidden rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.14)]'>
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      loading='lazy'
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                        card.label === " "
                          ? "text-[#d7f4db]/75"
                          : "text-[#0b3b12]/60"
                      }`}
                    >
                      {card.label}
                    </p>
                    <h3
                      className={`mt-2 text-2xl font-bold sm:text-3xl ${
                        card.label === " " ? "text-white" : "text-[#132015]"
                      }`}
                    >
                      {card.label}
                    </h3>
                  </div>
                </div>

                <p
                  className={`mt-8 text-justify text-[1rem] leading-8 ${card.textTone}`}
                >
                  {card.title}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
