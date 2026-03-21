import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image1 from "@/assets/home_assets/image4.jpg";
import image2 from "@/assets/home_assets/image8.jpg";
import image3 from "@/assets/home_assets/image10.jpg";

const cardItems = [
  {
    to: "/about",
    title: "Who We Are",
    text: "Global Experts Consultoria is an international based energy, engineering, business and management consulting firm that focuses on supporting its clients to achieve improved performance through providing pragmatic solution(s).",
    image: image1,
    alt: "Team strategy and governance",
  },
  {
    to: "/about",
    title: "Why Global Experts",
    text: "Global Experts Consultoria helps its clients build the needed competence and capabilities to deliver on their commitments. We are committed to delivering value to our clients and stakeholders by providing high-quality services that meet their needs and exceed their expectations.",
    image: image2,
    alt: "Executive leadership strategy",
  },
  {
    to: "/services",
    title: "Operations",
    text: "Our interests in the Niger Delta are predominantly land-based. In addition to our upstream activities, we are constantly exploring opportunities across the value chain.",
    image: image3,
    alt: "Field operations in energy sector",
  },
];

const CompanySection = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const card = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <section className='relative z-20 -mt-24 pb-12 bg-transparent '>
      <div className='container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 '>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
        >
          {cardItems.map((item) => (
            <motion.div key={item.title} variants={card}>
              <Link
                to={item.to}
                className='group block overflow-hidden rounded-xl border border-[#012402]/10 bg-[#ebf5ec] p-0 transition duration-600 ease-out hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#012402]/30'
              >
                <div className='relative h-40 overflow-hidden'>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className='h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#012402]/70 to-transparent' />
                  <h3 className='absolute left-0 right-0 bottom-3 px-5 text-xl font-bold text-white drop-shadow-lg'>
                    {item.title}
                  </h3>
                </div>

                <div className='p-3 sm:p-5'>
                  <p className='text-md text-[#000000]'>{item.text}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanySection;
