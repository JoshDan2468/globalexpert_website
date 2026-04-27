import Navbar from "@/components/Navbar";
import AdvantagesSection from "@/pages/about/AdvantagesSection";
import AboutHero from "@/pages/about/AboutHero";
import AboutSection from "@/pages/about/AboutSection";
import CoreValuesSection from "@/pages/about/CoreValuesSection";
import CTAFooter from "@/pages/home/CTAFooter";

const About = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <AboutHero />
    <AboutSection />
    <CoreValuesSection />
    <AdvantagesSection />
    <CTAFooter />
  </main>
);

export default About;
