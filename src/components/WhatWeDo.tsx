const WhatWeDo = () => {
  const services = [
    {
      title: "Media Buying",
      items: [
        "Display / Programmatic",
        "Hyperlocal, Geo-targeted",
        "Retargeting",
        "Dynamic Product Feeds",
        "Paid Social: Facebook/Instagram, Tik Tok, Youtube, Reddit, Pinterest",
      ],
    },
    {
      title: "Custom AI Development",
      items: [
        "Custom SAAS Applications",
        "API's",
        "LLM Model",
        "Tech Advisory",
      ],
    },
    {
      title: "Creator Marketing",
      items: [
        "Strategy",
        "Research",
        "Recruitment & Management",
        "Campaign Optimization & Reporting",
      ],
    },
    {
      title: "SEO / SEM",
      items: [
        "Account & Campaign Strategy",
        "Media Management & Optimization",
        "Reporting / KPI",
        "Lifetime Value Analysis",
      ],
    },
    {
      title: "Creative",
      items: [
        "Website UX/UI",
        "Landing Pages",
        "Graphics, Animations & Video",
        "Blogging, Scripting, Pre/Post Production",
        "Email Templates & Management",
      ],
    },
    {
      title: "Web Software Development",
      items: [
        "Shopify, Wordpress, Custom Development",
        "React, Python, Django",
        "Event Tracking / Javascript",
        "Webhook Framework",
      ],
    },
  ];

  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="font-display text-lg sm:text-xl font-medium italic text-accent mb-2">
            what we do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic uppercase text-foreground">
            Digital Marketing
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-card border-l-4 border-foreground hover:border-accent hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold italic mb-4 text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="font-body text-muted-foreground italic text-sm"
                  >
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
