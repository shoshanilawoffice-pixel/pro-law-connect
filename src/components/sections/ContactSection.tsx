import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Printer, ExternalLink } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "נא להזין שם מלא").max(100, "שם ארוך מדי"),
  phone: z.string().regex(/^0\d{8,9}$/, "נא להזין מספר טלפון תקין"),
  email: z.string().email("נא להזין כתובת אימייל תקינה").max(255, "אימייל ארוך מדי"),
  subject: z.string().min(2, "נא להזין נושא").max(200, "נושא ארוך מדי"),
  message: z.string().min(10, "נא להזין הודעה של לפחות 10 תווים").max(1000, "הודעה ארוכה מדי"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      contactSchema.parse(formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "הפנייה נשלחה בהצלחה!",
        description: "נציג מטעמנו יחזור אליכם בהקדם.",
      });
      
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "טלפון",
      value: "050-6421322",
      href: "tel:+972-50-6421322",
    },
    {
      icon: Printer,
      title: "פקס",
      value: "08-8695007",
      href: null,
    },
    {
      icon: Mail,
      title: "אימייל",
      value: "info@shiran-shoshani-law.co.il",
      href: "mailto:info@shiran-shoshani-law.co.il",
    },
    {
      icon: MapPin,
      title: "כתובת",
      value: "שדרות התמרים 4, אילת",
      href: "https://maps.google.com/?q=שדרות+התמרים+4,+אילת",
    },
    {
      icon: Clock,
      title: "שעות פעילות",
      value: "א׳-ה׳ 09:00-18:00",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm tracking-wide mb-4 block">
            צור קשר
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            נשמח לשמוע מכם
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            השאירו פרטים ונחזור אליכם בהקדם, או צרו קשר ישירות באחת הדרכים הבאות.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-8 shadow-card"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    שם מלא *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ישראל ישראלי"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    טלפון *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="050-1234567"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    אימייל *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    נושא הפנייה *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="למשל: ייעוץ בנושא גירושין"
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  הודעה *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ספרו לנו על הנושא שלכם..."
                  rows={5}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? "שולח..." : "שלח פנייה"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-foreground font-medium hover:text-gold transition-colors inline-flex items-center gap-1"
                    >
                      {info.value}
                      {info.title === "כתובת" && (
                        <ExternalLink className="w-3 h-3 text-muted-foreground" />
                      )}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{info.value}</p>
                  )}
                  {info.title === "כתובת" && (
                    <a
                      href={info.href || ""}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gold hover:underline mt-1 inline-block"
                    >
                      הצג בגוגל מפות
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/972506421322?text=שלום, אשמח לקבל ייעוץ משפטי"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="whatsapp" size="lg" className="w-full">
                <MessageCircle className="w-5 h-5" />
                שלחו הודעה בוואטסאפ
              </Button>
            </a>

            {/* Quick Call Button (Mobile) */}
            <a href="tel:+972-50-6421322" className="block md:hidden">
              <Button variant="phone" size="lg" className="w-full">
                <Phone className="w-5 h-5" />
                חייגו עכשיו
              </Button>
            </a>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src="https://maps.google.com/maps?q=Hatmarim+4+Eilat&hl=iw&t=m&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מיקום המשרד"
              />
            </div>
            <a
              href="https://maps.google.com/?q=שדרות+התמרים+4,+אילת"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-card rounded-xl border border-border text-gold font-medium hover:bg-gold/5 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              הצג בגוגל מפות
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
