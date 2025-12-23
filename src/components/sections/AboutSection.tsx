import { CheckCircle2, Scale, Target, Handshake } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Scale,
      title: "מקצועיות",
      description: "ידע משפטי מעמיק וניסיון רב שנים בכל תחומי המשפט",
    },
    {
      icon: Target,
      title: "מחויבות",
      description: "מסירות מוחלטת להשגת התוצאות הטובות ביותר עבור לקוחותינו",
    },
    {
      icon: Handshake,
      title: "יושרה",
      description: "שקיפות מלאה ואתיקה מקצועית בכל היבט של עבודתנו",
    },
  ];

  const highlights = [
    "ניסיון של למעלה מ-25 שנה בייצוג משפטי",
    "צוות מומחים בכל תחומי המשפט",
    "מעל 5,000 תיקים מוצלחים",
    "ליווי אישי ומקצועי לאורך כל הדרך",
    "זמינות מלאה ללקוחותינו",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold font-semibold text-sm tracking-wide mb-4 block">
              אודות המשרד
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              משרד עורכי דין
              <br />
              <span className="text-gold">עם מסורת של הצלחה</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              משרד כהן ושות׳ הוקם בשנת 1998 ומאז הפך לאחד ממשרדי עורכי הדין המובילים בישראל. אנו מתמחים במתן ייעוץ וייצוג משפטי ברמה הגבוהה ביותר, תוך שמירה על ערכים של מקצועיות, יושרה ומחויבות מלאה ללקוחותינו.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              הצוות שלנו מורכב מעורכי דין מנוסים ומוכשרים, בוגרי בתי הספר למשפטים המובילים בארץ, עם התמחויות מגוונות המאפשרות לנו לספק מענה מקיף לכל צורך משפטי.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
