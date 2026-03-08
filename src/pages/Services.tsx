import { Palette, Megaphone, Monitor, Printer, PenTool, Headphones, Brain, Sparkles, FileText, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const creativeServices = [
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    items: ["Logo design", "Marketing materials", "Print design", "Digital graphics"],
  },
  {
    icon: Megaphone,
    title: "Marketing & Social Media",
    items: ["Content strategy", "Social media graphics", "Campaign development", "Audience growth strategies"],
  },
  {
    icon: Monitor,
    title: "Web Design & UX/UI",
    items: ["Website design", "Landing pages", "UX/UI layouts", "User experience improvements"],
  },
  {
    icon: Printer,
    title: "Production Design & Prepress",
    items: ["Print-ready file creation", "Production artwork", "Prepress expertise", "Print vendor coordination"],
  },
  {
    icon: PenTool,
    title: "Writing & Content Development",
    items: ["Marketing copywriting", "Blog writing", "Social media writing", "Technical writing"],
  },
  {
    icon: Headphones,
    title: "Technical Support (Tier 1)",
    items: ["Basic troubleshooting", "Software assistance", "User support", "Digital workflow help"],
  },
];

const aiServices = [
  {
    icon: Brain,
    title: "AI Implementation",
    items: ["AI tool selection & setup", "Workflow integration", "Team training", "ROI optimization"],
  },
  {
    icon: Sparkles,
    title: "AI Prompt Engineering",
    items: ["Custom prompt development", "Content generation systems", "Quality assurance frameworks"],
  },
  {
    icon: FileText,
    title: "AI Content Systems",
    items: ["Automated content pipelines", "Brand voice consistency", "Multi-channel distribution"],
  },
  {
    icon: BarChart,
    title: "Generative Engine Optimization",
    items: ["GEO strategy", "AI-assisted marketing workflows", "Performance analytics"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-3xl">
              Services
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              Comprehensive creative and digital solutions tailored to help your brand communicate clearly and grow confidently.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Creative Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-2">The Dunn Design Company</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">Creative Services</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card p-8 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <service.icon className="text-accent mb-4" size={28} />
                  <h3 className="font-heading font-bold text-foreground mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-coral font-heading font-semibold text-sm uppercase tracking-widest mb-2">The Dunn Company</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">AI & Digital Innovation</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {aiServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card p-8 rounded-xl border border-border hover:border-coral/30 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <service.icon className="text-coral mb-4" size={28} />
                  <h3 className="font-heading font-bold text-foreground mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
