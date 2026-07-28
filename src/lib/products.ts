import type { Lang } from "./i18n";

export type Category = "dairy" | "organic" | "agriculture";

export type Product = {
  id: string;
  name: { en: string; te: string };
  desc: { en: string; te: string };
  price: number; // INR
  unit: { en: string; te: string };
  stock: number;
  category: Category;
  image: string; // emoji or url
};

export const PRODUCTS: Product[] = [
  {
    id: "a2-milk-1l",
    name: { en: "Fresh A2 Desi Cow Milk", te: "తాజా A2 దేశీ ఆవు పాలు" },
    desc: { en: "Pure A2 milk from our indigenous cows, delivered same day.", te: "మా దేశీ ఆవుల నుండి స్వచ్ఛమైన A2 పాలు, అదే రోజు డెలివరీ." },
    price: 90, unit: { en: "per litre", te: "లీటర్‌కి" }, stock: 200, category: "dairy", image: "🥛",
  },
  {
    id: "a2-ghee-500",
    name: { en: "Bilona A2 Ghee", te: "బిలోన A2 నెయ్యి" },
    desc: { en: "Hand-churned bilona method ghee from A2 desi cow milk.", te: "A2 దేశీ ఆవు పాల నుండి చేతితో మథించిన బిలోన నెయ్యి." },
    price: 1800, unit: { en: "500 ml jar", te: "500 మి.లీ." }, stock: 40, category: "dairy", image: "🍯",
  },
  {
    id: "curd-1kg",
    name: { en: "Desi Cow Curd", te: "దేశీ ఆవు పెరుగు" },
    desc: { en: "Traditional set curd in earthen pot.", te: "మట్టి కుండలో సాంప్రదాయ పెరుగు." },
    price: 140, unit: { en: "1 kg", te: "1 కి.గ్రా." }, stock: 30, category: "dairy", image: "🥣",
  },
  {
    id: "panchagavya-1l",
    name: { en: "Panchagavya", te: "పంచగవ్య" },
    desc: { en: "Sacred formulation of five cow products, for worship & wellness.", te: "ఐదు గో ఉత్పత్తుల పవిత్ర మిశ్రమం, పూజ & ఆరోగ్యానికి." },
    price: 260, unit: { en: "1 litre", te: "1 లీటర్" }, stock: 60, category: "dairy", image: "🕉️",
  },
  {
    id: "sonamasuri-5kg",
    name: { en: "Sonamasuri Organic Rice", te: "సోనామసూరి సేంద్రియ బియ్యం" },
    desc: { en: "Naturally grown with go-krupa & jeevamrutham.", te: "గో-కృప & జీవామృతంతో సహజంగా పండించబడింది." },
    price: 520, unit: { en: "5 kg bag", te: "5 కి.గ్రా. బ్యాగ్" }, stock: 80, category: "organic", image: "🌾",
  },
  {
    id: "moong-1kg",
    name: { en: "Organic Moong Dal", te: "సేంద్రియ పెసర పప్పు" },
    desc: { en: "Chemical-free split green gram.", te: "రసాయన రహిత పెసర పప్పు." },
    price: 220, unit: { en: "1 kg", te: "1 కి.గ్రా." }, stock: 50, category: "organic", image: "🫘",
  },
  {
    id: "jaggery-1kg",
    name: { en: "Country Jaggery", te: "దేశీ బెల్లం" },
    desc: { en: "Chemical-free sugarcane jaggery blocks.", te: "రసాయన రహిత చెరకు బెల్లం." },
    price: 180, unit: { en: "1 kg", te: "1 కి.గ్రా." }, stock: 70, category: "organic", image: "🟫",
  },
  {
    id: "coldpressed-oil",
    name: { en: "Cold-Pressed Groundnut Oil", te: "కోల్డ్-ప్రెస్డ్ వేరుశనగ నూనె" },
    desc: { en: "Wood-pressed, chemical free.", te: "కర్ర ఘాణి, రసాయన రహితం." },
    price: 420, unit: { en: "1 litre", te: "1 లీటర్" }, stock: 40, category: "organic", image: "🫒",
  },
  {
    id: "jeevamrutham",
    name: { en: "Jeevamrutham Concentrate", te: "జీవామృతం సాంద్రత" },
    desc: { en: "Natural microbial culture for soil fertility.", te: "నేల సారవంతతకు సహజ సూక్ష్మజీవ ద్రావణం." },
    price: 150, unit: { en: "5 litre", te: "5 లీటర్లు" }, stock: 100, category: "agriculture", image: "🧪",
  },
  {
    id: "vermi-compost",
    name: { en: "Vermi Compost", te: "వర్మి కంపోస్ట్" },
    desc: { en: "Nutrient-rich earthworm compost.", te: "పోషకాలతో సమృద్ధమైన వర్మి కంపోస్ట్." },
    price: 350, unit: { en: "25 kg bag", te: "25 కి.గ్రా." }, stock: 60, category: "agriculture", image: "🪴",
  },
  {
    id: "cow-dung-cakes",
    name: { en: "Cow Dung Cakes (Havan)", te: "గోవు పిడకలు (హవన్)" },
    desc: { en: "Sun-dried desi cow dung cakes for yagna & havan.", te: "యజ్ఞం & హవన్ కోసం ఎండలో ఎండిన పిడకలు." },
    price: 120, unit: { en: "pack of 12", te: "12 ప్యాక్" }, stock: 200, category: "agriculture", image: "🟤",
  },
  {
    id: "beejamrutham",
    name: { en: "Beejamrutham Seed Treatment", te: "బీజామృతం విత్తన శుద్ధి" },
    desc: { en: "Traditional seed coating for higher germination.", te: "అధిక అంకురణకు సాంప్రదాయ విత్తన కోటింగ్." },
    price: 90, unit: { en: "1 litre", te: "1 లీటర్" }, stock: 80, category: "agriculture", image: "🌱",
  },
];

export const productName = (p: Product, lang: Lang) => p.name[lang];
export const productDesc = (p: Product, lang: Lang) => p.desc[lang];
export const productUnit = (p: Product, lang: Lang) => p.unit[lang];