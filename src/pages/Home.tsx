import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/home/HeroSection";
import CompanySection from "@/pages/home/CompanySection";
import CommitmentSection from "@/pages/home/CommitmentSection";
import FloatingStats from "@/pages/home/floatingStats";
import CTAFooter from "@/pages/home/CTAFooter";

const Home = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <HeroSection />
    <CompanySection />
    <CommitmentSection />
    <FloatingStats />
    <CTAFooter />
  </main>
);

export default Home;
