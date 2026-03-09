import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioModal, { type PortfolioItemData } from "@/components/PortfolioModal";
import agencyBrandingMaterials from "@/assets/agency-branding-materials.jpg";
import agencyMacbookWork from "@/assets/agency-macbook-work.jpg";
import agencyPrintProduction from "@/assets/agency-print-production.jpg";
import agencyMarketingFlatlay from "@/assets/agency-marketing-flatlay.jpg";
import agencySocialBright from "@/assets/agency-social-bright.jpg";
import agencyDigitalBright from "@/assets/agency-digital-bright.jpg";
import agencyStrategyBright from "@/assets/agency-strategy-bright.jpg";
import agencyCreativeDirection from "@/assets/agency-creative-direction.jpg";
import agencyBrightWorkspace from "@/assets/agency-bright-workspace.jpg";
import portfolioHero from "@/assets/portfolio-hero.jpg";

const brandingItems: PortfolioItemData[] = [
  {
    image: agencyBrandingMaterials,
    title: "HB Healthcare Safety — Business Cards",
    type: "Print Design",
    description: "This business card project was completed for HB Healthcare Safety to establish a strong, professional brand identity in the healthcare safety sector. The business card design extends this visual identity, featuring clear typography and a layout that ensures essential contact information is both accessible and visually appealing. The cohesive branding elements were crafted to leave a memorable impression with clients and partners, supporting HB Healthcare Safety's reputation for excellence.",
    client: "HB Healthcare Safety SBC",
    role: "Print Designer, Desktop Publisher",
    tools: "Adobe Illustrator and Adobe InDesign were utilized for the business card layout, ensuring print-ready, high-quality designs that reflect the company's values and professionalism.",
    metrics: "(Pending) — Effectiveness will be measured by feedback from clients, increased brand recognition, and the successful distribution of business cards at industry events.",
  },
  {
    image: agencyMacbookWork,
    title: "Precision Auto — Invoice Design",
    type: "Brand Collateral",
    description: "A professional invoice design created for a car transmission repair shop, integrating their brand identity into everyday business documents. The design features clear sections for itemized services, payment terms, and company branding — transforming a functional document into a polished brand touchpoint.",
    client: "Precision Auto Transmission",
    role: "Graphic Designer, Production Designer",
    tools: "Adobe InDesign, Adobe Illustrator",
    metrics: "(Pending) — Measured by client satisfaction and improved brand consistency across all business documents.",
  },
  {
    image: agencyCreativeDirection,
    title: "Meadow & Bloom — Artisan Soap Brand",
    type: "Brand Identity",
    description: "A complete brand identity designed for a handmade artisan soap company, encompassing logo design, packaging concepts, and retail display materials. The design direction captures the natural, handcrafted essence of the brand with elegant typography and an earthy-yet-modern color palette suitable for boutique retail settings.",
    client: "Meadow & Bloom Soaps",
    role: "Brand Designer, Visual Identity",
    tools: "Adobe Illustrator, Adobe Photoshop",
    metrics: "(Pending) — Effectiveness measured through retail presence impact and customer brand recall.",
  },
  {
    image: agencyMarketingFlatlay,
    title: "Heritage Cast Iron — Logo Design",
    type: "Logo & Brand Identity",
    description: "A distinctive logo design created for a cast iron pan restoration company. The mark communicates craftsmanship, heritage, and quality through bold, timeless typography and custom iconography that reflects the art of restoration and the durability of cast iron cookware.",
    client: "Heritage Cast Iron Restoration",
    role: "Logo Designer, Brand Identity",
    tools: "Adobe Illustrator",
    metrics: "(Pending) — Brand recognition and customer trust metrics post-launch.",
  },
];

