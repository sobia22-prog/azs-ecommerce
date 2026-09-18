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
      flag: '🇸🇦',
      desc: 'Local Saudi account management, ZATCA e-invoicing compliance, FBA Riyadh warehouse logistics, and Arabic native listing harvesting.'
    },
    {
      city: 'Dubai, United Arab Emirates',
      role: 'MENA Performance Media Center',
      flag: '🇦🇪',
      desc: 'Paid media acquisition desk covering Meta Ads, TikTok Shop creator partnerships, Noon UAE Seller Lab, and cross-border currency clearing.'
    },
    {
      city: 'London, United Kingdom',
      role: 'European Gateway & VAT Desk',
      flag: '🇬🇧',
      desc: 'Amazon UK Prime operations, HMRC VAT management, cross-border customs brokerage, and Western European marketplace expansion.'
    },
    {
      city: 'New York, United States',
      role: 'US Marketplace & DSP Engine',
      flag: '🇺🇸',
      desc: 'Amazon.com nationwide FBA restock governance, Amazon DSP programmatic display desks, and multi-channel Shopify D2C scale.'
    },
    {
      city: 'Istanbul, Turkey',
      role: 'Trendyol Cross-Border Gateway',
      flag: '🇹🇷',
      desc: 'Direct air-express fulfillment routing, Turkish manufacturer catalog translation, and high-growth Gulf export corridor operations.'
    }
  ];

  const values = [
    {
      title: 'Audited Institutional Data',
      icon: '🛡️',
      desc: 'We never present unqualified marketing claims. Every figure, ROAS multiplier, and GMV benchmark is substantiated by verified partner data.'
    },
    {
      title: 'TACoS-First Margin Governance',
      icon: '⚖️',
      desc: 'Scaling revenue without protecting net contribution profit is failure. We calibrate ad budgets to maximize gross dollar margin.'
    },
    {
      title: 'Native Cultural Localization',
      icon: '🌍',
      desc: 'No automated machine translations. We harvest native vernacular search terms tailored to high-spending Gulf consumers.'
    },
    {
      title: 'Senior Executive Access',
      icon: '🤝',
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
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{h.flag}</div>
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
            <div className="badge-pill">Principles & Governance</div>
            <h2>The Operating Principles Behind Our Alpha</h2>
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
