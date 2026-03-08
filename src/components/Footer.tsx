import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-heading font-bold mb-1">The Dunn Company</h3>
            <p className="text-primary-foreground/50 text-xs font-heading mb-3">
              Creative Studio: The Dunn Design Company
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Design That Connects. Marketing That Converts.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Pages</h4>
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
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-2">
              <a href="mailto:melissa@dunndesignz.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail size={14} /> melissa@dunndesignz.com
              </a>
              <a href="tel:410-440-7479" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone size={14} /> 410-440-7479
              </a>
              <a href="https://www.linkedin.com/in/melissaldunn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <p className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin size={14} /> Columbia, Maryland
              </p>
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
