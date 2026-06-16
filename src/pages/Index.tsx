import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import heroImage from "@/assets/shiran-hero.jpg";

const practiceAreas = [
  { title: "יישוב סכסוך", desc: "ליווי משפטי מלא מהגשת הבקשה ועד לסיום ההליך" },
  { title: "משמורת", desc: "החזקת ילדים, זמני שהות, אפוטרופסות, ניכור הורי, אחריות הורית" },
  { title: "אלימות במשפחה", desc: "צווי הגנה, ביטול צווי הגנה" },
  { title: "גירושין", desc: "ניהול תיקי גירושין בבית הדין הרבני, תביעות לשלום בית, כתובה, מזונות אישה" },
  { title: "מזונות", desc: "מזונות ילדים, מזונות אישה, הגדלת מזונות, הפחתת מזונות, ביטול מזונות" },
  { title: "לשון הרע", desc: "תביעות לשון הרע בין בני זוג" },
  { title: "רכוש", desc: "תביעות רכוש, פירוק שיתוף, איזון משאבים, ביטול הסכמים, תביעות כספיות" },
  { title: "התרת נישואים", desc: "לזוגות שנישאו בנישואים אזרחיים" },
  { title: "ייצוג משפטי", desc: "ייצוג בבתי המשפט ובבתי הדין הרבניים" },
  { title: "ירושות וצוואות", desc: "עריכת צוואות, התנגדות לצו קיום צוואה, צווי ירושה" },
  { title: "הסכמים", desc: "הסכמי גירושין, ממון, שלום בית, חיים משותפים, הורות משותפת, מכר/קניה" },
  { title: "נוטריון וגישור", desc: "אישורי נוטריון, תרגומים, ייפויי כוח וגישור משפחתי" },
];

const services = [
  "ניסיון של שנים בניהול תיקי משפחה וגירושין",
  "זה לא עוד משרד – זה משרד שאוהב לנצח!",
  "הבנה מעמיקה של צרכי הלקוח",
  "זמינות מלאה ויחס אישי",
  "ליווי אישי צמוד מתחילת ההליך ועד סופו – וגם אחרי",
  "ידע משפטי רב ומקצועיות חסרת פשרות",
  "משרד בוטיק שמעניק מעטפת משפטית מלאה",
  "התמחות בדיני משפחה, נוטריון וגישור",
];

