import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BrandDesignIcon,
  MarketingStrategyIcon,
  DigitalContentIcon,
  CollateralIcon,
  CampaignIcon,
  SocialDesignIcon,
} from "@/components/icons/ServiceIcons";
import heroBg from "@/assets/hero-bg.jpg";
import serviceBrandDesign from "@/assets/service-brand-design.jpg";
import serviceMarketingStrategy from "@/assets/service-marketing-strategy.jpg";
import serviceDigitalContent from "@/assets/service-digital-content.jpg";
import serviceCollateral from "@/assets/service-collateral-new.jpg";
import serviceCampaigns from "@/assets/service-campaigns.jpg";
import serviceSocialDesign from "@/assets/service-social-design.jpg";
import agencyMarketingFlatlay from "@/assets/agency-marketing-flatlay.jpg";

const services = [
  {
    Icon: BrandDesignIcon,
    image: serviceBrandDesign,
    title: "Brand Design",
    desc: "Professional design systems including logos, brand visuals, business cards, and communication materials that strengthen brand identity.",
    deliverables: ["Logos & brand marks", "Visual identity systems", "Business cards", "Brand guidelines"],
  },
  {
    Icon: MarketingStrategyIcon,
    image: serviceMarketingStrategy,
    title: "Marketing Strategy",
    desc: "Strategic marketing planning that helps businesses define their message, identify their audience, and build approaches that support long-term growth.",
    deliverables: ["Marketing plans", "Campaign strategy", "Brand messaging", "Marketing consultation"],
  },
  {
    Icon: DigitalContentIcon,
    image: serviceDigitalContent,
    title: "Digital Content",
    desc: "Creative social media graphics and digital content designed to increase engagement and strengthen brand presence across platforms.",
    deliverables: ["Social media graphics", "Campaign visuals", "Content templates", "Branded posts"],
  },
  {
    Icon: CollateralIcon,
    image: serviceCollateral,
    title: "Marketing Collateral",
    desc: "Marketing materials such as brochures, presentations, digital assets, and promotional graphics that support brand communication.",
    deliverables: ["Pitch decks", "Sell sheets", "Brochures & flyers", "Email marketing graphics"],
  },
  {
    Icon: CampaignIcon,
    image: serviceCampaigns,
    title: "Creative Campaigns",
    desc: "End-to-end campaign design from concept to execution, supporting brand visibility and audience engagement across digital and print.",
    deliverables: ["Campaign concepts", "Ad creatives", "Launch materials", "Cross-channel assets"],
  },
  {
    Icon: SocialDesignIcon,
    image: serviceSocialDesign,
    title: "Social Media Design",
    desc: "Custom social media templates and branded content designs that keep your brand consistent and engaging across every platform.",
    deliverables: ["Platform templates", "Story designs", "Carousel graphics", "Profile branding"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-3xl">
              Creative Services
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              Strategic marketing and design solutions tailored to help your brand communicate clearly and grow confidently.
            </p>
            <p className="text-secondary font-heading font-medium text-sm mt-3">
              Creative Studio: The Dunn Design Company
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:brightness-110 transition-all mt-6"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow space-y-16">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.1}>
              <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                  </motion.div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <service.Icon className="text-secondary" size={24} />
                  </div>
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

      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={agencyMarketingFlatlay} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-narrow text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Let's discuss how The Dunn Design Company can help elevate your brand and marketing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:brightness-110 transition-all"
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
