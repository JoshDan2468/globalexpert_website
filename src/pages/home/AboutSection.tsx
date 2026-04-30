import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutBg from "@/assets/home_assets/survay.jpg";
import gexpertLogo from "@/assets/gexpet logo.jpeg";

const locations = [
  "Lagos, Nigeria",
  "Maputo, Mozambique",
  "Freetown, Sierra Leone",
  "Accra, Ghana",
  "Windhoek, Namibia",
  "Houston, Texas, USA",
  "Oklahoma City, Oklahoma, USA",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id='about' className='section-padding bg-secondary' ref={ref}>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.15 }}
            className='max-w-2xl'
          >
            {/* <div className='mb-3 flex items-center gap-3'>
              <div className='h-px w-10 bg-[#a9f3b1]' />
              <span className='font-display text-xl font-semibold uppercase tracking-widest text-[#a9f3b1]'>
                Welcome To
              </span>
            </div> */}
            <h2 className='mb-4 text-3xl font-display font-bold leading-[1.1] text-foreground md:text-5xl'>
              Global Experts <span className='text-[#a9f3b1]'>Consultoria</span>
            </h2>
            <p className='mb-4 leading-7 text-muted-foreground'>
              We are a global company with presence in Lagos, Nigeria; Maputo,
              Mozambique; Freetown, Sierra Leone; Accra, Ghana; Windhoek,
              Namibia; Houston, Texas; Oklahoma City, Oklahoma (USA) and other
              Africa countries.
            </p>
            <p className='mb-4 leading-7 text-muted-foreground'>
              Incorporated to engage in the provision of: Engineering, Project
              Management, Market Research, Bid Administration, Health,
              Information Technology, Registration, Procurement, Automation,
              Product Management and other services globally.
            </p>
            <p className='mb-6 leading-7 text-muted-foreground'>
              Our focus is to provide world class Engineering, Project
              Management, Asset Integrity and Operations & Maintenance, Product
              Management and Consultancy solutions to our clients.
            </p>

            <div>
              <h4 className='mb-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground'>
                Global Presence
              </h4>
              <div className='flex flex-wrap gap-2'>
                {locations.map((loc, i) => (
                  <motion.span
                    key={loc}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.55, delay: 0.7 + i * 0.1 }}
                    className='px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/10'
                  >
                    {loc}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.15, delay: 0.3 }}
            className='relative'
          >
            <div className='rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src={aboutBg}
                alt='GEC engineering team reviewing project blueprints on site'
                className='w-full h-[500px] object-cover'
                loading='lazy'
              />
            </div>
            <div className='absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl'>
              <img
                src={gexpertLogo}
                alt='Global Experts Consultoria logo'
                className='h-14 w-auto object-contain sm:h-16'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
