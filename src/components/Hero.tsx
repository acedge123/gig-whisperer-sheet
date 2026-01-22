import DiagonalStripe from './DiagonalStripe';
import phoneGif from '@/assets/TGA_homepage_phone.gif';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Diagonal stripe background */}
      <DiagonalStripe className="z-0" />
      
      {/* Phone GIF - positioned to the right */}
      <div className="absolute right-0 lg:right-8 xl:right-16 top-1/2 -translate-y-1/4 z-20 hidden lg:block">
        <img 
          src={phoneGif} 
          alt="TGA Digital Marketing on mobile" 
          className="w-80 xl:w-96 2xl:w-[450px] h-auto drop-shadow-2xl"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16">
        {/* Main Headline - Large Navy */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] 2xl:text-[154px] font-bold italic uppercase leading-[0.9] mb-16 text-foreground text-center lg:text-left max-w-4xl">
          Your AI, Marketing<br />
          & Tech Gurus
        </h1>
        
        {/* Two Value Prop Boxes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {/* Left Box */}
          <div className="border-t border-foreground pt-6">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold italic uppercase text-foreground mb-4">
              We Scale Your Team<br />
              So You Don't Have To.
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed italic">
              Digital marketing is hard. It requires a diverse team of creative, strategic and data-driven individuals. We are an outsourcing solution for every unique aspect of Digital Marketing and Technology.
            </p>
          </div>
          
          {/* Right Box */}
          <div className="border-t border-foreground pt-6">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold italic uppercase text-foreground mb-4">
              We Sit On Your Side<br />
              Of The Table.
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed italic">
              The Gig Agency charges on an hourly basis, NOT as a % of your media spend. So, our incentive is to maximize results for your media dollar.
            </p>
          </div>
        </div>
        
        {/* Mobile phone - shown below on smaller screens */}
        <div className="mt-12 lg:hidden flex justify-center">
          <img 
            src={phoneGif} 
            alt="TGA Digital Marketing on mobile" 
            className="w-56 sm:w-72 h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
