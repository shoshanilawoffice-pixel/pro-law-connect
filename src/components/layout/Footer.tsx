import { Phone, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo.jpeg.asset.json";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-black border-2 border-accent flex items-center justify-center shrink-0">
                <img src={logoAsset.url} alt="שירן שושני - לוגו" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">שירן שושני</span>
                <span className="text-primary-foreground/60 text-xs tracking-wider">משרד עורכי דין</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              ייצוג, נוטריון וגישור. ליווי אישי, מקצועי וצמוד, מתחילת ההליך ועד סופו.
            </p>
          </div>

          <div>
            <h4 className="text-accent font-bold mb-5">ניווט</h4>
            <ul className="space-y-2 text-primary-foreground/75 text-sm">
              <li><a href="#about" className="hover:text-accent transition-colors">אודות</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">שירותי המשרד</a></li>
              <li><a href="#practice" className="hover:text-accent transition-colors">תחומי עיסוק</a></li>
              <li><a href="#articles" className="hover:text-accent transition-colors">מאמרים</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">יצירת קשר</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-bold mb-5">צור קשר</h4>
            <ul className="space-y-3 text-primary-foreground/75 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>שדרות התמרים 4, אילת</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+972506421322" className="hover:text-accent transition-colors">050-6421322</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@shiran-shoshani-law.co.il" className="hover:text-accent transition-colors">
                  info@shiran-shoshani-law.co.il
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/55 text-xs">
          © {year} שירן שושני · משרד עורכי דין. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
