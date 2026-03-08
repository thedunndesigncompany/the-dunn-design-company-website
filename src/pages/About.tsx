import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import melissaDunn from "@/assets/melissa-dunn-cropped.jpg";
import agencyStrategyBright from "@/assets/agency-strategy-bright.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={agencyStrategyBright} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-narrow relative z-10">
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="sticky top-28">
                <div className="relative max-w-md mx-auto">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={melissaDunn}
                      alt="Melissa Dunn — Founder of The Dunn Company"
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent rounded-2xl -z-10" />
                </div>
                <p className="text-muted-foreground text-sm text-center mt-5 italic">Melissa Dunn — Founder</p>
                <blockquote className="mt-6 text-center px-4">
                  <p className="text-foreground/80 italic text-base leading-relaxed font-body">
                    "Design should feel intentional, balanced, and connected — much like the natural world around us."
                  </p>
                </blockquote>

                {/* Decorative elements */}
                <div className="mt-10 flex justify-center gap-6">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-3 h-3 rounded-full bg-accent/60"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="w-2 h-2 rounded-full bg-secondary/50 mt-1"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="w-3 h-3 rounded-full bg-accent/40"
                  />
                </div>

                <div className="mt-6 flex justify-center">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px w-32 bg-gradient-to-r from-transparent via-secondary/40 to-transparent"
                  />
                </div>

                <div className="mt-6 flex justify-center gap-4">
                  <motion.svg
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    width="24" height="24" viewBox="0 0 24 24" className="text-accent/30"
                  >
                    <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="currentColor" />
                  </motion.svg>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-5 rounded-full border-2 border-secondary/25"
                  />
                  <motion.svg
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    width="20" height="20" viewBox="0 0 24 24" className="text-accent/20"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
                  </motion.svg>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tight">
                  Meet <span className="text-accent">Melissa</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Melissa Dunn is a marketing and design professional with a rare combination of creative, technical, and production experience. She founded The Dunn Company to help brands grow through thoughtful marketing strategy, strong visual design, and clear communication.
                  </p>
                  <p>
                    Before building her own creative studio, Melissa spent years working across the full spectrum of the design and printing industry. Her background includes hands-on experience in graphic design, production design, prepress operations, and print production. She has managed prepress departments, prepared complex files for print, and operated commercial printing presses herself. This end-to-end knowledge gives her a deep understanding of how creative ideas move from concept to final production.
                  </p>
                  <p>
                    Today, Melissa brings that same production-level precision into her work with modern marketing and digital content. Through The Dunn Company and its creative studio division, <span className="text-secondary font-medium">The Dunn Design Company</span>, she helps businesses develop brand identities, marketing materials, presentations, and digital content that communicate clearly and perform effectively.
                  </p>
                  <p>
                    Melissa believes that the strongest marketers today are those who understand both creativity and strategy. As a lifelong learner, she continuously expands her knowledge in areas such as marketing strategy, technology, artificial intelligence, and digital systems so she can better serve modern businesses and evolving industries.
                  </p>
                  <p>
                    Based in Columbia, Maryland — conveniently located between Washington DC and Baltimore — Melissa works with clients both locally and remotely.
                  </p>
                  <p>
                    Outside of her professional work, Melissa values staying curious and connected to the world around her. She enjoys spending time outdoors and believes that nature often provides the best inspiration for thoughtful design. One of her long-time creative influences is architect Frank Lloyd Wright, whose philosophy of designing in harmony with the environment continues to inspire her approach to creativity, balance, and intentional design.
                  </p>
                  <p>
                    Melissa is also passionate about giving back to her community. She volunteers her time and creative skills when she can and believes strongly in using design to help organizations and causes that make a difference.
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
