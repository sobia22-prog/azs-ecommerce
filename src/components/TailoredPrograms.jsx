import React from 'react';
import { useCurrency } from '../context/CurrencyContext';

export default function TailoredPrograms() {
  const { isSAR } = useCurrency();
  const isGCC = isSAR;

  const programs = [
    {
      title: 'Full-Service Management',
      badge: 'Turnkey Operations',
      num: '01',
      priceUSD: 'From $3,500 / mo',
      priceGCC: 'From SAR 13,000 / mo',
      priceNote: 'Base retainer + revenue-share tier',
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
      priceUSD: '$2,800 – $4,500',
      priceGCC: 'SAR 10,500 – SAR 17,000',
      priceNote: 'Fixed one-time 45-day turnkey sprint',
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
      priceUSD: 'From $2,200 / mo',
      priceGCC: 'From SAR 8,250 / mo',
      priceNote: 'PPC management + target ROAS fee',
      desc: 'Dedicated media buying across Amazon (KSA/US/UK), Noon, Trendyol, Meta, TikTok, and Google to lower ACOS and maximize GMV.',
      ideal: 'Brands aiming to scale from 3x to 10x+ ROAS across target corridors.',
      chips: [
        { icon: '📈', text: 'Multi-Market Ad Optimization & TACoS Defense' },
        { icon: '🎬', text: 'Meta Advantage+ & TikTok UGC' },
        { icon: '📊', text: 'Weekly TACoS & Profit Audits' }
      ]
    },
    {
      title: 'Custom Partnerships',
      badge: 'Enterprise Scope',
      num: '04',
      priceUSD: 'Custom from $6,500+ / mo',
      priceGCC: 'Custom from SAR 24,500+ / mo',
      priceNote: 'Dedicated squad & cross-border 3PL',
      desc: 'Tailored scopes for conglomerates scaling across KSA, UAE, Trendyol GCC, USA, and UK with exclusive distribution support.',
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
            Choose the operational partnership that aligns with your scale, channel mix, and GCC expansion timeline. Transparent indicative pricing to fast-track your qualification.
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
              
              {/* Indicative Starting Price Box (Audit Finding #8) */}
              <div style={{ background: 'rgba(0, 245, 155, 0.06)', border: '1px solid rgba(0, 245, 155, 0.25)', borderRadius: '10px', padding: '10px 14px', margin: '10px 0 14px' }}>
                <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Indicative Investment
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--neon-mint)', marginTop: '2px' }}>
                  {isGCC ? prog.priceGCC : prog.priceUSD}
                </div>
                <div style={{ fontSize: '0.70rem', color: 'var(--neon-cyan)', marginTop: '2px' }}>
                  {prog.priceNote}
                </div>
              </div>

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
                <a href="#book-audit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
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
