import { useI18n } from "@/lib/i18n";

export function Ticker() {
  const { t } = useI18n();
  const phrases = [t("ticker_1"), t("ticker_2"), t("ticker_3")];
  const loop = [...phrases, ...phrases, ...phrases, ...phrases];
  return (
    <div className="relative overflow-hidden border-y border-primary/20 bg-gradient-brand py-3 text-primary-foreground">
      <div className="ticker-track flex w-max gap-14 whitespace-nowrap text-sm font-semibold tracking-wide">
        {loop.map((p, i) => (
          <span key={i} className="flex items-center gap-14">
            <span>🕉️ {p}</span>
          </span>
        ))}
      </div>
    </div>
  );
}