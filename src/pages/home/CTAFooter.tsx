import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const CTAFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 bg-[#012402] relative overflow-hidden"
        ref={ref}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ebf5ec] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your
              <br />
              <span className="text-[#ebf5ec]">Next Project?</span>
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Partner with Global Experts Consultoria and leverage our
              multi-discipline expertise to deliver exceptional results across
              industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@globalexpertsconsultoria.com"
                className="px-8 py-4 bg-white text-[#012402] font-semibold rounded-lg hover:brightness-95 transition-all flex items-center gap-2"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+2348068970938"
                className="px-8 py-4 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#012402] py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center font-bold text-white text-xl">
                  G
                </div>
                <div>
                  <span className="font-semibold text-white block leading-tight">
                    Global Experts
                  </span>
                  <span className="text-white/50 text-[10px] uppercase tracking-widest">
                    Consultoria
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                GExperts Consultoria Limited - providing world class engineering,
                project management, asset integrity & maintenance consultancy
                solutions globally.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/60">
                {[
                  "EPCI Consultancy",
                  "Project Management",
                  "Engineering Services",
                  "Research & Development",
                  "Technical Advisory",
                  "Market Intelligence",
                ].map((s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-white transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                {[
                  "About Us",
                  "Our Partners",
                  "Industries",
                  "Articles",
                  "Guiding Policies",
                  "Contact Us",
                ].map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-white transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white flex-shrink-0" />
                  +2348068970938
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white flex-shrink-0" />
                  info@globalexpertsconsultoria.com
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white flex-shrink-0" />
                  globalexpertsconsultoria@gmail.com
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  31 Ademola Street, off Awolowo Road, Ikoyi, Lagos
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white flex-shrink-0" />
                  Mon - Fri: 8am - 5pm
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>(c) 2026 GExperts Consultoria Limited. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Guiding Policies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
