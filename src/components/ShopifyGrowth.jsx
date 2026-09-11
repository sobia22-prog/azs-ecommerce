import React, { useState } from 'react';

const STORES = {
  homemaster: {
    name: 'HomeMaster Appliances',
    category: 'Premium Home & Kitchen Gear',
    highlight: 'Bilingual Arabic & English experience, elevated product storytelling, 4.8/5 shop performance score.',
    stats: '$50,461.90 Monthly Sales (+104%) | 1,680 Orders'
  },
  livora: {
    name: 'LIVORA Lifestyle & Fashion',
    category: 'Modern Essentials & Timeless Apparel',
    highlight: 'Visual hero storytelling, frictionless mobile checkout, Meta Ads Instagram conversion funnel.',
    stats: '14.4x Blended ROAS | +122% Repeat Purchase'
  },
  creativethings: {
    name: 'Creative Things Tech',
    category: 'Creator Studios, Electronics & Gadgets',
    highlight: '3D lifestyle assets, Google Performance Max integration, lightning-fast GCC shipping badges.',
    stats: '73,934 High-Intent Sessions | 1.69% CVR'
  }
};

export default function ShopifyGrowth({ onOpenModal }) {
  const [activeStore, setActiveStore] = useState('homemaster');
  const store = STORES[activeStore];

  return (
    <section className="section section-alt" id="shopify-d2c">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill badge-pill-cyan">Storefronts & Paid Traffic</div>
          <h2>Shopify Mastery & Direct-to-Consumer Performance</h2>
          <p>
            Bespoke high-converting storefronts, bilingual Arabic & English customer journeys, and omnichannel paid acquisition across Meta, TikTok, and Google Ads.
          </p>
        </div>

        <div className="shopify-showcase-grid">
          {/* Device Mockup Showcase */}
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

            <div
              className="mockup-media-wrapper"
              onClick={() => onOpenModal('/assets/shopify_storefronts_mockup.png', 'Client Shopify Storefront Mockups')}
              style={{ cursor: 'pointer' }}
            >
              <img src="/assets/shopify_storefronts_mockup.png" alt="Shopify Storefronts Created by AZS Solutions" />
              <div className="zoom-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                View Full 3-Device Storefront
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

            <div style={{ background: 'rgba(0, 245, 155, 0.06)', border: '1px solid rgba(0, 245, 155, 0.2)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Verified Case Metrics</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--neon-mint)', marginTop: '4px' }}>
                {store.stats}
              </div>
            </div>
          </div>
        </div>

        {/* Real Verified Shopify Store Performance Banner (from Slide 8) */}
        <div className="shopify-metrics-banner">
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
