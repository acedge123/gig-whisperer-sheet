const Snapshot = () => {
  const stats = [
    { label: "Founded", value: "2017" },
    { label: "HQ", value: "Los Angeles, CA" },
    { label: "Core Expertise", value: "AI + MarTech, Paid Advertising, E-Commerce, Product Innovation" },
  ];

  const leadership = [
    { name: "Alan Edgett", title: "CEO" },
    { name: "Sydney Gil", title: "VP Client Strategy" },
    { name: "Nicole Rothschild", title: "VP Customer Acquisition" },
  ];

  return (
    <section id="snapshot" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic uppercase mb-16 text-foreground">
          Snapshot
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-8 bg-card border-l-4 border-accent hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
            >
              <p className="font-body text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="font-body text-xl font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-12">
          <h3 className="font-display text-xl sm:text-2xl font-bold italic mb-8 text-accent">
            Leadership
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <div key={index}>
                <p className="font-body text-xl font-bold text-foreground">{person.name}</p>
                <p className="font-body text-muted-foreground">{person.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-secondary border-l-4 border-accent">
          <p className="font-body text-lg leading-relaxed text-foreground">
            <span className="font-bold">Positioning:</span> The Gig Agency operates as a digital transformation partner 
            for high-growth brands—bridging marketing strategy with technical execution across 
            platforms, products, and people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Snapshot;
