import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#" className="brand-logo-link" aria-label="AZS Solutions Home">
              <div className="brand-logo-frame">
                <img src="/assets/azs_logo.png" alt="AZS Solutions Logo" className="brand-logo-img" />
              </div>
              <div className="brand-text-col">
                <span className="brand-name">AZS SOLUTIONS</span>
                <span className="brand-sub">ECOMMERCE GROWTH</span>
              </div>
            </a>
            <p className="footer-brand-p">
              Your dedicated growth partner for e-commerce marketplace operations, bespoke storefronts, and performance marketing across the GCC and internationally.
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--neon-mint)', fontWeight: 600 }}>
              ✉ hello@azssolutions.com
            </div>
          </div>

          <div>
            <div className="footer-title">Marketplaces</div>
            <ul className="footer-links">
              <li><a href="#marketplaces">KSA Marketplace (Amazon.sa & Noon)</a></li>
              <li><a href="#marketplaces">USA Marketplace (Amazon.com)</a></li>
              <li><a href="#marketplaces">UK Marketplace (Amazon.co.uk)</a></li>
              <li><a href="#marketplaces">Listing SEO & A+ Content</a></li>
              <li><a href="#marketplaces">Account Health Defense</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Shopify & Ads</div>
            <ul className="footer-links">
              <li><a href="#shopify-d2c">Bespoke Storefronts</a></li>
              <li><a href="#shopify-d2c">Meta Ads (IG & FB)</a></li>
              <li><a href="#shopify-d2c">TikTok Shop & Ads</a></li>
              <li><a href="#shopify-d2c">Google Performance Max</a></li>
              <li><a href="#shopify-d2c">Arabic Localization</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Regional Hubs</div>
            <div className="footer-locations">
              <div className="loc-item">
                <span className="flag-icon">🇦🇪</span>
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="loc-item">
                <span className="flag-icon">🇸🇦</span>
                <span>Riyadh, Kingdom of Saudi Arabia</span>
              </div>
              <div className="loc-item">
                <span className="flag-icon">🇬🇧</span>
                <span>London, United Kingdom</span>
              </div>
              <div className="loc-item">
                <span className="flag-icon">🇺🇸</span>
                <span>New York, United States</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 AZS Solutions. All rights reserved. One Team. Clear Systems. Sustainable Growth.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Client Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
