import Navbar from "../../components/Navbar";
import CTAFooter from "../home/CTAFooter";

const GuidingPolicies = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <section className='min-h-screen py-24'>
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold mb-4'>Guiding Policies</h1>
        <p className='text-lg text-muted-foreground'>
          Our guiding policies define the strategic direction, core governance,
          and compliance standards across all operations.
        </p>
      </div>
    </section>
    <CTAFooter />
  </main>
);

export default GuidingPolicies;
