import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

type NavLink = {
  label: string;
  to: string;
  children?: Array<{ label: string; to: string }>;
};

const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Our Services",
    to: "/services",
    children: [
      { label: "Engineering Services", to: "/services/engineering-services" },
      { label: "Business Processes", to: "/services/business-processes" },
      { label: "Research & Development", to: "/services/research-development" },
      {
        label: "Research and Market Intelligence",
        to: "/services/research-market-intelligence",
      },
      { label: "Oil and Gas Management", to: "/services/oil-gas-management" },
      {
        label: "Project Management and Execution",
        to: "/services/project-management-execution",
      },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
  },
  {
    label: "Our Products",
    to: "/products",
    children: [
      {
        label: "Digitalization and Edge Computing",
        to: "/products/digitalization-edge",
      },
      { label: "Digital Twin Services", to: "/products/digital-twin" },
      {
        label: "Electrical Equipment & Safety",
        to: "/products/electrical-safety",
      },
      { label: "Flexible Tank", to: "/products/flexible-tank" },
      { label: "Flowmeters and Sensors", to: "/products/flowmeters-sensors" },
      {
        label: "NDT Products Innovation & Laser Scanning",
        to: "/products/ndt-laser",
      },
      { label: "Renewable Energy", to: "/products/renewable-energy" },
      { label: "Safety/HSE", to: "/products/safety-hse" },
      {
        label: "Software and Hardware Forecourt Automation",
        to: "/products/forecourt-automation",
      },
      { label: "Test Equipment", to: "/products/test-equipment" },
      { label: "Thermal Monitoring", to: "/products/thermal-monitoring" },
      {
        label: "Valves, Flanges and Pumps",
        to: "/products/valves-flanges-pumps",
      },
    ],
  },
  { label: "Guiding Policies", to: "/guiding-policies" },
  { label: "Articles", to: "/articles" },
  { label: "Our Partners", to: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/60 backdrop-blur-md shadow-lg border-b border-primary/20"
          : "bg-primary/30 backdrop-blur-md"
      }`}
    >
      <div className='container mx-auto flex items-center justify-between h-20 px-6'>
        <Link to='/' className='flex items-center gap-3'>
          <div className='w-11 h-11 rounded-full border-2 border-accent flex items-center justify-center font-display font-bold text-accent text-xl'>
            G
          </div>
          <div className='hidden sm:block'>
            <span className='font-display font-semibold text-base text-primary-foreground tracking-tight leading-tight block'>
              Global Experts
            </span>
            <span className='text-primary-foreground/50 text-[10px] uppercase tracking-widest font-medium'>
              Consultoria
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className='hidden lg:flex items-center gap-0.5'>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className='relative'
              onMouseEnter={() =>
                link.children && setActiveDropdown(link.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.to}
                className='px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-1 relative group'
              >
                {link.label}
                {link.children && <ChevronDown className='w-3 h-3' />}
                <span className='absolute bottom-0 left-3 right-3 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left' />
              </Link>

              <AnimatePresence>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className='absolute top-full left-0 mt-1 w-72 bg-card/70 backdrop-blur-md rounded-lg shadow-xl border border-border/50 overflow-hidden'
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={() => setActiveDropdown(null)}
                        className='block px-5 py-3 text-sm text-card-foreground hover:bg-[#1a381a] hover:text-[#e8bb30] transition-colors'
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link
            to='/contact'
            className='ml-3 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all'
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className='lg:hidden text-primary-foreground'
        >
          {mobileOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='lg:hidden bg-primary/95 backdrop-blur-md overflow-hidden'
          >
            <div className='px-6 pb-6 space-y-1'>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className='block py-3 text-primary-foreground/80 hover:text-[#e7fa99] font-medium transition-colors'
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to='/contact'
                onClick={() => setMobileOpen(false)}
                className='block mt-4 text-center px-5 py-3 bg-accent text-accent-foreground font-semibold rounded-lg'
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
