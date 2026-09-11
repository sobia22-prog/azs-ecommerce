import React, { useState } from 'react';

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
    stat3Val: '5.09x - 14.4x',
    stat4Label: 'Total Orders',
    stat4Val: '522 Units'
  },
  usa: {
    title: 'USA Marketplace Advertising Engine (Amazon.com)',
    desc: 'Verified Sponsored Products (SP), Sponsored Brands (SB), and Sponsored Display (SD) campaign scaling in the United States.',
    img: '/assets/amazon_ad_dashboard.png',
    stat1Label: 'Total Ad Sales',
    stat1Val: '$48,900.00',
    stat2Label: 'Verified ROAS',
    stat2Val: '14.43x',
    stat3Label: 'ACOS Efficiency',
    stat3Val: '6.93%',
    stat4Label: 'Total Ad Spend',
    stat4Val: '$3,387.00'
  },
  uk: {
    title: 'UK Marketplace Cross-Border Gateway (Amazon.co.uk)',
    desc: 'High-margin British expansion, localized SEO, VAT compliance, Prime fulfillment, and consumer acquisition.',
    img: '/assets/noon_trendyol_dashboard.png',
    stat1Label: 'UK Revenue Lift',
    stat1Val: '£36,450',
    stat2Label: 'UK ROAS',
    stat2Val: '13.61x',
    stat3Label: 'Channel Lift',
    stat3Val: '+507%',
    stat4Label: 'Prime Orders',
    stat4Val: '480 Units'
  },
  consolidated: {
    title: 'Consolidated 3-Marketplace Executive Reporting (KSA, USA, UK)',
    desc: 'Unified multi-region operational reporting dashboard comparing KSA, USA, UK, and Shopify in a single accountable view.',
    img: '/assets/reporting_dashboards_showcase.png',
    stat1Label: 'Total Revenue',
    stat1Val: '$142,850,000',
    stat2Label: 'Top Sales Spike',
    stat2Val: '+11,963%',
    stat3Label: '7-Day Revenue',
    stat3Val: '$32,200',
    stat4Label: 'Channel Lift',
    stat4Val: '+507%'
  }
};

