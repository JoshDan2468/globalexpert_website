import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import heroImage1 from "@/assets/home_assets/image20.jpg";
import heroImage2 from "@/assets/home_assets/image18.jpg";
import heroImage3 from "@/assets/home_assets/image14.jpg";
import heroImage4 from "@/assets/home_assets/image11.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id='hero' className='relative min-h-[90vh] overflow-hidden'>
      <div className='absolute inset-0'>
        {heroImages.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt='Energy infrastructure overview'
            initial={false}
            animate={{
              opacity: index === activeImageIndex ? 1 : 0,
              scale: index === activeImageIndex ? 1 : 1.04,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className='absolute inset-0 h-full w-full object-cover'
          />
        ))}
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-700/40 to-transparent' />
        <div className='absolute inset-0 bg-black/15' />
      </div>

      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-30 sm:pt-28 lg:pt-40 pb-14 sm:pb-16'>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='max-w-5xl pt-8 sm:pt-10'
        >
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-tight'
          >
            Global Experts <span className='text-[#a9f3b1]'>Consultoria</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mt-5 max-w-3xl text-base md:text-2xl text-white/90 text-left break-keep'
            style={{ fontWeight: 700 }}
          >
            Delivering world class engineering, project management, asset
            integrity, and maintenance consultancy solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt-6 flex flex-wrap gap-3 sm:gap-4 pb-20'
          >
            {[
              "Engineering Services",
              "Project Management",
              "Asset Integrity",
            ].map((label) => (
              <span
                key={label}
                className='inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white/85'
              >
                <CheckCircle className='h-4 w-4 text-[#a9f3b1]' />
                {label}
              </span>
            ))}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mt-8 flex flex-wrap gap-4 sm:gap-6'
          >
            <a
              href='/contact'
              className='px-6 py-3 rounded-full bg-[#ebf5ec] text-[#012402] text-sm font-semibold hover:brightness-95 transition-all'
            >
              Contact Our Team
            </a>
            <a
              href='/services'
              className='px-6 py-3 rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2'
            >
              Stay Powerful
              <ArrowRight className='w-4 h-4' />
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
