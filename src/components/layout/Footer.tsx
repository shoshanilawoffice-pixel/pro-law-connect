import { Scale, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "אודות המשרד" },
    { href: "#practice-areas", label: "תחומי התמחות" },
    { href: "#team", label: "צוות עורכי הדין" },
    { href: "#faq", label: "שאלות נפוצות" },
    { href: "#contact", label: "צור קשר" },
  ];

  const practiceAreas = [
    "דיני משפחה וגירושין",
    "ליטיגציה מסחרית",
    "נדל״ן ומקרקעין",
    "דיני עבודה",
    "דיני חברות",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Scale className="w-6 h-6 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">כהן ושות׳</span>
                <span className="text-gold/70 text-sm">עורכי דין</span>
              </div>
            </Link>
            <p className="text-cream/70 leading-relaxed mb-6">
              משרד עורכי דין מוביל עם מעל 25 שנות ניסיון בייצוג לקוחות פרטיים ועסקיים. מחויבות למצוינות וליושרה מקצועית.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">ניווט מהיר</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">תחומי התמחות</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <span className="text-cream/70">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">צור קשר</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                <span className="text-cream/70">
                  רחוב רוטשילד 45, קומה 12<br />
                  תל אביב-יפו
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+972-3-1234567" className="text-cream/70 hover:text-gold transition-colors">
                  03-123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@cohen-law.co.il" className="text-cream/70 hover:text-gold transition-colors">
                  info@cohen-law.co.il
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
            <p>© {currentYear} כהן ושות׳ עורכי דין. כל הזכויות שמורות.</p>
            <div className="flex items-center gap-6">
              <button className="hover:text-gold transition-colors">מדיניות פרטיות</button>
              <button className="hover:text-gold transition-colors">תנאי שימוש</button>
              <button className="hover:text-gold transition-colors">נגישות</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
