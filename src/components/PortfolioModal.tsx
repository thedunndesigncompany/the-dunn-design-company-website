import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PortfolioItemData {
  image: string;
  title: string;
  type: string;
  description?: string;
  client?: string;
  role?: string;
  tools?: string;
  metrics?: string;
}

interface PortfolioModalProps {
  item: PortfolioItemData | null;
  onClose: () => void;
}

const PortfolioModal = ({ item, onClose }: PortfolioModalProps) => (
  <AnimatePresence>
    {item && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-card rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img src={item.image} alt={item.title} className="w-full aspect-[16/10] object-cover" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center hover:bg-card transition-colors"
            >
              <X size={20} className="text-foreground" />
            </button>
          </div>
          <div className="p-6 md:p-8 space-y-4">
            <span className="text-secondary text-xs font-heading font-semibold uppercase tracking-wider">
              {item.type}
            </span>
            <h2 className="text-2xl font-heading font-bold text-foreground">{item.title}</h2>
            {item.description && (
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            )}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {item.client && (
                <div>
                  <h4 className="font-heading font-semibold text-sm text-foreground">Client</h4>
                  <p className="text-muted-foreground text-sm">{item.client}</p>
                </div>
              )}
              {item.role && (
                <div>
                  <h4 className="font-heading font-semibold text-sm text-foreground">Role</h4>
                  <p className="text-muted-foreground text-sm">{item.role}</p>
                </div>
              )}
              {item.tools && (
                <div>
                  <h4 className="font-heading font-semibold text-sm text-foreground">Tools</h4>
                  <p className="text-muted-foreground text-sm">{item.tools}</p>
                </div>
              )}
              {item.metrics && (
                <div>
                  <h4 className="font-heading font-semibold text-sm text-foreground">Metrics</h4>
                  <p className="text-muted-foreground text-sm">{item.metrics}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export type { PortfolioItemData };
export default PortfolioModal;
