import { site, whatsappLink } from "@/lib/site-config";
import { Reveal } from "@/components/motion";

export default function Location() {
  return (
    <section id="location" className="bg-offwhite py-section">
      <div className="container-fluid grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <span className="text-eyebrow uppercase text-gold-dark">Location</span>
          <h2 className="mt-4 font-serif text-display-sm text-forest-dark md:text-display-md">
            Find your way to Mistora
          </h2>
          <p className="mt-6 max-w-md text-charcoal-soft">
            Set within the coffee-growing hills of Coorg (Kodagu), the estate
            is a peaceful drive away from the region&apos;s main attractions.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="tracking-nav text-gold-dark">ADDRESS</dt>
              <dd className="mt-1 text-charcoal">{site.location}</dd>
            </div>
            <div>
              <dt className="tracking-nav text-gold-dark">GETTING THERE</dt>
              <dd className="mt-1 text-charcoal">
                Best reached via Mangalore or Bengaluru airports, with Mysuru
                as the nearest major railway hub.
              </dd>
            </div>
            <div>
              <dt className="tracking-nav text-gold-dark">CHECK-IN / CHECK-OUT</dt>
              <dd className="mt-1 text-charcoal">
                Flexible timing arranged directly with your host, {site.host}.
              </dd>
            </div>
          </dl>

          <a
            href={whatsappLink(
              `Hi ${site.host}, could you please share directions to Mistora Estate Villa?`
            )}
            target="_blank"
            rel="noopener"
            className="mt-10 inline-block border border-forest px-6 py-3 text-sm tracking-nav text-forest transition-colors duration-700 ease-luxury hover:bg-forest hover:text-offwhite"
          >
            Ask for Directions on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.15} className="relative min-h-[360px]">
          <iframe
            src="https://www.google.com/maps?q=Coorg,+Karnataka,+India&output=embed"
            title="Map showing the general location of Mistora Estate Villa in Coorg, Karnataka"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
          <p className="pointer-events-none absolute bottom-4 left-4 right-4 bg-offwhite/90 px-4 py-2 text-xs text-charcoal-soft">
            Map shown is a general view of Coorg. This embed will be updated
            with the exact map pin once available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
