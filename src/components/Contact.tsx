const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic uppercase mb-16 text-foreground">
          Let's Build
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <p className="font-body text-sm text-muted-foreground mb-2 uppercase tracking-wider">Email</p>
            <a 
              href="mailto:admin@thegig.agency"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold italic text-accent hover:underline"
            >
              admin@thegig.agency
            </a>
          </div>
          
          <div>
            <p className="font-body text-sm text-muted-foreground mb-2 uppercase tracking-wider">Web</p>
            <a 
              href="https://www.thegig.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold italic text-accent hover:underline"
            >
              www.thegig.agency
            </a>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Gig Agency. Digital transformation at the intersection of strategy and execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
