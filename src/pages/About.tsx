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
              About The Dunn Design Company
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-xl overflow-hidden bg-muted aspect-[4/5]">
                <img
                  src={aboutPortrait}
                  alt="Melissa Dunn — Founder of The Dunn Design Company"
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
                    The Dunn Design Company was founded by Melissa Dunn, a creative marketing professional with a multidisciplinary background in marketing, graphic design, social media strategy, and digital content development.
                  </p>
                  <p>
                    Melissa combines creative thinking with strategic marketing insight to help businesses develop stronger brands, communicate their message clearly, and connect with their audiences in meaningful ways.
                  </p>
                  <p>
                    Through The Dunn Design Company, Melissa partners with businesses, entrepreneurs, and organizations to create marketing and design solutions that support long-term growth and stronger brand engagement.
                  </p>
                  <p>
                    Based in Columbia, Maryland — conveniently located between Washington DC and Baltimore — The Dunn Design Company works with clients locally and remotely worldwide.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity mt-8"
                >
                  Work With Me <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
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

export default About;
