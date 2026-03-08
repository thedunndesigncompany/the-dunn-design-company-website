import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Presentation, Target, MessageSquare, Lightbulb, Rocket, TrendingUp, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import agencyBrandDesign from "@/assets/agency-brand-design.jpg";
import agencyPrintCollateral from "@/assets/agency-print-collateral.jpg";
import agencyStrategyRoom from "@/assets/agency-strategy-room.jpg";
import agencyDigitalWorkspace from "@/assets/agency-digital-workspace.jpg";
import agencyBrandIdentity from "@/assets/agency-brand-identity.jpg";
import agencySocialContent from "@/assets/agency-social-content.jpg";
import agencyCampaignPlanning from "@/assets/agency-campaign-planning.jpg";
import agencyProductionStudio from "@/assets/agency-production-studio.jpg";
import agencyDigitalAnalytics from "@/assets/agency-digital-analytics.jpg";
import agencyEmailMarketing from "@/assets/agency-email-marketing.jpg";
import melissaDunn from "@/assets/melissa-dunn-cropped.jpg";

const whatWeDo = [
  {
    icon: Palette,
    image: agencyBrandDesign,
    title: "Graphic Design",
    desc: "Logos, brand identity, business cards, marketing materials.",
  },
  {
    icon: Presentation,
    image: agencyPrintCollateral,
    title: "Production Design",
    desc: "Pitch decks, sell sheets, presentations, printed assets.",
  },
  {
    icon: Target,
    image: agencyStrategyRoom,
    title: "Marketing & Creative Strategy",
    desc: "Campaign concepts, brand positioning, digital marketing.",
  },
];

const featuredWork = [
  { image: agencyBrandIdentity, title: "Brand Identity Systems", label: "Brand & Visual Design" },
  { image: agencyProductionStudio, title: "Print & Production Design", label: "Graphic Design" },
  { image: agencySocialContent, title: "Social Media Campaigns", label: "Digital Marketing" },
  { image: agencyDigitalAnalytics, title: "Digital Strategy", label: "Strategy & Analytics" },
  { image: agencyCampaignPlanning, title: "Creative Campaigns", label: "Creative Direction" },
  { image: agencyEmailMarketing, title: "Email & Digital Content", label: "Digital Design" },
];

const processSteps = [
  { icon: MessageSquare, title: "Discover", desc: "Understand the brand and audience." },
  { icon: Lightbulb, title: "Design", desc: "Build strategic visuals and messaging." },
  { icon: Rocket, title: "Launch", desc: "Execute across digital channels." },
  { icon: TrendingUp, title: "Grow", desc: "Measure and refine for long-term success." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img src={agencyDigitalWorkspace} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-accent/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute bottom-20 right-[10%] w-64 h-64 rounded-full bg-accent/10 animate-float-slow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>

        <div className="relative z-10 container-narrow px-6 pt-24 pb-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-primary-foreground/60 font-heading font-semibold text-sm uppercase tracking-[0.2em]">
                The Dunn Company
              </span>
              <span className="text-primary-foreground/30 mx-3">•</span>
              <span className="text-primary-foreground/40 font-heading text-sm">
                Strategic Marketing & Brand Growth
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-primary-foreground leading-[0.95] mb-8"
            >
              Design That
              <br />
              Connects.
              <br />
              <span className="text-accent">Marketing</span>
              <br />
              That Converts.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-primary-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed mb-6"
            >
              Strategic marketing and creative design that help brands grow, engage, and stand out.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-secondary font-heading font-medium text-sm tracking-wide mb-8"
            >
              Creative Studio: The Dunn Design Company
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:brightness-110 transition-all"
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
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3 text-center">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground text-center mb-14">
              Creative Services for Modern Brands
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {whatWeDo.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
                  className="bg-background rounded-2xl overflow-hidden border border-border hover:border-secondary/30 transition-all duration-300 h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-secondary" size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3 text-center">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground text-center mb-14">
              Featured Work
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWork.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.06}>
                <Link to="/portfolio">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-heading font-semibold text-secondary uppercase tracking-wider">
                        {project.label}
                      </span>
                      <h3 className="font-heading font-bold text-foreground mt-1">{project.title}</h3>
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
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:brightness-110 transition-all"
              >
                View Full Portfolio <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="section-padding bg-sand">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto relative">
                <img
                  src={melissaDunn}
                  alt="Melissa Dunn — Founder"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Founded by Melissa Dunn
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The Dunn Company helps businesses grow through strategic marketing, creative design, and modern digital communication.
              </p>
              <p className="text-secondary font-heading font-medium text-sm mb-6">
                Creative Studio: The Dunn Design Company
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3 text-center">
              How We Work
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground text-center mb-14">
              Our Process
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-5 relative z-10 border-4 border-card">
                    <step.icon className="text-accent" size={28} />
                  </div>
                  <span className="text-accent font-heading font-bold text-xs uppercase tracking-widest">
                    Step {i + 1}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={agencyCampaignPlanning} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container-narrow text-center relative z-10">
          <AnimatedSection>
            <Sparkles className="text-accent mx-auto mb-4" size={32} />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're building a brand or growing one, we help businesses connect with their audience through powerful design and strategic marketing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:brightness-110 transition-all"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
