import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ctaImage from "@/assets/home_assets/image10.jpg";

const ServicesCtaBand = () => {
  return (
    <section className='relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8'>
      <div className='absolute inset-0'>
        <img
          src={ctaImage}
          alt=''
          aria-hidden='true'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,11,0.84)_0%,rgba(8,22,11,0.7)_50%,rgba(8,22,11,0.88)_100%)]' />
      </div>

      <div className='relative z-10 container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto max-w-4xl text-center'
        >
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl'>
            We Have Expert Engineers
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/76 sm:text-base'>
            Let&apos;s discuss your next engineering, advisory, or delivery
            challenge and shape a response that is practical, cost-aware, and
            execution-ready.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 rounded-full bg-[#ff7b22] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:-translate-y-0.5'
            >
              Request a Quote
              <ArrowRight className='h-3.5 w-3.5' />
            </Link>
            <a
              href='tel:+2348068970938'
              className='inline-flex rounded-full border border-white/24 bg-white/8 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/14'
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCtaBand;
