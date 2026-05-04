import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Scale, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/data/practiceAreas";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [isMobileAreasOpen, setIsMobileAreasOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { hash: "hero", label: "ראשי" },
    { hash: "about", label: "אודות" },
    { hash: "team", label: "הצוות" },
    { hash: "faq", label: "שאלות נפוצות" },
    { hash: "contact", label: "צור קשר" },
  ];

  const goToHashSection = (hash: string) => {
    setIsMenuOpen(false);
    setIsMobileAreasOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${hash}`);
      return;
    }
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
                שירן שושני
              </span>
              <span className="text-gold/70 text-xs">עורכי דין, נוטריון וגישור</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => goToHashSection("hero")}
              className="px-4 py-2 text-cream/80 hover:text-gold font-medium transition-colors rounded-md hover:bg-cream/5"
            >
              ראשי
            </button>
            <button
              onClick={() => goToHashSection("about")}
              className="px-4 py-2 text-cream/80 hover:text-gold font-medium transition-colors rounded-md hover:bg-cream/5"
            >
              אודות
            </button>

            {/* Practice Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAreasOpen(true)}
              onMouseLeave={() => setIsAreasOpen(false)}
            >
              <button
                onClick={() => goToHashSection("practice-areas")}
                className="px-4 py-2 text-cream/80 hover:text-gold font-medium transition-colors rounded-md hover:bg-cream/5 inline-flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={isAreasOpen}
              >
                תחומי התמחות
                <ChevronDown className="w-4 h-4" />
              </button>
              {isAreasOpen && (
                <div className="absolute top-full right-0 pt-2 w-72">
                  <div className="bg-primary border border-gold/20 rounded-lg shadow-elegant overflow-hidden animate-fade-in">
                    <button
                      onClick={() => {
                        goToHashSection("practice-areas");
                        setIsAreasOpen(false);
                      }}
                      className="w-full text-right px-4 py-3 text-gold hover:bg-cream/5 font-semibold border-b border-gold/10 text-sm"
                    >
                      כל תחומי ההתמחות
                    </button>
                    {practiceAreas.map((area) => {
                      const Icon = area.icon;
                      return (
                        <Link
                          key={area.slug}
                          to={`/practice-areas/${area.slug}`}
                          onClick={() => setIsAreasOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-cream/80 hover:text-gold hover:bg-cream/5 transition-colors text-sm"
                        >
                          <Icon className="w-4 h-4 text-gold shrink-0" />
                          <span>{area.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <button
                key={link.hash}
                onClick={() => goToHashSection(link.hash)}
                className="px-4 py-2 text-cream/80 hover:text-gold font-medium transition-colors rounded-md hover:bg-cream/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+972-8-8695008" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">08-8695008</span>
            </a>
            <Button variant="gold" onClick={() => goToHashSection("contact")}>
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
            <div className="flex flex-col gap-1">
              <button
                onClick={() => goToHashSection("hero")}
                className="px-4 py-3 text-cream/80 hover:text-gold hover:bg-cream/5 font-medium transition-colors rounded-md text-right"
              >
                ראשי
              </button>
              <button
                onClick={() => goToHashSection("about")}
                className="px-4 py-3 text-cream/80 hover:text-gold hover:bg-cream/5 font-medium transition-colors rounded-md text-right"
              >
                אודות
              </button>

              {/* Mobile Practice Areas Collapsible */}
              <button
                onClick={() => setIsMobileAreasOpen(!isMobileAreasOpen)}
                className="px-4 py-3 text-cream/80 hover:text-gold hover:bg-cream/5 font-medium transition-colors rounded-md text-right flex items-center justify-between"
                aria-expanded={isMobileAreasOpen}
              >
                <span>תחומי התמחות</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isMobileAreasOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileAreasOpen && (
                <div className="mr-4 border-r border-gold/10 pr-4 flex flex-col gap-1">
                  <button
                    onClick={() => goToHashSection("practice-areas")}
                    className="px-3 py-2 text-gold hover:bg-cream/5 font-medium transition-colors rounded-md text-right text-sm"
                  >
                    כל תחומי ההתמחות
                  </button>
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/practice-areas/${area.slug}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileAreasOpen(false);
                      }}
                      className="px-3 py-2 text-cream/70 hover:text-gold hover:bg-cream/5 transition-colors rounded-md text-right text-sm"
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.slice(2).map((link) => (
                <button
                  key={link.hash}
                  onClick={() => goToHashSection(link.hash)}
                  className="px-4 py-3 text-cream/80 hover:text-gold hover:bg-cream/5 font-medium transition-colors rounded-md text-right"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-gold/10 flex flex-col gap-3">
                <a
                  href="tel:+972-8-8695008"
                  className="flex items-center gap-2 text-gold px-4 py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">08-8695008</span>
                </a>
                <Button
                  variant="gold"
                  className="mx-4"
                  onClick={() => goToHashSection("contact")}
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
