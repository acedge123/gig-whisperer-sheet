import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const RecentHighlights = () => {
  const highlights = [
    {
      title: "End-to-End Digital & Martech Audit",
      description: "Completed a full-stack audit for a leading mortgage lender—covering acquisition technology, mobile UX, marketing operations, and technical infrastructure.",
    },
    {
      title: "Digital Innovation Agency of Record – CreatorIQ",
      description: "Built integrated products for joint enterprise clients including Lululemon, Wayfair, and SavageXFenty—Creator Gifting and Creator Storefront systems powering influencer-driven commerce.",
    },
    {
      title: "Enterprise-Grade Headless Commerce Build",
      description: "Launched a multi-tenant, AI-enhanced headless e-commerce platform (Supabase, React, Vercel) with unified checkout, personalization, and analytics.",
      link: "https://www.fourvisions.com",
      linkDisplay: "FourVisions",
      screenshot: "/screenshots/fourvisions.png"
    },
    {
      title: "AI Content Moderation API",
      description: "Proprietary ML moderation for brand safety with real-time UGC review at scale.",
      link: "https://www.creatorcontentcheck.com/",
      linkDisplay: "CreatorContentCheck",
      screenshot: "/screenshots/creatorcontentcheck.png"
    },
    {
      title: "API-Driven Storefront Affiliate Application",
      description: "Creator Affiliate Platform for Lowe's Home Improvement enabling product linking, dynamic tracking, and attribution.",
      link: "https://www.creatorlivenation.com/",
      linkDisplay: "CreatorLiveNation",
      screenshot: "/screenshots/creatorlivenation.png"
    },
    {
      title: "E-Commerce Re-Platform for Idea Village",
      description: "Re-platformed Idea Village (Copper Fit, Replenza Labs, MicroTouch) onto modern Shopify architecture—transforming a legacy DR advertiser into a data-driven, D2C-first operation.",
      link: "https://copperfitusa.com/",
      linkDisplay: "CopperFitUSA",
      screenshot: "/screenshots/copperfitusa.png"
    },
  ];

  return (
    <section id="highlights" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic uppercase mb-16 text-foreground">
          Recent Highlights
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-8 bg-card border-l-4 border-foreground hover:border-accent hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.02] transition-all duration-300 group"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold italic mb-4 group-hover:text-accent transition-colors text-foreground">
                {highlight.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                {highlight.description}
              </p>
              {highlight.link && highlight.screenshot && (
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a 
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-accent hover:underline text-sm font-semibold inline-block"
                    >
                      {highlight.linkDisplay} →
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-96 p-0 overflow-hidden border-foreground">
                    <img 
                      src={highlight.screenshot} 
                      alt={`Screenshot of ${highlight.linkDisplay}`}
                      className="w-full h-auto"
                    />
                  </HoverCardContent>
                </HoverCard>
              )}
              {highlight.link && !highlight.screenshot && (
                <a 
                  href={highlight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-accent hover:underline text-sm font-semibold inline-block"
                >
                  {highlight.linkDisplay} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;
