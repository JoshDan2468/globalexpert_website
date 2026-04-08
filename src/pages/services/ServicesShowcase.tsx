import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Cog,
  FlaskConical,
  HardHat,
  Layers3,
  Pickaxe,
} from "lucide-react";
import { Link } from "react-router-dom";
import serviceImage1 from "@/assets/home_assets/image11.jpg";
import serviceImage2 from "@/assets/home_assets/image14.jpg";
import serviceImage3 from "@/assets/home_assets/image12.jpg";
import serviceImage4 from "@/assets/home_assets/image16.jpg";
import serviceImage5 from "@/assets/about/image2.jpg";
import serviceImage6 from "@/assets/home_assets/image10.jpg";

type ServiceItem = {
  icon: typeof HardHat;
  title: string;
  description: string;
  image: string;
  alt: string;
  to: string;
};

const services: ServiceItem[] = [
  {
    icon: HardHat,
    title: "Construction Consultant",
    description:
      "Practical engineering and construction advisory support that keeps projects coordinated from planning through field execution.",
    image: serviceImage1,
    alt: "Construction consultancy and site delivery planning",
    to: "/services/engineering-services",
  },
  {
    icon: Layers3,
    title: "House Renovation",
    description:
      "Structured renovation guidance that aligns cost, schedule, and build quality for property improvement programs.",
    image: serviceImage2,
    alt: "Building renovation and infrastructure upgrade service",
    to: "/services/business-processes",
  },
  {
    icon: Cog,
    title: "Architecture & Building",
    description:
      "Technical design support and systems thinking that help turn concepts into efficient, buildable outcomes.",
    image: serviceImage3,
    alt: "Architecture and building design service",
    to: "/services/research-development",
  },
  {
    icon: FlaskConical,
    title: "Interior Design",
    description:
      "Purposeful design planning for interior spaces where function, usability, and presentation all matter.",
    image: serviceImage4,
    alt: "Interior design and space planning",
    to: "/services/research-market-intelligence",
  },
  {
    icon: Pickaxe,
    title: "Building Engineering",
    description:
      "Engineering support for high-performance facilities, infrastructure systems, and operational reliability.",
    image: serviceImage5,
    alt: "Building engineering and technical detailing",
    to: "/services/oil-gas-management",
  },
  {
    icon: BriefcaseBusiness,
    title: "Preconstruction Plan",
    description:
      "Early-stage strategy, risk review, and scope definition that reduce overruns and improve delivery confidence.",
    image: serviceImage6,
    alt: "Preconstruction planning and project review",
    to: "/services/project-management-execution",
  },
];

const ServicesShowcase = () => {
  return (
    <section
      id='services'
      className='bg-[linear-gradient(180deg,#ffffff_0%,#f8fbf8_100%)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20'
    >
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14'
        >
          <p className='mx-auto max-w-fit text-xs font-semibold uppercase tracking-[0.24em] text-[#0b3b12] sm:text-sm sm:tracking-[0.28em]'>
            Our Services
          </p>
          <h2 className='mx-auto mt-3 max-w-fit justify-center  text-3xl font-bold tracking-tight text-[#132015] sm:text-4xl lg:text-5xl lg:whitespace-nowrap'>
            Quality services designed for real project delivery
          </h2>
        </motion.div>

        <div className='grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3'>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='group overflow-hidden rounded-[1.6rem] border border-[#0b3b12]/8 bg-white shadow-[0_22px_48px_rgba(15,23,42,0.06)]'
              >
                <div className='relative overflow-hidden'>
                  <motion.img
                    src={service.image}
                    alt={service.alt}
                    loading='lazy'
                    className='h-48 w-full object-cover sm:h-52 lg:h-52'
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <div className='p-5 sm:p-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-11 w-11 items-center justify-center rounded-full bg-[#eef6ef] text-[#0b3b12]'>
                      <Icon className='h-5 w-5' />
                    </div>
                    <div className='h-[2px] w-10 bg-[#1e5b28]' />
                  </div>

                  <h3 className='mt-5 text-center text-xl font-bold text-[#132015] sm:text-[1.3rem]'>
                    {service.title}
                  </h3>
                  <p className='mt-3 text-sm leading-7 text-[#5a6b5d] sm:text-[0.96rem]'>
                    {service.description}
                  </p>

                  <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
                    <Link
                      to={service.to}
                      className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#012402] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto'
                    >
                      View Service
                      <ArrowRight className='h-3.5 w-3.5' />
                    </Link>
                    <Link
                      to={service.to}
                      className='inline-flex w-full items-center justify-center rounded-full border border-[#0b3b12]/12 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#223126] transition-colors duration-300 hover:bg-[#eef6ef] sm:w-auto'
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
