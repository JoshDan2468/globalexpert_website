import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/home_assets/image11.jpg";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const contactDetails = [
  {
    icon: MapPin,
    value: "41B Isaac John, Ikeja, New York",
  },
  {
    icon: Mail,
    value: "user@itchco.com",
  },
  {
    icon: Phone,
    value: "+1 182 357 0192",
  },
  {
    icon: Phone,
    value: "+1 818 347 902",
  },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className='overflow-x-hidden bg-white'>
      <Navbar />

      <section
        className='relative isolate overflow-hidden px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:px-8'
        ref={ref}
      >
        <div className='absolute inset-0'>
          <motion.img
            src={heroImage}
            alt=''
            aria-hidden='true'
            className='h-full w-full object-cover'
            animate={
              inView
                ? {
                    scale: [1, 1.03, 1.01, 1],
                    x: [0, 10, -8, 0],
                    y: [0, -8, 10, 0],
                  }
                : {}
            }
            transition={{
              duration: 22,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(1,38,31,0.7)_0%,rgba(1,38,31,0.82)_100%)]' />
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "show" : "hidden"}
          className='relative z-10 container mx-auto text-center text-white'
        >
          <motion.h1
            variants={itemVariants}
            className='text-[2.2rem] font-bold sm:text-[2.55rem]'
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-[#dcb861]'
          >
            Get In Touch
          </motion.p>
        </motion.div>
      </section>

      <section className='bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8'>
        <div className='container mx-auto max-w-[860px]'>
          <div className='grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 lg:items-start'>
            <motion.aside
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: smoothEase }}
              className='bg-[#033b35] px-6 py-8 text-white sm:px-7 sm:py-9'
            >
              <h2 className='text-[1.6rem] font-bold'>Contact Us</h2>
              <motion.div
                variants={containerVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.28 }}
                className='mt-8 space-y-4'
              >
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.value}
                      variants={itemVariants}
                      className='flex items-start gap-3'
                    >
                      <span className='mt-1 flex h-4 w-4 shrink-0 items-center justify-center text-[#d9bf73]'>
                        <Icon className='h-3.5 w-3.5' />
                      </span>
                      <div>
                        <p className='text-[11px] leading-5 text-white/86'>
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.85, ease: smoothEase }}
              className='bg-white py-1'
            >
              <h2 className='text-[1.55rem] font-bold text-[#27312c] sm:text-[1.75rem]'>
                Get In Touch With Us
              </h2>
              <p className='mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d9bf73]'>
                And we will get back to you.
              </p>
              <div className='mt-4 h-px w-8 bg-[#d9bf73]' />

              <motion.form
                variants={containerVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.2 }}
                className='mt-6 space-y-3'
              >
                <div className='grid gap-3 sm:grid-cols-2'>
                  <motion.input
                    variants={itemVariants}
                    type='text'
                    placeholder='First Name'
                    className='h-10 w-full border border-[#efefef] bg-[#f8f8f8] px-3 text-[10px] text-[#27312c] outline-none transition-colors duration-200 placeholder:text-[#b0aca5] focus:border-[#d9bf73] focus:bg-white'
                  />
                  <motion.input
                    variants={itemVariants}
                    type='text'
                    placeholder='Last Name'
                    className='h-10 w-full border border-[#efefef] bg-[#f8f8f8] px-3 text-[10px] text-[#27312c] outline-none transition-colors duration-200 placeholder:text-[#b0aca5] focus:border-[#d9bf73] focus:bg-white'
                  />
                </div>

                <motion.input
                  variants={itemVariants}
                  type='email'
                  placeholder='Email'
                  className='h-10 w-full border border-[#efefef] bg-[#f8f8f8] px-3 text-[10px] text-[#27312c] outline-none transition-colors duration-200 placeholder:text-[#b0aca5] focus:border-[#d9bf73] focus:bg-white'
                />

                <motion.input
                  variants={itemVariants}
                  type='text'
                  placeholder='Subject'
                  className='h-10 w-full border border-[#efefef] bg-[#f8f8f8] px-3 text-[10px] text-[#27312c] outline-none transition-colors duration-200 placeholder:text-[#b0aca5] focus:border-[#d9bf73] focus:bg-white'
                />

                <motion.textarea
                  variants={itemVariants}
                  placeholder='Message'
                  rows={5}
                  className='min-h-[108px] w-full border border-[#efefef] bg-[#f8f8f8] px-3 py-3 text-[10px] text-[#27312c] outline-none transition-colors duration-200 placeholder:text-[#b0aca5] focus:border-[#d9bf73] focus:bg-white'
                />

                <motion.div variants={itemVariants} className='pt-1'>
                  <button
                    type='submit'
                    className='inline-flex min-w-24 items-center justify-center bg-[#d9a441] px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#c79439]'
                  >
                    Submit
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: smoothEase }}
        className='bg-white px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8'
      >
        <div className='mx-auto max-w-[920px] overflow-hidden'>
          <div className='h-[280px] w-full sm:h-[320px] lg:h-[340px]'>
            <iframe
              title='Global Expert location map'
              src='https://www.google.com/maps?q=Ikeja%20Lagos&z=13&output=embed'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='h-full w-full border-0'
            />
          </div>
        </div>
      </motion.section>

      <section className='bg-white px-4 pb-12 pt-5 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className='mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 text-[#202020]'
        >
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className='transition-colors duration-200 hover:text-[#d9a441]'
              >
                <Icon className='h-[13px] w-[13px]' />
              </a>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
