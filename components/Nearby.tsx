import Image from "next/image";
import { nearbyAttractions } from "@/lib/site-config";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

export default function Nearby() {
  return (
    <section id="nearby" className="bg-offwhite py-section">
      <div className="container-fluid">
        <Reveal className="mb-16 max-w-lg">
          <span className="text-eyebrow uppercase text-gold-dark">Nearby</span>
          <h2 className="mt-4 font-serif text-display-sm text-forest-dark md:text-display-md">
            Coorg, from your doorstep
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyAttractions.map((place) => (
            <RevealItem key={place.name}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif text-lg text-forest-dark">{place.name}</h3>
              <p className="mt-2 text-sm text-charcoal-soft">{place.copy}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
