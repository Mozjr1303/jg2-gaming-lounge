import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const refreshScrollTriggers = () => {
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
};

export { gsap, ScrollTrigger };
