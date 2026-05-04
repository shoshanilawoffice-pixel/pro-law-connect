import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Defer to allow sections to mount
      const timeout = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
      return () => clearTimeout(timeout);
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return (
    <>
      <Helmet>
        <title>שירן שושני - עורכי דין, נוטריון וגישור</title>
        <meta
          name="description"
          content="שירן שושני - חברת עורכי דין, נוטריון וגישור. ייעוץ וייצוג משפטי מקצועי בדיני משפחה, נדל״ן, ליטיגציה מסחרית, שירותי נוטריון וגישור. ייעוץ ראשוני ללא עלות."
        />
        <meta
          name="keywords"
          content="שירן שושני, עורכי דין, נוטריון, גישור, דיני משפחה, נדל״ן, ליטיגציה, ייעוץ משפטי"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shiran-shoshani-law.co.il" />
        
        {/* Open Graph */}
        <meta property="og:title" content="שירן שושני - עורכי דין, נוטריון וגישור" />
        <meta
          property="og:description"
          content="ייעוץ וייצוג משפטי מקצועי, שירותי נוטריון וגישור. ייעוץ ראשוני ללא עלות."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "שירן שושני - עורכי דין, נוטריון וגישור",
            description: "חברת עורכי דין, נוטריון וגישור המלווה לקוחות פרטיים ועסקיים",
            url: "https://shiran-shoshani-law.co.il",
            telephone: "+972-8-8695008",
            email: "info@shiran-shoshani-law.co.il",
            address: {
              "@type": "PostalAddress",
              streetAddress: "רוטשילד 45",
              addressLocality: "תל אביב-יפו",
              addressCountry: "IL",
            },
            openingHours: "Mo-Th 09:00-18:00",
            areaServed: "ישראל",
            priceRange: "$$",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <PracticeAreasSection />
          <TeamSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
