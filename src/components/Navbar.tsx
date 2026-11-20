import React, { useState } from 'react';
import { smoothScrollToElement } from '../animations/scrollAnimations';
import { IMAGES, openBooking } from '../assets/images/assetUrls';
import { useClickOutside } from '../hooks/useResponsiveAnimations';
import { MenuPopup } from './MenuPopup';

interface NavbarProps {
  gamingSectionRef: React.RefObject<HTMLDivElement | null>;
  loungeSectionRef: React.RefObject<HTMLElement | null>;
  eventsSectionRef: React.RefObject<HTMLElement | null>;
  promosSectionRef: React.RefObject<HTMLElement | null>;
  gallerySectionRef: React.RefObject<HTMLElement | null>;
  onUpClick: () => void;
  onLogoClick: () => void;
  onAssetLoad: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  gamingSectionRef,
  loungeSectionRef,
  eventsSectionRef,
  promosSectionRef,
  gallerySectionRef,
  onUpClick,
  onLogoClick,
  onAssetLoad,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuPopupRef = useClickOutside<HTMLLIElement>(() =>
    setIsMenuVisible(false)
  );

  return (
    <section id="second" className="PrimarySection_primarySection___rpvx">
      <div className="PrimarySection_primarySectionContainer__yxpFU">
        <nav className="Navigation_navigation__SNPjA">
          <ul className="Navigation_navigationLinks__DWqe_ Navigation_navigationLinksLeft__jg2">
            <li
              onClick={() => smoothScrollToElement(gamingSectionRef.current)}
              className="Navigation_navigationLink__4Wtm1"
            >
              Gaming
            </li>
            <li
              onClick={() => smoothScrollToElement(loungeSectionRef.current)}
              className="Navigation_navigationLink__4Wtm1"
            >
              Lounge
            </li>
            <li
              onClick={() => smoothScrollToElement(eventsSectionRef.current)}
              className="Navigation_navigationLink__4Wtm1"
            >
              Events
            </li>
            <li
              onClick={() => smoothScrollToElement(promosSectionRef.current)}
              className="Navigation_navigationLink__4Wtm1"
            >
              Promos
            </li>
            <li
              onClick={() => smoothScrollToElement(gallerySectionRef.current)}
              className="Navigation_navigationLink__4Wtm1"
            >
              Gallery
            </li>
          </ul>

          <img
            onClick={onLogoClick}
            onLoad={onAssetLoad}
            src={IMAGES.logoBlack}
            alt="JG2 Gaming Lounge logo"
            width={202}
            height={160}
            className="Navigation_navigationLogo__hHZus"
          />

          <ul className="Navigation_navigationLinks__DWqe_ Navigation_navigationLinksRight__Wfpgs">
            <li
              onClick={onUpClick}
              className="Navigation_navigationLink__4Wtm1 Navigation_navigationLinkWithIcon__mzA6e Navigation_navigationLinkWithIconArrow__fa9J7"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" />
              </svg>
              <span>Up</span>
            </li>
            <li
              onClick={openBooking}
              className="Navigation_navigationLink__4Wtm1"
            >
              Book
            </li>
            <li
              ref={menuPopupRef}
              className="Navigation_navigationLink__4Wtm1 Navigation_navigationMenu__wtnY4"
            >
              <div
                onClick={() => setIsMenuVisible((prev) => !prev)}
                className="Navigation_navigationLinkWithIcon__mzA6e Navigation_navigationLinkWithIconBurger__9HAsc"
              >
                <span>Menu</span>
                <img
                  onLoad={onAssetLoad}
                  src={IMAGES.menu}
                  alt="menu"
                  width={21}
                  height={10}
                />
              </div>
              <MenuPopup isVisible={isMenuVisible} />
            </li>
          </ul>
        </nav>
      </div>

      <img
        onLoad={onAssetLoad}
        src={IMAGES.primaryBgXxl}
        alt="JG2 Gaming Lounge Interior"
        className="PrimarySection_primarySectionBackground__pRyNr"
      />
    </section>
  );
};
