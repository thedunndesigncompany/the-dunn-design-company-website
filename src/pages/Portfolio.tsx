import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const categories = ["All", "Marketing Strategy", "Brand & Graphic Design", "Social Media Campaigns", "Marketing Collateral"];

const projects = [
  {
    image: portfolio1,
    title: "Strategic Brand Launch Campaign",
    category: "Marketing Strategy",
    client: "Technology Startup",
    overview: "Developed a comprehensive go-to-market strategy for a technology startup entering a competitive market.",
    challenge: "The client needed to establish brand awareness and generate leads in a crowded market with limited initial budget.",
    strategy: "Created a phased marketing approach focusing on targeted digital channels, content marketing, and strategic partnerships.",
    execution: "Designed complete marketing materials including brand collateral, social media templates, and campaign assets.",
    results: "Successfully launched the brand with strong initial engagement and measurable audience growth within the first quarter.",
  },
  {
    image: portfolio2,
    title: "Corporate Identity Redesign",
    category: "Brand & Graphic Design",
    client: "Professional Services Firm",
    overview: "Complete visual identity overhaul for an established professional services firm seeking a modern refresh.",
    challenge: "The existing brand felt outdated and no longer reflected the company's evolved positioning and capabilities.",
    strategy: "Conducted brand audit and competitive analysis to inform a modern yet professional visual direction.",
    execution: "Designed new logo system, color palette, typography guidelines, and full brand collateral suite.",
    results: "Delivered a cohesive brand identity that strengthened market positioning and improved client perception.",
  },
  {
    image: portfolio3,
    title: "Social Media Engagement Campaign",
    category: "Social Media Campaigns",
    client: "Retail Brand",
    overview: "Multi-platform social media strategy and content creation for a growing retail brand.",
    challenge: "Low engagement rates and inconsistent brand presence across social media platforms.",
    strategy: "Developed platform-specific content strategies with consistent brand voice and visual identity.",
    execution: "Created campaign visuals, content templates, branded graphics, and a content calendar.",
    results: "Significantly improved engagement rates and follower growth across all platforms.",
  },
  {
    image: portfolio4,
    title: "Marketing Collateral Suite",
    category: "Marketing Collateral",
    client: "Healthcare Organization",
    overview: "Comprehensive marketing collateral development for a healthcare organization's outreach program.",
    challenge: "Needed professional materials that communicated complex services clearly to diverse audiences.",
    strategy: "Designed information architecture that simplified complex messaging into clear, accessible content.",
    execution: "Produced pitch decks, brochures, flyers, email templates, and digital marketing assets.",
    results: "Materials supported successful program launch with positive stakeholder feedback and improved communication clarity.",
  },
  {
    image: portfolio5,
    title: "Nonprofit Brand Strategy",
    category: "Marketing Strategy",
    client: "Nonprofit Organization",
    overview: "Marketing strategy and brand development for a nonprofit expanding its community outreach.",
    challenge: "Limited marketing budget with the need to reach broader audiences and increase donor engagement.",
    strategy: "Developed cost-effective marketing strategy leveraging digital channels and community partnerships.",
    execution: "Created brand guidelines, social media content, fundraising materials, and event collateral.",
    results: "Expanded community reach and improved donor engagement through strategic, consistent branding.",
  },
  {
    image: portfolio6,
    title: "Product Launch Visual Campaign",
    category: "Brand & Graphic Design",
    client: "Consumer Products Company",
    overview: "Visual campaign development for a new product line launch across digital and print channels.",
    challenge: "Create compelling visuals that differentiate the new product line in a competitive market.",
    strategy: "Developed visual storytelling approach that highlighted product benefits through clean, modern design.",
    execution: "Designed product packaging concepts, promotional materials, social media campaign assets, and digital ads.",
    results: "Launched with strong visual impact, contributing to positive initial sales performance and brand recognition.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-4xl">
              Portfolio — Melissa Dunn
            </h1>
            <p className="text-accent font-heading font-medium text-lg mt-2">
              Marketing Strategist | Graphic Designer | Social Media Specialist
            </p>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              This portfolio highlights a variety of creative marketing and design projects developed for businesses, entrepreneurs, and organizations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 px-6 bg-card border-b border-border sticky top-16 md:top-20 z-40 backdrop-blur-md">
        <div className="container-narrow flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setExpandedProject(null); }}
              className={`px-4 py-2 rounded-full text-sm font-heading font-medium whitespace-nowrap border transition-colors ${
                activeCategory === cat
                  ? "bg-secondary text-secondary-foreground border-secondary"
                  : "border-border text-muted-foreground hover:border-secondary hover:text-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-secondary text-xs font-heading font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-foreground mt-1 mb-1">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">Client: {project.client}</p>

                      <AnimatePresence>
                        {expandedProject === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-4 pt-4 border-t border-border">
                              <div>
                                <h4 className="font-heading font-semibold text-sm text-foreground">Project Overview</h4>
                                <p className="text-muted-foreground text-sm">{project.overview}</p>
                              </div>
                              <div>
                                <h4 className="font-heading font-semibold text-sm text-foreground">Challenge</h4>
                                <p className="text-muted-foreground text-sm">{project.challenge}</p>
                              </div>
                              <div>
                                <h4 className="font-heading font-semibold text-sm text-foreground">Strategy & Approach</h4>
                                <p className="text-muted-foreground text-sm">{project.strategy}</p>
                              </div>
                              <div>
                                <h4 className="font-heading font-semibold text-sm text-foreground">Design & Execution</h4>
                                <p className="text-muted-foreground text-sm">{project.execution}</p>
                              </div>
                              <div>
                                <h4 className="font-heading font-semibold text-sm text-foreground">Results / Outcome</h4>
                                <p className="text-muted-foreground text-sm">{project.results}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <span className="inline-flex items-center gap-1 text-secondary text-sm font-heading font-semibold mt-3 group-hover:gap-2 transition-all">
                        {expandedProject === i ? "Close" : "View Case Study"} <ArrowRight size={14} />
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

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
