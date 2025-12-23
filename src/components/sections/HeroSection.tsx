import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Award, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Shield, value: "25+", label: "שנות ניסיון" },
    { icon: Award, value: "5,000+", label: "תיקים מוצלחים" },
    { icon: Users, value: "98%", label: "שביעות רצון" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-hero-gradient pt-20 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-10 w-px h-40 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-20 left-20 w-20 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">משרד עורכי דין מוביל בישראל</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-tight mb-6 animate-fade-in-up">
            ייצוג משפטי
            <br />
            <span className="text-gradient-gold">ברמה הגבוהה ביותר</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-delayed">
            משרד כהן ושות׳ מספק ייעוץ וייצוג משפטי מקצועי ללקוחות פרטיים ועסקיים, עם מחויבות מוחלטת לשמירה על האינטרסים שלכם.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-delayed">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              קבעו פגישת ייעוץ
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}>
              למידע נוסף
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto animate-fade-in-delayed">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 mb-3">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-cream mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-cream/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
