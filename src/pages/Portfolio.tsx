import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
import stockDesignConcept from "@/assets/stock-design-concept.jpg";
import stockColorSwatches from "@/assets/stock-color-swatches.jpg";
import stockCreativeWorkspace from "@/assets/stock-creative-workspace.jpg";
import stockDigitalMarketing from "@/assets/stock-digital-marketing.jpg";
import stockPrintProduction from "@/assets/stock-print-production.jpg";
import stockDesignStudio from "@/assets/stock-design-studio.jpg";
import stockSocialAnalytics from "@/assets/stock-social-analytics.jpg";
import stockAdsDashboard from "@/assets/stock-ads-dashboard.jpg";
import stockColorExplosion from "@/assets/stock-color-explosion.jpg";
import stockMarketingIcons from "@/assets/stock-marketing-icons.jpg";

/* ── Data ── */

const graphicDesign = [
  { image: stockDesignConcept, title: "Tech Startup Brand Identity", type: "Logo & Brand System" },
  { image: stockCreativeWorkspace, title: "Professional Services Rebrand", type: "Visual Identity" },
  { image: stockColorSwatches, title: "Nonprofit Visual Identity", type: "Brand Guidelines" },
  { image: stockDesignStudio, title: "Product Line Brand Package", type: "Business Cards & Collateral" },
];

const productionDesign = [
  { image: stockPrintProduction, title: "Healthcare Outreach Materials", type: "Pitch Deck & Brochures" },
  { image: stockColorExplosion, title: "Retail Campaign Sell Sheets", type: "Sell Sheets & Presentations" },
  { image: stockDesignConcept, title: "Conference Speaker Kit", type: "Presentation Design" },
];

const marketingContent = [
  { image: stockSocialAnalytics, title: "Retail Social Media Campaign", type: "Social Media Graphics" },
  { image: stockAdsDashboard, title: "Nonprofit Fundraising Campaign", type: "Email Marketing Visuals" },
  { image: stockDigitalMarketing, title: "Product Launch Digital Ads", type: "Campaign Assets" },
  { image: stockMarketingIcons, title: "Digital Marketing Suite", type: "Marketing Icons & Graphics" },
];

const caseStudies = [
  {
    image: stockDesignConcept,
    title: "Strategic Brand Launch Campaign",
    client: "Technology Startup",
    overview: "Developed a comprehensive go-to-market strategy for a technology startup entering a competitive market.",
    challenge: "The client needed to establish brand awareness and generate leads in a crowded market with limited initial budget.",
    solution: "Created a phased marketing approach focusing on targeted digital channels, content marketing, and strategic partnerships. Designed complete marketing materials including brand collateral, social media templates, and campaign assets.",
    results: "Successfully launched the brand with strong initial engagement and measurable audience growth within the first quarter.",
  },
  {
    image: stockCreativeWorkspace,
    title: "Corporate Identity Redesign",
    client: "Professional Services Firm",
    overview: "Complete visual identity overhaul for an established professional services firm seeking a modern refresh.",
    challenge: "The existing brand felt outdated and no longer reflected the company's evolved positioning and capabilities.",
    solution: "Conducted brand audit and competitive analysis to inform a modern yet professional visual direction. Designed new logo system, color palette, typography guidelines, and full brand collateral suite.",
    results: "Delivered a cohesive brand identity that strengthened market positioning and improved client perception.",
  },
  {
    image: stockSocialAnalytics,
    title: "Social Media Engagement Campaign",
    client: "Retail Brand",
    overview: "Multi-platform social media strategy and content creation for a growing retail brand.",
    challenge: "Low engagement rates and inconsistent brand presence across social media platforms.",
    solution: "Developed platform-specific content strategies with consistent brand voice and visual identity. Created campaign visuals, content templates, branded graphics, and a content calendar.",
    results: "Significantly improved engagement rates and follower growth across all platforms.",
  },
];

/* ── Main Page ── */

const Portfolio = () => {
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={stockColorExplosion} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-4xl">
              Portfolio
            </h1>
            <p className="text-accent font-heading font-medium text-lg mt-2">
              Melissa Dunn — Marketing Strategist | Graphic Designer | Social Media Specialist
            </p>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              Selected work across graphic design, production design, and marketing materials.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Graphic Design ── */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Category</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Graphic Design</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Logos, brand identity systems, business cards, and brand guidelines.
            </p>
          </AnimatedSection>
          <PortfolioGrid items={graphicDesign} />
        </div>
      </section>

      {/* ── Production Design ── */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Category</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Production Design</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Pitch decks, sell sheets, presentations, and marketing collateral.
            </p>
          </AnimatedSection>
          <PortfolioGrid items={productionDesign} />
        </div>
      </section>

      {/* ── Marketing & Digital Content ── */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Category</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Marketing & Digital Content</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Social media graphics, email marketing visuals, and campaign assets.
            </p>
          </AnimatedSection>
          <PortfolioGrid items={marketingContent} />
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="section-padding bg-sand">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">In Depth</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Case Studies</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              A closer look at select projects — the challenge, the approach, and the outcome.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <AnimatedSection key={study.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setExpandedStudy(expandedStudy === i ? null : i)}
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
                      />
                    </div>
                    <div className="md:col-span-3 p-6 md:p-8">
                      <span className="text-secondary text-xs font-heading font-semibold uppercase tracking-wider">
                        Client: {study.client}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-foreground mt-1 mb-3">{study.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.overview}</p>

                      <AnimatePresence>
                        {expandedStudy === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-4 pt-5 mt-5 border-t border-border">
                              <div>
                                <h4 className="font-heading font-semibold text-sm text-foreground">Challenge</h4>
                                <p className="text-muted-foreground text-sm">{study.challenge}</p>
                              </div>
                              <div>
                                <h4 className="font-heading font-semibold text-sm text-foreground">Design Solution</h4>
                                <p className="text-muted-foreground text-sm">{study.solution}</p>
                              </div>
                              <div>
                                <h4 className="font-heading font-semibold text-sm text-foreground">Results</h4>
                                <p className="text-muted-foreground text-sm">{study.results}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <span className="inline-flex items-center gap-1 text-secondary text-sm font-heading font-semibold mt-4">
                        {expandedStudy === i ? "Close" : "View Case Study"} <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Like What You See?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Let's discuss how we can create impactful marketing and design work for your brand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:brightness-110 transition-all"
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

export default Portfolio;
