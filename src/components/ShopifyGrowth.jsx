import React, { useState } from 'react';

const STORES = {
  homemaster: {
    name: 'HomeMaster Appliances',
    category: 'Premium Home & Kitchen Gear',
    highlight: 'Bilingual Arabic & English experience, elevated product storytelling, 4.8/5 shop performance score.',
    uniqueMetrics: [
      { label: 'Scale Velocity', val: '+11,963%', desc: 'Lifetime GMV expansion' },
      { label: 'Sponsored Ad ACOS', val: '6.93%', desc: '14.43x ROAS benchmark' },
      { label: 'Units Dispatched', val: '42,800+', desc: 'FBA & localized D2C' },
      { label: 'GCC Localization', val: '100% RTL', desc: 'Bilingual Saudi checkout' }
    ]
  },
  livora: {
    name: 'LIVORA Lifestyle & Fashion',
    category: 'Modern Essentials & Timeless Apparel',
    highlight: 'Visual hero storytelling, frictionless mobile checkout, Meta & TikTok Ads conversion funnel.',
    uniqueMetrics: [
      { label: 'Monthly Net Sales', val: '$50,461.90', desc: '+104% MoM acceleration' },
      { label: 'Paid Social ROAS', val: '4.62x', desc: 'Blended Meta & TikTok ads' },
      { label: 'Checkout CVR', val: '3.82%', desc: '+122% mobile conversion lift' },
      { label: 'GCC BNPL Adoption', val: '48% Share', desc: 'Tamara & Tabby integrated' }
    ]
  },
  creativethings: {
    name: 'Creative Things Tech',
    category: 'Creator Studios, Electronics & Gadgets',
    highlight: '3D lifestyle assets, Google Performance Max integration, lightning-fast GCC shipping badges.',
    uniqueMetrics: [
      { label: 'Q4 Campaign Run-Rate', val: 'SAR 208,535', desc: 'Electronics holiday push' },
      { label: 'Cross-Channel ROAS', val: '6.85x', desc: 'Noon + Google PMax' },
      { label: 'Average Order Value', val: 'SAR 399', desc: '+42% basket size increase' },
      { label: 'High-Intent Traffic', val: '64% Search', desc: 'Commercial search capture' }
    ]
  }
};

export default function ShopifyGrowth({ onOpenModal }) {
  const [activeStore, setActiveStore] = useState('homemaster');
  const store = STORES[activeStore];

  // Clean visual device architecture mapping per brand
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
          <div className="badge-pill badge-pill-cyan">Storefronts & Paid Traffic</div>
          <h2>Shopify Mastery & Direct-to-Consumer Performance</h2>
          <p>
            High-converting storefronts and paid acquisition built for GCC shoppers.
          </p>
        </div>

        <div className="shopify-showcase-grid">
          {/* Visual Device Storefront Mockup Column */}
          <div>
            <div className="store-tabs-nav">
              <button
                className={`store-tab-pill ${activeStore === 'homemaster' ? 'active' : ''}`}
                onClick={() => setActiveStore('homemaster')}
              >
                HomeMaster (Appliances)
              </button>
              <button
                className={`store-tab-pill ${activeStore === 'livora' ? 'active' : ''}`}
                onClick={() => setActiveStore('livora')}
              >
                LIVORA (Fashion & Style)
              </button>
              <button
                className={`store-tab-pill ${activeStore === 'creativethings' ? 'active' : ''}`}
                onClick={() => setActiveStore('creativethings')}
              >
                Creative Things (Studio Tech)
              </button>
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
              />
              <div className="zoom-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Inspect High-Resolution Architecture
              </div>
            </div>
          </div>

          {/* Capabilities Column */}
          <div className="shopify-features-col">
            <div className="badge-pill">High-Conversion UX</div>
            <h3>{store.name}</h3>
            <p style={{ color: 'var(--neon-cyan)', fontWeight: 700, marginBottom: '8px' }}>{store.category}</p>
            <p style={{ marginBottom: '24px' }}>{store.highlight}</p>

            <div className="capabilities-list">
              <div className="capability-card">
                <svg className="cap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <div className="cap-title">Arabic & English Localization</div>
                <div className="cap-desc">Native GCC cultural nuances, RTL layouts, and currency formatting for UAE & Saudi.</div>
              </div>

              <div className="capability-card">
                <svg className="cap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <div className="cap-title">Meta Ads (IG & FB)</div>
                <div className="cap-desc">Advantage+ catalog ads, UGC video reels, and high-frequency retargeting funnels.</div>
              </div>

              <div className="capability-card">
                <svg className="cap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <div className="cap-title">Google Performance Max</div>
                <div className="cap-desc">Capturing bottom-funnel commercial searches across Google Shopping, Search & YouTube.</div>
              </div>

              <div className="capability-card">
                <svg className="cap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                <div className="cap-title">TikTok Ads & Creator UGC</div>
                <div className="cap-desc">Viral hooks, lifestyle influencer collaborations, and impulse purchase acceleration.</div>
              </div>
            </div>

            {/* Dynamic Store-Specific Unique Metric Callout (Audit Finding #5) */}
            <div style={{ background: 'rgba(11, 17, 29, 0.95)', border: '1px solid rgba(0, 245, 155, 0.25)', padding: '18px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--neon-mint)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em' }}>
                  Audited Client Impact
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Documented Performance</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {store.uniqueMetrics.map((m, idx) => (
                  <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.70rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>{m.label}</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-pure)', margin: '2px 0' }}>{m.val}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--neon-cyan)' }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Real Verified Shopify Store Performance Banner (from Slide 8) */}
        <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '14px' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--neon-mint)', background: 'rgba(0, 245, 155, 0.08)', border: '1px solid rgba(0, 245, 155, 0.25)', padding: '4px 14px', borderRadius: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
            🛡️ Documented Client Cohort: LIVORA Apparel 90-Day Scaling Sprint
          </span>
        </div>
        <div className="shopify-metrics-banner" style={{ marginTop: '0' }}>
          <div className="banner-grid">
            <div className="banner-metric-box">
              <h4 className="gradient-text">$50,461.90</h4>
              <p>Monthly Sales (+104%)</p>
            </div>
            <div className="banner-metric-box">
              <h4 className="gradient-text">1,680</h4>
              <p>Total Orders (+122%)</p>
            </div>
            <div className="banner-metric-box">
              <h4 className="gradient-text">1.69%</h4>
              <p>Store Conversion Rate</p>
            </div>
            <div className="banner-metric-box">
              <h4 className="gradient-text">73,934</h4>
              <p>High-Intent Sessions (+97%)</p>
            </div>
            <div className="banner-metric-box">
              <h4 className="gradient-text">4.8 / 5</h4>
              <p>Shop Performance Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
