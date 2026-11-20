import { gsap, prefersReducedMotion } from './gsapConfig';

/**
 * Animates section headings and eyebrow text on scroll entrance
 * while guaranteeing final resting state has opacity: 1 and transform: none.
 */
export const createSectionTextEntrance = (
  container: HTMLElement | null,
  selector: string = '[data-animate-text]'
) => {
  if (!container || prefersReducedMotion()) return null;

  const elements = container.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return null;

  const ctx = gsap.context(() => {
    elements.forEach((el, idx) => {
      gsap.fromTo(
        el,
        {
          y: 28,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          delay: idx * 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });
  }, container);

  return ctx;
};
