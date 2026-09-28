import React, { useState, useEffect } from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function AboutPage() {
  useSEO({
    title: 'About AZS Solutions | Regional Hubs in Riyadh, Dubai, London & NYC',
    description: 'Learn about AZS Solutions, our leadership team, governance principles, and regional operational hubs across Riyadh, Dubai, London, New York, and Istanbul.',
    keywords: 'about AZS Solutions, ecommerce agency Riyadh, Amazon agency Dubai, Mohammad Hassan ecommerce, global marketplace operations partner',
    ogTitle: 'About AZS Solutions | Institutional Ecommerce Growth Partner',
    ogDescription: 'Bridging enterprise brands across GCC, US, and European ecommerce channels with localized logistics, algorithmic advertising, and Buy Box defense.',
    canonicalPath: '/about'
  });

  const hubs = [
    {
      city: 'Riyadh, Saudi Arabia',
      role: 'GCC Flagship Hub',
      code: 'KSA',
      desc: 'Local Saudi account management, ZATCA e-invoicing compliance, FBA Riyadh logistics, and native Arabic listing harvesting.'
    },
    {
      city: 'Dubai, UAE',
      role: 'MENA Media Center',
      code: 'UAE',
      desc: 'Paid media acquisition desk covering Meta Ads, TikTok Shop partnerships, Noon UAE Seller Lab, and multi-currency clearing.'
    },
    {
      city: 'London, United Kingdom',
      role: 'European Gateway',
      code: 'UK',
      desc: 'Amazon UK Prime operations, HMRC VAT management, cross-border customs brokerage, and European marketplace expansion.'
    },
    {
      city: 'New York, United States',
      role: 'US Marketplace Hub',
      code: 'USA',
      desc: 'Amazon.com nationwide FBA restock governance, Amazon DSP programmatic display, and multi-channel Shopify D2C scale.'
    },
    {
      city: 'Istanbul, Turkey',
      role: 'Trendyol Gateway',
      code: 'TUR',
      desc: 'Direct air-express fulfillment routing, manufacturer catalog translation, and high-growth Gulf export corridor operations.'
    }
  ];

  const values = [
    {
      title: 'Audited Data & Proof',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      desc: 'Every figure, ROAS multiplier, and GMV benchmark is substantiated by verified partner performance consoles.'
    },
    {
      title: 'TACoS-First Margin Governance',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      desc: 'Scaling revenue without protecting net contribution profit is failure. We calibrate ad budgets to maximize gross dollar margin.'
    },
    {
      title: 'Native Cultural Localization',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      desc: 'No machine translations. We harvest native vernacular search terms tailored to high-spending Gulf consumers.'
    },
    {
      title: 'Senior Executive Access',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      desc: 'Direct access to senior growth directors with transparent weekly standups and direct communication.'
    }
  ];

  // Mobile Slideshow State for Hubs
  const [hubIdx, setHubIdx] = useState(0);
  const [isHubPaused, setIsHubPaused] = useState(false);
  const [hubTouchStart, setHubTouchStart] = useState(null);
  const [hubTouchEnd, setHubTouchEnd] = useState(null);

  useEffect(() => {
    if (isHubPaused || hubs.length <= 1) return;
    const interval = setInterval(() => {
      setHubIdx(prev => (prev === hubs.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isHubPaused, hubs.length]);

  const handleHubPrev = () => {
    setIsHubPaused(true);
    setHubIdx(prev => (prev === 0 ? hubs.length - 1 : prev - 1));
  };

  const handleHubNext = () => {
    setIsHubPaused(true);
    setHubIdx(prev => (prev === hubs.length - 1 ? 0 : prev + 1));
  };

  const handleHubTouchStart = (e) => {
    setHubTouchEnd(null);
    setHubTouchStart(e.targetTouches[0].clientX);
  };

  const handleHubTouchMove = (e) => {
    setHubTouchEnd(e.targetTouches[0].clientX);
  };

  const handleHubTouchEnd = () => {
    if (!hubTouchStart || !hubTouchEnd) return;
    const distance = hubTouchStart - hubTouchEnd;
    if (distance > 45) {
      handleHubNext();
    } else if (distance < -45) {
      handleHubPrev();
    }
  };

  const renderHubCard = (h, isMobile = false) => (
    <div className="platform-detail-card" key={h.code} style={isMobile ? { margin: 0, height: '100%' } : undefined}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0, 245, 155, 0.1)', border: '1px solid rgba(0, 245, 155, 0.25)', color: 'var(--neon-mint)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--neon-mint)', background: 'rgba(0, 245, 155, 0.08)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(0, 245, 155, 0.2)' }}>
          {h.code}
        </span>
      </div>
      <h3 className="platform-detail-title" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{h.city}</h3>
      <div style={{ fontSize: '0.74rem', color: 'var(--neon-mint)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
        {h.role}
      </div>
      <p className="platform-detail-desc" style={{ marginBottom: '0', fontSize: '0.86rem' }}>{h.desc}</p>
    </div>
  );

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="About AZS Solutions"
        title="About"
        highlight="AZS Solutions"
        subtitle="Global ecommerce growth partner operating across Saudi Arabia, UAE, the US, UK, and Turkey. Turnkey marketplace management and high-return advertising."
        breadcrumbs={[
          { label: 'About' }
        ]}
        primaryCtaText="Book Strategic Call"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Explore Programs & Pricing"
        secondaryCtaLink="/programs-pricing"
        metrics={[
          { val: '$140M+', label: 'Managed GMV', sub: 'Audited portfolio' },
          { val: '35+', label: 'Active Brands', sub: 'Global clients' },
          { val: '5 Hubs', label: 'Global Offices', sub: 'KSA, UAE, UK, USA, Turkey' },
          { val: '8.4x', label: 'Average ROAS', sub: 'Blended return' }
        ]}
      />

      {/* Global Hubs */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '20px' }}>
            <h2>Our 5 Regional Operational Hubs</h2>
          </div>

          {/* Mobile Interactive Slideshow for Hubs */}
          <div 
            className="mobile-platform-carousel-wrap"
            onTouchStart={handleHubTouchStart}
            onTouchMove={handleHubTouchMove}
            onTouchEnd={handleHubTouchEnd}
            onMouseEnter={() => setIsHubPaused(true)}
            onMouseLeave={() => setIsHubPaused(false)}
          >
            <div className="mobile-carousel-slide">
              {renderHubCard(hubs[hubIdx], true)}
            </div>

            <div className="mobile-carousel-controls">
              <button 
                type="button" 
                className="carousel-nav-btn prev" 
                onClick={handleHubPrev} 
                aria-label="Previous hub"
              >
                ‹
              </button>
              <div className="carousel-dots">
                {hubs.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`carousel-dot ${hubIdx === idx ? 'active' : ''}`}
                    onClick={() => setHubIdx(idx)}
                    aria-label={`Go to ${hubs[idx].city}`}
                  />
                ))}
              </div>
              <button 
                type="button" 
                className="carousel-nav-btn next" 
                onClick={handleHubNext} 
                aria-label="Next hub"
              >
                ›
              </button>
            </div>
          </div>

          {/* Desktop Multi-Column Grid */}
          <div className="desktop-platform-grid platform-detail-grid">
            {hubs.map(h => renderHubCard(h, false))}
          </div>
        </div>
      </section>

      {/* Governance Values */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '18px' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 4.4vw, 1.45rem)', margin: 0 }}>Our Core Principles</h2>
          </div>

          <div className="unboxed-guarantees-grid">
            {values.map((v, idx) => (
              <div key={idx} className="unboxed-guarantee-item">
                <div className="unboxed-guarantee-icon">
                  {v.icon}
                </div>
                <div className="unboxed-guarantee-content">
                  <h3 className="unboxed-guarantee-title">{v.title}</h3>
                  <p className="unboxed-guarantee-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="subpage-bottom-actions" style={{ marginTop: '28px' }}>
            <Link to="/book-audit" className="btn btn-primary" style={{ padding: '11px 22px', fontSize: '0.86rem' }}>
              Book Discovery Call ➔
            </Link>
            <Link to="/case-studies" className="btn btn-secondary" style={{ padding: '11px 22px', fontSize: '0.86rem' }}>
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
