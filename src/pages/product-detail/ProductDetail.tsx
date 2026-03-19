import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";

const productDescriptions: Record<string, string> = {
  "digitalization-edge":
    "High-performance edge computing for real-time operations and analytics in remote Oil & Gas installations.",
  "digital-twin":
    "Live digital twin services for plant simulation, predictive maintenance, and decision support.",
  "electrical-safety":
    "Certified electrical protection systems and hazardous-area equipment for safety compliance.",
  "flexible-tank":
    "Modular, heavy-duty flexible tanks for fuel, water and chemical storage with rapid deployment.",
  "flowmeters-sensors":
    "High accuracy flow meters and rugged sensors for multiphase fluid monitoring.",
  "ndt-laser":
    "Non-destructive testing and laser scanning solutions for integrity, inspection, and 3D modelling.",
  "renewable-energy":
    "Hybrid renewable energy systems for grid stability, microgrids and decarbonization.",
  "safety-hse":
    "Comprehensive HSE toolkits, training, and monitoring systems for regulatory adherence.",
  "forecourt-automation":
    "Software-enabled forecourt automation for fuel stations and process control.",
  "test-equipment":
    "Professional test and calibration equipment for instrumentation and control systems.",
  "thermal-monitoring":
    "Thermal imaging and condition monitoring solutions for early anomaly detection.",
  "valves-flanges-pumps":
    "Industrial valves, flanges and pump solutions for robust fluid handling networks.",
};

const productTitles: Record<string, string> = {
  "digitalization-edge": "Digitalization and Edge Computing",
  "digital-twin": "Digital Twin Services",
  "electrical-safety": "Electrical Equipment & Safety",
  "flexible-tank": "Flexible Tank",
  "flowmeters-sensors": "Flowmeters and Sensors",
  "ndt-laser": "NDT Products Innovation & Laser Scanning",
  "renewable-energy": "Renewable Energy",
  "safety-hse": "Safety/HSE",
  "forecourt-automation": "Software and Hardware Forecourt Automation",
  "test-equipment": "Test Equipment",
  "thermal-monitoring": "Thermal Monitoring",
  "valves-flanges-pumps": "Valves, Flanges and Pumps",
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  if (!productId || !productTitles[productId]) {
    return (
      <main className='overflow-x-hidden'>
        <Navbar />
        <section className='min-h-screen py-24'>
          <div className='container mx-auto px-6 text-center'>
            <h1 className='text-4xl font-bold'>Product not found</h1>
            <p className='text-muted-foreground mt-4'>
              We could not find that product. Please return to the products
              page.
            </p>
          </div>
        </section>
        <CTAFooter />
      </main>
    );
  }

  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <section className='min-h-screen py-24'>
        <div className='container mx-auto px-6'>
          <h1 className='text-4xl font-bold mb-4'>
            {productTitles[productId]}
          </h1>
          <p className='text-lg text-muted-foreground mb-8'>
            {productDescriptions[productId]}
          </p>
          <div className='rounded-xl border border-border bg-card p-6 shadow-sm'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              blandit tristique ipsum, sed luctus arcu molestie sit amet.
            </p>
          </div>
        </div>
      </section>
      <CTAFooter />
    </main>
  );
};

export default ProductDetail;
