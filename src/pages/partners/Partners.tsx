import { motion } from "framer-motion";
import { ArrowRight, Handshake, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";

type Partner = {
  name: string;
  mark: string;
  tone: string;
  to: string;
};

const partners: Partner[] = [
  { name: "Ace Hotel London", mark: "ACE", tone: "text-[#111111]", to: "/contact" },
  { name: "Airbnb", mark: "airbnb", tone: "text-[#ff5a5f]", to: "/contact" },
  { name: "BBC", mark: "BBC", tone: "text-[#1a1a1a]", to: "/articles" },
  { name: "BigCommerce", mark: "bc", tone: "text-[#415bff]", to: "/services" },
  { name: "Facebook", mark: "facebook", tone: "text-[#1877f2]", to: "/contact" },
  { name: "GBRS", mark: "GBRS", tone: "text-[#1c8ed6]", to: "/industries" },
  { name: "Getty Images", mark: "gettyimages", tone: "text-[#3a3a3a]", to: "/articles" },
  { name: "Studio One", mark: "TO", tone: "text-[#111111]", to: "/about" },
  { name: "John Lewis", mark: "John Lewis", tone: "text-[#1f1f1f]", to: "/products" },
  { name: "Metrics Lab", mark: "M+", tone: "text-[#77cde8]", to: "/services" },
  { name: "Monotype", mark: "Monotype", tone: "text-[#333333]", to: "/about" },
  { name: "Nationwide", mark: "Nationwide", tone: "text-[#1d4fa3]", to: "/industries" },
  { name: "npower", mark: "npower", tone: "text-[#eb4f61]", to: "/services" },
  { name: "Pantone", mark: "PANTONE", tone: "text-[#111111]", to: "/products" },
  { name: "RAB", mark: "rab", tone: "text-[#d11f2c]", to: "/contact" },
  { name: "Royal Mail", mark: "Royal Mail", tone: "text-[#ef7d22]", to: "/contact" },
  { name: "Shutterstock", mark: "shutterstock", tone: "text-[#e34b3f]", to: "/articles" },
  { name: "TalkTalk", mark: "TalkTalk", tone: "text-[#15a8da]", to: "/contact" },
  { name: "Talenthouse", mark: "Talenthouse", tone: "text-[#1a1a1a]", to: "/about" },
  { name: "VICE", mark: "VICE", tone: "text-[#111111]", to: "/articles" },
  { name: "Warner Bros", mark: "WB", tone: "text-[#111111]", to: "/about" },
  { name: "WeTransfer", mark: "wetransfer", tone: "text-[#2581c4]", to: "/contact" },
  { name: "WPP", mark: "WPP", tone: "text-[#2d2d2d]", to: "/services" },
  { name: "WWF", mark: "WWF", tone: "text-[#111111]", to: "/guiding-policies" },
  { name: "YouTube", mark: "YouTube", tone: "text-[#ea3323]", to: "/articles" },
];

const Partners = () => (
  <main className='overflow-x-hidden bg-[#f7f7f3]'>
    <Navbar />

    <section className='px-4 pb-8 pt-28 sm:px-6 sm:pb-10 sm:pt-32 lg:px-8'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto max-w-3xl text-center'
        >
          <span className='inline-flex items-center rounded-full border border-[#0b3b12]/10 bg-white px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#0b3b12] shadow-sm'>
            Our Partners
          </span>
          <h1 className='mt-5 text-3xl font-bold tracking-tight text-[#122015] sm:text-4xl md:text-5xl'>
            Our Partners
          </h1>
          <p className='mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#617064] sm:text-base'>
            We collaborate with trusted organizations across sectors, delivery
            models, and strategic initiatives. Explore the network below and
            reach out if you would like to work with us.
          </p>

          <div className='mt-7 flex flex-wrap justify-center gap-3'>
            <a
              href='#partner-grid'
              className='inline-flex items-center gap-2 rounded-full bg-[#012402] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:-translate-y-0.5'
            >
              View Partners
              <ArrowRight className='h-3.5 w-3.5' />
            </a>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 rounded-full border border-[#0b3b12]/12 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#223126] transition-colors duration-300 hover:bg-[#eef6ef]'
            >
              Become a Partner
              <Handshake className='h-3.5 w-3.5' />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <section
      id='partner-grid'
      className='px-4 pb-14 pt-4 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20'
    >
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className='mb-8 text-center'
        >
          <h2 className='text-xl font-semibold text-[#1a241d] sm:text-2xl'>
            Our Partners
          </h2>
        </motion.div>

        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: index * 0.02,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to={partner.to}
                className='group flex h-24 items-center justify-center rounded-sm bg-[#efefec] px-3 text-center shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_32px_rgba(15,23,42,0.08)] sm:h-28'
                aria-label={`View details related to ${partner.name}`}
              >
                <div className='flex flex-col items-center justify-center'>
                  <span
                    className={`text-sm font-semibold uppercase tracking-tight transition-transform duration-300 group-hover:scale-105 sm:text-base ${partner.tone}`}
                  >
                    {partner.mark}
                  </span>
                  <span className='mt-1 text-[10px] leading-4 text-[#647266] opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    {partner.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className='px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24'>
      <div className='container mx-auto max-w-5xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className='rounded-[1.8rem] bg-white p-6 text-center shadow-[0_22px_46px_rgba(15,23,42,0.05)] ring-1 ring-[#0c4010]/6 sm:p-8'
        >
          <span className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6ef] text-[#0b3b12]'>
            <Mail className='h-5 w-5' />
          </span>
          <h2 className='mt-4 text-2xl font-bold text-[#122015] sm:text-3xl'>
            Looking to partner with Global Experts Consultoria?
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#617064] sm:text-base'>
            We welcome conversations with organizations that value quality,
            technical depth, and long-term collaboration.
          </p>

          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 rounded-full bg-[#012402] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:-translate-y-0.5'
            >
              Start a Conversation
              <ArrowRight className='h-3.5 w-3.5' />
            </Link>
            <Link
              to='/about'
              className='inline-flex rounded-full border border-[#0b3b12]/12 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#223126] transition-colors duration-300 hover:bg-[#eef6ef]'
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <CTAFooter />
  </main>
);

export default Partners;
