import { Users, FileText, Handshake, MessagesSquare, Gavel, Scale } from "lucide-react";

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      icon: Users,
      title: "דיני משפחה וגירושין",
      description:
        "ייצוג בהליכי גירושין, יישוב סכסוכים, חלוקת רכוש ואיזון משאבים, מזונות אישה וילדים, משמורת וזמני שהות, אחריות הורית משותפת, הסכמי ממון וגירושין, התרת נישואין, ידועים בציבור, צווי הרחקה והגנה.",
    },
    {
      icon: FileText,
      title: "צוואות וירושות",
      description:
        "עריכת צוואות לרבות צוואות הדדיות וצוואות נוטריוניות, ייעוץ וליווי בדיני ירושה, ניהול עיזבונות, צווי ירושה וצווי קיום צוואה, ייצוג בהתנגדויות לצוואה.",
    },
    {
      icon: Handshake,
      title: "הסכמים",
      description:
        "עריכת הסכמי ממון לפני ואחרי נישואין, הסכמי גירושין, הסכמי חיים משותפים לידועים בציבור, הסכמי הורות והסכמי זוגיות - מתוך התאמה אישית לצרכי הלקוח.",
    },
    {
      icon: MessagesSquare,
      title: "גישור",
      description:
        "ניהול הליכי גישור לפתרון סכסוכים מחוץ לכותלי בית המשפט, גישור זוגי לחיזוק הקשר ובניית אמון, ליווי בהליכי שלום בית והגעה להסכמות בכבוד הדדי.",
    },
    {
      icon: Gavel,
      title: "הוצאה לפועל",
      description:
        "ייצוג זוכים וחייבים בהליכי הוצאה לפועל, גביית חובות, שטרות, משכנתאות ומזונות, ניהול הליכי אכיפה ועיקולים, וטיפול בהסדרי חוב.",
    },
    {
      icon: Scale,
      title: "חדלות פירעון",
      description:
        "ליווי יחידים ונושים בהליכי חדלות פירעון, צווי פתיחת הליכים, הגשת דוחות שוטפים, ייצוג בחקירות נאמן וגיבוש הסדרי חוב מול הנושים.",
    },
  ];

  return (
    <section id="practice-areas" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm tracking-wide mb-4 block">
            תחומי התמחות
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            מומחיות בתחומי המשפט
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            המשרד מספק שירותים משפטיים מקיפים, שירותי נוטריון וגישור, במגוון תחומים מרכזיים - בליווי אישי ומקצועי לאורך כל הדרך.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <area.icon className="w-7 h-7 text-gold group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
