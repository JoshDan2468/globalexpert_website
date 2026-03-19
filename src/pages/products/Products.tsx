import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";

const products = [
  "Digitalization and Edge Computing",
  "Digital Twin Services",
  "Electrical Equipment & Safety",
  "Flexible Tank",
  "Flowmeters and Sensors",
  "NDT Products Innovation & Laser Scanning",
  "Renewable Energy",
  "Safety/HSE",
  "Software and Hardware Forecourt Automation",
  "Test Equipment",
  "Thermal Monitoring",
  "Valves, Flanges and Pumps",
];

const Products = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <section className='min-h-[70vh] py-24'>
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold mb-8'>Our Products</h1>
        <p className='text-lg text-muted-foreground mb-6'>
          We provide a broad portfolio of industry-graded products built for Oil
          & Gas, Energy, and Industrial applications.
        </p>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {products.map((product) => (
            <div
              key={product}
              className='rounded-xl border border-border bg-card p-5 shadow-sm'
            >
              <h2 className='text-xl font-semibold mb-2'>{product}</h2>
              <p className='text-sm text-muted-foreground'>
                Explore how we implement {product.toLowerCase()} solutions to
                improve efficiency, safety, and compliance.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTAFooter />
  </main>
);

export default Products;
