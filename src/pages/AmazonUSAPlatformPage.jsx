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
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      desc: 'Amazon DSP for programmatic display and video ads targeting in-market shoppers on and off Amazon.com.'
    },
    {
      title: 'Nationwide FBA Restock & Storage Hygiene',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      desc: 'Algorithmic inventory velocity forecasting across fulfillment centers to prevent aged storage surcharges.'
    },
    {
      title: 'Amazon Marketing Cloud (AMC) Attribution',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      desc: 'Attribution query models combining Sponsored Ads and DSP touchpoints to eliminate wasted ad spend.'
    },
    {
      title: 'Cross-Border USA Tax & Customs Gateway',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
      desc: 'US customs clearance, Section 321 de minimis compliance, and state sales tax facilitator reconciliation.'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Amazon.com USA"
        title="Amazon USA"
        highlight="Growth"
        subtitle="Full-service management for Amazon.com USA. PPC advertising, DSP remarketing, and nationwide FBA inventory management."
        breadcrumbs={[
          { label: 'Marketplace Management', link: '/marketplace-management' },
          { label: 'Amazon USA' }
        ]}
        primaryCtaText="Book USA Discovery Call"
        primaryCtaLink="/book-audit"
        secondaryCtaText="View Client Case Studies"
        secondaryCtaLink="/case-studies"
        metrics={[
          { val: '11.20x', label: 'Ad ROAS', sub: 'Sponsored Products' },
          { val: '8.9%', label: 'Average TACoS', sub: 'Controlled spend' },
          { val: '94.6%', label: 'Buy Box Win Rate', sub: 'Automated repricing' },
          { val: '$140M+', label: 'Managed GMV', sub: 'Audited portfolio' }
        ]}
      />

      {/* Strategic Operational Pillars */}
      <section className="section">
        <div className="container">
          <Link to="/marketplaces" className="back-overview-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Marketplaces Division</span>
          </Link>

          <div className="section-header" style={{ textAlign: 'left', marginTop: '10px', marginBottom: '18px' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 4.4vw, 1.45rem)', margin: 0 }}>How We Win on Amazon.com USA</h2>
          </div>

          <div className="marketplaces-systems-grid">
            {usaPillars.map((p, idx) => (
              <div key={idx} className="marketplaces-system-card">
                <div className="system-card-icon">
                  {p.icon}
                </div>
                <div className="system-card-body">
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-heading)', margin: '0 0 4px' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-body)', lineHeight: 1.4, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Verified USA Amazon Performance Showcase */}
          <div id="usa-proof" className="showcase-proof-card" style={{ marginTop: '40px', marginBottom: '40px' }}>
            <h2 className="showcase-proof-title">
              NuvoAura Beauty: <span className="gradient-text">11.20x ROAS on Amazon.com</span>
            </h2>
            <p className="showcase-proof-subtitle">
              Harvested exact-match PPC keywords, deployed DSP remarketing, and locked in an 8.90% target ACOS across nationwide FBA hubs.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 245, 155, 0.2)' }}
                onClick={() => onOpenModal && onOpenModal('/assets/usa_amazon_light_dashboard.svg', 'Amazon USA Performance Console — $48,900 Ad Sales (11.20x ROAS)')}
              >
                <img src="/assets/usa_amazon_light_dashboard.svg" alt="Amazon USA Performance Console" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ background: 'rgba(0, 245, 155, 0.05)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 245, 155, 0.2)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Attributed Ad Sales</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>$48,900</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>Direct Campaign Return</div>
                  </div>

                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Sponsored ROAS</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>11.20x</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>8.90% Target ACOS</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Ad Spend</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-heading)' }}>$4,360</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>Strict Budget Control</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Buy Box Win Rate</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-heading)' }}>94.6%</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>Automated Repricing</div>
                  </div>
                </div>

                <blockquote style={{
                  borderLeft: '3px solid var(--neon-mint)',
                  paddingLeft: '14px',
                  color: 'var(--text-heading)',
                  fontStyle: 'italic',
                  fontSize: '0.88rem',
                  lineHeight: 1.55,
                  marginBottom: '18px'
                }}>
                  "Scaled NuvoAura into top 3 organic ranking across 42 primary beauty keywords on Amazon.com while maintaining a sub-9% ACOS."
                </blockquote>

                <div className="subpage-cta-group">
                  <Link to="/book-audit" className="btn btn-primary" style={{ padding: '11px 20px', fontSize: '0.86rem' }}>
                    <span>Audit Your Amazon USA Potential ➔</span>
                  </Link>
                  <Link to="/case-studies/nuvoaura" className="btn btn-secondary" style={{ padding: '11px 20px', fontSize: '0.86rem' }}>
                    <span>Read NuvoAura Case Study ➔</span>
                  </Link>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <Link to="/programs-pricing" style={{ fontSize: '0.82rem', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none' }}>
                    View USA Marketplace Programs & Pricing ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
