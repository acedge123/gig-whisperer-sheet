const CoreCompetencies = () => {
  const competencies = [
    {
      title: "MarTech & Data Architecture",
      description: "CDP design, CAPI integrations, advanced analytics pipelines",
    },
    {
      title: "E-Commerce Engineering",
      description: "Headless storefronts, checkout orchestration, subscriptions & affiliate ecosystems",
    },
    {
      title: "AI & Automation",
      description: "Content intelligence, personalization, recommendation APIs",
    },
    {
      title: "Digital Strategy & Execution",
      description: "Paid media ad buying, email management, creator & influencer recruitment, CRM optimization, and creative workflow management",
    },
  ];

  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="font-display text-lg sm:text-xl font-medium italic text-accent mb-2">
            What We Do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic uppercase text-foreground">
            Core Competencies
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="p-8 bg-card border-l-4 border-foreground hover:border-accent hover:bg-card hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold italic mb-3 text-foreground group-hover:text-accent transition-colors">
                {competency.title}
              </h3>
              <p className="font-body text-muted-foreground italic">
                — {competency.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
