import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">The Dunn Design Company</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Design That Connects. Marketing That Converts.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Pages</h4>
            <nav className="flex flex-col gap-2">
              {["Services", "Portfolio", "Writing", "About", "Contact"].map((page) => (
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
            <p className="text-sm text-primary-foreground/60">hello@dunndesignco.com</p>
            <p className="text-sm text-primary-foreground/60 mt-1">LinkedIn</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} The Dunn Design Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