const productionItems: PortfolioItemData[] = [
  {
    image: agencyPrintProduction,
    title: "MedTech Solutions — Trade Show Case Study",
    type: "Case Study Print Design",
    description: "A premium printed case study designed for a healthcare technology company to use at industry trade shows. The piece features data visualizations, client testimonials, and clear narrative flow that communicates the company's impact and solutions effectively.",
    client: "MedTech Solutions",
    role: "Production Designer, Print Specialist",
    tools: "Adobe InDesign, Adobe Illustrator, Adobe Photoshop",
    metrics: "(Pending) — Trade show engagement and lead generation metrics.",
  },
  {
    image: agencyBrandingMaterials,
    title: "Atelier Pens — Luxury Boutique Booklet",
    type: "Booklet Design",
    description: "A high-end product booklet designed for a luxury pen boutique featuring pens retailing at $3,000+. The design emphasizes premium paper stock, elegant typography, and rich photography to match the caliber of the brand and its discerning clientele.",
    client: "Atelier Pens Boutique",
    role: "Production Designer, Layout Artist",
    tools: "Adobe InDesign, Adobe Photoshop",
    metrics: "(Pending) — Client feedback and in-store distribution effectiveness.",
  },
  {
    image: agencyCreativeDirection,
    title: "Takeout Restaurant — Menu Design",
    type: "Menu Design",
    description: "A vibrant, easy-to-read takeout menu designed to drive orders and highlight signature dishes. The layout balances appetizing food photography with clear pricing and organized categories for quick decision-making.",
    client: "Local Takeout Restaurant",
    role: "Graphic Designer, Production Designer",
    tools: "Adobe InDesign, Adobe Illustrator",
    metrics: "(Pending) — Customer ordering experience and sales impact.",
  },
  {
    image: agencyMarketingFlatlay,
    title: "Shower Enclosure — Technical Insert",
    type: "Technical Documentation",
    description: "A precise technical insert designed to accompany shower enclosure products, featuring installation diagrams, specifications, and safety information with clear visual hierarchy and professional formatting.",
    client: "Bath & Shower Manufacturer",
    role: "Production Designer, Technical Illustrator",
    tools: "Adobe InDesign, Adobe Illustrator",
    metrics: "(Pending) — Reduction in installation support calls.",
  },
  {
    image: agencyMacbookWork,
    title: "Luxe Hair Studio — Service Menu",
    type: "Print Menu Design",
    description: "An elegant service menu designed for a high-end hair salon, featuring organized service categories, pricing tiers, and brand-consistent design elements that clients can take home for reference.",
    client: "Luxe Hair Studio",
    role: "Graphic Designer",
    tools: "Adobe InDesign, Adobe Illustrator",
    metrics: "(Pending) — Client retention and upsell metrics.",
  },
  {
    image: agencyStrategyBright,
    title: "Attorney at Law — Promotional Postcard",
    type: "Direct Mail Design",
    description: "A professional promotional postcard designed for a law practice, balancing authority and approachability. Features compelling copy placement, clear call-to-action, and brand-aligned design suitable for direct mail campaigns.",
    client: "Law Office",
    role: "Graphic Designer, Print Specialist",
    tools: "Adobe InDesign, Adobe Illustrator",
    metrics: "(Pending) — Response rate and new client inquiries from mailer.",
  },
  {
    image: agencyBrightWorkspace,
    title: "Corporate Pitch Deck — Presentation Design",
    type: "Pitch Deck",
    description: "A polished, persuasive pitch deck designed for corporate presentations. Features data-driven slides, compelling narratives, custom infographics, and brand-consistent visual elements crafted to win business and impress stakeholders.",
    client: "Corporate Client",
    role: "Presentation Designer, Visual Strategist",
    tools: "Adobe InDesign, Microsoft PowerPoint, Adobe Illustrator",
    metrics: "(Pending) — Presentation success rate and client feedback.",
  },
];

const marketingItems: PortfolioItemData[] = [
  {
    image: agencySocialBright,
    title: "EV Charge Finder — Website Design",
    type: "Web Design",
    description: "A user-friendly website designed for a hybrid car charging station locator service. The site features an intuitive map interface, real-time charger availability, and a clean modern design optimized for both desktop and mobile users looking for the nearest charging station.",
    client: "EV Charge Finder",
    role: "Web Designer, UX Designer",
    tools: "Figma, Adobe Photoshop, HTML/CSS",
    metrics: "(Pending) — User engagement, session duration, and conversion metrics.",
  },
  {
    image: agencyDigitalBright,
    title: "Design Studio — Infographic",
    type: "Infographic Design",
    description: "A visually engaging infographic created for a design studio showcasing their creative process, services, and impact metrics. The piece uses custom illustrations, data visualizations, and brand colors to communicate complex information in a digestible format.",
    client: "Creative Design Studio",
    role: "Graphic Designer, Information Designer",
    tools: "Adobe Illustrator, Adobe Photoshop",
    metrics: "(Pending) — Social shares and content engagement metrics.",
  },
  {
    image: agencyBrightWorkspace,
    title: "YouTube Channel — Thumbnail Design",
    type: "YouTube Thumbnail",
    description: "Eye-catching YouTube thumbnail designs crafted to maximize click-through rates. Each thumbnail features bold typography, vibrant colors, and strategic composition to stand out in YouTube search results and suggested videos.",
    client: "Content Creator",
    role: "Digital Designer",
    tools: "Adobe Photoshop, Canva",
    metrics: "(Pending) — Click-through rate improvement and view count.",
  },
  {
    image: agencyCreativeDirection,
    title: "Instagram Feed & Carousel Design",
    type: "Social Media Design",
    description: "A cohesive Instagram feed design including single-image posts and multi-slide carousel content. Each piece maintains brand consistency while optimizing for engagement, featuring swipeable educational content and visually striking layouts.",
    client: "Brand Client",
    role: "Social Media Designer",
    tools: "Adobe Illustrator, Canva, Adobe Photoshop",
    metrics: "(Pending) — Engagement rate, saves, and shares.",
  },
  {
    image: agencyMarketingFlatlay,
    title: "Email Marketing Campaign — Blast Design",
    type: "Email Marketing",
    description: "A series of email marketing designs optimized for open rates and conversions. Features responsive layouts, compelling CTAs, brand-aligned visuals, and strategic content placement to drive recipient action.",
    client: "E-commerce Brand",
    role: "Email Designer, Digital Marketing",
    tools: "Figma, Mailchimp, Adobe Photoshop",
    metrics: "(Pending) — Open rate, click-through rate, and conversion data.",
  },
];

