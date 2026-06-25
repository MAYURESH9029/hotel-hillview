import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight, Instagram } from "lucide-react";
import { Page, PHONE, WHATSAPP } from "@/components/Layout";
import exterior from "@/assets/exterior.jpg.asset.json";
import room from "@/assets/room.jpg.asset.json";
import restaurant1 from "@/assets/restaurant1.jpg.asset.json";
import restaurant2 from "@/assets/restaurant2.jpg.asset.json";
import reception from "@/assets/reception.webp.asset.json";
import kebab from "@/assets/food-kebab.jpg.asset.json";

const ADDRESS = "1st Floor, Hotel Abhinandan Family Restaurant and Bar, Tulinj Rd, Nalasopara East, Vasai-Virar, Maharashtra 401209";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Hotel+Hill+View+Lodging+Boarding+Nalasopara+East";
const MAPS_EMBED = "https://www.google.com/maps?q=Hotel+Hill+View+Lodging+and+Boarding+Tulinj+Road+Nalasopara+East&output=embed";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Hotel Hill View, Nalasopara East" },
      { name: "description", content: "Find Hotel Hill View on Tulinj Road, Nalasopara East. Check-in 12 PM, check-out 11 AM. Call or WhatsApp to check availability." },
      { property: "og:title", content: "Visit Hotel Hill View — Nalasopara East" },
      { property: "og:description", content: "Address, directions, contact and check-in details for Hotel Hill View, Nalasopara East." },
      { property: "og:image", content: exterior.url },
      { property: "og:url", content: "/visit" },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Hotel",
        name: "Hotel Hill View Lodging & Boarding",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1st Floor, Hotel Abhinandan, Tulinj Road",
          addressLocality: "Nalasopara East",
          addressRegion: "Maharashtra",
          postalCode: "401209",
          addressCountry: "IN",
        },
        telephone: PHONE,
        aggregateRating: { "@type": "AggregateRating", ratingValue: "3.9", reviewCount: "457" },
        checkinTime: "12:00",
        checkoutTime: "11:00",
      }),
    }],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <Page>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 pt-16 md:pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Visit us</p>
            <h1 className="font-display text-5xl md:text-7xl mt-5 leading-[1.02]">
              Find us in <span className="italic">Nalasopara East.</span>
            </h1>
          </div>
          <div className="md:col-span-5 text-muted-foreground leading-relaxed">
            <p>{ADDRESS}</p>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-ghost-dark mt-6">
              <MapPin className="w-4 h-4" /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* MAP + DETAILS */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-8 rounded-2xl overflow-hidden border border-border h-[420px] md:h-[540px]">
          <iframe
            title="Hotel Hill View location"
            src={MAPS_EMBED}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="md:col-span-4 grid gap-4">
          <div className="bg-espresso text-cream rounded-2xl p-7">
            <Clock className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <h3 className="font-display text-2xl mt-4">Check-in & out</h3>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/60">Check-in</div>
                <div className="font-display text-3xl mt-1 text-gold">12:00 PM</div>
              </div>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/60">Check-out</div>
                <div className="font-display text-3xl mt-1">11:00 AM</div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-7">
            <h3 className="font-display text-2xl">Get in touch</h3>
            <p className="text-sm text-muted-foreground mt-2">Reception is happy to help with availability, directions or dinner reservations.</p>
            <div className="mt-5 flex flex-col gap-2">
              <a href={`tel:${PHONE}`} className="btn-primary justify-center"><Phone className="w-4 h-4" /> Call {PHONE}</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost-dark justify-center">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <img src={exterior.url} alt="Hill View building exterior" className="md:col-span-6 rounded-2xl aspect-[4/3] object-cover" />
          <div className="md:col-span-6">
            <p className="eyebrow">Neighborhood</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">Centrally placed in Nala Sopara.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We're on Tulinj Road, with easy access to local transit, markets and everyday essentials.
              Whether you're here for work, family or a quick stopover, you'll find getting around
              effortless.
            </p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">@hillviewresort</p>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">See Hill View in real life.</h2>
            </div>
            <a href="https://www.instagram.com/popular/hill-view-resort/" target="_blank" rel="noreferrer" className="btn-ghost-dark">
              <Instagram className="w-4 h-4" /> Follow on Instagram
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            {[reception, room, restaurant1, kebab, restaurant2, exterior, room, restaurant1].slice(0, 4).map((img, i) => (
              <a key={i} href="https://www.instagram.com/popular/hill-view-resort/" target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl aspect-square group">
                <img src={img.url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-espresso text-cream p-10 md:p-20">
          <div className="absolute inset-0 opacity-25">
            <img src={room.url} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative max-w-2xl">
            <p className="eyebrow">Ready to check in?</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">Book your stay at Hill View.</h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="btn-primary"><Phone className="w-4 h-4" /> Check Availability</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <Link to="/menu" className="btn-outline">Browse Menu <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
