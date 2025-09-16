import { useState, useEffect, useRef } from 'react';

interface UseScrollVisibilityProgressOptions {
  threshold?: number[];
  rootMargin?: string;
}

export function useScrollVisibilityProgress(
  options: UseScrollVisibilityProgressOptions = {}
) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const lastProgressRef = useRef(0);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create threshold array from 0 to 1 with 0.1 increments for smooth animation
    const defaultThresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    const thresholds = options.threshold || defaultThresholds;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const { intersectionRatio, isIntersecting } = entry;
        
        setIsVisible(isIntersecting);

        if (prefersReducedMotion) {
          // For reduced motion, jump directly to target when 50% visible
          const instantProgress = intersectionRatio >= 0.5 ? 1 : 0;
          setProgress(instantProgress);
          lastProgressRef.current = instantProgress;
          return;
        }

        // Only update progress when intersecting or if we're scrolling back up
        if (isIntersecting || intersectionRatio > 0) {
          // Apply cubic easing: t*t*(3-2*t) for smoother animation
          const rawProgress = Math.max(0, Math.min(1, intersectionRatio));
          const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);
          
          setProgress(easedProgress);
          lastProgressRef.current = easedProgress;
        } else if (intersectionRatio === 0 && lastProgressRef.current > 0) {
          // Element scrolled out of view upward - freeze at last value
          setProgress(lastProgressRef.current);
        }
      },
      {
        threshold: thresholds,
        rootMargin: options.rootMargin || '0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, prefersReducedMotion]);

  return {
    progress,
    isVisible,
    ref: elementRef
  };
}