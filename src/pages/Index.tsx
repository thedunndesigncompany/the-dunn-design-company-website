import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Megaphone, Monitor, Printer, Brain } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const services = [
  { icon: Palette, title: "Graphic Design & Branding", desc: "Logo design, marketing materials, print & digital graphics" },
  { icon: Megaphone, title: "Marketing & Social Media", desc: "Content strategy, campaigns, and audience growth" },
  { icon: Monitor, title: "Web & UX/UI Design", desc: "Website design, landing pages, and user experience" },
  { icon: Printer, title: "Production Design & Prepress", desc: "Print-ready files, production artwork, vendor coordination" },
  { icon: Brain, title: "AI Implementation & Digital Strategy", desc: "AI tools, automation, and next-gen marketing workflows" },
];

const portfolioItems = [
  { image: portfolio1, title: "Brand Identity System", category: "Graphic Design" },
  { image: portfolio3, title: "Social Media Campaign", category: "Marketing" },
  { image: portfolio4, title: "Corporate Website Redesign", category: "Web Design" },
  { image: portfolio5, title: "Magazine Production", category: "Production Design" },
  { image: portfolio6, title: "AI Marketing Strategy", category: "Digital Strategy" },
  { image: portfolio1, title: "Visual Identity Refresh", category: "Branding" },
];

const testimonials = [
  { quote: "Melissa was incredible to work with. Her creativity and attention to detail elevated our brand and marketing materials.", name: "Sarah Mitchell", company: "Bright Horizon Media" },
  { quote: "The strategic thinking behind every design decision made all the difference. Our engagement metrics improved dramatically.", name: "James Carter", company: "Nexus Digital" },
  { quote: "From concept to execution, Melissa delivered outstanding results that exceeded our expectations.", name: "Laura Chen", company: "Evergreen Brands" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container-narrow px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4"
          >
            The Dunn Design Company
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight max-w-4xl"
          >
            Melissa Dunn — Creative Marketing Professional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-secondary font-heading font-medium mt-6"
          >
            Design That Connects. Marketing That Converts.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-primary-foreground/70 text-lg max-w-2xl mt-4 leading-relaxed"
          >
            Creative marketing, strategic design, and digital content that helps brands grow and engage their audiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Portfolio <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                About Melissa
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Melissa Dunn is a creative marketing professional with more than two decades of experience in graphic design, production design, marketing strategy, and digital content creation. She helps businesses turn ideas into impactful visuals and strategic marketing solutions.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Two Divisions */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 text-center">
              Two Divisions. One Creative Vision.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-card p-8 md:p-10 rounded-xl shadow-sm border border-border h-full">
                <h3 className="font-heading font-bold text-xl text-primary mb-4">The Dunn Design Company</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Creative marketing, design, and digital content services that help brands communicate clearly and grow confidently.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm hover:gap-3 transition-all"
                >
                  Explore Design Services <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-primary p-8 md:p-10 rounded-xl shadow-sm h-full">
                <h3 className="font-heading font-bold text-xl text-primary-foreground mb-4">The Dunn Company</h3>
                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                  Helping businesses implement AI-powered tools, automation, and next-generation marketing strategies.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-secondary font-heading font-semibold text-sm hover:gap-3 transition-all"
                >
                  Explore AI Solutions <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">Services</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Comprehensive creative and digital solutions for businesses ready to grow.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card p-8 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <service.icon className="text-accent mb-4" size={28} />
                  <h3 className="font-heading font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
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

      {/* Portfolio Preview */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">Featured Work</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              A curated selection of projects showcasing creativity, strategy, and real-world impact.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Link to="/portfolio">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-xl bg-card shadow-sm"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-accent text-xs font-heading font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-heading font-bold text-foreground mt-1">{item.title}</h3>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View Full Portfolio <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
              What Clients Say
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card p-8 rounded-xl border border-border h-full flex flex-col">
                  <p className="text-muted-foreground italic leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.company}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Let's Create Something Great Together.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Contact Me <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
