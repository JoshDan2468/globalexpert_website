import { useDeferredValue, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Handshake, Mail, Search, X } from "@/lib/icons";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import heroImage from "@/assets/home_assets/image12.jpg";

type LogoItem = {
  name: string;
  logo: string;
  to: string;
};

const partnerLogoModules = import.meta.glob(
  "@/assets/partners/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const featuredPartnerNames = new Set([
  "antea",
  "enppi",
  "evident",
  "exertherm",
  "pipecare",
  "solar",
  "spectraflow",
  "varixx",
]);

const prettifyPartnerName = (filePath: string) =>
  filePath
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()) ?? "Partner";

const allLogos: LogoItem[] = Object.entries(partnerLogoModules)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([path, logo]) => ({
    name: prettifyPartnerName(path),
    logo,
    to: "/contact",
  }));

const groupedLogos = allLogos.reduce(
  (groups, item) => {
    const normalizedName = item.name.toLowerCase();
    const isPartner = [...featuredPartnerNames].some((name) =>
      normalizedName.includes(name),
    );

    groups[isPartner ? "partners" : "clients"].push(item);
    return groups;
  },
  { partners: [] as LogoItem[], clients: [] as LogoItem[] },
);

const partners =
  groupedLogos.partners.length > 0
    ? groupedLogos.partners
    : allLogos.slice(0, Math.ceil(allLogos.length / 3));

const globalClients =
  groupedLogos.clients.length > 0
    ? groupedLogos.clients
    : allLogos.slice(Math.ceil(allLogos.length / 3));

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const LogoCard = ({ item }: { item: LogoItem }) => (
  <motion.div variants={logoVariants}>
    <Link
      to={item.to}
      className='group flex h-32 items-center justify-center rounded-2xl border border-[#0b3b12]/8 bg-white px-5 text-center shadow-[0_16px_34px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0b3b12]/18 hover:shadow-[0_24px_48px_rgba(15,23,42,0.1)] sm:h-36 lg:h-40'
      aria-label={`Contact us about ${item.name}`}
    >
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          loading='lazy'
          className='max-h-16 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-20 sm:max-w-[210px]'
        />
        <span className='mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#607064] opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          {item.name}
        </span>
      </div>
    </Link>
  </motion.div>
);

