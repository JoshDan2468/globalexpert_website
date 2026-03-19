import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";

const Articles = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <section className='min-h-screen py-24'>
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold mb-4'>Articles</h1>
        <p className='text-lg text-muted-foreground'>
          Browse our latest insights, technical articles, and industry analyses.
        </p>
      </div>
    </section>
    <CTAFooter />
  </main>
);

export default Articles;
