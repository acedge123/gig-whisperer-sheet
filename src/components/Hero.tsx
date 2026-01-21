import DiagonalStripe from './DiagonalStripe';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Diagonal stripe background */}
      <DiagonalStripe className="z-0" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold italic uppercase mb-8 leading-none text-foreground">
          The Gig Agency
        </h1>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium italic text-accent">
            Digital Innovation & MarTech Advisory
          </p>
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Positioned at the intersection of marketing intelligence, 
            data infrastructure, and AI-driven commerce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
