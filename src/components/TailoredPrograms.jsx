import React from 'react';

export default function TailoredPrograms() {
  const programs = [
    {
      title: 'Full-Service Management',
      badge: 'Turnkey Operations',
      num: '01',
      desc: 'Complete day-to-day catalog, content, and operations across our 3 core marketplaces: KSA, USA & UK, plus Shopify.',
      ideal: 'Established brands ($50K+/mo) wanting full operational takeover.',
      chips: [
        { icon: '⚡', text: 'Daily Catalog & Multi-Market Feed' },
        { icon: '🎯', text: 'KSA, US & UK PPC Ad Scaling' },
        { icon: '🛡️', text: '24/7 Account Health Defense' }
      ]
    },
    {
      title: 'Launch & Setup Projects',
      badge: '0-to-1 Sprint',
      num: '02',
      desc: 'Rapid onboarding sprint to get registered, verified, and ranking on Amazon KSA, Noon KSA, Amazon US, or Amazon UK.',
      ideal: 'Brands expanding into KSA, USA, or UK for the first time.',
      chips: [
        { icon: '🚀', text: 'Brand Registry & Marketplace Setup' },
        { icon: '✍️', text: 'Arabic & English Listing SEO' },
        { icon: '📦', text: 'FBA / FBN Initial Inbound Logistics' }
      ]
    },
    {
      title: 'Growth Retainers',
      badge: 'High Performance',
      num: '03',
      desc: 'Dedicated media buying across Amazon (KSA/US/UK), Noon, Meta, TikTok, and Google to lower ACOS and maximize GMV.',
      ideal: 'Brands aiming to scale from 3x to 10x+ ROAS across target corridors.',
      chips: [
        { icon: '📈', text: '14.4x Multi-Market Ad Optimization' },
        { icon: '🎬', text: 'Meta Advantage+ & TikTok UGC' },
        { icon: '📊', text: 'Weekly TACoS & Profit Audits' }
      ]
    },
    {
      title: 'Custom Partnerships',
      badge: 'Enterprise Scope',
      num: '04',
      desc: 'Tailored scopes for conglomerates scaling across KSA, USA, and UK with exclusive distribution support.',
      ideal: 'Enterprise manufacturers and multi-brand portfolios.',
      chips: [
        { icon: '🌐', text: 'KSA, US & UK Multi-Region 3PL' },
        { icon: '🔌', text: 'Custom Omnichannel ERP Syncing' },
        { icon: '🤝', text: 'Dedicated Senior Director Lead' }
      ]
    }
  ];

  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="section-header">
          <div className="deck-eyebrow-pill">
            <span className="deck-num">09</span>
            <span>ENGAGEMENT MODELS</span>
          </div>
          <h2>Tailored Programs for High-Yield Acceleration</h2>
          <p>
            Choose the operational partnership that aligns with your scale, channel mix, and GCC expansion timeline.
          </p>
        </div>

        <div className="programs-grid-4">
          {programs.map((prog, idx) => (
            <div className="mkt-card program-card-elevated" key={idx}>
              <div className="mkt-card-glow"></div>
              <div className="mkt-card-header">
                <span className="growth-badge">{prog.badge}</span>
                <span className="program-number-badge">{prog.num}</span>
              </div>
              <h3 className="mkt-card-title">{prog.title}</h3>
              <p className="mkt-card-desc">{prog.desc}</p>
              
              <div className="program-ideal-target">
                🎯 {prog.ideal}
              </div>

              {/* Sleek Feature Tags Grid */}
              <div className="mkt-feature-tags-grid" style={{ marginBottom: '16px' }}>
                {prog.chips.map((chip, i) => (
                  <div key={i} className="mkt-feature-tag-pill">
                    <span className="mkt-tag-icon">{chip.icon}</span>
                    <span>{chip.text}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <a href="#book-audit" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Explore Program Scope
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Deck Slide Footer Tagline */}
        <div className="deck-slide-footer" style={{ marginTop: '40px' }}>
          <div className="deck-footer-left">ONE ACCOUNTABLE TEAM | CROSS-CHANNEL EXECUTION | DATA-DRIVEN DECISIONS</div>
          <div className="deck-footer-right">
            <span className="deck-footer-bar"></span>
            <span>09 / 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}
