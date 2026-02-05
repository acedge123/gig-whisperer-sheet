import { Link } from "react-router-dom";

const TermsOfService = () => {
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
          Terms of Service
        </h1>
        <p className="font-body text-muted-foreground mb-6">
          The Gig Agency<br />
          Last Updated: February 5, 2026
        </p>
        <p className="font-body text-foreground/80 leading-relaxed mb-12">
          These Terms of Service ("Terms") govern access to and use of the website located at{" "}
          <a href="https://www.thegig.agency" className="text-accent hover:underline">
            https://www.thegig.agency
          </a>{" "}
          (the "Site") and any consulting, advisory, marketing, technology, analytics, or related services provided by EK Enterprises LLC d/b/a The Gig Agency ("The Gig Agency," "we," "us," or "our").
        </p>
        <p className="font-body text-foreground/80 leading-relaxed mb-12">
          By accessing the Site or engaging our services, you agree to these Terms.
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">1. Who We Are</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              The Gig Agency is a consulting and services firm providing strategy, marketing, media, technology, data, AI, affiliate, and related advisory services to businesses, agencies, and organizations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">2. Use of the Website</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">You may use the Site for lawful business purposes only. You agree not to:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Interfere with or disrupt the Site</li>
              <li>Attempt unauthorized access to systems or data</li>
              <li>Copy or reuse content without permission</li>
              <li>Use the Site for unlawful, misleading, or harmful purposes</li>
            </ul>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">We may modify or discontinue the Site at any time without notice.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">3. Consulting & Professional Services</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">All services provided by The Gig Agency are:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Advisory and professional services, not legal, tax, accounting, or investment advice</li>
              <li>Based on information provided by clients and third parties</li>
              <li>Subject to scope, timelines, and deliverables defined in written agreements, proposals, or statements of work ("SOW")</li>
            </ul>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">We do not guarantee specific business outcomes, revenue results, advertising performance, or return on investment.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">4. Client Responsibilities</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">Clients are responsible for:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Ensuring compliance with applicable laws, platform policies, and regulations</li>
              <li>Reviewing and approving deliverables in a timely manner</li>
              <li>Proper use of any recommendations, tools, or materials provided</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">5. Intellectual Property</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              All methodologies, frameworks, tools, templates, and know-how developed by The Gig Agency remain our intellectual property unless otherwise agreed in writing.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">
              Clients retain ownership of their trademarks, content, and proprietary data.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">
              Upon full payment, clients receive a limited, non-exclusive license to use deliverables for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">6. Confidentiality</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              We will treat non-public client information as confidential and use it solely to perform agreed services, subject to legal obligations and third-party platform requirements.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">
              Clients agree to treat our proprietary methods and materials as confidential.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">7. Third-Party Platforms & Tools</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              Our services may involve third-party platforms (e.g., advertising platforms, analytics tools, hosting providers, APIs).
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">We are not responsible for:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Third-party outages, policy changes, pricing changes, or platform decisions</li>
              <li>Data accuracy or availability from third-party systems</li>
              <li>Client violations of third-party terms</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">8. Disclaimers</h2>
            <p className="font-body text-foreground/80 leading-relaxed uppercase">
              THE SITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE."
            </p>
            <p className="font-body text-foreground/80 leading-relaxed uppercase mt-4">
              WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">9. Limitation of Liability</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">To the maximum extent permitted by law:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>The Gig Agency shall not be liable for indirect, incidental, special, or consequential damages</li>
              <li>Our total liability for any claim shall not exceed the fees paid by the client to us in the six (6) months preceding the claim</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">10. Indemnification</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              You agree to indemnify and hold harmless The Gig Agency and its members, officers, employees, and contractors from claims arising out of:
            </p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Your use of the Site or services</li>
              <li>Your violation of applicable laws or platform policies</li>
              <li>Content or data you provide</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">11. Termination</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              We may suspend or terminate access to the Site or services for violations of these Terms or applicable agreements.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">
              Provisions relating to IP, confidentiality, disclaimers, liability, and indemnification survive termination.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">12. Governing Law & Venue</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              These Terms are governed by the laws of the State of California, without regard to conflict-of-law rules.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">
              All disputes shall be resolved on an individual basis in state or federal courts located in California. Class actions are waived.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">13. Contact</h2>
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

export default TermsOfService;
