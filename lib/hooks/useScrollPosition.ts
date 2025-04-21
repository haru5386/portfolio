import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollX: number;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      });
    };

    window.addEventListener('scroll', updatePosition);
    
    // Initial position
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
} 