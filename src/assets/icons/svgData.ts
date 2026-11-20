// Exact JG2 Gaming Lounge brand logos & UI SVG icons

const toSvgDataUri = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;

const buildJg2StackedLogo = (
  color: string,
  width: number,
  height: number,
  badgeTextColor?: string
) => {
  const numFill =
    badgeTextColor ?? (color === '#574137' ? '#D9C5B4' : '#0A0810');
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 240 160" fill="none">
  <!-- Stylized double-stroke J -->
  <path d="M84 22 L70 36 V88 C70 98 63 104 54 104 C45 104 38 98 38 88 V67 H24 V88 C24 106 37 118 54 118 C71 118 84 106 84 88 V22 Z" fill="${color}"/>
  <path d="M62 42 L51 53 V86 C51 89 49 91 46 91 V99 C55 99 62 93 62 84 V42 Z" fill="${color}"/>
  <!-- Wide geometric G -->
  <path d="M148 25 C118 25 96 45 96 71.5 C96 98 118 118 148 118 C176 118 194 100 196 74 V65 H140 V78 H180 C176 95 164 104 148 104 C126 104 111 90 111 71.5 C111 53 126 39 148 39 C159 39 168 42 174 47 L184 36 C174 29 162 25 148 25 Z" fill="${color}"/>
  <!-- Superscript 2 badge -->
  <circle cx="204" cy="30" r="14" fill="${color}"/>
  <path d="M198.5 26.8 C198.5 23.6 200.9 21.8 204.2 21.8 C207.4 21.8 209.6 23.5 209.6 26.1 C209.6 28.2 208.3 29.7 205.5 31.8 L202.8 33.8 H209.9 V36.5 H198.2 V34.1 L203.4 30.1 C205.5 28.5 206.4 27.5 206.4 26.2 C206.4 25 205.5 24.3 204.1 24.3 C202.5 24.3 201.5 25.2 201.5 26.8 H198.5 Z" fill="${numFill}"/>
  <!-- Flanking bars and GAMING LOUNGE subtitle -->
  <rect x="6" y="137" width="16" height="2" rx="1" fill="${color}" opacity="0.85"/>
  <rect x="10" y="142" width="12" height="2" rx="1" fill="${color}" opacity="0.85"/>
  <text x="120" y="145.5" text-anchor="middle" fill="${color}" font-family="Montserrat, Inter, Arial, sans-serif" font-weight="700" font-size="12.5" letter-spacing="3.2">GAMING LOUNGE</text>
  <rect x="218" y="137" width="16" height="2" rx="1" fill="${color}" opacity="0.85"/>
  <rect x="218" y="142" width="12" height="2" rx="1" fill="${color}" opacity="0.85"/>
</svg>`;
};

const buildJg2FooterLogo = (color: string) => `
<svg xmlns="http://www.w3.org/2000/svg" width="236" height="62" viewBox="0 0 236 62" fill="none">
  <!-- Compact JG2 Monogram -->
  <path d="M36 6 L29 13 V38 C29 43 25.5 46 21 46 C16.5 46 13 43 13 38 V28 H6 V38 C6 47 12.5 53 21 53 C29.5 53 36 47 36 38 V6 Z" fill="${color}"/>
  <path d="M25 16 L19.5 21.5 V37 C19.5 38.5 18.5 39.5 17 39.5 V43.5 C21.5 43.5 25 40.5 25 36 V16 Z" fill="${color}"/>
  <path d="M68 8 C53 8 42 18 42 30.5 C42 43 53 53 68 53 C82 53 91 44 92 31.5 V27 H64 V33.5 H84 C82 42 76 46 68 46 C57 46 49.5 39.5 49.5 30.5 C49.5 21.5 57 15 68 15 C73.5 15 78 16.5 81 19 L86 13.5 C81 10 75 8 68 8 Z" fill="${color}"/>
  <circle cx="96" cy="11" r="7.5" fill="${color}"/>
  <path d="M93.1 9.4 C93.1 7.7 94.4 6.7 96.1 6.7 C97.8 6.7 99 7.6 99 9 C99 10.1 98.3 10.9 96.8 12 L95.3 13.1 H99.1 V14.6 H92.9 V13.3 L95.7 11.2 C96.8 10.3 97.3 9.8 97.3 9.1 C97.3 8.4 96.8 8 96.1 8 C95.2 8 94.7 8.5 94.7 9.4 H93.1 Z" fill="#000000"/>
  <!-- Stacked Wordmark -->
  <text x="114" y="29" fill="${color}" font-family="Montserrat, Inter, Arial, sans-serif" font-weight="700" font-size="18" letter-spacing="2">GAMING</text>
  <text x="114" y="48" fill="${color}" font-family="Montserrat, Inter, Arial, sans-serif" font-weight="400" font-size="14" letter-spacing="3.8" opacity="0.88">LOUNGE</text>
</svg>`;

export const LOGO_DARK_RAW = buildJg2StackedLogo('#574137', 222, 177);
export const LOGO_LIGHT_RAW = buildJg2StackedLogo('#FAEED4', 202, 160);
export const LOGO_BLACK_RAW = buildJg2StackedLogo('#000000', 202, 160, '#FFFFFF');
export const FOOTER_LOGO_RAW = buildJg2FooterLogo('#FAEED4');

export const MENU_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" viewBox="0 0 21 10" fill="none">
<path d="M9.45 7.27273H21V10H9.45V7.27273Z" fill="white"/>
<path d="M0 0H21V2.72727H0V0Z" fill="white"/>
</svg>`;

export const MOUSE_WHITE_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
<path d="M12.9742 25.25H13.0013C17.1819 25.25 20.5846 21.7175 20.5846 17.375V10.625C20.5846 6.30387 17.1971 2.77925 13.0219 2.75H12.9569C8.79688 2.77475 5.41797 6.30162 5.41797 10.625V17.375C5.41797 21.7175 8.80772 25.25 12.9742 25.25ZM7.58464 10.625C7.58663 9.13671 8.15572 7.70972 9.1676 6.65576C10.1795 5.6018 11.5519 5.00654 12.9851 5C15.9805 5.00675 18.418 7.53012 18.418 10.625V17.375C18.418 20.4766 15.9881 23 13.0013 23H12.9742C9.9528 23 7.58464 20.5295 7.58464 17.375V10.625Z" fill="white"/>
<path d="M11.918 7.25H14.0846V14H11.918V7.25Z" fill="white"/>
</svg>`;

export const PHONE_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
<path d="M17.1 7.7C18.9 9.5 18.9 12.3 17.1 14.2L18.1 15.2C20.6 12.9 20.6 9.1 18.1 6.7L17.1 7.7ZM16 8.8L15 9.8C15.5 10.5 15.5 11.4 15 12.1L16 13.1C17.2 11.9 17.2 10.1 16 8.8ZM12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V20C0 20.5304 0.210714 21.0391 0.585786 21.4142C0.960859 21.7893 1.46957 22 2 22H12C12.5304 22 13.0391 21.7893 13.4142 21.4142C13.7893 21.0391 14 20.5304 14 20V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0ZM12 19H2V3H12V19Z" fill="white"/>
</svg>`;

export const FACEBOOK_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" fill="white"/>
</svg>`;

export const WHATSAPP_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.316 14.914 13.267 14.715 13.565C14.517 13.861 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.858 12.541 9.261 11.568 9.088 11.27C8.915 10.973 9.069 10.812 9.218 10.664C9.352 10.531 9.515 10.317 9.664 10.144C9.813 9.97004 9.862 9.84604 9.961 9.64704C10.061 9.44904 10.011 9.27604 9.936 9.12704C9.862 8.97804 9.268 7.51504 9.02 6.92004C8.779 6.34104 8.534 6.42004 8.352 6.41004C8.178 6.40204 7.98 6.40004 7.782 6.40004C7.584 6.40004 7.262 6.47404 6.99 6.77204C6.717 7.06904 5.95 7.78804 5.95 9.25104C5.95 10.713 7.014 12.126 7.163 12.325C7.312 12.523 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.555C16.375 17.47 17.563 16.836 17.811 16.142C18.058 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382H17.415ZM11.993 21.785H11.989C10.2184 21.7854 8.48037 21.3094 6.957 20.407L6.597 20.193L2.855 21.175L3.854 17.527L3.619 17.153C2.62914 15.5774 2.10529 13.7538 2.108 11.893C2.11 6.44304 6.544 2.00904 11.997 2.00904C14.637 2.00904 17.119 3.03904 18.985 4.90704C19.9054 5.82362 20.6349 6.91361 21.1313 8.11394C21.6277 9.31427 21.8811 10.6011 21.877 11.9C21.875 17.35 17.441 21.785 11.993 21.785ZM20.405 3.48804C19.3032 2.37896 17.9922 1.49958 16.5481 0.900841C15.1039 0.302105 13.5553 -0.00407625 11.992 4.09775e-05C5.438 4.09775e-05 0.102 5.33504 0.1 11.892C0.096963 13.9788 0.644374 16.0294 1.687 17.837L0 24L6.304 22.346C8.04787 23.2962 10.0021 23.794 11.988 23.794H11.993C18.547 23.794 23.883 18.459 23.885 11.901C23.8898 10.3383 23.5848 8.79014 22.9874 7.34607C22.3901 5.90201 21.5124 4.59071 20.405 3.48804Z" fill="white"/>
</svg>`;

export const INSTAGRAM_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="white"/>
</svg>`;

export const MAPS_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
<path d="M2.91175 16.9706C-0.970582 13.0883 -0.970582 6.79394 2.91175 2.91169C6.79407 -0.970563 13.0886 -0.970563 16.9709 2.91169C20.8532 6.79394 20.8532 13.0883 16.9709 16.9706L9.94132 24L2.91175 16.9706Z" fill="white"/>
</svg>`;

export const GAMEPAD_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
<path d="M7 2H21C24.3 2 26.8 4.9 26.3 8.2L25.4 14.5C25 17 22.9 18.8 20.4 18.8C18.9 18.8 17.5 18 16.7 16.7L15.6 14.8H12.4L11.3 16.7C10.5 18 9.1 18.8 7.6 18.8C5.1 18.8 3 17 2.6 14.5L1.7 8.2C1.2 4.9 3.7 2 7 2Z" stroke="#CDD2FF" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M8.5 6.5V11.5M6 9H11" stroke="#CDD2FF" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="19.5" cy="7.5" r="1.2" fill="#CDD2FF"/>
<circle cx="21.5" cy="10" r="1.2" fill="#CDD2FF"/>
</svg>`;

export const VR_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
<rect x="1.5" y="3" width="25" height="14" rx="4.5" stroke="#CDD2FF" stroke-width="1.8"/>
<path d="M10.5 17L12.5 13.5H15.5L17.5 17" stroke="#CDD2FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="8" cy="10" r="2" fill="#CDD2FF"/>
<circle cx="14" cy="10" r="2" fill="#CDD2FF"/>
<circle cx="20" cy="10" r="2" fill="#CDD2FF"/>
</svg>`;

export const SCREEN_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
<rect x="1.5" y="1.5" width="25" height="16" rx="2.5" stroke="#CDD2FF" stroke-width="1.8"/>
<path d="M10 20.5H18M14 17.5V20.5" stroke="#CDD2FF" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;

export const BASKETBALL_RAW = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="10" stroke="#CDD2FF" stroke-width="1.8"/>
<path d="M2.2 12H21.8M12 2.2V21.8M5 5.2C8.3 8.5 8.3 15.5 5 18.8M19 5.2C15.7 8.5 15.7 15.5 19 18.8" stroke="#CDD2FF" stroke-width="1.5"/>
</svg>`;

export const SVG_ASSETS = {
  logoDark: toSvgDataUri(LOGO_DARK_RAW),
  logoLight: toSvgDataUri(LOGO_LIGHT_RAW),
  logoBlack: toSvgDataUri(LOGO_BLACK_RAW),
  footerLogo: toSvgDataUri(FOOTER_LOGO_RAW),
  menu: toSvgDataUri(MENU_RAW),
  mouseWhite: toSvgDataUri(MOUSE_WHITE_RAW),
  phone: toSvgDataUri(PHONE_RAW),
  facebook: toSvgDataUri(FACEBOOK_RAW),
  whatsapp: toSvgDataUri(WHATSAPP_RAW),
  instagram: toSvgDataUri(INSTAGRAM_RAW),
  maps: toSvgDataUri(MAPS_RAW),
  gamepad: toSvgDataUri(GAMEPAD_RAW),
  vr: toSvgDataUri(VR_RAW),
  screen: toSvgDataUri(SCREEN_RAW),
  basketball: toSvgDataUri(BASKETBALL_RAW),
};
