import { lazy } from "react";
import DeferredSection from "@/components/DeferredSection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/home/HeroSection";
import CompanySection from "@/pages/home/CompanySection";

const AboutSection = lazy(() => import("@/pages/home/AboutSection"));
const ServicesSection = lazy(() => import("@/pages/home/ServicesSection"));
const CommitmentSection = lazy(() => import("@/pages/home/CommitmentSection"));
const FloatingStats = lazy(() => import("@/pages/home/floatingStats"));
const CTAFooter = lazy(() => import("@/pages/home/CTAFooter"));

const Home = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <HeroSection />
    <CompanySection />
    <DeferredSection minHeight='640px'>
      <AboutSection />
    </DeferredSection>
    <DeferredSection minHeight='720px'>
      <CommitmentSection />
    </DeferredSection>
    <DeferredSection minHeight='820px'>
      <ServicesSection />
    </DeferredSection>
    <DeferredSection minHeight='220px'>
      <FloatingStats />
    </DeferredSection>
    <DeferredSection minHeight='560px' rootMargin='220px'>
      <CTAFooter />
    </DeferredSection>
  </main>
);

export default Home;
