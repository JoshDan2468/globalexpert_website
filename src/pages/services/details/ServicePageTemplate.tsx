import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardList, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import engineeringIllustration from "@/assets/services/engin.jpg";
import pipelineIllustration from "@/assets/services/pipe2.jpg";

export type ServicePageData = {
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  outcomes: string[];
  process: string[];
  sectionGroups?: Array<{
    title: string;
    description?: string;
    items: string[];
  }>;
};

type ServicePageTemplateProps = {
  service: ServicePageData;
  isEngineeringService?: boolean;
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

const ServicePageTemplate = ({
  service,
  isEngineeringService = false,
}: ServicePageTemplateProps) => {
  return (
    <main className='overflow-x-hidden bg-white'>
      <Navbar />

      <section className='relative isolate overflow-hidden bg-[#012402] px-4 pb-14 pt-24 sm:px-6 sm:pb-18 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32'>
        <div className='absolute inset-0'>
          <img
            src={service.image}
            alt=''
            aria-hidden='true'
            className='h-full w-full object-cover opacity-30'
          />
          <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(1,36,2,0.94)_0%,rgba(4,51,18,0.84)_46%,rgba(8,24,17,0.92)_100%)]' />
        </div>

        <div className='relative z-10 container mx-auto grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10'>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-3xl'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a9f3b1]'>
              {service.eyebrow}
            </p>
            <h1 className='mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
              {service.title}
            </h1>
            <p className='copy-left mt-5 max-w-2xl text-[0.98rem] leading-7 text-white/82 sm:text-lg sm:leading-8'>
              {service.summary}
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
              <Link
                to='/contact'
                className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102313] sm:w-auto'
              >
                Request Consultation
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                to='/services'
                className='inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:w-auto'
              >
                View All Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.18,
              duration: 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/8 p-2.5 backdrop-blur-sm sm:rounded-[2rem] sm:p-3'
          >
            <img
              src={service.image}
              alt={service.imageAlt}
              className='h-[260px] w-full rounded-[1.2rem] object-cover sm:h-[360px] sm:rounded-[1.4rem] lg:h-[460px]'
            />
          </motion.div>
        </div>
      </section>

      <section className='bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20'>
        {isEngineeringService ? (
          <div className='container mx-auto max-w-6xl'>
            <motion.div
              {...fadeInUp}
              className='grid gap-10 border-y border-[#0b3b12]/10 py-8 lg:grid-cols-[1.25fr_0.75fr] lg:py-12'
            >
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
                  Engineering Overview
                </p>
                <h2 className='mt-4 text-2xl font-bold text-[#132015] sm:text-3xl'>
                  A complete engineering scope from feasibility to start-up
                </h2>
                <p className='copy-justify mt-5 text-sm leading-7 text-[#5a6b5d] sm:text-[0.98rem] sm:leading-8'>
                  {service.intro}
                </p>
              </div>

              <div className='lg:border-l lg:border-[#0b3b12]/10 lg:pl-8'>
                <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
                  Delivery Highlights
                </p>
                <div className='mt-5 space-y-4'>
                  <div className='flex items-start gap-3'>
                    <ClipboardList className='mt-0.5 h-5 w-5 shrink-0 text-[#0b3b12]' />
                    <p className='text-sm leading-7 text-[#526654]'>
                      Structured to cover EPC activities including feasibility, authority engineering, detailed design, procurement support, construction, and commissioning readiness.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Target className='mt-0.5 h-5 w-5 shrink-0 text-[#0b3b12]' />
                    <p className='text-sm leading-7 text-[#526654]'>
                      Built around practical problem-solving, partner-backed delivery strength, and systems thinking across field development and plant performance.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-[#0b3b12]' />
                    <p className='text-sm leading-7 text-[#526654]'>
                      Supported by specialist engineering tools, design experience, and technical assurance through construction and start-up.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.08 }}
              className='mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]'
            >
              <div className='overflow-hidden rounded-[1.8rem] border border-[#0b3b12]/10 bg-white shadow-[0_22px_44px_rgba(15,23,42,0.06)]'>
                <img
                  src={engineeringIllustration}
                  alt='Engineering team coordination and technical design review'
                  className='h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]'
                  loading='lazy'
                />
              </div>

              <div className='flex flex-col justify-center rounded-[1.8rem] border border-[#0b3b12]/10 bg-[#f5faf5] p-6 sm:p-8'>
                <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
                  Visual Context
                </p>
                <h3 className='mt-4 text-2xl font-bold text-[#132015]'>
                  Engineering support grounded in design, coordination, and delivery readiness
                </h3>
                <p className='copy-justify mt-4 text-sm leading-7 text-[#5a6b5d] sm:text-[0.98rem] sm:leading-8'>
                  These illustrations reinforce the practical nature of our engineering delivery, showing the balance between technical design work, field execution planning, and infrastructure systems support.
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className='container mx-auto grid gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
            <motion.div
              {...fadeInUp}
              className='rounded-[1.6rem] border border-[#0b3b12]/8 bg-white p-5 shadow-[0_24px_50px_rgba(15,23,42,0.06)] sm:rounded-[1.9rem] sm:p-8'
            >
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
                Service Overview
              </p>
              <h2 className='mt-4 text-2xl font-bold text-[#132015] sm:text-3xl'>
                Practical support built around real delivery needs
              </h2>
              <p className='copy-justify mt-5 text-sm leading-7 text-[#5a6b5d] sm:text-[0.98rem] sm:leading-8'>
                {service.intro}
              </p>

              <div className='mt-8 grid gap-4 sm:grid-cols-3'>
                <div className='rounded-[1.2rem] bg-[#eef6ef] p-4 sm:rounded-[1.4rem] sm:p-5'>
                  <ClipboardList className='h-6 w-6 text-[#0b3b12]' />
                  <p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#132015]'>
                    Scope
                  </p>
                  <p className='mt-2 text-sm leading-6 text-[#49604d]'>
                    Structured around client priorities, delivery stages, and operating context.
                  </p>
                </div>
                <div className='rounded-[1.2rem] bg-[#eef6ef] p-4 sm:rounded-[1.4rem] sm:p-5'>
                  <Target className='h-6 w-6 text-[#0b3b12]' />
                  <p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#132015]'>
                    Outcomes
                  </p>
                  <p className='mt-2 text-sm leading-6 text-[#49604d]'>
                    Focused on clarity, execution confidence, and measurable improvement.
                  </p>
                </div>
                <div className='rounded-[1.2rem] bg-[#eef6ef] p-4 sm:rounded-[1.4rem] sm:p-5'>
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
              className='rounded-[1.6rem] border border-[#0b3b12]/8 bg-[#0c2314] p-5 text-white shadow-[0_24px_50px_rgba(5,22,12,0.16)] sm:rounded-[1.9rem] sm:p-8'
            >
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a9f3b1]'>
                Core Capabilities
              </p>
              <div className='mt-6 space-y-4'>
                {service.capabilities.map((item) => (
                  <div
                    key={item}
                    className='flex items-start gap-3 rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-4 sm:rounded-[1.2rem]'
                  >
                    <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-[#a9f3b1]' />
                    <p className='text-sm leading-7 text-white/86'>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </section>

      <CTAFooter />
    </main>
  );
};

export default ServicePageTemplate;