const writingItems: PortfolioItemData[] = [
  {
    image: agencySocialBright,
    title: "Social Media Content — Instagram & LinkedIn",
    type: "Social Media Copy",
    description: "Strategic social media copywriting across Instagram, LinkedIn, Facebook, TikTok, and Pinterest. Content includes caption writing, hashtag strategy, storytelling posts, and engagement-driven copy that builds community and drives action.",
    client: "Multiple Clients",
    role: "Content Writer, Social Media Strategist",
    tools: "Content planning tools, Social media platforms",
    metrics: "(Pending) — Engagement rates, follower growth, and reach.",
  },
  {
    image: agencyDigitalBright,
    title: "Email Marketing — Campaign Copy",
    type: "Email Copywriting",
    description: "Compelling email marketing copy including subject lines, body content, and CTAs designed to nurture leads and drive conversions. Each campaign features strategic sequencing and audience-targeted messaging.",
    client: "Various Clients",
    role: "Email Copywriter, Marketing Strategist",
    tools: "Mailchimp, email marketing platforms",
    metrics: "(Pending) — Open rates, click-through rates, and conversions.",
  },
  {
    image: agencyStrategyBright,
    title: "Blog Content — Thought Leadership",
    type: "Blog Writing",
    description: "SEO-optimized blog articles and thought leadership content covering marketing strategy, design trends, and business growth. Articles position clients as industry experts while driving organic traffic and engagement.",
    client: "Various Clients",
    role: "Content Writer, SEO Strategist",
    tools: "WordPress, Google Analytics, SEO tools",
    metrics: "(Pending) — Organic traffic, time on page, and search rankings.",
  },
  {
    image: agencyMarketingFlatlay,
    title: "Content Calendar & Marketing Plan",
    type: "Marketing Strategy",
    description: "Comprehensive content calendars and marketing plans that outline content themes, posting schedules, campaign timelines, and strategic goals. These documents serve as actionable roadmaps for consistent, results-driven marketing execution.",
    client: "Various Clients",
    role: "Marketing Strategist, Content Planner",
    tools: "Google Workspace, Notion, project management tools",
    metrics: "(Pending) — Content consistency, audience growth, and campaign ROI.",
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemData | null>(null);

  const renderGrid = (items: PortfolioItemData[]) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <AnimatedSection key={item.title + i} delay={i * 0.06}>
          <motion.div
            whileHover={{ y: -6 }}
            onClick={() => setSelectedItem(item)}
            className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <span className="text-secondary text-xs font-heading font-semibold uppercase tracking-wider">
                {item.type}
              </span>
              <h3 className="font-heading font-bold text-foreground mt-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{item.description}</p>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={portfolioHero} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-4xl">
              Portfolio
            </h1>
            <p className="text-accent font-heading font-medium text-lg mt-2">
              Melissa Dunn — Marketing Strategist | Graphic Designer | Social Media Specialist
            </p>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">
              Selected work across graphic design, production design, marketing materials, and content writing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Branding & Identity */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Category</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Branding & Identity</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Logos, brand identity systems, business cards, and brand guidelines.
            </p>
          </AnimatedSection>
          {renderGrid(brandingItems)}
        </div>
      </section>

      {/* Production Design */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Category</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Production Design</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Pitch decks, sell sheets, presentations, menus, technical documents, and marketing collateral.
            </p>
          </AnimatedSection>
          {renderGrid(productionItems)}
        </div>
      </section>

      {/* Marketing & Digital */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Category</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Marketing & Digital Content</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Websites, infographics, social media graphics, email marketing, and campaign assets.
            </p>
          </AnimatedSection>
          {renderGrid(marketingItems)}
        </div>
      </section>

      {/* Writing & Content Marketing */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Category</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Writing & Content Marketing</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Social media copy, email campaigns, blog content, content calendars, and marketing plans.
            </p>
          </AnimatedSection>
          {renderGrid(writingItems)}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={agencyBrightWorkspace} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-narrow text-center relative z-10">
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

      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      <Footer />
    </div>
  );
};

export default Portfolio;
