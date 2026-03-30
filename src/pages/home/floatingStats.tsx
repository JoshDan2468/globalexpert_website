import { motion } from "framer-motion";

const FloatingStats = () => (
  <section className='bg-[#012402]'>
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className='py-10 md:py-12'
      >
        <div className='grid grid-cols-2 gap-y-8 gap-x-6 text-center md:grid-cols-4'>
          <div>
            <div className='text-3xl md:text-4xl font-bold text-white'>
              500+
            </div>
            <div className='text-sm text-[#ebf5ec]'>Projects Completed</div>
          </div>
          <div>
            <div className='text-3xl md:text-4xl font-bold text-white'>
              150+
            </div>
            <div className='text-sm text-[#ebf5ec]'>Global Clients</div>
          </div>
          <div>
            <div className='text-3xl md:text-4xl font-bold text-white'>
              35+
            </div>
            <div className='text-sm text-[#ebf5ec]'>Countries Served</div>
          </div>
          <div>
            <div className='text-3xl md:text-4xl font-bold text-white'>
              25+
            </div>
            <div className='text-sm text-[#ebf5ec]'>Years of Excellence</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FloatingStats;

