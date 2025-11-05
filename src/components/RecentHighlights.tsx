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
    },
    {
      title: "AI Content Moderation API",
      description: "Proprietary ML moderation for brand safety with real-time UGC review at scale.",
      link: "https://www.creatorcontentcheck.com/",
      linkDisplay: "CreatorContentCheck"
    },
    {
      title: "API-Driven Storefront Affiliate Application",
      description: "Creator Affiliate Platform for Lowe's Home Improvement enabling product linking, dynamic tracking, and attribution.",
      link: "https://www.creatorlivenation.com/",
      linkDisplay: "CreatorLiveNation"
    },
    {
      title: "E-Commerce Re-Platform for Idea Village",
      description: "Re-platformed Idea Village (Copper Fit, Replenza Labs, MicroTouch) onto modern Shopify architecture—transforming a legacy DR advertiser into a data-driven, D2C-first operation.",
      link: "https://copperfitusa.com/",
      linkDisplay: "CopperFitUSA"
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black mb-16">Recent Highlights</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-8 bg-background border border-border hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {highlight.description}
              </p>
              {highlight.link && (
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a 
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-sm font-semibold inline-block"
                    >
                      {highlight.linkDisplay}
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Visit Site</p>
                      <p className="text-xs text-muted-foreground break-all">{highlight.link}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;
