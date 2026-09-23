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
      desc: 'Real-time telemetry tracking Order Defect Rate (ODR < 1%), Late Shipment Rate (LSR < 4%), and Pre-fulfillment Cancel Rate before policy warnings trigger.'
    },
    {
      title: 'Instant Plan of Action (POA) Escalation',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      desc: 'Institutional legal and compliance documentation drafting customized Plans of Action (POAs) submitted through internal partner escalation channels for rapid reinstatement.'
    },
    {
      title: 'Brand Registry & IP Hijacking Defense',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      desc: 'Project Zero, Transparency code integration, and automated counterfeit seller takedowns guarding your trademark rights across GCC and US marketplaces.'
    },
    {
      title: 'Buy Box Suppression & Listing Hygiene',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      desc: 'Continuous scanning for price parity algorithmic suppressions, title truncation violations, and missing backend compliance certifications.'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Governance & Risk Mitigation"
        title="Marketplace Account Health &"
        highlight="Suspension Defense"
        subtitle="Unchecked policy infractions, unauthorized resellers, and metric drops can decimate millions in recurring GMV overnight. Our dedicated compliance desk safeguards your selling privileges 24/7."
        breadcrumbs={[
          { label: 'Marketplace Management', link: '/marketplace-management' },
          { label: 'Account Health' }
        ]}
        primaryCtaText="Request Account Health Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Explore Programs & Pricing"
        secondaryCtaLink="/programs-pricing"
        metrics={[
          { val: '100%', label: 'Account Safety Rate', sub: 'Zero unrecovered suspensions' },
          { val: '< 0.2%', label: 'Average ODR', sub: 'Well below 1.0% threshold' },
          { val: '15 Min', label: 'Alert Latency', sub: 'Instant risk mitigation response' },
          { val: '24/7', label: 'Active Coverage', sub: 'Riyadh, Dubai & London monitoring' }
        ]}
      />

      <section className="subpage-section">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">Compliance Protocols</div>
            <h2>Institutional Defense Mechanisms</h2>
            <p>
              We treat account health as mission-critical infrastructure, deploying proactive guardrails rather than reactive crisis management.
            </p>
          </div>

          <div className="platform-detail-grid">
            {healthSystems.map((s, idx) => (
              <div key={idx} className="platform-detail-card">
                <div className="platform-detail-icon">{s.icon}</div>
                <h3 className="platform-detail-title">{s.title}</h3>
                <p className="platform-detail-desc">{s.desc}</p>
                <ul className="platform-checklist">
                  <li className="platform-checklist-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Full Policy Compliance Protocol</span>
                  </li>
                  <li className="platform-checklist-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Amazon & Noon Dedicated Desk</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/book-audit" className="btn btn-primary" style={{ marginRight: '14px' }}>
              Schedule Compliance Audit ➔
            </Link>
            <Link to="/programs-pricing" className="btn btn-secondary" style={{ marginRight: '14px' }}>
              View Protection Retainers & Pricing
            </Link>
            <Link to="/marketplace-management" className="btn btn-secondary">
              Back to Marketplaces Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
