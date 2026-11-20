import React, { useEffect, useRef } from 'react';
import { createHorizontalPinnedScroll } from '../animations/scrollAnimations';
import { openBooking } from '../assets/images/assetUrls';
import { CyberButton } from './CyberButton';
import { EquipmentSection } from './EquipmentSection';

interface PricingSectionProps {
  sapSectionRef: React.RefObject<HTMLElement | null>;
  starSectionRef: React.RefObject<HTMLElement | null>;
  onAssetLoad: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  sapSectionRef,
  starSectionRef,
  onAssetLoad,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const starsCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const tween = createHorizontalPinnedScroll(
      scrollRef.current,
      '#sap_container'
    );
    return () => {
      if (tween) {
        tween.scrollTrigger?.kill();
        tween.kill();
      }
    };
  }, []);

  // Subtle starry sky backdrop for StarsSection
  useEffect(() => {
    const canvas = starsCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawStars = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const starCount = 90;
      for (let i = 0; i < starCount; i++) {
        const x = (((i * 173 + 47) % 997) / 997) * canvas.width;
        const y = (((i * 311 + 89) % 991) / 991) * canvas.height;
        const r = i % 3 === 0 ? 1.8 : i % 2 === 0 ? 1.2 : 0.8;
        const alpha = 0.25 + ((i * 73) % 70) / 100;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }
    };

    drawStars();
    window.addEventListener('resize', drawStars);
    return () => window.removeEventListener('resize', drawStars);
  }, []);

  return (
    <>
      {/* SECTION 8A: PRICE LIST & PACKAGES */}
      <section
        ref={sapSectionRef}
        className="spaces-and-packages SpacesAndPackages_SpacesAndPackages__5bKXK"
      >
        <div
          id="sap_container"
          className="SpacesAndPackages_container__lkzW_"
        >
          <div>
            <div className="SpacesAndPackages_header__title__8s__M">
              Price List <br /> &amp; Packages
            </div>
          </div>

          <div
            ref={scrollRef}
            className="spaces-and-packages__main SpacesAndPackages_main__J5mCo"
          >
            {/* Card 1: Standard Screen (55") & Premium Screen (75") */}
            <div
              style={{ width: 'max-content' }}
              className="card_cardWrapper__G1WV_"
            >
              {/* Standard Screen */}
              <div className="card_cardInner__g__8n">
                <div className="card_cardInner__title__D5nte">Standard</div>
                <div className="card_cardInner__subTitle__Z_TLt">
                  55&quot; Display · PlayStation 5
                </div>
                <div className="card_cardInner__room__r9zJN">Standard Zone</div>
                <div className="card_cardInner__descriptionRoom__P2T7C">
                  COD Black Ops 7, GTA V, Spider-Man 2, Mortal Kombat 11,
                  Minecraft, WWE 2K26 &amp; Tekken 8.
                </div>

                <div className="card_cardMetrics__LlXLk">
                  <div className="card_metricsLeftColumn__ogVIc">
                    <div className="card_metricsLeftColumn__item__kB_ho">
                      Console
                    </div>
                    <div className="card_metricsLeftColumn__item__kB_ho">
                      Display
                    </div>
                    <div className="card_metricsLeftColumn__item__kB_ho">
                      EA FC 27
                    </div>
                  </div>
                  <div className="card_metricsRightColumn__scUnR">
                    <div className="card_metricsRightColumn__item__TAYOY">
                      PlayStation 5
                    </div>
                    <div className="card_metricsRightColumn__item__TAYOY">
                      55&quot; Ultra-HD
                    </div>
                    <div className="card_metricsRightColumn__item__TAYOY">
                      MWK 2,000 / Game
                    </div>
                  </div>
                </div>

                <div className="card_cardCost__vaCDm">
                  <div className="card_costLeftColumn__970Ul">
                    <div className="card_costLeftColumn__item__CGeGi">Time</div>
                    <div className="card_costLeftColumn__item__CGeGi">
                      Price <span>MWK</span>
                    </div>
                  </div>
                  <div className="card_costRightColumn__cTZbC">
                    <div className="card_costRightTopRow__ie8HY">
                      <div className="card_costRightTopRow__item__SM2F5">
                        15 min
                      </div>
                      <div className="card_costRightTopRow__item__SM2F5">
                        30 min
                      </div>
                      <div className="card_costRightTopRow__item__SM2F5">
                        <span>1 hour</span>
                        <span className="SaleBadge_saleBadge__W2jtN">
                          POPULAR
                        </span>
                      </div>
                    </div>
                    <div className="card_costRightBottomRow__8Yh_L">
                      <div>4,000</div>
                      <div>7,500</div>
                      <div>15,000</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Screen */}
              <div className="card_cardInner__g__8n">
                <div className="card_cardInner__title__D5nte">Premium</div>
                <div className="card_cardInner__subTitle__Z_TLt">
                  75&quot; Display · PlayStation 5
                </div>
                <div className="card_cardInner__room__r9zJN">Premium Zone</div>
                <div className="card_cardInner__descriptionRoom__P2T7C">
                  Massive 75&quot; cinema screens for squad showdowns,
                  tournaments &amp; next-gen immersion.
                </div>

                <div className="card_metricsValues__StC3i">
                  <div className="card_metricsValues__value__ALqC5 card_metricsValues__value_bold__2Rb8J">
                    PlayStation 5
                  </div>
                  <div className="card_metricsValues__value__ALqC5 card_metricsValues__value_bold__2Rb8J">
                    75&quot; Ultra-HD
                  </div>
                  <div className="card_metricsValues__value__ALqC5 card_metricsValues__value_bold__2Rb8J">
                    MWK 4,000 / Game
                  </div>
                </div>

                <div className="card_costValues__irvxw">
                  <div className="card_costValuesTopRow___NbPk">
                    <div className="card_costValuesTopRow__item__3yH1K">
                      15 min
                    </div>
                    <div className="card_costValuesTopRow__item__3yH1K">
                      30 min
                    </div>
                    <div className="card_costValuesTopRow__item__3yH1K">
                      <span>1 hour</span>
                      <span className="SaleBadge_saleBadge__W2jtN">BIG 75&quot;</span>
                    </div>
                  </div>
                  <div className="card_costValuesBottomRow__eQN3r">
                    <div>5,000</div>
                    <div>10,000</div>
                    <div>20,000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Wednesday Special (Every Wednesday 1+1 Free) */}
            <div
              style={{ width: 'max-content' }}
              className="card_cardWrapper__G1WV_"
            >
              <div className="card_cardInner__g__8n">
                <div className="card_cardInner__title__D5nte">
                  Wednesday Special
                </div>
                <div className="card_cardInner__subTitle__Z_TLt">
                  Every Wednesday · Buy 1 Get 1 Free
                </div>
                <div className="card_cardInner__room__r9zJN">
                  Double Your Playtime
                </div>
                <div className="card_cardInner__descriptionRoom__P2T7C">
                  Play for an hour and get the other hour for FREE on both
                  Standard 55&quot; and Premium 75&quot; screens.
                </div>

                <div className="card_cardMetrics__LlXLk">
                  <div className="card_metricsLeftColumn__ogVIc">
                    <div className="card_metricsLeftColumn__item__kB_ho">
                      15 min
                    </div>
                    <div className="card_metricsLeftColumn__item__kB_ho">
                      30 min
                    </div>
                    <div className="card_metricsLeftColumn__item__kB_ho">
                      1 hour
                      <span id="card_extraSpan__TftJl">Every Wednesday</span>
                    </div>
                  </div>
                  <div className="card_metricsRightColumn__scUnR">
                    <div className="card_metricsRightColumn__item__TAYOY">
                      + 15 min FREE
                    </div>
                    <div className="card_metricsRightColumn__item__TAYOY">
                      + 30 min FREE
                    </div>
                    <div className="card_metricsRightColumn__item__TAYOY">
                      + 1 hour FREE
                    </div>
                  </div>
                </div>

                <div className="card_cardCost__vaCDm">
                  <div className="card_costLeftColumn__970Ul">
                    <div className="card_costLeftColumn__item__CGeGi">
                      55&quot; <span>MWK</span>
                    </div>
                    <div className="card_costLeftColumn__item__CGeGi">
                      75&quot; <span>MWK</span>
                    </div>
                  </div>
                  <div className="card_costRightColumn__cTZbC">
                    <div className="card_costRightTopRow__ie8HY">
                      <div className="card_costRightTopRow__item__SM2F5">
                        <span>4,000</span>
                        <span className="SaleBadge_saleBadge__W2jtN">
                          +15m FREE
                        </span>
                      </div>
                      <div className="card_costRightTopRow__item__SM2F5">
                        <span>7,500</span>
                        <span className="SaleBadge_saleBadge__W2jtN">
                          +30m FREE
                        </span>
                      </div>
                      <div className="card_costRightTopRow__item__SM2F5">
                        <span>15,000</span>
                        <span className="SaleBadge_saleBadge__W2jtN">
                          +1hr FREE
                        </span>
                      </div>
                    </div>
                    <div className="card_costRightBottomRow__8Yh_L">
                      <div>5,000</div>
                      <div>10,000</div>
                      <div>20,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: VR & Arcade + Gift Cards */}
            <div
              style={{ width: 'max-content' }}
              className="card_cardWrapper__G1WV_"
            >
              {/* VR & Arcade */}
              <div className="card_cardInner__g__8n">
                <div className="card_cardInner__title__D5nte">VR &amp; Arcade</div>
                <div className="card_cardInner__subTitle__Z_TLt">
                  Solo &amp; Squad Attractions
                </div>
                <div className="card_cardInner__room__r9zJN">
                  Meta Quest VR &amp; Hoops
                </div>
                <div className="card_cardInner__descriptionRoom__P2T7C">
                  Step into virtual reality with Meta Quest VR or challenge your
                  friends on our Basketball Machine.
                </div>

                <div className="card_cardMetrics__LlXLk">
                  <div className="card_metricsLeftColumn__ogVIc">
                    <div className="card_metricsLeftColumn__item__kB_ho">
                      VR Zone
                    </div>
                    <div className="card_metricsLeftColumn__item__kB_ho">
                      Arcade
                    </div>
                    <div className="card_metricsLeftColumn__item__kB_ho">
                      Location
                    </div>
                  </div>
                  <div className="card_metricsRightColumn__scUnR">
                    <div className="card_metricsRightColumn__item__TAYOY">
                      Meta Quest VR
                    </div>
                    <div className="card_metricsRightColumn__item__TAYOY">
                      Basketball Machine
                    </div>
                    <div className="card_metricsRightColumn__item__TAYOY">
                      Area 49, Gouji
                    </div>
                  </div>
                </div>

                <div className="card_cardCost__vaCDm">
                  <div className="card_costLeftColumn__970Ul">
                    <div className="card_costLeftColumn__item__CGeGi">Zone</div>
                    <div className="card_costLeftColumn__item__CGeGi">
                      Price <span id="card_extraSpan__TftJl">MWK</span>
                    </div>
                  </div>
                  <div className="card_costRightColumn__cTZbC">
                    <div className="card_costRightTopRow__ie8HY">
                      <div className="card_costRightTopRow__item__SM2F5">
                        Hoops
                      </div>
                      <div className="card_costRightTopRow__item__SM2F5">
                        55&quot; FC27
                      </div>
                      <div className="card_costRightTopRow__item__SM2F5">
                        75&quot; FC27
                      </div>
                    </div>
                    <div className="card_costRightBottomRow__8Yh_L">
                      <div>1,000</div>
                      <div>2,000</div>
                      <div>4,000</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gift Cards */}
              <div className="card_cardInner__g__8n">
                <div className="card_cardInner__title__D5nte">Gift Cards</div>
                <div className="card_cardInner__subTitle__Z_TLt">
                  Official Game Lounge Vouchers
                </div>
                <div className="card_cardInner__room__r9zJN">
                  Redeem In-Lounge
                </div>
                <div className="card_cardInner__descriptionRoom__P2T7C">
                  Gift the ultimate hangout! Available in three voucher tiers for
                  birthdays, holidays &amp; squads.
                </div>

                <div className="card_metricsValues__StC3i">
                  <div className="card_metricsValues__value__ALqC5">
                    Standard &amp; 75&quot; Screens
                  </div>
                  <div className="card_metricsValues__value__ALqC5">
                    Meta Quest VR &amp; Hoops
                  </div>
                  <div className="card_metricsValues__value__ALqC5 card_metricsValues__value_bold__2Rb8J">
                    Claim at JG2 Desk
                  </div>
                </div>

                <div className="card_costValues__irvxw">
                  <div className="card_costValuesTopRow___NbPk">
                    <div className="card_costValuesTopRow__item__3yH1K">
                      Starter
                    </div>
                    <div className="card_costValuesTopRow__item__3yH1K">
                      Pro
                    </div>
                    <div className="card_costValuesTopRow__item__3yH1K">
                      <span>Squad</span>
                      <span className="SaleBadge_saleBadge__W2jtN">GIFT</span>
                    </div>
                  </div>
                  <div className="card_costValuesBottomRow__eQN3r">
                    <div>10,000</div>
                    <div>20,000</div>
                    <div>30,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 9: GAMING EQUIPMENT & ATTRACTIONS */}
          <EquipmentSection onAssetLoad={onAssetLoad} />
        </div>
      </section>

      {/* SECTION 8B: OPENING HOURS, PAYMENT METHODS & GAMES CATALOG (StarsSection) */}
      <section
        id="starsWrapper"
        ref={starSectionRef}
        className="StarsSection_starsWrapper__CMDsh"
      >
        <canvas ref={starsCanvasRef} className="stars-backdrop-canvas" />
        <div className="StarsSection_container__BqyWh">
          <div className="StarsSection_starsInner__K16i8">
            {/* Opening Hours & Payment Methods Block */}
            <div className="StarsSection_infoBlock__RlXD4">
              <div className="StarsSection_cinemas__lBOn_ jg2-hours-payments-grid">
                <div style={{ flex: '50% 1' }}>
                  <div className="StarsSection_infoBlockTit__Ijgd6">
                    Opening Hours
                  </div>
                  <div className="StarsSection_cinemasDescription__uM7eP">
                    Visit JG2 Gaming Lounge at Area 49, Gouji Complex, Lilongwe.
                    Walk in or book your seat ahead via WhatsApp.
                  </div>
                  <div className="jg2-info-rows">
                    <div className="jg2-info-row">
                      <span className="jg2-info-label">Monday – Saturday</span>
                      <span className="jg2-info-value">8:00 AM – 5:00 PM</span>
                    </div>
                    <div className="jg2-info-row">
                      <span className="jg2-info-label">Sunday</span>
                      <span className="jg2-info-value">1:00 PM – 5:00 PM</span>
                    </div>
                    <div className="jg2-info-row">
                      <span className="jg2-info-label">Wednesday Deal</span>
                      <span className="jg2-info-value jg2-info-value-highlight">
                        Buy 1 Hour, Get 1 Free
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{ flex: '50% 1' }}
                  className="StarsSection_cinemasCinemaMax__aeoBf"
                >
                  <div className="StarsSection_infoBlockTit__Ijgd6">
                    Payment Methods
                  </div>
                  <div className="StarsSection_cinemasDescription__uM7eP">
                    Note: Gaming sessions will only commence after payments have
                    been made and verified.
                  </div>
                  <div className="jg2-info-rows">
                    <div className="jg2-info-row">
                      <span className="jg2-info-label">
                        Standard Bank · JG2 Investments
                      </span>
                      <span className="jg2-info-value">Acc: 9100003631599</span>
                    </div>
                    <div className="jg2-info-row">
                      <span className="jg2-info-label">
                        National Bank · JG2 Investments
                      </span>
                      <span className="jg2-info-value">Acc: 1011271797</span>
                    </div>
                    <div className="jg2-info-row">
                      <span className="jg2-info-label">
                        Airtel Money · Kondwani Mbeza
                      </span>
                      <span className="jg2-info-value">No: 0992542579</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Games & Attractions Block */}
            <div className="StarsSection_infoBlock__RlXD4">
              <div className="StarsSection_infoBlockTit__Ijgd6">
                Games &amp; Attractions
              </div>

              {/* Mobile Stack */}
              <div className="StarsSection_cinemasEquipments__GfbEM">
                <div className="StarsSection_cinemasEquipment__WQiwm">
                  <div className="StarsSection_cinemasEquipmentTit__Fi__P">
                    Sports &amp; Racing
                  </div>
                  <div className="StarsSection_cinemasEquipmentDesc__1XvV0">
                    <span>EA Sports FC 27</span>
                    <span>NBA 2K26 &amp; WWE 2K26</span>
                    <span>Gran Turismo 7</span>
                    <span>Need for Speed: Unbound</span>
                    <span>Rocket League</span>
                  </div>
                </div>
                <div className="StarsSection_cinemasEquipment__WQiwm">
                  <div className="StarsSection_cinemasEquipmentTit__Fi__P">
                    Action &amp; Fighting
                  </div>
                  <div className="StarsSection_cinemasEquipmentDesc__1XvV0">
                    <span>Call of Duty: Black Ops 7</span>
                    <span>Grand Theft Auto V</span>
                    <span>Marvel&apos;s Spider-Man 2</span>
                    <span>Mortal Kombat 11 Ultimate</span>
                    <span>Tekken 8</span>
                  </div>
                </div>
                <div className="StarsSection_cinemasEquipment__WQiwm">
                  <div className="StarsSection_cinemasEquipmentTit__Fi__P">
                    VR &amp; Family Fun
                  </div>
                  <div className="StarsSection_cinemasEquipmentDesc__1XvV0">
                    <span>Meta Quest VR</span>
                    <span>Arcade Basketball Machine</span>
                    <span>Minecraft</span>
                    <span>Astro Bot &amp; Ratchet &amp; Clank</span>
                  </div>
                </div>
                <div className="StarsSection_cinemasEquipment__WQiwm">
                  <div className="StarsSection_cinemasEquipmentTit__Fi__P">
                    Vouchers &amp; Contact
                  </div>
                  <div className="StarsSection_cinemasEquipmentDesc__1XvV0">
                    <span>MK 10,000 / 20,000 / 30,000 Gift Cards</span>
                    <span>Wednesday 1+1 Free Special</span>
                    <span>Call / WhatsApp: +265 991 600 735</span>
                    <span>Secondary Line: +265 994 641 519</span>
                  </div>
                </div>
              </div>

              {/* Tablet & Desktop 2x2 Grid */}
              <div className="StarsSection_cinemasEquipmentFromMd__L4GQt">
                <div className="StarsSection_cinemasEquipment__WQiwm">
                  <div className="StarsSection_cinemasEquipmentTit__Fi__P">
                    Sports &amp; Racing
                  </div>
                  <div className="StarsSection_cinemasEquipmentDesc__1XvV0">
                    <span>EA Sports FC 27</span>
                    <span>NBA 2K26 &amp; WWE 2K26</span>
                    <span>Gran Turismo 7</span>
                    <span>Need for Speed: Unbound</span>
                    <span>Rocket League</span>
                  </div>
                </div>
                <div className="StarsSection_cinemasEquipment__WQiwm">
                  <div className="StarsSection_cinemasEquipmentTit__Fi__P">
                    Action &amp; Fighting
                  </div>
                  <div className="StarsSection_cinemasEquipmentDesc__1XvV0">
                    <span>Call of Duty: Black Ops 7</span>
                    <span>Grand Theft Auto V</span>
                    <span>Marvel&apos;s Spider-Man 2</span>
                    <span>Mortal Kombat 11 Ultimate</span>
                    <span>Tekken 8</span>
                  </div>
                </div>
                <div className="StarsSection_cinemasEquipment__WQiwm">
                  <div className="StarsSection_cinemasEquipmentTit__Fi__P">
                    VR &amp; Family Fun
                  </div>
                  <div className="StarsSection_cinemasEquipmentDesc__1XvV0">
                    <span>Meta Quest VR</span>
                    <span>Arcade Basketball Machine</span>
                    <span>Minecraft</span>
                    <span>Astro Bot &amp; Ratchet &amp; Clank</span>
                  </div>
                </div>
                <div className="StarsSection_cinemasEquipment__WQiwm">
                  <div className="StarsSection_cinemasEquipmentTit__Fi__P">
                    Vouchers &amp; Contact
                  </div>
                  <div className="StarsSection_cinemasEquipmentDesc__1XvV0">
                    <span>MK 10,000 / 20,000 / 30,000 Gift Cards</span>
                    <span>Wednesday 1+1 Free Special</span>
                    <span>Call / WhatsApp: +265 991 600 735</span>
                    <span>Secondary Line: +265 994 641 519</span>
                  </div>
                </div>
              </div>
            </div>

            <CyberButton
              color="primary-2"
              btnClassName="StarsSection_btn__S45RS"
              onClick={openBooking}
            >
              Book Your Seat
            </CyberButton>
          </div>
        </div>
      </section>
    </>
  );
};
