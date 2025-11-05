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
      title: "Digital Strategy",
      description: "Media, CRM, and creative workflow optimization",
    },
  ];

  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black mb-16">Core Competencies</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="p-8 bg-card border-l-4 border-accent"
            >
              <h3 className="text-2xl font-bold mb-3">
                {competency.title}
              </h3>
              <p className="text-muted-foreground">
                {competency.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
