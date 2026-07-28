import type { ReactNode } from "react";
export function PageShell({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      {kicker && <div className="text-xs font-semibold uppercase tracking-widest text-primary">— {kicker}</div>}
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h1>
      <div className="mt-8">{children}</div>
    </div>
  );
}