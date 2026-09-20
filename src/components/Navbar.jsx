import React, { useState, useEffect, useRef } from 'react';
import { useRouter, Link } from '../Router';
import { useCurrency } from '../context/CurrencyContext';

export default function Navbar() {
  const { currency, setCurrency, isSAR } = useCurrency();
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [path]);

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
            {/* Mobile Drawer Currency Switcher (Top of Drawer) - Only in mobile view */}
            {mobileOpen && (
              <li className="mobile-drawer-extra">
                <div className="mobile-drawer-currency-box">
                  <span className="mobile-drawer-currency-lbl">Display Currency:</span>
                  <div className="currency-segmented-toggle">
                    <button 
                      type="button"
                      className={`currency-pill-opt ${!isSAR ? 'active' : ''}`}
                      onClick={() => setCurrency('USD')}
                      aria-label="Display figures in USD"
                    >
                      USD
                    </button>
                    <button 
                      type="button"
                      className={`currency-pill-opt ${isSAR ? 'active' : ''}`}
                      onClick={() => setCurrency('SAR')}
                      aria-label="Display figures in SAR"
                    >
                      SAR
                    </button>
                  </div>
                </div>
              </li>
            )}

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

              <div className="nav-dropdown-menu mega-dropdown-marketplaces">
                <div className="mega-dropdown-grid">
                  {/* Column 1: Core Platforms */}
                  <div className="mega-dropdown-col">
                    <div className="mega-col-heading">Core Marketplaces</div>
                    
                    <Link 
                      to="/marketplace-management/amazon-ksa" 
                      className="dropdown-subitem"
                      onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                    >
                      <div className="dropdown-icon-box">🇸🇦</div>
                      <div className="dropdown-item-text">
                        <span className="dropdown-item-title">Amazon KSA (Amazon.sa)</span>
                        <span className="dropdown-item-desc">Brand Registry, FBA Riyadh & Buy Box</span>
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
                        <span className="dropdown-item-desc">DSP display, AMC attribution & FBA</span>
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
                        <span className="dropdown-item-desc">Seller Lab, FBN Express & Mahali</span>
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
                        <span className="dropdown-item-desc">Turkey-to-Gulf catalog sync & sales</span>
                      </div>
                    </Link>
                  </div>

                  {/* Column 2: Operations & Systems */}
                  <div className="mega-dropdown-col">
                    <div className="mega-col-heading">Operations & PPC</div>

                    <Link 
                      to="/marketplace-management/listing-optimization" 
                      className="dropdown-subitem"
                      onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                    >
                      <div className="dropdown-icon-box">🔍</div>
                      <div className="dropdown-item-text">
                        <span className="dropdown-item-title">Listing Optimization & SEO</span>
                        <span className="dropdown-item-desc">Bilingual Arabic/EN A+ Content</span>
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
                        <span className="dropdown-item-desc">Sponsored Products, Brands & DSP</span>
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
                        <span className="dropdown-item-desc">Suspension defense & compliance</span>
                      </div>
                    </Link>

                    <Link 
                      to="/case-studies" 
                      className="dropdown-subitem dropdown-highlight-subitem"
                      onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                    >
                      <div className="dropdown-icon-box">📈</div>
                      <div className="dropdown-item-text">
                        <span className="dropdown-item-title">Verified Case Studies</span>
                        <span className="dropdown-item-desc">Inspect documented 14.43x ROAS</span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="mega-dropdown-footer">
                  <Link 
                    to="/marketplace-management" 
                    className="mega-footer-link"
                    onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                  >
                    <span>Explore Marketplaces Division Overview</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
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

              <div className="nav-dropdown-menu mega-dropdown-shopify">
                <div className="mega-dropdown-grid">
                  {/* Column 1: Store & CRO */}
                  <div className="mega-dropdown-col">
                    <div className="mega-col-heading">Store Architecture</div>

                    <Link 
                      to="/shopify-dtc/store-setup" 
                      className="dropdown-subitem"
                      onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                    >
                      <div className="dropdown-icon-box">🏪</div>
                      <div className="dropdown-item-text">
                        <span className="dropdown-item-title">Store Setup & RTL</span>
                        <span className="dropdown-item-desc">Arabic UI theme & Tamara/Tabby BNPL</span>
                      </div>
                    </Link>

                    <Link 
                      to="/shopify-dtc/cro" 
                      className="dropdown-subitem"
                      onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                    >
                      <div className="dropdown-icon-box">⚡</div>
                      <div className="dropdown-item-text">
                        <span className="dropdown-item-title">Conversion Optimization</span>
                        <span className="dropdown-item-desc">Frictionless checkout & AOV lift</span>
                      </div>
                    </Link>

                    <Link 
                      to="/case-studies/livora" 
                      className="dropdown-subitem dropdown-highlight-subitem"
                      onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                    >
                      <div className="dropdown-icon-box">🛍️</div>
                      <div className="dropdown-item-text">
                        <span className="dropdown-item-title">LIVORA DTC Case Study</span>
                        <span className="dropdown-item-desc">$50.4K/mo verified revenue surge</span>
                      </div>
                    </Link>
                  </div>

                  {/* Column 2: Paid Acquisition */}
                  <div className="mega-dropdown-col">
                    <div className="mega-col-heading">Paid Acquisition</div>

                    <Link 
                      to="/shopify-dtc/meta-ads" 
                      className="dropdown-subitem"
                      onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                    >
                      <div className="dropdown-icon-box">🔵</div>
                      <div className="dropdown-item-text">
                        <span className="dropdown-item-title">Meta Ads (IG & FB)</span>
                        <span className="dropdown-item-desc">Advantage+ catalog & UGC reels</span>
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
                        <span className="dropdown-item-desc">High-intent Spark ads & UGC creators</span>
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
                        <span className="dropdown-item-desc">Shopping & high-intent search ads</span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="mega-dropdown-footer">
                  <Link 
                    to="/shopify-dtc" 
                    className="mega-footer-link"
                    onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                  >
                    <span>Explore All Shopify & DTC Solutions</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
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

            {/* Mobile Drawer Bottom CTAs - Only in mobile view */}
            {mobileOpen && (
              <li className="mobile-drawer-bottom-cta">
                <Link 
                  to="/book-audit" 
                  className="btn btn-primary mobile-drawer-audit-btn"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>⚡ Claim Free 360° Growth Audit</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <div className="mobile-drawer-footer-links">
                  <Link to="/admin/login" onClick={() => setMobileOpen(false)} className="mobile-drawer-link-sub">
                    🔐 Super Admin Console
                  </Link>
                  <a href="mailto:hello@azssolutions.com" className="mobile-drawer-link-sub">
                    ✉️ hello@azssolutions.com
                  </a>
                </div>
              </li>
            )}
          </ul>
        </nav>

        {/* Right Actions: Currency Toggle + CTA Button */}
        <div className="nav-actions">
          {/* Dynamic Currency Switcher (USD Global vs SAR KSA) - Desktop View */}
          <div className="currency-segmented-toggle desktop-currency-toggle" title="Switch display currency: USD ($) or SAR (ر.س)">
            <button 
              type="button"
              className={`currency-pill-opt ${!isSAR ? 'active' : ''}`}
              onClick={() => setCurrency('USD')}
              aria-label="Display figures in USD"
            >
              USD
            </button>
            <button 
              type="button"
              className={`currency-pill-opt ${isSAR ? 'active' : ''}`}
              onClick={() => setCurrency('SAR')}
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
            className={`mobile-toggle ${mobileOpen ? 'is-active' : ''}`}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
