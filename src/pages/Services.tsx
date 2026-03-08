import { Link } from "react-router-dom";
import { Target, Palette, Share2, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceStrategy from "@/assets/service-strategy.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceCollateral from "@/assets/service-collateral.jpg";

const services = [
  {
    icon: Target,
    image: serviceStrategy,
    title: "Marketing Strategy",
    desc: "Strategic marketing planning that helps businesses define their message, identify their audience, and build marketing approaches that support long-term growth.",
    deliverables: ["Marketing plans", "Campaign strategy", "Brand messaging", "Marketing consultation"],
  },
  {
    icon: Palette,
    image: serviceDesign,
    title: "Brand & Graphic Design",
    desc: "Professional design systems including brand visuals, marketing graphics, and communication materials that strengthen brand identity.",
    deliverables: ["Logos", "Marketing materials", "Brand graphics", "Print and digital design"],
  },
  {
    icon: Share2,
    image: serviceSocial,
    title: "Social Media Content",
    desc: "Creative social media graphics and digital content designed to increase engagement and strengthen brand presence across platforms.",
    deliverables: ["Social media graphics", "Campaign visuals", "Content templates", "Branded posts"],
  },
  {
    icon: FileText,
    image: serviceCollateral,
    title: "Marketing Collateral",
    desc: "Marketing materials such as brochures, presentations, digital assets, and promotional graphics that support brand communication.",
    deliverables: ["Pitch decks", "Brochures", "Flyers", "Email marketing graphics", "Promotional materials"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-3xl">
              Creative Services
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              Strategic marketing and design solutions tailored to help your brand communicate clearly and grow confidently.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-16">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.1}>
              <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                  </motion.div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <service.icon className="text-accent mb-4" size={32} />
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-3">Example Deliverables</h4>
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Let's discuss how The Dunn Design Company can help elevate your brand and marketing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
