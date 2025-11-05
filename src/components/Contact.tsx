const Contact = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-16">Let's Build</h2>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Email</p>
            <a 
              href="mailto:admin@thegig.agency"
              className="text-2xl md:text-4xl font-bold text-accent hover:underline"
            >
              admin@thegig.agency
            </a>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Web</p>
            <a 
              href="https://www.thegig.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-4xl font-bold text-accent hover:underline"
            >
              www.thegig.agency
            </a>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Gig Agency. Digital transformation at the intersection of strategy and execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
