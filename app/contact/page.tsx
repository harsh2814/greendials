export const metadata = {
  title: "Contact | GreenDials",
  description:
    "Get in touch with the GreenDials team via Instagram or by phone.",
};

/**
 * Contact page for GreenDials.  Instead of a form, visitors are encouraged to
 * follow the brand on Instagram and reach out directly to our team.  This
 * provides a simple, reliable way to connect without requiring form
 * submissions or backend handling.
 */
export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
        Get in Touch
      </h1>
      <p className="text-ivoryMuted mb-8">
        We’d love to hear from you. Follow us on social media or reach out
        directly to our team — we’re always happy to talk watches.
      </p>
      <div className="space-y-6">
        {/* Instagram contact info */}
        <div>
          <h2 className="text-xl font-serif font-semibold text-gold mb-2">
            Instagram
          </h2>
          <p className="text-ivoryMuted">
            Follow us at{' '}
            <a
              href="https://www.instagram.com/green.dials?igsh=MWFpOXVmZTc1M3NibA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline hover:text-goldLight"
            >
              @greendials
            </a>{' '}
            for the latest updates and rare watch insights.
          </p>
        </div>
        {/* Direct contact info */}
        <div>
          <h2 className="text-xl font-serif font-semibold text-gold mb-2">
            Contact
          </h2>
          <p className="text-ivoryMuted">
            CEO: Krish Gangani
            <br />
            Tech &amp; Support: Harsh Parmar
            <br />
            Phone:{' '}
            <a
              href="tel:+15147974413"
              className="text-gold underline hover:text-goldLight"
            >
              +1 (514) 797‑4413
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}