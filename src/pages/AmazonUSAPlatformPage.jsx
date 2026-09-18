import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function AmazonUSAPlatformPage({ onOpenModal }) {
  useSEO({
    title: 'Amazon USA Seller Agency & FBA Restock Partner | AZS Solutions',
    description: 'Scale your brand across Amazon.com USA. Full-funnel Amazon DSP advertising, nationwide FBA restock velocity forecasting, and Buy Box defense for international sellers.',
    keywords: 'amazon USA seller agency, amazon FBA management agency, amazon PPC management USA, amazon DSP agency, amazon.com account management',
    ogTitle: 'Amazon USA Marketplace Management & DSP Advertising | AZS Solutions',
    ogDescription: 'Scale on Amazon.com USA with 11.20x ad ROAS, programmatic Amazon DSP, and nationwide FBA inventory governance.',
    canonicalPath: '/marketplace-management/amazon-usa'
  });

  const usaPillars = [
    {
      title: 'Programmatic Amazon DSP Advertising',
      icon: '🎯',
      desc: 'Exclusive access to Amazon Demand-Side Platform (DSP) for programmatic display, audio, and OTT/video ads targeting in-market shoppers on and off Amazon.com.'
    },
    {
      title: 'Nationwide FBA Restock & Storage Hygiene',
      icon: '📦',
      desc: 'Algorithmic inventory velocity forecasting across East Coast and West Coast fulfillment centers to prevent aged storage surcharges and capacity limit throttling.'
    },
    {
      title: 'Amazon Marketing Cloud (AMC) Custom Attribution',
      icon: '📊',
      desc: 'SQL-driven query models combining Sponsored Ads and DSP touchpoints to map multi-touch customer journeys and eliminate ad waste.'
    },
    {
      title: 'Cross-Border USA Tax & Customs Gateway',
      icon: '⚖️',
      desc: 'US customs clearance, Section 321 de minimis compliance, and state sales tax marketplace facilitator reconciliation for international brands.'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Enterprise Marketplace: Amazon.com USA"
        title="Amazon USA Seller Growth &"
        highlight="DSP Performance Engine"
        subtitle="The United States is the world’s most competitive ecommerce marketplace. We equip international and scaling brands with algorithmic PPC bidding, programmatic DSP display, and precision nationwide FBA supply chain management."
        breadcrumbs={[
          { label: 'Marketplace Management', link: '/marketplace-management' },
          { label: 'Amazon USA' }
        ]}
        primaryCtaText="Book USA Discovery Call"
        primaryCtaLink="/book-audit"
        secondaryCtaText="View Client Case Studies"
        secondaryCtaLink="/case-studies"
        metrics={[
          { val: '11.20x', label: 'Amazon.com ROAS', sub: 'Verified Sponsored Products return' },
          { val: '8.9%', label: 'Average TACoS', sub: 'Total advertising cost of sale' },
          { val: '94.6%', label: 'Buy Box Win Rate', sub: 'Automated margin-floor repricing' },
          { val: '$142.8M+', label: 'Active Managed GMV', sub: 'Audited US & global portfolio' }
        ]}
      />

      {/* Strategic Operational Pillars */}
      <section className="subpage-section">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">Operational Architecture</div>
            <h2>How We Win on Amazon.com USA</h2>
            <p>
              Moving from regional selling to US dominance requires institutional Amazon DSP media buying, continuous catalog indexing, and flawless logistics governance.
            </p>
          </div>

          <div className="platform-detail-grid">
            {usaPillars.map((p, idx) => (
              <div key={idx} className="platform-detail-card">
                <div className="platform-detail-icon">{p.icon}</div>
                <h3 className="platform-detail-title">{p.title}</h3>
                <p className="platform-detail-desc">{p.desc}</p>
                <ul className="platform-checklist">
                  <li className="platform-checklist-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Audited SLA Execution</span>
                  </li>
                  <li className="platform-checklist-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Direct Weekly Partner Standups</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Verified USA Amazon Performance Showcase */}
          <div id="usa-proof" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            marginTop: '60px',
            marginBottom: '40px'
          }}>
            <div className="badge-pill" style={{ marginBottom: '12px' }}>Verified USA Amazon Console</div>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-heading)', marginBottom: '10px' }}>
              NuvoAura Beauty & Wellness: <span className="gradient-text">11.20x ROAS on Amazon.com</span>
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: '780px', marginBottom: '30px' }}>
              How AZS harvested high-intent search terms into exact-match PPC campaigns, deployed Amazon DSP programmatic remarketing, and locked in an 8.90% target ACOS across nationwide FBA fulfillment hubs.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 245, 155, 0.2)' }}
                onClick={() => onOpenModal && onOpenModal('/assets/usa_amazon_light_dashboard.svg', 'Amazon USA Performance Console — $48,900 Ad Sales (11.20x ROAS)')}
              >
                <img src="/assets/usa_amazon_light_dashboard.svg" alt="Amazon USA Performance Console" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div className="zoom-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Click to Inspect Verified Proof
                </div>
              </div>

              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ background: 'rgba(0, 245, 155, 0.05)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 245, 155, 0.2)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Attributed Ad Sales</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>$48,900</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Direct Campaign Return</div>
                  </div>

                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Sponsored ROAS</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>11.20x</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>8.90% Target ACOS</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Ad Spend</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>$4,360</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Strict Budget Control</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Buy Box Win Rate</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>94.6%</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Automated Repricing</div>
                  </div>
                </div>

                <blockquote style={{
                  borderLeft: '3px solid var(--neon-mint)',
                  paddingLeft: '16px',
                  color: 'var(--text-heading)',
                  fontStyle: 'italic',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  "Scaled NuvoAura into the top 3 organic ranking across 42 primary beauty keywords on Amazon.com while maintaining a sub-9% ACOS."
                </blockquote>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link to="/book-audit" className="btn btn-primary">
                    <span>Audit Your Amazon USA Potential</span>
                  </Link>
                  <Link to="/case-studies/nuvoaura" className="btn btn-secondary">
                    <span>Read Full NuvoAura Case Study ➔</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Cross Link to Pricing & Case Studies */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/programs-pricing" className="btn btn-primary" style={{ marginRight: '14px' }}>
              Explore USA Program Pricing ➔
            </Link>
            <Link to="/case-studies/nuvoaura" className="btn btn-secondary">
              Review NuvoAura USA Case Study ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
