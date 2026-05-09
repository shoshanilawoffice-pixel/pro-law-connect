# תוכנית עדכון האתר

## 1. פלטת צבעים בהירה (ללא זהב)

עדכון `src/index.css` ו-`tailwind.config.ts`:
- **רקע ראשי**: לבן/קרם בהיר מאוד (`background: 210 20% 99%`)
- **צבע ראשי (primary)**: כחול נייבי בהיר/בינוני במקום הכהה הנוכחי (`215 50% 35%`) — לכותרות, כפתורים ופוטר
- **משני (secondary)**: אפור-כחול בהיר (`210 20% 92%`)
- **accent**: כחול בהיר רענן (`210 70% 50%`) במקום הזהב
- **טקסט**: אפור כהה (`220 25% 20%`) על רקע בהיר
- **מסגרות/הפרדה**: אפור עדין

עדכון הטוקנים `--gold`, `--gold-light`, `--gold-dark` → ימופו לגווני כחול/accent כדי לא לשבור את כל הקומפוננטות שמשתמשות ב-`text-gold`, `bg-gold`, `shadow-gold`. כך נמנע שכתוב גורף ברחבי הקוד.
- `--cream` → לבן/אפור בהיר מאוד
- `--navy` נשאר ככחול אך בגוון בהיר יותר

עדכון גרדיאנטים: `--gradient-hero` יעבור לכחול בהיר עם לבן; `--gradient-gold` יהפוך לגרדיאנט כחול-טורקיז עדין.

## 2. מעבר ל-LTR

- `src/index.css`: שינוי `html { direction: rtl }` → `direction: ltr`
- `index.html`: עדכון `<html lang="he" dir="rtl">` → `dir="ltr"` (השפה תישאר עברית)
- בדיקה ויישור של הקומפוננטות שמסתמכות על `text-right` / `mr-` / `pr-` — החלפה ל-`text-left` / `ml-` / `pl-` במקומות הרלוונטיים (Header, Footer, ContactSection, PracticeAreaPage, FAQ).
- הלוגו יישאר בצד שמאל, פריטי הניווט מימין לו, וכפתור CTA בקצה הימני.
- עדכון זיכרון הפרויקט (`mem://style/visual-identity`) כדי לשקף את ה-LTR והפלטה החדשה.

## 3. דפים חדשים

### 3.1 דף עמותה (`/association`)
- קובץ חדש: `src/pages/AssociationPage.tsx`
- מבנה: Header + Hero עם כותרת "עמותה" + אזור תוכן ריק עם placeholder ("תוכן יתווסף בהמשך") + Footer
- Helmet עם title/description בסיסיים

### 3.2 הצהרת פרטיות + נגישות (`/privacy`, `/accessibility`)
- `src/pages/PrivacyPolicyPage.tsx` — נוסח סטנדרטי בעברית בהתאם לחוק הגנת הפרטיות (איסוף מידע, שימוש, cookies, יצירת קשר עם המשרד)
- `src/pages/AccessibilityStatementPage.tsx` — הצהרת נגישות לפי תקנות שוויון זכויות לאנשים עם מוגבלות (תקן ישראלי 5568, רמה AA), פרטי רכז נגישות (שם המשרד + טלפון 050-6421322), אמצעי הנגשה זמינים, ופרטי דיווח על בעיות.

### 3.3 הוספת המסלולים ב-`src/App.tsx`
```text
/association          → AssociationPage
/privacy              → PrivacyPolicyPage
/accessibility        → AccessibilityStatementPage
```

### 3.4 קישורים בפוטר
הוספת מקטע "מידע" עם קישורים ל-3 הדפים החדשים.

## 4. רכיב נגישות מובנה

קומפוננטה חדשה: `src/components/AccessibilityWidget.tsx` — כפתור עגול קבוע (floating) בפינה התחתונה השמאלית עם אייקון נגישות (`Accessibility` מ-lucide-react). בלחיצה נפתחת פאנל עם הבקרות:

- **גודל טקסט**: הגדלה/הקטנה (כפתורי A+/A−) — משנה `font-size` של `<html>` ב-CSS variable
- **ניגודיות גבוהה**: toggle שמוסיף class `high-contrast` ל-`<html>` (שחור/לבן/צהוב)
- **שינוי צבעים** / מצב גווני אפור: class `grayscale`
- **הדגשת קישורים**: מסגרת בולטת מסביב לכל `<a>`
- **הגדלת סמן**: cursor מותאם
- **עצירת אנימציות**: `prefers-reduced-motion` ידני
- **פונט קריא**: החלפה לפונט בסיסי יותר
- **איפוס**

המצב נשמר ב-`localStorage` כדי שיישמר בין דפים. הסגנונות יוגדרו ב-`index.css` תחת classes כמו `.a11y-high-contrast`, `.a11y-large-text`, וכו'. שילוב ב-`App.tsx` כך שיופיע בכל הדפים. ה-widget תמיד בעל `aria-label`, ניתן לפתיחה/סגירה במקלדת, ועומד ב-WCAG AA.

עדכון `Helmet` בכל הדפים כך שיכלול קישור `link rel="alternate"` להצהרת הנגישות, וקישור גלוי בפוטר.

## 5. פרטים טכניים

- אין צורך בחבילות חדשות (lucide-react כבר קיים)
- שמירה על שימוש ב-semantic tokens — אין צבעים ישירים ברכיבים
- בדיקה שכל הכפתורים, ה-FloatingButtons, וה-PracticeAreaPage עדיין נראים תקין לאחר החלפת הזהב לכחול
- בדיקת ניגודיות (≥4.5:1) על הצבעים החדשים

## קבצים שיושפעו
- ערוך: `src/index.css`, `tailwind.config.ts`, `index.html`, `src/App.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/FloatingButtons.tsx`, `src/components/sections/*.tsx`, `src/pages/Index.tsx`, `src/pages/PracticeAreaPage.tsx`
- חדש: `src/pages/AssociationPage.tsx`, `src/pages/PrivacyPolicyPage.tsx`, `src/pages/AccessibilityStatementPage.tsx`, `src/components/AccessibilityWidget.tsx`
- זיכרון: עדכון `mem://style/visual-identity` ו-`mem://index.md` (RTL → LTR, ללא זהב)
