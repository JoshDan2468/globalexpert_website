import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, User2 } from '@/lib/icons';
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import { articlesBySlug } from "@/pages/articles/articleData";

const ArticleDetail = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = articleSlug ? articlesBySlug[articleSlug] : undefined;

  if (!article) {
    return (
      <main className='overflow-x-hidden bg-[#f7f7f4]'>
        <Navbar />
        <section className='min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8'>
          <div className='container mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl font-bold text-[#112015]'>
              Article not found
            </h1>
            <p className='mt-4 text-[#5f6e62]'>
              We could not find that article. Return to the articles page to
              continue browsing.
            </p>
            <Link
              to='/articles'
              className='mt-8 inline-flex rounded-full bg-[#012402] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white'
            >
              Back to Articles
            </Link>
          </div>
        </section>
        <CTAFooter />
      </main>
    );
  }

  return (
    <main className='overflow-x-hidden bg-[#f7f7f4]'>
      <Navbar />

      <section className='relative overflow-hidden pt-24 sm:pt-28'>
        <div className='absolute inset-0'>
          <img
            src={article.image}
            alt={article.title}
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(5,15,9,0.78)_0%,rgba(5,15,9,0.58)_42%,rgba(5,15,9,0.82)_100%)]' />
        </div>

        <div className='relative z-10 container mx-auto px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-4xl'
          >
            <Link
              to='/articles'
              className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/88 backdrop-blur-sm transition-colors hover:bg-white/14'
            >
              <ArrowLeft className='h-3.5 w-3.5' />
              Back to News
            </Link>

            <div className='mt-6 flex flex-wrap items-center gap-3 text-[11px] text-white/78'>
              <span className='rounded-full bg-[#ff5d47] px-3 py-1 font-semibold uppercase tracking-[0.08em] text-white'>
                {article.category}
              </span>
              <span className='inline-flex items-center gap-1.5'>
                <CalendarDays className='h-3.5 w-3.5' />
                {article.date}
              </span>
              <span className='inline-flex items-center gap-1.5'>
                <User2 className='h-3.5 w-3.5' />
                By {article.author}
              </span>
            </div>

            <h1 className='mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>
              {article.title}
            </h1>
            <p className='mt-5 max-w-2xl text-[0.98rem] leading-7 text-white/78 sm:text-base sm:leading-8'>
              {article.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      <section className='px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8'>
        <div className='container mx-auto max-w-4xl'>
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='rounded-[1.8rem] bg-white px-6 py-8 shadow-[0_24px_50px_rgba(15,23,42,0.08)] ring-1 ring-[#0c4010]/6 sm:px-8 sm:py-10'
          >
            <div className='space-y-5 text-[1rem] leading-8 text-[#334638]'>
              {article.body.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
};

export default ArticleDetail;
