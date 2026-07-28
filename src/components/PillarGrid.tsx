import { Link } from "@tanstack/react-router";
import { BookOpen, Camera, Home, Leaf, ShoppingBag, Sprout, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function PillarGrid() {
  const { t } = useI18n();
  const pillars = [
    { to: "/goshala" as const, label: t("nav_goshala"), desc: t("pillar_goshala_desc"), Icon: Home, tint: "from-primary/15 to-primary/5" },
    { to: "/gallery" as const, label: t("nav_gallery"), desc: t("pillar_gallery_desc"), Icon: Camera, tint: "from-secondary/25 to-secondary/5" },
    { to: "/courses" as const, label: t("nav_courses"), desc: t("pillar_courses_desc"), Icon: BookOpen, tint: "from-primary/15 to-primary/5" },
    { to: "/products" as const, label: t("nav_products"), desc: t("pillar_products_desc"), Icon: ShoppingBag, tint: "from-secondary/25 to-secondary/5", search: undefined },
    { to: "/products" as const, label: t("nav_organic"), desc: t("pillar_organic_desc"), Icon: Leaf, tint: "from-primary/15 to-primary/5", search: { category: "organic" as const } },
    { to: "/products" as const, label: t("nav_agriculture"), desc: t("pillar_agri_desc"), Icon: Sprout, tint: "from-secondary/25 to-secondary/5", search: { category: "agriculture" as const } },
  ];

  return (
    <section id="pillars" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="mb-12 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">— Six Pillars</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{t("pillars_title")}</h2>
        <p className="mt-3 text-muted-foreground">{t("pillars_sub")}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Link
            key={i}
            to={p.to}
            search={"search" in p ? (p.search as never) : undefined}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.tint} opacity-70`} />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-card shadow-soft ring-1 ring-border">
                <p.Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-foreground">{p.label}</h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}