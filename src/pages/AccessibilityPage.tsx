import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { Accessibility } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const AccessibilityPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const updated = new Date().toLocaleDateString("he-IL");

  return (
    <>
      <Helmet>
        <title>הצהרת נגישות | שירן שושני - עורכי דין, נוטריון וגישור</title>
        <meta name="description" content="הצהרת נגישות לאתר שירן שושני - תקן AA, רכיב נגישות מובנה ופרטי רכז נגישות." />
        <link rel="canonical" href="https://shiran-shoshani-law.co.il/accessibility" />
      </Helmet>

      <div className="min-h-screen flex flex-col" dir="rtl">
        <Header />
        <main className="flex-1 pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 mb-6">
              <Accessibility className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              הצהרת נגישות
            </h1>
            <p className="text-sm text-muted-foreground mb-10">עודכן לאחרונה: {updated}</p>

            <div className="space-y-6 text-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-3">מחויבות לנגישות</h2>
                <p className="text-muted-foreground">
                  משרד שירן שושני - עורכי דין, נוטריון וגישור רואה בנגישות האתר ערך עליון ופועל להנגשתו לאנשים עם מוגבלות בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">תקן הנגישות</h2>
                <p className="text-muted-foreground">
                  האתר הונגש בהתאם להוראות תקן ישראלי ת"י 5568, המבוסס על מסמך WCAG 2.1 ברמה AA.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">רכיב הנגישות באתר</h2>
                <p className="text-muted-foreground mb-3">
                  באתר מותקן רכיב נגישות מובנה (קוד פתוח, ללא תלות בצד שלישי) המופיע בצד ימין למטה, ומאפשר בין היתר:
                </p>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li>הגדלה והקטנה של גודל הטקסט</li>
                  <li>הפעלת מצב ניגודיות גבוהה</li>
                  <li>הפחתת אנימציות ותנועה</li>
                  <li>הדגשת קישורים בדף</li>
                  <li>שינוי לגופן קריא במיוחד</li>
                  <li>איפוס הגדרות לברירת מחדל</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">התאמות נוספות</h2>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li>ניווט מלא באמצעות מקלדת</li>
                  <li>תיוג סמנטי תקני (HTML5, ARIA)</li>
                  <li>טקסט חלופי לתמונות משמעותיות</li>
                  <li>ניגודיות צבעים תואמת AA</li>
                  <li>תאימות לקוראי מסך מקובלים</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">חריגים והסתייגויות</h2>
                <p className="text-muted-foreground">
                  ייתכן ובחלקים מסוימים של האתר טרם הושלמה ההנגשה המלאה, או שתוכן מצד שלישי המוטמע באתר אינו תחת שליטתנו. אנו פועלים באופן שוטף לשיפור הנגישות.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">פנייה לרכז הנגישות</h2>
                <p className="text-muted-foreground mb-3">
                  נתקלתם בבעיית נגישות? נשמח לסייע ולתקן בהקדם:
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li><strong className="text-foreground">שם:</strong> שירן שושני</li>
                  <li><strong className="text-foreground">טלפון:</strong> <a href="tel:+972-50-6421322" className="text-accent hover:underline">050-6421322</a></li>
                  <li><strong className="text-foreground">דוא"ל:</strong> <a href="mailto:info@shiran-shoshani-law.co.il" className="text-accent hover:underline">info@shiran-shoshani-law.co.il</a></li>
                  <li><strong className="text-foreground">כתובת:</strong> שדרות התמרים 4, הקניון האדום, קומה 2, אילת</li>
                </ul>
              </section>
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

export default AccessibilityPage;
