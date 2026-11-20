import { SVG_ASSETS } from '../icons/svgData';
import jg2Fc27Arena from './jg2-fc27-arena.jpg';
import jg2GamingZone from './jg2-gaming-zone-hd.jpg';
import jg2LoungeHero from './jg2-lounge-hero-hd.jpg';
import jg2MetaQuestVr from './jg2-meta-quest-vr.jpg';
import jg2SquadLounge from './jg2-squad-lounge.jpg';
import jg2Standard55 from './jg2-standard-55.jpg';

// Visual photography & layout assets + JG2 Gaming Lounge branding/contact links
export const IMAGES = {
  // Hero / Sphere 3D Portal
  sphereTexture: jg2LoungeHero,
  firstPlanBg: 'https://the-game.gg/_next/static/media/firstPlan-bg.45b7a2c6.png',
  firstPlanSand: 'https://the-game.gg/_next/static/media/first_plan_element.9494734a.png',

  // Primary Section (#second) responsive backgrounds — JG2 Gaming Lounge interior
  primaryBgXxl: jg2LoungeHero,
  primaryBgXl: jg2LoungeHero,
  primaryBgLg: jg2LoungeHero,
  primaryBgMd: jg2LoungeHero,
  primaryBgSm: jg2LoungeHero,
  primaryBgXsm: jg2LoungeHero,
  primaryBgXxsm: jg2LoungeHero,

  // Gaming Intro Section background — JG2 75" TV & PS5 station
  gameZone: jg2GamingZone,
  gameZoneMd: jg2GamingZone,
  gameZoneSm: jg2GamingZone,
  gameZoneXsm: jg2GamingZone,
  gameZoneXxsm: jg2GamingZone,

  // Gaming Spaces Slider (5 zones)
  slide1Premium: jg2Standard55,
  slide2PremiumPlus: jg2GamingZone,
  slide3Bootcamp: jg2MetaQuestVr,
  slide4Vip: jg2Fc27Arena,
  slide5VipPlus: jg2SquadLounge,

  // Lounge Section
  cocaCola: 'https://the-game.gg/_next/static/media/cocacola.bd1d5fe9.png',
  popCorn: 'https://the-game.gg/_next/static/media/pop-corn.380ef33e.png',

  // Legacy cinema collage assets (absolute URLs for static hosting compatibility)
  cinemaBgDesktop: 'https://the-game.gg/_next/static/media/cinema.c20ad38b.png',
  cinemaBgLg: 'https://the-game.gg/_next/static/media/bg-cinema-lg.a7b74337.png',
  cinemaBgMd: 'https://the-game.gg/_next/static/media/bg-cinema-md.c98da000.png',
  cinemaBgXsm: 'https://the-game.gg/_next/static/media/cinema-xsm.8af2556b.png',
  firstGrid: 'https://the-game.gg/_next/static/media/first_grid.ec2c609c.png',
  secondGrid: 'https://the-game.gg/_next/static/media/second_grid.dd394324.png',
  thirdGrid: 'https://the-game.gg/_next/static/media/third_grid.09ad6907.png',
  firstGridMd: 'https://the-game.gg/_next/static/media/first_grid_md.66325c91.png',
  secondGridMd: 'https://the-game.gg/_next/static/media/second_grid_md.883f89de.png',
  thirdGridMd: 'https://the-game.gg/_next/static/media/grid3.961f6629.png',

  // Final CTA Section
  lastLeftPage: jg2LoungeHero,
  lastRightPage: jg2LoungeHero,

  // Icons & Logos
  ...SVG_ASSETS,
};

export const JG2_CONTACT = {
  brandName: 'JG2 Gaming Lounge',
  companyName: 'JG2 Investments',
  socialHandle: 'JG2 Gaming and Electronics',
  primaryPhoneDisplay: '+265 991 600 735',
  secondaryPhoneDisplay: '+265 994 641 519',
  altPhoneDisplay: '+265 894 075 579',
  primaryPhoneHref: 'tel:+265991600735',
  secondaryPhoneHref: 'tel:+265994641519',
  whatsappBooking:
    'https://wa.me/265991600735?text=Hello%20JG2%20Gaming%20Lounge%2C%20I%20would%20like%20to%20book%20a%20gaming%20session!',
  whatsappDirect: 'https://wa.me/265991600735',
  whatsappSecondary: 'https://wa.me/265994641519',
  instagram: 'https://www.instagram.com/explore/tags/jg2gaminglounge/',
  facebook: 'https://www.facebook.com/search/top?q=JG2%20Gaming%20and%20Electronics',
  maps: 'https://www.google.com/maps/search/?api=1&query=Area+49+Gouji+Complex+Lilongwe+Malawi',
  city: 'LILONGWE',
  addressShort: 'Area 49, Gouji Complex',
  addressFull: 'Area 49, Gouji Complex, Lilongwe, Malawi',
  hoursWeekday: 'Mon – Sat: 8:00 AM – 5:00 PM',
  hoursSunday: 'Sunday: 1:00 PM – 5:00 PM',
};

export const openBooking = () => {
  window.open(JG2_CONTACT.whatsappBooking, '_blank')?.focus();
};

export const openPhone = () => {
  window.open(JG2_CONTACT.primaryPhoneHref);
};

export const openSecondaryPhone = () => {
  window.open(JG2_CONTACT.secondaryPhoneHref);
};

export const openFacebook = () => {
  window.open(JG2_CONTACT.facebook, '_blank')?.focus();
};

export const openWhatsapp = () => {
  window.open(JG2_CONTACT.whatsappDirect, '_blank')?.focus();
};

export const openInstagram = () => {
  window.open(JG2_CONTACT.instagram, '_blank')?.focus();
};

export const openGoogleMaps = () => {
  window.open(JG2_CONTACT.maps, '_blank')?.focus();
};
