import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";
import { Play, Headphones, Clock } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Lectures | Sri Ranganatha Goshala" },
      { name: "description", content: "Video and audio lectures on dharma, go-seva and natural living." },
      { property: "og:title", content: "Courses & Lectures" },
      { property: "og:description", content: "Video and audio lectures on dharma, go-seva and natural living." },
    ],
  }),
  component: CoursesPage,
});

const COURSES = [
  { title: "Bhagavad Gita — Chapter 1", type: "video", len: "48 min" },
  { title: "Why Desi Cow Matters", type: "video", len: "22 min" },
  { title: "Panchagavya Preparation", type: "audio", len: "18 min" },
  { title: "Natural Farming — Zero Budget", type: "video", len: "1 hr 12 min" },
  { title: "Sri Ranganatha Ashtakam", type: "audio", len: "9 min" },
  { title: "Goshala Vaastu & Setup", type: "video", len: "35 min" },
];

function CoursesPage() {
  const { t } = useI18n();
  return (
    <PageShell kicker={t("nav_courses")} title="Lectures for seekers & sevaks">
      <div className="grid gap-4 md:grid-cols-2">
        {COURSES.map((c) => (
          <div key={c.title} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:border-primary/40">
            <div className={`grid h-14 w-14 place-items-center rounded-xl ${c.type === "video" ? "bg-primary/10 text-primary" : "bg-secondary/30 text-secondary-foreground"}`}>
              {c.type === "video" ? <Play className="h-6 w-6" /> : <Headphones className="h-6 w-6" />}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-foreground">{c.title}</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {c.len} · {c.type}</div>
            </div>
            <button className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary">{t("soon")}</button>
          </div>
        ))}
      </div>
    </PageShell>
  );
}