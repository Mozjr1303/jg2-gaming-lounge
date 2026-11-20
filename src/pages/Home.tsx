import React, { useCallback, useEffect, useRef, useState } from 'react';
import { refreshScrollTriggers } from '../animations/gsapConfig';
import { ContactSection } from '../components/ContactSection';
import { EventsSection } from '../components/EventsSection';
import { GallerySection } from '../components/GallerySection';
import { GamingSection } from '../components/GamingSection';
import { GamingSlider } from '../components/GamingSlider';
import { GoogleMapsSection } from '../components/GoogleMapsSection';
import { Hero } from '../components/Hero';
import { LoungeSection } from '../components/LoungeSection';
import { Navbar } from '../components/Navbar';
import { Preloader } from '../components/Preloader';
import { PricingSection } from '../components/PricingSection';
import { PromosSection } from '../components/PromosSection';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const MAX_ASSETS = 32;

export const Home: React.FC = () => {
  const gamingSectionRef = useRef<HTMLDivElement | null>(null);
  const loungeSectionRef = useRef<HTMLElement | null>(null);
  const eventsSectionRef = useRef<HTMLElement | null>(null);
  const promosSectionRef = useRef<HTMLElement | null>(null);
  const gallerySectionRef = useRef<HTMLElement | null>(null);
  const sapSectionRef = useRef<HTMLElement | null>(null);
  const starSectionRef = useRef<HTMLElement | null>(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadPortal, setReloadPortal] = useState(false);
  const [isMainSiteActive, setIsMainSiteActive] = useState(false);

  useSmoothScroll(isMainSiteActive);

  const handleAssetLoad = useCallback(() => {
    setLoadedCount((prev) => {
      const next = prev + 1;
      if (next >= MAX_ASSETS) {
        setTimeout(() => setIsLoading(false), 600);
      }
      return next;
    });
  }, []);

  const handleTextureReady = useCallback(() => {
    setLoadedCount((prev) => Math.max(prev, Math.floor(MAX_ASSETS * 0.85)));
    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 700);
    } else {
      window.addEventListener(
        'load',
        () => {
          setTimeout(() => setIsLoading(false), 700);
        },
        { once: true }
      );
    }
  }, []);

  // Smooth progress ticker so the preloader bar advances fluidly and never hangs
  useEffect(() => {
    document.title = 'JG2 Gaming Lounge - Play. Connect. Experience';
    const interval = setInterval(() => {
      setLoadedCount((prev) => {
        if (prev >= MAX_ASSETS) return prev;
        return prev + 2;
      });
    }, 110);

    const maxWait = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(maxWait);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      refreshScrollTriggers();
    }
  }, [isLoading]);

  const percentage = Math.min(100, Math.round((loadedCount / MAX_ASSETS) * 100));

  const handleReturnToPortal = useCallback(() => {
    setIsMainSiteActive(false);
    setReloadPortal(true);
  }, []);

  const handleEnterMainSite = useCallback(() => {
    setIsMainSiteActive(true);
    setTimeout(() => {
      refreshScrollTriggers();
    }, 150);
  }, []);

  return (
    <div>
      <Preloader percentage={percentage} isLoading={isLoading} />

      <Hero
        reload={reloadPortal}
        afterReload={setReloadPortal}
        onAssetLoad={handleAssetLoad}
        onTextureReady={handleTextureReady}
        onEnterMainSite={handleEnterMainSite}
      />

      <Navbar
        gamingSectionRef={gamingSectionRef}
        loungeSectionRef={loungeSectionRef}
        eventsSectionRef={eventsSectionRef}
        promosSectionRef={promosSectionRef}
        gallerySectionRef={gallerySectionRef}
        onUpClick={handleReturnToPortal}
        onLogoClick={handleReturnToPortal}
        onAssetLoad={handleAssetLoad}
      />

      <GamingSection
        ref={gamingSectionRef}
        sapSectionRef={sapSectionRef}
        onAssetLoad={handleAssetLoad}
      />

      <GamingSlider onAssetLoad={handleAssetLoad} />

      <LoungeSection
        ref={loungeSectionRef}
        onAssetLoad={handleAssetLoad}
      />

      <EventsSection
        ref={eventsSectionRef}
        promosSectionRef={promosSectionRef}
      />

      <PromosSection
        ref={promosSectionRef}
        sapSectionRef={sapSectionRef}
      />

      <GallerySection
        ref={gallerySectionRef}
        onAssetLoad={handleAssetLoad}
      />

      <PricingSection
        sapSectionRef={sapSectionRef}
        starSectionRef={starSectionRef}
        onAssetLoad={handleAssetLoad}
      />

      <GoogleMapsSection />

      <ContactSection
        gamingSectionRef={gamingSectionRef}
        loungeSectionRef={loungeSectionRef}
        eventsSectionRef={eventsSectionRef}
        promosSectionRef={promosSectionRef}
        gallerySectionRef={gallerySectionRef}
        sapSectionRef={sapSectionRef}
        onAssetLoad={handleAssetLoad}
      />
    </div>
  );
};
