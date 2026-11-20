import React, { useEffect, useRef } from 'react';
import { createHorizontalPinnedScroll } from '../animations/scrollAnimations';
import { IMAGES } from '../assets/images/assetUrls';

interface GamingSliderProps {
  onAssetLoad: () => void;
}

interface SlideItem {
  title: string;
  alt: string;
  src: string;
  objectPosition: string;
  fit?: 'cover' | 'contain';
}

const SLIDES: SlideItem[] = [
  {
    title: 'Standard 55"',
    alt: 'JG2 Standard 55 inch PS5 station',
    src: IMAGES.slide1Premium,
    objectPosition: 'center center',
    fit: 'contain',
  },
  {
    title: 'Premium 75"',
    alt: 'JG2 Premium 75 inch big-screen station',
    src: IMAGES.slide2PremiumPlus,
    objectPosition: 'center center',
    fit: 'contain',
  },
  {
    title: 'Meta Quest VR',
    alt: 'JG2 Meta Quest VR zone',
    src: IMAGES.slide3Bootcamp,
    objectPosition: 'center 22%',
  },
  {
    title: 'EA FC 27 Arena',
    alt: 'JG2 EA Sports FC 27 competitive zone',
    src: IMAGES.slide4Vip,
    objectPosition: 'center center',
  },
  {
    title: 'Squad Lounge',
    alt: 'JG2 Squad hangout lounge',
    src: IMAGES.slide5VipPlus,
    objectPosition: 'center center',
  },
];

export const GamingSlider: React.FC<GamingSliderProps> = ({ onAssetLoad }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tween = createHorizontalPinnedScroll(
      scrollRef.current,
      '#gameswiper_container'
    );
    return () => {
      if (tween) {
        tween.scrollTrigger?.kill();
        tween.kill();
      }
    };
  }, []);

  return (
    <div className="GamingSwiper_gamingSwiperWrapper__fADts">
      <div
        id="gameswiper_container"
        className="GamingSwiper_gamingSwiperContainer__UaLzH"
      >
        <div
          id="gameswiper_elements"
          ref={scrollRef}
          className="GamingSwiper_scrollElements__QmbUu"
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.title}
              className={`GamingSwiper_scrollElement__6Pd9M ${
                slide.fit === 'contain' ? 'GamingSwiper_scrollElementContain' : ''
              }`.trim()}
            >
              <span className="GamingSwiper_scrollElementTitle__iAKw0">
                {slide.title}
              </span>
              {slide.fit === 'contain' && (
                <img
                  aria-hidden="true"
                  draggable={false}
                  src={slide.src}
                  alt=""
                  className="GamingSwiper_scrollElementBackdrop"
                />
              )}
              <img
                draggable={false}
                onLoad={onAssetLoad}
                src={slide.src}
                alt={slide.alt}
                width={594}
                height={790}
                className={
                  slide.fit === 'contain'
                    ? 'GamingSwiper_scrollElementImgContain'
                    : undefined
                }
                style={{ objectPosition: slide.objectPosition }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
