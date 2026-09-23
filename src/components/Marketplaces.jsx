import React, { useState } from 'react';
import { Link } from '../Router';

const MARKETPLACE_LIST = [
  {
    id: 'ksa',
    tabLabel: 'KSA',
    title: 'KSA Marketplaces',
    region: 'Saudi Arabia — Amazon.sa & Noon KSA',
    tag: 'KSA Territory',
    tagColor: '#00f59b',
    tagBorder: 'rgba(0, 245, 155, 0.4)',
    growthBadge: '+311% Orders',
    desc: 'Dominating Amazon.sa and Noon Seller Lab with Riyadh/Jeddah warehousing & Arabic optimization.',
    img: '/assets/mkt_ksa_riyadh.jpg',
    metricLabel: 'KSA Blended ROAS',
    metricVal: '6.85x ROAS',
    features: [
      { text: 'Amazon.sa & Noon Seller Lab Sync' },
      { text: 'FBN & FBA Warehousing (Riyadh & Jeddah)' }
    ],
    links: [
      { to: '/amazon', label: 'Amazon Hub' },
      { to: '/noon', label: 'Noon Hub' }
    ]
  },
  {
    id: 'trendyol',
    tabLabel: 'Trendyol',
    title: 'Trendyol GCC Expansion',
    region: 'Saudi Arabia & UAE — Turkey / EU Cross-Border',
    tag: 'Cross-Border',
    tagColor: '#00f59b',
    tagBorder: 'rgba(0, 245, 155, 0.4)',
    growthBadge: '7.80x ROAS',
    desc: 'Surging Turkey-to-Gulf mobile corridor. Turnkey Arabic catalog sync & rapid flash promotions.',
    img: '/assets/mkt_trendyol_gcc.jpg',
    metricLabel: 'Monthly Scaled Pace',
    metricVal: 'SAR 145,000',
    features: [
      { text: 'Automated Arabic Attribute Mapping' },
      { text: 'Air Express <72h GCC Delivery SLAs' }
    ],
    links: [
      { to: '/trendyol', label: 'Explore Trendyol Hub' }
    ]
  },
  {
    id: 'usa',
    tabLabel: 'USA',
    title: 'USA Marketplace',
    region: 'United States — Amazon.com & Omnichannel',
    tag: 'USA Territory',
    tagColor: '#00f59b',
    tagBorder: 'rgba(0, 245, 155, 0.4)',
    growthBadge: '11.20x ROAS',
    desc: 'High-velocity US Amazon PPC bid automation, A+ storytelling & nationwide FBA restock.',
    img: '/assets/mkt_usa_nyc.jpg',
    metricLabel: 'ACOS Efficiency',
    metricVal: '8.90% Verified',
    features: [
      { text: 'SP, SB & Display PPC Bidding Automation' },
      { text: 'Nationwide US FBA Restock & Logistics' }
    ],
    links: [
      { to: '/amazon', label: 'Explore Amazon USA Hub' }
    ]
  },
  {
    id: 'uk',
    tabLabel: 'UK',
    title: 'UK Marketplace',
    region: 'United Kingdom — Amazon.co.uk & Europe',
    tag: 'UK Gateway',
    tagColor: '#00f59b',
    tagBorder: 'rgba(0, 245, 155, 0.4)',
    growthBadge: '+507% Lift',
    desc: 'Cross-border British expansion with UK VAT compliance, localized copy & Pan-EU Prime.',
    img: '/assets/mkt_uk_london.jpg',
    metricLabel: 'British Prime ROAS',
    metricVal: '9.45x ROAS',
    features: [
      { text: 'Amazon UK Listing SEO & Localization' },
      { text: 'UK Prime & Pan-European FBA Routing' }
    ],
    links: [
      { to: '/amazon', label: 'Explore Amazon UK Hub' }
    ]
  }
];

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
  const [activeMobileMkt, setActiveMobileMkt] = useState('ksa');
  const [activeDash, setActiveDash] = useState('ksa');
  const current = DASHBOARDS[activeDash] || DASHBOARDS.ksa;
  const activeMktData = MARKETPLACE_LIST.find(m => m.id === activeMobileMkt) || MARKETPLACE_LIST[0];

  const renderCardContent = (mkt) => (
    <div className="mkt-card" key={mkt.id} style={mkt.id === 'trendyol' ? { borderColor: 'rgba(245, 158, 11, 0.25)' } : {}}>
      <div className="mkt-card-glow" style={mkt.id === 'trendyol' ? { background: 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)' } : {}}></div>

      <div
        className="mkt-card-media"
        onClick={() => onOpenModal(mkt.img, `${mkt.title} — Corridor Proof`)}
        title="Click to view marketplace hub"
      >
        <img src={mkt.img} alt={`${mkt.title} Hub`} loading="lazy" />
        <span className="mkt-media-overlay-badge" style={{ color: mkt.tagColor, borderColor: mkt.tagBorder }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          {mkt.tag}
        </span>
      </div>

      <div className="mkt-card-header">
        <div className="mkt-icon-box" style={{ color: 'var(--neon-mint)', background: 'rgba(0, 245, 155, 0.12)', borderColor: 'rgba(0, 245, 155, 0.35)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <span className="growth-badge" style={{ color: 'var(--neon-mint)', borderColor: 'rgba(0, 245, 155, 0.35)', background: 'rgba(0, 245, 155, 0.12)' }}>
          {mkt.growthBadge}
        </span>
      </div>
      <h3 className="mkt-card-title">{mkt.title}</h3>
      <div className="mkt-card-regions">
        <span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--neon-mint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '5px' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {mkt.region}
        </span>
      </div>
      <p className="mkt-card-desc">{mkt.desc}</p>
      
      <div className="mkt-feature-tags-grid desktop-only">
        {mkt.features.map((feat, fIdx) => (
          <div key={fIdx} className="mkt-feature-tag-pill">
            <span className="mkt-tag-icon">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--neon-mint)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span>{feat.text}</span>
          </div>
        ))}
      </div>

      <div className="mkt-metric-footer" style={{ marginBottom: '14px' }}>
        <span className="mkt-metric-tag">{mkt.metricLabel}</span>
        <span className="mkt-metric-val" style={{ color: mkt.tagColor }}>{mkt.metricVal}</span>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        {mkt.links.map((link, lIdx) => (
          <Link
            key={lIdx}
            to={link.to}
            className="btn btn-secondary"
            style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '9px 12px' }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section" id="marketplaces">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill desktop-only">The 4 Core Marketplaces</div>
          <h2>Dominating KSA, Trendyol, USA & UK Marketplaces</h2>
          <p className="desktop-only">
            One operating team for marketplace growth across the regions that matter.
          </p>
        </div>

        {/* Mobile-Only Interactive Marketplace Selector Pills */}
        <div className="mobile-mkt-tabs-bar">
          {MARKETPLACE_LIST.map((mkt) => (
            <button
              key={mkt.id}
              className={`mobile-mkt-tab-btn ${activeMobileMkt === mkt.id ? 'active' : ''}`}
              onClick={() => setActiveMobileMkt(mkt.id)}
            >
              {mkt.tabLabel}
            </button>
          ))}
        </div>

        {/* Mobile Single Active Card View */}
        <div className="mobile-mkt-single-card-wrap">
          {renderCardContent(activeMktData)}
        </div>

        {/* Desktop 2x2 Marketplace Grid */}
        <div className="desktop-marketplace-grid marketplace-grid marketplace-grid-2col">
          {MARKETPLACE_LIST.map((mkt) => renderCardContent(mkt))}
        </div>

        {/* Live Marketplace Console */}
        <div className="deck-showcase-wrapper" id="dashboards-proof" style={{ marginTop: '50px' }}>
          <div className="deck-showcase-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <div className="badge-pill badge-pill-cyan">Multi-Marketplace Proof</div>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--neon-mint)', background: 'rgba(0, 245, 155, 0.12)', border: '1px solid rgba(0, 245, 155, 0.3)', padding: '2px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  Audited Partner Console Snapshot
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', marginTop: '4px' }}>Live Marketplace & Ad Performance Console</h3>
            </div>
            <div className="deck-switcher-pills">
              <button
                className={`deck-pill-btn ${activeDash === 'ksa' ? 'active' : ''}`}
                onClick={() => setActiveDash('ksa')}
              >
                KSA (Amazon & Noon)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'trendyol' ? 'active' : ''}`}
                onClick={() => setActiveDash('trendyol')}
              >
                Trendyol (7.80x)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'usa' ? 'active' : ''}`}
                onClick={() => setActiveDash('usa')}
              >
                USA (11.20x)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'uk' ? 'active' : ''}`}
                onClick={() => setActiveDash('uk')}
              >
                UK (9.45x)
              </button>
              <button
                className={`deck-pill-btn ${activeDash === 'consolidated' ? 'active' : ''}`}
                onClick={() => setActiveDash('consolidated')}
              >
                Consolidated View
              </button>
            </div>
          </div>

          <div className="dashboard-view-panel">
            <div 
              className="dashboard-img-container"
              onClick={() => onOpenModal(current.img, current.title)}
            >
              <img src={current.img} alt={current.title} loading="lazy" />
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


