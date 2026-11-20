import React from 'react';
import {
  IMAGES,
  JG2_CONTACT,
  openFacebook,
  openGoogleMaps,
  openInstagram,
  openPhone,
  openSecondaryPhone,
} from '../assets/images/assetUrls';

interface FooterProps {
  scrollToTop: () => void;
  scrollToLounge: () => void;
  scrollToEvents: () => void;
  scrollToPromos: () => void;
  scrollToGallery: () => void;
  scrollToSap: () => void;
  onAssetLoad: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  scrollToTop,
  scrollToLounge,
  scrollToEvents,
  scrollToPromos,
  scrollToGallery,
  scrollToSap,
  onAssetLoad,
}) => {
  return (
    <>
      {/* Desktop Footer (>= 1200px) */}
      <footer className="Footer_footer__8ba8J">
        <div className="Footer_container__jTCrA">
          <div className="Footer_footerInner__HslO_">
            <div className="Footer_footerTopRow__lMzlm">
              <img
                onLoad={onAssetLoad}
                onClick={scrollToTop}
                src={IMAGES.footerLogo}
                width={236}
                height={62}
                className="Footer_footerTopRow__logo__BqQ8U"
                alt="JG2 Gaming Lounge"
              />
              <div className="Footer_footerTopRowRight__2pZhi">
                <div className="Footer_explore__OFU1j">
                  <div className="Footer_explore__text__vJETF">Explore</div>
                  <ul className="Footer_exploreList__I5GQB">
                    <li
                      onClick={scrollToTop}
                      className="Footer_exploreList__item__A8p9V"
                    >
                      Gaming
                    </li>
                    <li
                      onClick={scrollToLounge}
                      className="Footer_exploreList__item__A8p9V"
                    >
                      Lounge
                    </li>
                    <li
                      onClick={scrollToEvents}
                      className="Footer_exploreList__item__A8p9V"
                    >
                      Events
                    </li>
                    <li
                      onClick={scrollToPromos}
                      className="Footer_exploreList__item__A8p9V"
                    >
                      Promos
                    </li>
                    <li
                      onClick={scrollToGallery}
                      className="Footer_exploreList__item__A8p9V"
                    >
                      Gallery
                    </li>
                    <li
                      onClick={scrollToSap}
                      className="Footer_exploreList__item__A8p9V"
                    >
                      Prices
                    </li>
                  </ul>
                </div>

                <div
                  className="Footer_instagram__Smqbo"
                  onClick={openInstagram}
                  title={JG2_CONTACT.socialHandle}
                >
                  <img
                    onLoad={onAssetLoad}
                    src={IMAGES.instagram}
                    width={20}
                    height={20}
                    alt="Instagram"
                  />
                  <div className="Footer_instagram__text__93vyL">Instagram</div>
                </div>
              </div>
            </div>

            <div className="Footer_footerBottomRow__rKuAG">
              <div className="Footer_firstBottomColumn__uMzZV">
                <div
                  className="Footer_firstBottomColumn__location__tzBky"
                  style={{ fontSize: '17px', textAlign: 'left' }}
                >
                  {JG2_CONTACT.companyName} — {JG2_CONTACT.brandName}
                  <br />
                  {JG2_CONTACT.addressFull}
                </div>
                <div className="Footer_maps__oinCX" onClick={openGoogleMaps}>
                  <img
                    onLoad={onAssetLoad}
                    src={IMAGES.maps}
                    width={20}
                    height={24}
                    alt="maps"
                  />
                  <div className="Footer_maps__text__5aYDx">Open in maps</div>
                </div>
              </div>

              <div className="Footer_footerBottomRowRight__6wmWC">
                <div className="Footer_secondBottomColumn__98D5X">
                  <div>
                    <span>Call / WhatsApp:&nbsp;</span>
                    <span onClick={openPhone}>
                      {JG2_CONTACT.primaryPhoneDisplay}
                    </span>
                  </div>
                  <div>
                    <span>Secondary:&nbsp;</span>
                    <span onClick={openSecondaryPhone}>
                      {JG2_CONTACT.secondaryPhoneDisplay}
                    </span>
                  </div>
                </div>

                <div className="Footer_privacy__GZw6d">
                  <div
                    className="Footer_privacy__text__LjxPM"
                    onClick={openFacebook}
                    title={JG2_CONTACT.socialHandle}
                  >
                    Facebook
                  </div>
                  <div className="Footer_privacy__year__lyAoi">
                    © 2026 JG2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Tablet & Mobile Footer (< 1200px) */}
      <footer className="Footer_footerMobile__LCmR1">
        <div className="Footer_container__jTCrA">
          <div className="Footer_footerMobileLogo___Dqb4">
            <img
              onLoad={onAssetLoad}
              onClick={scrollToTop}
              src={IMAGES.footerLogo}
              width={236}
              height={62}
              alt="JG2 Gaming Lounge"
            />
            <div
              className="Footer_logoInstagram__Gjk58"
              onClick={openInstagram}
              title={JG2_CONTACT.socialHandle}
            >
              <img
                onLoad={onAssetLoad}
                src={IMAGES.instagram}
                width={20}
                height={20}
                alt="Instagram"
              />
              <div className="Footer_logoInstagram__text__9RLRa">Instagram</div>
            </div>
          </div>

          <div className="Footer_footerMobileExplore__YkbnO">
            <div className="Footer_exploreLeftColumn__OjcKo">
              <div className="Footer_exploreLeftColumn__text__4t18B">
                {JG2_CONTACT.companyName} — {JG2_CONTACT.brandName}
                <br />
                {JG2_CONTACT.addressFull}
              </div>
              <div
                className="Footer_exploreLeftMaps__Gpevf"
                onClick={openGoogleMaps}
              >
                <img
                  onLoad={onAssetLoad}
                  src={IMAGES.maps}
                  width={20}
                  height={24}
                  alt="maps"
                />
                <div className="Footer_exploreLeftMaps__text__gSttY">
                  Open in maps
                </div>
              </div>
            </div>

            <div className="Footer_exploreRightColumn__4ChuY">
              <div className="Footer_exploreRightColumn__text__Hq6hY">
                Explore
              </div>
              <ul className="Footer_exploreList__I5GQB">
                <li
                  onClick={scrollToTop}
                  className="Footer_exploreList__item__A8p9V"
                >
                  Gaming
                </li>
                <li
                  onClick={scrollToLounge}
                  className="Footer_exploreList__item__A8p9V"
                >
                  Lounge
                </li>
                <li
                  onClick={scrollToEvents}
                  className="Footer_exploreList__item__A8p9V"
                >
                  Events
                </li>
                <li
                  onClick={scrollToPromos}
                  className="Footer_exploreList__item__A8p9V"
                >
                  Promos
                </li>
                <li
                  onClick={scrollToGallery}
                  className="Footer_exploreList__item__A8p9V"
                >
                  Gallery
                </li>
                <li
                  onClick={scrollToSap}
                  className="Footer_exploreList__item__A8p9V"
                >
                  Prices
                </li>
              </ul>
            </div>
          </div>

          <div className="Footer_footerMobileRoots__knuhd">
            <div className="Footer_rootsLeftColumn__5F7kR">
              Call / WhatsApp:{' '}
              <span onClick={openPhone}>{JG2_CONTACT.primaryPhoneDisplay}</span>
              <br />
              Secondary:{' '}
              <span onClick={openSecondaryPhone}>
                {JG2_CONTACT.secondaryPhoneDisplay}
              </span>
            </div>
            <div className="Footer_rootsRightColumn__FOcyD">
              <div className="Footer_policy__e37iR" onClick={openFacebook}>
                Facebook
              </div>
              <div style={{ marginLeft: '30px' }}>© 2026 JG2</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
