import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart, inr } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { productName } from "@/lib/products";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export function CartDrawer() {
  const { open, setOpen, detailed, setQty, remove, subtotal, tax, shipping, total } = useCart();
  const { t, lang } = useI18n();
  const navigate = useNavigate();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border p-6">
          <SheetTitle className="flex items-center gap-2 text-lg">
            <ShoppingBag className="h-5 w-5 text-primary" />
            {t("cart_title")}
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto p-6">
          {detailed.length === 0 ? (
            <div className="grid h-full place-items-center text-center text-sm text-muted-foreground">
              <div><div className="mb-3 text-4xl">🛒</div>{t("cart_empty")}</div>
            </div>
          ) : (
            <ul className="space-y-3">
              {detailed.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3 rounded-xl border border-border bg-card p-3">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-gradient-soft text-3xl">{product.image}</div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-foreground">{productName(product, lang)}</div>
                    <div className="text-xs text-muted-foreground">{inr(product.price)}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center gap-1 rounded-full border border-border p-0.5">
                        <button onClick={() => setQty(product.id, qty - 1)} className="grid h-6 w-6 place-items-center rounded-full hover:bg-accent"><Minus className="h-3 w-3" /></button>
                        <span className="min-w-5 text-center text-xs font-semibold">{qty}</span>
                        <button onClick={() => setQty(product.id, Math.min(product.stock, qty + 1))} className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"><Plus className="h-3 w-3" /></button>
                      </div>
                      <button onClick={() => remove(product.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-foreground">{inr(product.price * qty)}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {detailed.length > 0 && (
          <div className="border-t border-border bg-gradient-soft p-6">
            <dl className="space-y-1 text-sm">
              <Row label={t("cart_subtotal")} val={inr(subtotal)} />
              <Row label={t("cart_shipping")} val={shipping === 0 ? "Free" : inr(shipping)} />
              <Row label={t("cart_tax")} val={inr(tax)} />
              <div className="mt-2 flex items-center justify-between border-t border-border pt-2 text-base font-bold text-foreground"><span>{t("cart_total")}</span><span>{inr(total)}</span></div>
            </dl>
            <button onClick={() => { setOpen(false); navigate({ to: "/checkout" }); }} className="mt-4 w-full rounded-full bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110">{t("cart_checkout")}</button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
function Row({ label, val }: { label: string; val: string }) {
  return (<div className="flex items-center justify-between text-muted-foreground"><span>{label}</span><span className="text-foreground">{val}</span></div>);
}