import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Markdown from "@/components/Markdown";
import { site } from "@/config/site";
import content from "@/content/homepage.json";
import {
  Handshake,
  HeartCrack,
  ScrollText,
  FileX2,
  FileSignature,
  Coins,
  EyeOff,
  Scale,
  Home,
  CalendarClock,
  Users,
  Wallet,
  HandCoins,
  HeartHandshake,
  ShieldAlert,
  FileText,
  Gavel,
  TrendingDown,
  Landmark,
  Quote,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* התוכן נטען מ-src/content/homepage.json — ניתן לעריכה בפאנל הניהול /admin/ */
const iconByTitle: Record<string, LucideIcon> = {
  "יישוב סכסוך": Handshake,
  "גיטין": HeartCrack,
  "כתובה": ScrollText,
  "התרת נישואין": FileX2,
  "הסכם גירושין": FileSignature,
  "הסכם ממון": Coins,
  "אלימות שקופה": EyeOff,
  "איזון משאבים": Scale,
  "חלוקת רכוש בגירושין": Home,
  "זמני שהות": CalendarClock,
  "אחריות הורית": Users,
  "מזונות ילדים": Wallet,
  "מזונות אישה": HandCoins,
  "ידועים בציבור": HeartHandshake,
  "צווים למניעת אלימות": ShieldAlert,
  "צוואה": FileText,
  "גישור": Sparkles,
  "הוצאה לפועל": Gavel,
  "חדלות פירעון": TrendingDown,
  "ליטיגציה": Landmark,
};

const practiceAreas: { title: string; desc: string; image?: string; Icon: LucideIcon }[] =
  content.practiceAreas.map((p) => ({ ...p, Icon: iconByTitle[p.title] ?? Scale }));

/* כל התוכן מנוהל בפאנל /admin/ דרך src/content/homepage.json */
const services = content.services;
const testimonials = content.testimonials;
const articles = content.articles;
const quotes = content.quotes;

/* רצועת ציטוט בגופן תנ"כי */
const QuoteStrip = ({ text, author }: { text: string; author: string }) => (
  <section className="py-12 bg-accent/10 border-y border-accent/15">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <p className="font-tanakh text-2xl lg:text-3xl text-foreground/90 leading-relaxed">
        "{text}"
      </p>
      <p className="text-accent mt-4 text-sm tracking-wider">— {author}</p>
    </div>
  </section>
);

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
        <title>{site.fullTitle}</title>
        <meta
          name="description"
          content={`${site.fullTitle} – מעמד אישי, גישור, צוואות וירושות, חדלות פירעון, הוצאה לפועל ושירותי נוטריון. לתיאום פגישת ייעוץ: ${site.mobile}`}
        />
        <link rel="canonical" href={site.url} />
        <meta property="og:title" content={site.fullTitle} />
        <meta property="og:description" content="ליווי אישי במעמד אישי, גישור, נוטריון, צוואות וירושות." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: site.fullTitle,
            telephone: site.phoneIntl,
            faxNumber: site.fax,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "שדרות התמרים 4",
              addressLocality: "אילת",
              addressCountry: "IL",
            },
            url: site.url,
            sameAs: [site.social.facebook, site.social.instagram, site.social.tiktok],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* HERO */}
          <section id="hero" className="relative w-full h-[55vh] md:h-[80vh] min-h-[400px] md:min-h-[520px] overflow-hidden">
            <img
              src={content.hero.image}
              alt="עו״ד שירן שושני-אוכמן"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/45 via-[22%] to-transparent to-[45%]" />
            <div className="relative container mx-auto px-6 h-full flex items-center justify-start">
              <div className="max-w-md text-right">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent bg-black mb-6">
                  <img src={site.logo} alt="לוגו שירן שושני" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
                  {content.hero.title}
                </h1>
                <Markdown className="text-foreground/80 text-base leading-relaxed">
                  {content.hero.description}
                </Markdown>
                {content.hero.ctaText && (
                  <a
                    href={content.hero.ctaLink || "#contact"}
                    className="inline-block mt-6 px-8 py-3 bg-accent text-accent-foreground font-bold rounded-sm hover:opacity-90 transition-opacity"
                  >
                    {content.hero.ctaText}
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* QUOTE 1 */}
          {quotes[0] && <QuoteStrip text={quotes[0].text} author={quotes[0].author} />}

          {/* CONTACT STRIP 1 */}
          <section className="bg-accent/15 py-10 border-y border-accent/20">
            <div className="container mx-auto px-6">
              <h2 className="text-center text-2xl font-bold text-foreground mb-6">
                לתיאום פגישת ייעוץ
              </h2>
              <ContactForm />
            </div>
          </section>

          {/* MITGASHRIM BANNER */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">בלעדי למשרד</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">"מתגשרים" — מאירים לכם את הדרך</h2>
              <p className="text-primary-foreground/85 text-lg leading-loose mb-8 max-w-2xl mx-auto">
                תוכנית גישור מיוחדת ובלעדית למשרד: הליך גישורי וטיפולי לניהול הליך גירושין
                בצורה בריאה, תוך חשיבה על עתיד משותף כמשפחה שמשתנה מזוגיות להורות — בדגש על
                טובת הילדים.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/mitgashrim"
                  className="px-8 py-3 bg-accent text-accent-foreground font-bold rounded-sm hover:opacity-90 transition-opacity"
                >
                  למנשר "מתגשרים"
                </Link>
                <Link
                  to="/mitgashrim#amuta"
                  className="px-8 py-3 border border-accent text-accent font-bold rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  לעמותת "אור עליון – נהורא עלאה"
                </Link>
              </div>
            </div>
          </section>

          {/* PRACTICE AREAS — לפני אודות */}
          <section id="practice" className="py-20 bg-muted/40">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
                תחומי עיסוק
              </h2>
              <div className="w-16 h-px bg-accent mx-auto mb-14" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {practiceAreas.map(({ title, desc, image, Icon }) => (
                  <article
                    key={title}
                    className="bg-card border border-border p-7 hover:border-accent transition-colors group"
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-accent/40 mb-5"
                      />
                    ) : (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-accent/40 text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {title}
                    </h3>
                    <Markdown className="text-foreground/70 leading-relaxed text-sm space-y-2">
                      {desc}
                    </Markdown>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* QUOTE 2 */}
          {quotes[1] && <QuoteStrip text={quotes[1].text} author={quotes[1].author} />}

          {/* ABOUT */}
          <section id="about" className="py-20">
            <div className="container mx-auto px-6 max-w-4xl text-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                אודות – עו״ד שירן שושני-אוכמן
              </h2>
              <h3 className="text-xl text-accent font-semibold mb-8">
                מייסדת ובעלת המשרד
              </h3>
              <div className="space-y-5 text-foreground/85 leading-loose text-lg">
                <Markdown className="space-y-5">{content.about}</Markdown>
                <p>
                  <Link to="/mitgashrim" className="text-accent font-semibold hover:underline">
                    לתוכנית "מתגשרים – מאירים לכם את הדרך" »
                  </Link>
                  {" · "}
                  <Link to="/mitgashrim#amuta" className="text-accent font-semibold hover:underline">
                    לעמותת "אור עליון – נהורא עלאה" »
                  </Link>
                </p>
              </div>

              <blockquote className="mt-12 border-r-4 border-accent pr-6 py-2 text-foreground/75 font-tanakh text-xl">
                <p>"עולם פנימי מקרין לעולם חיצוני"</p>
                <footer className="mt-3 text-sm text-accent">— הרב אריק נווה</footer>
              </blockquote>
            </div>
          </section>

          {/* CONTACT STRIP 2 */}
          <section className="bg-accent/15 py-10 border-y border-accent/20">
            <div className="container mx-auto px-6">
              <h2 className="text-center text-2xl font-bold text-foreground mb-6">
                לתיאום פגישת ייעוץ
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

          {/* QUOTE 3 */}
          {quotes[2] && <QuoteStrip text={quotes[2].text} author={quotes[2].author} />}

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

          {/* TESTIMONIALS */}
          <section id="testimonials" className="py-20 bg-muted/40">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
                לקוחות ממליצים
              </h2>
              <div className="w-16 h-px bg-accent mx-auto mb-14" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {testimonials.map((t) => (
                  <figure key={t.name} className="bg-card border border-border p-7 flex flex-col">
                    <Quote className="w-8 h-8 text-accent/50 mb-4" aria-hidden="true" />
                    <blockquote className="text-foreground/80 leading-relaxed flex-1">
                      {t.text}
                    </blockquote>
                    <figcaption className="mt-5 text-accent font-semibold text-sm">
                      {t.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* ARTICLES */}
          <section id="articles" className="py-20">
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
                      קרא עוד על {a.title} »
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* QUOTE 4 */}
          {quotes[3] && <QuoteStrip text={quotes[3].text} author={quotes[3].author} />}

          {/* CONTACT */}
          <section id="contact" className="bg-accent/15 py-16 border-y border-accent/20">
            <div className="container mx-auto px-6">
              <h2 className="text-center text-3xl font-bold text-foreground mb-3">
                יצירת קשר
              </h2>
              <p className="text-center text-foreground/70 mb-8">
                השאירו פרטים ונחזור אליכם בהקדם · טלפון: {site.phone} · נייד: {site.mobile}
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
