import React from 'react';
import { Gift, Flame, Sparkles, Clock } from 'lucide-react';
import { JG2_CONTACT, openBooking } from '../assets/images/assetUrls';
import { CyberButton } from './CyberButton';

interface PromosSectionProps {
  sapSectionRef: React.RefObject<HTMLElement | null>;
}

const GIFT_CARDS = [
  {
    tier: 'STARTER VOUCHER',
    value: 'MK 10,000',
    accent: 'purple',
    perk: 'Great for quick PS5 sessions, EA FC 27 matches & Arcade Hoops.',
  },
  {
    tier: 'PRO VOUCHER',
    value: 'MK 20,000',
    accent: 'cyan',
    perk: 'Covers a full hour on our 75" Premium screen or duo squad play.',
  },
  {
    tier: 'SQUAD VOUCHER',
    value: 'MK 30,000',
    accent: 'lime',
    perk: 'Ultimate birthday & holiday gift across PS5, 75" displays & VR.',
  },
];

const openPromoInquiry = (promoName: string) => {
  const url = `${JG2_CONTACT.whatsappDirect}?text=${encodeURIComponent(
    `Hello JG2 Gaming Lounge, I'd like to claim/order: ${promoName}`
  )}`;
  window.open(url, '_blank')?.focus();
};

export const PromosSection = React.forwardRef<HTMLElement, PromosSectionProps>(
  ({ sapSectionRef }, ref) => {
    void sapSectionRef;

    return (
      <section ref={ref} id="promos" className="Jg2Section_wrapper">
        <div className="Jg2Section_container">
          <div className="Jg2Section_eyebrow Jg2Section_eyebrowLavender">
            Promos &amp; Deals
          </div>
          <h2 className="Jg2Section_title Jg2Section_titleGradient">
            Double Playtime <br /> &amp; Gift Cards
          </h2>
          <p className="Jg2Section_subtitle">
            Score more play for your Kwacha every week — from our signature
            Wednesday Buy-1-Get-1-Free deal to official JG2 Game Lounge Gift
            Cards and school-holiday specials.
          </p>

          {/* Featured Banner: Wednesday Special */}
          <div className="Jg2Promos_featured">
            <div className="Jg2Promos_featuredTop">
              <div>
                <div className="Jg2Promos_pill">
                  <Flame size={15} />
                  <span>EVERY WEDNESDAY SPECIAL</span>
                </div>
                <h3 className="Jg2Promos_featuredTitle">
                  Play for an Hour, Get the Other Hour FREE
                </h3>
                <p className="Jg2Promos_featuredDesc">
                  Double your session automatically every Wednesday on both
                  Standard 55&quot; and Premium 75&quot; PlayStation 5 screens
                  at Area 49, Gouji Complex.
                </p>
              </div>
              <div className="Jg2Promos_featuredCta">
                <CyberButton
                  color="primary-2"
                  btnClassName="Jg2Promos_btn"
                  onClick={() => openPromoInquiry('Wednesday 1+1 Free Special')}
                >
                  Book Wednesday Slot
                </CyberButton>
              </div>
            </div>

            <div className="Jg2Promos_tiersGrid">
              <div className="Jg2Promos_tierBox">
                <div className="Jg2Promos_tierHeading">
                  Standard Screen <span>(55&quot; Display)</span>
                </div>
                <div className="Jg2Promos_tierRow">
                  <span>15 minutes</span>
                  <strong>MWK 4,000 + 15 min FREE</strong>
                </div>
                <div className="Jg2Promos_tierRow">
                  <span>30 minutes</span>
                  <strong>MWK 7,500 + 30 min FREE</strong>
                </div>
                <div className="Jg2Promos_tierRow">
                  <span>1 hour</span>
                  <strong>MWK 15,000 + 1 hour FREE</strong>
                </div>
              </div>

              <div className="Jg2Promos_tierBox">
                <div className="Jg2Promos_tierHeading">
                  Premium Screen <span>(75&quot; Display)</span>
                </div>
                <div className="Jg2Promos_tierRow">
                  <span>15 minutes</span>
                  <strong>MWK 5,000 + 15 min FREE</strong>
                </div>
                <div className="Jg2Promos_tierRow">
                  <span>30 minutes</span>
                  <strong>MWK 10,000 + 30 min FREE</strong>
                </div>
                <div className="Jg2Promos_tierRow">
                  <span>1 hour</span>
                  <strong>MWK 20,000 + 1 hour FREE</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Official Gift Cards Grid */}
          <div className="Jg2Promos_subHeader">
            <Gift size={22} />
            <span>Official JG2 Game Lounge Gift Cards</span>
          </div>

          <div className="Jg2Promos_giftGrid">
            {GIFT_CARDS.map((card) => (
              <div
                key={card.value}
                className={`Jg2Promos_giftCard Jg2Promos_giftCard--${card.accent}`}
                onClick={() =>
                  openPromoInquiry(`JG2 Gift Card (${card.value})`)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openPromoInquiry(`JG2 Gift Card (${card.value})`);
                  }
                }}
              >
                <div className="Jg2Promos_giftTag">{card.tier}</div>
                <div className="Jg2Promos_giftValue">{card.value}</div>
                <p className="Jg2Promos_giftPerk">{card.perk}</p>
                <div className="Jg2Promos_giftAction">
                  Order Voucher via WhatsApp →
                </div>
              </div>
            ))}
          </div>

          {/* Holiday & Weekend Hangout Strip */}
          <div className="Jg2Promos_holidayStrip">
            <div className="Jg2Promos_holidayLeft">
              <div className="Jg2Promos_holidayTitle">
                <Sparkles size={20} />
                <span>Holiday &amp; Weekend Game Time</span>
              </div>
              <p className="Jg2Promos_holidayText">
                Kodi ana anu akutani pa holiday? Bring family &amp; friends to
                JG2 Gaming Lounge for safe, fun next-gen PS5, Meta Quest VR
                &amp; Arcade Basketball sessions.
              </p>
              <div className="Jg2Promos_holidayHours">
                <Clock size={16} />
                <span>
                  Mon–Sat: 8:00 AM – 5:00 PM &nbsp;·&nbsp; Sun: 1:00 PM – 5:00
                  PM
                </span>
              </div>
            </div>
            <CyberButton
              color="simple"
              btnClassName="Jg2Promos_holidayBtn"
              onClick={openBooking}
            >
              Book Holiday Session
            </CyberButton>
          </div>
        </div>
      </section>
    );
  }
);

PromosSection.displayName = 'PromosSection';
