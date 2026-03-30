import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const cards = [
  {
    icon: Eye,
    label: "Vision",
    title:
      "To become a leading and referenced consultancy services company in Africa and globally.",
    accent: "from-[#0f3f14] to-[#1e6a27]",
    iconBg: "bg-[linear-gradient(135deg,rgba(86,255,170,0.22),rgba(73,210,255,0.2))]",
    iconColor: "text-[#d7fff0]",
    textTone: "text-white/84",
    surface:
      "bg-[linear-gradient(135deg,#0e2612_0%,#123818_52%,#1c5a25_100%)] border-white/10",
  },
  {
    icon: Target,
    label: "Mission",
    title:
      "To provide solutions at highly cost effective, best value and excellent quality that meets clients expectations, coupled with local and international standards and best practices. Clients' satisfaction will be vital.",
    accent: "from-[#eef6ef] to-[#ffffff]",
    iconBg: "bg-[linear-gradient(135deg,#ffe7bf,#ffd7ef)]",
    iconColor: "text-[#c86a00]",
    textTone: "text-[#516355]",
    surface:
      "bg-[linear-gradient(180deg,#ffffff_0%,#f5faf5_100%)] border-[#0b3b12]/8",
  },
];

const MissionVisionSection = () => {
  return (
    <section className='bg-[#f6faf6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-10 max-w-3xl text-center sm:mb-14'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
            Direction & Purpose
          </p>
          <h2 className='mt-3 text-3xl font-bold tracking-tight text-[#132015] sm:text-4xl md:text-5xl'>
            Mission and vision that guide how we deliver value
          </h2>
        </motion.div>

        <div className='grid gap-6 lg:grid-cols-2'>
          {cards.map((card, index) => {
            const Icon = card.icon;

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
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${card.iconBg}`}
                  >
                    <Icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                        card.label === "Vision"
                          ? "text-[#d7f4db]/75"
                          : "text-[#0b3b12]/60"
                      }`}
                    >
                      {card.label}
                    </p>
                    <h3
                      className={`mt-2 text-2xl font-bold sm:text-3xl ${
                        card.label === "Vision"
                          ? "text-white"
                          : "text-[#132015]"
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
