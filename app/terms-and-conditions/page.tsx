import type { Metadata } from "next";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mistora Estate Villa",
  description:
    "Booking terms and conditions for Mistora Estate Villa, Coorg — reservations, cancellations, house rules and guest responsibilities.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <div className="bg-offwhite pb-section pt-40">
      <div className="container-fluid max-w-prose">
        <span className="text-eyebrow uppercase text-gold-dark">Legal</span>
        <h1 className="mt-4 font-serif text-display-sm text-forest-dark">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-sm text-charcoal-soft">Last updated: 7 July 2026</p>

        <div className="mt-10 space-y-8 text-charcoal-soft [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-2 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-forest-dark [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
          <p>
            These Terms &amp; Conditions govern bookings made with Mistora
            Estate Villa, Coorg. By reserving a stay with us, you agree to
            the terms outlined below. Please contact {site.host} directly
            for any clarification before confirming your booking.
          </p>

          <section>
            <h2>Reservations</h2>
            <p>
              Bookings are confirmed only after direct communication with{" "}
              {site.host} via WhatsApp, phone or email, and once mutually
              agreed booking details (dates, guest count, and payment terms)
              are confirmed.
            </p>
          </section>

          <section>
            <h2>Payments</h2>
            <p>
              Payment terms, including any advance or security deposit, will
              be communicated at the time of booking confirmation. Please
              retain proof of payment for your records.
            </p>
          </section>

          <section>
            <h2>Cancellations &amp; Rescheduling</h2>
            <p>
              Cancellation and rescheduling terms will be discussed and
              agreed upon at the time of booking. We recommend confirming
              these details over WhatsApp before making payment.
            </p>
          </section>

          <section>
            <h2>Check-in &amp; Check-out</h2>
            <p>
              Standard check-in and check-out timings will be shared at the
              time of booking and may be adjusted based on availability,
              subject to confirmation with your host.
            </p>
          </section>

          <section>
            <h2>House Rules</h2>
            <ul>
              <li>
                Guests are expected to treat the villa, its furnishings and
                the estate grounds with care and respect.
              </li>
              <li>Any damage caused during the stay may be charged to the guest.</li>
              <li>
                Please be mindful of noise levels, particularly during late
                hours, out of respect for the peaceful setting and
                neighbouring properties.
              </li>
              <li>
                Smoking and open flames are only permitted in designated
                outdoor areas such as the campfire and BBQ zones.
              </li>
              <li>
                The number of guests should not exceed the count confirmed
                at the time of booking.
              </li>
            </ul>
          </section>

          <section>
            <h2>Liability</h2>
            <p>
              Mistora Estate Villa takes reasonable care to ensure guest
              safety and comfort but is not liable for personal injury,
              loss, or damage to personal belongings occurring during your
              stay, except where caused by our negligence.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>
              These terms may be updated from time to time. The latest
              version will always be available on this page.
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
        </div>
      </div>
    </div>
  );
}
