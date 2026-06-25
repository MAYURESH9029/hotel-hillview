import { createFileRoute, Link } from "@tanstack/react-router";
import { Wifi, Car, Waves, Shirt, BellRing, UtensilsCrossed, Star, Phone, MapPin, ArrowRight, Instagram } from "lucide-react";
import { Page, PHONE } from "@/components/Layout";
import room from "@/assets/room.jpg.asset.json";
import reception from "@/assets/reception.webp.asset.json";
import exterior from "@/assets/exterior.jpg.asset.json";
import restaurant1 from "@/assets/restaurant1.jpg.asset.json";
import restaurant2 from "@/assets/restaurant2.jpg.asset.json";
import kebab from "@/assets/food-kebab.jpg.asset.json";
import chicken from "@/assets/food-chicken.jpg.asset.json";
import skewers from "@/assets/food-skewers.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Hill View — Comfortable Stays in Nalasopara East, Mumbai" },
      { name: "description", content: "Clean rooms, in-house restaurant & bar, free Wi-Fi and parking in the heart of Nalasopara East. Rated 3.9★ by 450+ guests." },
      { property: "og:title", content: "Hotel Hill View — Comfortable Stays in Nalasopara East" },
      { property: "og:description", content: "Clean rooms, in-house restaurant & bar, free Wi-Fi and parking. 3.9★ by 450+ guests." },
      { property: "og:image", content: reception.url },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Wifi, title: "Free Wi-Fi", desc: "Fast, complimentary internet in every room and common area." },
  { icon: Car, title: "Free Parking", desc: "Hassle-free parking on the premises for all guests." },
  { icon: Waves, title: "Swimming Pool", desc: "Cool off after a long day with a refreshing dip." },
  { icon: Shirt, title: "Laundry Service", desc: "On-request laundry, perfect for longer stays." },
  { icon: BellRing, title: "Room Service", desc: "Order in from the family restaurant — straight to your room." },
  { icon: UtensilsCrossed, title: "Restaurant & Bar", desc: "Hotel Abhinandan Family Restaurant downstairs." },
];

const testimonials = [
  { quote: "Clean rooms, courteous staff and the restaurant downstairs is a real bonus. Great value for money.", name: "Rohan S." },
  { quote: "Stayed for a family trip. Comfortable beds, hot water, and the food was delicious.", name: "Priya M." },
  { quote: "Perfect location in Nalasopara East. Quick check-in and friendly service throughout.", name: "Anil K." },
];

function Home() {
  return (
    <Page>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={reception.url} alt="Hotel Hill View reception" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-espresso/85 via-espresso/65 to-espresso/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-10 pt-20 md:pt-32 pb-24 md:pb-40 text-cream">
          <p className="eyebrow !text-gold fade-up">Nalasopara East · Mumbai</p>
          <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl mt-5 max-w-4xl fade-up" style={{ animationDelay: ".1s" }}>
            Your comfortable stay,<br />
            <span className="italic text-gold-soft">just steps</span> from everything.
          </h1>
          <p className="mt-7 max-w-xl text-cream/80 text-base md:text-lg leading-relaxed fade-up" style={{ animationDelay: ".2s" }}>
            Clean rooms, an in-house family restaurant & bar, free Wi-Fi and parking — rated <span className="text-gold">3.9★</span> by 450+ guests in the heart of Nalasopara East.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 fade-up" style={{ animationDelay: ".3s" }}>
            <Link to="/visit" className="btn-primary">Check Availability <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/menu" className="btn-outline">View Menu</Link>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/15 rounded-2xl overflow-hidden max-w-3xl">
            {[
              { k: "3.9★", v: "Google Rating" },
              { k: "457+", v: "Guest Reviews" },
              { k: "24/7", v: "Reception" },
              { k: "12 PM", v: "Check-in" },
            ].map((s) => (
              <div key={s.v} className="bg-espresso/60 backdrop-blur px-5 py-5">
                <div className="font-display text-2xl md:text-3xl text-gold">{s.k}</div>
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-cream/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STAY */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-5">
            <p className="eyebrow">Why stay with us</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">Everything you need, nothing you don't.</h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground text-base leading-relaxed">
            We keep things simple and well-kept. Comfortable rooms, the essentials done right, and the
            convenience of a full restaurant and bar on the ground floor — all at honest, friendly prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {features.map((f) => (
            <div key={f.title} className="hover-lift bg-card border border-border/70 rounded-2xl p-7">
              <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                <f.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl mt-5">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SNAPSHOT — asymmetric */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 relative">
            <img src={room.url} alt="Comfortable room at Hill View" className="rounded-2xl w-full aspect-[4/3] object-cover" />
            <img src={exterior.url} alt="Hotel exterior" className="hidden md:block absolute -bottom-10 -right-6 w-56 h-72 object-cover rounded-2xl border-8 border-cream shadow-2xl" />
          </div>
          <div className="md:col-span-5 md:pl-6">
            <p className="eyebrow">About Hill View</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">A home away from home in Nalasopara.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Tucked above Hotel Abhinandan Family Restaurant & Bar on Tulinj Road, Hill View is built for
              travelers, families and business visitors who want clean, comfortable rooms without the
              premium-hotel price tag.
            </p>
            <Link to="/about" className="btn-ghost-dark mt-8">Learn more <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* DINING TEASER */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="eyebrow">Downstairs · Ground floor</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">Hotel Abhinandan<br /><span className="italic">Family Restaurant & Bar.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              North Indian, Mughlai, Chinese, seafood, kebabs and desserts — a full family-friendly menu
              and a fully stocked bar, just an elevator ride away.
            </p>
            <Link to="/menu" className="btn-primary mt-8">Explore Our Menu <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 grid grid-cols-3 gap-3">
            <img src={restaurant1.url} alt="Restaurant interior" className="col-span-2 row-span-2 rounded-2xl aspect-square object-cover" />
            <img src={kebab.url} alt="Tandoori kebab platter" className="rounded-2xl aspect-square object-cover" />
            <img src={chicken.url} alt="Chicken specialty" className="rounded-2xl aspect-square object-cover" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Guest love</p>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05] max-w-xl">3.9★ from 450+ guests on Google.</h2>
            </div>
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-gold" strokeWidth={0} />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-cream/[0.04] border border-cream/10 rounded-2xl p-8">
                <blockquote className="font-display text-xl leading-snug text-cream/95">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-[0.7rem] uppercase tracking-[0.22em] text-cream/60">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">@hillviewresort</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">Follow our stay stories.</h2>
          </div>
          <a href="https://www.instagram.com/popular/hill-view-resort/" target="_blank" rel="noreferrer" className="btn-ghost-dark">
            <Instagram className="w-4 h-4" /> Follow on Instagram
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-12">
          {[room, restaurant1, kebab, exterior, chicken, restaurant2].map((img, i) => (
            <a key={i} href="https://www.instagram.com/popular/hill-view-resort/" target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl aspect-square group">
              <img src={img.url} alt={`Hill View moment ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </a>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-espresso text-cream p-10 md:p-20">
          <div className="absolute inset-0 opacity-30">
            <img src={exterior.url} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative max-w-2xl">
            <p className="eyebrow">Ready when you are</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">Book your stay at Hill View today.</h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/visit" className="btn-primary">Check Availability</Link>
              <a href={`tel:${PHONE}`} className="btn-outline"><Phone className="w-4 h-4" /> {PHONE}</a>
              <Link to="/visit" className="btn-outline"><MapPin className="w-4 h-4" /> Get Directions</Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
