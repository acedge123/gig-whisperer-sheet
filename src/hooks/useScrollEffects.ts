import { useState, useEffect, useCallback } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isHeaderVisible: boolean;
  parallaxOffset: number;
}

export const useScrollEffects = (threshold = 5, headerHideDistance = 100) => {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isHeaderVisible: true,
    parallaxOffset: 0,
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    setState((prevState) => {
      const delta = currentScrollY - prevState.scrollY;
      
      // Only trigger direction change if delta exceeds threshold
      if (Math.abs(delta) < threshold) {
        return {
          ...prevState,
          scrollY: currentScrollY,
          parallaxOffset: currentScrollY / 3,
        };
      }

      const newDirection = delta > 0 ? 'down' : 'up';
      
      // Header visibility logic
      let isHeaderVisible = prevState.isHeaderVisible;
      if (currentScrollY < headerHideDistance) {
        // Always show header near top
        isHeaderVisible = true;
      } else if (newDirection === 'down') {
        isHeaderVisible = false;
      } else if (newDirection === 'up') {
        isHeaderVisible = true;
      }

      return {
        scrollY: currentScrollY,
        scrollDirection: newDirection,
        isHeaderVisible,
        parallaxOffset: currentScrollY / 3,
      };
    });
  }, [threshold, headerHideDistance]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return state;
};