export default function Marketplaces({ onOpenModal }) {
  const [activeDash, setActiveDash] = useState('ksa');
  const current = DASHBOARDS[activeDash];

  return (
    <section className="section" id="marketplaces">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">The 3 Core Marketplaces</div>
          <h2>Dominating KSA, USA & UK Marketplaces</h2>
          <p>
            End-to-end execution, catalog structuring, and multi-region advertising across the 3 premier revenue corridors: Saudi Arabia (KSA), United States (USA), and United Kingdom (UK).
          </p>
        </div>

        {/* 3 Marketplace Cards: KSA, USA, UK */}
        <div className="marketplace-grid">
          {/* KSA Marketplace */}
          <div className="mkt-card">
            <div className="mkt-card-glow"></div>

            {/* Visual Screenshot Picture Banner */}
            <div
              className="mkt-card-media"
              onClick={() => onOpenModal('/assets/noon_ads_full_card.png', 'KSA Marketplace Growth Console — SAR 208,535 (Amazon.sa & Noon KSA)')}
              title="Click to inspect verified KSA performance console"
            >
              <img src="/assets/noon_ads_full_card.png" alt="KSA Marketplace Console" />
              <span className="mkt-media-overlay-badge" style={{ color: '#00f59b', borderColor: 'rgba(0, 245, 155, 0.4)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Inspect Proof
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
            <h3 className="mkt-card-title">KSA Marketplace</h3>
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
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon">🎯</span>
                <span>White Friday, Yellow Friday & Ramadan Boost</span>
              </div>
            </div>

            <div className="mkt-metric-footer">
              <span className="mkt-metric-tag">KSA Quarterly Volume</span>
              <span className="mkt-metric-val">SAR 208,535</span>
            </div>
          </div>

          {/* USA Marketplace */}
          <div className="mkt-card">
            <div className="mkt-card-glow"></div>

            {/* Visual Screenshot Picture Banner */}
            <div
              className="mkt-card-media"
              onClick={() => onOpenModal('/assets/amazon_ad_dashboard.png', 'USA Marketplace Advertising Engine — 14.43x ROAS (Amazon.com)')}
              title="Click to inspect verified USA ad dashboard"
            >
              <img src="/assets/amazon_ad_dashboard.png" alt="USA Marketplace Advertising Dashboard" />
              <span className="mkt-media-overlay-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Inspect Proof
              </span>
            </div>

            <div className="mkt-card-header">
              <div className="mkt-icon-box" style={{ color: '#00d2ff', background: 'rgba(0, 210, 255, 0.1)', borderColor: 'rgba(0, 210, 255, 0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6 15.5c-2.4 1.8-5.9 2.7-8.9 2.7-4.2 0-8-1.5-10.9-4.1-.2-.2 0-.5.2-.3 3.1 1.8 6.9 2.9 10.7 2.9 2.7 0 5.8-.7 8.3-2.1.4-.2.7.2.6.9zm1.1-1.3c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.3-.9 3.4-.6 3.7-.3.3.4.1 2.5-.9 3.5-.2.2-.3.1-.2-.1.3-.6.4-2.3.1-2.7zM18.8 8.4c-.1-.3-.3-.4-.5-.4-.4 0-.8.4-.8.8v2.4c0 1.7-.8 2.7-2.3 2.7-1.1 0-1.9-.7-2.3-1.6l-.3-.7v-2.8c0-.4-.4-.8-.8-.8s-.8.4-.8.8v3.4c0 1.2.3 2.2 1 2.9.7.7 1.7 1 2.8 1 1.4 0 2.5-.6 3.1-1.7v1.1c0 .4.4.8.8.8s.8-.4.8-.8V9.2c0-.3 0-.6-.1-.8z"/>
                </svg>
              </div>
              <span className="growth-badge">14.43x ROAS</span>
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
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon" style={{ color: '#00d2ff', background: 'rgba(0, 210, 255, 0.12)' }}>🛡️</span>
                <span>Brand Registry, Buy Box & Account Health Shield</span>
              </div>
            </div>

            <div className="mkt-metric-footer">
              <span className="mkt-metric-tag">ACOS Efficiency</span>
              <span className="mkt-metric-val">6.93% Verified</span>
            </div>
          </div>

          {/* UK Marketplace */}
          <div className="mkt-card">
            <div className="mkt-card-glow"></div>

            {/* Visual Screenshot Picture Banner */}
            <div
              className="mkt-card-media"
              onClick={() => onOpenModal('/assets/noon_trendyol_dashboard.png', 'UK Marketplace Gateway — 13.61x ROAS (Amazon.co.uk)')}
              title="Click to inspect verified UK dashboard"
            >
              <img src="/assets/noon_trendyol_dashboard.png" alt="UK Marketplace Performance Dashboard" />
              <span className="mkt-media-overlay-badge" style={{ color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.4)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Inspect Proof
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
              <div className="mkt-feature-tag-pill">
                <span className="mkt-tag-icon" style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.12)' }}>🛡️</span>
                <span>HMRC VAT Compliance & Defense</span>
              </div>
            </div>

            <div className="mkt-metric-footer">
              <span className="mkt-metric-tag">Initial Expansion</span>
              <span className="mkt-metric-val">13.61x ROAS</span>
            </div>
          </div>
        </div>

        {/* Live Marketplace Console */}
        <div className="deck-showcase-wrapper" id="dashboards-proof">
          <div className="deck-showcase-header">
            <div>
              <div className="badge-pill badge-pill-cyan">Verified Multi-Marketplace Proof</div>
              <h3 style={{ fontSize: '1.8rem', marginTop: '6px' }}>Live Marketplace & Ad Performance Console</h3>
            </div>
            <div className="deck-switcher-pills">
              <button
                className={`deck-pill-btn ${activeDash === 'ksa' ? 'active' : ''}`}
                onClick={() => setActiveDash('ksa')}
              >
                🇸🇦 KSA (Amazon.sa & Noon)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'usa' ? 'active' : ''}`}
                onClick={() => setActiveDash('usa')}
              >
                🇺🇸 USA (Amazon.com 14.4x)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'uk' ? 'active' : ''}`}
                onClick={() => setActiveDash('uk')}
              >
                🇬🇧 UK (Amazon.co.uk +507%)
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
                Click to Inspect Full 4K Metric
              </div>
            </div>

            <div className="dashboard-details-col">
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

              <div style={{ display: 'flex', gap: '14px' }}>
                <a href="#book-audit" className="btn btn-primary" style={{ padding: '12px 22px', fontSize: '0.9rem' }}>
                  Audit My Account
                </a>
                <button
                  className="btn btn-secondary"
                  onClick={() => onOpenModal('/assets/reporting_dashboards_showcase.png', 'Consolidated Reporting')}
                  style={{ padding: '12px 22px', fontSize: '0.9rem' }}
                >
                  Inspect All Reporting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
