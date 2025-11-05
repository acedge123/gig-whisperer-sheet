import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
          The Gig Agency
        </h1>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-2xl md:text-4xl font-bold text-accent">
            Digital Innovation & MarTech Advisory
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Positioned at the intersection of marketing intelligence, 
            data infrastructure, and AI-driven commerce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
