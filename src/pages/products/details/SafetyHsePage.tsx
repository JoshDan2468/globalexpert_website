import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import image from "@/assets/home_assets/image10.jpg";
import CTAFooter from "@/pages/home/CTAFooter";

const product = {
  title: "Safety/HSE",
  short: "Protection and compliance tools",
  summary:
    "Safety and HSE-focused products that support risk control, workforce protection, and stronger operational compliance.",
  image,
  imageAlt: "Safety and HSE operational equipment",
  intro:
    "We provide safety and HSE products selected to help clients maintain safer worksites, stronger compliance practices, and more confident field operations.",
  applications: [
    "Worksite safety and risk reduction programs",
    "Compliance-oriented operating environments",
    "Field operations requiring protective systems and tools",
  ],
  valuePoints: [
    "Stronger safety culture support",
    "Improved operational risk awareness",
    "Better alignment with HSE expectations",
  ],
  support: [
    "Requirement-based product selection",
    "Deployment planning and usage guidance",
    "Ongoing technical support around implementation",
  ],
};

const SafetyHsePage = () => {
  return (
    <main className='overflow-x-hidden bg-white'>
      <Navbar />
      <section className='relative isolate overflow-hidden bg-[#0f2748] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8'><div className='absolute inset-0'><img src={product.image} alt='' aria-hidden='true' className='h-full w-full object-cover opacity-24' /><div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(6,24,45,0.95)_0%,rgba(17,43,83,0.84)_50%,rgba(8,23,45,0.92)_100%)]' /></div><div className='relative z-10 container mx-auto grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]'><motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className='max-w-3xl'><p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a7c7ff]'>Product Solution</p><h1 className='mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl'>{product.title}</h1><p className='mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/66'>{product.short}</p><p className='mt-5 max-w-2xl text-[1rem] leading-8 text-white/82 sm:text-lg'>{product.summary}</p><div className='mt-8 flex flex-wrap gap-3'><Link to='/contact' className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#16335e]'>Request Information<ArrowRight className='h-4 w-4' /></Link><Link to='/products' className='inline-flex rounded-full border border-white/20 bg-white/8 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm'>View All Products</Link></div></motion.div><motion.div initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className='overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-3 backdrop-blur-sm'><img src={product.image} alt={product.imageAlt} className='h-[340px] w-full rounded-[1.4rem] object-cover sm:h-[400px] lg:h-[460px]' /></motion.div></div></section>
      <section className='bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8'><div className='container mx-auto grid gap-8 lg:grid-cols-[1.05fr_0.95fr]'><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className='rounded-[1.9rem] border border-[#234a91]/10 bg-white p-7 shadow-[0_24px_50px_rgba(15,23,42,0.06)] sm:p-8'><p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#234a91]'>Overview</p><h2 className='mt-4 text-3xl font-bold text-[#132015]'>Practical products aligned to real operating demands</h2><p className='mt-5 text-[0.98rem] leading-8 text-[#5a6b5d]'>{product.intro}</p><div className='mt-8 grid gap-4 sm:grid-cols-3'><div className='rounded-[1.4rem] bg-[#eef5ff] p-5'><ShieldCheck className='h-6 w-6 text-[#234a91]' /><p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#16335e]'>Reliable</p><p className='mt-2 text-sm leading-6 text-[#536477]'>Selected for dependable performance in demanding environments.</p></div><div className='rounded-[1.4rem] bg-[#eef5ff] p-5'><Wrench className='h-6 w-6 text-[#234a91]' /><p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#16335e]'>Practical</p><p className='mt-2 text-sm leading-6 text-[#536477]'>Built around application fit, usability, and project realities.</p></div><div className='rounded-[1.4rem] bg-[#eef5ff] p-5'><CheckCircle2 className='h-6 w-6 text-[#234a91]' /><p className='mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#16335e]'>Supported</p><p className='mt-2 text-sm leading-6 text-[#536477]'>Backed by technical guidance from selection through deployment.</p></div></div></motion.div><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className='rounded-[1.9rem] border border-[#234a91]/10 bg-[#183662] p-7 text-white shadow-[0_24px_50px_rgba(8,23,45,0.18)] sm:p-8'><p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#a7c7ff]'>Typical Applications</p><div className='mt-6 space-y-4'>{product.applications.map((item) => <div key={item} className='flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4'><CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-[#a7c7ff]' /><p className='text-sm leading-7 text-white/86'>{item}</p></div>)}</div></motion.div></div></section>
      <section className='bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8'><div className='container mx-auto grid gap-8 lg:grid-cols-2'><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className='rounded-[1.9rem] border border-[#234a91]/10 bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] p-7 shadow-[0_20px_42px_rgba(15,23,42,0.05)] sm:p-8'><p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#234a91]'>Value Delivered</p><div className='mt-6 space-y-4'>{product.valuePoints.map((item) => <div key={item} className='flex items-start gap-3'><span className='mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#234a91]' /><p className='text-[0.98rem] leading-8 text-[#526654]'>{item}</p></div>)}</div></motion.div><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className='rounded-[1.9rem] border border-[#234a91]/10 bg-[linear-gradient(180deg,#f5f9ff_0%,#ffffff_100%)] p-7 shadow-[0_20px_42px_rgba(15,23,42,0.05)] sm:p-8'><p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#234a91]'>Support Scope</p><div className='mt-6 space-y-5'>{product.support.map((step, index) => <div key={step} className='flex gap-4'><div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#234a91] text-sm font-bold text-white'>{index + 1}</div><p className='pt-1 text-[0.98rem] leading-8 text-[#526654]'>{step}</p></div>)}</div></motion.div></div></section>
      <CTAFooter />
    </main>
  );
};

export default SafetyHsePage;
