"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site, whatsappLink } from "@/lib/site-config";
import { luxuryEase } from "@/components/motion";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 22, ease: "linear" }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Mistora Estate Villa's cottage and pool reflection at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/55 via-forest-dark/20 to-forest-dark/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase, delay: 0.3 }}
          className="mb-6 text-eyebrow uppercase text-gold-light"
        >
          Suntikoppa &middot; Coorg
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: luxuryEase, delay: 0.5 }}
          className="font-serif text-5xl text-offwhite sm:text-6xl md:text-display-lg"
        >
          Mistora Estate Villa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase, delay: 0.75 }}
          className="mt-6 max-w-md text-base text-offwhite/85 sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase, delay: 0.95 }}
          className="mt-10"
        >
          <a
            href={whatsappLink(
              `Hi ${site.host}, I'd like to know more about booking Mistora Estate Villa.`
            )}
            target="_blank"
            rel="noopener"
            className="border border-offwhite/70 px-8 py-3.5 text-sm tracking-nav text-offwhite transition-colors duration-700 ease-luxury hover:bg-offwhite/10"
          >
            Enquire About Your Stay
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3 text-offwhite/80"
      >
        <span className="text-eyebrow uppercase">Scroll</span>
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.6, ease: luxuryEase, repeat: Infinity, repeatType: "reverse" }}
          className="h-10 w-px origin-top bg-offwhite/60"
        />
      </motion.div>
    </section>
  );
}
