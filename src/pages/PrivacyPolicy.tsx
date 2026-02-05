import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <Link 
          to="/" 
          className="font-body text-sm text-accent hover:underline mb-8 inline-block"
        >
          ← Back to Home
        </Link>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold italic uppercase mb-4 text-foreground">
          Privacy Policy
        </h1>
        <p className="font-body text-muted-foreground mb-12">
          The Gig Agency<br />
          Last Updated: February 5, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">1. Introduction</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              This Privacy Policy explains how The Gig Agency collects, uses, and protects information obtained through our Site and services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">2. Information We Collect</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">We may collect:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Contact information (name, email, company)</li>
              <li>Business information provided by clients</li>
              <li>Website usage data (IP address, browser type, pages visited)</li>
              <li>Communications sent to us</li>
            </ul>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">We do not sell personal data.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">3. How We Use Information</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">We use information to:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Provide and improve our services</li>
              <li>Communicate with clients and prospects</li>
              <li>Manage projects and billing</li>
              <li>Analyze website performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">4. Cookies & Analytics</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              We may use cookies and analytics tools to understand site usage and improve performance. You may disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">5. Sharing of Information</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">We may share information with:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Service providers (e.g., hosting, analytics, payment processors)</li>
              <li>Legal or regulatory authorities when required</li>
            </ul>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">We do not share data for unrelated third-party marketing.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">6. Data Retention</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              We retain information as long as necessary to fulfill business purposes, contractual obligations, or legal requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">7. Data Security</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              We use reasonable administrative, technical, and physical safeguards to protect information. No system can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">8. Your Rights</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">Depending on your location, you may have rights to:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Access or correct your information</li>
              <li>Request deletion</li>
              <li>Object to certain processing</li>
            </ul>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">
              Requests may be sent to{" "}
              <a href="mailto:admin@thegig.agency" className="text-accent hover:underline">
                admin@thegig.agency
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">9. California Privacy Rights</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              California residents may request disclosure or deletion of personal information pursuant to the CCPA, subject to legal exceptions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">10. Changes</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              We may update this Privacy Policy from time to time. Updates will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">11. Contact</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              📧{" "}
              <a href="mailto:admin@thegig.agency" className="text-accent hover:underline">
                admin@thegig.agency
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
