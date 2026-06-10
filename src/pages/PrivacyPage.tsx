import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { ShieldCheck, AlertTriangle } from "lucide-react";
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
        <title>מדיניות פרטיות | שירן שושני - עורכי דין, נוטריון וגישור</title>
        <meta
          name="description"
          content="מדיניות פרטיות מעודכנת לאתר שירן שושני - בהתאם לחוק הגנת הפרטיות התשמ״א-1981 ותיקון 13 לחוק."
        />
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
              מדיניות פרטיות
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              עודכן לאחרונה: {updated} | מעודכן בהתאם לתיקון 13 לחוק הגנת הפרטיות
            </p>

            {/* Disclaimer Banner */}
            <div className="flex gap-3 p-4 mb-10 rounded-lg border border-accent/30 bg-accent/5">
              <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">הבהרה משפטית:</strong> מסמך זה הינו מדיניות פרטיות כללית של אתר המשרד ואינו מהווה ייעוץ משפטי. המדיניות נכתבה בהתאם להוראות חוק הגנת הפרטיות, התשמ"א-1981, ולעקרונות תיקון 13 לחוק (תוקף: אוגוסט 2025), המחמיר את חובות בעלי השליטה והמחזיקים במאגרי מידע. בכל מקרה של סתירה בין מסמך זה לבין הוראות הדין - הוראות הדין גוברות.
              </p>
            </div>

            <div className="space-y-6 text-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. כללי</h2>
                <p className="text-muted-foreground">
                  שירן שושני - חברת עורכי דין, נוטריון וגישור (להלן: "המשרד" או "אנחנו") מכבדת את פרטיות המבקרים והפונים באמצעות האתר. מדיניות זו מפרטת אילו פרטים נאספים, למה הם משמשים, כיצד הם נשמרים ומהן זכויותיכם בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, התקנות מכוחו ותיקון 13 לחוק.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. בעל השליטה במאגר המידע</h2>
                <ul className="space-y-1 text-muted-foreground">
                  <li><strong className="text-foreground">שם:</strong> שירן שושני, עו"ד</li>
                  <li><strong className="text-foreground">כתובת:</strong> שדרות התמרים 4, הקניון האדום, קומה 2, אילת</li>
                  <li><strong className="text-foreground">דוא"ל ליצירת קשר בנושאי פרטיות:</strong> <a href="mailto:info@shiran-shoshani-law.co.il" className="text-accent hover:underline">info@shiran-shoshani-law.co.il</a></li>
                  <li><strong className="text-foreground">טלפון:</strong> <a href="tel:+972-50-6421322" className="text-accent hover:underline">050-6421322</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. סוגי המידע הנאסף</h2>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">מידע שנמסר ביוזמת המשתמש:</strong> שם, מספר טלפון, כתובת דוא"ל ותוכן הפנייה - באמצעות טופס יצירת הקשר באתר.</li>
                  <li><strong className="text-foreground">מידע טכני:</strong> כתובת IP, סוג הדפדפן, מערכת הפעלה, דפים שנצפו ומשך השהייה - לצורכי תפעול, אבטחה וסטטיסטיקה.</li>
                  <li><strong className="text-foreground">עוגיות (Cookies):</strong> כמפורט בסעיף 7 להלן.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. מטרות השימוש במידע</h2>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li>מענה לפניות ומתן ייעוץ ראשוני.</li>
                  <li>ניהול קשרי לקוחות ותיעוד פניות.</li>
                  <li>שיפור האתר, חוויית המשתמש ושירותי המשרד.</li>
                  <li>עמידה בחובות חוקיות (לרבות חובות תיעוד החלות על עורכי דין ונוטריונים).</li>
                  <li>שליחת עדכונים מקצועיים - אך ורק בכפוף להסכמה מפורשת ומראש (חוק התקשורת - "ספאם").</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. בסיס חוקי לעיבוד</h2>
                <p className="text-muted-foreground">
                  עיבוד המידע נעשה על בסיס הסכמתכם המפורשת בעת מסירת הפרטים, לצורך ביצוע פעולות לבקשתכם (מענה לפנייה), לקיום חובות חוקיות החלות על המשרד וכן לאינטרסים לגיטימיים של המשרד (אבטחת מידע ושיפור השירות) - הכל בהתאם להוראות חוק הגנת הפרטיות.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. העברת מידע לצדדים שלישיים</h2>
                <p className="text-muted-foreground">
                  המשרד אינו מעביר מידע אישי לצדדים שלישיים, למעט: (א) ספקי שירות טכנולוגיים הפועלים בשמנו (אחסון אתר, שירותי דוא"ל, אנליטיקה) - הכפופים להתחייבויות סודיות ואבטחה; (ב) רשויות מוסמכות, כאשר נדרש על פי דין או צו שיפוטי; (ג) בהסכמתכם המפורשת.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. עוגיות (Cookies)</h2>
                <p className="text-muted-foreground">
                  באתר נעשה שימוש בעוגיות תפעוליות וסטטיסטיות בלבד, לצורך תקינות האתר, שמירת העדפות נגישות וניתוח מצטבר של השימוש. ניתן לחסום עוגיות דרך הגדרות הדפדפן; חסימה עלולה לפגוע בתפקוד חלקים מהאתר.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">8. אבטחת מידע</h2>
                <p className="text-muted-foreground">
                  המשרד נוקט באמצעי אבטחה טכנולוגיים וארגוניים סבירים ומקובלים להגנה על המידע מפני גישה לא מורשית, אובדן, שינוי או חשיפה - בהתאם לתקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017 ולחובות המוגברות שבתיקון 13. עם זאת, לא ניתן להבטיח חסינות מוחלטת.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">9. אירוע אבטחה חמור</h2>
                <p className="text-muted-foreground">
                  בהתאם לתיקון 13, במקרה של אירוע אבטחה חמור המשרד ידווח לרשות להגנת הפרטיות, ובמקרים המתאימים גם ליחידים שמידעם נחשף - וזאת בתוך פרק הזמן הקבוע בחוק.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">10. תקופת שמירת המידע</h2>
                <p className="text-muted-foreground">
                  המידע יישמר כל עוד נדרש למטרות שלשמן נאסף, ובכפוף לחובות שמירת מסמכים החלות על עורכי דין ונוטריונים על פי דין וכללי לשכת עורכי הדין. לאחר מכן יימחק או יהפוך לאנונימי.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">11. זכויות הנושא במידע</h2>
                <p className="text-muted-foreground mb-3">
                  בהתאם לחוק הגנת הפרטיות ולתיקון 13, עומדות לכם הזכויות הבאות:
                </p>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">זכות עיון</strong> - לקבל מידע אודות הנתונים השמורים עליכם.</li>
                  <li><strong className="text-foreground">זכות תיקון</strong> - לבקש עדכון או תיקון מידע שגוי או לא מעודכן.</li>
                  <li><strong className="text-foreground">זכות מחיקה</strong> - לבקש מחיקת מידע, בכפוף לחובות שמירה על פי דין.</li>
                  <li><strong className="text-foreground">זכות חזרה מהסכמה</strong> - לבטל בכל עת הסכמה לקבלת דיוור מקצועי.</li>
                  <li><strong className="text-foreground">זכות פנייה לרשות</strong> - להגיש תלונה לרשות להגנת הפרטיות במשרד המשפטים.</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  למימוש הזכויות יש לפנות לדוא"ל: <a href="mailto:info@shiran-shoshani-law.co.il" className="text-accent hover:underline">info@shiran-shoshani-law.co.il</a>. המשרד יענה בתוך פרק הזמן הקבוע בחוק.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">12. קטינים</h2>
                <p className="text-muted-foreground">
                  האתר אינו מיועד לקטינים מתחת לגיל 18. ככל שנמסר מידע אודות קטין, יש לעשות זאת באמצעות אפוטרופוס חוקי בלבד.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">13. שינויים במדיניות</h2>
                <p className="text-muted-foreground">
                  המשרד רשאי לעדכן מדיניות זו מעת לעת. גרסה מעודכנת תפורסם בעמוד זה תוך ציון מועד העדכון. שימוש מתמשך באתר לאחר העדכון מהווה הסכמה לתנאים המעודכנים.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">14. הדין החל וסמכות שיפוט</h2>
                <p className="text-muted-foreground">
                  על מדיניות פרטיות זו יחולו דיני מדינת ישראל בלבד. סמכות השיפוט הבלעדית תהא לבתי המשפט המוסמכים במחוז דרום.
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
