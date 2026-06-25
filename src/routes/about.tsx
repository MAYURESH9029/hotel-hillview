import { createFileRoute, Link } from "@tanstack/react-router";
import { Wifi, Car, Waves, Shirt, BellRing, UtensilsCrossed, Clock, ArrowRight } from "lucide-react";
import { Page } from "@/components/Layout";
import room from "@/assets/room.jpg.asset.json";
import reception from "@/assets/reception.webp.asset.json";
import exterior from "@/assets/exterior.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hotel Hill View Lodging & Boarding" },
      { name: "description", content: "A comfortable, well-kept lodge in Nalasopara East with in-house family restaurant & bar. 3.9★ from 450+ guests." },
      { property: "og:title", content: "About Hotel Hill View" },
      { property: "og:description", content: "A home away from home in Nalasopara — comfortable rooms, friendly service, in-house dining." },
      { property: "og:image", content: room.url },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free Parking" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Shirt, label: "Laundry Service" },
  { icon: BellRing, label: "Room Service" },
  { icon: UtensilsCrossed, label: "In-House Dining" },
  { icon: Clock, label: "Check-in 12 PM" },
  { icon: Clock, label: "Check-out 11 AM" },
];

function AboutPage() {
  return (
    <Page>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 pt-16 md:pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">About Hotel Hill View</p>
            <h1 className="font-display text-5xl md:text-7xl mt-5 leading-[1.02]">
              A home away from home <span className="italic">in Nalasopara.</span>
            </h1>
          </div>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed">
            Hotel Hill View Lodging & Boarding offers comfortable, well-maintained rooms in the heart of
            Nalasopara East — ideal for travelers, families, and business visitors who value comfort and
            convenience over excess.
          </p>
        </div>
      </section>

      {/* IMAGE COLLAGE */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 grid grid-cols-12 gap-3 md:gap-5">
        <img src={reception.url} alt="Hill View reception lobby" className="col-span-12 md:col-span-8 rounded-2xl aspect-[16/10] object-cover" />
        <img src={room.url} alt="Guest room" className="col-span-6 md:col-span-4 rounded-2xl aspect-[4/5] object-cover" />
        <img src={exterior.url} alt="Hotel exterior at night" className="col-span-6 md:col-span-4 rounded-2xl aspect-[4/5] object-cover" />
      </section>

      {/* AMENITIES */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">What we offer</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">The essentials, done right.</h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {amenities.map((a) => (
              <div key={a.label} className="bg-background p-6 flex flex-col items-start gap-4 min-h-[140px]">
                <a.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="font-display text-lg leading-tight">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-espresso text-cream">
        <div className="mx-auto max-w-4xl px-5 md:px-10 py-24 md:py-32 text-center">
          <p className="eyebrow !text-gold">Our hospitality promise</p>
          <h2 className="font-display text-4xl md:text-6xl mt-5 leading-[1.05]">
            Comfort, cleanliness, and <span className="italic text-gold-soft">friendly service</span> — every stay.
          </h2>
          <p className="mt-8 text-cream/75 leading-relaxed text-lg">
            We're a small team that takes pride in keeping rooms spotless, check-ins quick, and guests
            looked after. It's why 450+ travelers have rated us 3.9★ on Google — and why so many of them
            come back when they're in Nalasopara.
          </p>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { k: "457+", v: "Happy guests" },
            { k: "3.9★", v: "Average rating" },
            { k: "Prime", v: "Nalasopara East" },
            { k: "In-house", v: "Restaurant & bar" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-8 md:p-10">
              <div className="font-display text-4xl md:text-5xl text-foreground">{s.k}</div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground mt-2">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/visit" className="btn-primary">Plan your stay <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </Page>
  );
}
