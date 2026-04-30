import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 7, suffix: "+", label: "Global Offices" },
  { value: 6, suffix: "+", label: "Services Offered" },
  { value: 10, suffix: "+", label: "Key Industries" },
  { value: 3, suffix: "", label: "Continents" },
];

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

type AnimatedCounterProps = {
  target: number;
  suffix: string;
  inView: boolean;
  delay?: number;
};

const AnimatedCounter = ({
  target,
  suffix,
  inView,
  delay = 0,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) {
      return;
    }

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let frameId = 0;
    let timeoutId = 0;
    const duration = 1800;

    const startCounter = () => {
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = easeOutCubic(progress);

        setCount(Math.round(target * easedProgress));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
          return;
        }

        setCount(target);
      };

      frameId = requestAnimationFrame(tick);
    };

    timeoutId = window.setTimeout(startCounter, delay);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [delay, inView, prefersReducedMotion, target]);

  return (
    <motion.span
      initial={{ scale: 0.86, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.86, opacity: 0 }}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.16,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className='relative overflow-hidden bg-primary py-20' ref={ref}>
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-3xl' />
        <div className='absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-accent blur-3xl' />
      </div>

      <div className='container relative z-10 mx-auto px-6'>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
          {stats.map((stat, index) => {
            const counterDelay = index * 160;

            return (
              <motion.div
                key={stat.label}
                custom={index}
                variants={cardVariants}
                initial='hidden'
                animate={inView ? "visible" : "hidden"}
                className='text-center'
              >
                <div className='mb-2 font-display text-4xl font-bold text-accent md:text-5xl'>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                    delay={counterDelay}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{
                    duration: 0.65,
                    delay: 0.24 + index * 0.16,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='text-sm font-medium text-primary-foreground/60'
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
