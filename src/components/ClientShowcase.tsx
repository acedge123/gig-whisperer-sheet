import hypeachLogo from '@/assets/clients/hypeach.jpg';
import valassisLogo from '@/assets/clients/valassis.jpg';
import loandepotLogo from '@/assets/clients/loandepot.jpg';
import creatoriqLogo from '@/assets/clients/creatoriq.png';
import creditanddebtLogo from '@/assets/clients/creditanddebt.png';
import copperfitLogo from '@/assets/clients/copperfit.png';
import savageLogo from '@/assets/clients/savage.png';

const ClientShowcase = () => {
  const clients = [
    { name: "CreatorIQ", logo: creatoriqLogo },
    { name: "Copper Fit", logo: copperfitLogo },
    { name: "Savage X Fenty", logo: savageLogo },
    { name: "loanDepot", logo: loandepotLogo },
    { name: "Valassis", logo: valassisLogo },
    { name: "Hypeach", logo: hypeachLogo },
    { name: "Credit & Debt", logo: creditanddebtLogo },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic uppercase mb-16 text-foreground text-center">
          Some clients who love us
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
