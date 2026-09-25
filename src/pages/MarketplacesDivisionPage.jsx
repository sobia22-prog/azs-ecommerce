import React, { useState, useEffect } from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';
import { useCurrency } from '../context/CurrencyContext';

export default function MarketplacesDivisionPage({ onOpenModal }) {
  const { formatDynamicText } = useCurrency();
  const [mobileIdx, setMobileIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-slideshow state for Management Pillars
  const [pillarIdx, setPillarIdx] = useState(0);
  const [pillarTouchStart, setPillarTouchStart] = useState(null);
  const [pillarTouchEnd, setPillarTouchEnd] = useState(null);
  const [isPillarPaused, setIsPillarPaused] = useState(false);

  useSEO({
    title: 'Amazon, Noon & Trendyol Marketplace Management Agency | KSA & USA — AZS Solutions',
    description: 'Scale your marketplace revenue across Amazon KSA, Noon, Trendyol, and Amazon USA with AZS Solutions. Certified SPN partner delivering 3.4x average GMV growth.',
    keywords: 'Amazon agency KSA, Noon marketplace management, Trendyol GCC expansion, Amazon USA expansion, Buy Box protection, Arabic SEO, marketplace management agency',
    ogTitle: 'Amazon, Noon & Trendyol Marketplace Management Agency | AZS Solutions',
    ogDescription: 'End-to-end management for Amazon, Noon, Trendyol, and Amazon USA across GCC, USA, and UK.',
    canonicalPath: '/marketplace-management'
  });

  const platforms = [
    {
      id: 'amazon-ksa',
      shortLabel: 'KSA',
      name: 'Amazon Saudi Arabia',
      sub: 'KSA Flagship & FBA Logistics',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      badge: 'MENA #1 Channel',
      image: '/assets/homemaster_amazon_dashboard.svg',
      buttonText: 'Explore Amazon KSA Hub',
      desc: 'Complete Seller Central & Vendor Central management, algorithmic Buy Box defense, Arabic/English A+ Brand Story design, and Sponsored Products/Brands/Display campaign scaling.',
      link: '/marketplace-management/amazon-ksa',
      features: [
        'Sponsored Products, Brands & Display PPC Architecture',
        'Riyadh & Jeddah FBA Inbound Shipment Routing',
        'Buy Box Defense & Hijacker Suppression (>96%)',
        'Arabic Keyword Indexing & High-Converting Stores'
      ]
    },
    {
      id: 'amazon-usa',
      shortLabel: 'USA',
      name: 'Amazon USA',
      sub: 'DSP Media & Nationwide FBA',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      badge: 'Global Scale',
      image: '/assets/usa_amazon_light_dashboard.svg',
      buttonText: 'Explore Amazon USA Hub',
      desc: 'High-velocity expansion into Amazon.com USA. Programmatic Amazon DSP, multi-touch AMC attribution, nationwide FBA inventory distribution, and customs/tariff compliance.',
      link: '/marketplace-management/amazon-usa',
      features: [
        'Programmatic Amazon DSP Advertising',
        'Amazon Marketing Cloud (AMC) Attribution',
        'Nationwide FBA Restock Limit & Inventory Flow',
        'A+ Brand Storytelling & US Tariff Compliance'
      ]
    },
    {
      id: 'noon',
      shortLabel: 'Noon',
      name: 'Noon Marketplace',
      sub: 'GCC Seller Lab & FBN Express',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      badge: 'GCC Leader',
      image: '/assets/noon_ads_full_card.png',
      buttonText: 'Explore Noon GCC Hub',
      desc: 'Noon Seller Lab onboarding, Fulfilled By Noon (FBN) direct warehouse routing, Yellow Friday mega-campaign execution, and localized GCC promotions.',
      link: '/marketplace-management/noon',
      features: [
        'Fulfilled by Noon (FBN) Express Priority Badge',
        'Yellow Friday, Ramadan, and Monthly Mega-Sales',
        'Noon Ad Boost Bidding & Keyword Target Optimization',
        'Cross-Docking & GCC Customs Logistics Support'
      ]
    },
    {
      id: 'trendyol',
      shortLabel: 'Trendyol',
      name: 'Trendyol Hub',
      sub: 'Turkey & Europe to GCC Corridor',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      badge: 'Official Partner',
      image: '/assets/trendyol_light_dashboard.svg',
      buttonText: 'Explore Trendyol Hub',
      desc: 'Strategic expansion onto the GCC’s fastest growing cross-border platform. Turnkey catalog translation, automated pricing harmonization, and localized fulfillment routing.',
      link: '/marketplace-management/trendyol',
      features: [
        'Cross-Border SKU Onboarding & Arabic Attribute Mapping',
        'Flash Sale Participation & Trendyol Promotions',
        'GCC Customs, Tax & Duty Reconciliation',
        'Fast-Track Fulfillment with < 72h Delivery SLAs'
      ]
    }
  ];

  const managementPillars = [
    {
      id: 'buy-box',
      num: '01',
      title: 'Buy Box & IP Defense',
      desc: 'Automated scraping of unauthorized third-party sellers, proactive brand registry enforcement, and algorithmic dynamic repricing maintaining >90% Buy Box occupancy.',
      tag: '100% Brand Shield',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      id: 'ppc-structuring',
      num: '02',
      title: 'PPC Campaign Structuring',
      desc: 'Exact, phrase, and broad keyword segmentation, dayparting, negative keyword harvesting, and Sponsored Brands video units delivering sub-15% ACOS.',
      tag: 'Sub-15% Target ACOS',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      id: 'arabic-localization',
      num: '03',
      title: 'Arabic Localization',
      desc: 'Native GCC Arabic dialect keyword search volume indexing, cultural compliance, and high-conversion Arabic A+ infographic storytelling.',
      tag: 'Bilingual Storefronts',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      id: 'fba-logistics',
      num: '04',
      title: 'FBA / FBN Logistics',
      desc: 'Warehouse routing into Riyadh, Jeddah, and Dubai fulfillment nodes, avoiding stockouts during Ramadan and White/Yellow Friday mega-sales.',
      tag: '99.8% On-Time SLA',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    }
  ];

  // Automatic slideshow rotation for Management Pillars every 4 seconds
  useEffect(() => {
    if (isPillarPaused) return;
    const timer = setInterval(() => {
      setPillarIdx((prev) => (prev + 1) % managementPillars.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPillarPaused, managementPillars.length]);

  const handlePillarPrev = () => {
    setPillarIdx((prev) => (prev - 1 + managementPillars.length) % managementPillars.length);
  };

  const handlePillarNext = () => {
    setPillarIdx((prev) => (prev + 1) % managementPillars.length);
  };

  const handlePillarTouchStart = (e) => {
    setIsPillarPaused(true);
    setPillarTouchEnd(null);
    setPillarTouchStart(e.targetTouches[0].clientX);
  };

  const handlePillarTouchMove = (e) => {
    setPillarTouchEnd(e.targetTouches[0].clientX);
  };

  const handlePillarTouchEnd = () => {
    if (!pillarTouchStart || !pillarTouchEnd) {
      setTimeout(() => setIsPillarPaused(false), 3500);
      return;
    }
    const distance = pillarTouchStart - pillarTouchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) handlePillarNext();
    if (isRightSwipe) handlePillarPrev();
    setTimeout(() => setIsPillarPaused(false), 3500);
  };

  const handlePrev = () => {
    setMobileIdx((prev) => (prev - 1 + platforms.length) % platforms.length);
  };

  const handleNext = () => {
    setMobileIdx((prev) => (prev + 1) % platforms.length);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  const renderPlatformCard = (p) => (
    <div className="platform-detail-card" key={p.id}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div className="platform-detail-icon">{p.icon}</div>
        <span className="growth-badge">{p.badge}</span>
      </div>

      {/* Light-theme verified console preview */}
      <div 
        className="dashboard-img-container" 
        style={{ marginBottom: '16px', cursor: 'pointer', aspectRatio: '16 / 9.5', minHeight: 'auto' }}
        onClick={() => onOpenModal && onOpenModal(p.image, `${p.name} Verified Console`)}
        title="Click to inspect verified console"
      >
        <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <h3 className="platform-detail-title">{p.name}</h3>
      <p style={{ fontSize: '0.82rem', color: 'var(--neon-cyan)', marginBottom: '10px', fontWeight: 600 }}>{p.sub}</p>
      <p className="platform-detail-desc">{p.desc}</p>

      <ul className="platform-checklist">
        {p.features.map((feat, idx) => (
          <li key={idx} className="platform-checklist-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <Link 
          to={p.link} 
          className="btn btn-secondary" 
          style={{ 
            width: '100%', 
            justifyContent: 'center', 
            whiteSpace: 'normal', 
            textAlign: 'center', 
            padding: '12px 16px', 
            fontSize: '0.88rem',
            lineHeight: '1.3'
          }}
        >
          <span>{p.buttonText}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );

  const renderPillarCard = (p) => (
    <div className="manage-pillar-card" key={p.id}>
      <div className="manage-pillar-header">
        <div className="manage-pillar-icon">{p.icon}</div>
        <div className="manage-pillar-badge">{p.tag}</div>
      </div>
      <h3 className="manage-pillar-title">{p.title}</h3>
      <p className="manage-pillar-desc">{p.desc}</p>
    </div>
  );

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Marketplaces"
        title="Marketplaces"
        highlight="Growth"
        subtitle="Full-service marketplace management, advertising, and Buy Box growth across Amazon, Noon, and Trendyol in the GCC, USA, and UK."
        breadcrumbs={[{ label: 'Marketplaces' }]}
        primaryCtaText="Book Marketplace Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaLink="/case-studies"
        metrics={[
          { val: formatDynamicText('$142.8M+'), label: 'Marketplace GMV', sub: 'Managed across portfolios' },
          { val: '93.4%', label: 'Buy Box Rate', sub: 'Algorithmic defense' },
          { val: '3 Regions', label: 'GCC • USA • UK', sub: 'Unified regional ops' },
          { val: '100%', label: 'Turnkey Growth', sub: 'Catalog to ad scale' }
        ]}
      />

      <section className="section">
        <div className="container">
          {/* Division Switcher Ribbon (Clean Borderless & Padding-free) */}
          <div className="division-split-header">
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--neon-mint)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Platform Tracks
              </span>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', margin: '4px 0 0' }}>
                Marketplaces & Online Stores
              </h3>
            </div>
            <div className="division-toggle-group">
              <span className="division-nav-btn active">Marketplaces</span>
              <Link to="/shopify-dtc" className="division-nav-btn">Shopify & D2C</Link>
            </div>
          </div>

          <div className="section-header" style={{ textAlign: 'left', margin: '28px 0 16px' }}>
            <h2>Marketplaces We Scale</h2>
            <p className="desktop-only">
              Select a dedicated platform hub below for platform-specific capabilities, case studies, and execution systems:
            </p>
          </div>

          {/* Mobile Interactive Slideshow Carousel (All 4 tabs fit on page with zero horizontal scroll) */}
          <div className="mobile-platform-carousel-wrap">
            <div className="mobile-platform-tabs-bar">
              {platforms.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  className={`mobile-platform-tab-btn ${mobileIdx === idx ? 'active' : ''}`}
                  onClick={() => setMobileIdx(idx)}
                >
                  {p.shortLabel}
                </button>
              ))}
            </div>

            <div 
              className="mobile-platform-slide-wrap"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="mobile-carousel-slide">
                {renderPlatformCard(platforms[mobileIdx])}
              </div>

              <div className="mobile-carousel-controls">
                <button 
                  type="button" 
                  className="carousel-nav-btn prev" 
                  onClick={handlePrev} 
                  aria-label="Previous Marketplace"
                >
                  ‹
                </button>
                <div className="carousel-dots">
                  {platforms.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`carousel-dot ${mobileIdx === idx ? 'active' : ''}`}
                      onClick={() => setMobileIdx(idx)}
                      aria-label={`Go to ${platforms[idx].name}`}
                    />
                  ))}
                </div>
                <button 
                  type="button" 
                  className="carousel-nav-btn next" 
                  onClick={handleNext} 
                  aria-label="Next Marketplace"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Desktop 2x2 Dedicated Platform Grid */}
          <div className="desktop-platform-grid platform-detail-grid">
            {platforms.map((p) => renderPlatformCard(p))}
          </div>

          {/* Operational Systems: "How We Manage Your Brand" */}
          <div className="marketplaces-matrix-container">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '16px' }}>
              <h2>How We Manage Your Brand</h2>
            </div>

            {/* Mobile Automatic Slideshow in Card Style with Unified Controls */}
            <div 
              className="mobile-manage-carousel-wrap"
              onTouchStart={handlePillarTouchStart}
              onTouchMove={handlePillarTouchMove}
              onTouchEnd={handlePillarTouchEnd}
              onMouseEnter={() => setIsPillarPaused(true)}
              onMouseLeave={() => setIsPillarPaused(false)}
            >
              <div className="mobile-carousel-slide">
                {renderPillarCard(managementPillars[pillarIdx])}
              </div>

              {/* Consistent Home Page Style Carousel Controls */}
              <div className="mobile-carousel-controls">
                <button 
                  type="button" 
                  className="carousel-nav-btn prev" 
                  onClick={handlePillarPrev} 
                  aria-label="Previous management pillar"
                >
                  ‹
                </button>
                <div className="carousel-dots">
                  {managementPillars.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`carousel-dot ${pillarIdx === idx ? 'active' : ''}`}
                      onClick={() => setPillarIdx(idx)}
                      aria-label={`Go to ${managementPillars[idx].title}`}
                    />
                  ))}
                </div>
                <button 
                  type="button" 
                  className="carousel-nav-btn next" 
                  onClick={handlePillarNext} 
                  aria-label="Next management pillar"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="desktop-manage-grid">
              {managementPillars.map((p) => renderPillarCard(p))}
            </div>

            <div className="marketplaces-matrix-cta">
              <Link to="/book-audit" className="btn btn-primary marketplaces-cta-btn">
                <span>Book Marketplace Audit</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
