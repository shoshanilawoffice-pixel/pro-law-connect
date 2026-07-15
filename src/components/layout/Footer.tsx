import { Phone, Mail, MapPin, Printer, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/config/site";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/* אייקון טיקטוק (לא קיים ב-lucide) */
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socials = [
  { label: "פייסבוק", href: site.social.facebook, Icon: Facebook },
  { label: "אינסטגרם", href: site.social.instagram, Icon: Instagram },
  { label: "טיקטוק", href: site.social.tiktok, Icon: TikTokIcon },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-black border-2 border-accent flex items-center justify-center shrink-0">
                <img src={site.logo} alt="שירן שושני - לוגו" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">{site.name}</span>
                <span className="text-primary-foreground/60 text-xs tracking-wider">{site.tagline}</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed text-sm mb-5">
              ייצוג, נוטריון וגישור. ליווי אישי, מקצועי וצמוד, מתחילת ההליך ועד סופו.
            </p>
            {/* רשתות חברתיות */}
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-primary-foreground/25 flex items-center justify-center text-primary-foreground/75 hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-accent font-bold mb-5">ניווט</h4>
            <ul className="space-y-2 text-primary-foreground/75 text-sm">
              <li><Link to="/#practice" className="hover:text-accent transition-colors">תחומי עיסוק</Link></li>
              <li><Link to="/#about" className="hover:text-accent transition-colors">אודות</Link></li>
              <li><Link to="/#services" className="hover:text-accent transition-colors">שירותי המשרד</Link></li>
              <li><Link to="/mitgashrim" className="hover:text-accent transition-colors">מתגשרים – התוכנית הייחודית</Link></li>
              <li><Link to="/mitgashrim#amuta" className="hover:text-accent transition-colors">עמותת אור עליון – נהורא עלאה</Link></li>
              <li><Link to="/#articles" className="hover:text-accent transition-colors">מאמרים</Link></li>
              <li><Link to="/#contact" className="hover:text-accent transition-colors">יצירת קשר</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-bold mb-5">צור קשר</h4>
            <ul className="space-y-3 text-primary-foreground/75 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {site.mapUrl ? (
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors underline underline-offset-2"
                    title="פתיחת מפת הגעה"
                  >
                    {site.address}
                  </a>
                ) : (
                  <span>{site.address}</span>
                )}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${site.phoneIntl}`} className="hover:text-accent transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${site.mobileIntl}`} className="hover:text-accent transition-colors">
                  {site.mobile} (נייד)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="w-4 h-4 text-accent shrink-0" />
                <span>פקס: {site.fax}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-primary-foreground/55 text-xs">
          <span>
            © {year} {site.fullTitle}. כל הזכויות שמורות.
            {site.footerText ? ` · ${site.footerText}` : ""}
          </span>
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-accent transition-colors underline underline-offset-2">
                  הצהרת נגישות
                </button>
              </DialogTrigger>
              <DialogContent dir="rtl" className="max-w-lg max-h-[80vh] overflow-y-auto text-right">
                <DialogHeader>
                  <DialogTitle className="text-right text-xl">הצהרת נגישות</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 text-sm leading-relaxed text-foreground/85">
                  <p>
                    משרד {site.fullTitle} פועל להנגשת שירותיו ואתר האינטרנט שלו לאנשים עם
                    מוגבלות, מתוך אמונה בזכותו של כל אדם לחיות בשוויון, בכבוד, בנוחות
                    ובעצמאות.
                  </p>
                  <p>
                    האתר הונגש בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות
                    לשירות), התשע"ג-2013, להנחיות WCAG 2.1 ברמה AA ולתקן הישראלי ת"י 5568.
                  </p>
                  <p>
                    באתר פועל תפריט נגישות (הכפתור הצף בצד המסך) המאפשר: הגדלת טקסט, ניגודיות
                    גבוהה, ניגודיות שחור/צהוב, הדגשת קישורים, גופן קריא והפחתת אנימציות.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">רכזת הנגישות של המשרד:</p>
                    <ul className="space-y-1">
                      <li><strong>שם מלא:</strong> עו"ד שירן שושני</li>
                      <li>
                        <strong>טלפון המשרד:</strong>{" "}
                        <a href={`tel:${site.phoneIntl}`} className="text-accent hover:underline">{site.phone}</a>
                      </li>
                      <li>
                        <strong>דוא"ל:</strong>{" "}
                        <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>
                      </li>
                    </ul>
                    <p className="mt-2 text-foreground/70">
                      נתקלתם בבעיית נגישות? פנו אלינו ונטפל בהקדם האפשרי.
                    </p>
                  </div>
                  <Link to="/accessibility" className="inline-block text-accent font-semibold hover:underline">
                    → להצהרת הנגישות המלאה
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-accent transition-colors underline underline-offset-2">
                  מדיניות פרטיות
                </button>
              </DialogTrigger>
              <DialogContent dir="rtl" className="max-w-lg max-h-[80vh] overflow-y-auto text-right">
                <DialogHeader>
                  <DialogTitle className="text-right text-xl">מדיניות פרטיות — עיקרי הדברים</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 text-sm leading-relaxed text-foreground/85">
                  <p>
                    <strong>איזה מידע נאסף?</strong> שם, טלפון ודוא"ל שאתם מוסרים מרצונכם בטופס
                    יצירת הקשר, בוואטסאפ או בטלפון. לא חלה עליכם חובה חוקית למסור מידע.
                  </p>
                  <p>
                    <strong>למה הוא נאסף?</strong> אך ורק לצורך חזרה לפונים, תיאום פגישת ייעוץ
                    ומתן השירות המשפטי. לא נשלח אליכם דיוור שיווקי ללא הסכמה מפורשת.
                  </p>
                  <p>
                    <strong>התחייבותנו:</strong> המידע נשמר באופן מאובטח בהתאם לחוק הגנת
                    הפרטיות, התשמ"א-1981, ולתיקון 13; הוא אינו מועבר לצדדים שלישיים ללא
                    הסכמה או חובה שבדין, ונשמר רק למשך הזמן הנדרש. עומדות לכם זכויות עיון,
                    תיקון ומחיקה — בפנייה אלינו:{" "}
                    <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>.
                  </p>
                  <Link to="/privacy" className="inline-block text-accent font-semibold hover:underline">
                    → למדיניות הפרטיות המלאה
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
