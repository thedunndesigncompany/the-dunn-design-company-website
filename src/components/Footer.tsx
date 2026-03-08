import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-accent-foreground text-lg">DC</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold">The Dunn Company</h3>
                <p className="text-primary-foreground/50 text-xs font-heading">
                  Strategic Marketing & Brand Growth
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/50 text-xs font-heading mb-3">
              Creative Studio: The Dunn Design Company
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Design That Connects. Marketing That Converts.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Pages</h4>
            <nav className="flex flex-col gap-2">
              {["Services", "Portfolio", "About", "Contact"].map((page) => (
                <Link
                  key={page}
                  to={`/${page.toLowerCase()}`}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {page}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Connect</h4>
            <div className="space-y-2">
              <a href="mailto:melissa@dunndesignz.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail size={14} /> melissa@dunndesignz.com
              </a>
              <a href="mailto:thedunndesigncompany@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail size={14} /> thedunndesigncompany@gmail.com
              </a>
              <a href="tel:410-440-7479" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone size={14} /> 410-440-7479
              </a>
              <p className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MessageCircle size={14} /> Text messages welcome
              </p>
              <a href="https://www.linkedin.com/in/melissaldunn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <p className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin size={14} /> Columbia, Maryland
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Follow</h4>
            <div className="flex flex-wrap gap-2">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              <a href="#" aria-label="Pinterest" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 1 8 0c0 3-2 5-4 7" /><line x1="12" y1="12" x2="10" y2="20" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/melissaldunn/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://calendly.com/thedunndesigncompany"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-heading font-semibold text-xs hover:brightness-110 transition-all"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} The Dunn Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
