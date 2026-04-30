import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariantsReverse = {
  hidden: { opacity: 0, x: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const textGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type ProductSectionLayoutProps = {
  id: string;
  title: string;
  short: string;
  summary: string;
  details: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  imageClassName?: string;
};

const ProductSectionLayout = ({
  id,
  title,
  short,
  summary,
  details,
  image,
  imageAlt,
  reverse = false,
  imageClassName,
}: ProductSectionLayoutProps) => {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className='scroll-mt-28 border-t border-[#d7e0d8] bg-white'
    >
      <div
        className={`grid items-stretch lg:grid-cols-[1.05fr_0.95fr] ${
          reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        <motion.div
          variants={reverse ? imageVariantsReverse : imageVariants}
          className={`relative min-h-[260px] overflow-hidden bg-[#dfe7ee] sm:min-h-[320px] lg:min-h-full ${
            imageClassName ?? ""
          }`}
        >
          <motion.img
            src={image}
            alt={imageAlt}
            className='absolute inset-0 h-full w-full object-cover'
            loading='lazy'
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(1,36,2,0.12)_0%,rgba(1,36,2,0.02)_45%,rgba(1,36,2,0)_100%)]' />
        </motion.div>

        <motion.div
          variants={textGroupVariants}
          className='flex items-center bg-[#f5f5f2] px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[420px] lg:px-12 lg:py-12'
        >
          <div className='mx-auto w-full max-w-xl overflow-hidden'>
            <motion.h2
              variants={textItemVariants}
              className='text-left text-3xl font-bold uppercase tracking-[0.04em] text-[#0d62b3] sm:text-4xl'
            >
              {title}
            </motion.h2>
            <motion.p
              variants={textItemVariants}
              className='mt-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[#012402]/65'
            >
              {short}
            </motion.p>
            <motion.div
              variants={textItemVariants}
              className='mt-5 h-px w-16 bg-[#0d62b3]/25'
            />
            <motion.p
              variants={textItemVariants}
              className='mt-6 max-w-lg text-left text-[0.94rem] leading-7 text-[#27372a]'
            >
              {summary}
            </motion.p>
            <motion.p
              variants={textItemVariants}
              className='mt-4 max-w-lg text-left text-[0.94rem] leading-7 text-[#27372a]'
            >
              {details}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductSectionLayout;
