import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">About</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-3xl">
              About The Dunn Company
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden bg-muted aspect-[4/5]">
                <img
                  src={aboutPortrait}
                  alt="Melissa Dunn — Founder of The Dunn Company"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground text-sm text-center mt-3 italic">Melissa Dunn — Founder</p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Meet Melissa</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Dunn Company is a modern marketing and creative firm focused on helping businesses grow through strategic marketing, creative design, and digital communication.
                  </p>
                  <p>
                    Its creative studio division, <span className="text-secondary font-medium">The Dunn Design Company</span>, specializes in brand design, marketing visuals, and digital content creation.
                  </p>
                  <p>
                    The company was founded by Melissa Dunn, a marketing professional with experience in marketing strategy, graphic design, social media management, and digital content development.
                  </p>
                  <p>
                    Melissa combines creative thinking with strategic marketing insight to build brands that communicate clearly and connect with audiences.
                  </p>
                  <p>
                    Based in Columbia, Maryland — conveniently located between Washington DC and Baltimore — The Dunn Company works with clients locally and remotely worldwide.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:brightness-110 transition-all mt-8"
                >
                  Work With Me <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

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
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:brightness-110 transition-all"
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

export default About;
