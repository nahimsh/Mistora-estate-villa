import type { Metadata } from "next";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Mistora Estate Villa",
  description:
    "Privacy Policy for Mistora Estate Villa, Coorg — how we collect, use and protect the information you share with us.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-offwhite pb-section pt-40">
      <div className="container-fluid max-w-prose">
        <span className="text-eyebrow uppercase text-gold-dark">Legal</span>
        <h1 className="mt-4 font-serif text-display-sm text-forest-dark">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-charcoal-soft">Last updated: 7 July 2026</p>

        <div className="mt-10 space-y-8 text-charcoal-soft [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-2 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-forest-dark [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
          <p>
            Mistora Estate Villa (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
            explains what information we collect when you visit this website
            or contact us, and how we use it.
          </p>

          <section>
            <h2>Information We Collect</h2>
            <p>
              We do not use tracking cookies, analytics scripts, or
              third-party advertising on this website. The only information
              we receive is what you choose to share directly with us — for
              example, your name, phone number, or travel dates when you
              message us on WhatsApp, call us, or send an email.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to your enquiry and confirm bookings</li>
              <li>To coordinate check-in, check-out and stay-related logistics</li>
              <li>To follow up regarding your stay, if you consent to it</li>
            </ul>
            <p className="mt-4">
              We never sell or share your personal information with third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              Messages sent via WhatsApp are subject to WhatsApp&apos;s own
              privacy policy. Google Maps, embedded on this site, is subject
              to Google&apos;s privacy policy.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We retain guest communication only as long as necessary to
              manage your booking and for reasonable record-keeping
              afterwards.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>
              You may request that we delete any personal information we
              hold about you at any time by contacting us using the details
              below.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              {site.host}, Mistora Estate Villa
              <br />
              Phone / WhatsApp:{" "}
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              <br />
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </section>

          <p className="italic">
            This policy may be updated from time to time. Please review it
            periodically for changes.
          </p>
        </div>
      </div>
    </div>
  );
}
