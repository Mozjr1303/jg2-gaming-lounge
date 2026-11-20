import React from 'react';
import { smoothScrollToElement } from '../animations/scrollAnimations';
import { IMAGES, openBooking } from '../assets/images/assetUrls';
import { CyberButton } from './CyberButton';

interface GamingSectionProps {
  sapSectionRef: React.RefObject<HTMLElement | null>;
  onAssetLoad: () => void;
}

export const GamingSection = React.forwardRef<HTMLDivElement, GamingSectionProps>(
  ({ sapSectionRef, onAssetLoad }, ref) => {
    const scrollToSap = () => {
      smoothScrollToElement(sapSectionRef.current);
    };

    return (
      <div ref={ref} className="GamingSection_gamingWrapper__o7j26">
        <img
          onLoad={onAssetLoad}
          src={IMAGES.gameZone}
          alt="JG2 Gaming Lounge 75 inch TV and PlayStation 5 station"
          className="GamingSection_gamingWrapper__image__PTXi6"
        />
        <div className="GamingSection_container__Xg8xk">

          {/* Desktop Layout (>= 1221px) */}
          <main className="GamingContent_gamingInner__hVYsI">
            <div id="about" className="GamingContent_gamingInner__title__Pgpi8">
              JG2 Gaming Lounge
            </div>
            <div className="GamingContent_gamingContent__udtwS">
              <div className="GamingContent_leftColumnContent__9A5rP">
                <div className="GamingContent_leftColumnContent__title__5eSfL">
                  Place <br /> for You
                </div>
                <CyberButton color="primary" onClick={openBooking}>
                  Book Your Seat
                </CyberButton>
                <CyberButton color="simple" onClick={scrollToSap}>
                  View Price List
                </CyberButton>
              </div>
              <div className="GamingContent_rightColumnContent___0WIJ">
                <p className="GamingContent_rightColumnContent__paragraph__CRTzk">
                  JG2 Gaming Lounge — Lilongwe&apos;s ultimate hangout spot for
                  gamers at Area 49, Gouji Complex. Play, compete, and unwind in
                  premium comfort.
                </p>
                <br />
                <p className="GamingContent_rightColumnContent__paragraph__CRTzk">
                  Jump into PlayStation 5 on 55&quot; Standard and 75&quot;
                  Premium displays, experience Meta Quest VR, or test your aim
                  on our Arcade Basketball Machine.
                </p>
              </div>
            </div>
          </main>

          {/* Tablet / Mobile Layout (<= 1220px) */}
          <div className="GamingContentMd_gamingInner__A_Vpk">
            <div className="GamingContentMd_gamingInner__title__lL2i_">
              JG2 Gaming Lounge
            </div>
            <div className="GamingContentMd_gamingInner__description__oUm_C">
              Place <br /> for You
            </div>
            <div className="GamingContentMd_gamingDescription__S751v">
              <div className="GamingContentMd_leftColumn__iPqjs">
                <p>
                  JG2 Gaming Lounge — Lilongwe&apos;s ultimate hangout spot for
                  gamers at Area 49, Gouji Complex. Play, compete, and unwind in
                  premium comfort.
                </p>
                <br />
                <p>
                  Jump into PlayStation 5 on 55&quot; Standard and 75&quot;
                  Premium displays, experience Meta Quest VR, or test your aim
                  on our Arcade Basketball Machine.
                </p>
              </div>
              <div className="GamingContentMd_rightColumn__0baFf">
                <CyberButton
                  color="primary"
                  btnClassName="GamingContentMd_rightColumn__btn__M3OxF"
                  onClick={openBooking}
                >
                  Book Your Seat
                </CyberButton>
                <CyberButton
                  color="simple"
                  btnClassName="GamingContentMd_rightColumn__btn__M3OxF"
                  onClick={scrollToSap}
                >
                  View Price List
                </CyberButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GamingSection.displayName = 'GamingSection';
