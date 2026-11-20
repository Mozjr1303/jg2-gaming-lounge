import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { IMAGES } from '../assets/images/assetUrls';
import { useIntersectionReveal } from '../hooks/useResponsiveAnimations';

interface GallerySectionProps {
  onAssetLoad: () => void;
}

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: string;
  span?: 'wide' | 'tall' | 'normal';
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'lounge-wide',
    src: IMAGES.primaryBgXxl,
    title: 'JG2 Main Gaming Floor — Area 49, Gouji Complex',
    category: 'THE LOUNGE',
    span: 'wide',
  },
  {
    id: 'vr-experience',
    src: IMAGES.slide3Bootcamp,
    title: 'Meta Quest VR — Immersive Virtual Reality',
    category: 'VR ZONE',
    span: 'tall',
  },
  {
    id: 'ps5-station',
    src: IMAGES.gameZone,
    title: '75" Premium Ultra-HD Display & PlayStation 5 Setup',
    category: '75" PREMIUM',
    span: 'wide',
  },
  {
    id: 'standard-55-action',
    src: IMAGES.slide1Premium,
    title: 'Standard 55" PS5 Station — Live EA FC 27 Match',
    category: 'STANDARD 55"',
    span: 'normal',
  },
  {
    id: 'fc27-arena-squad',
    src: IMAGES.slide4Vip,
    title: 'EA FC 27 Arena — Squad Matchday Energy',
    category: 'EA FC 27 ARENA',
    span: 'normal',
  },
  {
    id: 'racing-simulators',
    src: IMAGES.slide5VipPlus,
    title: 'Dual Racing Simulators — Logitech G29 & Need for Speed',
    category: 'RACING SIMS',
    span: 'normal',
  },
];

export const GallerySection = React.forwardRef<HTMLElement, GallerySectionProps>(
  ({ onAssetLoad }, ref) => {
    const { isIntersecting, nodeRef } =
      useIntersectionReveal<HTMLDivElement>(0.5);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
      if (activeIndex === null) return;
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveIndex(null);
        if (e.key === 'ArrowRight') {
          setActiveIndex((prev) =>
            prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
          );
        }
        if (e.key === 'ArrowLeft') {
          setActiveIndex((prev) =>
            prev === null
              ? null
              : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
          );
        }
      };
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeIndex]);

    const activePhoto =
      activeIndex !== null ? GALLERY_PHOTOS[activeIndex] : null;

    return (
      <section ref={ref} id="gallery" className="Jg2Section_wrapper">
        <div className="Jg2Section_container">
          <div className="Jg2Section_eyebrow Jg2Section_eyebrowPink">
            Gallery
          </div>
          <h2 className="Jg2Section_title Jg2Section_titleGradient">
            Inside JG2 <br /> Gaming Lounge
          </h2>
          <p className="Jg2Section_subtitle">
            Take a look inside our space at Area 49, Gouji Complex — from our
            75&quot; backlit PlayStation 5 stations and racing simulator to
            Street Basketball hoops and Meta Quest VR.
          </p>

          <div className="Jg2Gallery_grid">
            {GALLERY_PHOTOS.map((photo, index) => (
              <figure
                key={photo.id}
                className={`Jg2Gallery_item Jg2Gallery_item--${photo.span ?? 'normal'}`}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveIndex(index);
                  }
                }}
              >
                <img
                  onLoad={onAssetLoad}
                  src={photo.src}
                  alt={photo.title}
                  className="Jg2Gallery_img"
                  loading="lazy"
                />
                <figcaption className="Jg2Gallery_overlay">
                  <div className="Jg2Gallery_overlayTop">
                    <span className="Jg2Gallery_category">{photo.category}</span>
                    <span className="Jg2Gallery_zoomIcon">
                      <ZoomIn size={18} />
                    </span>
                  </div>
                  <div className="Jg2Gallery_caption">{photo.title}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Signature Neon Highlight Banner */}
          <div className="Jg2Gallery_highlightWrap">
            <div
              ref={nodeRef}
              className={`Jg2Gallery_highlightText ${
                isIntersecting ? 'Jg2Gallery_highlightTextActive' : ''
              }`.trim()}
            >
              <span
                className={`Jg2Gallery_highlightBlur ${
                  isIntersecting ? 'Jg2Gallery_highlightBlurActive' : ''
                }`.trim()}
              />
              Play. Connect. Experience
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {activePhoto && (
          <div
            className="Jg2Lightbox_backdrop"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.title}
          >
            <button
              type="button"
              className="Jg2Lightbox_close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery preview"
            >
              <X size={26} />
            </button>

            <button
              type="button"
              className="Jg2Lightbox_nav Jg2Lightbox_prev"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) =>
                  prev === null
                    ? null
                    : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
                );
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>

            <div
              className="Jg2Lightbox_content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="Jg2Lightbox_img"
              />
              <div className="Jg2Lightbox_meta">
                <span className="Jg2Lightbox_cat">{activePhoto.category}</span>
                <span className="Jg2Lightbox_title">{activePhoto.title}</span>
              </div>
            </div>

            <button
              type="button"
              className="Jg2Lightbox_nav Jg2Lightbox_next"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) =>
                  prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
                );
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </section>
    );
  }
);

GallerySection.displayName = 'GallerySection';
