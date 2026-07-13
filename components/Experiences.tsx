import Image from "next/image";
import { experiences } from "@/lib/site-config";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

export default function Experiences() {
  return (
    <section id="experiences" className="bg-forest-dark py-section">
      <div className="container-fluid">
        <Reveal className="mb-16 max-w-lg">
          <span className="text-eyebrow uppercase text-gold-light">
            Experiences
          </span>
          <h2 className="mt-4 font-serif text-display-sm text-offwhite md:text-display-md">
            Time, spent well
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {experiences.map((exp) => (
            <RevealItem key={exp.id} className="group relative aspect-[4/3] overflow-hidden">
              <Image
                src={exp.image}
                alt={exp.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-900 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-7 opacity-90 transition-all duration-700 ease-luxury group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-serif text-2xl text-offwhite">{exp.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-offwhite/75">{exp.copy}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
