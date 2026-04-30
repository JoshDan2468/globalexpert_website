import { lazy } from "react";
import DeferredSection from "@/components/DeferredSection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/home/HeroSection";
import CompanySection from "@/pages/home/CompanySection";

const MissionVisionSection = lazy(
  () => import("@/pages/home/MissionVisionSection"),
);
const ServicesSection = lazy(() => import("@/pages/home/ServicesSection"));
const CommitmentSection = lazy(() => import("@/pages/home/CommitmentSection"));
const FloatingStats = lazy(() => import("@/pages/home/floatingStats"));
const CTAFooter = lazy(() => import("@/pages/home/CTAFooter"));

const Home = () => (
  <main className='overflow-x-hidden'>
    {/* Site navigation */}
    <Navbar />

    {/* Hero / first impression */}
    <HeroSection />

    {/* Company snapshot */}
    <CompanySection />

    {/* Mission and vision section */}
    <DeferredSection minHeight='640px'>
      <MissionVisionSection />
    </DeferredSection>

    {/* Trust and commitment section */}
    <DeferredSection minHeight='720px'>
      <CommitmentSection />
    </DeferredSection>

    {/* Service cards */}
    <DeferredSection minHeight='820px'>
      <ServicesSection />
    </DeferredSection>

    {/* Floating business stats */}
    <DeferredSection minHeight='220px'>
      <FloatingStats />
    </DeferredSection>

    {/* Final call to action */}
    <DeferredSection minHeight='560px' rootMargin='220px'>
      <CTAFooter />
    </DeferredSection>
  </main>
);

export default Home;
