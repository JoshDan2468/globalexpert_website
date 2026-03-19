import { motion } from "framer-motion";

const FloatingStats = () => (
  <section className='bg-[#0b2a12]'>
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.2 }}
        className='py-10 md:py-12'
      >
        <div className='grid grid-cols-2 gap-y-8 gap-x-6 text-center md:grid-cols-4'>
          <div>
            <div className='text-3xl md:text-4xl font-bold text-[#e1b84a]'>
              500+
            </div>
            <div className='text-sm text-white/80'>Projects Completed</div>
          </div>
          <div>
            <div className='text-3xl md:text-4xl font-bold text-[#e1b84a]'>
              150+
            </div>
            <div className='text-sm text-white/80'>Global Clients</div>
          </div>
          <div>
            <div className='text-3xl md:text-4xl font-bold text-[#e1b84a]'>
              35+
            </div>
            <div className='text-sm text-white/80'>Countries Served</div>
          </div>
          <div>
            <div className='text-3xl md:text-4xl font-bold text-[#e1b84a]'>
              25+
            </div>
            <div className='text-sm text-white/80'>Years of Excellence</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FloatingStats;

