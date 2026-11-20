import React from 'react';
import {
  IMAGES,
  JG2_CONTACT,
  openBooking,
  openFacebook,
  openGoogleMaps,
  openInstagram,
  openPhone,
  openWhatsapp,
} from '../assets/images/assetUrls';
import { CyberButton } from './CyberButton';

interface MenuPopupProps {
  isVisible: boolean;
}

export const MenuPopup: React.FC<MenuPopupProps> = ({ isVisible }) => {
  return (
    <div
      id="menu"
      className={`MenuPopup_menuPopupWrapper__6Ve3T ${
        isVisible ? 'MenuPopup_toVisiblePopupWrapper__YGTUD' : ''
      }`.trim()}
    >
      <div className="MenuPopup_menuPopupInner__SuKpy">
        <div className="MenuPopup_menuPopupInner__title__N4Azj">Contacts</div>
        <div
          className="MenuPopup_menuPopupLink__aS05M"
          onClick={openPhone}
          title={JG2_CONTACT.primaryPhoneDisplay}
        >
          <img alt="phone" width={20} height={22} src={IMAGES.phone} />
          <div>{JG2_CONTACT.primaryPhoneDisplay}</div>
        </div>
        <div className="MenuPopup_menuPopupLink__aS05M" onClick={openWhatsapp}>
          <img alt="whatsapp" width={24} height={24} src={IMAGES.whatsapp} />
          <div>WhatsApp</div>
        </div>
        <div className="MenuPopup_menuPopupLink__aS05M" onClick={openInstagram}>
          <img alt="instagram" width={20} height={20} src={IMAGES.instagram} />
          <div>Instagram</div>
        </div>
        <div className="MenuPopup_menuPopupLink__aS05M" onClick={openFacebook}>
          <img alt="facebook" width={22} height={22} src={IMAGES.facebook} />
          <div>Facebook</div>
        </div>
        <div
          className="MenuPopup_menuPopupLink__aS05M"
          onClick={openGoogleMaps}
          title={JG2_CONTACT.addressFull}
        >
          <img alt="maps" width={20} height={24} src={IMAGES.maps} />
          <div>Area 49, Gouji</div>
        </div>
      </div>
      <CyberButton onClick={openBooking}>Book Your Seat</CyberButton>
    </div>
  );
};
