import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import heroImage from "@/assets/home_assets/image10.jpg";
import { articles } from "@/pages/articles/articleData";

const Articles = () => (
  <main className='overflow-x-hidden bg-[#f7f7f4]'>
    <Navbar />

    <section className='relative overflow-hidden pt-24 sm:pt-28'>
      <div className='absolute inset-0'>
        <img
          src={heroImage}
          alt='Professionals in discussion during a strategy meeting'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,9,0.72)_0%,rgba(6,14,9,0.48)_42%,rgba(6,14,9,0.78)_100%)]' />
      </div>

      <div className='relative z-10 container mx-auto px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20'>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className='max-w-3xl'
        >
          <span className='inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-white/85 backdrop-blur-sm'>
            Newsroom
          </span>
          <h1 className='mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>
            News
          </h1>
          <p className='mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/78 sm:text-base sm:leading-8'>
            Insights, updates, and perspective from the sectors we serve,
            presented in a cleaner editorial structure.
          </p>
          <div className='mt-7 flex flex-wrap gap-3'>
            <a
              href='#latest-articles'
              className='inline-flex rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#102313] transition-transform duration-300 hover:-translate-y-0.5'
            >
              Browse Articles
            </a>
            <Link
              to='/contact'
              className='inline-flex rounded-full border border-white/22 bg-white/8 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/14'
            >
              Contact Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <section
      id='latest-articles'
      className='pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {articles.map((article, index) => (
            <motion.div
              key={`${article.title}-${index}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.75,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='group'
            >
              <Link
                to={`/articles/${article.slug}`}
                className='block overflow-hidden rounded-[1.35rem] bg-white shadow-[0_20px_45px_rgba(15,23,42,0.07)] ring-1 ring-[#0c4010]/6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]'
              >
                <div className='relative overflow-hidden'>
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className='h-40 w-full object-cover sm:h-36 md:h-40 lg:h-44'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <div className='px-5 pb-6 pt-5 sm:px-6'>
                  <div className='flex flex-wrap items-center gap-2 text-[11px] text-[#5d6d60]'>
                    <span className='inline-flex items-center rounded-full bg-[#ff5d47] px-3 py-1 font-semibold uppercase tracking-[0.08em] text-white'>
                      {article.date}
                    </span>
                    <span className='inline-flex items-center gap-1.5'>
                      <CalendarDays className='h-3.5 w-3.5' />
                      {article.category}
                    </span>
                    <span className='inline-flex items-center gap-1.5'>
                      <User2 className='h-3.5 w-3.5' />
                      By {article.author}
                    </span>
                  </div>

                  <h2 className='mt-4 text-[1.05rem] font-bold leading-6 text-[#142117] transition-colors duration-300 group-hover:text-[#0c4010]'>
                    {article.title}
                  </h2>

                  <p className='mt-3 text-sm leading-6 text-[#68776a]'>
                    {article.excerpt}
                  </p>

                  <span className='mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#26352a] transition-colors duration-300 group-hover:text-[#0c4010]'>
                    Read More
                    <ArrowUpRight className='h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTAFooter />
  </main>
);

export default Articles;
