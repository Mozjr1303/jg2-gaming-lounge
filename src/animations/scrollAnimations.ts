import { gsap, ScrollTrigger, prefersReducedMotion } from './gsapConfig';

/**
 * Exact horizontal ScrollTrigger pin configuration from https://the-game.gg/
 * Used by both GamingSwiper (#gameswiper_elements) and SpacesAndPackages (.spaces-and-packages__main)
 */
export const createHorizontalPinnedScroll = (
  scrollElement: HTMLElement | null,
  containerSelector: string
): gsap.core.Tween | null => {
  if (!scrollElement) return null;
  const container = document.querySelector<HTMLElement>(containerSelector);
  if (!container) return null;

  const getScrollDistance = () => {
    const c = document.querySelector<HTMLElement>(containerSelector);
    if (!c || !scrollElement) return 0;
    return Math.min(0, -scrollElement.offsetWidth + c.offsetWidth);
  };

  const tween = gsap.fromTo(
    scrollElement,
    { translateX: 0 },
    {
      translateX: () => getScrollDistance(),
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: scrollElement,
        start: 'top-=24px top',
        end: 'bottom',
        scrub: 0.6,
        pin: true,
        invalidateOnRefresh: true,
      },
    }
  );

  return tween;
};

export const smoothScrollToElement = (element: HTMLElement | null) => {
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top,
    left: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
};
