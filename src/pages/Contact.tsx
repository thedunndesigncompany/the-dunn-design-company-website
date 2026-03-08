import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contactHero from "@/assets/contact-hero.jpg";

const projectTypes = [
  "Brand Identity / Logo Design",
  "Business Card / Stationery Design",
  "Marketing Collateral (Brochures, Flyers, Sell Sheets)",
  "Pitch Deck / Presentation Design",
  "Social Media Content & Graphics",
  "Email Marketing Design",
  "Website Design",
  "Content Writing / Copywriting",
  "Marketing Strategy & Consultation",
  "Print Production / Prepress",
  "Other",
];

const budgetRanges = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
  "N/A",
];

const turnaroundOptions = [
  "Rush (1–3 business days)",
  "Standard (1–2 weeks)",
  "Flexible (2–4 weeks)",
  "No rush — quality first",
  "N/A",
];

const supplyOptions = [
  "Yes — I have logos, images, copy, etc.",
  "Some elements — I'll need help with the rest",
  "No — I need everything created from scratch",
  "N/A",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    turnaround: "",
    suppliedElements: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll be in touch soon.");
  };

  const selectClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow appearance-none";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={agencyBrightWorkspace} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-primary/75" />
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-heading font-medium text-foreground mb-2">Name *</label>
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
                      <label className="block text-sm font-heading font-medium text-foreground mb-2">Email *</label>
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
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Type of Project *</label>
                    <select
                      required
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className={selectClass}
                    >
                      <option value="">Select project type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-heading font-medium text-foreground mb-2">Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className={selectClass}
                      >
                        <option value="">Select budget range...</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-foreground mb-2">Turnaround Time</label>
                      <select
                        value={form.turnaround}
                        onChange={(e) => setForm({ ...form, turnaround: e.target.value })}
                        className={selectClass}
                      >
                        <option value="">Select turnaround...</option>
                        {turnaroundOptions.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Will any design elements be supplied?</label>
                    <select
                      value={form.suppliedElements}
                      onChange={(e) => setForm({ ...form, suppliedElements: e.target.value })}
                      className={selectClass}
                    >
                      <option value="">Select an option...</option>
                      {supplyOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow resize-none"
                      placeholder="Tell me about your project... (ex: budget, preferred color scheme, type of project, brand guidelines, deadline, target audience, etc.)"
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
                      <a href="mailto:thedunndesigncompany@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors text-sm">
                        <Mail size={18} /> thedunndesigncompany@gmail.com
                      </a>
                      <a href="tel:410-440-7479" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors text-sm">
                        <Phone size={18} /> 410-440-7479
                      </a>
                      <p className="flex items-center gap-3 text-muted-foreground text-sm pl-0">
                        <MessageCircle size={18} className="flex-shrink-0" /> <span>Text messages welcome</span>
                      </p>
                      <a href="https://www.linkedin.com/in/melissaldunn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors text-sm">
                        <Linkedin size={18} /> LinkedIn
                      </a>
                      <p className="flex items-center gap-3 text-muted-foreground text-sm">
                        <MapPin size={18} /> Columbia, Maryland
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Follow Along</h3>
                    <div className="flex items-center gap-3">
                      <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors">
                        <Instagram size={18} />
                      </a>
                      <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors">
                        <Facebook size={18} />
                      </a>
                      <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors">
                        <Youtube size={18} />
                      </a>
                      <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                      </a>
                      <a href="#" aria-label="Pinterest" className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 1 8 0c0 3-2 5-4 7" /><line x1="12" y1="12" x2="10" y2="20" /></svg>
                      </a>
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
                    <h3 className="font-heading font-bold text-foreground mb-3">Schedule a Meeting</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Want to discuss your project in more detail? Book a free meeting to explore how we can work together.
                    </p>
                    <a
                      href="https://calendly.com/thedunndesigncompany"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-secondary text-secondary px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      Book a Meeting
                    </a>
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
