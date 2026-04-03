import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardList, Target } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import { serviceDetailMap } from "@/pages/services/serviceData";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceDetailMap[serviceId] : null;

  if (!service) {
    return (
      <main className='overflow-x-hidden'>
        <Navbar />
        <section className='min-h-screen bg-white px-4 py-32 sm:px-6 lg:px-8'>
          <div className='container mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl font-bold text-[#132015]'>
              Service not found
            </h1>
            <p className='mt-4 text-lg leading-8 text-[#5a6b5d]'>
              We could not find that service page. Please return to our services
              overview to continue browsing.
            </p>
            <Link
              to='/services'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#012402] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white'
            >
              Back to Services
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </section>
        <CTAFooter />
      </main>
    );
  }

  return (
    <main className='overflow-x-hidden bg-white'>
      <Navbar />

      <section className='relative isolate overflow-hidden bg-[#012402] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8'>
        <div className='absolute inset-0'>
          <img
            src={service.image}
            alt=''
            aria-hidden='true'
            className='h-full w-full object-cover opacity-30'
          />
          <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(1,36,2,0.94)_0%,rgba(4,51,18,0.84)_46%,rgba(8,24,17,0.92)_100%)]' />
        </div>

        <div className='relative z-10 container mx-auto grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]'>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-3xl'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a9f3b1]'>
              {service.eyebrow}
            </p>
            <h1 className='mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl'>
              {service.title}
            </h1>
            <p className='mt-5 max-w-2xl text-[1rem] leading-8 text-white/82 sm:text-lg'>
              {service.summary}
            </p>

            <div className='mt-8 flex flex-wrap gap-3'>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102313]'
              >
                Request Consultation
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                to='/services'
                className='inline-flex rounded-full border border-white/20 bg-white/8 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm'
              >
                View All Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className='overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-3 backdrop-blur-sm'
          >
            <img
              src={service.image}
              alt={service.imageAlt}
              className='h-[340px] w-full rounded-[1.4rem] object-cover sm:h-[400px] lg:h-[460px]'
            />
          </motion.div>
        </div>
      </section>

      <section className='bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
        <div className='container mx-auto grid gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
          <motion.div
            {...fadeInUp}
            className='rounded-[1.9rem] border border-[#0b3b12]/8 bg-white p-7 shadow-[0_24px_50px_rgba(15,23,42,0.06)] sm:p-8'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
              Service Overview
            </p>
            <h2 className='mt-4 text-3xl font-bold text-[#132015]'>
              Practical support built around real delivery needs
            </h2>
            <p className='mt-5 text-[0.98rem] leading-8 text-[#5a6b5d]'>
              {service.intro}
            </p>

            <div className='mt-8 grid gap-4 sm:grid-cols-3'>
              <div className='rounded-[1.4rem] bg-[#eef6ef] p-5'>
                <ClipboardList className='h-6 w-6 text-[#0b3b12]' />
                <p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#132015]'>
                  Scope
                </p>
                <p className='mt-2 text-sm leading-6 text-[#49604d]'>
                  Structured around client priorities, delivery stages, and operating context.
                </p>
              </div>
              <div className='rounded-[1.4rem] bg-[#eef6ef] p-5'>
                <Target className='h-6 w-6 text-[#0b3b12]' />
                <p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#132015]'>
                  Outcomes
                </p>
                <p className='mt-2 text-sm leading-6 text-[#49604d]'>
                  Focused on clarity, execution confidence, and measurable improvement.
                </p>
              </div>
              <div className='rounded-[1.4rem] bg-[#eef6ef] p-5'>
                <CheckCircle2 className='h-6 w-6 text-[#0b3b12]' />
                <p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#132015]'>
                  Delivery
                </p>
                <p className='mt-2 text-sm leading-6 text-[#49604d]'>
                  Coordinated with discipline, responsiveness, and implementation in mind.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.08 }}
            className='rounded-[1.9rem] border border-[#0b3b12]/8 bg-[#0c2314] p-7 text-white shadow-[0_24px_50px_rgba(5,22,12,0.16)] sm:p-8'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a9f3b1]'>
              Core Capabilities
            </p>
            <div className='mt-6 space-y-4'>
              {service.capabilities.map((item) => (
                <div
                  key={item}
                  className='flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4'
                >
                  <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-[#a9f3b1]' />
                  <p className='text-sm leading-7 text-white/86'>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className='bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8'>
        <div className='container mx-auto grid gap-8 lg:grid-cols-2'>
          <motion.div
            {...fadeInUp}
            className='rounded-[1.9rem] border border-[#0b3b12]/8 bg-[linear-gradient(180deg,#ffffff_0%,#f6faf6_100%)] p-7 shadow-[0_20px_42px_rgba(15,23,42,0.05)] sm:p-8'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
              What You Gain
            </p>
            <div className='mt-6 space-y-4'>
              {service.outcomes.map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <span className='mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0b3b12]' />
                  <p className='text-[0.98rem] leading-8 text-[#526654]'>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.08 }}
            className='rounded-[1.9rem] border border-[#0b3b12]/8 bg-[linear-gradient(180deg,#f2f7f2_0%,#ffffff_100%)] p-7 shadow-[0_20px_42px_rgba(15,23,42,0.05)] sm:p-8'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
              How We Work
            </p>
            <div className='mt-6 space-y-5'>
              {service.process.map((step, index) => (
                <div key={step} className='flex gap-4'>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b3b12] text-sm font-bold text-white'>
                    {index + 1}
                  </div>
                  <p className='pt-1 text-[0.98rem] leading-8 text-[#526654]'>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
};

export default ServiceDetail;
