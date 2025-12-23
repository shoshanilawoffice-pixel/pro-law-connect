import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "ראשי" },
    { href: "#about", label: "אודות" },
    { href: "#practice-areas", label: "תחומי התמחות" },
    { href: "#team", label: "הצוות" },
    { href: "#faq", label: "שאלות נפוצות" },
    { href: "#contact", label: "צור קשר" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Scale className="w-5 h-5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-cream font-bold text-lg leading-tight">
                כהן ושות׳
              </span>
              <span className="text-gold/70 text-xs">עורכי דין</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-cream/80 hover:text-gold font-medium transition-colors rounded-md hover:bg-cream/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+972-3-1234567" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">03-123-4567</span>
            </a>
            <Button
              variant="gold"
              onClick={() => scrollToSection("#contact")}
            >
              ייעוץ ראשוני
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-cream hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gold/10 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-cream/80 hover:text-gold hover:bg-cream/5 font-medium transition-colors rounded-md text-right"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-gold/10 flex flex-col gap-3">
                <a
                  href="tel:+972-3-1234567"
                  className="flex items-center gap-2 text-gold px-4 py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">03-123-4567</span>
                </a>
                <Button
                  variant="gold"
                  className="mx-4"
                  onClick={() => scrollToSection("#contact")}
                >
                  ייעוץ ראשוני
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
