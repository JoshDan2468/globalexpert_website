import { Link } from "react-router-dom";
import image1 from "@/assets/home_assets/image1.jpg";
import image2 from "@/assets/home_assets/image2.jpg";
import image3 from "@/assets/home_assets/image3.jpeg";

const cardItems = [
  {
    to: "/about",
    title: "Who We Are",
    text: "Global Experts Consultoria is an international based energy, engineering, business and management consulting firm that focuses on supporting its clients to achieve improved performance through providing pragmatic solution(s).",
    image: image1,
    alt: "Team strategy and governance",
  },
  {
    to: "/about",
    title: "Why Global Experts",
    text: "Global Experts Consultoria helps its clients build the needed competence and capabilities to deliver on their commitments. We are committed to delivering value to our clients and stakeholders by providing high-quality services that meet their needs and exceed their expectations.",
    image: image2,
    alt: "Executive leadership strategy",
  },
  {
    to: "/services",
    title: "Operations",
    text: "Our interests in the Niger Delta are predominantly land-based. In addition to our upstream activities, we are constantly exploring opportunities across the value chain.",
    image: image3,
    alt: "Field operations in energy sector",
  },
];

const CompanySection = () => {
  return (
    <section className='py-20 bg-background'>
      <div className='container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {cardItems.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className='group block overflow-hidden rounded-2xl border border-border bg-card p-0 text-center shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-accent hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'
            >
              <div className='relative h-56 md:h-64 overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.alt}
                  className='h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <h3 className='absolute left-0 right-0 bottom-3 px-4 text-2xl font-bold text-white drop-shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-3'>
                  {item.title}
                </h3>
              </div>

              <div className='p-6'>
                <p className='text-sm text-slate-600 transition duration-300 group-hover:text-slate-900'>
                  {item.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
