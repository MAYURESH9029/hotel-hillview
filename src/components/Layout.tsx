import { Link } from "@tanstack/react-router";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const PHONE = "+919876543210"; // placeholder
const WHATSAPP = "https://wa.me/919876543210";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--color-cream)_85%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-xl md:text-[1.35rem] tracking-tight">Hill View</span>
          <span className="text-[0.62rem] tracking-[0.28em] uppercase text-muted-foreground -mt-0.5">Lodging & Boarding</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors relative [&.active]:text-foreground"
              activeProps={{ className: "active" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="text-sm flex items-center gap-2 text-foreground/80 hover:text-foreground">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
          <Link to="/visit" className="btn-primary">Check Availability</Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-5 py-6 flex flex-col gap-5">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} className="text-lg" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link to="/visit" className="btn-primary justify-center" onClick={() => setOpen(false)}>
              Check Availability
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur px-4 py-3 flex gap-2">
      <a href={`tel:${PHONE}`} className="flex-1 btn-ghost-dark justify-center !py-3">
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <Link to="/visit" className="flex-1 btn-primary justify-center !py-3">
        Check Availability
      </Link>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-cream mt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl">Hotel Hill View</h3>
          <p className="text-[0.62rem] tracking-[0.28em] uppercase text-cream/60 mt-1">Lodging & Boarding · Nalasopara East</p>
          <p className="mt-6 text-sm text-cream/70 max-w-md leading-relaxed">
            A comfortable, well-kept lodge in the heart of Nalasopara East — with Hotel Abhinandan
            Family Restaurant & Bar right downstairs.
          </p>
        </div>
        <div>
          <p className="eyebrow !text-cream/60">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {navItems.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-gold transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-cream/60">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><a href={`tel:${PHONE}`} className="hover:text-gold">{PHONE}</a></li>
            <li><a href={WHATSAPP} className="hover:text-gold">WhatsApp</a></li>
            <li className="text-cream/60 leading-relaxed">1st Floor, Hotel Abhinandan, Tulinj Rd, Nalasopara East, 401209</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Hotel Hill View Lodging & Boarding. All rights reserved.
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <SiteFooter />
      <MobileCTABar />
    </div>
  );
}

export { PHONE, WHATSAPP };
