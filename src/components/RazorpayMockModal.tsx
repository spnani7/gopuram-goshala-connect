import { Dialog, DialogContent } from "@/components/ui/dialog";
import { inr } from "@/lib/cart";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

type Props = { open: boolean; onClose: () => void; amount: number; onSuccess: (paymentId: string) => void };

export function RazorpayMockModal({ open, onClose, amount, onSuccess }: Props) {
  const [stage, setStage] = useState<"form" | "processing" | "done">("form");
  const [method, setMethod] = useState<"upi" | "card" | "netbanking">("upi");

  useEffect(() => { if (open) setStage("form"); }, [open]);

  const pay = () => {
    setStage("processing");
    setTimeout(() => {
      const pid = "pay_" + Math.random().toString(36).slice(2, 12).toUpperCase();
      setStage("done");
      setTimeout(() => onSuccess(pid), 900);
    }, 1600);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && stage === "form" && onClose()}>
      <DialogContent className="max-w-sm overflow-hidden p-0">
        <div className="bg-[#0b2540] p-5 text-white">
          <div className="flex items-center justify-between">
            <div><div className="text-[10px] uppercase tracking-widest text-white/60">Powered by</div><div className="text-lg font-bold">Razorpay</div></div>
            <div className="text-right"><div className="text-[10px] uppercase tracking-widest text-white/60">Amount</div><div className="text-lg font-bold">{inr(amount)}</div></div>
          </div>
          <div className="mt-3 flex items-center gap-1 text-[11px] text-white/70"><ShieldCheck className="h-3 w-3" /> 100% Secure · Test Mode</div>
        </div>
        {stage === "form" && (
          <div className="space-y-4 p-5">
            <div className="grid grid-cols-3 gap-2 text-xs">
              {(["upi", "card", "netbanking"] as const).map((m) => (
                <button key={m} onClick={() => setMethod(m)} className={`rounded-lg border p-2 font-semibold uppercase transition ${method === m ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>{m}</button>
              ))}
            </div>
            {method === "upi" && (<input defaultValue="devotee@okhdfc" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="UPI ID" />)}
            {method === "card" && (
              <div className="space-y-2">
                <input defaultValue="4242 4242 4242 4242" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                <div className="grid grid-cols-2 gap-2">
                  <input defaultValue="12/28" className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                  <input defaultValue="123" className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                </div>
              </div>
            )}
            {method === "netbanking" && (
              <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
                <option>HDFC Bank</option><option>State Bank of India</option><option>ICICI Bank</option><option>Axis Bank</option>
              </select>
            )}
            <button onClick={pay} className="w-full rounded-full bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110">Pay {inr(amount)}</button>
            <p className="text-center text-[10px] text-muted-foreground">This is a mock checkout for demonstration.</p>
          </div>
        )}
        {stage === "processing" && (<div className="grid place-items-center gap-3 p-10 text-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /><div className="text-sm font-semibold text-foreground">Processing payment…</div><div className="text-xs text-muted-foreground">Do not close this window.</div></div>)}
        {stage === "done" && (<div className="grid place-items-center gap-3 p-10 text-center"><CheckCircle2 className="h-10 w-10 text-primary" /><div className="text-sm font-semibold text-foreground">Payment Successful</div></div>)}
      </DialogContent>
    </Dialog>
  );
}