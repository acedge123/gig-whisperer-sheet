import { useState, useEffect } from 'react';
import logo from '@/assets/tga-logo.png';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after a minimum display time
    const minDisplayTime = setTimeout(() => {
      setIsFading(true);
    }, 800);

    // Handle window load event
    const handleLoad = () => {
      setTimeout(() => {
        setIsFading(true);
      }, 300);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minDisplayTime);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isFading) {
      const removeTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }
  }, [isFading]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-secondary rounded-full" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-accent rounded-full animate-spin" />
        </div>
        
        {/* Logo image */}
        <img 
          src={logo} 
          alt="The Gig Agency" 
          className="h-10 md:h-12 w-auto"
        />
        
        {/* Loading dots */}
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
