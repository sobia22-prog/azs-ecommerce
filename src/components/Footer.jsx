import React from 'react';
import { Link } from '../Router';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand-col">
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
            <a href="mailto:hello@azssolutions.com" className="footer-email-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>hello@azssolutions.com</span>
            </a>
            <div className="footer-hubs-strip">
              <span className="hub-tag">🇸🇦 Riyadh</span>
              <span className="hub-tag">🇦🇪 Dubai</span>
              <span className="hub-tag">🇬🇧 London</span>
              <span className="hub-tag">🇺🇸 New York</span>
            </div>
          </div>

          {/* Marketplaces Column */}
          <div>
            <div className="footer-title">Marketplaces</div>
            <ul className="footer-links">
              <li><Link to="/marketplace-management/amazon-ksa">Amazon KSA (Amazon.sa)</Link></li>
              <li><Link to="/marketplace-management/noon">Noon GCC (FBN Express)</Link></li>
              <li><Link to="/marketplace-management/trendyol">Trendyol GCC Expansion</Link></li>
              <li><Link to="/marketplace-management/amazon-usa">Amazon USA & DSP</Link></li>
              <li><Link to="/marketplace-management">All Marketplace Services ➔</Link></li>
            </ul>
          </div>

          {/* Shopify & DTC Column */}
          <div>
            <div className="footer-title">Shopify & DTC</div>
            <ul className="footer-links">
              <li><Link to="/shopify-dtc/store-setup">Store Setup & Architecture</Link></li>
              <li><Link to="/shopify-dtc/meta-ads">Meta & Paid Social Ads</Link></li>
              <li><Link to="/shopify-dtc/tiktok-ads">TikTok Ads & Creator UGC</Link></li>
              <li><Link to="/shopify-dtc/cro">Conversion Optimization (CRO)</Link></li>
              <li><Link to="/shopify-dtc">All Shopify Solutions ➔</Link></li>
            </ul>
          </div>

          {/* Company & Proof Column */}
          <div>
            <div className="footer-title">Company</div>
            <ul className="footer-links">
              <li><Link to="/case-studies">Verified Case Studies</Link></li>
              <li><Link to="/programs-pricing">Programs & Pricing</Link></li>
              <li><Link to="/#calculator">Interactive ROI Simulator</Link></li>
              <li><Link to="/blog">Blog & Playbooks</Link></li>
              <li><Link to="/book-audit">Book Discovery Call</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} AZS Solutions Ltd. All rights reserved.
          </div>
          <div className="footer-partner-badges">
            <span className="partner-status-dot"></span>
            <span>Accredited Partner: Amazon Ads · Noon Verified · Shopify Plus</span>
          </div>
          <div className="footer-legal-links">
            <Link to="/about">About</Link>
            <Link to="/case-studies">Proof</Link>
            <Link to="/book-audit">Free Audit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

