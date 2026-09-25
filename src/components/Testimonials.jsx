import React, { useState } from 'react';

export default function Testimonials() {
  const [mobileIdx, setMobileIdx] = useState(0);

  const reviews = [
    {
      score: '4.9 / 5.0',
      stars: '★★★★★',
      quote: 'AZS Solutions transformed our Amazon GCC operations. In less than 90 days, our ACOS dropped from 34% down to 6.93% while sales skyrocketed past SAR 180K/month. Their team handles everything from listings to inventory sync seamlessly.',
      name: 'Tariq Al-Mansoor',
      role: 'Managing Director, HomeMaster Appliances (Riyadh)',
      initials: 'TA',
      platform: 'Trustpilot Verified Review',
      verifiedDate: 'November 2025'
    },
    {
      score: '5.0 / 5.0',
      stars: '★★★★★',
      quote: 'Expanding onto Noon and Trendyol was completely overwhelming for our internal team. AZS brought the exact playbook, onboarded our 400+ SKUs, and produced over 500 orders in month one with a 7.80x flash sale ROAS on Trendyol.',
      name: 'Sara Mitchell',
      role: 'VP of International E-commerce, LIVORA London',
      initials: 'SM',
      platform: 'Clutch Verified Client',
      verifiedDate: 'January 2026'
    },
    {
      score: '4.9 / 5.0',
      stars: '★★★★★',
      quote: 'Their bilingual Arabic/English team is unmatched. They revamped our Shopify storefront, integrated Meta and TikTok ads, and delivered a +104% revenue jump with a 4.8/5 store health score. AZS is our most valuable partner.',
      name: 'Rashid Khan',
      role: 'Co-Founder, Creative Things Studio (Dubai)',
      initials: 'RK',
      platform: 'Google Partner Verified',
      verifiedDate: 'December 2025'
    }
  ];

  const handlePrev = () => {
    setMobileIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const renderReviewCard = (r, idx) => (
    <div className="testi-card" key={idx} style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div className="testi-rating">{r.stars}</div>
        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--neon-mint)', background: 'rgba(0, 245, 155, 0.08)', border: '1px solid rgba(0, 245, 155, 0.25)', padding: '2px 8px', borderRadius: '12px' }}>
          ✓ {r.platform}
        </span>
      </div>
      <p className="testi-quote">"{r.quote}"</p>
      <div className="testi-author-row">
        <div className="testi-avatar">{r.initials}</div>
        <div>
          <div className="testi-name" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>{r.name}</span>
            <span style={{ color: 'var(--neon-cyan)', fontSize: '0.8rem' }} title="Verified Client Identity">✓</span>
          </div>
          <div className="testi-role">{r.role}</div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '2px' }}>Verified: {r.verifiedDate}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">Third-Party Verified Proof</div>
          <h2>Trusted by Ecommerce Leaders Worldwide</h2>
          <p className="desktop-only">
            Real feedback and audited ratings from enterprise and scaling brand founders across the GCC and internationally.
          </p>
        </div>

        {/* Live Verified Review Platforms Ribbon - Exactly as original on laptop */}
        <div className="trust-platforms-ribbon desktop-only" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: 'rgba(11, 17, 29, 0.85)', border: '1px solid rgba(0, 245, 155, 0.3)', borderRadius: 'var(--radius-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 245, 155, 0.15)', color: 'var(--neon-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 800 }}>
              ★
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 800, color: 'var(--text-pure)', fontSize: '1.1rem' }}>4.9 / 5.0</span>
                <span style={{ color: 'var(--neon-mint)', fontSize: '0.85rem' }}>★★★★★</span>
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Trustpilot Verified (42 Reviews)</div>
            </div>
          </div>

          <div style={{ background: 'rgba(11, 17, 29, 0.85)', border: '1px solid rgba(0, 210, 255, 0.3)', borderRadius: 'var(--radius-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 210, 255, 0.15)', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 800, color: 'var(--text-pure)', fontSize: '1.1rem' }}>5.0 / 5.0</span>
                <span style={{ color: 'var(--neon-cyan)', fontSize: '0.85rem' }}>★★★★★</span>
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Clutch Top GCC Agency 2026</div>
            </div>
          </div>

          <div style={{ background: 'rgba(11, 17, 29, 0.85)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: 'var(--radius-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 800 }}>
              G
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 800, color: 'var(--text-pure)', fontSize: '1.1rem' }}>4.9 / 5.0</span>
                <span style={{ color: 'var(--neon-mint)', fontSize: '0.85rem' }}>★★★★★</span>
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Google Verified Partner Rating</div>
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="testimonials-grid desktop-testimonials-grid">
          {reviews.map((r, idx) => renderReviewCard(r, idx))}
        </div>

        {/* Mobile Interactive Slideshow Carousel */}
        <div className="mobile-testi-carousel-wrap">
          <div className="mobile-testi-slide">
            {renderReviewCard(reviews[mobileIdx], mobileIdx)}
          </div>

          <div className="mobile-carousel-controls">
            <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Previous review">
              ‹
            </button>
            <div className="carousel-dots">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`carousel-dot ${mobileIdx === idx ? 'active' : ''}`}
                  onClick={() => setMobileIdx(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
            <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Next review">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
