import React, { useState } from 'react';

export default function ChallengeSolutionMatrix({ onOpenModal }) {
  const [filterMode, setFilterMode] = useState('both'); // 'both', 'challenges', 'solutions'

  const matrixItems = [
    {
      id: 1,
      challenge: {
        title: 'Low Visibility & Organic Drop',
        desc: 'Listings buried on page 3+ with zero organic momentum.',
        tag: 'Bottleneck #01',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        )
      },
      solution: {
        title: 'Algorithmic Listing Optimisation',
        desc: 'Bilingual Arabic/EN copy, keyword clustering & A+ Content.',
        deliverable: 'Rank Top 3 Organically • +35% CVR Lift',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        desc: 'Bleeding ad budgets wasted on non-converting search terms.',
        tag: 'Bottleneck #02',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )
      },
      solution: {
        title: 'Precision Performance Media',
        desc: 'Daily term harvesting, negative pruning & automated bidding.',
        deliverable: 'Verified 8.4x - 14.4x ROAS • Sub-12% ACOS',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        desc: 'Buy Box loss and costly FBA/FBN out-of-stock penalties.',
        tag: 'Bottleneck #03',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        )
      },
      solution: {
        title: 'Operational Precision Feeds',
        desc: 'Automated repricing & 30/60/90-day predictive restock sync.',
        deliverable: '99.4% Buy Box Share • Zero Stockout Drift',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        desc: 'Policy warnings, IP strikes and account deactivation threats.',
        tag: 'Bottleneck #04',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        )
      },
      solution: {
        title: 'Proactive Health Defense',
        desc: 'Continuous compliance audits & verified Plan-of-Action defense.',
        deliverable: '100% Green Account Health Shield',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <h2>Problems We Solve</h2>
          <p>
            Proven solutions that fix roadblocks and grow your revenue.
          </p>

          <div className="matrix-filter-wrapper">
            <div className="matrix-filter-buttons">
              <button
                className={`matrix-filter-btn ${filterMode === 'both' ? 'active' : ''}`}
                onClick={() => setFilterMode('both')}
              >
                <span className="matrix-tab-short">All</span>
                <span className="matrix-tab-full">All Transformations</span>
              </button>
              <button
                className={`matrix-filter-btn ${filterMode === 'challenges' ? 'active' : ''}`}
                onClick={() => setFilterMode('challenges')}
              >
                <span className="matrix-tab-short">Bottlenecks</span>
                <span className="matrix-tab-full">Bottlenecks</span>
              </button>
              <button
                className={`matrix-filter-btn ${filterMode === 'solutions' ? 'active' : ''}`}
                onClick={() => setFilterMode('solutions')}
              >
                <span className="matrix-tab-short">Solutions</span>
                <span className="matrix-tab-full">AZS Solutions</span>
              </button>
            </div>
          </div>
        </div>

        <div className="matrix-grid">
          {matrixItems.map((item) => (
            <div key={item.id} className={`matrix-row-card mode-${filterMode}`}>
              {/* Challenge Column / Card */}
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

              {/* Arrow Connector (Desktop horizontal, Mobile vertical badge) */}
              {filterMode === 'both' && (
                <div className="matrix-connector">
                  <div className="connector-line"></div>
                  <div className="connector-circle" title="Transformed by AZS Systems">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <div className="connector-line"></div>
                </div>
              )}

              {/* Solution Column / Card */}
              {(filterMode === 'both' || filterMode === 'solutions') && (
                <div className="matrix-col solution-col">
                  <div className="matrix-col-header">
                    <span className="matrix-icon-badge solution-icon">{item.solution.icon}</span>
                    <span className="matrix-tag solution-tag">AZS SYSTEM</span>
                  </div>
                  <h3 className="matrix-col-title solution-title">{item.solution.title}</h3>
                  <p className="matrix-col-desc">{item.solution.desc}</p>
                  <div className="matrix-deliverable-chip">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--neon-mint)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item.solution.deliverable}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

