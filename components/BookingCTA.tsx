import { site, whatsappLink } from "@/lib/site-config";
import { Reveal } from "@/components/motion";

export default function BookingCTA() {
  return (
    <section id="enquire" className="bg-offwhite py-section">
      <div className="container-fluid text-center">
        <Reveal className="mx-auto max-w-xl">
          <span className="text-eyebrow uppercase text-gold-dark">
            Plan Your Stay
          </span>
          <h2 className="mt-4 font-serif text-display-sm text-forest-dark md:text-display-md">
            Reach out directly to {site.host}
          </h2>
          <p className="mt-5 text-charcoal-soft">
            No booking platforms, no commission — just a direct conversation
            with your host about dates, availability and rates.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(
                `Hi ${site.host}, I'd like to know more about booking Mistora Estate Villa.`
              )}
              target="_blank"
              rel="noopener"
              className="w-full border border-forest bg-forest px-8 py-3.5 text-sm tracking-nav text-offwhite transition-colors duration-700 ease-luxury hover:bg-forest-light sm:w-auto"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="w-full border border-forest px-8 py-3.5 text-sm tracking-nav text-forest transition-colors duration-700 ease-luxury hover:bg-forest hover:text-offwhite sm:w-auto"
            >
              Call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
