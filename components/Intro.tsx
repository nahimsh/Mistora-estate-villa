import { Reveal } from "@/components/motion";

export default function Intro() {
  return (
    <section className="bg-offwhite py-section">
      <div className="container-fluid">
        <Reveal className="mx-auto max-w-prose text-center">
          <p className="font-serif text-2xl leading-relaxed text-forest-dark sm:text-3xl">
            Mistora is a single private villa on a working coffee estate —
            no neighbours, no shared walls, no one else&apos;s schedule but
            your own. Just hills, quiet, and the time to slow down.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
