import { motion } from "framer-motion";
import image1 from "@/assets/home_assets/image14.jpg";
import image2 from "@/assets/home_assets/image13.jpg";
import image3 from "@/assets/home_assets/image16.jpg";
import image4 from "@/assets/home_assets/image4.jpg";

const CommitmentSection = () => {
  const cardList = [
    {
      image: image1,
      alt: "Pipeline network infrastructure",
      title: "Pipeline Services",
      description:
        "LNG, CNG facilities, onshore pipelines, receiving terminals and distribution networks.",
    },
    {
      image: image2,
      alt: "Geoscience research and exploration",
      title: "Geoscience Research",
      description:
        "Onshore/offshore exploration and complex production facility support with practical engineering insights.",
    },
    {
      image: image3,
      alt: "Engineering and project systems",
      title: "Engineering",
      description:
        "Integrated engineering, project management, integrity and operational consulting for energy and infrastructure.",
    },
    {
      image: image4,
      alt: "Drilling and renewable energy equipment",
      title: "Drilling & Renewables",
      description:
        "Drilling services, renewable energy, gas turbine power plants and transmission network solutions.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='py-20' style={{ backgroundColor: "#ebf5ec" }}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl font-bold text-slate-900 mb-4'>
            Our Commitment
          </h2>
          <p className='text-xl text-slate-600 mb-8'>
            We promise the best quality across multiple disciplines. We offer
            services in Energy / Oil & Gas, Petrochemicals, Infrastructures,
            Power, Renewables, Manufacturing, Health, Education, Mining, and IT.
          </p>
          <p className='text-md text-slate-500 mb-12'>
            LNG & CNG facilities | Pipelines & terminals | Production facilities
            | Renewable energy | Gas turbines | Transmission networks | Water &
            waste-water | Transport | Automation
          </p>
        </div>

        <motion.div
          className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {cardList.map((card) => (
            <motion.div
              key={card.title}
              className='rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
              variants={cardVariants}
            >
              <div className='mb-5 h-48 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100'>
                <img
                  src={card.image}
                  alt={card.alt}
                  className='h-full w-full object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold text-slate-800 mb-2'>
                {card.title}
              </h3>
              <p className='text-sm text-slate-600'>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentSection;
