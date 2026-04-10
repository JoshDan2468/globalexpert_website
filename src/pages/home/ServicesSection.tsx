import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Cog,
  FlaskConical,
  HardHat,
  Layers3,
  Pickaxe,
} from "lucide-react";
import serviceImage1 from "@/assets/home_assets/trac.jpg";
import serviceImage2 from "@/assets/home_assets/factory.jpg";
import serviceImage3 from "@/assets/home_assets/scripts.jpg";
import serviceImage4 from "@/assets/home_assets/image16.jpg";
import serviceImage5 from "@/assets/home_assets/port.jpg";
import serviceImage6 from "@/assets/home_assets/technical.jpg";
import serviceImage7 from "@/assets/home_assets/petrol.jpg";

type ServiceItem = {
  icon: typeof HardHat;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  to: string;
};

const services: ServiceItem[] = [
  {
    icon: HardHat,
    label: "Construction Delivery",
    title:
      "Engineering, Procurement, Construction, Installation Consultancy & Services",
    description:
      "GEC delivers technical, safety, and quality support for construction activities. We help clients move from planning to execution with confidence and control.",
    image: serviceImage1,
    alt: "Engineering and construction planning service",
    to: "/services/engineering-services",
  },
  {
    icon: Layers3,
    label: "Cross-Sector Support",
    title: "Other Services",
    description:
      "We support organisations across power, mining, automobile, education, health, agriculture, manufacturing, and finance. Our teams adapt solutions to fit each sector's operational needs.",
    image: serviceImage2,
    alt: "Multi-industry professional services",
    to: "/services/oil-gas-management",
  },
  {
    icon: BriefcaseBusiness,
    label: "Execution Leadership",
    title: "Project Management",
    description:
      "GEC manages projects and subcontractors with a strong focus on coordination, timelines, and fit-for-purpose delivery. We keep execution structured, efficient, and accountable.",
    image: serviceImage3,
    alt: "Project management coordination service",
    to: "/services/project-management-execution",
  },
  {
    icon: Cog,
    label: "Technical Solutions",
    title: "Engineering Services",
    description:
      "We work closely with clients to understand technical goals, commercial drivers, and field requirements. This helps us define practical engineering solutions with long-term value.",
    image: serviceImage4,
    alt: "Engineering services and technical design",
    to: "/services/engineering-services",
  },
  {
    icon: FlaskConical,
    label: "Innovation & Analysis",
    title: "Research & Development",
    description:
      "Our R&D services combine engineering science, digital analysis, and modern software tools to support smarter design decisions. We use FEA, CFD, and testing access to help clients investigate, improve, and innovate.",
    image: serviceImage5,
    alt: "Research and development laboratory service",
    to: "/services/research-development",
  },
  {
    icon: Pickaxe,
    label: "Business Optimisation",
    title: "Technical Advisory and Business Processes",
    description:
      "Our advisory team helps businesses set up, improve, and manage operations more efficiently. We focus on practical systems, better processes, and cost-effective execution.",
    image: serviceImage6,
    alt: "Technical advisory and business process consulting",
    to: "/services/business-processes",
  },
  {
    icon: BarChart3,
    label: "Commercial Intelligence",
    title: "Products Management, Market Intelligence and Due Diligence",
    description:
      "We provide market research, due diligence, and commercial insight that support better business decisions. Our analysis helps clients understand trends, industry players, risks, and emerging opportunities.",
    image: serviceImage7,
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
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.95,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id='services'
      ref={ref}
      className='bg-[linear-gradient(180deg,#eef6ef_0%,#e6f1e8_100%)] py-14 md:py-18'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1 }}
          className='mx-auto mb-8 max-w-2xl text-center md:mb-10'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#012402]'>
            Our Services
          </p>
          <h2 className='mx-auto mt-3 max-w-xl text-center text-2xl font-extrabold leading-tight text-[#222222] sm:text-3xl lg:text-4xl'>
            Signature Services and Client Favorites
          </h2>
          <p className='mx-auto mt-3 max-w-xl text-[13px] leading-6 text-[#5a5a5a] sm:text-sm'>
            Explore the services we deliver across engineering, project
            execution, research, advisory, and commercial intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.18 }}
          className='mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const centeredLastRowClass =
              index === 4
                ? "xl:col-start-1"
                : index === 5
                  ? "xl:col-start-2"
                  : index === 6
                    ? "xl:col-start-3"
                    : "";

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`group flex h-full w-full max-w-[20rem] flex-col overflow-hidden rounded-[20px] border border-[#012402]/8 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbf8_100%)] p-3 shadow-[0_16px_36px_rgba(7,27,11,0.12)] transition-shadow duration-500 hover:shadow-[0_24px_48px_rgba(1,36,2,0.18)] ${centeredLastRowClass}`}
              >
                <motion.div
                  className='relative -mx-1 -mt-1 overflow-hidden rounded-[18px]'
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <motion.img
                    src={service.image}
                    alt={service.alt}
                    className='h-[150px] w-full object-cover sm:h-[160px] lg:h-[170px]'
                    loading='lazy'
                    decoding='async'
                    width={452}
                    height={170}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className='absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#07240a]/50 to-transparent' />
                  <span className='absolute left-3 top-3 inline-flex rounded-full bg-white/94 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0b3b12] shadow-sm'>
                    {service.label}
                  </span>
                </motion.div>

                <motion.div
                  className='mt-3 flex flex-1 flex-col'
                  initial={false}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className='mb-2 flex items-center gap-2.5'>
                    <motion.div
                      className='flex h-8 w-8 items-center justify-center rounded-full bg-[#dbeede] text-[#0b3b12]'
                      whileHover={{ rotate: 6, scale: 1.06 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <Icon className='h-3.5 w-3.5' />
                    </motion.div>
                    <motion.div
                      className='h-[2px] w-8 origin-left bg-[#1e5b28]'
                      whileHover={{ scaleX: 1.18 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                  </div>
                  <h3 className='text-[15px] font-bold leading-snug text-[#102313] sm:text-[1.05rem]'>
                    {service.title}
                  </h3>
                  <p className='mt-1.5 flex-1 text-[11.5px] leading-5 text-[#556457] sm:text-[12px]'>
                    {service.description}
                  </p>
                  <div className='mt-3 flex items-center justify-between border-t border-[#0b3b12]/8 pt-2.5'>
                    <span className='text-[11px] font-medium uppercase tracking-[0.14em] text-[#0b3b12]/55'>
                      Learn More
                    </span>
                    <motion.div
                      className='inline-flex items-center gap-1.5 rounded-full bg-[#0b3b12] px-3 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#14501c]'
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <Link
                        to={service.to}
                        className='inline-flex items-center gap-1.5'
                      >
                        View Service
                        <motion.span
                          whileHover={{ x: 2, y: -2 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <ArrowUpRight className='h-4 w-4' />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
