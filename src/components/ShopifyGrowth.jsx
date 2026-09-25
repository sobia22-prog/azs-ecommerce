import React, { useState } from 'react';
import { Link } from '../Router';

const STORES = {
  homemaster: {
    name: 'HomeMaster Appliances',
    category: 'Premium Home & Kitchen Gear',
    highlight: 'Bilingual Arabic/EN experience, high-converting UX & 4.8/5 shop rating.',
    uniqueMetrics: [
      { label: 'Scale Velocity', val: '+11,963%', desc: 'GMV Expansion' },
      { label: 'Sponsored Ad ACOS', val: '6.93%', desc: '14.43x ROAS' },
      { label: 'Units Dispatched', val: '42,800+', desc: 'FBA & Direct D2C' },
      { label: 'GCC Localization', val: '100% RTL', desc: 'Bilingual Checkout' }
    ]
  },
  livora: {
    name: 'LIVORA Modern Essentials',
    category: 'Modern Essentials & Timeless Apparel',
    highlight: 'Frictionless mobile checkout, Tamara/Tabby BNPL & creator ad funnels.',
    uniqueMetrics: [
      { label: 'Monthly Net Sales', val: '$50,461.90', desc: '+104% MoM Scale' },
      { label: 'Paid Social ROAS', val: '4.62x', desc: 'Meta & TikTok' },
      { label: 'Checkout CVR', val: '3.82%', desc: '+122% Conversion Lift' },
      { label: 'Total Orders', val: '1,680 Units', desc: '90-Day Sprint' }
    ]
  },
  creativethings: {
    name: 'Creative Things Tech',
    category: 'Creator Studios & Sound Gear',
    highlight: '3D lifestyle assets, Google PMax integration & 72h GCC delivery.',
    uniqueMetrics: [
      { label: 'Campaign Run-Rate', val: 'SAR 208,535', desc: 'Peak Push' },
      { label: 'Cross-Channel ROAS', val: '6.85x', desc: 'PMax + Noon' },
      { label: 'Average Order Value', val: 'SAR 399', desc: '+42% Basket Size' },
      { label: 'High-Intent Traffic', val: '64% Search', desc: 'Commercial Intent' }
    ]
  }
};

export default function ShopifyGrowth({ onOpenModal }) {
  const [activeStore, setActiveStore] = useState('homemaster');
  const store = STORES[activeStore];

  const storeVisuals = {
    homemaster: {
      img: '/assets/shopify_devices_hero.png',
      caption: 'HomeMaster GCC Smart Appliances Storefront Architecture'
    },
    livora: {
      img: '/assets/shopify_storefronts_mockup.png',
      caption: 'LIVORA French Linen Mobile & Desktop Storefront'
    },
    creativethings: {
      img: '/assets/shopify_devices_hero.png',
      caption: 'Creative Things Audio Studio Commerce Architecture'
    }
  };

  const currentVisual = storeVisuals[activeStore] || storeVisuals.homemaster;

  return (
    <section className="section section-alt" id="shopify-d2c">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill badge-pill-cyan">Shopify & DTC</div>
          <h2>Shopify & Online Stores</h2>
          <p>
            High-converting storefronts and paid acquisition built for GCC shoppers.
          </p>
        </div>

        <div className="shopify-showcase-grid">
          {/* Visual Device Storefront Mockup Column */}
          <div>
            <div className="store-tabs-wrapper">
              <div className="store-tabs-nav">
                <button
                  className={`store-tab-pill ${activeStore === 'homemaster' ? 'active' : ''}`}
                  onClick={() => setActiveStore('homemaster')}
                >
                  <span className="store-pill-short">HomeMaster</span>
                  <span className="store-pill-full">HomeMaster</span>
                </button>
                <button
                  className={`store-tab-pill ${activeStore === 'livora' ? 'active' : ''}`}
                  onClick={() => setActiveStore('livora')}
                >
                  <span className="store-pill-short">LIVORA</span>
                  <span className="store-pill-full">LIVORA Apparel</span>
                </button>
                <button
                  className={`store-tab-pill ${activeStore === 'creativethings' ? 'active' : ''}`}
                  onClick={() => setActiveStore('creativethings')}
                >
                  <span className="store-pill-short">Creative</span>
                  <span className="store-pill-full">Creative Things</span>
                </button>
              </div>
            </div>

            {/* Clean Visual Storefront Architecture Graphic */}
            <div
              className="mockup-media-wrapper"
              onClick={() => onOpenModal(currentVisual.img, `${store.name} — Storefront Architecture`)}
              style={{ cursor: 'pointer' }}
              title="Click to zoom high-resolution storefront architecture"
            >
              <img
                src={currentVisual.img}
                alt={`${store.name} Storefront Architecture by AZS Solutions`}
                loading="lazy"
              />
            </div>
          </div>

          {/* Capabilities Column */}
          <div className="shopify-features-col">
            <div className="badge-pill desktop-only" style={{ marginBottom: '12px' }}>High-Conversion UX</div>
            <div className="shopify-store-header">
              <h3 className="shopify-store-title">{store.name}</h3>
              <p className="shopify-store-category">{store.category}</p>
              <p className="shopify-store-highlight">{store.highlight}</p>
            </div>

            {/* Sleek 2x2 Feature Matrix - Concise & Modern */}
            <div className="capabilities-compact-grid">
              <div className="cap-compact-card">
                <div className="cap-compact-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="cap-compact-text">
                  <strong>Arabic & RTL Checkout</strong>
                  <span>Saudi & UAE localized</span>
                </div>
              </div>

              <div className="cap-compact-card">
                <div className="cap-compact-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <div className="cap-compact-text">
                  <strong>Meta Advantage+ Ads</strong>
                  <span>High-ROAS video funnels</span>
                </div>
              </div>

              <div className="cap-compact-card">
                <div className="cap-compact-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <div className="cap-compact-text">
                  <strong>Google PMax Engine</strong>
                  <span>High-intent search capture</span>
                </div>
              </div>

              <div className="cap-compact-card">
                <div className="cap-compact-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <div className="cap-compact-text">
                  <strong>TikTok Creator UGC</strong>
                  <span>Viral impulse acceleration</span>
                </div>
              </div>
            </div>

            {/* Store-Specific Verified Impact Card (Desktop Only) */}
            <div className="store-metrics-panel desktop-only">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--neon-mint)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', display: 'flex', alignItems: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px', flexShrink: 0 }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Audited Client Impact
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Verified Sprint Data</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {store.uniqueMetrics.map((m, idx) => (
                  <div key={idx} className="store-metric-item">
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>{m.label}</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-pure)', margin: '2px 0' }}>{m.val}</div>
                    <div style={{ fontSize: '0.70rem', color: 'var(--neon-cyan)' }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons in 1 row */}
            <div className="deck-cta-row" style={{ marginTop: '14px' }}>
              <Link to="/book-audit" className="btn btn-primary deck-cta-btn">
                Audit My Store
              </Link>
              <Link to="/shopify" className="btn btn-secondary deck-cta-btn">
                <span className="deck-btn-short">Explore Hub</span>
                <span className="deck-btn-full">Explore Shopify Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

