import type { Metadata } from "next";

import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimers for OffersMania reviews and affiliate links.",
};

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer">
      <p>
        OffersMania publishes comparisons of software and AI tools. Content is
        independent editorial opinion unless stated otherwise.
      </p>
      <h2>Not professional advice</h2>
      <p>
        Nothing on this site is legal, financial, medical, or relationship
        advice. Software and tool choices carry personal risk. Use products
        responsibly and follow their safety tools.
      </p>
      <h2>Third-party products</h2>
      <p>
        We do not operate the products we review. Features, pricing, and
        availability can change without notice. Confirm details on the official
        site before you buy or subscribe.
      </p>
      <h2>Affiliate relationships</h2>
      <p>
        Some links are sponsored or affiliate links. We may be paid if you
        register or purchase after clicking. This helps fund the site.
      </p>
      <h2>Adult content</h2>
      <p>
        Some pages may include adult-oriented content and are intended for
        adults only.
      </p>
    </LegalLayout>
  );
}
