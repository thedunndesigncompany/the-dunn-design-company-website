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
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const services = [
  {
    image: serviceStrategy,
    icon: Target,
    title: "Marketing Strategy",
    desc: "Strategic marketing planning that helps businesses define their message, identify their audience, and build marketing approaches that support long-term growth.",
  },
  {
    image: serviceDesign,
    icon: Palette,
    title: "Brand & Graphic Design",
    desc: "Professional design systems including brand visuals, marketing graphics, and communication materials that strengthen brand identity.",
  },
  {
    image: serviceSocial,
    icon: Share2,
    title: "Social Media Content",
    desc: "Creative social media graphics and digital content designed to increase engagement and strengthen brand presence across platforms.",
  },
  {
    image: serviceCollateral,
    icon: FileText,
    title: "Marketing Collateral",
    desc: "Marketing materials such as brochures, presentations, digital assets, and promotional graphics that support brand communication.",
  },
];

const featuredWork = [
  { image: portfolio1, title: "Brand Identity Design", category: "Brand & Graphic Design" },
  { image: portfolio2, title: "Social Media Campaign Graphics", category: "Social Media" },
  { image: portfolio3, title: "Marketing Case Study Layout", category: "Marketing Strategy" },
  { image: portfolio4, title: "Digital Marketing Graphics", category: "Marketing Collateral" },
];

const steps = [
  { icon: MessageSquare, title: "Discovery", desc: "Understanding the client's business, audience, and goals." },
  { icon: Lightbulb, title: "Strategy", desc: "Developing a clear marketing and design direction." },
  { icon: Rocket, title: "Design", desc: "Creating professional marketing visuals and digital assets." },
  { icon: TrendingUp, title: "Growth", desc: "Supporting brand communication and long-term engagement." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCreative} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container-narrow px-6 pt-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-accent font-heading font-bold text-lg md:text-xl mb-4"
          >
            The Dunn Company
          </motion.p>
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
            The Dunn Company helps businesses strengthen their brands through strategic marketing, creative design, and modern digital communication.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-4"
          >
            <p className="text-sky font-heading font-medium text-sm">
              Creative Studio: The Dunn Design Company
            </p>
            <p className="text-primary-foreground/50 font-heading text-xs mt-1">
              Founded by Melissa Dunn
            </p>
          </motion.div>
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
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">Creative Division</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Creative Studio: The Dunn Design Company
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
              The Dunn Design Company is the creative studio division of The Dunn Company. It focuses on brand design, marketing visuals, and digital content that help businesses communicate clearly and connect with their audiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              The studio blends marketing strategy with creative design to produce work that is visually compelling, strategically thoughtful, and built for modern digital communication.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">Creative Services</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Strategic marketing and design solutions for modern brands.
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
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">Selected Work</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              A curated selection of creative marketing and design projects.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-8">
            {featuredWork.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-accent text-xs font-heading font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mt-1">{project.title}</h3>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View Full Portfolio <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
              Our Process
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
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              About The Dunn Company
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
              The Dunn Company is a modern marketing and creative firm focused on helping businesses grow through strategic marketing, creative design, and digital communication.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
              Its creative studio division, The Dunn Design Company, specializes in brand design, marketing visuals, and digital content creation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              The company was founded by Melissa Dunn, a marketing professional with experience in marketing strategy, graphic design, social media management, and digital content development.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Learn More <ArrowRight size={16} />
            </Link>
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
              Whether you're launching a new brand, improving your marketing strategy, or developing creative content, The Dunn Design Company is ready to help bring your ideas to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
