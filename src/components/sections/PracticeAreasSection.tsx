import { Users, Briefcase, Building2, Scale, FileText, Gavel } from "lucide-react";

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      icon: Users,
      title: "דיני משפחה וגירושין",
      description:
        "ייצוג בהליכי גירושין, משמורת ילדים, חלוקת רכוש, הסכמי ממון וכל עניין הקשור לדיני המשפחה.",
    },
    {
      icon: Briefcase,
      title: "ליטיגציה מסחרית",
      description:
        "ייצוג בסכסוכים עסקיים, תביעות חוזיות, הפרת התחייבויות ומחלוקות מסחריות מורכבות.",
    },
    {
      icon: Building2,
      title: "נדל״ן ומקרקעין",
      description:
        "ליווי עסקאות מכר ורכישה, יזמות נדל״ן, תמ״א 38, התחדשות עירונית וסכסוכי שכנים.",
    },
    {
      icon: Scale,
      title: "דיני עבודה",
      description:
        "ייצוג עובדים ומעסיקים בסכסוכי עבודה, פיטורין, הטרדה מינית וזכויות סוציאליות.",
    },
    {
      icon: FileText,
      title: "דיני חברות",
      description:
        "ייעוץ לחברות בהקמה, מיזוגים ורכישות, הסכמי שותפות, ממשל תאגידי וליווי שוטף.",
    },
    {
      icon: Gavel,
      title: "הוצאה לפועל",
      description:
        "ייצוג נושים וחייבים בהליכי הוצאה לפועל, עיקולים, פשיטות רגל והסדרי חוב.",
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
            מומחיות בכל תחומי המשפט
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            אנו מספקים שירותים משפטיים מקיפים במגוון רחב של תחומים, עם צוות מומחים המתמחה בכל אחד מהם.
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
