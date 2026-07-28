import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PRODUCTS, type Product } from "./products";

export type CartItem = { id: string; qty: number };

type Ctx = {
  items: CartItem[];
  open: boolean;
  setOpen: (b: boolean) => void;
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  detailed: Array<{ product: Product; qty: number }>;
  count: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
};

const CartCtx = createContext<Ctx | null>(null);
const KEY = "srg_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const add = (id: string, qty = 1) =>
    setItems((prev) => {
      const found = prev.find((x) => x.id === id);
      if (found) return prev.map((x) => (x.id === id ? { ...x, qty: x.qty + qty } : x));
      return [...prev, { id, qty }];
    });
  const remove = (id: string) => setItems((prev) => prev.filter((x) => x.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((prev) => (qty <= 0 ? prev.filter((x) => x.id !== id) : prev.map((x) => (x.id === id ? { ...x, qty } : x))));
  const clear = () => setItems([]);

  const detailed = useMemo(
    () =>
      items
        .map((i) => {
          const p = PRODUCTS.find((p) => p.id === i.id);
          return p ? { product: p, qty: i.qty } : null;
        })
        .filter(Boolean) as Array<{ product: Product; qty: number }>,
    [items],
  );

  const subtotal = detailed.reduce((s, x) => s + x.product.price * x.qty, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= 999 ? 0 : 49;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;
  const count = items.reduce((s, x) => s + x.qty, 0);

  return (
    <CartCtx.Provider value={{ items, open, setOpen, add, remove, setQty, clear, detailed, count, subtotal, tax, shipping, total }}>
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;