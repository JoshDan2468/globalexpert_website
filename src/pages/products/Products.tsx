import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import { productLinks } from "@/pages/products/productLinks";
import heroImage from "@/assets/home_assets/image10.jpg";
import DigitalizationEdgeSection from "@/pages/products/sections/DigitalizationEdgeSection";
import DigitalTwinSection from "@/pages/products/sections/DigitalTwinSection";
import ElectricalSafetySection from "@/pages/products/sections/ElectricalSafetySection";
import FlexibleTankSection from "@/pages/products/sections/FlexibleTankSection";
import FlowmetersSensorsSection from "@/pages/products/sections/FlowmetersSensorsSection";
import NdtLaserSection from "@/pages/products/sections/NdtLaserSection";
import RenewableEnergySection from "@/pages/products/sections/RenewableEnergySection";
import SafetyHseSection from "@/pages/products/sections/SafetyHseSection";
import ForecourtAutomationSection from "@/pages/products/sections/ForecourtAutomationSection";
import TestEquipmentSection from "@/pages/products/sections/TestEquipmentSection";
import ThermalMonitoringSection from "@/pages/products/sections/ThermalMonitoringSection";
import ValvesFlangesPumpsSection from "@/pages/products/sections/ValvesFlangesPumpsSection";

const heroContentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    const activeLink =
      productLinks.find((link) => link.detailPath === location.pathname) ??
      productLinks.find((link) => `#${link.sectionId}` === location.hash);

    if (!activeLink) {
      return;
    }

    const scrollToSection = () => {
      const section = document.getElementById(activeLink.sectionId);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    window.setTimeout(scrollToSection, 120);
  }, [location.hash, location.pathname]);

  return (
    <main className='overflow-x-hidden bg-[#f5f5f2]'>
      <Navbar />

      <section
        id='products-top'
        className='relative isolate overflow-hidden border-b border-[#d7e0d8] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8'
      >
        <motion.div
          initial={{ scale: 1.08, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className='absolute inset-0'
        >
          <motion.img
            src={heroImage}
            alt=''
            aria-hidden='true'
            className='h-full w-full object-cover'
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 6, ease: "easeOut" }}
          />
          <div className='absolute inset-0 bg-[linear-gradient(115deg,rgba(1,36,2,0.92)_0%,rgba(7,60,109,0.78)_45%,rgba(7,60,109,0.52)_100%)]' />
        </motion.div>

        <div className='relative z-10 container mx-auto'>
          <motion.div
            variants={heroContentVariants}
            initial='hidden'
            animate='visible'
            className='mx-auto max-w-4xl text-center'
          >
            <motion.p
              variants={heroItemVariants}
              className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/78'
            >
              Our Product Portfolio
            </motion.p>
            <motion.h1
              variants={heroItemVariants}
              className='mt-4 text-4xl font-bold uppercase tracking-[0.04em] text-white sm:text-5xl md:text-6xl'
            >
              Products
            </motion.h1>
            <motion.div
              variants={heroItemVariants}
              className='mx-auto mt-6 h-px w-24 bg-white/40'
            />
            <motion.p
              variants={heroItemVariants}
              className='mx-auto mt-6 max-w-3xl text-[0.98rem] leading-8 text-white/84'
            >
              Explore our product solutions in a clean, focused format designed
              to highlight each offering with clear supporting imagery and
              concise technical context.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <DigitalizationEdgeSection />
      <DigitalTwinSection />
      <ElectricalSafetySection />
      <FlexibleTankSection />
      <FlowmetersSensorsSection />
      <NdtLaserSection />
      <RenewableEnergySection />
      <SafetyHseSection />
      <ForecourtAutomationSection />
      <TestEquipmentSection />
      <ThermalMonitoringSection />
      <ValvesFlangesPumpsSection />

      <CTAFooter />
    </main>
  );
};

export default Products;
