import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Phone, MapPin, Clock } from "lucide-react";
import image1 from "@/assets/home_assets/image1.jpg";
import image2 from "@/assets/home_assets/image2.jpg";
import image3 from "@/assets/home_assets/image3.jpeg";
import image4 from "@/assets/home_assets/image4.jpg";
import image5 from "@/assets/home_assets/image5.jpg";
import image6 from "@/assets/home_assets/image6.jpg";
import image7 from "@/assets/home_assets/image7.jpg";
import image8 from "@/assets/home_assets/image8.jpg";

const heroImages = [
  { src: image1, alt: "Consultants reviewing offshore project plans" },
  { src: image2, alt: "Engineering team with tablet on oil platform" },
  { src: image3, alt: "Technician inspecting gas pipeline network" },
  {
    src: image4,
    alt: "Operations manager with laptop at refinery control room",
  },
  {
    src: image5,
    alt: "Corporate executives in energy project strategy meeting",
  },
  { src: image6, alt: "Oil and gas infrastructure planning on project map" },
  { src: image7, alt: "Consultant team at site survey discussion" },
  {
    src: image8,
    alt: "Inspection crew with safety gear at gas extraction site",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rotate = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(rotate);
  }, []);

  return (
    <section
      id='hero'
      className='relative min-h-[80vh] flex flex-col overflow-hidden'
    >
      {/* Background carousel */}
      <div className='absolute inset-0'>
        {heroImages.map((image, idx) => (
          <motion.img
            key={idx}
            src={image.src}
            alt={image.alt}
            className='absolute inset-0 h-full w-full object-cover'
            initial={{ opacity: idx === activeIndex ? 1 : 0 }}
            animate={{ opacity: idx === activeIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
        <div className='absolute inset-0 bg-gradient-to-r from-primary/65 via-primary/50 to-primary/40' />
        <div className='absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent' />
      </div>

      {/* Animated particles */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 rounded-full bg-accent/20'
            initial={{ x: `${15 + i * 14}%`, y: "110%" }}
            animate={{ y: "-10%" }}
            transition={{
              duration: 5 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.8,
            }}
          />
        ))}
      </div>

      {/* Main hero content */}
      <div className='relative z-10 flex-1 flex items-center'>
        <div className='container mx-auto px-6'>
          <div className='max-w-3xl'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex items-center gap-3 mb-6'
            >
              <div className='w-12 h-px bg-accent' />
              <span className='text-accent font-display text-lg font-semibold uppercase tracking-widest'>
                Engineering Excellence Since Inception
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className='text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[1.1] mb-6'
            >
              Global Experts <span className='text-accent'>Consultoria</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className='text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed'
            >
              Providing World Class Engineering, Project Management, Asset
              Integrity & Maintenance Consultancy Solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className='flex flex-wrap gap-4'
            >
              <a
                href='/services'
                className='px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:brightness-130 transition-all text-sm'
              >
                Our Services
              </a>
              <a
                href='#about'
                className='px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all text-sm'
              >
                About Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className='relative z-10 bg-primary-foreground/10 backdrop-blur-md border-t border-primary-foreground/10'
      >
        <div className='container mx-auto px-6 py-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left'>
            <div className='flex items-center gap-3 justify-center md:justify-start'>
              <Phone className='w-5 h-5 text-accent flex-shrink-0' />
              <div>
                <div className='text-[10px] uppercase tracking-widest text-primary-foreground/40 font-semibold mb-0.5'>
                  Contact Us
                </div>
                <div className='text-sm text-primary-foreground/80'>
                  +2348068970938
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3 justify-center md:justify-start'>
              <Clock className='w-5 h-5 text-accent flex-shrink-0' />
              <div>
                <div className='text-[10px] uppercase tracking-widest text-primary-foreground/40 font-semibold mb-0.5'>
                  Hours of Operation
                </div>
                <div className='text-sm text-primary-foreground/80'>
                  Mon - Fri: 8am - 5pm
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3 justify-center md:justify-start'>
              <MapPin className='w-5 h-5 text-accent flex-shrink-0' />
              <div>
                <div className='text-[10px] uppercase tracking-widest text-primary-foreground/40 font-semibold mb-0.5'>
                  Head Office
                </div>
                <div className='text-sm text-primary-foreground/80'>
                  31 Ademola Street, off Awolowo Road, Ikoyi, Lagos
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href='#about'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-accent transition-colors z-10'
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className='w-5 h-5' />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;

