"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { villaRows } from "@/lib/site-config";
import { Reveal } from "@/components/motion";

function VillaRow({
  row,
  index,
}: {
  row: (typeof villaRows)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
        index > 0 ? "mt-24 md:mt-36" : ""
      }`}
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden ${
          reversed ? "md:order-2" : ""
        }`}
      >
        <motion.div style={{ y }} className="absolute inset-0 -top-8 -bottom-8">
          <Image
            src={row.image}
            alt={row.alt}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <Reveal className={reversed ? "md:order-1" : ""}>
        <span className="text-eyebrow uppercase text-gold-dark">{row.eyebrow}</span>
        <h3 className="mt-4 font-serif text-3xl text-forest-dark sm:text-display-sm">
          {row.title}
        </h3>
        <p className="mt-5 max-w-md text-charcoal-soft">{row.copy}</p>
      </Reveal>
    </div>
  );
}

export default function Villa() {
  return (
    <section id="villa" className="overflow-hidden bg-offwhite py-section">
      <div className="container-fluid">
        <Reveal className="mb-20 max-w-lg">
          <span className="text-eyebrow uppercase text-gold-dark">The Villa</span>
          <h2 className="mt-4 font-serif text-display-sm text-forest-dark md:text-display-md">
            Every detail, considered
          </h2>
        </Reveal>

        {villaRows.map((row, i) => (
          <VillaRow key={row.id} row={row} index={i} />
        ))}
      </div>
    </section>
  );
}
