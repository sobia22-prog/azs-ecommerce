import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function AboutPage() {
  useSEO({
    title: 'About AZS Solutions | Regional Hubs in Riyadh, Dubai, London & NYC',
    description: 'Learn about AZS Solutions, our leadership team, governance principles, and regional operational hubs across Riyadh, Dubai, London, New York, and Istanbul.',
    keywords: 'about AZS Solutions, ecommerce agency Riyadh, Amazon agency Dubai, Mohammad Hassan ecommerce, global marketplace operations partner',
    ogTitle: 'About AZS Solutions | Institutional Ecommerce Growth Partner',
    ogDescription: 'Bridging enterprise brands across GCC, US, and European ecommerce channels with localized logistics, algorithmic advertising, and Buy Box defense.',
    canonicalPath: '/about'
  });

  const hubs = [
    {
      city: 'Riyadh, Saudi Arabia',
      role: 'GCC Flagship Operations Hub',
      code: 'KSA',
      desc: 'Local Saudi account management, ZATCA e-invoicing compliance, FBA Riyadh warehouse logistics, and Arabic native listing harvesting.'
    },
    {
      city: 'Dubai, United Arab Emirates',
      role: 'MENA Performance Media Center',
      code: 'UAE',
      desc: 'Paid media acquisition desk covering Meta Ads, TikTok Shop creator partnerships, Noon UAE Seller Lab, and cross-border currency clearing.'
    },
    {
      city: 'London, United Kingdom',
      role: 'European Gateway & VAT Desk',
      code: 'UK',
      desc: 'Amazon UK Prime operations, HMRC VAT management, cross-border customs brokerage, and Western European marketplace expansion.'
    },
    {
      city: 'New York, United States',
      role: 'US Marketplace & DSP Engine',
      code: 'USA',
      desc: 'Amazon.com nationwide FBA restock governance, Amazon DSP programmatic display desks, and multi-channel Shopify D2C scale.'
    },
    {
      city: 'Istanbul, Turkey',
      role: 'Trendyol Cross-Border Gateway',
      code: 'TUR',
      desc: 'Direct air-express fulfillment routing, Turkish manufacturer catalog translation, and high-growth Gulf export corridor operations.'
    }
  ];

  const values = [
    {
      title: 'Audited Institutional Data',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      desc: 'We never present unqualified marketing claims. Every figure, ROAS multiplier, and GMV benchmark is substantiated by verified partner data.'
    },
    {
      title: 'TACoS-First Margin Governance',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      desc: 'Scaling revenue without protecting net contribution profit is failure. We calibrate ad budgets to maximize gross dollar margin.'
    },
    {
      title: 'Native Cultural Localization',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      desc: 'No automated machine translations. We harvest native vernacular search terms tailored to high-spending Gulf consumers.'
    },
    {
      title: 'Senior Executive Access',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      desc: 'You deal directly with senior growth practitioners, not junior account coordinators. Transparent weekly standups and direct communication.'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="About AZS Solutions"
        title="Architecting Ecommerce Alpha"
        highlight="Across Global Corridors"
        subtitle="AZS Solutions is an institutional ecommerce growth partner operating across Saudi Arabia, UAE, the United States, United Kingdom, and Turkey. We bridge global manufacturers and D2C brands into multi-million dollar marketplace dominance."
        breadcrumbs={[
          { label: 'About' }
        ]}
        primaryCtaText="Book Strategic Consultation"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Explore Programs & Pricing"
        secondaryCtaLink="/programs-pricing"
        metrics={[
          { val: '$142.8M+', label: 'Active Managed GMV', sub: 'Audited global portfolio' },
          { val: '35+', label: 'Enterprise Brands', sub: 'Marketplaces & D2C stores' },
          { val: '5 Hubs', label: 'Global Operational Offices', sub: 'Riyadh, Dubai, London, NYC, Istanbul' },
          { val: '8.40x', label: 'Average Blended ROAS', sub: 'Portfolio weighted return' }
        ]}
      />

      {/* Global Hubs Grid */}
      <section className="subpage-section">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">Global Presence</div>
            <h2>Our 5 Regional Operational Hubs</h2>
            <p>
              Local expertise in key financial and logistics capitals ensures seamless execution across customs, taxes, and customer preferences.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {hubs.map((h, idx) => (
              <div key={idx} className="platform-detail-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(0, 245, 155, 0.1)', border: '1px solid rgba(0, 245, 155, 0.25)', color: 'var(--neon-mint)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--neon-mint)', background: 'rgba(0, 245, 155, 0.08)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(0, 245, 155, 0.2)' }}>
                    {h.code}
                  </span>
                </div>
                <h3 className="platform-detail-title" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{h.city}</h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--neon-mint)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  {h.role}
                </div>
                <p className="platform-detail-desc" style={{ marginBottom: '0' }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Values */}
      <section className="subpage-section" style={{ background: 'rgba(255, 255, 255, 0.015)', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">Core Principles</div>
            <h2>Our Core Principles</h2>
            <p>
              Built for discerning enterprise brand owners who value transparency, audited results, and meticulous operational execution.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {values.map((v, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-card-header">
                  <div className="pillar-icon-badge">{v.icon}</div>
                  <span className="pillar-num">0{idx + 1}</span>
                </div>
                <h3 className="pillar-title">{v.title}</h3>
                <p className="pillar-desc">{v.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/book-audit" className="btn btn-primary" style={{ marginRight: '14px' }}>
              Schedule Leadership Discovery ➔
            </Link>
            <Link to="/case-studies" className="btn btn-secondary">
              View Verified Client Proof
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
