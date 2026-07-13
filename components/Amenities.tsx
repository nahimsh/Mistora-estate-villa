import { amenities } from "@/lib/site-config";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

function AmenityIcon({ icon }: { icon: string }) {
  const maskImage = `url(/icons/${icon}.svg)`;
  return (
    <span
      aria-hidden="true"
      className="block h-6 w-6 bg-forest transition-colors duration-700 ease-luxury group-hover:bg-gold-dark"
      style={{
        WebkitMaskImage: maskImage,
        maskImage,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export default function Amenities() {
  return (
    <section id="amenities" className="bg-offwhite py-section">
      <div className="container-fluid">
        <Reveal className="mb-16 max-w-lg">
          <span className="text-eyebrow uppercase text-gold-dark">Amenities</span>
          <h2 className="mt-4 font-serif text-display-sm text-forest-dark md:text-display-md">
            Thoughtful, not excessive
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {amenities.map((a) => (
            <RevealItem key={a.label} className="group flex flex-col items-start gap-4">
              <AmenityIcon icon={a.icon} />
              <span className="text-sm text-charcoal">{a.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
