import React from 'react';
import { smoothScrollToElement } from '../animations/scrollAnimations';
import {
  IMAGES,
  JG2_CONTACT,
  openBooking,
  openFacebook,
  openPhone,
  openWhatsapp,
} from '../assets/images/assetUrls';
import { CyberButton } from './CyberButton';
import { Footer } from './Footer';

interface ContactSectionProps {
  gamingSectionRef: React.RefObject<HTMLDivElement | null>;
  loungeSectionRef: React.RefObject<HTMLElement | null>;
  eventsSectionRef: React.RefObject<HTMLElement | null>;
  promosSectionRef: React.RefObject<HTMLElement | null>;
  gallerySectionRef: React.RefObject<HTMLElement | null>;
  sapSectionRef: React.RefObject<HTMLElement | null>;
  onAssetLoad: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  gamingSectionRef,
  loungeSectionRef,
  eventsSectionRef,
  promosSectionRef,
  gallerySectionRef,
  sapSectionRef,
  onAssetLoad,
}) => {
  const scrollToTop = () => smoothScrollToElement(gamingSectionRef.current);
  const scrollToLounge = () => smoothScrollToElement(loungeSectionRef.current);
  const scrollToEvents = () => smoothScrollToElement(eventsSectionRef.current);
  const scrollToPromos = () => smoothScrollToElement(promosSectionRef.current);
  const scrollToGallery = () => smoothScrollToElement(gallerySectionRef.current);
  const scrollToSap = () => smoothScrollToElement(sapSectionRef.current);

  return (
    <section className="ContactSection_contactSection__Sa6YG">
      <div className="ContactSection_contactSectionBackdrop__4j83_">
        <img
          onLoad={onAssetLoad}
          src={IMAGES.lastLeftPage}
          alt="JG2 Gaming Lounge interior"
          className="ContactSection_contactSectionBackdropFull"
        />
      </div>

      <div className="ContactSection_contactSectionWrapper___RpKq">
        <div className="ContactSection_contactSectionContainer__pcAvy">
          <div className="ContactSection_contactSectionTitle__ldpLG">
            Welcome <br /> to JG2 Lounge
          </div>

          <div className="ContactSection_contactSectionContainerMain__o5lRj">
            <div className="ContactSection_contactSectionBooking__swGkl">
              <CyberButton
                btnClassName="ContactSection_contactSectionBtn__RVwTr"
                onClick={openBooking}
              >
                Book Your Session
              </CyberButton>
            </div>

            <div className="ContactSection_contactSectionText__dUw10 ContactSection_contactSectionTextTwoRows__cYVKO">
              Call or WhatsApp for inquiries <br />
              {JG2_CONTACT.primaryPhoneDisplay} ·{' '}
              {JG2_CONTACT.secondaryPhoneDisplay}
            </div>
            <div className="ContactSection_contactSectionText__dUw10 ContactSection_contactSectionTextOneRow__YKY6O">
              Call or WhatsApp for inquiries <br />
              {JG2_CONTACT.primaryPhoneDisplay} ·{' '}
              {JG2_CONTACT.secondaryPhoneDisplay}
            </div>

            <div className="ContactSection_contactSectionContacts__Cqkbr">
              <div className="ContactSection_contactSectionContact__p_VpT">
                <CyberButton
                  color="simple"
                  btnClassName="ContactSection_contactSectionBtn__RVwTr"
                  onClick={openPhone}
                >
                  Call Us
                </CyberButton>
              </div>
              <div className="ContactSection_contactSectionContact__p_VpT">
                <CyberButton
                  color="simple"
                  btnClassName="ContactSection_contactSectionBtn__RVwTr"
                  onClick={openWhatsapp}
                >
                  WhatsApp
                </CyberButton>
              </div>
              <div className="ContactSection_contactSectionContact__p_VpT">
                <CyberButton
                  color="simple"
                  btnClassName="ContactSection_contactSectionBtn__RVwTr"
                  onClick={openFacebook}
                >
                  Facebook
                </CyberButton>
              </div>
            </div>
          </div>
        </div>

        <div className="ContactSection_contactSectionFooter__BcpHf">
          <Footer
            scrollToTop={scrollToTop}
            scrollToLounge={scrollToLounge}
            scrollToEvents={scrollToEvents}
            scrollToPromos={scrollToPromos}
            scrollToGallery={scrollToGallery}
            scrollToSap={scrollToSap}
            onAssetLoad={onAssetLoad}
          />
        </div>
      </div>
    </section>
  );
};
