import { motion } from "framer-motion";
import geolocation from "@/assets/about/geo-locations.jpg";
import market from "@/assets/about/investment1.jpg";
import investment from "@/assets/about/investment2.jpg";
import flexibility from "@/assets/about/quality.png";
import knowledge from "@/assets/about/knowledge.jpg";
import cost from "@/assets/about/cost-saving.jpg";
import time from "@/assets/about/cost-effective.jpg";

const leadCards = [
  {
    eyebrow: "Comparative Advantages",
    title: "Geo-Strategic Locations",
    text: "Geo-Strategic Locations in Africa and plan to expand beyond.",
    image: geolocation,
    imageAlt: "Offshore oil and gas structure at sea",
  },
  {
    eyebrow: "Competitive Advantages",
    title: "Preferential Market Access",
    text: "Access to preferential markets: Africa, USA, EU, China, India, UK.",
    image: market,
    imageAlt: "Offshore oil and gas structure at sea",
  },
  {
    eyebrow: "Pursuing Investment",
    title: "Investment Readiness",
    text: "Ready to exploit any kind of investment for and on-behalf of our clients.",
    image: investment,
    imageAlt: "Offshore oil and gas platform structure",
  },
];

const operationalAdvantages = [
  {
    title: "Flexibility",
    text: "High speed response on potential unexpected problems and availability more simply and less expensive.",
    image: flexibility,
    imageAlt: "Offshore oil and gas structure at sea",
  },
  {
    title: "Knowledge & Experience",
    text: "Local conditions and regulations, special client's demands, and specific site experience.",
    image: knowledge,
    imageAlt: "Offshore oil and gas platform structure",
  },
  {
    title: "Cost Saving",
    text: "Due to participation of our competent specialists on early stage of project design concept and clear scope and work content definition.",
    image: cost,
    imageAlt: "Offshore oil and gas structure at sea",
  },
  {
    title: "Time Saving",
    text: "Acceleration of BID and RFQ processes because time overrun equals cost overrun.",
    image: time,
    imageAlt: "Offshore oil and gas platform structure",
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
                className='group relative min-h-[430px] overflow-hidden rounded-[1.8rem] shadow-[0_22px_48px_rgba(15,23,42,0.16)]'
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading='lazy'
                  className='absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(9,29,17,0.16)_0%,rgba(4,44,18,0.46)_52%,rgba(2,37,15,0.92)_100%)]' />
                <div className='absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(3,33,13,0)_0%,rgba(3,33,13,0.66)_100%)]' />
                <div className='relative flex min-h-[430px] flex-col justify-end p-6 sm:p-7'>
                  <p className='text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/70'>
                    {card.eyebrow}
                  </p>
                  <h3 className='mt-3 text-3xl font-bold leading-tight text-white'>
                    {card.title}
                  </h3>
                  <p className='mt-3 max-w-[18rem] text-base leading-7 text-[#ffffff]'>
                    {card.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className='mt-8 grid gap-6 sm:grid-cols-2'>
          {operationalAdvantages.map((item, index) => {
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
                  <div className='h-14 w-14 overflow-hidden rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.08)]'>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading='lazy'
                      className='h-full w-full object-cover'
                    />
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
