import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const AssociationPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>עמותה | שירן שושני - עורכי דין, נוטריון וגישור</title>
        <meta name="description" content="דף העמותה של שירן שושני - חברת עורכי דין, נוטריון וגישור." />
        <link rel="canonical" href="https://shiran-shoshani-law.co.il/association" />
      </Helmet>

      <div className="min-h-screen flex flex-col" dir="rtl">
        <Header />
        <main className="flex-1 pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 mb-6">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              עמותה
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              דף זה מיועד להצגת פעילות העמותה. התוכן יושלם בקרוב.
            </p>

            <div className="p-8 md:p-12 bg-card rounded-xl border border-dashed border-border text-center">
              <p className="text-muted-foreground italic">
                [ מיקום שמור למילוי תוכן בהמשך ]
              </p>
            </div>
          </div>
        </main>
        <Footer />
        <FloatingButtons />
        <AccessibilityWidget />
      </div>
    </>
  );
};

export default AssociationPage;
