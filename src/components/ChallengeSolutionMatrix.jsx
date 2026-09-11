import React, { useState } from 'react';

export default function ChallengeSolutionMatrix({ onOpenModal }) {
  const [filterMode, setFilterMode] = useState('both'); // 'both', 'challenges', 'solutions'

  const matrixItems = [
    {
      id: 1,
      challenge: {
        title: 'Low Visibility & Organic Drop',
        desc: 'Listings buried on page 3+; high bounce rates and zero organic momentum.',
        tag: 'Bottleneck #01',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        )
      },
      solution: {
        title: 'Algorithmic Listing Optimisation',
        desc: 'Bilingual Arabic & English copy, keyword clustering, and high-converting A+ infographics.',
        deliverable: 'Rank Top 3 Organically & Boost CVR +35%',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
        )
      }
    },
    {
      id: 2,
      challenge: {
        title: 'Runaway Ad Spend & Poor ROAS',
        desc: 'High ACOS with bleeding budgets; wasted spend on non-converting generic keywords.',
        tag: 'Bottleneck #02',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )
      },
      solution: {
        title: 'Precision Performance Media',
        desc: 'Daily search-term harvesting, negative pruning, and full-funnel Sponsored Ads automation.',
        deliverable: 'Verified 14.4x ROAS & 6.9% Target ACOS',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        )
      }
    },
    {
      id: 3,
      challenge: {
        title: 'Catalog Errors & Stockouts',
        desc: 'Variation disconnects, lost Buy Box share, and painful FBA/FBN out-of-stock penalties.',
        tag: 'Bottleneck #03',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        )
      },
      solution: {
        title: 'Operational Precision Feeds',
        desc: 'Automated repricing, restock predictive modeling, and real-time inventory synchronization.',
        deliverable: '99.4% Buy Box Share & 0 Stockout Drift',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        )
      }
    },
    {
      id: 4,
      challenge: {
        title: 'Account Suspension Risk',
        desc: 'Policy warnings, IP infringement strikes, and unexpected account deactivations.',
        tag: 'Bottleneck #04',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        )
      },
      solution: {
        title: 'Proactive Health Protection',
        desc: 'Continuous compliance audits, executive case escalations, and verified POA defense.',
        deliverable: '100% Green Account Health Shield',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <polyline points="9 12 11 14 15 10"></polyline>
          </svg>
        )
      }
    }
  ];

  return (
    <section className="section section-matrix" id="challenges-solutions">
      <div className="container">
        <div className="section-header">
          <div className="deck-eyebrow-pill">
            <span className="deck-num">03</span>
            <span>CHALLENGES & SOLUTIONS</span>
          </div>
          <h2>The Marketplace Challenges Sellers Face</h2>
          <p>
            Intense competition and shifting rules stall brands without dedicated institutional operating systems.
          </p>

          <div className="matrix-filter-buttons">
            <button
              className={`matrix-filter-btn ${filterMode === 'both' ? 'active' : ''}`}
              onClick={() => setFilterMode('both')}
            >
              Side-by-Side Comparison
            </button>
            <button
              className={`matrix-filter-btn ${filterMode === 'challenges' ? 'active' : ''}`}
              onClick={() => setFilterMode('challenges')}
            >
              Common Challenges
            </button>
            <button
              className={`matrix-filter-btn ${filterMode === 'solutions' ? 'active' : ''}`}
              onClick={() => setFilterMode('solutions')}
            >
              How AZS Solves Them
            </button>
          </div>
        </div>

        <div className="matrix-grid">
          {matrixItems.map((item) => (
            <div key={item.id} className={`matrix-row-card mode-${filterMode}`}>
              {/* Challenge Column */}
              {(filterMode === 'both' || filterMode === 'challenges') && (
                <div className="matrix-col challenge-col">
                  <div className="matrix-col-header">
                    <span className="matrix-icon-badge challenge-icon">{item.challenge.icon}</span>
                    <span className="matrix-tag challenge-tag">{item.challenge.tag}</span>
                  </div>
                  <h3 className="matrix-col-title challenge-title">{item.challenge.title}</h3>
                  <p className="matrix-col-desc">{item.challenge.desc}</p>
                </div>
              )}

              {/* Arrow Connector (only in side-by-side mode) */}
              {filterMode === 'both' && (
                <div className="matrix-connector">
                  <div className="connector-line"></div>
                  <div className="connector-circle">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <div className="connector-line"></div>
                </div>
              )}

              {/* Solution Column */}
              {(filterMode === 'both' || filterMode === 'solutions') && (
                <div className="matrix-col solution-col">
                  <div className="matrix-col-header">
                    <span className="matrix-icon-badge solution-icon">{item.solution.icon}</span>
                    <span className="matrix-tag solution-tag">AZS SYSTEM</span>
                  </div>
                  <h3 className="matrix-col-title solution-title">{item.solution.title}</h3>
                  <p className="matrix-col-desc">{item.solution.desc}</p>
                  <div className="matrix-deliverable-chip">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--neon-mint)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item.solution.deliverable}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual Graphic Banner (Transforms text-heavy section with high-res pictures) */}
        <div className="matrix-visual-banner">
          <div
            className="matrix-visual-media"
            onClick={() => onOpenModal && onOpenModal('/assets/slide_3_matrix_graphic.png', 'Slide 3: Challenges vs Solutions Framework')}
            title="Click to view pitch deck system framework"
          >
            <img src="/assets/slide_3_matrix_graphic.png" alt="AZS Challenges vs Solutions Architecture" />
            <span className="mkt-media-overlay-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Deck Framework
            </span>
          </div>

          <div
            className="matrix-visual-media"
            onClick={() => onOpenModal && onOpenModal('/assets/ecommerce_growth_shield.jpg', 'Institutional Account Health & Scale Protection')}
            title="Click to view Account Protection & Growth Chart"
          >
            <img src="/assets/ecommerce_growth_shield.jpg" alt="Account Health Protection & Scaled Growth" />
            <span className="mkt-media-overlay-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Verified Shield (+520%)
            </span>
          </div>
        </div>

        {/* Deck Slide Footer Tagline */}
        <div className="deck-slide-footer">
          <div className="deck-footer-left">ONE TEAM. CLEAR SYSTEMS. SUSTAINABLE GROWTH.</div>
          <div className="deck-footer-right">
            <span className="deck-footer-bar"></span>
            <span>03 / 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}
