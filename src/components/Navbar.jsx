import React, { useState, useEffect, useRef } from 'react';
import { useRouter, Link } from '../Router';

export default function Navbar({ currency, onToggleCurrency }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const { path, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (target, isAnchor = false) => {
    setActiveDropdown(null);
    setMobileOpen(false);

    if (isAnchor) {
      if (path === '/') {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/#${target}`);
      }
    } else {
      navigate(target);
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="container nav-wrapper">
        {/* Brand Logo & Title */}
        <Link to="/" className="brand-logo-link" aria-label="AZS Solutions Home" onClick={() => setMobileOpen(false)}>
          <div className="brand-logo-frame">
            <img src="/assets/azs_logo.png" alt="AZS Solutions Logo" className="brand-logo-img" />
          </div>
          <div className="brand-text-col">
            <span className="brand-name">AZS SOLUTIONS</span>
            <span className="brand-sub">ECOMMERCE GROWTH</span>
          </div>
        </Link>

        {/* Clean Categorized Navigation with Two Divisions and Trendyol */}
        <nav aria-label="Primary Navigation">
          <ul className={`nav-menu ${mobileOpen ? 'mobile-visible' : ''}`}>
            {/* Mobile Drawer Currency Switcher (Top of Drawer) */}
            <li className="mobile-drawer-extra">
              <div className="mobile-drawer-currency-box">
                <span className="mobile-drawer-currency-lbl">Display Currency:</span>
                <div className="currency-segmented-toggle">
                  <button 
                    type="button"
                    className={`currency-pill-opt ${currency === 'USD' ? 'active' : ''}`}
                    onClick={() => { currency !== 'USD' && onToggleCurrency(); }}
                    aria-label="Display figures in USD"
                  >
                    USD
                  </button>
                  <button 
                    type="button"
                    className={`currency-pill-opt ${currency === 'GCC' ? 'active' : ''}`}
                    onClick={() => { currency !== 'GCC' && onToggleCurrency(); }}
                    aria-label="Display figures in SAR"
                  >
                    SAR
                  </button>
                </div>
              </div>
            </li>

            {/* 1. MARKETPLACE MANAGEMENT DROPDOWN */}
            <li 
              className={`nav-item dropdown-item-parent ${activeDropdown === 'marketplaces' ? 'open' : ''}`}
              onMouseEnter={() => setActiveDropdown('marketplaces')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-link dropdown-toggle-btn"
                onClick={() => setActiveDropdown(activeDropdown === 'marketplaces' ? null : 'marketplaces')}
                aria-expanded={activeDropdown === 'marketplaces'}
              >
                <span>Marketplace Management</span>
                <svg className="dropdown-caret" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <div className="nav-dropdown-menu" style={{ minWidth: '320px' }}>
                <Link 
                  to="/marketplace-management" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">📦</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Marketplaces Hub Overview</span>
                    <span className="dropdown-item-desc">Amazon, Noon & Trendyol unified ecosystem</span>
                  </div>
                </Link>

                <Link 
                  to="/marketplace-management/amazon-ksa" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🇸🇦</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Amazon KSA (Amazon.sa)</span>
                    <span className="dropdown-item-desc">Brand Registry, FBA Riyadh & Yellow Friday</span>
                  </div>
                </Link>

                <Link 
                  to="/marketplace-management/amazon-usa" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🇺🇸</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Amazon USA (Amazon.com)</span>
                    <span className="dropdown-item-desc">DSP display, FBA restock & Sponsored Ads</span>
                  </div>
                </Link>

                <Link 
                  to="/marketplace-management/noon" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🟡</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Noon KSA & UAE</span>
                    <span className="dropdown-item-desc">Seller Lab, FBN Express & Mahali scale</span>
                  </div>
                </Link>

                <Link 
                  to="/marketplace-management/trendyol" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🇹🇷</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Trendyol GCC Expansion</span>
                    <span className="dropdown-item-desc">Turkey-to-Gulf catalog sync & flash sales</span>
                  </div>
                </Link>

                <Link 
                  to="/marketplace-management/listing-optimization" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🔍</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Listing Optimization & SEO</span>
                    <span className="dropdown-item-desc">Bilingual Arabic/EN A+ Content & indexing</span>
                  </div>
                </Link>

                <Link 
                  to="/marketplace-management/ppc-advertising" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🎯</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">PPC & Retail Media Ads</span>
                    <span className="dropdown-item-desc">Sponsored Products, Brands, Video & DSP</span>
                  </div>
                </Link>

                <Link 
                  to="/marketplace-management/account-health" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🛡️</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Account Health & Defense</span>
                    <span className="dropdown-item-desc">Suspension defense & policy compliance</span>
                  </div>
                </Link>
              </div>
            </li>

            {/* 2. SHOPIFY & DTC DROPDOWN */}
            <li 
              className={`nav-item dropdown-item-parent ${activeDropdown === 'shopify' ? 'open' : ''}`}
              onMouseEnter={() => setActiveDropdown('shopify')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-link dropdown-toggle-btn"
                onClick={() => setActiveDropdown(activeDropdown === 'shopify' ? null : 'shopify')}
                aria-expanded={activeDropdown === 'shopify'}
              >
                <span>Shopify & DTC</span>
                <svg className="dropdown-caret" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <div className="nav-dropdown-menu" style={{ minWidth: '310px' }}>
                <Link 
                  to="/shopify-dtc" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🛍️</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Shopify Division Hub</span>
                    <span className="dropdown-item-desc">D2C performance marketing ecosystem</span>
                  </div>
                </Link>

                <Link 
                  to="/shopify-dtc/store-setup" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🏪</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Store Setup & Optimization</span>
                    <span className="dropdown-item-desc">Bilingual AR/EN theme & Tamara/Tabby BNPL</span>
                  </div>
                </Link>

                <Link 
                  to="/shopify-dtc/meta-ads" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🔵</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Meta Ads (IG & FB)</span>
                    <span className="dropdown-item-desc">Advantage+ catalog ads & UGC video reels</span>
                  </div>
                </Link>

                <Link 
                  to="/shopify-dtc/tiktok-ads" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🎵</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">TikTok Shop & Creator Ads</span>
                    <span className="dropdown-item-desc">Viral hooks & creator partnership scale</span>
                  </div>
                </Link>

                <Link 
                  to="/shopify-dtc/google-ads" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">🔴</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Google Performance Max</span>
                    <span className="dropdown-item-desc">Shopping & high-intent commercial search</span>
                  </div>
                </Link>

                <Link 
                  to="/shopify-dtc/cro" 
                  className="dropdown-subitem"
                  onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                >
                  <div className="dropdown-icon-box">⚡</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Conversion Rate Optimization</span>
                    <span className="dropdown-item-desc">Mobile checkout friction & AOV expansion</span>
                  </div>
                </Link>
              </div>
            </li>

            {/* 3. CASE STUDIES */}
            <li className="nav-item">
              <Link 
                to="/case-studies" 
                className="nav-link"
                onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
              >
                Case Studies
              </Link>
            </li>

            {/* 4. PROGRAMS & PRICING */}
            <li className="nav-item">
              <Link 
                to="/programs-pricing" 
                className="nav-link"
                onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
              >
                Programs & Pricing
              </Link>
            </li>

            {/* 5. BLOG */}
            <li className="nav-item">
              <Link 
                to="/blog" 
                className="nav-link"
                onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
              >
                Blog
              </Link>
            </li>

            {/* 6. ABOUT */}
            <li className="nav-item">
              <Link 
                to="/about" 
                className="nav-link"
                onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Actions: Currency Toggle + CTA Button */}
        <div className="nav-actions">
          {/* Dynamic Currency Switcher (USD Global vs SAR KSA) - Desktop View */}
          <div className="currency-segmented-toggle desktop-currency-toggle" title="Switch display currency: USD ($) or SAR (ر.س)">
            <button 
              type="button"
              className={`currency-pill-opt ${currency === 'USD' ? 'active' : ''}`}
              onClick={() => currency !== 'USD' && onToggleCurrency()}
              aria-label="Display figures in USD"
            >
              USD
            </button>
            <button 
              type="button"
              className={`currency-pill-opt ${currency === 'GCC' ? 'active' : ''}`}
              onClick={() => currency !== 'GCC' && onToggleCurrency()}
              aria-label="Display figures in SAR"
            >
              SAR
            </button>
          </div>

          <Link 
            to="/book-audit" 
            className="btn btn-primary nav-cta-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Book Audit"
          >
            <span className="desktop-cta-label">Book Discovery Call</span>
            <span className="mobile-cta-label">Book Audit</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          <button 
            className="mobile-toggle" 
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
