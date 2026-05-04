import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";

const PracticeAreasSection = () => {
  return (
    <section id="practice-areas" className="py-24 bg-muted/30 scroll-mt-24">
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
          {practiceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Link
                key={area.slug}
                to={`/practice-areas/${area.slug}`}
                className="group p-8 bg-card rounded-xl border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 flex flex-col"
                aria-label={`קרא עוד על ${area.title}`}
              >
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                  {area.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-gold font-medium text-sm group-hover:gap-2 transition-all">
                  קרא עוד
                  <ArrowLeft className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
