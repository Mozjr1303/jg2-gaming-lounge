import React from 'react';
import { JG2_CONTACT, openGoogleMaps } from '../assets/images/assetUrls';
import { CyberButton } from './CyberButton';

export const GoogleMapsSection: React.FC = () => {
  return (
    <div className="GoogleMaps_googleMaps__eDb0M">
      {/* Custom Dark-Styled Vector Map of Lilongwe, Malawi (Area 49 / Gouji Complex / Bingu National Stadium / City Centre) */}
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lilongwe Plateau Terrain Base */}
        <rect width="1920" height="1080" fill="#4f4839" />

        {/* Subtle Map Tile Grid Lines */}
        <g stroke="rgba(255,255,255,0.035)" strokeWidth="1">
          <line x1="320" y1="0" x2="320" y2="1080" />
          <line x1="640" y1="0" x2="640" y2="1080" />
          <line x1="960" y1="0" x2="960" y2="1080" />
          <line x1="1280" y1="0" x2="1280" y2="1080" />
          <line x1="1600" y1="0" x2="1600" y2="1080" />
          <line x1="0" y1="270" x2="1920" y2="270" />
          <line x1="0" y1="540" x2="1920" y2="540" />
          <line x1="0" y1="810" x2="1920" y2="810" />
        </g>

        {/* Elevated Urban Sector Blocks (Area 49, Area 47, Area 18, City Centre, Old Town) */}
        <g fill="#5b5241" opacity="0.72">
          <polygon points="620,250 950,235 980,530 640,560" />
          <polygon points="780,585 1130,545 1185,785 815,825" />
          <polygon points="1030,275 1380,250 1420,520 1055,540" />
          <polygon points="1410,330 1760,305 1805,645 1445,675" />
          <polygon points="1220,700 1650,685 1705,980 1245,995" />
          <polygon points="220,380 570,360 595,710 250,745" />
        </g>

        {/* Lilongwe Nature Sanctuary & Green Belts */}
        <g fill="#3f5542" opacity="0.72">
          <polygon points="1260,555 1430,525 1475,650 1300,685" />
          <polygon points="560,720 740,685 785,840 605,875" />
          <polygon points="995,80 1240,55 1280,210 1030,235" />
          <polygon points="1540,120 1830,90 1875,260 1580,285" />
          <polygon points="150,780 410,740 460,950 190,990" />
        </g>

        {/* Lingadzi River (Winding West-to-Northeast north of City Centre) */}
        <path
          d="M 0 365 Q 240 315 470 375 T 960 285 T 1430 225 T 1920 135"
          fill="none"
          stroke="#2b4c5a"
          strokeWidth="26"
          strokeLinecap="round"
        />
        <path
          d="M 0 365 Q 240 315 470 375 T 960 285 T 1430 225 T 1920 135"
          fill="none"
          stroke="#335b6b"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Lilongwe River (Winding South-West to East through Old Town) */}
        <path
          d="M 0 885 Q 340 830 680 860 T 1240 735 T 1690 790 T 1920 740"
          fill="none"
          stroke="#2b4c5a"
          strokeWidth="34"
          strokeLinecap="round"
        />
        <path
          d="M 0 885 Q 340 830 680 860 T 1240 735 T 1690 790 T 1920 740"
          fill="none"
          stroke="#335b6b"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Bingu National Stadium Oval Landmark (Near Area 49 / Area 47) */}
        <g transform="translate(965, 595) rotate(-12)">
          <ellipse
            cx="0"
            cy="0"
            rx="44"
            ry="28"
            fill="#3a4548"
            stroke="#6e6858"
            strokeWidth="3"
          />
          <ellipse cx="0" cy="0" rx="26" ry="15" fill="#465e47" />
        </g>

        {/* Secondary Local Street Grid (Area 49 / Gulliver / Dubai / Proper / Area 47 / Area 18) */}
        <g stroke="#413b2f" strokeWidth="2.5" fill="none" opacity="0.88">
          <path d="M 650 320 L 950 310" />
          <path d="M 660 390 L 960 380" />
          <path d="M 670 460 L 970 450" />
          <path d="M 730 255 L 745 545" />
          <path d="M 815 248 L 835 540" />
          <path d="M 900 245 L 920 535" />
          <path d="M 1080 330 L 1380 315" />
          <path d="M 1090 420 L 1390 405" />
          <path d="M 1180 265 L 1200 530" />
          <path d="M 1295 260 L 1315 525" />
          <path d="M 1450 420 L 1770 405" />
          <path d="M 1465 520 L 1785 505" />
          <path d="M 1570 320 L 1595 660" />
          <path d="M 1685 315 L 1710 655" />
        </g>

        {/* Major Lilongwe Arterials & Highways (M1, Presidential Way, Kaunda Rd, Area 49 Bypass) */}
        <g stroke="#2f2e29" strokeWidth="7" fill="none" strokeLinecap="round">
          {/* M1 Highway North-South through Lilongwe */}
          <path d="M 1360 0 Q 1345 310 1375 560 T 1290 1080" />
          {/* Western Bypass / Area 49 Ring Road */}
          <path d="M 710 0 Q 640 280 650 540 T 790 1080" />
          {/* Presidential Way / Area 49 to City Centre Corridor */}
          <path d="M 120 495 Q 580 460 980 490 T 1920 455" />
          {/* Kaunda Road / Area 18 to Area 49 Link */}
          <path d="M 520 260 Q 950 285 1360 270 T 1920 295" />
          {/* Kenyatta Drive / Old Town to City Centre */}
          <path d="M 830 780 Q 1210 660 1560 620 L 1920 635" />
          {/* Chilambula Road */}
          <path d="M 280 690 Q 790 665 1350 795 L 1780 960" />
        </g>

        {/* Highway Centerline Highlights */}
        <g stroke="#6d6350" strokeWidth="2.2" fill="none" opacity="0.72">
          <path d="M 1360 0 Q 1345 310 1375 560 T 1290 1080" />
          <path d="M 710 0 Q 640 280 650 540 T 790 1080" />
          <path d="M 120 495 Q 580 460 980 490 T 1920 455" />
          <path d="M 520 260 Q 950 285 1360 270 T 1920 295" />
        </g>

        {/* Map District & Landmark Labels */}
        <g
          fill="#968e7c"
          fontFamily="Inter, sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="1.2"
          opacity="0.88"
        >
          <text x="1505" y="455" fontSize="24" fill="#d9d1c3" letterSpacing="2">
            Lilongwe
          </text>
          <text x="1510" y="480" fontSize="13" fill="#b4ac9c">
            CITY CENTRE
          </text>
          <text x="845" y="345" fill="#e5d9bd" fontSize="15">
            AREA 49 · GOUJI COMPLEX
          </text>
          <text x="905" y="645">BINGU NATIONAL STADIUM</text>
          <text x="945" y="720">AREA 47</text>
          <text x="1155" y="375">AREA 18</text>
          <text x="1175" y="190">AREA 25 · KANENGO</text>
          <text x="1565" y="210">AREA 10 / 12</text>
          <text x="1390" y="835">OLD TOWN</text>
          <text x="385" y="555">AREA 49 NEW SHIRE</text>
          <text x="440" y="845">LIKUNI RD</text>
          <text x="1380" y="130" fontSize="12" fill="#b6aa94">
            M1 HIGHWAY
          </text>
        </g>

        {/* JG2 Gaming Lounge — Area 49, Gouji Complex Location Pin Marker */}
        <g transform="translate(885, 415)">
          <circle cx="0" cy="0" r="38" fill="rgba(222, 222, 127, 0.14)" />
          <circle cx="0" cy="0" r="22" fill="rgba(206, 202, 255, 0.22)" />
          <circle
            cx="0"
            cy="0"
            r="12"
            fill="#16121d"
            stroke="#cecaff"
            strokeWidth="2.8"
          />
          <circle cx="0" cy="0" r="4.8" fill="#dede7f" />
        </g>
      </svg>

      <div className="GoogleMaps_googleMaps__wrapper__tMG2y">
        <div className="GoogleMaps_googleMaps__container__pAmuo">
          <div className="GoogleMaps_googleMaps__main__iRJAO">
            <div className="GoogleMaps_googleMaps__title__B_qWp">
              {JG2_CONTACT.city}
            </div>
            <div className="GoogleMaps_googleMaps__subTitle__Zubp_">
              {JG2_CONTACT.addressShort}
            </div>
          </div>
          <CyberButton
            color="simple"
            btnClassName="GoogleMaps_googleMaps__btn__oo4SG"
            onClick={openGoogleMaps}
          >
            Open in Google Maps
          </CyberButton>
        </div>
      </div>
    </div>
  );
};
