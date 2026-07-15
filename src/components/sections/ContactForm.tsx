import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { site } from "@/config/site";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [spamConsent, setSpamConsent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "שדות חסרים", description: "נא למלא שם וטלפון", variant: "destructive" });
      return;
    }
    if (!privacyConsent) {
      toast({
        title: "נדרש אישור",
        description: "כדי לשלוח את הטופס יש לאשר את מדיניות הפרטיות",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    try {
      // שליחה ל-Netlify Forms — עובד באתר החי (Netlify); בפיתוח מקומי רק מציג אישור
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...form,
          privacy_consent: "מאשר/ת - קראתי והסכמתי למדיניות הפרטיות",
          spam_consent: spamConsent
            ? "כן - מעוניין/ת לקבל עדכונים וחומרים מקצועיים"
            : "לא",
        }),
      });
      toast({ title: "הפנייה התקבלה", description: "ניצור איתך קשר בהקדם" });
      setForm({ name: "", email: "", phone: "", message: "" });
      setPrivacyConsent(false);
      setSpamConsent(false);
    } catch {
      toast({
        title: "שגיאה בשליחה",
        description: `ניתן ליצור קשר ישירות בטלפון ${site.mobile}`,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "px-4 py-3 bg-background/60 border border-foreground/15 rounded-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent transition-colors";

  return (
    <form
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-5xl mx-auto"
    >
      {/* שדות נסתרים עבור Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          לא למילוי: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label className="sr-only" htmlFor="contact-name">שם</label>
      <input
        id="contact-name"
        type="text"
        name="name"
        placeholder="שם:"
        autoComplete="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputCls}
      />
      <label className="sr-only" htmlFor="contact-email">אימייל</label>
      <input
        id="contact-email"
        type="email"
        name="email"
        placeholder="אימייל:"
        autoComplete="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={inputCls}
      />
      <label className="sr-only" htmlFor="contact-phone">טלפון</label>
      <input
        id="contact-phone"
        type="tel"
        name="phone"
        placeholder="טלפון:"
        autoComplete="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputCls}
      />
      <button
        type="submit"
        disabled={sending}
        className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/85 transition-colors disabled:opacity-60"
      >
        {sending ? "שולח..." : "שליחה"}
      </button>

      <label className="sr-only" htmlFor="contact-message">הודעה</label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="הודעה (לא חובה):"
        rows={3}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${inputCls} md:col-span-4 resize-y`}
      />

      {/* אישור מדיניות פרטיות — חובה (תיקון 13 לחוק הגנת הפרטיות) */}
      <label
        htmlFor="contact-privacy-consent"
        className="md:col-span-4 flex items-start gap-2 text-sm text-foreground/80 cursor-pointer"
      >
        <input
          id="contact-privacy-consent"
          type="checkbox"
          name="privacy_consent"
          required
          checked={privacyConsent}
          onChange={(e) => setPrivacyConsent(e.target.checked)}
          className="mt-1 w-4 h-4 accent-[hsl(var(--accent))] shrink-0"
        />
        <span>
          אני מאשר/ת שקראתי והסכמתי לתנאי{" "}
          <Link to="/privacy" className="text-accent font-semibold hover:underline">
            מדיניות הפרטיות
          </Link>{" "}
          של האתר <span className="text-destructive">*</span>
        </span>
      </label>

      {/* הסכמה לדיוור — אופציונלי ולא מסומן מראש (חוק הספאם, תיקון 40 לחוק התקשורת) */}
      <label
        htmlFor="contact-spam-consent"
        className="md:col-span-4 flex items-start gap-2 text-sm text-foreground/80 cursor-pointer"
      >
        <input
          id="contact-spam-consent"
          type="checkbox"
          name="spam_consent"
          checked={spamConsent}
          onChange={(e) => setSpamConsent(e.target.checked)}
          className="mt-1 w-4 h-4 accent-[hsl(var(--accent))] shrink-0"
        />
        <span>
          אני מעוניין/ת לקבל עדכונים, מאמרים, מנשרים וחומרים מקצועיים מהמשרד ומהעמותה
          במייל או בוואטסאפ (לא חובה)
        </span>
      </label>
    </form>
  );
};

export default ContactForm;
