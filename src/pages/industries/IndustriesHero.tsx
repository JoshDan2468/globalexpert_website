import { motion } from "framer-motion";

const titleWords = ["Industries", "We", "Serve"];

const IndustriesHero = () => {
  return (
    <section className='relative isolate overflow-hidden bg-[#012402] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-20'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(169,243,177,0.14),_transparent_34%),linear-gradient(135deg,_rgba(255,255,255,0.03),_transparent_48%),linear-gradient(180deg,_#023102_0%,_#012402_50%,_#001400_100%)]' />
        <motion.div
          aria-hidden='true'
          className='absolute inset-[-18%] opacity-60'
          animate={{
            rotate: [0, 6, -5, 0],
            scale: [1, 1.07, 1.02, 1],
            x: [0, 24, -18, 0],
            y: [0, -14, 18, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            background:
              "conic-gradient(from 200deg at 50% 50%, rgba(2,36,2,0) 0deg, rgba(96,191,96,0.16) 76deg, rgba(1,36,2,0.06) 150deg, rgba(122,223,122,0.18) 240deg, rgba(1,36,2,0) 360deg)",
            filter: "blur(52px)",
          }}
        />
        <motion.div
          aria-hidden='true'
          className='absolute inset-x-[-12%] top-[16%] h-[56%] opacity-55'
          animate={{
            x: ["-4%", "4%", "-2%", "-4%"],
            y: ["0%", "4%", "-3%", "0%"],
            scaleX: [1, 1.08, 0.97, 1],
          }}
          transition={{
            duration: 17,
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

      <div className='relative z-10 mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className='max-w-4xl'
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className='inline-flex max-w-full items-center rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#d8fadb]/82 backdrop-blur-sm sm:px-4 sm:text-[0.68rem] sm:tracking-[0.34em]'
          >
            Dedicated Industries Page
          </motion.div>

          <h1 className='mt-5 flex max-w-4xl flex-wrap gap-x-3 gap-y-2 text-left text-[2.2rem] font-bold leading-[0.96] text-white sm:mt-6 sm:gap-x-4 sm:text-5xl md:text-6xl'>
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 42, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  delay: 0.22 + index * 0.14,
                  duration: 0.82,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={word === "Serve" ? "text-[#a9f3b1]" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.82 }}
            className='mt-4 max-w-2xl text-left text-[0.98rem] leading-7 text-white/78 sm:mt-5 sm:text-base sm:leading-8 md:max-w-3xl'
          >
            Explore the sectors we support through engineering, project
            execution, operational advisory, and technology-led solutions built
            for demanding environments.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesHero;
