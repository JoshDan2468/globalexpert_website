import { motion } from "framer-motion";
import { ArrowRight, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import { policyDetails } from "@/pages/guiding-policies/policyData";

const icons = [FileText, Shield];

const GuidingPolicies = () => (
  <main className='overflow-x-hidden bg-white'>
    <Navbar />

    <section className='bg-[linear-gradient(135deg,#012402_0%,#0b3b12_52%,#17381a_100%)] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8'>
      <div className='container mx-auto max-w-4xl text-center text-white'>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a9f3b1]'
        >
          Governance and Responsibility
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className='mt-4 text-4xl font-bold sm:text-5xl'
        >
          Guiding Policies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mt-5 max-w-3xl text-[1rem] leading-8 text-white/82 sm:text-lg'
        >
          Our guiding policies frame how we maintain quality, protect people,
          and uphold responsible operations across the work we deliver.
        </motion.p>
      </div>
    </section>

    <section className='bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='container mx-auto grid gap-6 md:grid-cols-2'>
        {policyDetails.map((policy, index) => {
          const Icon = icons[index] ?? FileText;

          return (
            <motion.article
              key={policy.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.08,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='rounded-[1.9rem] border border-[#0b3b12]/8 bg-white p-7 shadow-[0_24px_50px_rgba(15,23,42,0.06)] sm:p-8'
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6ef] text-[#0b3b12]'>
                <Icon className='h-5 w-5' />
              </div>
              <p className='mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
                {policy.eyebrow}
              </p>
              <h2 className='mt-3 text-3xl font-bold text-[#132015]'>
                {policy.title}
              </h2>
              <p className='mt-4 text-[0.98rem] leading-8 text-[#5a6b5d]'>
                {policy.summary}
              </p>

              <Link
                to={`/guiding-policies/${policy.slug}`}
                className='mt-7 inline-flex items-center gap-2 rounded-full bg-[#012402] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white'
              >
                View Policy
                <ArrowRight className='h-4 w-4' />
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>

    <CTAFooter />
  </main>
);

export default GuidingPolicies;
