import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";

const Contact = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <section className='min-h-screen py-24 bg-muted'>
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold mb-6'>Get in Touch</h1>
        <p className='max-w-3xl text-lg text-muted-foreground mb-8'>
          Reach out to us for business inquiries, project quotes, or general
          questions.
        </p>
        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='rounded-xl border border-border bg-background p-6'>
            <h2 className='text-xl font-semibold mb-3'>Contact Information</h2>
            <p>Email: info@globalexperts.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Business Road, City, Country</p>
          </div>
          <div className='rounded-xl border border-border bg-background p-6'>
            <h2 className='text-xl font-semibold mb-3'>Send us a message</h2>
            <form className='space-y-4'>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full rounded-lg border border-input bg-background px-4 py-2'
              />
              <input
                type='email'
                placeholder='Your Email'
                className='w-full rounded-lg border border-input bg-background px-4 py-2'
              />
              <textarea
                placeholder='Message'
                rows={5}
                className='w-full rounded-lg border border-input bg-background px-4 py-2'
              ></textarea>
              <button
                type='submit'
                className='w-full rounded-lg bg-accent px-4 py-2 text-white font-semibold hover:brightness-110'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <CTAFooter />
  </main>
);

export default Contact;
