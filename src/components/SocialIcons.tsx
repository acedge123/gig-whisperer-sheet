import { Linkedin, Twitter } from 'lucide-react';

const SocialIcons = () => {
  const socials = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/thegigagency/', 
      label: 'LinkedIn' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/thegigagency', 
      label: 'Twitter' 
    },
  ];

  return (
    <div 
      className="fixed left-6 z-40 hidden lg:flex flex-col gap-4"
      style={{ top: '33%' }}
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent transition-colors duration-200"
          aria-label={social.label}
        >
          <social.icon size={20} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
