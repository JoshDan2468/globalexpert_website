import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import ServicesCtaBand from "@/pages/services/ServicesCtaBand";
import ServicesHero from "@/pages/services/ServicesHero";
import ServicesShowcase from "@/pages/services/ServicesShowcase";
import ServicesTestimonials from "@/pages/services/ServicesTestimonials";

const Services = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <ServicesHero />
    <ServicesShowcase />
    <ServicesCtaBand />
    {/* <ServicesTestimonials /> */}
    <CTAFooter />
  </main>
);

export default Services;
