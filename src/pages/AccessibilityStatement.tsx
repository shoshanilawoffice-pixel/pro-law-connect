import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Markdown from "@/components/Markdown";
import { site } from "@/config/site";
import content from "@/content/accessibility.json";

const AccessibilityStatement = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>{content.title} | {site.fullTitle}</title>
        <meta name="description" content="הצהרת הנגישות של אתר משרד עורכי הדין שירן שושני – התאמות הנגישות באתר ופרטי רכזת הנגישות." />
        <link rel="canonical" href={`${site.url}/accessibility`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-6 max-w-3xl text-right">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{content.title}</h1>
            <p className="text-muted-foreground text-sm mb-10">{content.updated}</p>

            <Markdown className="space-y-4 text-foreground/85 leading-loose">
              {content.body}
            </Markdown>

            <Link to="/" className="inline-block mt-12 text-accent font-semibold hover:underline">
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

export default AccessibilityStatement;
