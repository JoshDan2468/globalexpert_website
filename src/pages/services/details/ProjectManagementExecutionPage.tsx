import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardList, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import executionImage from "@/assets/home_assets/image14.jpg";
import CTAFooter from "@/pages/home/CTAFooter";

const projectManagementExecutionService = {
  title: "Project Management and Execution",
  eyebrow: "End-to-End Delivery",
  summary:
    "Complexity of processes connected with project execution and variety of the activities connected: Tasks and resources planning, Co-ordination (client-authorities-vendors), Scheduling and cost control, Progress control with them.",
  intro:
    "As a result, GEC has a team of engineers and technicians is established, mainly from own personal sources, which can solve various professional level problems connected with planning, design, procurement and construction.",
  image: executionImage,
  imageAlt: "Project management and execution planning",
  capabilities: [
    "Tasks and resources planning",
    "Co-ordination (client-authorities-vendors)",
    "Scheduling and cost control",
    "Progress control",
  ],
  outcomes: [
    "The project management covers following activities: Progress reporting, Quality control.",
    "The project team is led by project manager (PM) who is responsible for the entire work regarding quality, economy and agreed time schedule.",
    "Submission of a monthly progress report.",
    "Modifications of the project concept made during the progress of the design phase.",
    "Organizes common project meetings with the Client.",
    "Reach conformity between requirements on technical solution level and investment means.",
  ],
  process: ["Progress reporting", "Quality control"],
  services: [
    "Project Planning & Scheduling",
    "Cost estimates",
    "SOW / ITT activities support",
    "Independent review of detailed engineering design works",
    "Setting up project organization and management structures",
    "Setting up project controls and procedures",
    "Pre-commissioning & Commissioning support",
    "Contracts Administration",
    "Cost Monitoring and cost control",
    "Owners Engineer",
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

const ProjectManagementExecutionPage = () => {
  return (
    <main className='overflow-x-hidden bg-white'>
      <Navbar />
      <section className='relative isolate overflow-hidden bg-[#012402] px-4 pb-14 pt-24 sm:px-6 sm:pb-18 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32'>
        <div className='absolute inset-0'>
          <img
            src={projectManagementExecutionService.image}
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
              {projectManagementExecutionService.eyebrow}
            </p>
            <h1 className='mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
              {projectManagementExecutionService.title}
            </h1>
            <p className='mt-5 max-w-2xl text-[0.98rem] leading-7 text-white sm:text-lg sm:leading-8'>
              {projectManagementExecutionService.summary}
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
              src={projectManagementExecutionService.image}
              alt={projectManagementExecutionService.imageAlt}
              className='h-[260px] w-full rounded-[1.2rem] object-cover sm:h-[360px] sm:rounded-[1.4rem] lg:h-[460px]'
              loading='eager'
              decoding='async'
            />
          </motion.div>
        </div>
      </section>
      <section className='bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20'>
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
            <p className='mt-5 text-sm leading-7 text-[#5a6b5d] sm:text-[0.98rem] sm:leading-8'>
              {projectManagementExecutionService.intro}
            </p>
            <div className='mt-8 grid gap-4 sm:grid-cols-3'>
              <div className='rounded-[1.2rem] bg-[#eef6ef] p-4 sm:rounded-[1.4rem] sm:p-5'>
                <ClipboardList className='h-6 w-6 text-[#0b3b12]' />
                <p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#132015]'>
                  Scope
                </p>
                <p className='mt-2 text-sm leading-6 text-[#49604d]'>
                  Structured around milestones, ownership, and workstream
                  coordination.
                </p>
              </div>
              <div className='rounded-[1.2rem] bg-[#eef6ef] p-4 sm:rounded-[1.4rem] sm:p-5'>
                <Target className='h-6 w-6 text-[#0b3b12]' />
                <p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#132015]'>
                  Outcomes
                </p>
                <p className='mt-2 text-sm leading-6 text-[#49604d]'>
                  Focused on predictability, control, and delivery
                  accountability.
                </p>
              </div>
              <div className='rounded-[1.2rem] bg-[#eef6ef] p-4 sm:rounded-[1.4rem] sm:p-5'>
                <CheckCircle2 className='h-6 w-6 text-[#0b3b12]' />
                <p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#132015]'>
                  Delivery
                </p>
                <p className='mt-2 text-sm leading-6 text-[#49604d]'>
                  Coordinated from kickoff through closeout and handover.
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
              {projectManagementExecutionService.capabilities.map((item) => (
                <div
                  key={item}
                  className='flex items-start gap-3 rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-4'
                >
                  <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-[#a9f3b1]' />
                  <p className='text-sm leading-7 text-white/86'>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className='container mx-auto mt-8 grid gap-8 lg:grid-cols-2'>
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.12 }}
            className='rounded-[1.6rem] border border-[#0b3b12]/8 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:rounded-[1.9rem] sm:p-8'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
              Expected Outcomes
            </p>
            <div className='mt-6 space-y-4'>
              {projectManagementExecutionService.outcomes.map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <Target className='mt-1 h-5 w-5 shrink-0 text-[#0b3b12]' />
                  <p className='text-sm leading-7 text-[#526654]'>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.16 }}
            className='rounded-[1.6rem] border border-[#0b3b12]/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:rounded-[1.9rem] sm:p-8'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
              Delivery Process
            </p>
            <div className='mt-6 space-y-5'>
              {projectManagementExecutionService.process.map((step, index) => (
                <div key={step} className='flex gap-4'>
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
        </div>
      </section>
      <CTAFooter />
    </main>
  );
};

export default ProjectManagementExecutionPage;
