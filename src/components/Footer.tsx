import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-primary-foreground">🐄</div>
            <div>
              <div className="font-bold text-foreground">{t("brand")}</div>
              <div className="text-xs text-muted-foreground">{t("tagline")}</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("hero_sub")}</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Nellore, Andhra Pradesh</div>
          <p className="mt-2 text-sm text-muted-foreground">Sri Ranganatha Swamy Temple Road<br/>Nellore, AP 524001, India</p>
          <p className="mt-2 text-sm text-muted-foreground">seva@sriranganathagoshala.org</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Seva Timings</div>
          <p className="mt-2 text-sm text-muted-foreground">Daily 5:30 AM — 8:30 PM</p>
          <p className="mt-2 text-sm text-muted-foreground">Milk delivery: 5 AM & 5 PM</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {t("brand")}. {t("footer_rights")}
      </div>
    </footer>
  );
}