import type { Metadata } from "next";

import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms that govern use of OffersMania.",
};

export default function Terms() {
  return (
    <LegalLayout title="Terms of Use">
      <p>
        By using OffersMania you agree to these terms. If you do not agree,
        please do not use the site.
      </p>
      <h2>Editorial content</h2>
      <p>
        Reviews and rankings are for general information. They are not a
        guarantee of results, safety, or product performance. Always verify
        current pricing and policies on the provider’s own site.
      </p>
      <h2>Affiliate disclosure</h2>
      <p>
        We may earn a commission if you sign up through certain links. That
        does not change the price you pay. Rankings remain editorial.
      </p>
      <h2>Acceptable use</h2>
      <p>
        Do not scrape the site in a way that harms service, impersonate
        OffersMania, or use content in a misleading commercial context without
        permission.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        The site is provided as-is. We are not liable for decisions you make
        based on comparisons, or for third-party products you visit from here.
      </p>
    </LegalLayout>
  );
}
