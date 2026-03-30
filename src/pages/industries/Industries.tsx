import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import IndustriesHero from "@/pages/industries/IndustriesHero";
import IndustriesShowcase from "@/pages/industries/IndustriesShowcase";

const Industries = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <IndustriesHero />
    <IndustriesShowcase />
    <CTAFooter />
  </main>
);

export default Industries;
