import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "@/lib/icons";

const VISIBILITY_SCROLL_OFFSET = 320;

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > VISIBILITY_SCROLL_OFFSET);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type='button'
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={handleBackToTop}
          aria-label='Back to top'
          className='fixed bottom-6 right-6 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#012402] text-white shadow-lg shadow-[#012402]/25 transition-colors hover:bg-[#023b04] focus:outline-none focus:ring-2 focus:ring-[#012402] focus:ring-offset-2'
        >
          <ArrowUp className='h-5 w-5' />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
