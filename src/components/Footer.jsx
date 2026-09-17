import React from 'react';
import { Link } from '../Router';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand-logo-link" aria-label="AZS Solutions Home">
              <div className="brand-logo-frame">
                <img src="/assets/azs_logo.png" alt="AZS Solutions Logo" className="brand-logo-img" />
              </div>
              <div className="brand-text-col">
                <span className="brand-name">AZS SOLUTIONS</span>
                <span className="brand-sub">ECOMMERCE GROWTH</span>
              </div>
            </Link>
            <p className="footer-brand-p">
              Your dedicated growth partner for e-commerce marketplace operations (Amazon, Noon, Trendyol), bespoke Shopify storefronts, and performance marketing across the GCC and internationally.
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--neon-mint)', fontWeight: 600 }}>
              ✉ hello@azssolutions.com
            </div>
          </div>

          <div>
            <div className="footer-title">Marketplace Management</div>
            <ul className="footer-links">
              <li><Link to="/marketplace-management">Marketplaces Overview</Link></li>
              <li><Link to="/marketplace-management/amazon-ksa">Amazon KSA (Amazon.sa)</Link></li>
              <li><Link to="/marketplace-management/amazon-usa">Amazon USA (Amazon.com & DSP)</Link></li>
              <li><Link to="/marketplace-management/noon">Noon GCC (FBN Express)</Link></li>
              <li><Link to="/marketplace-management/trendyol">Trendyol GCC Partner Hub</Link></li>
              <li><Link to="/marketplace-management/listing-optimization">Listing Optimization & A+</Link></li>
              <li><Link to="/marketplace-management/ppc-advertising">PPC & Paid Advertising</Link></li>
              <li><Link to="/marketplace-management/account-health">Account Health & Defense</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Shopify & DTC Division</div>
            <ul className="footer-links">
              <li><Link to="/shopify-dtc">Shopify & DTC Overview</Link></li>
              <li><Link to="/shopify-dtc/store-setup">Store Setup & RTL Architecture</Link></li>
              <li><Link to="/shopify-dtc/meta-ads">Meta Ads (Instagram & FB)</Link></li>
              <li><Link to="/shopify-dtc/tiktok-ads">TikTok Ads & Creator UGC</Link></li>
              <li><Link to="/shopify-dtc/google-ads">Google Ads & Performance Max</Link></li>
              <li><Link to="/shopify-dtc/cro">Conversion Rate Optimization (CRO)</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Agency & Resources</div>
            <ul className="footer-links">
              <li><Link to="/case-studies">Verified Case Studies & Proof</Link></li>
              <li><Link to="/programs-pricing">Programs & Transparent Pricing</Link></li>
              <li><Link to="/blog">Blog & Market Playbooks</Link></li>
              <li><Link to="/about">About AZS & Global Hubs</Link></li>
              <li><Link to="/calculator">Interactive ROI Simulator</Link></li>
              <li><Link to="/book-audit">Book Discovery Call & Audit</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Regional Hubs</div>
            <div className="footer-locations">
              <div className="loc-item">
                <span className="flag-icon">🇸🇦</span>
                <span>Riyadh, Kingdom of Saudi Arabia</span>
              </div>
              <div className="loc-item">
                <span className="flag-icon">🇦🇪</span>
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="loc-item">
                <span className="flag-icon">🇹🇷</span>
                <span>Istanbul, Turkey (Cross-Border Hub)</span>
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
            <Link to="/blog">Blog</Link>
            <Link to="/case-studies">Proof</Link>
            <Link to="/programs-pricing">Pricing</Link>
            <Link to="/about">About</Link>
            <Link to="/book-audit">Free Audit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

