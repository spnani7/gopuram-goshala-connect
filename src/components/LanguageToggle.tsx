import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function LanguageToggle({ floating = false }: { floating?: boolean }) {
  const { lang, setLang } = useI18n();
  const btn = (
    <div className="flex items-center gap-1 rounded-full border border-primary/20 bg-card/95 p-1 shadow-soft backdrop-blur">
      <Languages className="ml-2 h-4 w-4 text-primary" aria-hidden />
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition ${lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("te")}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition ${lang === "te" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}
      >
        తె
      </button>
    </div>
  );
  if (!floating) return btn;
  return <div className="fixed bottom-6 right-6 z-50">{btn}</div>;
}