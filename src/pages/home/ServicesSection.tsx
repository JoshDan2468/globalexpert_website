import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import serviceImage1 from "@/assets/home_assets/trac.jpg";
import serviceImage2 from "@/assets/home_assets/factory.jpg";
import serviceImage3 from "@/assets/home_assets/scripts.jpg";
import serviceImage4 from "@/assets/home_assets/image16.jpg";
import serviceImage5 from "@/assets/home_assets/port.jpg";
import serviceImage6 from "@/assets/home_assets/technical.jpg";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  to: string;
};

const services: ServiceItem[] = [
  {
    title: "ENGINEERING, PROCUREMENT, CONSTRUCTION AND INSTALLATION",
    description:
      "GEC delivers technical, safety, and quality support for construction activities, helping clients move from planning to execution with confidence.",
    image: serviceImage1,
    alt: "Engineering and construction planning service",
    to: "/services/engineering-services",
  },
  {
    title: "PROJECT MANAGEMENT AND EXECUTION",
    description:
      "We coordinate projects, timelines, subcontractors, and delivery priorities with structured oversight that keeps execution efficient and accountable.",
    image: serviceImage2,
    alt: "Project management coordination service",
    to: "/services/project-management-execution",
  },
  {
    title: "OIL AND GAS MANAGEMENT",
    description:
      "Our teams support energy operations with practical management solutions designed for performance, reliability, and complex operating conditions.",
    image: serviceImage3,
    alt: "Oil and gas management service",
    to: "/services/oil-gas-management",
  },
  {
    title: "BUSINESS PROCESSES AND TECHNICAL ADVISORY",
    description:
      "We help organisations improve operational systems, streamline workflows, and build cost-effective business processes that scale well.",
    image: serviceImage4,
    alt: "Technical advisory and business process consulting",
    to: "/services/business-processes",
  },
  {
    title: "RESEARCH AND DEVELOPMENT",
    description:
      "Our R&D capabilities combine engineering science, digital tools, and technical analysis to support better design, testing, and innovation decisions.",
    image: serviceImage5,
    alt: "Research and development laboratory service",
    to: "/services/research-development",
  },
  {
    title: "RESEARCH, MARKET INTELLIGENCE AND DUE DILIGENCE",
    description:
      "We provide commercial insight, industry research, and due diligence support that helps clients evaluate trends, risks, and growth opportunities.",
    image: serviceImage6,
    alt: "Market intelligence and due diligence analytics",
    to: "/services/research-market-intelligence",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id='services'
      ref={ref}
      className='bg-[#eef1f5] py-14 sm:py-16 lg:py-20'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className='mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0d62b3]'>
            Our Services
          </p>
          <h2 className='mt-3 text-3xl font-bold text-[#16335e] sm:text-4xl'>
            Professional Solutions Across Our Core Service Areas
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#526477]'>
            Explore six of our key service areas presented in a cleaner visual
            format for faster comparison and easier browsing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.12 }}
          className='mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3'
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className='overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_rgba(18,39,70,0.08)]'
            >
              <Link to={service.to} className='block h-full'>
                <div className='overflow-hidden'>
                  <motion.img
                    src={service.image}
                    alt={service.alt}
                    className='h-[240px] w-full object-cover sm:h-[260px] lg:h-[280px]'
                    loading='lazy'
                    decoding='async'
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <div className='px-8 py-8 sm:px-9 sm:py-9'>
                  <h3 className='text-left text-[1.05rem] font-bold uppercase leading-[1.5] text-[#012402] sm:text-[1.15rem]'>
                    {service.title}
                  </h3>
                  <p className='mt-5 text-left text-[0.98rem] leading-8 text-[#4e6072]'>
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
