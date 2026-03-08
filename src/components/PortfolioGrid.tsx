import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

interface PortfolioItem {
  image: string;
  title: string;
  type: string;
}

const PortfolioGrid = ({ items }: { items: PortfolioItem[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item, i) => (
      <AnimatedSection key={item.title + i} delay={i * 0.06}>
        <motion.div
          whileHover={{ y: -6 }}
          className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <span className="text-secondary text-xs font-heading font-semibold uppercase tracking-wider">
              {item.type}
            </span>
            <h3 className="font-heading font-bold text-foreground mt-1">{item.title}</h3>
          </div>
        </motion.div>
      </AnimatedSection>
    ))}
  </div>
);

export default PortfolioGrid;
