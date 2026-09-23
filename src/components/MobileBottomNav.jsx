import React, { useState } from 'react';
import { useRouter } from '../Router';

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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neon-mint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>Jump to Division & Section</span>
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
                  Marketplaces Division Hub
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/amazon')}>
                  Amazon Global & GCC
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/noon')}>
                  Noon KSA & UAE
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/trendyol')}>
                  Trendyol Corridor
                </button>
              </div>

              <div className="mobile-jump-section-group">
                <span className="mobile-jump-group-title">Division 2: Shopify & D2C</span>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/shopify')}>
                  Shopify & Paid Media Hub
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('shopify-d2c', true)}>
                  D2C Creative Engine
                </button>
              </div>

              <div className="mobile-jump-section-group">
                <span className="mobile-jump-group-title">Proof, ROI & Tools</span>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/case-studies')}>
                  Verified Case Studies
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('calculator', true)}>
                  6-Month ROI Simulator
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('/insights')}>
                  Strategic Playbooks
                </button>
                <button className="mobile-jump-item-btn" onClick={() => handleNav('faqs', true)}>
                  FAQs & Guarantees
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Mobile Bottom Navigation Dock */}
      <nav className="mobile-sticky-bottom-nav" aria-label="Mobile Navigation Shortcuts">
        {/* Shortcut 1: Home */}
        <button 
          className={`mobile-bottom-nav-item ${path === '/' && !jumpMenuOpen ? 'active' : ''}`}
          onClick={() => handleNav('/')}
          aria-label="Home"
          title="Home"
        >
          <svg className="mobile-nav-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>

        {/* Shortcut 2: Marketplaces */}
        <button 
          className={`mobile-bottom-nav-item ${path.includes('marketplace') || path.includes('amazon') || path.includes('noon') || path.includes('trendyol') ? 'active' : ''}`}
          onClick={() => handleNav('/marketplaces')}
          aria-label="Marketplaces Division"
          title="Marketplaces"
        >
          <svg className="mobile-nav-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </button>

        {/* Shortcut 3: Shopify D2C */}
        <button 
          className={`mobile-bottom-nav-item ${path === '/shopify' ? 'active' : ''}`}
          onClick={() => handleNav('/shopify')}
          aria-label="Shopify D2C Division"
          title="Shopify D2C"
        >
          <svg className="mobile-nav-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>

        {/* Shortcut 4: Proof / ROI */}
        <button 
          className={`mobile-bottom-nav-item ${path === '/case-studies' ? 'active' : ''}`}
          onClick={() => handleNav('/case-studies')}
          aria-label="Case Studies & Proof"
          title="Case Studies"
        >
          <svg className="mobile-nav-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </button>

        {/* Shortcut 5: Quick Jump Sheet Trigger */}
        <button 
          className={`mobile-bottom-nav-item ${jumpMenuOpen ? 'active' : ''}`}
          onClick={() => setJumpMenuOpen(!jumpMenuOpen)}
          aria-label="Open sections menu"
          title="Explore Sections"
        >
          <svg className="mobile-nav-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
          </svg>
        </button>
      </nav>
    </>
  );
}
