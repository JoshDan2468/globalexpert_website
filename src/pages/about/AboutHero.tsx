import { motion } from "framer-motion";
import aboutHeroWorldMap from "@/assets/about/about-hero-world-map.jpg";

const titleWords = ["About", "Us"];

const floatingOrbs = [
  {
    className:
      "left-[-12%] top-[-18%] h-64 w-64 sm:h-80 sm:w-80 bg-[#0a4a0a]/55",
    duration: 16,
    x: [0, 70, 10, 0],
    y: [0, 40, -30, 0],
    scale: [1, 1.12, 0.96, 1],
  },
  {
    className:
      "right-[-10%] top-[8%] h-72 w-72 sm:h-96 sm:w-96 bg-[#1a6b1a]/35",
    duration: 18,
    x: [0, -80, -20, 0],
    y: [0, 55, 20, 0],
    scale: [1, 0.92, 1.08, 1],
  },
  {
    className:
      "bottom-[-22%] left-[22%] h-72 w-72 sm:h-[26rem] sm:w-[26rem] bg-[#7bd67b]/16",
    duration: 20,
    x: [0, 50, -40, 0],
    y: [0, -50, -15, 0],
    scale: [1, 1.08, 0.94, 1],
  },
];

const AboutHero = () => {
  return (
    <section className='relative isolate overflow-hidden bg-[#012402] px-6 pb-14 pt-28 sm:pb-20 sm:pt-32 md:px-12 lg:px-20'>
      <div className='absolute inset-0'>
        <motion.img
          src={aboutHeroWorldMap}
          alt=''
          aria-hidden='true'
          className='absolute inset-0 h-full w-full object-cover opacity-65'
          animate={{
            scale: [1, 1.08, 1.03, 1],
            x: [0, 14, -10, 0],
            y: [0, -10, 16, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(169,243,177,0.12),_transparent_34%),linear-gradient(135deg,_rgba(255,255,255,0.04),_transparent_48%),linear-gradient(180deg,_rgba(2,49,2,0.72)_0%,_rgba(1,36,2,0.84)_52%,_rgba(0,20,0,0.94)_100%)]' />
        <motion.div
          aria-hidden='true'
          className='absolute inset-[-20%] opacity-70'
          animate={{
            rotate: [0, 8, -6, 0],
            scale: [1, 1.08, 1.02, 1],
            x: [0, 24, -18, 0],
            y: [0, -18, 22, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(2,36,2,0) 0deg, rgba(96,191,96,0.16) 70deg, rgba(1,36,2,0.06) 135deg, rgba(122,223,122,0.18) 220deg, rgba(1,36,2,0) 360deg)",
            filter: "blur(48px)",
          }}
        />
        <motion.div
          aria-hidden='true'
          className='absolute inset-x-[-12%] top-[12%] h-[58%] opacity-55'
          animate={{
            x: ["-4%", "5%", "-2%", "-4%"],
            y: ["0%", "4%", "-3%", "0%"],
            scaleX: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 22,
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
        <motion.div
          aria-hidden='true'
          className='absolute inset-0 opacity-20'
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <motion.div
          aria-hidden='true'
          className='absolute inset-0 mix-blend-screen opacity-25'
          animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 5px)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 18%, rgba(0,0,0,0.9) 82%, transparent 100%)",
          }}
        />
        <motion.div
          aria-hidden='true'
          className='absolute inset-0 opacity-10'
          animate={{ backgroundPosition: ["0% 0%", "100% 60%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 0.7px, transparent 0.7px)",
            backgroundSize: "18px 18px",
          }}
        />

        {floatingOrbs.map((orb, index) => (
          <motion.div
            key={index}
            aria-hidden='true'
            className={`absolute rounded-full blur-3xl ${orb.className}`}
            animate={{ x: orb.x, y: orb.y, scale: orb.scale }}
            transition={{
              duration: orb.duration + 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          aria-hidden='true'
          className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#012402] to-transparent'
          animate={{ opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className='relative z-10 mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className='max-w-3xl'
        >
          <h1 className='mt-2 flex flex-wrap gap-x-4 gap-y-2 text-left text-4xl font-bold leading-none text-white sm:text-5xl md:text-6xl'>
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 46, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  delay: 0.28 + index * 0.2,
                  duration: 1.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={word === "Us" ? "text-[#a9f3b1]" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className='mt-5 max-w-2xl text-left text-white text-lg leading-7 text-white/78 sm:text-base'
          >
            Explore who we are, where we operate, and the expertise behind our
            engineering, project management, and consultancy services.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
