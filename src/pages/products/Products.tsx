import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import heroImage from "@/assets/home_assets/image10.jpg";
import image1 from "@/assets/home_assets/image11.jpg";
import image2 from "@/assets/home_assets/image12.jpg";
import image3 from "@/assets/home_assets/image13.jpg";
import image4 from "@/assets/home_assets/image14.jpg";
import image5 from "@/assets/home_assets/image16.jpg";
import image6 from "@/assets/about/image2.jpg";
import { productDetails } from "@/pages/products/productData";

type ProductItem = {
  id: string;
  title: string;
  short: string;
  image: string;
  alt: string;
  description: string;
};

const productItems: ProductItem[] = [
  {
    id: productDetails[0].slug,
    title: "Digitalization",
    short: "Smart connected systems",
    image: image1,
    alt: "Digitalization and connected systems",
    description:
      "Edge-enabled digital solutions for real-time visibility, control, and decision-making across operations.",
  },
  {
    id: productDetails[1].slug,
    title: "Digital Twin",
    short: "Live asset simulation",
    image: image2,
    alt: "Digital twin technology and simulation",
    description:
      "Simulation-backed operational insight that helps teams monitor assets, predict issues, and improve performance.",
  },
  {
    id: productDetails[2].slug,
    title: "Electrical Safety",
    short: "Certified protection systems",
    image: image3,
    alt: "Electrical equipment and safety systems",
    description:
      "Protection, monitoring, and safety solutions designed for demanding industrial and hazardous environments.",
  },
  {
    id: productDetails[4].slug,
    title: "Flowmeters",
    short: "Precision measurement tools",
    image: image4,
    alt: "Flowmeters and industrial sensors",
    description:
      "Accurate monitoring equipment for process control, multiphase flow measurement, and field instrumentation.",
  },
  {
    id: productDetails[6].slug,
    title: "Renewable Energy",
    short: "Hybrid energy systems",
    image: image5,
    alt: "Renewable energy technologies",
    description:
      "Reliable renewable power solutions that support energy resilience, optimization, and sustainability targets.",
  },
  {
    id: productDetails[11].slug,
    title: "Valves & Pumps",
    short: "Industrial flow control",
    image: image6,
    alt: "Valves flanges and pumps",
    description:
      "Heavy-duty components and pump systems built for robust fluid handling and operational continuity.",
  },
];

const productFeatures = [
  {
    icon: Clock3,
    title: "Responsive Delivery",
    text: "Fast technical response and dependable product support when timing matters most.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    text: "Solutions selected with operational quality, compliance, and long-term performance in mind.",
  },
  {
    icon: Wrench,
    title: "Technical Expertise",
    text: "Products backed by engineering insight so selection and deployment fit real project demands.",
  },
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeProduct = productItems[activeIndex];

  const getWrappedIndex = (index: number) =>
    (index + productItems.length) % productItems.length;

  const showPrevious = () => {
    setActiveIndex((current) => getWrappedIndex(current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => getWrappedIndex(current + 1));
  };

  return (
    <main className='overflow-x-hidden bg-[#f7f8f5]'>
      <Navbar />

      <section className='relative overflow-hidden pt-24 sm:pt-28'>
        <div className='absolute inset-0'>
          <img
            src={heroImage}
            alt=''
            aria-hidden='true'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(6,24,45,0.82)_0%,rgba(6,24,45,0.66)_48%,rgba(6,24,45,0.86)_100%)]' />
        </div>

        <div className='relative z-10 container mx-auto px-4 pb-20 pt-16 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className='mx-auto max-w-3xl text-center'
          >
            <h1 className='text-4xl font-bold text-white sm:text-5xl md:text-6xl'>
              Our Products
            </h1>
            <p className='mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/80 sm:text-base'>
              Industry-graded products and technology solutions selected for
              reliability, safety, and execution readiness.
            </p>
            <div className='mt-8 flex flex-wrap justify-center gap-3'>
              
              <Link
                to='/contact'
                className='inline-flex rounded-full border border-white/22 bg-white/8 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/14 hover:bg-white/50'
              >
                Request Support
              </Link>
            </div>
          </motion.div>

          <div className='relative mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3'>
            {productFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.22 + index * 0.12,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='rounded-[1.4rem] border border-white/14 bg-white px-5 py-6 text-center shadow-[0_16px_34px_rgba(6,24,45,0.15)]'
                >
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef5ff] text-[#234a91]'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <h2 className='mt-4 text-lg font-bold text-[#132015]'>
                    {feature.title}
                  </h2>
                  <p className='mt-2 text-sm leading-6 text-[#5e6d61]'>
                    {feature.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id='product-selector'
        className='bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8'
      >
        <div className='container mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className='mx-auto mb-10 max-w-3xl text-center sm:mb-14'
          >
            <h2 className='text-3xl font-bold tracking-tight text-[#234a91] sm:text-4xl'>
              What product solution are you looking for?
            </h2>
          </motion.div>

          <div className='mx-auto mb-8 flex max-w-3xl items-center justify-between gap-4'>
            <button
              type='button'
              onClick={showPrevious}
              className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#234a91]/12 bg-white text-[#234a91] shadow-sm transition-colors duration-300 hover:bg-[#f3f7ff]'
              aria-label='Show previous product'
            >
              <ArrowLeft className='h-5 w-5' />
            </button>

            <div className='flex flex-wrap items-center justify-center gap-3'>
              {productItems.map((product, index) => (
                <button
                  key={product.id}
                  type='button'
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-10 bg-[#234a91]"
                      : "w-2.5 bg-[#234a91]/25 hover:bg-[#234a91]/45"
                  }`}
                  aria-label={`Go to ${product.title}`}
                />
              ))}
            </div>

            <button
              type='button'
              onClick={showNext}
              className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#234a91]/12 bg-white text-[#234a91] shadow-sm transition-colors duration-300 hover:bg-[#f3f7ff]'
              aria-label='Show next product'
            >
              <ArrowRight className='h-5 w-5' />
            </button>
          </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className='mx-auto max-w-3xl rounded-[1.9rem] border border-[#234a91]/10 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-5 shadow-[0_24px_50px_rgba(15,23,42,0.06)] sm:p-7'
            >
              <div className='grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center'>
                <div className='overflow-hidden rounded-[1.6rem]'>
                  <motion.img
                    src={activeProduct.image}
                    alt={activeProduct.alt}
                    loading='lazy'
                    className='h-64 w-full object-cover sm:h-72'
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#234a91]/72'>
                    Selected Product
                  </p>
                  <h3 className='mt-3 text-center text-3xl font-bold text-[#132015] sm:text-4xl'>
                    {activeProduct.title}
                  </h3>
                  <p className='mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[#5f7081]'>
                    {activeProduct.short}
                  </p>
                  <p className='mt-5 text-[0.98rem] leading-7 text-[#5e6d61]'>
                    {activeProduct.description}
                  </p>

                  <div className='mt-7 flex flex-wrap gap-3'>
                    <Link
                      to={`/products/${activeProduct.id}`}
                      className='inline-flex items-center gap-2 rounded-full bg-[#234a91] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:-translate-y-0.5'
                    >
                      View Product
                      <ArrowRight className='h-3.5 w-3.5' />
                    </Link>
                    <Link
                      to='/contact'
                      className='inline-flex rounded-full border border-[#234a91]/12 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#234a91] transition-colors duration-300 hover:bg-[#f3f7ff]'
                    >
                      Request Information
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
};

export default Products;
