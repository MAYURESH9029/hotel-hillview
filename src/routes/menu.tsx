import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Page, PHONE } from "@/components/Layout";
import restaurant1 from "@/assets/restaurant1.jpg.asset.json";
import kebab from "@/assets/food-kebab.jpg.asset.json";
import chicken from "@/assets/food-chicken.jpg.asset.json";
import skewers from "@/assets/food-skewers.jpg.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Hotel Abhinandan Family Restaurant & Bar" },
      { name: "description", content: "North Indian, Mughlai, Chinese, seafood, kebabs and desserts at Hotel Abhinandan Family Restaurant & Bar — downstairs at Hotel Hill View." },
      { property: "og:title", content: "Menu — Hotel Abhinandan Family Restaurant & Bar" },
      { property: "og:description", content: "Family-friendly North Indian, Mughlai, Chinese, seafood and kebab menu in Nalasopara East." },
      { property: "og:image", content: kebab.url },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Item = { name: string; veg: boolean; tag?: string };

const veg: Item[] = [
  { name: "Paneer Tikka", veg: true },
  { name: "Veg Seekh Kebab", veg: true },
  { name: "Dal Makhani", veg: true },
  { name: "Paneer Butter Masala", veg: true },
  { name: "Veg Biryani", veg: true },
  { name: "Veg Manchurian", veg: true },
  { name: "Veg Fried Rice", veg: true },
  { name: "Veg Hakka Noodles", veg: true },
  { name: "Mix Veg Curry", veg: true },
  { name: "Masala Papad", veg: true },
  { name: "Tandoori Roti / Naan / Butter Naan", veg: true },
  { name: "Jeera Rice", veg: true },
  { name: "Gulab Jamun", veg: true, tag: "Dessert" },
];

const nonVeg: Item[] = [
  { name: "Chicken Tikka", veg: false },
  { name: "Chicken Seekh Kebab", veg: false },
  { name: "Butter Chicken", veg: false },
  { name: "Chicken Biryani", veg: false },
  { name: "Mutton Curry", veg: false },
  { name: "Chicken Manchurian", veg: false },
  { name: "Chicken Fried Rice", veg: false },
  { name: "Chicken Hakka Noodles", veg: false },
  { name: "Tandoori Chicken", veg: false },
  { name: "Fish Curry", veg: false, tag: "Seafood" },
  { name: "Prawn Masala", veg: false, tag: "Seafood" },
  { name: "Diwan-E-Khas", veg: false, tag: "House Special" },
  { name: "Egg Curry", veg: false },
];

const beverages: Item[] = [
  { name: "Soft Drinks (Coke, Sprite, Fanta)", veg: true },
  { name: "Fresh Lime Soda", veg: true },
  { name: "Mineral Water", veg: true },
  { name: "Masala Chaas", veg: true },
  { name: "Lassi (Sweet / Salted)", veg: true },
  { name: "Tea / Coffee", veg: true },
  { name: "Mocktails (Seasonal Selection)", veg: true },
  { name: "Bar Beverages — full bar menu on request", veg: true, tag: "Bar" },
];

function Dot({ veg }: { veg: boolean }) {
  return (
    <span className={`inline-flex w-4 h-4 border ${veg ? "border-emerald-700" : "border-[#7a2418]"} items-center justify-center shrink-0`}>
      <span className={`w-1.5 h-1.5 rounded-full ${veg ? "bg-emerald-700" : "bg-[#7a2418]"}`} />
    </span>
  );
}

function ItemRow({ item }: { item: Item }) {
  return (
    <li className="flex items-center gap-4 py-4 border-b border-border/60 last:border-0">
      <Dot veg={item.veg} />
      <span className="flex-1 font-display text-lg md:text-xl text-foreground">{item.name}</span>
      {item.tag && (
        <span className="text-[0.62rem] uppercase tracking-[0.22em] text-gold border border-gold/40 rounded-full px-3 py-1">
          {item.tag}
        </span>
      )}
    </li>
  );
}

function MenuPage() {
  const [tab, setTab] = useState<"food" | "bev">("food");
  const [diet, setDiet] = useState<"veg" | "nonveg">("veg");

  return (
    <Page>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={restaurant1.url} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-10 pt-20 pb-28 md:pt-28 md:pb-40 text-cream">
          <p className="eyebrow !text-gold">Hotel Abhinandan · Ground Floor</p>
          <h1 className="font-display text-5xl md:text-7xl mt-5 max-w-3xl leading-[1.05]">
            Dine in, relax, <span className="italic text-gold-soft">repeat.</span>
          </h1>
          <p className="mt-6 max-w-xl text-cream/80 leading-relaxed">
            A full family-friendly menu spanning North Indian, Mughlai, Chinese, seafood, kebabs and
            desserts — plus a fully stocked bar, all just an elevator ride from your room.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="mx-auto max-w-5xl px-5 md:px-10 -mt-12 md:-mt-16 relative z-10">
        <div className="bg-card border border-border rounded-full p-1.5 flex w-fit mx-auto shadow-xl">
          {(["food", "bev"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 md:px-8 py-3 rounded-full text-sm transition-all ${tab === t ? "bg-espresso text-cream" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t === "food" ? "Food" : "Beverages"}
            </button>
          ))}
        </div>

        {tab === "food" && (
          <div className="mt-8 flex justify-center gap-2">
            {(["veg", "nonveg"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDiet(d)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] border transition-all ${
                  diet === d ? "border-foreground bg-foreground text-cream" : "border-border text-muted-foreground hover:border-foreground/40"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${d === "veg" ? "bg-emerald-600" : "bg-[#7a2418]"}`} />
                {d === "veg" ? "Vegetarian" : "Non-Vegetarian"}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* MENU CONTENT */}
      <section className="mx-auto max-w-5xl px-5 md:px-10 py-16 md:py-24">
        {tab === "food" ? (
          <div key={diet} className="fade-up">
            <div className="flex items-end justify-between mb-8 border-b border-border pb-5">
              <h2 className="font-display text-3xl md:text-4xl">{diet === "veg" ? "Vegetarian Selection" : "Non-Vegetarian Selection"}</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
                {diet === "veg" ? `${veg.length} dishes` : `${nonVeg.length} dishes`}
              </span>
            </div>
            <ul>
              {(diet === "veg" ? veg : nonVeg).map((i) => <ItemRow key={i.name} item={i} />)}
            </ul>

            {/* food imagery row */}
            <div className="grid grid-cols-3 gap-3 mt-14">
              {[kebab, chicken, skewers].map((img, i) => (
                <img key={i} src={img.url} alt="" className="rounded-2xl aspect-[4/5] object-cover" />
              ))}
            </div>
          </div>
        ) : (
          <div className="fade-up">
            <div className="flex items-end justify-between mb-8 border-b border-border pb-5">
              <h2 className="font-display text-3xl md:text-4xl">Beverages & Bar</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">{beverages.length} options</span>
            </div>
            <ul>{beverages.map((i) => <ItemRow key={i.name} item={i} />)}</ul>
          </div>
        )}

        <p className="mt-12 text-xs text-muted-foreground text-center leading-relaxed">
          Representative menu. Selection may vary by season and availability. Full bar menu on request.
        </p>

        <div className="mt-14 text-center flex flex-wrap justify-center gap-3">
          <a href={`tel:${PHONE}`} className="btn-primary"><Phone className="w-4 h-4" /> Call to Order</a>
          <Link to="/visit" className="btn-ghost-dark">Reserve a Table <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </Page>
  );
}
