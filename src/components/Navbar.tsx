import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import gexpertLogo from "@/assets/gexpet logo.jpeg";

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
  {
    label: "Guiding Policies",
    to: "/guiding-policies",
    children: [
      { label: "Quality Policy", to: "/guiding-policies/quality-policy" },
      { label: "HSE Policy", to: "/guiding-policies/hse-policy" },
    ],
  },
  { label: "Articles", to: "/articles" },
  { label: "Our Partners", to: "/partners" },
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
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className='container mx-auto flex items-center justify-between h-20 px-4 sm:px-6 bg-white'>
        <Link to='/' className='flex items-center gap-2 sm:gap-3'>
          <img
            src={gexpertLogo}
            alt='Global Experts Consultoria logo'
            className='h-10 w-auto object-contain sm:h-12 lg:h-14'
          />
          <div className='flex flex-col gap-1 leading-tight'>
            <span className='text-[10px] font-bold uppercase tracking-[0.1em] text-[#012402] sm:text-[11px] lg:text-xs'>
              Global Expert
            </span>
            <span className='text-[8px] font-semibold uppercase tracking-[0.14em] text-[#012402]/75 sm:text-[9px] lg:text-[11px]'>
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
                className='px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1 relative group'
              >
                {link.label}
                {link.children && <ChevronDown className='w-3 h-3' />}
                <span className='absolute bottom-0 left-3 right-3 h-1 bg-[#012402] scale-x-0 group-hover:scale-x-100 transition-transform origin-left' />
              </Link>

              <AnimatePresence>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className='absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-[#012402]/10 overflow-hidden'
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={() => setActiveDropdown(null)}
                        className='block px-5 py-3 text-sm text-[#012402] hover:bg-[#012402] hover:text-white transition-colors'
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
            className='ml-3 px-5 py-2.5 bg-[#012402] text-white text-[12px] font-semibold uppercase tracking-[0.08em] rounded-full hover:bg-[#012402] transition-all'
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className='lg:hidden text-gray-700'
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
            className='lg:hidden bg-white overflow-hidden border-t border-gray-200'
          >
            <div className='px-6 pb-6 space-y-1'>
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className='block py-3 text-[12px] text-gray-600 hover:text-gray-800 font-semibold uppercase tracking-[0.08em] transition-colors'
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className='pb-2 pl-4'>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className='block py-2 text-[11px] text-gray-500 hover:text-gray-800 font-medium uppercase tracking-[0.08em] transition-colors'
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to='/contact'
                onClick={() => setMobileOpen(false)}
                className='block mt-4 text-center px-5 py-3 bg-[#012402] text-[12px] text-white font-semibold uppercase tracking-[0.08em] rounded-full hover:bg-[#012402] transition-all'
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
