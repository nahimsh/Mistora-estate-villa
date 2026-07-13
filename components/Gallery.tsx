"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages } from "@/lib/site-config";
import { Reveal, luxuryEase } from "@/components/motion";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, showPrev, showNext]);

  const active = openIndex !== null ? galleryImages[openIndex] : null;

  return (
    <section id="gallery" className="bg-offwhite py-section">
      <div className="container-fluid">
        <Reveal className="mb-16 max-w-lg">
          <span className="text-eyebrow uppercase text-gold-dark">Gallery</span>
          <h2 className="mt-4 font-serif text-display-sm text-forest-dark md:text-display-md">
            A glimpse into Mistora
          </h2>
        </Reveal>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open ${img.caption} image`}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden text-left"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={900}
                height={600}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full transition-transform duration-900 ease-luxury group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-forest-dark/80 to-transparent px-4 py-4 text-sm text-offwhite opacity-0 transition-all duration-500 ease-luxury group-hover:translate-y-0 group-hover:opacity-100">
                {img.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: luxuryEase }}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-dark p-6"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-6 top-6 text-offwhite/80 transition-opacity hover:opacity-60"
            >
              Close
            </button>
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-4 text-offwhite/80 transition-opacity hover:opacity-60 md:left-8"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-4 text-offwhite/80 transition-opacity hover:opacity-60 md:right-8"
            >
              Next
            </button>

            <div className="relative h-[70vh] w-[90vw] md:h-[80vh] md:w-[85vw]">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p className="absolute bottom-8 left-0 right-0 text-center font-serif text-lg text-offwhite">
              {active.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
