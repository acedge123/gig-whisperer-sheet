import DiagonalStripe from './DiagonalStripe';
import phoneGif from '@/assets/TGA_homepage_phone.gif';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Diagonal stripe background */}
      <DiagonalStripe className="z-0" />
      
      {/* Phone GIF - positioned to the right */}
      <div className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/3 z-20 hidden lg:block">
        <img 
          src={phoneGif} 
          alt="TGA Digital Marketing on mobile" 
          className="w-72 xl:w-80 2xl:w-96 h-auto drop-shadow-2xl"
        />
      </div>
      
      {/* Content - Centered */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <p className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold italic uppercase text-accent mb-6 tracking-wide">
          Digital Marketing & Tech Gurus
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px] font-bold italic uppercase leading-[0.95] mb-8">
          <span className="text-foreground block drop-shadow-sm">We Scale Your Team</span>
          <span className="text-accent block">So You Don't Have To.</span>
        </h1>
        <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Digital marketing is hard. It requires a diverse team of creative, strategic and data-driven individuals. 
          We are an outsourcing solution for every unique aspect of Digital Marketing and Technology.
        </p>
        
        {/* Mobile phone - shown below text on smaller screens */}
        <div className="mt-12 lg:hidden">
          <img 
            src={phoneGif} 
            alt="TGA Digital Marketing on mobile" 
            className="w-48 sm:w-64 mx-auto h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
