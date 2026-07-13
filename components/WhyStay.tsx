import { whyStay } from "@/lib/site-config";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

export default function WhyStay() {
  return (
    <section className="bg-offwhite py-section">
      <div className="container-fluid">
        <Reveal className="mb-16 max-w-lg">
          <span className="text-eyebrow uppercase text-gold-dark">
            Why Stay
          </span>
          <h2 className="mt-4 font-serif text-display-sm text-forest-dark md:text-display-md">
            Reasons guests return
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyStay.map((item) => (
            <RevealItem key={item.num} className="border-t border-charcoal/15 pt-6">
              <span className="font-serif text-lg text-gold-dark">{item.num}</span>
              <h3 className="mt-3 font-serif text-xl text-forest-dark">{item.title}</h3>
              <p className="mt-3 text-sm text-charcoal-soft">{item.copy}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
