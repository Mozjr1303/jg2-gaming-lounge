import { useEffect, useRef, useState } from 'react';

/**
 * Exact IntersectionObserver hook (threshold: 0.5) used by LoungeImages and CinemaSection
 * on https://the-game.gg/
 */
export const useIntersectionReveal = <T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.5
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const nodeRef = useRef<T | null>(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
      observer.disconnect();
    };
  }, [threshold]);

  return { isIntersecting, nodeRef };
};

/**
 * Detects clicks outside a referenced element (used by MenuPopup dropdowns).
 */
export const useClickOutside = <T extends HTMLElement = HTMLDivElement>(
  handler: () => void
) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
};
