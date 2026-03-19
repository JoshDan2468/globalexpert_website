import { MapPin, Globe, HardDrive, Sun } from "lucide-react";

const CommitmentSection = () => {
  const cardList = [
    {
      icon: Globe,
      title: "Pipeline Services",
      description:
        "LNG, CNG facilities, onshore pipelines, receiving terminals and distribution networks.",
    },
    {
      icon: MapPin,
      title: "Geoscience Research",
      description:
        "Onshore/offshore exploration and complex production facility support with practical engineering insights.",
    },
    {
      icon: HardDrive,
      title: "Engineering",
      description:
        "Integrated engineering, project management, integrity and operational consulting for energy and infrastructure.",
    },
    {
      icon: Sun,
      title: "Drilling & Renewables",
      description:
        "Drilling services, renewable energy, gas turbine power plants and transmission network solutions.",
    },
  ];

  return (
    <section className='py-20 bg-slate-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl font-bold text-slate-900 mb-4'>
            Our Commitment
          </h2>
          <p className='text-lg text-slate-600 mb-8'>
            We promise the best quality across multiple disciplines. We offer
            services in Energy / Oil & Gas, Petrochemicals, Infrastructures,
            Power, Renewables, Manufacturing, Health, Education, Mining, and IT.
          </p>
          <p className='text-sm text-slate-500 mb-12'>
            LNG & CNG facilities | Pipelines & terminals | Production
            facilities | Renewable energy | Gas turbines | Transmission
            networks | Water & waste-water | Transport | Automation
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {cardList.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className='rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
              >
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600'>
                  <Icon className='h-6 w-6' />
                </div>
                <h3 className='text-xl font-semibold text-slate-800 mb-2'>
                  {card.title}
                </h3>
                <p className='text-sm text-slate-600'>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;


