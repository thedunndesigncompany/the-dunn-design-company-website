import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for your message! I'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-3xl">
              Contact
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              Ready to start a project or just want to say hello? I'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Project Type</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                    >
                      <option value="">Select a project type</option>
                      <option value="design">Graphic Design & Branding</option>
                      <option value="marketing">Marketing & Social Media</option>
                      <option value="web">Web Design & UX/UI</option>
                      <option value="production">Production Design</option>
                      <option value="ai">AI Implementation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Message</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center gap-2 bg-coral text-coral-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <Send size={16} /> Send Message
                  </motion.button>
                </form>
              </AnimatedSection>
            </div>
            <div className="md:col-span-2">
              <AnimatedSection delay={0.15}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Direct Contact</h3>
                    <div className="space-y-3">
                      <a href="mailto:hello@dunndesignco.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm">
                        <Mail size={18} /> hello@dunndesignco.com
                      </a>
                      <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm">
                        <Linkedin size={18} /> LinkedIn Profile
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Schedule a Consultation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Want to discuss your project in more detail? Book a free consultation to explore how we can work together.
                    </p>
                    <button className="mt-4 inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                      Book a Call
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
