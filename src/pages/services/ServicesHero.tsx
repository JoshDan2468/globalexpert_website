import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/home_assets/image11.jpg";

const titleWords = ["Our", "Services"];

const ServicesHero = () => {
  return (
    <section className='relative isolate overflow-hidden bg-[#012402] px-4 pb-14 pt-28 sm:px-6 sm:pb-18 sm:pt-32 lg:px-8 lg:pb-24'>
      <div className='absolute inset-0'>
        <motion.img
          src={heroImage}
          alt=''
          aria-hidden='true'
          className='absolute inset-0 h-full w-full object-cover opacity-45'
          animate={{
            scale: [1, 1.06, 1.02, 1],
            x: [0, 16, -10, 0],
            y: [0, -10, 14, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(169,243,177,0.14),_transparent_32%),linear-gradient(135deg,_rgba(255,255,255,0.04),_transparent_48%),linear-gradient(180deg,_rgba(2,49,2,0.8)_0%,_rgba(1,36,2,0.88)_52%,_rgba(0,20,0,0.95)_100%)]' />
        <motion.div
          aria-hidden='true'
          className='absolute inset-x-[-10%] top-[15%] h-[56%] opacity-45'
          animate={{
            x: ["-4%", "4%", "-2%", "-4%"],
            y: ["0%", "4%", "-3%", "0%"],
            scaleX: [1, 1.08, 0.97, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(124,214,124,0.18) 0%, rgba(31,92,31,0.12) 32%, rgba(1,36,2,0) 68%)",
            filter: "blur(36px)",
          }}
        />
      </div>

      <div className='relative z-10 container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className='max-w-4xl'
        >
          <div className='inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2.5 backdrop-blur-sm'>
            <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#c8f0ce]'>
              <BriefcaseBusiness className='h-5 w-5' />
            </span>
            <span className='text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/82'>
              What We Deliver
            </span>
          </div>

          <h1 className='mt-6 flex flex-wrap gap-x-4 gap-y-2 text-left text-4xl font-bold leading-none text-white sm:text-5xl md:text-6xl'>
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 42, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  delay: 0.22 + index * 0.18,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={word === "Services" ? "text-[#a9f3b1]" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className='mt-5 max-w-3xl text-[1rem] leading-8 text-white/80 sm:text-lg'
          >
            Explore our engineering, project execution, advisory, research, and
            intelligence capabilities designed to help clients move with more
            clarity, confidence, and operational strength.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className='mt-8 flex flex-wrap gap-3'
          >
            <a
              href='#services'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102313] transition-transform duration-300 hover:-translate-y-0.5'
            >
              Browse Services
              <ArrowRight className='h-3.5 w-3.5' />
            </a>
            <Link
              to='/contact'
              className='inline-flex rounded-full border border-white/22 bg-white/8 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/14'
            >
              Talk to Our Team
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
