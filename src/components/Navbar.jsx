import React, { useState, useEffect, useRef } from 'react';

export default function Navbar({ currency, onToggleCurrency }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

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

  const handleLinkClick = (targetId) => {
    setActiveDropdown(null);
    setMobileOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="container nav-wrapper">
        {/* Brand Logo & Title with Generous Padding */}
        <a href="#" className="brand-logo-link" aria-label="AZS Solutions Home">
          <div className="brand-logo-frame">
            <img src="/assets/azs_logo.png" alt="AZS Solutions Logo" className="brand-logo-img" />
          </div>
          <div className="brand-text-col">
            <span className="brand-name">AZS SOLUTIONS</span>
            <span className="brand-sub">ECOMMERCE GROWTH</span>
          </div>
        </a>

        {/* Clean Categorized Navigation with Elegant Dropdowns */}
        <nav aria-label="Primary Navigation">
          <ul className={`nav-menu ${mobileOpen ? 'mobile-visible' : ''}`}>
            {/* 1. SOLUTIONS DROPDOWN */}
            <li 
              className={`nav-item dropdown-item-parent ${activeDropdown === 'solutions' ? 'open' : ''}`}
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-link dropdown-toggle-btn"
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>Solutions</span>
                <svg className="dropdown-caret" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <div className="nav-dropdown-menu">
                <a 
                  href="#marketplaces" 
                  className="dropdown-subitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('marketplaces'); }}
                >
                  <div className="dropdown-icon-box">📦</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Marketplaces (KSA, USA, UK)</span>
                    <span className="dropdown-item-desc">Amazon.sa, Noon KSA, Amazon US & Amazon UK</span>
                  </div>
                </a>

                <a 
                  href="#shopify-d2c" 
                  className="dropdown-subitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('shopify-d2c'); }}
                >
                  <div className="dropdown-icon-box">🛍️</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Shopify & Paid Media</span>
                    <span className="dropdown-item-desc">Custom storefronts, Meta, TikTok & Google Ads</span>
                  </div>
                </a>

                <a 
                  href="#service-coverage" 
                  className="dropdown-subitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('service-coverage'); }}
                >
                  <div className="dropdown-icon-box">⚙️</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">What We Manage</span>
                    <span className="dropdown-item-desc">6-Pillar practical end-to-end service stack</span>
                  </div>
                </a>

                <a 
                  href="#challenges-solutions" 
                  className="dropdown-subitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('challenges-solutions'); }}
                >
                  <div className="dropdown-icon-box">🛡️</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Challenges & Solutions</span>
                    <span className="dropdown-item-desc">Common seller friction vs. AZS systems</span>
                  </div>
                </a>
              </div>
            </li>

            {/* 2. PROOF & METRICS DROPDOWN */}
            <li 
              className={`nav-item dropdown-item-parent ${activeDropdown === 'proof' ? 'open' : ''}`}
              onMouseEnter={() => setActiveDropdown('proof')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-link dropdown-toggle-btn"
                onClick={() => setActiveDropdown(activeDropdown === 'proof' ? null : 'proof')}
                aria-expanded={activeDropdown === 'proof'}
              >
                <span>Proof & ROI</span>
                <svg className="dropdown-caret" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <div className="nav-dropdown-menu">
                <a 
                  href="#case-studies" 
                  className="dropdown-subitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('case-studies'); }}
                >
                  <div className="dropdown-icon-box">📊</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Verified Case Studies</span>
                    <span className="dropdown-item-desc">SAR 183K Amazon sales, 14.4x ROAS, HomeMaster</span>
                  </div>
                </a>

                <a 
                  href="#calculator" 
                  className="dropdown-subitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('calculator'); }}
                >
                  <div className="dropdown-icon-box">🧮</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">ROI Growth Simulator</span>
                    <span className="dropdown-item-desc">Interactive 6-month GMV & ROAS projection tool</span>
                  </div>
                </a>
              </div>
            </li>

            {/* 3. METHODOLOGY & PROGRAMS DROPDOWN */}
            <li 
              className={`nav-item dropdown-item-parent ${activeDropdown === 'methodology' ? 'open' : ''}`}
              onMouseEnter={() => setActiveDropdown('methodology')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-link dropdown-toggle-btn"
                onClick={() => setActiveDropdown(activeDropdown === 'methodology' ? null : 'methodology')}
                aria-expanded={activeDropdown === 'methodology'}
              >
                <span>Programs</span>
                <svg className="dropdown-caret" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <div className="nav-dropdown-menu">
                <a 
                  href="#programs" 
                  className="dropdown-subitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('programs'); }}
                >
                  <div className="dropdown-icon-box">🚀</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Tailored Programs</span>
                    <span className="dropdown-item-desc">Full-Service, Launch, Retainers, & Custom</span>
                  </div>
                </a>

                <a 
                  href="#process" 
                  className="dropdown-subitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('process'); }}
                >
                  <div className="dropdown-icon-box">🔄</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">A-to-Z 5-Stage Process</span>
                    <span className="dropdown-item-desc">Discover ➔ Setup ➔ Launch ➔ Optimize ➔ Scale</span>
                  </div>
                </a>

                <a 
                  href="#why-trust" 
                  className="dropdown-subitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('why-trust'); }}
                >
                  <div className="dropdown-icon-box">💎</div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Strategic Advantage</span>
                    <span className="dropdown-item-desc">6 Core institutional pillars eight-figure brands trust</span>
                  </div>
                </a>
              </div>
            </li>

            {/* 4. FAQS LINK */}
            <li className="nav-item">
              <a 
                href="#faqs" 
                className="nav-link"
                onClick={(e) => { e.preventDefault(); handleLinkClick('faqs'); }}
              >
                FAQs
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Actions: Currency Toggle + CTA Button */}
        <div className="nav-actions">
          {/* Dynamic Currency Switcher (USD Global vs SAR KSA) */}
          <div className="currency-segmented-toggle" title="Switch display currency: USD ($) or SAR (ر.س)">
            <button 
              type="button"
              className={`currency-pill-opt ${currency === 'USD' ? 'active' : ''}`}
              onClick={() => currency !== 'USD' && onToggleCurrency()}
              aria-label="Display figures in USD"
            >
              🌐 USD
            </button>
            <button 
              type="button"
              className={`currency-pill-opt ${currency === 'GCC' ? 'active' : ''}`}
              onClick={() => currency !== 'GCC' && onToggleCurrency()}
              aria-label="Display figures in SAR"
            >
              🇸🇦 SAR
            </button>
          </div>

          <button 
            onClick={() => handleLinkClick('book-audit')} 
            className="btn btn-primary nav-cta-btn"
          >
            <span>Book Discovery Call</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <button 
            className="mobile-toggle" 
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
