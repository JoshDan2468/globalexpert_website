import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import { policyDetailMap } from "@/pages/guiding-policies/policyData";
import verified from "@/assets/policies/verified.jpg";

const PolicyDetail = () => {
  const { policySlug } = useParams<{ policySlug: string }>();
  const policy = policySlug ? policyDetailMap[policySlug] : null;
  const narrative = policy?.policyNarrative;
  const detailPoints =
    narrative?.checklistItems ?? policy?.assurancePoints ?? policy?.commitments;
  const showImageVisual = policy?.visualMode !== "badge";

  if (!policy) {
    return (
      <main className='overflow-x-hidden bg-white'>
        <Navbar />
        <section className='min-h-screen px-4 py-32 sm:px-6 lg:px-8'>
          <div className='container mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl font-bold text-[#132015]'>
              Policy not found
            </h1>
            <p className='mt-4 text-lg leading-8 text-[#5a6b5d]'>
              We could not find that policy page. Please continue to the quality
              policy or contact us for assistance.
            </p>
            <Link
              to='/guiding-policies/quality-policy'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b3b12] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white'
            >
              View Quality Policy
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </section>
        <CTAFooter />
      </main>
    );
  }

  return (
    <main className='overflow-x-hidden bg-[#f7faf7]'>
      <Navbar />

      <section className='relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8'>
        <div className='absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f2f8f2_100%)]' />
        <div className='relative container mx-auto max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className='mx-auto max-w-3xl text-center'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
              {policy.eyebrow}
            </p>
            <h1 className='mt-5 text-4xl font-semibold tracking-tight text-[#142315] sm:text-5xl lg:text-6xl'>
              {policy.title}
            </h1>
            <p className='mt-4 text-lg leading-8 text-[#516252] sm:text-xl'>
              {policy.subtitle ?? narrative?.leadTitle ?? policy.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className='px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8'>
        <div className='container mx-auto max-w-6xl'>
          <div className='grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start'>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className='rounded-[2rem] border border-[#dce9dc] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-10'
            >
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#0b3b12]'>
                {policy.eyebrow}
              </p>
              <h2 className='mt-4 text-3xl font-semibold tracking-tight text-[#17311a]'>
                {narrative?.leadLabel ?? "Policy Overview"}
              </h2>
              <div className='mt-6 space-y-6'>
                {(narrative?.paragraphs ?? [policy.intro]).map((paragraph) => (
                  <p
                    key={paragraph}
                    className='text-[1rem] leading-8 text-[#4f5f51] sm:text-[1.03rem]'
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: 0.08,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='space-y-8'
            >
              <div className='overflow-hidden rounded-[2rem] border border-[#dce9dc] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8'>
                {showImageVisual ? (
                  <img
                    src={verified}
                    alt={policy.visualAlt ?? "Policy illustration"}
                    className='mx-auto w-full max-w-[520px] object-contain'
                  />
                ) : (
                  <div className='rounded-[1.6rem] bg-[linear-gradient(180deg,#f4fbf4_0%,#ffffff_100%)] p-8 text-center'>
                    <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e6f5e8]'>
                      <ShieldCheck className='h-10 w-10 text-[#138a36]' />
                    </div>
                    <h2 className='mt-5 text-2xl font-semibold text-[#17311a]'>
                      HSE Commitment
                    </h2>
                    <p className='mt-3 text-[0.98rem] leading-8 text-[#4f5f51]'>
                      Safe operations, environmental responsibility, and shared
                      accountability guide every level of our work.
                    </p>
                  </div>
                )}
              </div>

              {detailPoints.length ? (
                <div className='rounded-[2rem] border border-[#dce9dc] bg-[#0f2413] p-7 text-white shadow-[0_24px_60px_rgba(8,23,45,0.14)] sm:p-8'>
                  <div className='flex items-center gap-3'>
                    <ShieldCheck className='h-5 w-5 text-[#9ae6a5]' />
                    <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#9ae6a5]'>
                      {narrative?.checklistLabel ?? "Core Commitments"}
                    </p>
                  </div>
                  <div className='mt-6 space-y-4'>
                    {detailPoints.map((item) => (
                      <div
                        key={item}
                        className='flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4'
                      >
                        <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-[#9ae6a5]' />
                        <p className='text-sm leading-7 text-white/86'>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      </section>

      {policy.priorities.length ? (
        <section className='px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8'>
          <div className='container mx-auto max-w-6xl rounded-[2rem] border border-[#dce9dc] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.05)] sm:p-10'>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#0b3b12]'>
              Priority Areas
            </p>
            <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {policy.priorities.map((item) => (
                <div
                  key={item}
                  className='rounded-[1.4rem] bg-[#f3f8f3] p-5 text-sm leading-7 text-[#4f5f51]'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {policy.sectionGroups?.length ? (
        <section className='px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8'>
          <div className='container mx-auto max-w-6xl rounded-[2rem] border border-[#dce9dc] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.05)] sm:p-10'>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#0b3b12]'>
              Policy Framework
            </p>
            <div className='mt-8 grid gap-6 lg:grid-cols-2'>
              {policy.sectionGroups.map((group) => (
                <div
                  key={group.title}
                  className='rounded-[1.6rem] border border-[#e3ece3] bg-[#fbfdfb] p-6'
                >
                  <h2 className='text-2xl font-semibold text-[#17311a]'>
                    {group.title}
                  </h2>
                  {group.description ? (
                    <p className='mt-3 text-[0.98rem] leading-8 text-[#4f5f51]'>
                      {group.description}
                    </p>
                  ) : null}
                  <div className='mt-5 space-y-3'>
                    {group.items.map((item) => (
                      <div key={item} className='flex items-start gap-3'>
                        <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-[#0b3b12]' />
                        <p className='text-[0.98rem] leading-7 text-[#4f5f51]'>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTAFooter />
    </main>
  );
};

export default PolicyDetail;
