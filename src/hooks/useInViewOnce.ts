import { useState, useEffect, useRef } from 'react';

interface UseInViewOnceOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInViewOnce(options: UseInViewOnceOptions = {}) {
  const [hasRevealed, setHasRevealed] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.unobserve(element); // One-time only
        }
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -10% 0px",
        ...options
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasRevealed, options]);

  return { hasRevealed, ref: elementRef };
}