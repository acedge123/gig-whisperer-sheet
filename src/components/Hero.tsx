import DiagonalStripe from './DiagonalStripe';
import phoneGif from '@/assets/TGA_homepage_phone.gif';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Diagonal stripe background */}
      <DiagonalStripe className="z-0" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-display text-lg sm:text-xl md:text-2xl font-medium italic text-accent mb-4">
              digital marketing & tech gurus
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold italic uppercase mb-8 leading-none text-foreground">
              We scale your team<br />
              <span className="text-accent">so you don't have to.</span>
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Digital marketing is hard. It requires a diverse team of creative, strategic and data-driven individuals. 
              We are an outsourcing solution for every unique aspect of Digital Marketing and Technology.
            </p>
          </div>
          
          {/* Phone GIF */}
          <div className="flex-shrink-0 w-64 sm:w-80 md:w-96 lg:w-[420px]">
            <img 
              src={phoneGif} 
              alt="TGA Digital Marketing on mobile" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
