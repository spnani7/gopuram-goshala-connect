import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart, inr } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { productName } from "@/lib/products";
import { RazorpayMockModal } from "@/components/RazorpayMockModal";
import { CheckCircle2, ArrowLeft, Download } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | Sri Ranganatha Goshala" },
      { name: "description", content: "Complete your goshala store order." },
      { property: "og:title", content: "Checkout — Sri Ranganatha Goshala" },
      { property: "og:description", content: "Complete your goshala store order." },
    ],
  }),
  component: CheckoutPage,
});

type Invoice = { id: string; payment: string; date: string; total: number; items: Array<{ name: string; qty: number; price: number }> };

function CheckoutPage() {
  const { t, lang } = useI18n();
  const { detailed, subtotal, tax, shipping, total, clear } = useCart();
  const [open, setOpen] = useState(false);
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", city: "Nellore", pincode: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const valid = form.name.trim() && form.phone.trim().length >= 10 && form.address.trim() && form.pincode.trim().length >= 6;

  if (invoice) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
          <div className="bg-gradient-brand p-8 text-center text-primary-foreground">
            <CheckCircle2 className="mx-auto h-14 w-14" />
            <h1 className="mt-3 text-2xl font-bold">{t("invoice_title")}</h1>
            <p className="mt-1 text-sm opacity-90">{t("invoice_sub")}</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><div className="text-xs text-muted-foreground">{t("invoice_id")}</div><div className="font-mono font-semibold text-foreground">{invoice.id}</div></div>
              <div><div className="text-xs text-muted-foreground">Payment</div><div className="font-mono font-semibold text-foreground">{invoice.payment}</div></div>
              <div><div className="text-xs text-muted-foreground">Date</div><div className="font-semibold text-foreground">{invoice.date}</div></div>
              <div><div className="text-xs text-muted-foreground">{t("cart_total")}</div><div className="font-bold text-foreground">{inr(invoice.total)}</div></div>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted text-xs uppercase text-muted-foreground"><tr><th className="p-3 text-left">Item</th><th className="p-3 text-center">Qty</th><th className="p-3 text-right">Price</th></tr></thead>
                <tbody>
                  {invoice.items.map((i, idx) => (
                    <tr key={idx} className="border-t border-border"><td className="p-3">{i.name}</td><td className="p-3 text-center">{i.qty}</td><td className="p-3 text-right">{inr(i.price * i.qty)}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary"><Download className="h-4 w-4" /> Save receipt</button>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft">{t("continue_shopping")}</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (detailed.length === 0) {
    return (
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <div className="text-5xl">🛒</div>
        <h1 className="mt-4 text-xl font-bold text-foreground">{t("cart_empty")}</h1>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"><ArrowLeft className="h-4 w-4" /> {t("continue_shopping")}</Link>
      </div>
    );
  }

  const onSuccess = (paymentId: string) => {
    const inv: Invoice = {
      id: "INV-" + Date.now().toString().slice(-8),
      payment: paymentId,
      date: new Date().toLocaleString(),
      total,
      items: detailed.map((d) => ({ name: productName(d.product, lang), qty: d.qty, price: d.product.price })),
    };
    clear();
    setOpen(false);
    setInvoice(inv);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{t("checkout_title")}</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-lg font-bold text-foreground">{t("billing_details")}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label={t("full_name")}><input value={form.name} onChange={set("name")} className={fieldCls} /></Field>
            <Field label={t("phone")}><input value={form.phone} onChange={set("phone")} className={fieldCls} inputMode="numeric" /></Field>
            <Field label={t("email")}><input value={form.email} onChange={set("email")} className={fieldCls} type="email" /></Field>
            <Field label={t("pincode")}><input value={form.pincode} onChange={set("pincode")} className={fieldCls} inputMode="numeric" /></Field>
            <div className="sm:col-span-2"><Field label={t("address")}><input value={form.address} onChange={set("address")} className={fieldCls} /></Field></div>
            <Field label={t("city")}><input value={form.city} onChange={set("city")} className={fieldCls} /></Field>
          </div>
        </div>
        <div className="h-max rounded-2xl border border-border bg-gradient-soft p-6 shadow-soft">
          <h2 className="text-lg font-bold text-foreground">{t("order_summary")}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {detailed.map((d) => (
              <li key={d.product.id} className="flex justify-between text-muted-foreground"><span className="truncate pr-2">{productName(d.product, lang)} × {d.qty}</span><span className="text-foreground">{inr(d.product.price * d.qty)}</span></li>
            ))}
          </ul>
          <div className="mt-4 space-y-1 border-t border-border pt-4 text-sm">
            <Row label={t("cart_subtotal")} val={inr(subtotal)} />
            <Row label={t("cart_shipping")} val={shipping === 0 ? "Free" : inr(shipping)} />
            <Row label={t("cart_tax")} val={inr(tax)} />
            <div className="flex justify-between border-t border-border pt-2 text-base font-bold text-foreground"><span>{t("cart_total")}</span><span>{inr(total)}</span></div>
          </div>
          <button disabled={!valid} onClick={() => setOpen(true)} className="mt-6 w-full rounded-full bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50">{t("pay_now")} · {inr(total)}</button>
          {!valid && <p className="mt-2 text-center text-xs text-muted-foreground">Please fill your name, phone, address and pincode.</p>}
        </div>
      </div>
      <RazorpayMockModal open={open} onClose={() => setOpen(false)} amount={total} onSuccess={onSuccess} />
    </div>
  );
}

const fieldCls = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (<label className="block"><span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>{children}</label>);
}
function Row({ label, val }: { label: string; val: string }) {
  return (<div className="flex justify-between text-muted-foreground"><span>{label}</span><span className="text-foreground">{val}</span></div>);
}