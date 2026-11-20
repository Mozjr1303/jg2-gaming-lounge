import React from 'react';
import { Calendar, MapPin, Sparkles, Trophy } from 'lucide-react';
import { smoothScrollToElement } from '../animations/scrollAnimations';
import { JG2_CONTACT, openBooking } from '../assets/images/assetUrls';
import { CyberButton } from './CyberButton';

interface EventsSectionProps {
  promosSectionRef: React.RefObject<HTMLElement | null>;
}

interface EventItem {
  badge: string;
  title: string;
  date: string;
  location: string;
  description: string;
  accent: 'pink' | 'lavender' | 'lime' | 'cyan';
  icon: 'festival' | 'foodfest' | 'tournament' | 'private';
}

const EVENTS: EventItem[] = [
  {
    badge: 'POP-UP FESTIVAL',
    title: 'Thanksgiving Festival Gaming Zone',
    date: 'Saturday, 14th November 2026 · 10:00 AM – 7:00 PM',
    location: 'ABC Blue Gym (Behind ABC Campus), Lilongwe',
    description:
      'JG2 Gaming Lounge brings PlayStation 5, Meta Quest VR, and multiplayer favourites live to the Thanksgiving Festival — come play with everyone.',
    accent: 'lime',
    icon: 'festival',
  },
  {
    badge: 'OUTDOOR POP-UP',
    title: 'Taste of Lilongwe Food Fest',
    date: '21st November · All-Day Experience',
    location: "Messa's Lodge (Near Waka Waka Hotel), Lilongwe",
    description:
      'Good food meets next-gen gaming. Catch our live outdoor PlayStation 5 & Meta Quest VR setup and challenge friends between bites.',
    accent: 'pink',
    icon: 'foodfest',
  },
  {
    badge: 'WEEKLY IN-LOUNGE',
    title: 'Weekend Squad Showdowns',
    date: 'Every Friday – Sunday · Lounge Hours',
    location: 'Area 49, Gouji Complex, Lilongwe',
    description:
      'Kick off your weekend with head-to-head EA Sports FC 27, Tekken 8, Mortal Kombat 11 Ultimate, WWE 2K26 & COD: Black Ops 7 battles on 55" & 75" screens.',
    accent: 'lavender',
    icon: 'tournament',
  },
  {
    badge: 'CUSTOM BOOKINGS',
    title: 'Private Parties & Mobile Hire',
    date: 'Available by Reservation · 7 Days a Week',
    location: 'In-Lounge (Area 49) or Your Event Venue',
    description:
      'Planning a birthday, holiday hangout, school break event, or corporate team day? Reserve private screens or hire JG2 to bring PS5 & Meta Quest VR to your venue.',
    accent: 'cyan',
    icon: 'private',
  },
];

const openEventInquiry = (eventTitle?: string) => {
  const text = eventTitle
    ? `Hello JG2 Gaming Lounge, I would like to inquire about: ${eventTitle}`
    : 'Hello JG2 Gaming Lounge, I would like to book an event or group session!';
  const url = `${JG2_CONTACT.whatsappDirect}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank')?.focus();
};

export const EventsSection = React.forwardRef<HTMLElement, EventsSectionProps>(
  ({ promosSectionRef }, ref) => {
    const renderIcon = (type: EventItem['icon']) => {
      switch (type) {
        case 'festival':
          return <Sparkles size={22} />;
        case 'foodfest':
          return <Calendar size={22} />;
        case 'tournament':
          return <Trophy size={22} />;
        case 'private':
          return <MapPin size={22} />;
      }
    };

    return (
      <section ref={ref} id="events" className="Jg2Section_wrapper">
        <div className="Jg2Section_container">
          <div className="Jg2Section_eyebrow Jg2Section_eyebrowPink">Events</div>
          <h2 className="Jg2Section_title Jg2Section_titlePink">
            Live at JG2 <br /> &amp; Across Lilongwe
          </h2>
          <p className="Jg2Section_subtitle">
            From in-lounge weekend tournaments at Area 49, Gouji Complex to
            outdoor pop-up gaming zones at Lilongwe&apos;s biggest festivals —
            here&apos;s where we play next.
          </p>

          <div className="Jg2Events_grid">
            {EVENTS.map((ev) => (
              <article
                key={ev.title}
                className={`Jg2Events_card Jg2Events_card--${ev.accent}`}
              >
                <div className="Jg2Events_cardHeader">
                  <span className="Jg2Events_badge">{ev.badge}</span>
                  <span className="Jg2Events_icon">{renderIcon(ev.icon)}</span>
                </div>

                <h3 className="Jg2Events_cardTitle">{ev.title}</h3>

                <div className="Jg2Events_meta">
                  <div className="Jg2Events_metaRow">
                    <Calendar size={16} />
                    <span>{ev.date}</span>
                  </div>
                  <div className="Jg2Events_metaRow">
                    <MapPin size={16} />
                    <span>{ev.location}</span>
                  </div>
                </div>

                <p className="Jg2Events_cardDesc">{ev.description}</p>

                <button
                  type="button"
                  className="Jg2Events_cardLink"
                  onClick={() => openEventInquiry(ev.title)}
                >
                  Inquire on WhatsApp →
                </button>
              </article>
            ))}
          </div>

          <div className="Jg2Section_actions">
            <CyberButton
              color="primary"
              btnClassName="Jg2Section_actionBtn"
              onClick={() => openEventInquiry()}
            >
              Book an Event
            </CyberButton>
            <CyberButton
              color="simple"
              btnClassName="Jg2Section_actionBtn"
              onClick={() => smoothScrollToElement(promosSectionRef.current)}
            >
              See Current Promos
            </CyberButton>
            <CyberButton
              color="simple"
              btnClassName="Jg2Section_actionBtn"
              onClick={openBooking}
            >
              Reserve a Screen
            </CyberButton>
          </div>
        </div>
      </section>
    );
  }
);

EventsSection.displayName = 'EventsSection';
