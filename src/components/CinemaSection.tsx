import React from 'react';
import { smoothScrollToElement } from '../animations/scrollAnimations';
import { IMAGES, openBooking } from '../assets/images/assetUrls';
import { useIntersectionReveal } from '../hooks/useResponsiveAnimations';
import { CyberButton } from './CyberButton';

interface CinemaSectionProps {
  starSectionRef: React.RefObject<HTMLElement | null>;
  onAssetLoad: () => void;
}

export const CinemaSection = React.forwardRef<HTMLElement, CinemaSectionProps>(
  ({ starSectionRef, onAssetLoad }, ref) => {
    const { isIntersecting, nodeRef } = useIntersectionReveal<HTMLDivElement>(0.5);

    const scrollToStars = () => {
      smoothScrollToElement(starSectionRef.current);
    };

    return (
      <section ref={ref} className="CinemaSection_cinemaWrapper__ktQnd">
        <div className="CinemaSection_container__Ax7Wl">
          <div className="CinemaSection_cinemaWrapper__title__DwH9W">
            75&quot; Screens &amp; VR
          </div>
        </div>

        <main className="CinemaSection_cinemaContent__dqK9h">
          <div className="CinemaSection_container__Ax7Wl">
            <div className="CinemaSection_cinemaContent__title__Dobj3">
              .. and for Big Screens
            </div>
            <div
              onClick={scrollToStars}
              className="CinemaSection_cinemaContent__subTitle__CjO0J"
            >
              Hours, Payments &amp; Games
            </div>
            <div
              onClick={openBooking}
              className="CinemaSection_cinemaContent__subTitle__CjO0J"
            >
              Reserve via WhatsApp
            </div>
            <div className="CinemaSection_cinemaContent__text__Hgwex">
              Upgrade your session to our massive 75&quot; Premium displays or
              step inside new worlds with Meta Quest VR. From intense FC 27
              matches to GTA V, Spider-Man 2 &amp; Gran Turismo 7, every frame
              hits different at JG2.
            </div>
          </div>
        </main>

        <div className="CinemaSection_container__Ax7Wl">
          <div className="CinemaSection_cinemaText__md__AoWS7">
            Upgrade your session to our massive 75&quot; Premium displays or
            step inside new worlds with Meta Quest VR. From intense FC 27
            matches to GTA V, Spider-Man 2 &amp; Gran Turismo 7, every frame
            hits different at JG2.
          </div>
          <CyberButton
            color="red"
            btnClassName="CinemaSection_redBookSeat__5shJK"
            onClick={openBooking}
          >
            Book Your Seat
          </CyberButton>

          <div className="CinemaSection_meetingPlacesWrapper__OF1gN">
            <div className="CinemaSection_meetingPlacesInner__N6LbZ">
              <div className="CinemaSection_placesPictures__aI73h">
                <div className="CinemaSection_placesLeftColumn__qMBBi">
                  <img
                    onLoad={onAssetLoad}
                    src={IMAGES.firstGrid}
                    alt="JG2 big screen zone view 1"
                    className="CinemaSection_placesLeftColumn__img"
                  />
                  <img
                    onLoad={onAssetLoad}
                    src={IMAGES.secondGrid}
                    alt="JG2 big screen zone view 2"
                    className="CinemaSection_placesLeftColumn__img"
                  />
                  <img
                    onLoad={onAssetLoad}
                    src={IMAGES.firstGridMd}
                    alt="JG2 gaming lounge view"
                    className="CinemaSection_placesLeftColumn__img_md__IUQAj"
                  />
                  <img
                    onLoad={onAssetLoad}
                    src={IMAGES.secondGridMd}
                    alt="JG2 lounge atmosphere"
                    className="CinemaSection_placesLeftColumn__img_md__IUQAj"
                  />
                </div>
                <div>
                  <img
                    onLoad={onAssetLoad}
                    src={IMAGES.thirdGrid}
                    alt="JG2 hangout lounge area"
                  />
                </div>
              </div>

              <div
                ref={nodeRef}
                className={`CinemaSection_meetingPlacesInner__highLightText__2njE1 ${
                  isIntersecting
                    ? 'CinemaSection_meetingPlacesInner__textInViewport__6yv_M'
                    : ''
                }`.trim()}
              >
                <span
                  className={`CinemaSection_blur__8FcXZ ${
                    isIntersecting ? 'CinemaSection_blurActive__tZRsQ' : ''
                  }`.trim()}
                />
                Play. Connect. Experience
              </div>

              <img
                onLoad={onAssetLoad}
                className="CinemaSection_grid3_md__LqKiF"
                src={IMAGES.thirdGridMd}
                alt="JG2 lounge area"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

CinemaSection.displayName = 'CinemaSection';
