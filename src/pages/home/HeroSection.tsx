import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/home_assets/image20.jpg";

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-[90vh] overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          src={heroImage}
          alt='Energy infrastructure overview'
          className='h-full w-full object-cover transition duration-800 ease-out'
        />
        <div className='absolute inset-0 bg-black/30' />
        {/* <div className='absolute inset-0 bg-gradient-to-r from-[#012402] via-[#012402]/65 to-transparent' /> */}
      </div>

      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-30 sm:pt-28 lg:pt-40 pb-14 sm:pb-16'>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className='relative max-w-full pt-8 sm:pt-10  bg-[#0f1f12]/60 rounded-2xl backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.20)] ring-1 ring-white/20 p-8 sm:p-10 transition-transform duration-300 overflow-hidden'
        >
          <div
            className='pointer-events-none absolute inset-0 opacity-70'
            style={{
              background:
                "radial-gradient(120px 120px at 20% 20%, rgba(255,255,255,0.45), rgba(255,255,255,0) 60%), radial-gradient(160px 160px at 80% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0) 60%), radial-gradient(220px 220px at 50% 80%, rgba(255,255,255,0.25), rgba(255,255,255,0) 60%)",
            }}
          />
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 to-transparent' />
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-7xl md:text-6xl lg:text-8xl font-extrabold text-white leading-tight'
          >
            Global Experts <span className='text-[#a9f3b1]'>Consultoria</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mt-5 text-base md:text-2xl text-white/80 max-w-8xl text-left break-keep'
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
          >
            Delivering world class engineering, project management, asset
            integrity, and maintenance consultancy solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt-6 flex flex-wrap gap-3 sm:gap-4'
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
