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
  return (
    <>
      <Helmet>
        <title>כהן ושות׳ עורכי דין | משרד עורכי דין מוביל בישראל</title>
        <meta
          name="description"
          content="משרד כהן ושות׳ עורכי דין - ייעוץ וייצוג משפטי מקצועי בדיני משפחה, נדל״ן, ליטיגציה מסחרית ועוד. מעל 25 שנות ניסיון. ייעוץ ראשוני ללא עלות."
        />
        <meta
          name="keywords"
          content="עורכי דין, עורך דין תל אביב, דיני משפחה, גירושין, נדל״ן, ליטיגציה, ייעוץ משפטי"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cohen-law.co.il" />
        
        {/* Open Graph */}
        <meta property="og:title" content="כהן ושות׳ עורכי דין | משרד עורכי דין מוביל בישראל" />
        <meta
          property="og:description"
          content="ייעוץ וייצוג משפטי מקצועי בדיני משפחה, נדל״ן, ליטיגציה ועוד. ייעוץ ראשוני ללא עלות."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "כהן ושות׳ עורכי דין",
            description: "משרד עורכי דין מוביל בישראל עם מעל 25 שנות ניסיון",
            url: "https://cohen-law.co.il",
            telephone: "+972-3-1234567",
            email: "info@cohen-law.co.il",
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
