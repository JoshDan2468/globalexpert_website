import { motion } from "framer-motion";
import {
  BadgeCheck,
  Handshake,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Accountability",
    text: "We are accountable for delivering on our commitments to our clients.",
    iconBg: "bg-[linear-gradient(135deg,#dcecff,#b7d6ff)]",
    iconColor: "text-[#2459c6]",
  },
  {
    icon: Handshake,
    title: "Respect for People",
    text: "We value our people and clients, encourage their development, and reward their performance.",
    iconBg: "bg-[linear-gradient(135deg,#ffe5d5,#ffd1c8)]",
    iconColor: "text-[#d6632d]",
  },
  {
    icon: Users,
    title: "Teamwork",
    text: "We work together, across boundaries, to meet the needs of our clients.",
    iconBg: "bg-[linear-gradient(135deg,#e0f7ec,#baf1d3)]",
    iconColor: "text-[#198754]",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    text: "We provide outstanding services that deliver premium value to our clients.",
    iconBg: "bg-[linear-gradient(135deg,#f2e4ff,#dec5ff)]",
    iconColor: "text-[#7d43d6]",
  },
];

const CoreValuesSection = () => {
  return (
    <section className='bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-10 max-w-3xl text-center sm:mb-14'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#0b3b12]'>
            Core Values
          </p>
          <h2 className='mt-3 text-3xl font-bold tracking-tight text-[#132015] sm:text-4xl md:text-5xl'>
            Principles that shape how we work and deliver
          </h2>
        </motion.div>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.98,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='rounded-[1.7rem] border border-[#0b3b12]/8 bg-[linear-gradient(180deg,#ffffff_0%,#f5faf5_100%)] p-6 shadow-[0_20px_44px_rgba(15,23,42,0.05)] sm:p-7'
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${value.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${value.iconColor}`} />
                </div>

                <h3 className='mt-6 text-2xl font-bold text-[#132015]'>
                  {value.title}
                </h3>

                <p className='mt-4 text-justify text-[0.98rem] leading-7 text-[#5a6b5d]'>
                  {value.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
