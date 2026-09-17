import React, { useState } from 'react';
import { Link } from '../Router';

const DASHBOARDS = {
  ksa: {
    title: 'KSA Marketplace Growth Console (Amazon.sa & Noon KSA)',
    desc: 'Seller Lab & Fulfilled By Noon (FBN) promotional push showing massive conversion and volume scaling in Saudi Arabia.',
    img: '/assets/noon_ads_full_card.png',
    stat1Label: 'KSA Revenue',
    stat1Val: 'SAR 208,535',
    stat2Label: 'Orders Growth',
    stat2Val: '+311.02%',
    stat3Label: 'Verified ROAS',
    stat3Val: '6.85x',
    stat4Label: 'Total Orders',
    stat4Val: '522 Units'
  },
  trendyol: {
    title: 'Trendyol GCC Cross-Border Expansion Gateway',
    desc: 'Automated product attribute translation, localized pricing, flash sale marketing, and high-margin GCC volume on Trendyol.',
    img: '/assets/trendyol_light_dashboard.svg',
    stat1Label: 'GCC Run-Rate',
    stat1Val: 'SAR 145,000',
    stat2Label: 'Orders Lift',
    stat2Val: '+240%',
    stat3Label: 'Flash Sale ROAS',
    stat3Val: '7.80x',
    stat4Label: 'Synced SKUs',
    stat4Val: '350+ Live'
  },
  usa: {
    title: 'USA Marketplace Advertising Engine (Amazon.com)',
    desc: 'Verified Sponsored Products (SP), Sponsored Brands (SB), and Sponsored Display (SD) campaign scaling in the United States.',
    img: '/assets/usa_amazon_light_dashboard.svg',
    stat1Label: 'Total Ad Sales',
    stat1Val: '$48,900.00',
    stat2Label: 'Verified ROAS',
    stat2Val: '11.20x',
    stat3Label: 'ACOS Efficiency',
    stat3Val: '8.90%',
    stat4Label: 'Total Ad Spend',
    stat4Val: '$4,360.00'
  },
  uk: {
    title: 'UK Marketplace Cross-Border Gateway (Amazon.co.uk)',
    desc: 'High-margin British expansion, localized SEO, VAT compliance, Prime fulfillment, and consumer acquisition.',
    img: '/assets/uk_amazon_light_dashboard.svg',
    stat1Label: 'UK Revenue Lift',
    stat1Val: '£36,450',
    stat2Label: 'Prime ROAS',
    stat2Val: '9.45x',
    stat3Label: 'Channel Lift',
    stat3Val: '+507%',
    stat4Label: 'Prime Orders',
    stat4Val: '480 Units'
  },
  consolidated: {
    title: 'Consolidated Executive Reporting (GCC, USA, UK & Cross-Border)',
    desc: 'Unified multi-region operational reporting dashboard comparing Amazon, Noon, Trendyol, and Shopify in a single accountable view.',
    img: '/assets/consolidated_light_dashboard.svg',
    stat1Label: 'Total Portfolio GMV',
    stat1Val: '$142,850,000',
    stat2Label: 'Avg Blended ROAS',
    stat2Val: '8.40x',
    stat3Label: 'Buy Box Win Rate',
    stat3Val: '93.4%',
    stat4Label: 'YoY Surge',
    stat4Val: '+314%'
  }
};

