import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Palette, Share2, FileText, MessageSquare, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroCreative from "@/assets/hero-creative.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceCollateral from "@/assets/service-collateral.jpg";

const services = [
  {
    image: serviceStrategy,
    icon: Target,
    title: "Marketing Strategy",
    desc: "Strategic marketing guidance that helps brands define their message, identify their audience, and build marketing approaches that support long-term growth.",
    deliverables: ["Marketing plans", "Campaign strategy", "Brand messaging", "Marketing consultation"],
  },
  {
    image: serviceDesign,
    icon: Palette,
    title: "Brand & Graphic Design",
    desc: "Professional visual design that strengthens brand identity and improves communication through cohesive visual systems and marketing materials.",
    deliverables: ["Logos", "Marketing materials", "Brand graphics", "Print and digital design"],
  },
  {
    image: serviceSocial,
    icon: Share2,
    title: "Social Media Content & Campaigns",
    desc: "Creative social media content designed to help brands build stronger connections with their audiences and increase engagement across platforms.",
    deliverables: ["Social media graphics", "Campaign visuals", "Content templates", "Branded posts"],
  },
  {
    image: serviceCollateral,
    icon: FileText,
    title: "Marketing Collateral & Digital Assets",
    desc: "Polished marketing materials that support presentations, promotions, advertising, and digital marketing campaigns.",
    deliverables: ["Pitch decks", "Brochures", "Flyers", "Email marketing graphics"],
  },
];

const steps = [
  { icon: MessageSquare, title: "Discovery", desc: "We start with a conversation to understand your business, goals, and marketing challenges." },
  { icon: Lightbulb, title: "Strategy", desc: "A marketing and design strategy is developed to support your brand and business objectives." },
  { icon: Rocket, title: "Design & Execution", desc: "Creative ideas are transformed into professional marketing materials and visual assets." },
  { icon: TrendingUp, title: "Growth & Optimization", desc: "Marketing assets are designed to support engagement, brand growth, and long-term visibility." },
];

const trustPoints = [
  "Marketing Strategy",
  "Brand Design",
  "Social Media Content",
  "Digital Marketing Assets",
  "Graphic Design for Print & Web",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCreative} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 container-narrow px-6 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight max-w-4xl"
          >
            Design That Connects.<br />Marketing That Converts.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed"
          >
            Creative marketing, strategic design, and digital content that helps brands grow and engage their audiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-primary-foreground/60 text-base max-w-2xl mt-4 leading-relaxed"
          >
            The Dunn Design Company helps businesses elevate their brands through thoughtful design, strategic marketing, and engaging digital content that connects with audiences and drives meaningful results.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-secondary font-heading font-medium text-sm mt-6"
          >
            Founded by Melissa Dunn
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Portfolio <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Work With Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Strategic Creativity for Modern Brands
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              Modern brands need more than just attractive visuals. They need strategy, clarity, and creative marketing that works. The Dunn Design Company combines marketing insight with professional design to create work that communicates clearly, strengthens brand identity, and supports business growth.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="px-5 py-2.5 bg-secondary/50 rounded-full text-foreground font-heading font-medium text-sm border border-border"
                >
                  {point}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">Services</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Comprehensive creative and marketing solutions for businesses ready to grow.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <service.icon className="text-accent mb-3" size={28} />
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <span key={d} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
              How We Work
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-accent" size={28} />
                  </div>
                  <span className="text-accent font-heading font-bold text-sm">Step {i + 1}</span>
                  <h3 className="font-heading font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              Whether you're building a new brand, refining your marketing strategy, or looking for creative support, The Dunn Design Company is ready to help bring your ideas to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Work With Me <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
