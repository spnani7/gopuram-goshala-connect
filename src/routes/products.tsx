import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { useI18n } from "@/lib/i18n";
import { PRODUCTS, type Category } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const searchSchema = z.object({
  category: z.enum(["all", "dairy", "organic", "agriculture"]).optional(),
});

export const Route = createFileRoute("/products")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Goshala Store — A2 Milk, Ghee, Organic Food | Sri Ranganatha Goshala" },
      { name: "description", content: "Shop A2 milk, bilona ghee, panchagavya, organic groceries and natural farming inputs from Sri Ranganatha Goshala." },
      { property: "og:title", content: "Goshala Store" },
      { property: "og:description", content: "Shop A2 milk, bilona ghee, panchagavya, organic groceries and natural farming inputs." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t } = useI18n();
  const { category } = Route.useSearch();
  const nav = useNavigate({ from: Route.fullPath });
  const active: "all" | Category = (category as "all" | Category) ?? "all";
  const items = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  const chips: Array<{ key: "all" | Category; label: string }> = [
    { key: "all", label: t("filter_all") },
    { key: "dairy", label: t("filter_dairy") },
    { key: "organic", label: t("filter_organic") },
    { key: "agriculture", label: t("filter_agri") },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">— {t("nav_products")}</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{t("products_title")}</h1>
          <p className="mt-3 text-muted-foreground">{t("products_sub")}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c.key}
              onClick={() => nav({ search: c.key === "all" ? {} : { category: c.key } })}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${active === c.key ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card text-foreground/70 hover:border-primary/40"}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p) => (<ProductCard key={p.id} product={p} />))}
      </div>
    </div>
  );
}