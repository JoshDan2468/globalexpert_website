import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import { policyDetailMap } from "@/pages/guiding-policies/policyData";

const PolicyDetail = () => {
  const { policySlug } = useParams<{ policySlug: string }>();
  const policy = policySlug ? policyDetailMap[policySlug] : null;

  if (!policy) {
    return (
      <main className='overflow-x-hidden'>
        <Navbar />
        <section className='min-h-screen bg-white px-4 py-32 sm:px-6 lg:px-8'>
          <div className='container mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl font-bold text-[#132015]'>
              Policy not found
            </h1>
            <p className='mt-4 text-lg leading-8 text-[#5a6b5d]'>
              We could not find that policy page. Please return to the guiding
              policies overview.
            </p>
            <Link
              to='/guiding-policies'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#012402] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white'
            >
              Back to Policies
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

      <section className='bg-[linear-gradient(135deg,#012402_0%,#0b3b12_48%,#17381a_100%)] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8'>
        <div className='container mx-auto max-w-5xl'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className='rounded-[2rem] border border-white/10 bg-white/6 p-8 text-white shadow-[0_24px_60px_rgba(5,22,12,0.18)] backdrop-blur-sm sm:p-10'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a9f3b1]'>
              {policy.eyebrow}
            </p>
            <h1 className='mt-4 text-4xl font-bold sm:text-5xl'>
              {policy.title}
            </h1>
            <p className='mt-5 max-w-3xl text-[1rem] leading-8 text-white/82 sm:text-lg'>
              {policy.summary}
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102313]'
              >
                Contact Us
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                to='/guiding-policies'
                className='inline-flex rounded-full border border-white/20 bg-white/8 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white'
              >
                All Policies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
        <div className='container mx-auto grid gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className='rounded-[1.9rem] border border-[#0b3b12]/8 bg-white p-7 shadow-[0_24px_50px_rgba(15,23,42,0.06)] sm:p-8'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
              Policy Overview
            </p>
            <h2 className='mt-4 text-3xl font-bold text-[#132015]'>
              Direction that shapes how we operate
            </h2>
            <p className='mt-5 text-[0.98rem] leading-8 text-[#5a6b5d]'>
              {policy.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className='rounded-[1.9rem] border border-[#0b3b12]/8 bg-[#0c2314] p-7 text-white shadow-[0_24px_50px_rgba(5,22,12,0.16)] sm:p-8'
          >
            <div className='flex items-center gap-3'>
              <Shield className='h-6 w-6 text-[#a9f3b1]' />
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a9f3b1]'>
                Core Commitments
              </p>
            </div>
            <div className='mt-6 space-y-4'>
              {policy.commitments.map((item) => (
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
        <div className='container mx-auto max-w-4xl rounded-[1.9rem] border border-[#0b3b12]/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] p-7 shadow-[0_20px_42px_rgba(15,23,42,0.05)] sm:p-8'>
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
            Priority Areas
          </p>
          <div className='mt-6 grid gap-4 sm:grid-cols-3'>
            {policy.priorities.map((item) => (
              <div
                key={item}
                className='rounded-[1.4rem] bg-[#eef6ef] p-5 text-sm leading-7 text-[#425745]'
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
};

export default PolicyDetail;
