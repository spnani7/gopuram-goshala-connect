import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cows, Calves & Temple | Sri Ranganatha Goshala" },
      { name: "description", content: "Photographs of the goshala, our cows, calves and temple infrastructure." },
      { property: "og:title", content: "Gallery — Sri Ranganatha Goshala" },
      { property: "og:description", content: "Photographs of the goshala, our cows, calves and temple infrastructure." },
    ],
  }),
  component: GalleryPage,
});

const TILES = ["🐄", "🐂", "🐮", "🌾", "🕉️", "🛕", "🌻", "🍃", "🐄", "🐂", "🌿", "🌸"];

function GalleryPage() {
  const { t } = useI18n();
  return (
    <PageShell kicker={t("nav_gallery")} title="Moments from the Goshala">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {TILES.map((e, i) => (
          <div key={i} className="grid aspect-square place-items-center overflow-hidden rounded-2xl border border-border bg-gradient-soft text-6xl shadow-soft transition hover:-translate-y-1 hover:shadow-glow"><span>{e}</span></div>
        ))}
      </div>
    </PageShell>
  );
}