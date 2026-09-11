import React from 'react';

export default function WhyTrustSection({ onOpenModal }) {
  const pillars = [
    {
      num: '01',
      title: 'Multi-Platform Expertise',
      desc: 'Proven success scaling Amazon, Noon, Meta, Google, and TikTok across KSA, USA, and UK.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    {
      num: '02',
      title: 'KSA, USA & UK Global Footprint',
      desc: 'Deep local presence in KSA (Saudi Arabia) coupled with institutional scale across the USA and UK.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Dedicated Senior Squad',
      desc: 'No revolving juniors or ticket delays. A senior ecommerce director, PPC lead, and logistics specialist.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Transparent Live Reporting',
      desc: 'Real net profitability, live unified dashboards, weekly TACoS audits, and zero vanity guesswork.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      )
    },
    {
      num: '05',
      title: 'Creative + Performance Unified',
      desc: 'Bilingual copywriting, 3D product renders, and ad algorithms built under one synchronized roof.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      num: '06',
      title: 'Built For Enterprise Value',
      desc: 'Protecting unit economics, Buy Box dominance, and building enduring long-term brand equity.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="section section-alt" id="why-trust">
      <div className="container">
        <div className="section-header">
          <div className="deck-eyebrow-pill">
            <span className="deck-num">10</span>
            <span>STRATEGIC ADVANTAGE</span>
          </div>
          <h2>Why Eight-Figure Brands Trust AZS Solutions</h2>
          <p>
            Marketplace operations across KSA, USA, and UK, built on institutional discipline.
          </p>
        </div>

        {/* Visual Picture Centerpiece (Breaks up text with Global GCC Orbital Globe) */}
        <div className="trust-visual-centerpiece">
          <div
            className="trust-media-wrap"
            onClick={() => onOpenModal && onOpenModal('/assets/global_gcc_network_globe.png', 'AZS Global & GCC Commerce Network')}
            title="Click to view full 4K orbital network globe"
          >
            <img src="/assets/global_gcc_network_globe.png" alt="AZS Global Commerce Footprint" />
            <span className="mkt-media-overlay-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              View Global Footprint
            </span>
          </div>

          <div>
            <div className="badge-pill badge-pill-cyan">Institutional Discipline</div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '8px', marginBottom: '10px', color: 'var(--text-pure)' }}>
              Certified Dominance Across KSA, USA & UK Corridors
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '16px' }}>
              We deploy battle-tested Playbooks developed across hundreds of multi-region catalogs in Saudi Arabia, the United States, and the United Kingdom, ensuring maximum capital efficiency.
            </p>

            <div className="verified-partner-badges">
              <span className="partner-badge-pill">🇸🇦 Amazon.sa & Noon KSA</span>
              <span className="partner-badge-pill">🇺🇸 Amazon.com USA Partner</span>
              <span className="partner-badge-pill">🇬🇧 Amazon.co.uk Prime</span>
              <span className="partner-badge-pill">🟢 Shopify Partner</span>
              <span className="partner-badge-pill">🔵 Meta Business Partner</span>
            </div>
          </div>
        </div>

        <div className="why-trust-layout">
          {/* 6 Pillars Grid */}
          <div className="pillars-grid-6">
            {pillars.map((p, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-card-header">
                  <span className="pillar-icon-badge">{p.icon}</span>
                  <span className="pillar-num">{p.num}</span>
                </div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Direct Executive Action Box */}
          <div className="direct-action-card">
            <div className="action-card-glow"></div>
            <div className="badge-pill badge-pill-cyan">Direct Executive Access</div>
            <h3>Let's Build What's Next, Together</h3>
            <p>
              Whether expanding your catalog into Saudi Arabia (KSA), scaling in the USA, or launching in the UK, our partners are ready to evaluate your growth trajectory.
            </p>

            <div className="direct-email-chip">
              <span className="email-icon">✉️</span>
              <a href="mailto:hello@azssolutions.com" className="email-link">
                hello@azssolutions.com
              </a>
              <span className="direct-tag">Priority</span>
            </div>

            <a href="#book-audit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Schedule Executive Strategy Call
            </a>
          </div>
        </div>

        {/* Deck Slide Footer Tagline */}
        <div className="deck-slide-footer" style={{ marginTop: '40px' }}>
          <div className="deck-footer-left">THANK YOU FOR BEING PART OF OUR JOURNEY | LET'S BUILD WHAT'S NEXT, TOGETHER.</div>
          <div className="deck-footer-right">
            <span className="deck-footer-bar"></span>
            <span>10 / 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}
