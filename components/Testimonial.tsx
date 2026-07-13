"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/site-config";
import { luxuryEase } from "@/components/motion";

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-forest-dark py-section">
      <div className="container-fluid">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.8, ease: luxuryEase }}
            >
              <p className="font-serif text-2xl leading-relaxed text-offwhite sm:text-3xl md:text-4xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="mt-8 text-sm tracking-nav text-gold-light">
                {current.name.toUpperCase()} &middot; {current.place}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-px w-8 transition-colors duration-500 ${
                  i === index ? "bg-gold-light" : "bg-offwhite/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
