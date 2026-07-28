import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useCart, inr } from "@/lib/cart";
import { productDesc, productName, productUnit, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { lang, t } = useI18n();
  const { detailed, add, setQty, setOpen } = useCart();
  const inCart = detailed.find((x) => x.product.id === product.id)?.qty ?? 0;
  const oos = product.stock <= 0;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow">
      <div className="relative grid h-40 place-items-center overflow-hidden bg-gradient-soft text-6xl">
        <span aria-hidden>{product.image}</span>
        <div className="absolute right-3 top-3 rounded-full bg-card/90 px-2 py-1 text-[10px] font-semibold text-muted-foreground shadow-soft">
          {product.stock} {t("in_stock")}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-foreground">{productName(product, lang)}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{productDesc(product, lang)}</p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-lg font-bold text-foreground">{inr(product.price)}</div>
            <div className="text-[11px] text-muted-foreground">{productUnit(product, lang)}</div>
          </div>
          {inCart === 0 ? (
            <button
              disabled={oos}
              onClick={() => { add(product.id); setOpen(true); }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              {oos ? t("out_of_stock") : t("add_to_cart")}
            </button>
          ) : (
            <div className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-card p-1 shadow-soft">
              <button onClick={() => setQty(product.id, inCart - 1)} className="grid h-7 w-7 place-items-center rounded-full hover:bg-accent">
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="min-w-6 text-center text-sm font-semibold">{inCart}</span>
              <button
                onClick={() => setQty(product.id, Math.min(product.stock, inCart + 1))}
                className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground hover:brightness-110"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}