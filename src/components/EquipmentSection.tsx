import React from 'react';
import { IMAGES, openBooking } from '../assets/images/assetUrls';
import { CyberButton } from './CyberButton';

interface EquipmentSectionProps {
  onAssetLoad: () => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  onAssetLoad,
}) => {
  return (
    <div>
      <div className="SpacesAndPackages_booking__RUoJD">
        <CyberButton
          color="primary-2"
          btnClassName="SpacesAndPackages_booking__btn__ssNdc"
          onClick={openBooking}
        >
          Book Your Seat
        </CyberButton>

        <div>
          <div className="SpacesAndPackages_booking__options_title__yLUfG">
            Every station &amp; zone features top-tier gear:
          </div>

          <div className="SpacesAndPackages_booking__option__xbdyE">
            <div className="SpacesAndPackages_booking__option__logo__MPjv9">
              <img
                onLoad={onAssetLoad}
                alt="PlayStation 5 DualSense controller"
                width={28}
                height={20}
                src={IMAGES.gamepad}
              />
            </div>
            <div>PlayStation 5 &amp; DualSense Wireless Controllers</div>
          </div>

          <div className="SpacesAndPackages_booking__option__xbdyE">
            <div className="SpacesAndPackages_booking__option__logo__MPjv9">
              <img
                onLoad={onAssetLoad}
                alt="Meta Quest VR headset"
                width={28}
                height={20}
                src={IMAGES.vr}
              />
            </div>
            <div>Meta Quest VR — Next-Gen Virtual Reality</div>
          </div>

          <div className="SpacesAndPackages_booking__option__xbdyE">
            <div className="SpacesAndPackages_booking__option__logo__MPjv9">
              <img
                onLoad={onAssetLoad}
                alt="55 and 75 inch Ultra-HD displays"
                width={28}
                height={22}
                src={IMAGES.screen}
              />
            </div>
            <div>55&quot; Standard &amp; 75&quot; Premium Ultra-HD Displays</div>
          </div>

          <div className="SpacesAndPackages_booking__option__xbdyE">
            <div className="SpacesAndPackages_booking__option__logo__MPjv9">
              <img
                onLoad={onAssetLoad}
                alt="Arcade Basketball Machine"
                width={24}
                height={24}
                src={IMAGES.basketball}
              />
            </div>
            <div>Arcade Basketball Machine (MWK 1,000 / Session)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
