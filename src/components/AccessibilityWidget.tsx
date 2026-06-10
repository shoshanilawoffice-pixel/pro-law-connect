import { useEffect, useState } from "react";
import {
  Accessibility,
  X,
  Plus,
  Minus,
  Contrast,
  MousePointerClick,
  Link as LinkIcon,
  Type,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";

type FontSize = "default" | "lg" | "xl";
type Contrast = "default" | "high";
type Motion = "default" | "reduced";
type Toggle = "off" | "on";

interface A11yState {
  font: FontSize;
  contrast: Contrast;
  motion: Motion;
  links: Toggle;
  readable: Toggle;
}

const DEFAULTS: A11yState = {
  font: "default",
  contrast: "default",
  motion: "default",
  links: "off",
  readable: "off",
};

const STORAGE_KEY = "a11y-settings-v1";

const applyToDom = (s: A11yState) => {
  const html = document.documentElement;
  if (s.font === "default") html.removeAttribute("data-a11y-font");
  else html.setAttribute("data-a11y-font", s.font);

  if (s.contrast === "default") html.removeAttribute("data-a11y-contrast");
  else html.setAttribute("data-a11y-contrast", s.contrast);

  if (s.motion === "default") html.removeAttribute("data-a11y-motion");
  else html.setAttribute("data-a11y-motion", s.motion);

  if (s.links === "off") html.removeAttribute("data-a11y-links");
  else html.setAttribute("data-a11y-links", s.links);

  if (s.readable === "off") html.removeAttribute("data-a11y-readable");
  else html.setAttribute("data-a11y-readable", s.readable);
};

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as A11yState;
        setState(parsed);
        applyToDom(parsed);
      }
    } catch {}
  }, []);

  const update = (patch: Partial<A11yState>) => {
    const next = { ...state, ...patch };
    setState(next);
    applyToDom(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const reset = () => {
    setState(DEFAULTS);
    applyToDom(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const incFont = () =>
    update({
      font:
        state.font === "default" ? "lg" : state.font === "lg" ? "xl" : "xl",
    });
  const decFont = () =>
    update({
      font:
        state.font === "xl" ? "lg" : state.font === "lg" ? "default" : "default",
    });

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="פתח תפריט נגישות"
        aria-haspopup="dialog"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-2 border-accent"
      >
        <Accessibility className="w-7 h-7" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="הגדרות נגישות"
          aria-modal="false"
          dir="rtl"
          className="fixed bottom-24 right-6 z-50 w-[320px] max-w-[calc(100vw-3rem)] bg-card border border-border rounded-xl shadow-elegant animate-fade-in overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <Accessibility className="w-5 h-5" />
              <h2 className="font-bold text-base">תפריט נגישות</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="סגור תפריט נגישות"
              className="p-1 hover:bg-white/10 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-3 max-h-[70vh] overflow-y-auto">
            {/* Font size */}
            <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-muted">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Type className="w-4 h-4" />
                גודל טקסט
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={decFont}
                  aria-label="הקטן טקסט"
                  className="w-8 h-8 rounded bg-card border border-border hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xs w-10 text-center font-semibold">
                  {state.font === "default" ? "100%" : state.font === "lg" ? "112%" : "125%"}
                </span>
                <button
                  onClick={incFont}
                  aria-label="הגדל טקסט"
                  className="w-8 h-8 rounded bg-card border border-border hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <ToggleRow
              icon={<Contrast className="w-4 h-4" />}
              label="ניגודיות גבוהה"
              active={state.contrast === "high"}
              onClick={() =>
                update({ contrast: state.contrast === "high" ? "default" : "high" })
              }
            />
            <ToggleRow
              icon={<MousePointerClick className="w-4 h-4" />}
              label="הפחתת אנימציות"
              active={state.motion === "reduced"}
              onClick={() =>
                update({ motion: state.motion === "reduced" ? "default" : "reduced" })
              }
            />
            <ToggleRow
              icon={<LinkIcon className="w-4 h-4" />}
              label="הדגשת קישורים"
              active={state.links === "on"}
              onClick={() =>
                update({ links: state.links === "on" ? "off" : "on" })
              }
            />
            <ToggleRow
              icon={<Type className="w-4 h-4" />}
              label="גופן קריא"
              active={state.readable === "on"}
              onClick={() =>
                update({ readable: state.readable === "on" ? "off" : "on" })
              }
            />

            <button
              onClick={reset}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              איפוס הגדרות
            </button>

            <Link
              to="/accessibility"
              onClick={() => setOpen(false)}
              className="block text-center text-xs text-accent hover:underline pt-1"
            >
              לקריאת הצהרת הנגישות המלאה
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const ToggleRow = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`w-full flex items-center justify-between gap-2 p-3 rounded-lg border transition-colors text-right ${
      active
        ? "bg-accent text-accent-foreground border-accent"
        : "bg-muted border-transparent hover:border-border"
    }`}
  >
    <span className="flex items-center gap-2 text-sm font-medium">
      {icon}
      {label}
    </span>
    <span
      className={`text-xs font-bold px-2 py-0.5 rounded ${
        active ? "bg-white/20" : "bg-card border border-border"
      }`}
    >
      {active ? "פעיל" : "כבוי"}
    </span>
  </button>
);

export default AccessibilityWidget;
