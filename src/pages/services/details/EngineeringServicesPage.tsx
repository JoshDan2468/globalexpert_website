import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardList, Target } from '@/lib/icons';
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import engineeringImage from "@/assets/home_assets/build.jpg";
import engineeringIllustration from "@/assets/services/const.jpg";
import CTAFooter from "@/pages/home/CTAFooter";

const engineeringService = {
  title: "Engineering Services",
  eyebrow: "Technical Delivery",
  summary:
    "GEC offers a complete range of engineering services across feasibility, basic engineering, authority engineering, detailed engineering, procurement, purchasing, construction activities, and plant start-up.",
  intro:
    "GEC through her partners has the necessary resources, background, and expertise to perform offered services in a professional and well-organised manner. Our partnership relationship allows us to take part in large projects. GEC has acquired specialist software that enables our engineers to focus on solving client problems effectively. Our advantage is our experience in design engineering and construction of technological complexes, including cooperation with foreign partners and flexibility in problem solving.",
  image: engineeringImage,
  imageAlt: "Engineering planning and technical collaboration",
  capabilities: [
    "Detailed engineering design covering corrosion mitigation, cathodic protection, electrical and power systems, instrumentation and controls, civil and structural designs, 3D PDMS modeling, stress analysis, safety studies, equipment sizing, pipeline systems, and mechanical systems.",
    "Concept and front-end engineering design including field development studies, feasibility and concept selection studies, debottlenecking, optimisation, upgrade and revamp studies, pipeline hydraulic studies, flow assurance, outline business case studies, and complete basic engineering packages.",
    "Field development support from conceptual design through pre-FEED, FEED, and detailed design for both greenfield and brownfield developments.",
    "Flow assurance and production chemistry support for new projects and existing downstream assets.",
    "Technical, safety, and quality assurance during construction activities, plus procurement and supplier selection support.",
  ],
  outcomes: [
    "A systems approach linking reservoir, subsea, and topsides facilities to support successful projects and stronger financial investment decisions.",
    "Professional and well-organised engineering delivery supported by specialist tools, partner capability, and practical design and construction experience.",
    "Improved field development capability through support for complex fluids, lab data, testing, fluid characterization, and OLGA transient multiphase flow modelling.",
    "High system availability through engineering, chemical, operational, safety, and quality support across development and operations.",
  ],
  process: [
    "Development screening and planning through economic and technical assessment, appraisal data gathering, and impartial recommendations.",
    "Conceptual engineering (Pre-FEED) through concept selection, field architecture, basis of design management, and cost estimation.",
    "Front End Engineering Design (FEED) through concept refinement, technical and economic refinement, development risk assessment, and field layout optimisation.",
    "Detailed design, construction, commissioning, start-up support, training, and procurement coordination.",
  ],
  sectionGroups: [
    {
      title: "Detailed Engineering Design",
      items: [
        "Corrosion mitigation and cathodic protection design",
        "Electrical and power system design",
        "Instrumentation and controls systems",
        "Civil and structural designs for onshore and offshore facilities, including platform design and modeling",
        "3D PDMS modeling and stress analysis",
        "Safety and loss prevention studies and design",
        "Equipment sizing and design calculations",
        "Pipeline systems design",
        "Mechanical systems design",
      ],
    },
    {
      title: "Concept / Front-End Engineering Design",
      items: [
        "Field development studies",
        "Feasibility and concept selection studies",
        "Debottlenecking and optimisation",
        "Upgrade and revamp studies",
        "Pipeline hydraulic studies",
        "Flow assurance studies",
        "Outline business case studies",
        "Complete basic engineering packages",
      ],
    },
    {
      title: "Field Development",
      description:
        "Our engineers focus on delivering field development from conceptual, pre-FEED, FEED, and detailed design projects for greenfield and brownfield developments. We utilize a systems approach linking reservoir, subsea, and topsides facilities.",
      items: [
        "Greenfield and brownfield field development",
        "Specialists in complex fluids including heavy oil, sour service, wax, and hydrates",
        "Lab data and testing management",
        "Fluid characterization",
        "OLGA modelling for transient multiphase flow",
        "Technical, safety, and quality assurance services during construction activities",
      ],
    },
    {
      title: "Development Screening and Planning",
      items: [
        "Economic and technical screening and assessment",
        "Appraisal data gathering",
        "Impartial recommendations",
      ],
    },
    {
      title: "Conceptual Engineering (Pre-FEED)",
      items: [
        "Selection of preferred concept",
        "Field architecture and layout",
        "Basis of design management",
        "Cost estimation and economics",
      ],
    },
    {
      title: "Front End Engineering Design (FEED)",
      items: [
        "Concept development refinement",
        "Technical and economic refinement",
        "Development risk assessment",
        "Field layout optimisation",
      ],
    },
    {
      title: "Detailed Design",
      items: [
        "Detailed engineering for field development, pipelines, and structures",
        "Optimized start-up procedures",
        "Handover and start-up management",
      ],
    },
    {
      title: "Flow Assurance & Production Chemistry",
      description:
        "The team of experts supports field development capabilities as well as operations and optimisation services. We also provide production chemistry support to new projects and existing downstream assets, from fluid sampling and analysis to major incompatibilities, helping maintain high system availability.",
      items: [
        "Fluid sampling and analysis",
        "Engineering and chemical solutions for production continuity",
        "PIPESIM steady state analysis",
      ],
    },
    {
      title: "Operations",
      items: [
        "Operations risk management and mitigation",
        "Operating philosophies and procedures",
        "Debottlenecking",
        "Hydrate and wax deposition strategies",
      ],
    },
    {
      title: "Construction",
      items: [
        "Construction planning",
        "Equipment installation",
        "Commissioning",
        "Start-up support",
        "Training",
      ],
    },
    {
      title: "Procurement",
      description:
        "During detail engineering, the process of offer evaluation follows to select the most suitable suppliers in terms of quality, reliability, and financing.",
      items: [
        "RFQ and solicitation",
        "Evaluation of bids and supplier selection",
        "Purchase orders and contract awards",
        "Logistic and shipping",
      ],
    },
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

const EngineeringServicesPage = () => {
  return (
    <main className='overflow-x-hidden bg-white'>
      <Navbar />

      <section className='relative isolate overflow-hidden bg-[#ffffff] px-4 pb-14 pt-24 sm:px-6 sm:pb-18 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32'>
        <div className='absolute inset-0'>
          <img
            src={engineeringService.image}
            alt=''
            aria-hidden='true'
            className='h-full w-full object-cover opacity-30 lcp-image'
            loading='eager'
            decoding='async'
            data-lcp='true'
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
              {engineeringService.eyebrow}
            </p>
            <h1 className='mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
              {engineeringService.title}
            </h1>
            <p className='mt-5 max-w-2xl text-[0.98rem] leading-7 text-white sm:text-lg sm:leading-8'>
              {engineeringService.summary}
            </p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
              <Link
                to='/contact'
                className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102313] sm:w-auto'
              >
                Request Consultation
                <ArrowRight className='h-4 w-4' />
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
              src={engineeringService.image}
              alt={engineeringService.imageAlt}
              className='h-[260px] w-full rounded-[1.2rem] object-cover sm:h-[360px] sm:rounded-[1.4rem] lg:h-[460px]'
              loading='eager'
              decoding='async'
            />
          </motion.div>
        </div>
      </section>

      <section className='bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20'>
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
              <p className='mt-5 text-sm leading-7 text-[#5a6b5d] sm:text-[0.98rem] sm:leading-8'>
                {engineeringService.intro}
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
                    Structured to cover EPC activities including feasibility,
                    authority engineering, detailed design, procurement support,
                    construction, and commissioning readiness.
                  </p>
                </div>
                <div className='flex items-start gap-3'>
                  <Target className='mt-0.5 h-5 w-5 shrink-0 text-[#0b3b12]' />
                  <p className='text-sm leading-7 text-[#526654]'>
                    Built around practical problem-solving, partner-backed
                    delivery strength, and systems thinking across field
                    development and plant performance.
                  </p>
                </div>
                <div className='flex items-start gap-3'>
                  <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-[#0b3b12]' />
                  <p className='text-sm leading-7 text-[#526654]'>
                    Supported by specialist engineering tools, design
                    experience, and technical assurance through construction and
                    start-up.
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
                Engineering support grounded in design, coordination, and
                delivery readiness
              </h3>
              <p className='mt-4 text-sm leading-7 text-[#5a6b5d] sm:text-[0.98rem] sm:leading-8'>
                These illustrations reinforce the practical nature of our
                engineering delivery, showing the balance between technical
                design work, field execution planning, and infrastructure
                systems support.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.12 }}
            className='mt-10 grid gap-8 lg:grid-cols-2'
          >
            <div className='rounded-[1.8rem] border border-[#0b3b12]/10 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-8'>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
                Core Capabilities
              </p>
              <div className='mt-6 space-y-4'>
                {engineeringService.capabilities.map((item) => (
                  <div key={item} className='flex items-start gap-3'>
                    <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-[#0b3b12]' />
                    <p className='text-sm leading-7 text-[#526654]'>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='rounded-[1.8rem] border border-[#0b3b12]/10 bg-[#0c2314] p-6 text-white shadow-[0_18px_40px_rgba(5,22,12,0.16)] sm:p-8'>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a9f3b1]'>
                Delivery Outcomes
              </p>
              <div className='mt-6 space-y-4'>
                {engineeringService.outcomes.map((item) => (
                  <div
                    key={item}
                    className='flex items-start gap-3 rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-4'
                  >
                    <Target className='mt-1 h-5 w-5 shrink-0 text-[#a9f3b1]' />
                    <p className='text-sm leading-7 text-white/86'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.16 }}
            className='mt-10 rounded-[1.8rem] border border-[#0b3b12]/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-8'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
              Delivery Process
            </p>
            <div className='mt-6 grid gap-5 lg:grid-cols-2'>
              {engineeringService.process.map((step, index) => (
                <div
                  key={step}
                  className='flex gap-4 rounded-[1.2rem] bg-white p-5'
                >
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b3b12] text-sm font-bold text-white'>
                    {index + 1}
                  </div>
                  <p className='pt-1 text-sm leading-7 text-[#526654]'>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className='mt-10'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
              Service Areas
            </p>
            <div className='mt-6 grid gap-6 lg:grid-cols-2'>
              {engineeringService.sectionGroups.map((group) => (
                <div
                  key={group.title}
                  className='rounded-[1.6rem] border border-[#0b3b12]/10 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]'
                >
                  <h3 className='text-xl font-bold text-[#132015]'>
                    {group.title}
                  </h3>
                  {group.description ? (
                    <p className='mt-3 text-sm leading-7 text-[#5a6b5d]'>
                      {group.description}
                    </p>
                  ) : null}
                  <div className='mt-5 space-y-3'>
                    {group.items.map((item) => (
                      <div key={item} className='flex items-start gap-3'>
                        <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-[#0b3b12]' />
                        <p className='text-sm leading-7 text-[#526654]'>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
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

export default EngineeringServicesPage;