export default function Marketplaces({ onOpenModal }) {
  const [activeDash, setActiveDash] = useState('ksa');
  const current = DASHBOARDS[activeDash] || DASHBOARDS.ksa;

  return (
    <section className="section" id="marketplaces">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">The 4 Core Marketplaces</div>
          <h2>Dominating KSA, Trendyol, USA & UK Marketplaces</h2>
          <p>
            End-to-end execution, catalog structuring, and multi-region advertising across the premier revenue corridors: Saudi Arabia (KSA), Trendyol GCC, United States (USA), and United Kingdom (UK).
          </p>
        </div>

        {/* 4 Marketplace Cards: KSA, Trendyol, USA, UK (2 cards per row) */}
        <div className="marketplace-grid marketplace-grid-2col">
          {/* 1. KSA Marketplace */}
          <div className="mkt-card">
            <div className="mkt-card-glow"></div>

            <div
              className="mkt-card-media"
              onClick={() => onOpenModal('/assets/mkt_ksa_riyadh.jpg', 'Saudi Arabia Marketplace Corridor (Amazon.sa & Noon KSA)')}
              title="Click to view Saudi Arabia marketplace hub"
            >
              <img src="/assets/mkt_ksa_riyadh.jpg" alt="Saudi Arabia Marketplace Hub — Riyadh" />
              <span className="mkt-media-overlay-badge" style={{ color: '#00f59b', borderColor: 'rgba(0, 245, 155, 0.4)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                🇸🇦 KSA Territory
              </span>
            </div>

            <div className="mkt-card-header">
              <div className="mkt-icon-box" style={{ color: '#00f59b', background: 'rgba(0, 245, 155, 0.1)', borderColor: 'rgba(0, 245, 155, 0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <span className="growth-badge">+311% Orders</span>
            </div>
            <h3 className="mkt-card-title">KSA Marketplaces</h3>
            <div className="mkt-card-regions">
              <span>📍 Saudi Arabia — Amazon.sa & Noon KSA</span>
            </div>
            <p className="mkt-card-desc">
              Dominating the Kingdom of Saudi Arabia. Complete Amazon.sa and Noon Seller Lab execution, FBA/FBN Riyadh warehousing, and Arabic listing optimization.
            </p>
            
            <div className="mkt-feature-tags-grid">
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon">⚡</span>
                <span>Amazon.sa & Noon Seller Lab Sync</span>
              </div>
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon">📦</span>
                <span>FBN & FBA Warehousing (Riyadh & Jeddah)</span>
              </div>
            </div>

            <div className="mkt-metric-footer" style={{ marginBottom: '14px' }}>
              <span className="mkt-metric-tag">KSA Blended ROAS</span>
              <span className="mkt-metric-val">6.85x ROAS</span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/amazon" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.78rem', padding: '8px 12px' }}>
                Amazon Hub
              </Link>
              <Link to="/noon" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.78rem', padding: '8px 12px' }}>
                Noon Hub
              </Link>
            </div>
          </div>

          {/* 2. Trendyol GCC Marketplace (NEW INTEGRATION) */}
          <div className="mkt-card" style={{ borderColor: 'rgba(245, 158, 11, 0.25)' }}>
            <div className="mkt-card-glow" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)' }}></div>

            <div
              className="mkt-card-media"
              onClick={() => onOpenModal('/assets/mkt_trendyol_gcc.jpg', 'Trendyol GCC Cross-Border Trade Corridor (Turkey & GCC)')}
              title="Click to view Trendyol GCC cross-border trade corridor"
            >
              <img src="/assets/mkt_trendyol_gcc.jpg" alt="Trendyol GCC Cross-Border Trade Corridor — Istanbul to GCC" />
              <span className="mkt-media-overlay-badge" style={{ color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.4)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                🇹🇷 Cross-Border Trade
              </span>
            </div>

            <div className="mkt-card-header">
              <div className="mkt-icon-box" style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
                <span>🇹🇷</span>
              </div>
              <span className="growth-badge" style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>7.80x ROAS</span>
            </div>
            <h3 className="mkt-card-title">Trendyol GCC Expansion</h3>
            <div className="mkt-card-regions">
              <span>📍 Saudi Arabia & UAE — Turkey / EU Cross-Border</span>
            </div>
            <p className="mkt-card-desc">
              Expanding onto Trendyol's surging GCC mobile corridor. Turnkey Arabic catalog translation, VAT duty reconciliation, and high-margin flash promotions.
            </p>
            
            <div className="mkt-feature-tags-grid">
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon" style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.12)' }}>🔄</span>
                <span>Automated Arabic Attribute Mapping</span>
              </div>
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon" style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.12)' }}>✈️</span>
                <span>Air Express &lt;72h GCC Delivery SLAs</span>
              </div>
            </div>

            <div className="mkt-metric-footer" style={{ marginBottom: '14px' }}>
              <span className="mkt-metric-tag">Monthly Scaled Pace</span>
              <span className="mkt-metric-val" style={{ color: '#f59e0b' }}>SAR 145,000</span>
            </div>

            <Link to="/trendyol" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.78rem', padding: '8px 12px' }}>
              Explore Trendyol Hub
            </Link>
          </div>

          {/* 3. USA Marketplace */}
          <div className="mkt-card">
            <div className="mkt-card-glow"></div>

            <div
              className="mkt-card-media"
              onClick={() => onOpenModal('/assets/mkt_usa_nyc.jpg', 'United States Marketplace Expansion (Amazon.com)')}
              title="Click to view United States marketplace hub"
            >
              <img src="/assets/mkt_usa_nyc.jpg" alt="USA Marketplace Expansion — New York" />
              <span className="mkt-media-overlay-badge" style={{ color: '#00d2ff', borderColor: 'rgba(0, 210, 255, 0.4)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                🇺🇸 US Territory
              </span>
            </div>

            <div className="mkt-card-header">
              <div className="mkt-icon-box" style={{ color: '#00d2ff', background: 'rgba(0, 210, 255, 0.1)', borderColor: 'rgba(0, 210, 255, 0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6 15.5c-2.4 1.8-5.9 2.7-8.9 2.7-4.2 0-8-1.5-10.9-4.1-.2-.2 0-.5.2-.3 3.1 1.8 6.9 2.9 10.7 2.9 2.7 0 5.8-.7 8.3-2.1.4-.2.7.2.6.9zm1.1-1.3c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.3-.9 3.4-.6 3.7-.3.3.4.1 2.5-.9 3.5-.2.2-.3.1-.2-.1.3-.6.4-2.3.1-2.7zM18.8 8.4c-.1-.3-.3-.4-.5-.4-.4 0-.8.4-.8.8v2.4c0 1.7-.8 2.7-2.3 2.7-1.1 0-1.9-.7-2.3-1.6l-.3-.7v-2.8c0-.4-.4-.8-.8-.8s-.8.4-.8.8v3.4c0 1.2.3 2.2 1 2.9.7.7 1.7 1 2.8 1 1.4 0 2.5-.6 3.1-1.7v1.1c0 .4.4.8.8.8s.8-.4.8-.8V9.2c0-.3 0-.6-.1-.8z"/>
                </svg>
              </div>
              <span className="growth-badge">11.20x ROAS</span>
            </div>
            <h3 className="mkt-card-title">USA Marketplace</h3>
            <div className="mkt-card-regions">
              <span>📍 United States — Amazon.com & US Omnichannel</span>
            </div>
            <p className="mkt-card-desc">
              High-velocity scale on the world's largest marketplace. Amazon US PPC bid automation, A+ storytelling, and nationwide US FBA restock optimization.
            </p>
            
            <div className="mkt-feature-tags-grid">
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon" style={{ color: '#00d2ff', background: 'rgba(0, 210, 255, 0.12)' }}>🎯</span>
                <span>SP, SB & Display PPC Bidding Automation</span>
              </div>
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon" style={{ color: '#00d2ff', background: 'rgba(0, 210, 255, 0.12)' }}>📦</span>
                <span>Nationwide US FBA Restock & Logistics</span>
              </div>
            </div>

            <div className="mkt-metric-footer" style={{ marginBottom: '14px' }}>
              <span className="mkt-metric-tag">ACOS Efficiency</span>
              <span className="mkt-metric-val">8.90% Verified</span>
            </div>

            <Link to="/amazon" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.78rem', padding: '8px 12px' }}>
              Explore Amazon USA Hub
            </Link>
          </div>

          {/* 4. UK Marketplace */}
          <div className="mkt-card">
            <div className="mkt-card-glow"></div>

            <div
              className="mkt-card-media"
              onClick={() => onOpenModal('/assets/mkt_uk_london.jpg', 'United Kingdom Marketplace Gateway (Amazon.co.uk)')}
              title="Click to view United Kingdom marketplace gateway"
            >
              <img src="/assets/mkt_uk_london.jpg" alt="UK Marketplace Gateway — London" />
              <span className="mkt-media-overlay-badge" style={{ color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.4)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                🇬🇧 UK Gateway
              </span>
            </div>

            <div className="mkt-card-header">
              <div className="mkt-icon-box" style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <span className="growth-badge" style={{ color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.3)', background: 'rgba(168, 85, 247, 0.1)' }}>+507% Lift</span>
            </div>
            <h3 className="mkt-card-title">UK Marketplace</h3>
            <div className="mkt-card-regions">
              <span>📍 United Kingdom — Amazon.co.uk & Europe Gateway</span>
            </div>
            <p className="mkt-card-desc">
              Cross-border British expansion and European gateway on Amazon.co.uk. Seamless UK VAT compliance, localized British copy, and Pan-European FBA Prime delivery.
            </p>
            
            <div className="mkt-feature-tags-grid">
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon" style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.12)' }}>⚡</span>
                <span>Amazon UK Listing SEO & Localization</span>
              </div>
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon" style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.12)' }}>📦</span>
                <span>UK Prime & Pan-European FBA Routing</span>
              </div>
            </div>

            <div className="mkt-metric-footer" style={{ marginBottom: '14px' }}>
              <span className="mkt-metric-tag">British Prime ROAS</span>
              <span className="mkt-metric-val">9.45x ROAS</span>
            </div>

            <Link to="/amazon" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.78rem', padding: '8px 12px' }}>
              Explore Amazon UK Hub
            </Link>
          </div>
        </div>

        {/* Live Marketplace Console */}
        <div className="deck-showcase-wrapper" id="dashboards-proof" style={{ marginTop: '50px' }}>
          <div className="deck-showcase-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <div className="badge-pill badge-pill-cyan">Multi-Marketplace Proof</div>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--neon-mint)', background: 'rgba(0, 245, 155, 0.12)', border: '1px solid rgba(0, 245, 155, 0.3)', padding: '2px 10px', borderRadius: '12px' }}>
                  🛡️ Audited Partner Console Snapshot
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', marginTop: '4px' }}>Live Marketplace & Ad Performance Console</h3>
            </div>
            <div className="deck-switcher-pills">
              <button
                className={`deck-pill-btn ${activeDash === 'ksa' ? 'active' : ''}`}
                onClick={() => setActiveDash('ksa')}
              >
                🇸🇦 KSA (Amazon & Noon)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'trendyol' ? 'active' : ''}`}
                onClick={() => setActiveDash('trendyol')}
              >
                🇹🇷 Trendyol (7.80x)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'usa' ? 'active' : ''}`}
                onClick={() => setActiveDash('usa')}
              >
                🇺🇸 USA (11.20x)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'uk' ? 'active' : ''}`}
                onClick={() => setActiveDash('uk')}
              >
                🇬🇧 UK (9.45x)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'consolidated' ? 'active' : ''}`}
                onClick={() => setActiveDash('consolidated')}
              >
                🌐 Consolidated View
              </button>
            </div>
          </div>

          <div className="dashboard-view-panel">
            <div 
              className="dashboard-img-container"
              onClick={() => onOpenModal(current.img, current.title)}
            >
              <img src={current.img} alt={current.title} />
              <div className="zoom-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Click to Inspect Audited 4K Console
              </div>
            </div>

            <div className="dashboard-details-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--neon-cyan)', background: 'rgba(0, 210, 255, 0.1)', padding: '2px 8px', borderRadius: '6px' }}>
                  Audited Cohort Data
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Trailing 90-Day Verified Run-Rate
                </span>
              </div>
              <h3>{current.title}</h3>
              <p>{current.desc}</p>

              <div className="stat-callout-grid">
                <div className="stat-callout">
                  <div className="stat-callout-label">{current.stat1Label}</div>
                  <div className="stat-callout-number">{current.stat1Val}</div>
                </div>
                <div className="stat-callout">
                  <div className="stat-callout-label">{current.stat2Label}</div>
                  <div className="stat-callout-number">{current.stat2Val}</div>
                </div>
                <div className="stat-callout">
                  <div className="stat-callout-label">{current.stat3Label}</div>
                  <div className="stat-callout-number">{current.stat3Val}</div>
                </div>
                <div className="stat-callout">
                  <div className="stat-callout-label">{current.stat4Label}</div>
                  <div className="stat-callout-number">{current.stat4Val}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/book-audit" className="btn btn-primary" style={{ padding: '12px 22px', fontSize: '0.9rem' }}>
                  Audit My Account
                </Link>
                <Link to="/marketplaces" className="btn btn-secondary" style={{ padding: '12px 22px', fontSize: '0.9rem' }}>
                  Explore Marketplaces Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

