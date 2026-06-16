import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "אודות" },
  { id: "services", label: "שירותי המשרד" },
  { id: "practice", label: "תחומי עיסוק" },
  { id: "articles", label: "מאמרים" },
  { id: "contact", label: "יצירת קשר" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo — right */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center font-serif text-accent text-lg tracking-tight">
              ש.ש
            </div>
            <div className="flex flex-col text-right leading-tight">
              <span className="text-foreground font-bold text-lg">שירן שושני</span>
              <span className="text-muted-foreground text-[11px] tracking-wider">משרד עורכי דין</span>
            </div>
          </button>

          {/* Desktop nav — left */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-foreground/80 hover:text-accent font-medium text-[15px] transition-colors relative after:absolute after:bottom-[-6px] after:right-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="תפריט"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden py-4 border-t border-border flex flex-col gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-right px-4 py-3 text-foreground/85 hover:text-accent hover:bg-muted rounded-md transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
