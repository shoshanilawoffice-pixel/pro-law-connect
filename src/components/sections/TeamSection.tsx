import { Mail, Phone } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "עו״ד יעקב כהן",
      role: "שותף מייסד",
      specialization: "דיני משפחה וליטיגציה",
      description:
        "למעלה מ-30 שנות ניסיון בתחום דיני המשפחה. בוגר הפקולטה למשפטים באוניברסיטת תל אביב.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "עו״ד מיכל לוי",
      role: "שותפה בכירה",
      specialization: "נדל״ן ומקרקעין",
      description:
        "מומחית בעסקאות נדל״ן מורכבות ויזמות. בוגרת הפקולטה למשפטים באוניברסיטה העברית.",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "עו״ד דניאל אברהם",
      role: "שותף",
      specialization: "ליטיגציה מסחרית",
      description:
        "מתמחה בסכסוכים עסקיים ותביעות מורכבות. בוגר הפקולטה למשפטים באוניברסיטת בר-אילן.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "עו״ד שרה גולדברג",
      role: "עורכת דין בכירה",
      specialization: "דיני עבודה",
      description:
        "מומחית בזכויות עובדים וייצוג בבתי הדין לעבודה. בוגרת המרכז הבינתחומי הרצליה.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm tracking-wide mb-4 block">
            הצוות שלנו
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            צוות עורכי הדין
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            צוות מומחים מנוסים ומסורים, המחויבים להעניק לכם את הייצוג המשפטי הטוב ביותר.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border shadow-card overflow-hidden hover:shadow-elegant transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Contact Icons on Hover */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-light transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-light transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-gold font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-3">
                  {member.specialization}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
