import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from '@/lib/icons';
import heroImage1 from "@/assets/home_assets/image20.jpg";
import heroImage3 from "@/assets/home_assets/image19.jpg";
import {
  shouldAnimateOnMount,
  getAnimationDuration,
  getStaggerDelay,
  isMobileDevice,
  batchAnimationConfig,
} from "@/lib/animation-utils";

type HeroImage = {
  src: string;
  alt: string;
};

type HeroHighlight = {
  title: string;
};

const heroImages: HeroImage[] = [
  {
    src: heroImage1,
    alt: "Engineering professionals reviewing infrastructure operations",
  },
  {
    src: heroImage3,
    alt: "Industrial facility supporting high-value asset operations",
  },
];

const heroHighlights: HeroHighlight[] = [
  { title: "Engineering Services" },
  { title: "Project Management" },
  { title: "Asset Integrity" },
];

const sectionClasses = "relative min-h-[88vh] overflow-hidden bg-[#08130a]";

const contentWrapperClasses =
  "relative z-10 container mx-auto flex min-h-[88vh] items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28";

const eyebrowClasses =
  "text-left text-xs font-semibold uppercase tracking-[0.24em] text-[#a9f3b1] sm:text-base sm:tracking-[0.32em]";

const headingClasses =
  "mt-4 max-w-[13ch] text-left text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:mt-6 sm:max-w-4xl sm:text-5xl md:max-w-5xl md:text-5xl lg:text-[5.25rem] xl:text-[6rem]";

const bodyTextClasses =
  "mt-5 max-w-[54rem] text-left text-base leading-7 text-white sm:mt-6 sm:text-xl md:text-[1.35rem] md:leading-9";

const badgeClasses =
  "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm sm:px-5 sm:py-3 sm:text-base";

const overlayClasses = {
  primary:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,10,0.56)_0%,rgba(7,18,10,0.28)_42%,rgba(7,18,10,0.05)_100%)]",
};

// Create animation variants that respect user preferences and device type
const getTextContainerVariants = () => {
  const shouldAnimate = shouldAnimateOnMount();
  const isMobile = isMobileDevice();
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldAnimate ? getStaggerDelay(0.16) : 0,
        delayChildren: shouldAnimate ? getStaggerDelay(0.15) : 0,
      },
    },
  };
};

const getTextItemVariants = () => {
  const shouldAnimate = shouldAnimateOnMount();
  const isMobile = isMobileDevice();
  return {
    hidden: { opacity: 0, y: shouldAnimate ? 24 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: getAnimationDuration(isMobile ? 0.6 : 0.8),
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };
};

const getBadgeContainerVariants = () => {
  const shouldAnimate = shouldAnimateOnMount();
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldAnimate ? getStaggerDelay(0.1) : 0,
        delayChildren: shouldAnimate ? getStaggerDelay(0.45) : 0,
      },
    },
  };
};

const getBadgeItemVariants = () => {
  const shouldAnimate = shouldAnimateOnMount();
  const isMobile = isMobileDevice();
  return {
    hidden: { opacity: 0, y: shouldAnimate ? 16 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: getAnimationDuration(isMobile ? 0.4 : 0.55),
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };
};

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImage = useMemo(
    () => heroImages[activeImageIndex],
    [activeImageIndex],
  );

  // Compute animation variants based on user preferences
  const textContainerVariants = useMemo(() => getTextContainerVariants(), []);
  const textItemVariants = useMemo(() => getTextItemVariants(), []);
  const badgeContainerVariants = useMemo(() => getBadgeContainerVariants(), []);
  const badgeItemVariants = useMemo(() => getBadgeItemVariants(), []);

  useEffect(() => {
    heroImages.forEach((image) => {
      const preloadImage = new Image();
      preloadImage.src = image.src;
    });

    const interval = window.setInterval(() => {
      setActiveImageIndex(
        (currentIndex) => (currentIndex + 1) % heroImages.length,
      );
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id='hero' className={sectionClasses}>
      {/* Background image slider */}
      <div className='absolute inset-0'>
        {heroImages.map((image, index) => (
          <motion.img
            key={image.src}
            src={image.src}
            alt={image.alt}
            initial={false}
            animate={{
              opacity: index === activeImageIndex ? 1 : 0,
              scale: index === activeImageIndex ? 1 : 1.035,
            }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className='absolute inset-0 h-full w-full object-cover lcp-image'
            fetchpriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            decoding='async'
            data-lcp={index === 0 ? "true" : undefined}
            width={1920}
            height={1080}
          />
        ))}
        <div className={overlayClasses.primary} />
      </div>

      {/* Main content */}
      <div className={contentWrapperClasses}>
        <motion.div
          variants={textContainerVariants}
          initial='hidden'
          animate='visible'
          className='w-full max-w-5xl text-left'
        >
          {/* Small top label */}
          <motion.p variants={textItemVariants} className={eyebrowClasses}>
            Global Experts Consultoria
          </motion.p>

          {/* Main heading */}
          <motion.h1 variants={textItemVariants} className={headingClasses}>
            Engineering and asset support for high-value operations.
          </motion.h1>

          {/* Supporting text */}
          <motion.p variants={textItemVariants} className={bodyTextClasses}>
            We deliver practical engineering, project delivery, asset integrity,
            and maintenance consultancy solutions with clarity, discipline, and
            execution confidence.
          </motion.p>

          {/* Service highlight badges */}
          <motion.div
            variants={badgeContainerVariants}
            className='mt-7 flex flex-wrap items-start justify-start gap-3 sm:gap-4'
          >
            {heroHighlights.map((highlight) => (
              <motion.span
                key={highlight.title}
                variants={badgeItemVariants}
                className={badgeClasses}
              >
                <CheckCircle className='h-4 w-4 text-[#a9f3b1]' />
                {highlight.title}
              </motion.span>
            ))}
          </motion.div>

          {/* Screen-reader-only context for the active background image */}
          <p className='sr-only'>{currentImage.alt}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
