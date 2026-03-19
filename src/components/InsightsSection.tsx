import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    tag: "Innovation",
    title: "Digital Twins: Transforming Asset Management in Oil & Gas",
    excerpt: "How digital twin technology is revolutionizing predictive maintenance and operational efficiency.",
  },
  {
    tag: "Sustainability",
    title: "Decarbonization Strategies for Industrial Operations",
    excerpt: "Practical approaches to reducing carbon footprint while maintaining operational performance.",
  },
  {
    tag: "Project Delivery",
    title: "Agile Project Management in Capital-Intensive Industries",
    excerpt: "Adapting agile methodologies for large-scale engineering projects and complex stakeholder environments.",
  },
];

const InsightsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent font-display text-sm font-semibold uppercase tracking-widest">
                Insights
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Latest <span className="text-accent">Thinking</span>
            </h2>
          </div>
          <a
            href="#insights"
            className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
          >
            View All Insights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-6xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                  {item.tag}
                </span>
                <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
