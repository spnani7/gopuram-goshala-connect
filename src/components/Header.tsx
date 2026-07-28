import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";

export function Header() {
  const { t } = useI18n();
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/goshala", label: t("nav_goshala") },
    { to: "/gallery", label: t("nav_gallery") },
    { to: "/courses", label: t("nav_courses") },
    { to: "/products", label: t("nav_products") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-soft">
            <span className="text-lg">🐄</span>
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-foreground md:text-base">{t("brand")}</div>
            <div className="truncate text-[11px] text-muted-foreground">{t("tagline")}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-primary/10 text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="relative inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground shadow-soft transition hover:border-primary"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-secondary px-1 text-[11px] font-bold text-secondary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenu((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
            aria-label="Menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      {menu && (
        <div className="border-t border-border/60 bg-card/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 p-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenu(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent"
                activeProps={{ className: "bg-primary/10 text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}