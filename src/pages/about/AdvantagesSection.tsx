import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Compass,
  Globe2,
  Lightbulb,
  Rocket,
  Route,
  TimerReset,
} from "lucide-react";

const leadCards = [
  {
    icon: Globe2,
    eyebrow: "Comparative Advantages",
    title: "Geo-Strategic Locations",
    text: "Geo-Strategic Locations in Africa and plan to expand beyond.",
    iconBg: "bg-[linear-gradient(135deg,#dff4ff,#b8e5ff)]",
    iconColor: "text-[#1c78b8]",
  },
  {
    icon: Compass,
    eyebrow: "Competitive Advantages",
    title: "Preferential Market Access",
    text: "Access to preferential markets: Africa, USA, EU, China, India, UK.",
    iconBg: "bg-[linear-gradient(135deg,#efe3ff,#d8c1ff)]",
    iconColor: "text-[#7346d5]",
  },
  {
    icon: Rocket,
    eyebrow: "Pursuing Investment",
    title: "Investment Readiness",
    text: "Ready to exploit any kind of investment for and on-behalf of our clients.",
    iconBg: "bg-[linear-gradient(135deg,#ffe5cf,#ffc89f)]",
    iconColor: "text-[#db6b1b]",
  },
];

const operationalAdvantages = [
  {
    icon: Route,
    title: "Flexibility",
    text: "High speed response on potential unexpected problems and availability more simply and less expensive.",
    iconBg: "bg-[linear-gradient(135deg,#d9f8ee,#b8efd9)]",
    iconColor: "text-[#13895b]",
  },
  {
    icon: Lightbulb,
    title: "Knowledge & Experience",
    text: "Local conditions and regulations, special client's demands, and specific site experience.",
    iconBg: "bg-[linear-gradient(135deg,#fff1bf,#ffe189)]",
    iconColor: "text-[#cf9700]",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost Saving",
    text: "Due to participation of our competent specialists on early stage of project design concept and clear scope and work content definition.",
    iconBg: "bg-[linear-gradient(135deg,#dff2ff,#c8e7ff)]",
    iconColor: "text-[#1e73c9]",
  },
  {
    icon: TimerReset,
    title: "Time Saving",
    text: "Acceleration of BID and RFQ processes because time overrun equals cost overrun.",
    iconBg: "bg-[linear-gradient(135deg,#ffe3ef,#ffc6de)]",
    iconColor: "text-[#c9487d]",
  },
];

const AdvantagesSection = () => {
  return (
    <section className='bg-[linear-gradient(180deg,#eef6ef_0%,#f8fbf8_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.08, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-10 max-w-3xl text-center sm:mb-14'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
            It&apos;s What We Do Best
          </p>
          <h2 className='mt-3 text-3xl font-bold tracking-tight text-[#132015] sm:text-4xl md:text-5xl'>
            Comparative and competitive advantages that strengthen delivery
          </h2>
        </motion.div>

        <div className='grid gap-6 xl:grid-cols-3'>
          {leadCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  delay: index * 0.1,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='rounded-[1.8rem] border border-[#0b3b12]/8 bg-white p-6 shadow-[0_22px_48px_rgba(15,23,42,0.05)] sm:p-7'
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${card.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${card.iconColor}`} />
                </div>
                <p className='mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b3b12]/60'>
                  {card.eyebrow}
                </p>
                <h3 className='mt-3 text-2xl font-bold text-[#132015]'>
                  {card.title}
                </h3>
                <p className='mt-4 text-justify text-[0.98rem] leading-7 text-[#5a6b5d]'>
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className='mt-8 grid gap-6 sm:grid-cols-2'>
          {operationalAdvantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: 0.18 + index * 0.08,
                  duration: 0.96,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='rounded-[1.7rem] border border-[#0b3b12]/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] p-6 shadow-[0_20px_42px_rgba(15,23,42,0.04)] sm:p-7'
              >
                <div className='flex items-center gap-4'>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <h3 className='text-2xl font-bold text-[#132015]'>
                    {item.title}
                  </h3>
                </div>

                <p className='mt-5 text-justify text-[0.98rem] leading-7 text-[#5a6b5d]'>
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
