import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import agencyCampaignPlanning from "@/assets/agency-campaign-planning.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={agencyCampaignPlanning} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-3xl">
              Let's Work Together
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              Interested in working together or learning more about services offered by The Dunn Design Company? Reach out to start the conversation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-card">
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
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
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
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Company</label>
                    <input
                      type="text"
                      maxLength={100}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Message</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm hover:brightness-110 transition-all"
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
                    <h3 className="font-heading font-bold text-foreground mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <a href="mailto:melissa@dunndesignz.com" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors text-sm">
                        <Mail size={18} /> melissa@dunndesignz.com
                      </a>
                      <a href="tel:410-440-7479" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors text-sm">
                        <Phone size={18} /> 410-440-7479
                      </a>
                      <a href="https://www.linkedin.com/in/melissaldunn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors text-sm">
                        <Linkedin size={18} /> LinkedIn Profile
                      </a>
                      <p className="flex items-center gap-3 text-muted-foreground text-sm">
                        <MapPin size={18} /> Columbia, Maryland
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Business Hours</h3>
                    <div className="space-y-1 text-muted-foreground text-sm">
                      <p className="flex items-center gap-2"><Clock size={14} /> Mon – Fri: 9:00 AM – 6:00 PM</p>
                      <p className="ml-6">Sat: 9:00 AM – 1:00 PM</p>
                      <p className="ml-6">Sun: By appointment</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Schedule a Consultation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Want to discuss your project in more detail? Book a free consultation to explore how we can work together.
                    </p>
                    <button className="inline-flex items-center gap-2 border border-secondary text-secondary px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:bg-secondary hover:text-secondary-foreground transition-colors">
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
