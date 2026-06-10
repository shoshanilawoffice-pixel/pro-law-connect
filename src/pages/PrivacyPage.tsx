import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const updated = new Date().toLocaleDateString("he-IL");

  return (
    <>
      <Helmet>
        <title>הצהרת פרטיות | שירן שושני - עורכי דין, נוטריון וגישור</title>
        <meta name="description" content="הצהרת הפרטיות של אתר שירן שושני - איסוף מידע, שימוש, שמירה והעברה לצדדים שלישיים." />
        <link rel="canonical" href="https://shiran-shoshani-law.co.il/privacy" />
      </Helmet>

      <div className="min-h-screen flex flex-col" dir="rtl">
        <Header />
        <main className="flex-1 pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 mb-6">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              הצהרת פרטיות
            </h1>
            <p className="text-sm text-muted-foreground mb-10">עודכן לאחרונה: {updated}</p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. כללי</h2>
                <p className="text-muted-foreground">
                  שירן שושני - חברת עורכי דין, נוטריון וגישור (להלן: "המשרד") מכבדת את פרטיות המשתמשים באתר. הצהרה זו מפרטת כיצד נאסף ונשמר מידע אישי המתקבל באמצעות האתר.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. איסוף מידע</h2>
                <p className="text-muted-foreground">
                  המשרד אוסף מידע שנמסר באופן יזום על ידי המשתמש (שם, טלפון, דוא"ל, פרטי פנייה) דרך טופס יצירת הקשר באתר, וכן מידע סטטיסטי שאינו מזהה אישית הנאסף באופן אוטומטי לצורך שיפור חוויית הגלישה.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. שימוש במידע</h2>
                <p className="text-muted-foreground">
                  המידע ישמש למענה לפנייה, מתן ייעוץ ראשוני, שליחת עדכונים מקצועיים (בכפוף להסכמה) וניהול קשרי הלקוחות. המשרד לא יעביר מידע לצדדים שלישיים, אלא בהסכמת המשתמש או על פי דין.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. אבטחת מידע</h2>
                <p className="text-muted-foreground">
                  המשרד נוקט באמצעי אבטחה מקובלים לשמירה על המידע, אך אינו יכול להבטיח חסינות מוחלטת מפני חדירה או חשיפה לא מורשית.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. עוגיות (Cookies)</h2>
                <p className="text-muted-foreground">
                  באתר נעשה שימוש בעוגיות לצורכי תפעול, סטטיסטיקה ושיפור השירות. ניתן לחסום עוגיות דרך הגדרות הדפדפן, אך הדבר עלול להשפיע על תפקוד חלקים מהאתר.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. זכויות המשתמש</h2>
                <p className="text-muted-foreground">
                  זכותך לעיין במידע הנשמר אודותיך, לבקש את תיקונו או מחיקתו, בכפוף לחובות שמירת מסמכים על פי דין. לפניות בנושא יש לפנות לכתובת הדוא"ל המופיעה בעמוד יצירת הקשר.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. שינויים בהצהרה</h2>
                <p className="text-muted-foreground">
                  המשרד רשאי לעדכן את הצהרת הפרטיות מעת לעת. גרסה מעודכנת תפורסם בעמוד זה עם תאריך עדכון.
                </p>
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

export default PrivacyPage;