const articles = [
  {
    title: "האם הכתובה שחתמת עליה ביום חתונתך באמת יכולה \"לאיים\" עלייך ביום גירושיך?",
    excerpt:
      "הכתובה היא אחד המסמכים המרתקים והעתיקים ביותר בדיני המשפחה. רבים רואים בה טקס דתי יפהפה, אך מעטים מבינים את המשמעות המשפטית המלאה שלה.",
    date: "26/08/2025",
  },
  {
    title: "מתי כדאי לגשת להליך גישור ומתי \"עד הסוף\" במעמד גירושין?",
    excerpt:
      "ההחלטה על גירושין היא מורכבת. אחת השאלות המרכזיות היא האם לסיים את הקשר דרך גישור או לפתוח בקרב משפטי בבתי המשפט.",
    date: "26/08/2025",
  },
  {
    title: "חושבים להתחיל הליך גירושין? אלו הצעדים הראשונים שיש לעשות",
    excerpt:
      "החלטה על גירושין היא אחת ההחלטות הקשות והמורכבות ביותר בחיי אדם. תהליך רגשי, משפטי וכלכלי הדורש היערכות ותכנון קפדניים.",
    date: "19/08/2025",
  },
];

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Helmet>
        <title>שירן שושני – משרד עורכי דין, נוטריון וגישור</title>
        <meta
          name="description"
          content="משרד עורכי דין שירן שושני – ייצוג בדיני משפחה, גירושין, נוטריון וגישור. ליווי אישי, מקצועי וצמוד. לתיאום שיחת היכרות: 050-6421322"
        />
        <link rel="canonical" href="https://shiran-shoshani-law.co.il" />
        <meta property="og:title" content="שירן שושני – משרד עורכי דין, נוטריון וגישור" />
        <meta property="og:description" content="ליווי אישי בדיני משפחה, גירושין, נוטריון וגישור." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "שירן שושני – משרד עורכי דין",
            telephone: "+972-50-6421322",
            email: "info@shiran-shoshani-law.co.il",
            address: {
              "@type": "PostalAddress",
              streetAddress: "שדרות התמרים 4",
              addressLocality: "אילת",
              addressCountry: "IL",
            },
            url: "https://shiran-shoshani-law.co.il",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* HERO */}
          <section id="hero" className="relative w-full h-[80vh] min-h-[520px] overflow-hidden">
            <img
              src={heroImage}
              alt="עו״ד שירן שושני"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/70 via-background/10 to-transparent" />
            <div className="relative container mx-auto px-6 h-full flex items-center justify-start">
              <div className="max-w-md text-right">
                <div className="w-20 h-20 rounded-full border-2 border-accent bg-background/80 flex items-center justify-center mb-6 font-serif text-accent text-2xl">
                  ש.ש
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
                  שירן שושני
                </h1>
                <p className="text-accent text-lg tracking-[0.25em] mb-4">משרד עורכי דין</p>
                <p className="text-foreground/80 text-base leading-relaxed">
                  דיני משפחה · גירושין · נוטריון · גישור
                </p>
              </div>
            </div>
          </section>

          {/* CONTACT STRIP 1 */}
          <section className="bg-accent/15 py-10 border-y border-accent/20">
            <div className="container mx-auto px-6">
              <h2 className="text-center text-2xl font-bold text-foreground mb-6">
                לתיאום שיחת היכרות טלפונית
              </h2>
              <ContactForm />
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="py-20">
            <div className="container mx-auto px-6 max-w-4xl text-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                אודות – עו״ד שירן שושני
              </h2>
              <h3 className="text-xl text-accent font-semibold mb-8">
                בעלת תואר במשפטים וחברה בלשכת עורכי הדין בישראל
              </h3>
              <div className="space-y-5 text-foreground/85 leading-loose text-lg">
                <p>
                  עו״ד שירן שושני מלווה שנים רבות לקוחות פרטיים ועסקיים בתיקים מורכבים, בהצלחה רבה,
                  ומגיעה להישגים מרשימים בזכות נחישות, דבקות במטרה ומקצועיות ללא פשרות. שירן מלווה
                  את כל לקוחותיה באופן אישי, זמינה להם תמיד ומערבת אותם בהליך ובקבלת ההחלטות.
                </p>
                <p>
                  לעו״ד שושני אלפי שעות הופעה בבתי המשפט ובבתי הדין הרבניים, והיא נחשבת ליטיגטורית
                  מובילה בתחומה. חשיבה ייחודית, לעיתים מחוץ לקופסא, מאפשרת לה להביא לפריצת דרך
                  בתיקים בהם היא מייצגת ולסיום המחלוקות ביעילות ובמהירות.
                </p>
                <p>
                  עו״ד שושני יודעת להכיל את מנעד הרגשות שחווים לקוחותיה, בהליך המורכב כל כך, ולכן
                  זמינה עבורם ברגישות, בסבלנות ובהבנה – ועם זאת מעניקה להם כלים מעשיים ומעצימים
                  להתמודדות עם הקושי.
                </p>
              </div>

              <blockquote className="mt-12 border-r-4 border-accent pr-6 py-2 text-foreground/75 italic text-lg">
                <p>"לפעמים, כשאתה נמצא במקום חשוך, אתה חושב שקברו אותך אבל בעצם – שתלו אותך."</p>
                <footer className="mt-3 text-sm text-accent not-italic">— מאיר אריאל</footer>
              </blockquote>
            </div>
          </section>

          {/* PRACTICE AREAS */}
          <section id="practice" className="py-20 bg-muted/40">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
                תחומי עיסוק
              </h2>
              <div className="w-16 h-px bg-accent mx-auto mb-14" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {practiceAreas.map((a) => (
                  <article
                    key={a.title}
                    className="bg-card border border-border p-7 hover:border-accent transition-colors group"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{a.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT STRIP 2 */}
          <section className="bg-accent/15 py-10 border-y border-accent/20">
            <div className="container mx-auto px-6">
              <h2 className="text-center text-2xl font-bold text-foreground mb-6">
                לתיאום שיחת היכרות טלפונית
              </h2>
              <ContactForm />
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
                שירותי המשרד
              </h2>
              <div className="w-16 h-px bg-accent mx-auto mb-14" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl mx-auto">
                {services.map((s, i) => (
                  <div key={s} className="flex items-start gap-4 group">
                    <span className="text-accent font-serif text-2xl leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground/85 text-lg leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FROM DARK TO LIGHT */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 max-w-3xl text-right">
              <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">מחושך לחופש</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">להתגרש או לא להתגרש?</h2>
              <div className="space-y-5 text-primary-foreground/80 leading-loose text-lg">
                <p>
                  חוסר הוודאות, הפחד מהלא נודע, העתיד המעורפל וההליך המשפטי המבלבל גורמים להססנות
                  ובלבול. נכון, זה מפחיד – אבל יותר מפחיד לכלות את החיים בזוגיות רעילה או אלימה.
                </p>
                <p>
                  אחרי שנים שבהן אני מלווה נשים וגברים בהליכי גירושין, אני מבטיחה לך: שאחרי החושך
                  מגיע האור, והאור הזה הוא החופש – ואין מחיר לחופש.
                </p>
                <p>והחופש ממש כאן – במרחק של פגישת ייעוץ אחת.</p>
              </div>
            </div>
          </section>

          {/* PAYMENT */}
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-3xl text-right">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                הסדר תשלומים נוח ומגוון פתרונות מימון
              </h2>
              <div className="space-y-4 text-foreground/80 leading-loose text-lg">
                <p>
                  זה לא סוד שהליך משפטי הוא הליך יקר – אבל להתפשר על עורך דין יעלה לך הרבה יותר.
                  טעויות של עורכי דין חסרי ניסיון הן לעיתים בלתי הפיכות.
                </p>
                <p>המשרד מציע ללקוחותיו הסדר תשלומים נוח ומגוון פתרונות תשלום ומימון.</p>
              </div>
            </div>
          </section>

          {/* ARTICLES */}
          <section id="articles" className="py-20 bg-muted/40">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
                מאמרים
              </h2>
              <div className="w-16 h-px bg-accent mx-auto mb-14" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((a) => (
                  <article key={a.title} className="bg-card border border-border p-7 flex flex-col">
                    <time className="text-accent text-sm mb-3">{a.date}</time>
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-5 flex-1">
                      {a.excerpt}
                    </p>
                    <button className="text-accent font-semibold text-sm hover:underline self-start">
                      קרא עוד »
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="bg-accent/15 py-16 border-y border-accent/20">
            <div className="container mx-auto px-6">
              <h2 className="text-center text-3xl font-bold text-foreground mb-3">
                יצירת קשר
              </h2>
              <p className="text-center text-foreground/70 mb-8">
                השאירו פרטים ונחזור אליכם בהקדם
              </p>
              <ContactForm />
            </div>
          </section>
        </main>

        <Footer />
        <FloatingButtons />
        <AccessibilityWidget />
      </div>
    </>
  );
};

export default Index;
