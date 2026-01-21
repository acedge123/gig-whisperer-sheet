const ClientShowcase = () => {
  const industries = [
    "Mortgage & Fintech",
    "Retail & E-Commerce",
    "SaaS & Creator Economy",
  ];

  const clients = [
    "CreatorIQ",
    "Lululemon",
    "Wayfair",
    "SavageXFenty",
    "Lowe's",
    "Guaranteed Rate",
    "Idea Village",
    "West Capital Mortgage",
    "Guild Mortgage",
    "loanDepot",
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic uppercase mb-16 text-foreground">
          Clients & Sectors
        </h2>
        
        <div className="mb-16">
          <h3 className="font-display text-xl sm:text-2xl font-bold italic mb-8 text-accent">
            Industries
          </h3>
          <div className="flex flex-wrap gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card border border-foreground text-foreground font-body font-bold hover:border-accent hover:text-accent transition-colors duration-200"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold italic mb-8 text-accent">
            Select Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border hover:border-accent transition-all duration-300 flex items-center justify-center text-center opacity-70 hover:opacity-100"
              >
                <p className="font-body font-bold text-sm md:text-base text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
