import { motion } from "framer-motion";
import accountabilityImage from "@/assets/about/cost-effective.jpg";
import respectImage from "@/assets/about/respect.jpg";
import teamworkImage from "@/assets/about/teamwork.png";
import qualityImage from "@/assets/about/quality.png";

const values = [
  {
    title: "Accountability",
    text: "We are accountable for delivering on our commitments to our clients.",
    image: accountabilityImage,
    imageAlt: "Professionals reviewing accountability metrics",
  },
  {
    title: "Respect for People",
    text: "We value our people and clients, encourage their development, and reward their performance.",
    image: respectImage,
    imageAlt: "People-centered collaboration and growth",
  },
  {
    title: "Teamwork",
    text: "We work together, across boundaries, to meet the needs of our clients.",
    image: teamworkImage,
    imageAlt: "Team collaboration in a professional workspace",
  },
  {
    title: "Quality",
    text: "We provide outstanding services that deliver premium value to our clients.",
    image: qualityImage,
    imageAlt: "Precision engineering and quality assurance",
  },
];

const CoreValuesSection = () => {
  return (
    <section className='bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-10 max-w-3xl text-center sm:mb-14'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
            Core Values
          </p>
          <h2 className='mx-auto mt-3 max-w-fit text-center text-3xl font-bold tracking-tight text-[#132015] sm:text-4xl md:text-5xl lg:whitespace-nowrap'>
            Principles that shape how we work and deliver
          </h2>
        </motion.div>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {values.map((value, index) => {
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.98,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='rounded-[1.7rem] border border-[#0b3b12]/8 bg-[linear-gradient(180deg,#ffffff_0%,#f5faf5_100%)] p-6 shadow-[0_20px_44px_rgba(15,23,42,0.05)] sm:p-7'
              >
                <div className='mx-auto h-24 w-28 overflow-hidden rounded-[1rem] shadow-[0_12px_24px_rgba(15,23,42,0.08)]'>
                  <img
                    src={value.image}
                    alt={value.imageAlt}
                    loading='lazy'
                    className='h-full w-full object-cover'
                  />
                </div>

                <h3 className='mt-6 text-2xl font-bold text-[#132015]'>
                  {value.title}
                </h3>

                <p className='mt-4 text-[0.98rem] leading-7 text-[#5a6b5d]'>
                  {value.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
