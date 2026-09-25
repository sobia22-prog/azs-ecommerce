import React, { useState, useEffect } from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function ShopifyDivisionPage({ onOpenModal }) {
  useSEO({
    title: 'Shopify & DTC Growth Agency — Meta, TikTok & Google Ads | AZS Solutions',
    description: 'Scale DTC brands with high-converting Shopify Plus stores, Tabby/Tamara BNPL integration, and high-ROAS Meta, TikTok & Google performance marketing.',
    keywords: 'shopify agency Saudi Arabia, shopify DTC growth agency, shopify store management KSA, shopify agency Dubai, Meta ads ecommerce KSA, TikTok ads agency GCC, ecommerce conversion rate optimization agency',
    ogTitle: 'Shopify & DTC Growth Agency — Meta, TikTok & Google Ads | AZS Solutions',
    ogDescription: 'Scale your DTC brand with high-converting Shopify Plus storefronts, localized GCC checkout, and 4.62x blended ROAS across Meta, TikTok & Google.',
    canonicalPath: '/shopify-dtc'
  });

  const channels = [
    {
      id: 'meta',
      shortLabel: 'Meta',
      name: 'Meta Ads (Instagram & Facebook)',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
      badge: 'Acquisition Engine',
      desc: 'Broad targeting with dynamic creative testing (DCT). High-impact founder videos, UGC unboxings, and localized Arabic carousels delivering predictable customer acquisition cost (CAC).',
      metric: '4.85x Campaign ROAS'
    },
    {
      id: 'tiktok',
      shortLabel: 'TikTok',
      name: 'TikTok Shop & Spark Ads',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      badge: 'Viral Velocity',
      desc: 'GCC creator seeding and native TikTok Spark Ads. High-conversion micro-influencer product demos in Saudi & Emirati dialects converting mobile shoppers directly in-app.',
      metric: '+188% Gen-Z Order Lift'
    },
    {
      id: 'google',
      shortLabel: 'Google',
      name: 'Google PMax & Search',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      badge: 'Intent Capture',
      desc: 'Full-funnel Google Shopping, Search, and P-Max asset groups. Dominating brand keywords and high-intent transactional search queries across Saudi Arabia, UAE, and the UK.',
      metric: '5.20x Search ROAS'
    },
    {
      id: 'checkout',
      shortLabel: 'Checkout',
      name: 'Checkout & BNPL Optimization',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      badge: 'Conversion Rate',
      desc: 'One-click frictionless checkout integrated with Tamara, Tabby (Buy Now Pay Later), Mada cards, Apple Pay, and automated cash-on-delivery (COD) fraud verification.',
      metric: '+38% Checkout CVR'
    }
  ];

  const [mobileIdx, setMobileIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic slideshow rotation for channels every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setMobileIdx((prev) => (prev + 1) % channels.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, channels.length]);

  const handlePrev = () => {
    setMobileIdx((prev) => (prev - 1 + channels.length) % channels.length);
  };

  const handleNext = () => {
    setMobileIdx((prev) => (prev + 1) % channels.length);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setTimeout(() => setIsPaused(false), 3500);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
    setTimeout(() => setIsPaused(false), 3500);
  };

  const renderChannelCard = (ch) => (
    <div className="platform-detail-card" key={ch.id}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div className="platform-detail-icon">{ch.icon}</div>
        <span className="growth-badge">{ch.badge}</span>
      </div>
      <h3 className="platform-detail-title">{ch.name}</h3>
      <p className="platform-detail-desc">{ch.desc}</p>
      <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.85rem', color: 'var(--neon-mint)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        {ch.metric}
      </div>
    </div>
  );

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Shopify & D2C"
        title="Shopify & D2C"
        highlight="Growth"
        subtitle="High-converting storefronts, performance advertising on Meta, TikTok & Google, and frictionless GCC checkout localization."
        breadcrumbs={[{ label: 'Shopify & D2C' }]}
        primaryCtaText="Book Shopify Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="View Case Studies"
        secondaryCtaLink="/case-studies"
        metrics={[
          { val: '$50.4K/mo', label: 'Flagship Sales', sub: 'LIVORA Essentials' },
          { val: '4.62x', label: 'Blended ROAS', sub: 'Meta, TikTok & Google' },
          { val: '+104%', label: 'Sales Lift', sub: '60-Day sprint' },
          { val: '1.2s', label: 'Page Speed', sub: 'Sub-second GCC CDN' }
        ]}
      />

      <section className="section">
        <div className="container">
          {/* Division Switcher Ribbon (Clean Borderless & Padding-free) */}
          <div className="division-split-header">
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--neon-cyan)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Platform Tracks
              </span>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', margin: '4px 0 0' }}>
                Marketplaces & Online Stores
              </h3>
            </div>
            <div className="division-toggle-group">
              <Link to="/marketplaces" className="division-nav-btn">Marketplaces</Link>
              <span className="division-nav-btn active">Shopify & D2C</span>
            </div>
          </div>

          {/* Flagship Case Study Showcase: LIVORA Modern Essentials */}
          <div id="livora-proof" className="shopify-showcase-container">
            <h2 style={{ fontSize: '1.75rem', color: 'var(--text-heading)', marginBottom: '8px' }}>
              LIVORA Modern Essentials: <span className="gradient-text">$50.4K/mo D2C Scale</span>
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: '780px', marginBottom: '24px' }}>
              How AZS overhauled an apparel brand’s sluggish web shop into an ultra-fast mobile storefront, launched creator-led Meta and TikTok acquisition campaigns, and integrated Tamara/Tabby BNPL for a 104% revenue surge.
            </p>

            <div className="shopify-showcase-grid-layout">
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 210, 255, 0.25)' }}
                onClick={() => onOpenModal && onOpenModal('/assets/livora_shopify_dashboard.svg', 'LIVORA Modern Essentials Verified Shopify Dashboard ($50,461.90/mo)')}
                title="Click to zoom verified Shopify dashboard"
              >
                <img src="/assets/livora_shopify_dashboard.svg" alt="LIVORA Shopify Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              <div>
                <blockquote style={{
                  borderLeft: '3px solid var(--neon-cyan)',
                  paddingLeft: '16px',
                  color: 'var(--text-heading)',
                  fontStyle: 'italic',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  "Doubled monthly revenue within 60 days of storefront redesign, creator ad scaling, and local GCC payment gateway optimization."
                </blockquote>

                <div className="shopify-showcase-actions">
                  <Link to="/book-audit" className="btn btn-primary">
                    <span>Scale Your Shopify Brand</span>
                  </Link>
                  <Link to="/case-studies/livora" className="btn btn-secondary">
                    <span>Read LIVORA Case Study ➔</span>
                  </Link>
                </div>
                <div style={{ marginTop: '14px' }}>
                  <Link to="/programs-pricing" style={{ fontSize: '0.84rem', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none' }}>
                    View Program Tiers & Pricing ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Paid Media & Growth Channels */}
          <div className="section-header" style={{ textAlign: 'left', margin: '30px 0 16px' }}>
            <h2>How We Drive Sales</h2>
          </div>

          {/* Mobile Interactive Slideshow Carousel (No Horizontal Scroll on Tabs) */}
          <div className="mobile-channels-carousel-wrap">
            <div className="mobile-channels-tabs-bar">
              {channels.map((ch, idx) => (
                <button
                  key={ch.id}
                  type="button"
                  className={`mobile-channels-tab-btn ${mobileIdx === idx ? 'active' : ''}`}
                  onClick={() => setMobileIdx(idx)}
                >
                  {ch.shortLabel}
                </button>
              ))}
            </div>

            <div 
              className="mobile-channels-slide-wrap"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="mobile-carousel-slide">
                {renderChannelCard(channels[mobileIdx])}
              </div>

              <div className="mobile-carousel-controls">
                <button 
                  type="button" 
                  className="carousel-nav-btn prev" 
                  onClick={handlePrev} 
                  aria-label="Previous Channel"
                >
                  ‹
                </button>
                <div className="carousel-dots">
                  {channels.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`carousel-dot ${mobileIdx === idx ? 'active' : ''}`}
                      onClick={() => setMobileIdx(idx)}
                      aria-label={`Go to ${channels[idx].name}`}
                    />
                  ))}
                </div>
                <button 
                  type="button" 
                  className="carousel-nav-btn next" 
                  onClick={handleNext} 
                  aria-label="Next Channel"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Acquisition Channels Grid */}
          <div className="desktop-channels-grid platform-detail-grid">
            {channels.map((ch) => renderChannelCard(ch))}
          </div>

          {/* Bottom Audit CTA */}
          <div className="shopify-channels-cta" style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/book-audit" className="btn btn-primary shopify-cta-btn">
              <span>Book Shopify Audit</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
