import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { Ticker } from "@/components/Ticker";
import { PillarGrid } from "@/components/PillarGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Ranganatha Goshala — Nellore | Sacred Desi Cow Sanctuary" },
      { name: "description", content: "Sri Ranganatha Goshala in Nellore serves Lord Ranganatha through A2 milk seva, protection of old desi cows, natural farming and daily dharma teachings." },
      { property: "og:title", content: "Sri Ranganatha Goshala — Nellore" },
      { property: "og:description", content: "A sacred desi cow sanctuary at the feet of Lord Ranganatha Swami — A2 milk, panchagavya, organic food and natural farming." },
    ],
  }),
  component: Index,
});

function Index() {
  return (<><HeroSection /><Ticker /><PillarGrid /></>);
}
