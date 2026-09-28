import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function AccountHealthPage() {
  useSEO({
    title: 'Marketplace Account Health & Suspension Defense | AZS Solutions',
    description: 'Safeguard your Amazon and Noon seller accounts against suspensions, policy violations, IP complaints, and Buy Box suppression with 24/7 algorithmic health monitoring.',
    keywords: 'amazon account suspension agency, amazon account health management, seller central reinstatement, noon policy compliance, buy box suppression defense',
    ogTitle: 'Marketplace Account Health & Suspension Defense | AZS Solutions',
    ogDescription: 'Protect your brand equity and revenue streams with 24/7 automated account health defense across Amazon and Noon.',
    canonicalPath: '/marketplace-management/account-health'
  });

  const healthSystems = [
    {
      title: '24/7 Automated Account Health Monitoring',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      desc: 'Real-time telemetry tracking Order Defect Rate (ODR < 1%) and Late Shipment Rate before policy warnings trigger.'
    },
    {
      title: 'Instant Plan of Action (POA) Escalation',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      desc: 'Legal and compliance documentation drafting customized Plans of Action submitted through escalation channels.'
    },
    {
      title: 'Brand Registry & IP Hijacking Defense',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      desc: 'Project Zero and Transparency code integration guarding your trademark rights across GCC and US marketplaces.'
    },
    {
      title: 'Buy Box Suppression & Listing Hygiene',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      desc: 'Continuous scanning for price parity suppressions, title truncation violations, and missing certifications.'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Account Protection"
        title="Account Health &"
        highlight="Defense"
        subtitle="24/7 account protection across Amazon and Noon. Metric monitoring, policy compliance, and Buy Box protection."
        breadcrumbs={[
          { label: 'Marketplace Management', link: '/marketplace-management' },
          { label: 'Account Health' }
        ]}
        primaryCtaText="Request Health Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Explore Programs & Pricing"
        secondaryCtaLink="/programs-pricing"
        metrics={[
          { val: '100%', label: 'Safety Rate', sub: 'Active protection' },
          { val: '< 0.2%', label: 'Average ODR', sub: 'Below threshold' },
          { val: '15 Min', label: 'Response Time', sub: 'Instant risk mitigation' },
          { val: '24/7', label: 'Live Monitoring', sub: 'Continuous coverage' }
        ]}
      />

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
            <h2 style={{ fontSize: 'clamp(1.2rem, 4.4vw, 1.45rem)', margin: 0 }}>How We Protect Your Account</h2>
          </div>

          <div className="marketplaces-systems-grid">
            {healthSystems.map((s, idx) => (
              <div key={idx} className="marketplaces-system-card">
                <div className="system-card-icon">
                  {s.icon}
                </div>
                <div className="system-card-body">
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-heading)', margin: '0 0 4px' }}>{s.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-body)', lineHeight: 1.4, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="subpage-bottom-actions" style={{ marginTop: '28px' }}>
            <Link to="/book-audit" className="btn btn-primary" style={{ padding: '11px 22px', fontSize: '0.86rem' }}>
              Schedule Audit ➔
            </Link>
            <Link to="/programs-pricing" className="btn btn-secondary" style={{ padding: '11px 22px', fontSize: '0.86rem' }}>
              View Retainers & Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
