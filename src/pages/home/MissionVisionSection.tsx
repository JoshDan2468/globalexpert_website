import { motion } from "framer-motion";
import visionImage from "@/assets/home_assets/build.jpg";
import missionImage from "@/assets/about/mission1.png";

const items = [
  {
    label: "Our Mission",
    eyebrow: "What drives us",
    text: "To provide solutions at highly cost effective, best value and excellent quality that meets clients expectations, coupled with local and international standards and best practices. Clients' satisfaction will be vital.",
    image: missionImage,
    alt: "Mission-focused operational delivery",
    textPanelClass: "bg-[#7f0d07]",
    imageFirstDesktop: false,
  },
  {
    label: "Our Vision",
    eyebrow: "Where we are going",
    text: "To become a leading and referenced consultancy services company in Africa and globally.",
    image: visionImage,
    alt: "Global expansion and long-term vision",
    textPanelClass: "bg-[#f26a10]",
    imageFirstDesktop: true,
  },
];

const MissionVisionSection = () => {
  return (
    <section className='section-padding bg-secondary'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-10 max-w-3xl text-center sm:mb-14'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-primary'>
            Direction & Purpose
          </p>
          <h2 className='mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl'>
            The mission and vision behind our work
          </h2>
        </motion.div>

        <div className='mx-auto max-w-6xl overflow-hidden shadow-2xl shadow-foreground/20'>
          {items.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.85,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='grid lg:grid-cols-2'
            >
              <div
                className={`flex min-h-[320px] items-center px-8 py-12 text-white sm:min-h-[380px] sm:px-14 lg:min-h-[430px] lg:px-20 ${item.textPanelClass} ${item.imageFirstDesktop ? "lg:order-2" : ""}`}
              >
                <div className='max-w-md'>
                  <p className='text-left text-sm font-semibold uppercase tracking-[0.22em] text-white/80'>
                    {item.eyebrow}
                  </p>
                  <h3 className='mt-3 text-left text-4xl font-black uppercase tracking-tight text-white sm:text-5xl'>
                    {item.label}
                  </h3>
                  <p className='mt-5 text-left text-sm leading-7 text-white/85 sm:text-base sm:leading-8'>
                    {item.text}
                  </p>
                </div>
              </div>

              <div
                className={`flex min-h-[320px] items-center justify-center bg-white px-10 py-12 sm:min-h-[380px] lg:min-h-[430px] ${item.imageFirstDesktop ? "lg:order-1" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading='lazy'
                  className='max-h-[260px] w-full max-w-[300px] object-contain mix-blend-multiply sm:max-h-[320px] sm:max-w-[380px] lg:max-h-[360px] lg:max-w-[440px]'
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
