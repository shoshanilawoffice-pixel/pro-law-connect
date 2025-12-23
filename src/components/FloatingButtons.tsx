import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/97231234567?text=שלום, אשמח לקבל ייעוץ משפטי"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="צור קשר בוואטסאפ"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
        <span className="absolute left-full mr-3 px-3 py-1.5 bg-primary text-cream text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          וואטסאפ
        </span>
      </a>

      {/* Phone Button (visible on mobile) */}
      <a
        href="tel:+972-3-1234567"
        className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group md:hidden"
        aria-label="התקשר עכשיו"
      >
        <Phone className="w-6 h-6 text-primary" />
      </a>
    </div>
  );
};

export default FloatingButtons;
