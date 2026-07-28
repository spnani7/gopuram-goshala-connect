import heroImg from "@/assets/hero-goshala.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        <img
          src={heroImg}
          alt="Nellore Ranganatha Temple gopuram merging into Lord Ranganatha with sacred cows"
          width={1920}
          height={1088}
          className="h-[62vh] min-h-[420px] w-full object-cover md:h-[78vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {t("hero_kicker")}
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
                {t("hero_title")}
              </h1>
              <p className="mt-5 max-w-xl text-base text-foreground/75 md:text-lg">{t("hero_sub")}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#pillars"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
                >
                  <HeartHandshake className="h-4 w-4" />
                  {t("cta_donate")}
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:border-primary hover:text-primary"
                >
                  {t("cta_shop")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}