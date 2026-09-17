import React, { useState } from 'react';
import { useRouter, Link } from '../Router';

export default function MobileBottomNav() {
  const { path, navigate } = useRouter();
  const [jumpMenuOpen, setJumpMenuOpen] = useState(false);

  const handleNav = (target, isAnchor = false) => {
    setJumpMenuOpen(false);
    if (isAnchor) {
      if (path === '/') {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        navigate(`/#${target}`);
      }
    } else {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Quick Jump Drawer Modal for Mobile */}
      {jumpMenuOpen && (
        <div className="mobile-jump-backdrop" onClick={() => setJumpMenuOpen(false)}>
          <div className="mobile-jump-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-jump-sheet-header">
              <div className="mobile-jump-sheet-title">
                <span>⚡</span> Jump to Division & Section
              </div>
              <button 
                className="mobile-jump-close-btn"
                onClick={() => setJumpMenuOpen(false)}
                aria-label="Close jump menu"
              >
                ✕
              </button>
            </div>

            <div className="mobile-jump-links-grid">
              <div className="mobile-jump-section-group">
                <span className="mobile-jump-group-title">Division 1: Marketplaces</span>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/marketplaces')}>
                  📦 Marketplaces Division Hub
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/amazon')}>
                  🅰️ Amazon Global & GCC
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/noon')}>
                  🟡 Noon KSA & UAE
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/trendyol')}>
                  🇹🇷 Trendyol Corridor
                </button>
              </div>

              <div className="mobile-jump-section-group">
                <span className="mobile-jump-group-title">Division 2: Shopify & D2C</span>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/shopify')}>
                  🛍️ Shopify & Paid Media Hub
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('shopify-d2c', true)}>
                  📱 D2C Creative Engine
                </button>
              </div>

              <div className="mobile-jump-section-group">
                <span className="mobile-jump-group-title">Proof, ROI & Tools</span>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/case-studies')}>
                  📊 Verified Case Studies
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('calculator', true)}>
                  🧮 6-Month ROI Simulator
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/insights')}>
                  💡 Strategic Playbooks
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('faqs', true)}>
                  ❓ FAQs & Guarantees
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Mobile Bottom Navigation Dock */}
      <nav className="mobile-sticky-bottom-nav" aria-label="Mobile Navigation Shortcuts">
        {/* Shortcut 1: Marketplaces */}
        <button 
          className={`mobile-bottom-nav-item ${path.includes('marketplace') || path.includes('amazon') || path.includes('noon') || path.includes('trendyol') ? 'active' : ''}`}
          onClick={() => handleNav('/marketplaces')}
        >
          <span className="mobile-nav-icon">📦</span>
          <span className="mobile-nav-label">Marketplaces</span>
        </button>

        {/* Shortcut 2: Shopify D2C */}
        <button 
          className={`mobile-bottom-nav-item ${path === '/shopify' ? 'active' : ''}`}
          onClick={() => handleNav('/shopify')}
        >
          <span className="mobile-nav-icon">🛍️</span>
          <span className="mobile-nav-label">Shopify D2C</span>
        </button>

        {/* Shortcut 3: Proof / ROI */}
        <button 
          className={`mobile-bottom-nav-item ${path === '/case-studies' ? 'active' : ''}`}
          onClick={() => handleNav('/case-studies')}
        >
          <span className="mobile-nav-icon">📊</span>
          <span className="mobile-nav-label">Proof & ROI</span>
        </button>

        {/* Shortcut 4: Quick Jump Sheet Trigger */}
        <button 
          className={`mobile-bottom-nav-item ${jumpMenuOpen ? 'active' : ''}`}
          onClick={() => setJumpMenuOpen(!jumpMenuOpen)}
          aria-label="Open jump to division menu"
        >
          <span className="mobile-nav-icon">⚡</span>
          <span className="mobile-nav-label">Jump</span>
        </button>

        {/* Shortcut 5: High-Converting Audit CTA */}
        <Link 
          to="/book-audit" 
          className="mobile-bottom-audit-btn"
          aria-label="Book Discovery Call"
        >
          <span className="audit-btn-text">Audit</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </nav>
    </>
  );
}
