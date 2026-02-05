import { Link } from "react-router-dom";

const AIDataDisclosure = () => {
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
          AI & Data Use Disclosure
        </h1>
        <p className="font-body text-muted-foreground mb-12">
          The Gig Agency<br />
          Last Updated: February 5, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">1. Use of AI Tools</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              The Gig Agency may use AI-assisted tools to support research, analysis, ideation, optimization, and operational efficiency.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mt-4">
              AI tools are used to augment human judgment, not replace it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">2. Client Data & AI</h2>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Client data is not used to train public AI models.</li>
              <li>Client data is only processed in accordance with contractual obligations.</li>
              <li>AI outputs are reviewed by Agency personnel before delivery.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">3. No Automated Decision-Making</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              Agency does not provide fully automated decision-making for legal, financial, employment, credit, or eligibility determinations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">4. Transparency</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">Upon request, Agency will disclose:</p>
            <ul className="font-body text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li>Whether AI tools were used in a given engagement</li>
              <li>The general purpose of such tools</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">5. Responsibility</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              Clients remain responsible for final decisions, approvals, and implementation of recommendations, whether AI-assisted or not.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold italic uppercase text-foreground mb-4">6. Updates</h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              This disclosure may be updated as AI capabilities and regulations evolve.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AIDataDisclosure;
