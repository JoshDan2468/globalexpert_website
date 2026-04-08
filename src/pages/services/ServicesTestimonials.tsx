import { motion } from "framer-motion";
import avatarOne from "@/assets/home_assets/image1.jpg";
import avatarTwo from "@/assets/home_assets/image8.jpg";
import avatarThree from "@/assets/home_assets/image4.jpg";

const testimonials = [
  {
    quote:
      "Our field team felt the difference immediately. The service structure was clear, practical, and responsive from day one.",
    name: "Ruth Powell",
    role: "Energy Operations Lead",
    image: avatarOne,
  },
  {
    quote:
      "They brought technical clarity and strong coordination across stakeholders, which helped the project move with far less friction.",
    name: "Alex Young",
    role: "Project Delivery Manager",
    image: avatarTwo,
  },
  {
    quote:
      "What stood out most was the balance between quality, speed, and cost awareness. The recommendations were actionable.",
    name: "Alison Anderson",
    role: "Infrastructure Client",
    image: avatarThree,
  },
];

const ServicesTestimonials = () => {
  return (
    <section className='bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14'
        >
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#0b3b12] sm:text-sm sm:tracking-[0.28em]'>
            Testimonials
          </p>
          <h2 className='mt-3 text-2xl font-bold tracking-tight text-[#132015] sm:text-4xl'>
            What our customers say
          </h2>
        </motion.div>

        <div className='grid gap-5 sm:gap-6 lg:grid-cols-3'>
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.1,
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='rounded-[1.4rem] border border-[#0b3b12]/8 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbf8_100%)] p-5 shadow-[0_20px_42px_rgba(15,23,42,0.04)] sm:rounded-[1.6rem] sm:p-6'
            >
              <p className='text-sm leading-7 text-[#5a6b5d] sm:text-[0.98rem]'>
                "{item.quote}"
              </p>

              <div className='mt-6 flex items-center gap-4'>
                <img
                  src={item.image}
                  alt={item.name}
                  loading='lazy'
                  className='h-12 w-12 rounded-full object-cover'
                />
                <div>
                  <h3 className='text-sm font-bold text-[#132015]'>
                    {item.name}
                  </h3>
                  <p className='text-sm text-[#6a796d]'>{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;
