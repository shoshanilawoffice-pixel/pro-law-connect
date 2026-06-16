import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";
import heroImage from "@/assets/shiran-hero.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-20 bg-background overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
        {/* Photo — visually on the LEFT in RTL, comes second in DOM so content reads first */}
        <div className="relative w-full lg:w-7/12 h-[55vh] lg:h-auto lg:min-h-[calc(100vh-5rem)] order-1 lg:order-2">
          <img
            src={heroImage}
            alt="עו״ד שירן שושני"
            className="absolute inset-0 w-full h-full object-cover object-center"
            width={1600}
            height={1280}
          />
          {/* Soft cream blend on the RIGHT edge of the photo to merge with content */}
          <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/10 lg:to-transparent" />
        </div>

        {/* Content — visually on the RIGHT in RTL */}
        <div className="relative w-full lg:w-5/12 flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24 order-2 lg:order-1 bg-background z-10">
          <div className="w-full max-w-xl mr-auto animate-fade-in-up">
            {/* Monogram */}
            <div className="mb-8 flex items-center gap-4 justify-end">
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  משרד עורכי דין
                </div>
                <div className="text-sm font-medium text-foreground">
                  שירן שושני
                </div>
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center shrink-0">
                <span className="font-serif text-xl text-accent">ש.ש</span>
              </div>
            </div>

            <div className="h-px w-16 bg-accent mb-6 mr-0" />
            <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4">
              ייצוג · נוטריון · גישור
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-foreground leading-[1.1] mb-6 tracking-tight">
              משפט אישי.
              <br />
              <span className="font-serif italic text-accent">
                ליווי בגובה העיניים.
              </span>
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
              עו״ד שירן שושני מלווה לקוחות פרטיים ועסקיים בדיני משפחה, נדל״ן,
              ליטיגציה מסחרית, שירותי נוטריון וגישור — במקצועיות, בדיסקרטיות
              ובמחויבות מלאה לאינטרסים שלכם.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="xl"
                onClick={() => scrollTo("contact")}
                className="bg-foreground text-background hover:bg-accent hover:text-accent-foreground rounded-none px-8 group"
              >
                לתיאום שיחת היכרות
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <a
                href="tel:+972-50-6421322"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                050-6421322
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-x-6 gap-y-3 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              <span>חברה בלשכת עורכי הדין</span>
              <span className="text-accent">•</span>
              <span>נוטריון מוסמך</span>
              <span className="text-accent">•</span>
              <span>מגשרת מוסמכת</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
