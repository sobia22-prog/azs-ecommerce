import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';
import RobotCompanion from '../components/RobotCompanion';

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

          {/* Cross Link to Pricing & Case Studies */}
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/programs-pricing" className="btn btn-primary" style={{ marginRight: '14px' }}>
              Explore USA Program Pricing ➔
            </Link>
            <Link to="/case-studies/nuvoaura" className="btn btn-secondary">
              Review NuvoAura USA Case Study ➔
            </Link>
          </div>
        </div>
      </section>

      <RobotCompanion />
    </div>
  );
}