const ClientMarquee = ({ items }: { items: LogoItem[] }) => {
  const marqueeItems = [...items, ...items];

  return (
    <div className='relative -mx-4 overflow-hidden py-8 sm:-mx-6 lg:-mx-8'>
      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f7f7f3] to-transparent' />
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f7f7f3] to-transparent' />

      <motion.div
        className='flex w-max gap-5'
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 58,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {marqueeItems.map((item, index) => (
          <Link
            key={`${item.name}-${index}`}
            to={item.to}
            className='group flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-[#0b3b12]/8 bg-[#f8faf7] px-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_32px_rgba(15,23,42,0.08)] sm:h-32 sm:w-60'
            aria-label={`Contact us about ${item.name}`}
          >
            <img
              src={item.logo}
              alt={`${item.name} logo`}
              loading='lazy'
              className='max-h-16 w-auto max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-20 sm:max-w-[200px]'
            />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

const Partners = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const { filteredPartners, filteredClients } = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return {
        filteredPartners: partners,
        filteredClients: globalClients,
      };
    }

    return {
      filteredPartners: partners.filter((partner) =>
        partner.name.toLowerCase().includes(normalizedQuery),
      ),
      filteredClients: globalClients.filter((client) =>
        client.name.toLowerCase().includes(normalizedQuery),
      ),
    };
  }, [deferredQuery]);

  const totalFiltered = filteredPartners.length + filteredClients.length;

  return (
    <main className='overflow-x-hidden bg-[#f7f7f3]'>
      <Navbar />

      <section className='relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24'>
        <div className='absolute inset-0'>
          <motion.img
            src={heroImage}
            alt=''
            aria-hidden='true'
            className='h-full w-full object-cover'
            animate={{
              scale: [1, 1.05, 1.02, 1],
              x: [0, 12, -10, 0],
              y: [0, -8, 14, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(169,243,177,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%),linear-gradient(180deg,rgba(1,36,2,0.8)_0%,rgba(1,36,2,0.92)_100%)]' />
        </div>

        <div className='relative z-10 container mx-auto max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-3xl text-white'
          >
            <span className='inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#d7efda] backdrop-blur-sm'>
              Our Network
            </span>
            <h1 className='mt-5 text-left text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
              Our Partners & Global Clients
            </h1>
            <p className='mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:text-base'>
              We work with trusted technical partners and serve clients across
              multiple markets. Explore our collaboration network and global
              client relationships below.
            </p>

            <div className='mt-7 flex flex-wrap gap-3'>
              <a
                href='#partners'
                className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102313] transition-transform duration-300 hover:-translate-y-0.5'
              >
                View Network
                <ArrowRight className='h-3.5 w-3.5' />
              </a>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/14'
              >
                Become a Partner
                <Handshake className='h-3.5 w-3.5' />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id='partners'
        className='px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8'
      >
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className='mb-10 rounded-[1.5rem] bg-white p-4 shadow-[0_16px_36px_rgba(15,23,42,0.05)] ring-1 ring-[#0c4010]/6 sm:p-5'
          >
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='text-left text-sm font-semibold text-[#152118]'>
                  Browse logos
                </p>
                <p className='mt-1 text-sm text-[#617064]'>
                  Showing {totalFiltered} of {allLogos.length} organizations
                </p>
              </div>

              <div className='relative w-full md:max-w-sm'>
                <Search className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7a877c]' />
                <input
                  type='text'
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder='Search partners or clients'
                  className='h-11 w-full rounded-full border border-[#d8e2d9] bg-[#f8fbf8] px-11 pr-11 text-sm text-[#203025] outline-none transition-colors duration-200 placeholder:text-[#7a877c] focus:border-[#0b3b12]/30'
                />
                {query && (
                  <button
                    type='button'
                    onClick={() => setQuery("")}
                    className='absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[#5b6a5f] transition-colors duration-200 hover:bg-[#edf4ee] hover:text-[#132015]'
                    aria-label='Clear logo search'
                  >
                    <X className='h-3.5 w-3.5' />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className='inline-flex items-center rounded-full border border-[#0b3b12]/10 bg-white px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#0b3b12] shadow-sm'>
              Our Partners
            </span>
            <h2 className='mt-4 text-left text-2xl font-bold text-[#122015] sm:text-3xl'>
              Strategic Partner Network
            </h2>
            <p className='mt-3 max-w-2xl text-sm leading-7 text-[#617064] sm:text-base'>
              These organizations support our technical capability, delivery
              capacity, and product ecosystem across the sectors we serve.
            </p>

            {filteredPartners.length > 0 ? (
              <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {filteredPartners.map((partner) => (
                  <LogoCard key={partner.name} item={partner} />
                ))}
              </div>
            ) : (
              <div className='mt-8 rounded-[1.5rem] bg-white px-6 py-10 text-center shadow-[0_16px_36px_rgba(15,23,42,0.05)] ring-1 ring-[#0c4010]/6'>
                <p className='text-lg font-semibold text-[#152118]'>
                  No partner matched "{query}"
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className='px-4 pb-14 pt-4 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className='inline-flex items-center rounded-full border border-[#0d62b3]/12 bg-white px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#0d62b3] shadow-sm'>
              Our Global Clients
            </span>
            <h2 className='mt-4 text-left text-2xl font-bold text-[#122015] sm:text-3xl'>
              Organizations Across Our Market Reach
            </h2>
            <p className='mt-3 max-w-2xl text-sm leading-7 text-[#617064] sm:text-base'>
              Our client relationships span industries and geographies. The logo
              rail below moves continuously from right to left for a polished,
              responsive showcase.
            </p>

            <div className='mt-8'>
              {filteredClients.length > 0 ? (
                <ClientMarquee items={filteredClients} />
              ) : (
                <div className='rounded-[1.5rem] bg-white px-6 py-10 text-center shadow-[0_16px_36px_rgba(15,23,42,0.05)] ring-1 ring-[#0c4010]/6'>
                  <p className='text-lg font-semibold text-[#152118]'>
                    No global client matched "{query}"
                  </p>
                </div>
              )}
            </div>
          </motion.div>
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
};

export default Partners;
