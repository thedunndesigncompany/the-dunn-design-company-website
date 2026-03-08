import { MessageSquare, Mail, FileText, PenTool, Code } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const writingSamples = [
  {
    icon: MessageSquare,
    category: "Social Media Writing",
    title: "Why Great Design Still Matters in the AI Era",
    content: `Design trends change and new tools like AI continue to evolve, but great design still comes down to connection. Strong visuals help your audience understand who you are, what you offer, and why it matters.\n\nIf your brand visuals feel outdated or inconsistent, it may be time for a refresh.`,
    cta: "Ready to elevate your brand? Let's connect.",
  },
  {
    icon: Mail,
    category: "Email Marketing",
    title: "3 Ways Better Design Improves Marketing Results",
    content: `Strong design does more than make your brand look good. It improves communication and builds trust with your audience.\n\nThree ways design improves marketing:\n\n• Consistent branding builds credibility\n• Clear visual hierarchy improves readability\n• Strong calls-to-action increase conversions\n\nThe Dunn Design Company helps businesses turn ideas into marketing materials that are both visually appealing and strategically effective.`,
    cta: "Schedule a consultation.",
  },
  {
    icon: FileText,
    category: "Blog Writing",
    title: "How AI Is Changing Marketing — And Why Creativity Still Matters",
    content: `Artificial intelligence is transforming how businesses create content, analyze data, and reach customers. While AI tools can improve efficiency and generate ideas, successful marketing still depends on human creativity, strategy, and storytelling.\n\nBusinesses that combine creative thinking with modern tools will gain a strong competitive advantage.`,
    cta: null,
  },
  {
    icon: PenTool,
    category: "Marketing Copy",
    title: "Brand Launch Announcement",
    content: `Introducing a brand built for the modern market. We crafted every element — from messaging to visuals — to position this company as a leader in their space. Clean design, compelling copy, and a strategic rollout plan made this launch a success.`,
    cta: "See the full case study.",
  },
  {
    icon: Code,
    category: "Technical Writing",
    title: "Getting Started with AI Marketing Tools",
    content: `This step-by-step guide walks marketing teams through selecting, implementing, and measuring AI tools for content creation and campaign management. Written for non-technical audiences with clear instructions and practical examples.`,
    cta: null,
  },
];

const Writing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">Writing Samples</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-3xl">
              Words That Work
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              From social media to technical documentation — writing that communicates clearly and connects with audiences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-8">
          {writingSamples.map((sample, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-card rounded-xl border border-border p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <sample.icon className="text-accent" size={20} />
                  <span className="text-accent font-heading font-semibold text-xs uppercase tracking-widest">
                    {sample.category}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">{sample.title}</h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{sample.content}</div>
                {sample.cta && (
                  <p className="mt-6 text-accent font-heading font-semibold text-sm">{sample.cta}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Writing;
