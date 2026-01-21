import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const SideBar = () => {
  const socials = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/thegigagency/', 
      label: 'Facebook' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/thegigagency', 
      label: 'Twitter' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/thegigagency/', 
      label: 'LinkedIn' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/thegigagency/', 
      label: 'Instagram' 
    },
  ];

  return (
    <div className="fixed left-6 top-0 bottom-0 z-40 hidden lg:flex flex-col items-center justify-center">
      {/* Social Icons */}
      <div className="flex flex-col gap-6 mb-16">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors duration-200"
            aria-label={social.label}
          >
            <social.icon size={24} strokeWidth={1.5} />
          </a>
        ))}
      </div>
      
      {/* Contact Us with vertical line */}
      <div className="flex flex-col items-center">
        <a
          href="#contact"
          className="font-display text-xs font-bold tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-200"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}
        >
          Contact Us
        </a>
        <div className="w-px h-20 bg-foreground mt-4" />
      </div>
    </div>
  );
};

export default SideBar;
