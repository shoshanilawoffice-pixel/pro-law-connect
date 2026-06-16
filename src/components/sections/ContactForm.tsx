import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "שדות חסרים", description: "נא למלא שם וטלפון", variant: "destructive" });
      return;
    }
    toast({ title: "הפנייה התקבלה", description: "ניצור איתך קשר בהקדם" });
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <form
      onSubmit={submit}
      className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-5xl mx-auto"
    >
      <input
        type="text"
        placeholder="שם:"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="px-4 py-3 bg-background/60 border border-foreground/15 rounded-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent transition-colors"
      />
      <input
        type="email"
        placeholder="אימייל:"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="px-4 py-3 bg-background/60 border border-foreground/15 rounded-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent transition-colors"
      />
      <input
        type="tel"
        placeholder="טלפון:"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="px-4 py-3 bg-background/60 border border-foreground/15 rounded-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/85 transition-colors"
      >
        שליחה
      </button>
    </form>
  );
};

export default ContactForm;
