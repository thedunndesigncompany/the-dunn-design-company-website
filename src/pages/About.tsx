import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutPortrait from "@/assets/about-portrait.jpg";

const skills = [
  "Graphic Design",
  "Production Design / Prepress",
  "Social Media Marketing",
  "Marketing Strategy",
  "UX/UI Design",
  "AI Implementation",
  "Technical Support",
];

const certifications = [
  "Google UX Design",
  "Google IT Support",
  "Google Project Management",
  "CompTIA A+",
  "Cisco Jr Cybersecurity",
  "Technical Writing Certifications",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">About</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-3xl">
              Melissa Dunn
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              Creative marketing professional with 20+ years of experience in design, strategy, and digital innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src={aboutPortrait}
                alt="Melissa Dunn"
                className="rounded-xl w-full aspect-[4/5] object-cover shadow-lg"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Professional Background</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Melissa Dunn is a creative marketing professional with more than two decades of experience spanning graphic design, production design, marketing strategy, and digital content creation.
                  </p>
                  <p>
                    She has worked with businesses of all sizes — from startups to established brands — helping them turn ideas into impactful visuals and strategic marketing solutions that drive real results.
                  </p>
                  <p>
                    Through The Dunn Design Company and The Dunn Company, Melissa brings a unique combination of creative expertise and forward-thinking digital strategy to every project.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity mt-8"
                >
                  Get in Touch <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Core Skills</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill} delay={i * 0.05}>
                <span className="px-6 py-3 bg-card rounded-full border border-border text-foreground font-heading font-medium text-sm">
                  {skill}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Certifications</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert} delay={i * 0.06}>
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
                  <Award className="text-accent flex-shrink-0" size={20} />
                  <span className="font-heading font-medium text-sm text-foreground">{cert}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
