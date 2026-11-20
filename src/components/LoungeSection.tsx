import React from 'react';
import { IMAGES } from '../assets/images/assetUrls';
import { useIntersectionReveal } from '../hooks/useResponsiveAnimations';

interface LoungeSectionProps {
  onAssetLoad: () => void;
}

export const LoungeSection = React.forwardRef<HTMLElement, LoungeSectionProps>(
  ({ onAssetLoad }, ref) => {
    const { isIntersecting, nodeRef } = useIntersectionReveal<HTMLDivElement>(0.5);

    return (
      <section ref={ref} className="LoungeSection_loungeWrapper__4YGHU">
        <div className="LoungeSection_loungeInner__KPBpM">
          <div className="LoungeSection_container__EKr_4">
            <div className="LoungeSection_loungeInner__menu__U6Lur">Lounge</div>
            <div className="LoungeSection_loungeInner__title__iHqez">
              .. for Your <br /> Friends or Squad
            </div>
            <div className="LoungeSection_loungeInner__text__5Zxsb">
              Kick off your weekend with the ultimate gaming experience. Bring
              your squad to Area 49, Gouji Complex and battle in EA Sports FC
              27, Tekken 8, Mortal Kombat 11 &amp; Call of Duty: Black Ops 7.
            </div>

            <div
              ref={nodeRef}
              className="LoungeImages_loungeImages__TpDf4"
            >
              <img
                onLoad={onAssetLoad}
                src={IMAGES.cocaCola}
                alt="Refreshments at JG2 Lounge"
                className={`LoungeImages_loungeImages__image1__26WIv ${
                  isIntersecting ? 'LoungeImages_loungeImages__image1Active__G4D6K' : ''
                }`.trim()}
              />
              <img
                onLoad={onAssetLoad}
                src={IMAGES.popCorn}
                alt="Snacks and hangout fun at JG2 Lounge"
                className={`LoungeImages_loungeImages__image2__eR_9g ${
                  isIntersecting ? 'LoungeImages_loungeImages__image2Active__ScBqD' : ''
                }`.trim()}
              />
            </div>

            <div className="LoungeSection_loungeText__ssnzQ">
              Relax, challenge your friends, and make holiday &amp; weekend
              memories — plus take advantage of our Wednesday 1+1 Free Special
              and Arcade Basketball Machine.
            </div>
          </div>
        </div>
      </section>
    );
  }
);

LoungeSection.displayName = 'LoungeSection';
