import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/goshala")({
  head: () => ({
    meta: [
      { title: "Goshala — Our Mission & Daily Seva | Sri Ranganatha Goshala" },
      { name: "description", content: "The mission, daily operations, and seva that keep Sri Ranganatha Goshala running." },
      { property: "og:title", content: "Goshala — Our Mission & Daily Seva" },
      { property: "og:description", content: "The mission, daily operations, and seva that keep Sri Ranganatha Goshala running." },
    ],
  }),
  component: GoshalaPage,
});

function GoshalaPage() {
  const { t, lang } = useI18n();
  const en = lang === "en";
  return (
    <PageShell kicker={t("nav_goshala")} title={en ? "Sanctuary rooted in devotion" : "భక్తిలో పాతుకుపోయిన ఆశ్రయం"}>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p>{en ? "Sri Ranganatha Goshala is a living sanctuary in Nellore protecting old desi cows, calves and injured bulls. Every animal here is cared for without any expectation of yield — until their last breath." : "శ్రీ రంగనాథ గోశాల నెల్లూరులోని ఒక సజీవ ఆశ్రయం. ఇక్కడ వృద్ధ దేశీ గోవులు, దూడలు మరియు గాయపడిన ఆబోతులకు ఆశ్రయం ఇస్తారు."}</p>
          <p>{en ? "Our seva is offered at the feet of Lord Ranganatha Swami. Devotees, farmers and volunteers together sustain the goshala through daily A2 milk deliveries, panchagavya, and go-krupa organic farming." : "మా సేవ శ్రీ రంగనాథ స్వామి పాదాలకు అర్పితం. భక్తులు, రైతులు, స్వచ్ఛంద సేవకులు కలిసి A2 పాల డెలివరీ ద్వారా గోశాలను నిలబెడతారు."}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { k: "150+", v: en ? "Daily A2 milk families" : "రోజువారీ కుటుంబాలు" },
            { k: "120+", v: en ? "Cows & calves cared" : "గోవులు & దూడలు" },
            { k: "25 acres", v: en ? "Organic land" : "సేంద్రియ భూమి" },
            { k: "15 years", v: en ? "Of continuous seva" : "నిరంతర సేవ" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}