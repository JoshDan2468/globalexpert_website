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
                className='group block overflow-hidden bg-white p-0 shadow-[0_24px_48px_rgba(15,23,42,0.14)] transition duration-600 ease-out hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(1,36,2,0.18)] focus-visible:outline-none'
              >
                <div className='relative h-56 overflow-hidden'>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className='h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105'
                  />
                </div>

                <div className='bg-white px-5 py-8 text-center sm:px-7'>
                  <div className='mx-auto h-1 w-14 bg-[#012402]' />
                  <h3 className='mt-5 text-3xl font-bold text-[#111111]'>
                    {item.title}
                  </h3>
                  <p className='mt-4 text-base leading-relaxed text-gray-600'>
                    {item.text}
                  </p>
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
