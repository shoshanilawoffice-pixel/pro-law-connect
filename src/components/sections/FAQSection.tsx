import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "מהו עלות הייעוץ הראשוני?",
      answer:
        "אנו מציעים פגישת ייעוץ ראשונית ללא עלות וללא התחייבות. בפגישה זו נבחן את המקרה שלכם ונציג את הדרכים האפשריות לפעולה.",
    },
    {
      question: "כמה זמן לוקח לטפל בתיק?",
      answer:
        "משך הטיפול משתנה בהתאם לסוג התיק ומורכבותו. בפגישה הראשונה נוכל לתת לכם הערכת זמנים מדויקת יותר. אנו מחויבים לעדכן אתכם באופן שוטף לאורך כל ההליך.",
    },
    {
      question: "האם אתם מטפלים בתיקים מחוץ לתל אביב?",
      answer:
        "בהחלט. אנו מייצגים לקוחות מכל רחבי הארץ ומופיעים בכל בתי המשפט בישראל. עבור לקוחות מחוץ לאזור המרכז, אנו מציעים גם פגישות בווידאו.",
    },
    {
      question: "מהם שכר הטרחה במשרד?",
      answer:
        "שכר הטרחה נקבע בהתאם לסוג התיק ומורכבותו. אנו מציעים מספר מודלים: שכר טרחה קבוע, שכר לפי שעה, או אחוז מהתוצאה (בתיקים המתאימים). הכל בשקיפות מלאה ובהסכמה מראש.",
    },
    {
      question: "האם ניתן להתייעץ בטלפון או בזום?",
      answer:
        "כן, אנו מציעים ייעוץ טלפוני ופגישות זום ללקוחות שמעדיפים זאת או שנמצאים בריחוק גיאוגרפי. איכות השירות והמקצועיות נשמרים גם בפגישות מרחוק.",
    },
    {
      question: "כיצד אוכל לעקוב אחרי התקדמות התיק שלי?",
      answer:
        "אנו מקפידים על תקשורת שוטפת עם לקוחותינו. תקבלו עדכונים באופן קבוע על התקדמות התיק, וכמובן שתוכלו ליצור קשר עם עורך הדין שלכם בכל עת.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wide mb-4 block">
              שאלות נפוצות
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              יש לכם שאלות?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              ריכזנו עבורכם תשובות לשאלות הנפוצות ביותר. לא מצאתם תשובה? צרו איתנו קשר.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card data-[state=open]:shadow-elegant transition-shadow duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-gold py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
