"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site, whatsappLink } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className="bg-forest-dark py-16 text-offwhite/70">
      <div className="container-fluid">
        <div className="grid grid-cols-1 gap-12 border-b border-offwhite/10 pb-12 sm:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-offwhite">Mistora Estate Villa</p>
            <p className="mt-4 max-w-xs text-sm">{site.location}</p>
          </div>

          <div>
            <p className="text-eyebrow uppercase text-gold-light">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`tel:${site.phoneHref}`} className="hover:text-offwhite">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-offwhite">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(`Hi ${site.host}, I'd like to know more about Mistora Estate Villa.`)}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-offwhite"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow uppercase text-gold-light">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={isHomePage ? link.href : `/${link.href}`}
                    className="hover:text-offwhite"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Mistora Estate Villa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-offwhite">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-offwhite">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
