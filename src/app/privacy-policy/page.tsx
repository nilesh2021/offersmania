import type { Metadata } from "next";

import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OffersMania collects, uses, and protects information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        OffersMania (“we”, “us”) operates offersmania.com. This page explains
        what information may be collected when you use the site and how it is
        used.
      </p>
      <h2>Information we collect</h2>
      <p>
        We may collect usage data such as pages viewed, device type, and
        approximate location through standard web analytics. If you contact us,
        we receive the details you send (name, email, and message).
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        The site may use cookies or similar technologies to understand traffic
        and improve content. You can control cookies in your browser settings.
      </p>
      <h2>Affiliate links</h2>
      <p>
        Some outbound links are affiliate partnerships. Clicking those links may
        allow a partner to know you came from OffersMania. We do not sell your
        personal information.
      </p>
      <h2>Contact</h2>
      <p>
        For privacy questions, email hello@offersmania.com.
      </p>
    </LegalLayout>
  );
}
