import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const categories = ["All", "Graphic Design", "Marketing", "Branding", "Web Design", "Production Design"];

const projects = [
  {
    image: portfolio1,
    title: "Brand Identity System",
    category: "Graphic Design",
    desc: "Complete visual identity development including logo, color system, and brand guidelines for a tech startup.",
  },
  {
    image: portfolio3,
    title: "Social Media Campaign",
    category: "Marketing",
    desc: "Multi-platform social media strategy and content creation driving 340% engagement increase.",
  },
  {
    image: portfolio4,
    title: "Corporate Website Redesign",
    category: "Web Design",
    desc: "Full UX/UI redesign improving user flow, accessibility, and conversion rates by 28%.",
  },
  {
    image: portfolio5,
    title: "Magazine Production",
    category: "Production Design",
    desc: "End-to-end production design for a quarterly publication, from layout to press-ready files.",
  },
  {
    image: portfolio6,
    title: "AI Marketing Integration",
    category: "Marketing",
    desc: "Implementation of AI-powered content workflows reducing production time by 60%.",
  },
  {
    image: portfolio1,
    title: "Visual Identity Refresh",
    category: "Branding",
    desc: "Modernized brand identity while preserving brand equity for an established retail chain.",
  },
  {
    image: portfolio4,
    title: "E-Commerce UX Design",
    category: "Web Design",
    desc: "User experience optimization for an online retailer resulting in 45% higher conversion.",
  },
  {
    image: portfolio5,
    title: "Annual Report Design",
    category: "Production Design",
    desc: "Comprehensive annual report design with data visualization and print production management.",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-4xl">
              Portfolio – Creative Work & Marketing Projects
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              A curated selection of graphic design, marketing, and digital projects showcasing creativity, strategy, and real-world problem solving.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Resume section */}
      <section className="py-12 px-6 bg-secondary/50">
        <div className="container-narrow flex flex-wrap gap-4 items-center justify-center">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity">
            <Download size={16} /> Download Resume
          </button>
          <button className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
            <Award size={16} /> View Certifications
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6 bg-background border-b border-border sticky top-16 md:top-20 z-40 backdrop-blur-md bg-background/90">
        <div className="container-narrow flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-heading font-medium whitespace-nowrap border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors first:bg-accent first:text-accent-foreground first:border-accent"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
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
                    <h3 className="font-heading font-bold text-lg text-foreground mt-1 mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-heading font-semibold mt-4 group-hover:gap-2 transition-all">
                      View Case Study <ArrowRight size={14} />
                    </span>
                  </div>
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

export default Portfolio;
