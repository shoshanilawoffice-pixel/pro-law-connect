import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeartHandshake, Baby, ShieldCheck, Sparkles, Users, Sun, type LucideIcon } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import ContactForm from "@/components/sections/ContactForm";
import Markdown from "@/components/Markdown";
import { site } from "@/config/site";
import content from "@/content/mitgashrim.json";

/* אייקונים לעקרונות התוכנית — לפי הסדר; אם מוסיפים עקרונות בפאנל, האייקונים חוזרים על עצמם */
const principleIcons: LucideIcon[] = [HeartHandshake, Baby, ShieldCheck, Sparkles];

const Mitgashrim = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>{content.heroTitle} – {content.heroSubtitle} | {site.fullTitle}</title>
        <meta name="description" content={content.heroIntro.slice(0, 155)} />
        <link rel="canonical" href={`${site.url}/mitgashrim`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* HERO */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <img
                src={content.logo}
                alt={`${content.heroTitle} – לוגו התוכנית`}
                className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-2 border-accent mx-auto mb-8"
              />
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{content.heroTitle}</h1>
              <p className="text-accent text-xl tracking-wide mb-6">{content.heroSubtitle}</p>
              <p className="text-primary-foreground/85 text-lg leading-loose max-w-2xl mx-auto">
                {content.heroIntro}
              </p>
            </div>
          </section>

          {/* PRINCIPLES */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
                {content.principlesTitle}
              </h2>
              <div className="w-16 h-px bg-accent mx-auto mb-14" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {content.principles.map(({ title, desc }, i) => {
                  const Icon = principleIcons[i % principleIcons.length];
                  return (
                    <article key={title} className="bg-card border border-border p-7 text-right hover:border-accent transition-colors group">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full border border-accent/40 text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{desc}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WHY */}
          <section className="py-16 bg-muted/40">
            <div className="container mx-auto px-6 max-w-3xl text-right">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                {content.whyTitle}
              </h2>
              <Markdown className="space-y-4 text-foreground/85 leading-loose text-lg">
                {content.whyBody}
              </Markdown>
              {content.quote && (
                <blockquote className="font-tanakh text-xl text-accent border-r-4 border-accent pr-6 py-2 my-6">
                  "{content.quote}"
                </blockquote>
              )}
            </div>
          </section>

          {/* AMUTA */}
          <section id="amuta" className="py-20">
            <div className="container mx-auto px-6 max-w-3xl text-right">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-accent/40 text-accent shrink-0">
                  <Sun className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {content.amutaTitle}
                </h2>
              </div>
              <Markdown className="space-y-4 text-foreground/85 leading-loose text-lg">
                {content.amutaBody}
              </Markdown>
              <div className="flex items-center gap-3 mt-6 p-5 bg-accent/10 border border-accent/25 rounded-lg">
                <Users className="w-6 h-6 text-accent shrink-0" />
                <p className="text-base">
                  לפרטים נוספים על פעילות העמותה ודרכי סיוע:{" "}
                  <a href={`tel:${site.mobileIntl}`} className="text-accent font-semibold hover:underline">
                    {site.mobile}
                  </a>{" "}
                  ·{" "}
                  <a href={`mailto:${site.email}`} className="text-accent font-semibold hover:underline">
                    {site.email}
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="bg-accent/15 py-16 border-y border-accent/20">
            <div className="container mx-auto px-6">
              <h2 className="text-center text-2xl font-bold text-foreground mb-3">
                {content.contactTitle}
              </h2>
              <p className="text-center text-foreground/70 mb-8">{content.contactSubtitle}</p>
              <ContactForm />
            </div>
          </section>

          <div className="container mx-auto px-6 py-10 text-right">
            <Link to="/" className="text-accent font-semibold hover:underline">
              → חזרה לעמוד הבית
            </Link>
          </div>
        </main>
        <Footer />
        <FloatingButtons />
        <AccessibilityWidget />
      </div>
    </>
  );
};

export default Mitgashrim;
