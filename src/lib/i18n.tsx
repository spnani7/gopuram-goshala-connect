import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "te";

type Dict = Record<string, { en: string; te: string }>;

export const dict: Dict = {
  brand: { en: "Sri Ranganatha Goshala", te: "శ్రీ రంగనాథ గోశాల" },
  tagline: {
    en: "Gow Sava · Saranagatha Raksha",
    te: "గో సేవ · శరణాగత రక్ష",
  },
  nav_home: { en: "Home", te: "హోమ్" },
  nav_goshala: { en: "Goshala", te: "గోశాల" },
  nav_gallery: { en: "Gallery", te: "గ్యాలరీ" },
  nav_courses: { en: "Courses & Lectures", te: "పాఠాలు & ఉపన్యాసాలు" },
  nav_products: { en: "Products", te: "ఉత్పత్తులు" },
  nav_organic: { en: "Organic Food", te: "సేంద్రియ ఆహారం" },
  nav_agriculture: { en: "Agriculture", te: "వ్యవసాయం" },
  hero_kicker: { en: "Nellore · Sacred Cow Sanctuary", te: "నెల్లూరు · పవిత్ర గోశాల" },
  hero_title: {
    en: "Serving Lord Ranganatha, protecting sacred desi cows",
    te: "శ్రీ రంగనాథునికి సేవ, పవిత్ర దేశీ గోవుల రక్షణ",
  },
  hero_sub: {
    en: "A living sanctuary where temple tradition, daily A2 milk seva, and care for old desi cows come together in devotion.",
    te: "ఆలయ సంప్రదాయం, రోజువారీ A2 పాల సేవ, మరియు వృద్ధ దేశీ గోవుల సంరక్షణ ఒకచోట కలిసిన భక్తి క్షేత్రం.",
  },
  cta_donate: { en: "Sponsor a Cow", te: "గోవును పోషించండి" },
  cta_shop: { en: "Visit Store", te: "స్టోర్‌కి వెళ్ళండి" },
  ticker_1: { en: "Gow Sava Saranagatha Raksha", te: "గో సేవ శరణాగత రక్ష" },
  ticker_2: { en: "Desi Cow Samrakshana Kendram", te: "దేశీ గో సంరక్షణ కేంద్రం" },
  ticker_3: {
    en: "Old Desi Cows Feeding Center — Without Selfishness",
    te: "వృద్ధ దేశీ గోవుల పోషణ కేంద్రం — నిస్వార్థంగా",
  },
  pillars_title: { en: "Explore the Goshala", te: "గోశాలను అన్వేషించండి" },
  pillars_sub: {
    en: "Six paths into our seva, our teachings, and our produce.",
    te: "మా సేవ, బోధనలు మరియు ఉత్పత్తులలోకి ఆరు మార్గాలు.",
  },
  pillar_goshala_desc: { en: "Our mission, daily seva, and how the sanctuary runs.", te: "మా లక్ష్యం, రోజువారీ సేవ మరియు గోశాల నిర్వహణ." },
  pillar_gallery_desc: { en: "Cows, calves, temples and infrastructure in pictures.", te: "గోవులు, దూడలు, ఆలయాలు మరియు మౌలిక సదుపాయాల చిత్రాలు." },
  pillar_courses_desc: { en: "Video and audio lectures on dharma and go-seva.", te: "ధర్మం మరియు గో-సేవపై వీడియో మరియు ఆడియో ఉపన్యాసాలు." },
  pillar_products_desc: { en: "A2 milk, ghee, panchagavya and more from our goshala.", te: "మా గోశాల నుండి A2 పాలు, నెయ్యి, పంచగవ్య మరియు మరిన్ని." },
  pillar_organic_desc: { en: "Organic foods grown with go-krupa on our land.", te: "మా భూమిలో గో-కృపతో పండించిన సేంద్రియ ఆహారం." },
  pillar_agri_desc: { en: "Natural farming inputs — jeevamrutham, beejamrutham, compost.", te: "సహజ వ్యవసాయ ఇన్‌పుట్‌లు — జీవామృతం, బీజామృతం, కంపోస్ట్." },
  products_title: { en: "Goshala Store", te: "గోశాల స్టోర్" },
  products_sub: {
    en: "Every purchase directly supports the seva of our cows.",
    te: "ప్రతి కొనుగోలు నేరుగా మా గోవుల సేవకు తోడ్పడుతుంది.",
  },
  filter_all: { en: "All", te: "అన్నీ" },
  filter_dairy: { en: "Dairy", te: "పాడి" },
  filter_organic: { en: "Organic Food", te: "సేంద్రియ" },
  filter_agri: { en: "Agriculture", te: "వ్యవసాయం" },
  add_to_cart: { en: "Add to Cart", te: "కార్ట్‌కి జోడించు" },
  out_of_stock: { en: "Out of stock", te: "నిల్వ లేదు" },
  in_stock: { en: "in stock", te: "అందుబాటులో" },
  cart_title: { en: "Your Cart", te: "మీ కార్ట్" },
  cart_empty: { en: "Your cart is empty.", te: "మీ కార్ట్ ఖాళీగా ఉంది." },
  cart_subtotal: { en: "Subtotal", te: "సబ్‌టోటల్" },
  cart_shipping: { en: "Shipping", te: "షిప్పింగ్" },
  cart_tax: { en: "GST (5%)", te: "GST (5%)" },
  cart_total: { en: "Total", te: "మొత్తం" },
  cart_checkout: { en: "Proceed to Checkout", te: "చెక్‌అవుట్‌కి వెళ్ళండి" },
  checkout_title: { en: "Checkout", te: "చెక్‌అవుట్" },
  billing_details: { en: "Billing Details", te: "బిల్లింగ్ వివరాలు" },
  full_name: { en: "Full Name", te: "పూర్తి పేరు" },
  phone: { en: "Phone", te: "ఫోన్" },
  email: { en: "Email", te: "ఇమెయిల్" },
  address: { en: "Address", te: "చిరునామా" },
  city: { en: "City", te: "నగరం" },
  pincode: { en: "PIN Code", te: "పిన్ కోడ్" },
  pay_now: { en: "Pay Now", te: "ఇప్పుడు చెల్లించండి" },
  order_summary: { en: "Order Summary", te: "ఆర్డర్ సారాంశం" },
  invoice_title: { en: "Payment Successful", te: "చెల్లింపు విజయవంతం" },
  invoice_sub: { en: "Your seva contribution has been received.", te: "మీ సేవ విరాళం స్వీకరించబడింది." },
  invoice_id: { en: "Invoice", te: "ఇన్వాయిస్" },
  continue_shopping: { en: "Continue Shopping", te: "షాపింగ్ కొనసాగించండి" },
  footer_rights: { en: "All rights reserved.", te: "సర్వ హక్కులు మావే." },
  soon: { en: "Coming soon", te: "త్వరలో" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("srg_lang")) as Lang | null;
    if (saved === "en" || saved === "te") setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("srg_lang", lang);
  }, [lang]);
  const t = (k: keyof typeof dict) => dict[k]?.[lang] ?? String(k);
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}