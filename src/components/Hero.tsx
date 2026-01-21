import DiagonalStripe from './DiagonalStripe';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Diagonal stripe background */}
      <DiagonalStripe className="z-0" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <p className="font-display text-lg sm:text-xl md:text-2xl font-medium italic text-accent mb-4">
          digital marketing & tech gurus
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold italic uppercase mb-8 leading-none text-foreground">
          We scale your team<br />
          <span className="text-accent">so you don't have to.</span>
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Digital marketing is hard. It requires a diverse team of creative, strategic and data-driven individuals. 
          We are an outsourcing solution for every unique aspect of Digital Marketing and Technology.
        </p>
      </div>
    </section>
  );
};

export default Hero;
