const HowWeDoIt = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="font-display text-lg sm:text-xl font-medium italic text-accent mb-2">
            how do we do it?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic uppercase text-foreground">
            On-Demand Cross-Trained Specialists
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-card border-l-4 border-accent">
            <p className="font-body text-lg text-foreground leading-relaxed">
              The Gig Agency recruits, develops, and cross-trains our employees to be Digital Marketing experts — On Demand for our clients.
            </p>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              Either remote or on-site, our staff can augment your team (or be your outsourced team!) in any area of Digital Marketing.
            </p>
          </div>
          
          <div className="p-8 bg-card border-l-4 border-accent">
            <p className="font-body text-lg text-foreground leading-relaxed">
              Backed by a full-compliment of Expert Product Managers, IT Developers, and Process management, The Gig Agency staff can execute the fastest, best-converting landing pages to the most complicated new website builds with best practices and cost-effective deployment times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
