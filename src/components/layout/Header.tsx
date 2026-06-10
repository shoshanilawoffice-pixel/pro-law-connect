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
    <header className="fixed top-0 right-0 left-0 z-50 bg-primary/95 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20" dir="rtl">
          {/* Desktop Navigation — LEFT side */}
          <nav className="hidden lg:flex items-center gap-1 order-2">
            <button
              onClick={() => goToHashSection("hero")}
              className="px-3 py-2 text-cream/85 hover:text-accent font-medium transition-colors rounded-md hover:bg-white/5"
            >
              ראשי
            </button>
            <button
              onClick={() => goToHashSection("about")}
              className="px-3 py-2 text-cream/85 hover:text-accent font-medium transition-colors rounded-md hover:bg-white/5"
            >
              אודות
            </button>

            <div
              className="relative"
              onMouseEnter={() => setIsAreasOpen(true)}
              onMouseLeave={() => setIsAreasOpen(false)}
            >
              <button
                onClick={() => goToHashSection("practice-areas")}
                className="px-3 py-2 text-cream/85 hover:text-accent font-medium transition-colors rounded-md hover:bg-white/5 inline-flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={isAreasOpen}
              >
                תחומי התמחות
                <ChevronDown className="w-4 h-4" />
              </button>
              {isAreasOpen && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-primary border border-accent/20 rounded-lg shadow-elegant overflow-hidden animate-fade-in">
                    <button
                      onClick={() => {
                        goToHashSection("practice-areas");
                        setIsAreasOpen(false);
                      }}
                      className="w-full text-right px-4 py-3 text-accent hover:bg-white/5 font-semibold border-b border-accent/10 text-sm"
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
                          className="flex items-center gap-3 px-4 py-3 text-cream/85 hover:text-accent hover:bg-white/5 transition-colors text-sm"
                        >
                          <Icon className="w-4 h-4 text-accent shrink-0" />
                          <span>{area.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => goToHashSection("team")}
              className="px-3 py-2 text-cream/85 hover:text-accent font-medium transition-colors rounded-md hover:bg-white/5"
            >
              הצוות
            </button>
            <button
              onClick={() => goToHashSection("faq")}
              className="px-3 py-2 text-cream/85 hover:text-accent font-medium transition-colors rounded-md hover:bg-white/5"
            >
              שאלות נפוצות
            </button>
            <Link
              to="/association"
              className="px-3 py-2 text-cream/85 hover:text-accent font-medium transition-colors rounded-md hover:bg-white/5"
            >
              עמותה
            </Link>
            <button
              onClick={() => goToHashSection("contact")}
              className="px-3 py-2 text-cream/85 hover:text-accent font-medium transition-colors rounded-md hover:bg-white/5"
            >
              צור קשר
            </button>

            <div className="flex items-center gap-3 pr-4 mr-2 border-r border-accent/20">
              <a href="tel:+972-50-6421322" className="flex items-center gap-2 text-accent hover:text-gold-light transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">050-6421322</span>
              </a>
              <Button variant="gold" onClick={() => goToHashSection("contact")}>
                ייעוץ ראשוני
              </Button>
            </div>
          </nav>

          {/* Logo — RIGHT side */}
          <Link to="/" className="flex items-center gap-3 group order-1">
            <div className="w-10 h-10 rounded-lg bg-accent/15 border border-accent/40 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
              <Scale className="w-5 h-5 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-cream font-bold text-lg leading-tight">
                שירן שושני
              </span>
              <span className="text-cream/60 text-xs">עורכי דין, נוטריון וגישור</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden order-2 p-2 text-cream hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-accent/20 animate-fade-in" dir="rtl">
            <div className="flex flex-col gap-1">
              <button onClick={() => goToHashSection("hero")} className="px-4 py-3 text-cream/85 hover:text-accent hover:bg-white/5 font-medium transition-colors rounded-md text-right">ראשי</button>
              <button onClick={() => goToHashSection("about")} className="px-4 py-3 text-cream/85 hover:text-accent hover:bg-white/5 font-medium transition-colors rounded-md text-right">אודות</button>

              <button
                onClick={() => setIsMobileAreasOpen(!isMobileAreasOpen)}
                className="px-4 py-3 text-cream/85 hover:text-accent hover:bg-white/5 font-medium transition-colors rounded-md text-right flex items-center justify-between"
                aria-expanded={isMobileAreasOpen}
              >
                <span>תחומי התמחות</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileAreasOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileAreasOpen && (
                <div className="mr-4 border-r border-accent/20 pr-4 flex flex-col gap-1">
                  <button onClick={() => goToHashSection("practice-areas")} className="px-3 py-2 text-accent hover:bg-white/5 font-medium transition-colors rounded-md text-right text-sm">כל תחומי ההתמחות</button>
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/practice-areas/${area.slug}`}
                      onClick={() => { setIsMenuOpen(false); setIsMobileAreasOpen(false); }}
                      className="px-3 py-2 text-cream/70 hover:text-accent hover:bg-white/5 transition-colors rounded-md text-right text-sm"
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              )}

              <button onClick={() => goToHashSection("team")} className="px-4 py-3 text-cream/85 hover:text-accent hover:bg-white/5 font-medium transition-colors rounded-md text-right">הצוות</button>
              <button onClick={() => goToHashSection("faq")} className="px-4 py-3 text-cream/85 hover:text-accent hover:bg-white/5 font-medium transition-colors rounded-md text-right">שאלות נפוצות</button>
              <Link to="/association" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-cream/85 hover:text-accent hover:bg-white/5 font-medium transition-colors rounded-md text-right">עמותה</Link>
              <button onClick={() => goToHashSection("contact")} className="px-4 py-3 text-cream/85 hover:text-accent hover:bg-white/5 font-medium transition-colors rounded-md text-right">צור קשר</button>

              <div className="pt-4 mt-2 border-t border-accent/20 flex flex-col gap-3">
                <a href="tel:+972-50-6421322" className="flex items-center gap-2 text-accent px-4 py-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">050-6421322</span>
                </a>
                <Button variant="gold" className="mx-4" onClick={() => goToHashSection("contact")}>ייעוץ ראשוני</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
