import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { practiceAreas, getPracticeAreaBySlug } from "@/data/practiceAreas";

const PracticeAreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = getPracticeAreaBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!area) {
    return <Navigate to="/" replace />;
  }

  const Icon = area.icon;
  const otherAreas = practiceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <Helmet>
        <title>{`${area.title} | שירן שושני - עורכי דין, נוטריון וגישור`}</title>
        <meta name="description" content={area.shortDescription} />
        <link
          rel="canonical"
          href={`https://shiran-shoshani-law.co.il/practice-areas/${area.slug}`}
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-2xl" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              {/* Breadcrumbs */}
              <nav
                aria-label="ניווט פירורי לחם"
                className="flex items-center gap-2 text-sm text-cream/60 mb-8"
              >
                <Link to="/" className="hover:text-gold transition-colors">
                  ראשי
                </Link>
                <span>/</span>
                <Link
                  to="/#practice-areas"
                  className="hover:text-gold transition-colors"
                >
                  תחומי התמחות
                </Link>
                <span>/</span>
                <span className="text-gold">{area.title}</span>
              </nav>

              <div className="max-w-3xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gold/10 border border-gold/20 mb-6">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
                  {area.title}
                </h1>
                <p className="text-lg md:text-xl text-cream/70 leading-relaxed mb-8">
                  {area.intro}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/#contact">
                      קבעו פגישת ייעוץ
                      <ArrowLeft className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild>
                    <a href="tel:+972-50-6421322">
                      <Phone className="w-5 h-5" />
                      050-6421322
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Topics */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <span className="text-gold font-semibold text-sm tracking-wide mb-4 block">
                  מה כולל התחום
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                  השירותים שאנו מספקים
                </h2>

                <div className="grid gap-6">
                  {area.topics.map((topic, index) => (
                    <article
                      key={index}
                      className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-card hover:shadow-elegant transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-3">
                            {topic.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {topic.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Other Areas */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
                  <div>
                    <span className="text-gold font-semibold text-sm tracking-wide mb-2 block">
                      תחומים נוספים
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      תחומי התמחות נוספים במשרד
                    </h2>
                  </div>
                  <Link
                    to="/#practice-areas"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors"
                  >
                    לכל תחומי ההתמחות
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherAreas.map((other) => {
                    const OtherIcon = other.icon;
                    return (
                      <Link
                        key={other.slug}
                        to={`/practice-areas/${other.slug}`}
                        className="group p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                          <OtherIcon className="w-6 h-6 text-gold group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                          {other.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {other.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 text-gold text-sm font-medium">
                          קרא עוד
                          <ArrowLeft className="w-4 h-4" />
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-12 text-center">
                  <Button variant="outline" asChild>
                    <Link to="/">
                      <ArrowRight className="w-4 h-4" />
                      חזרה לדף הבית
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default PracticeAreaPage;
