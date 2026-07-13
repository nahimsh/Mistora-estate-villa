"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, site, whatsappLink } from "@/lib/site-config";

export default function Header() {
  const pathname = usePathname();
  // Only the homepage has a dark, full-bleed hero behind the header — on
  // every other route (e.g. the legal pages) the header must default to
  // its solid style, or its white-on-transparent text is invisible against
  // the page's light background.
  const hasHero = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!hasHero) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const solid = !hasHero || scrolled || menuOpen;
  const linkHref = (href: string) => (hasHero ? href : `/${href}`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-luxury ${
          solid
            ? "border-b border-charcoal/10 bg-offwhite/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-fluid flex h-20 items-center justify-between md:h-24">
          <a
            href={hasHero ? "#top" : "/"}
            className={`font-serif text-lg tracking-wide transition-colors duration-700 ${
              solid ? "text-forest-dark" : "text-offwhite"
            }`}
          >
            Mistora
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={linkHref(link.href)}
                className={`px-4 py-2 text-sm tracking-nav transition-colors duration-700 hover:opacity-70 ${
                  solid ? "text-charcoal" : "text-offwhite"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={whatsappLink(
                `Hi ${site.host}, I'd like to know more about booking Mistora Estate Villa.`
              )}
              target="_blank"
              rel="noopener"
              className={`border px-6 py-2.5 text-sm tracking-nav transition-colors duration-700 ${
                solid
                  ? "border-forest text-forest hover:bg-forest hover:text-offwhite"
                  : "border-offwhite/60 text-offwhite hover:bg-offwhite/10"
              }`}
            >
              Enquire
            </a>
          </div>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-px w-6 transition-all duration-500 ${
                solid ? "bg-charcoal" : "bg-offwhite"
              } ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-500 ${
                solid ? "bg-charcoal" : "bg-offwhite"
              } ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Rendered as a sibling of <header>, not a descendant — header's
          backdrop-blur (applied when solid) would otherwise establish a new
          containing block for this fixed-position panel and break its
          full-viewport positioning. */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 top-20 z-[60] flex flex-col justify-center gap-2 bg-offwhite px-8 transition-opacity duration-500 ease-luxury lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={linkHref(link.href)}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className={`border-b border-charcoal/10 py-5 font-serif text-2xl text-forest-dark transition-all duration-500 ease-luxury ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href={whatsappLink(
            `Hi ${site.host}, I'd like to know more about booking Mistora Estate Villa.`
          )}
          target="_blank"
          rel="noopener"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
          className={`mt-8 border border-forest px-6 py-3 text-center text-sm tracking-nav text-forest transition-all duration-500 ease-luxury ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          Enquire on WhatsApp
        </a>
      </div>
    </>
  );
}
