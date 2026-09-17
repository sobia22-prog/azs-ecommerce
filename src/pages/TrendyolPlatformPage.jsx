import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function TrendyolPlatformPage({ onOpenModal }) {
  useSEO({
    title: 'Trendyol Seller Management Agency (KSA) | AZS Solutions',
    description: "As one of Trendyol's top partner agencies for GCC cross-border expansion, AZS Solutions delivers turnkey seller onboarding, Turkish catalog localization, and GCC marketplace management.",
    keywords: 'trendyol seller agency KSA, trendyol marketplace management, trendyol account management GCC, trendyol agency Saudi Arabia, trendyol Turkey UAE partner',
    ogTitle: 'Trendyol Seller Management Agency (KSA) | AZS Solutions',
    ogDescription: 'Expand onto Trendyol GCC with 350+ live SKUs, 7.80x verified ROAS, and automated catalog synchronization.',
    canonicalPath: '/marketplace-management/trendyol'
  });

  const expansionPillars = [
    {
      title: 'Automated Catalog Translation & Sync',
      icon: '🔄',
      desc: 'Seamless translation of Turkish or European catalogs into high-converting Gulf Arabic and English attributes, sizing conventions, and taxonomy.'
    },
    {
      title: 'Localized GCC Pricing & VAT Compliance',
      icon: '💰',
      desc: 'Dynamic currency mapping into Saudi Riyals (SAR) and UAE Dirhams (AED) with automatic import duty and ZATCA / FTA tax reconciliation built-in.'
    },
    {
      title: 'Trendyol Flash Promotions & Megasales',
      icon: '⚡',
      desc: 'Securing top-tier slot placements in Trendyol’s high-traffic flash sales, coupon drops, and seasonal promotional banners across GCC mobile apps.'
    },
    {
      title: 'Cross-Border Air Freight & 72h Fulfillment',
      icon: '✈️',
      desc: 'Direct air-express routing from Istanbul/European hubs into Riyadh, Jeddah, and Dubai with integrated last-mile delivery tracking under 72 hours.'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="High-Growth Corridor: Trendyol GCC Expansion"
        title="Trendyol Cross-Border"
        highlight="Expansion Platform"
        subtitle="The GCC is Trendyol’s fastest growing international corridor. We bridge European & Turkish manufacturers and global brands into high-spending Saudi Arabia and UAE consumer markets with turnkey operations."
        breadcrumbs={[
          { label: 'Marketplaces Division', link: '/marketplaces' },
          { label: 'Trendyol Platform' }
        ]}
        primaryCtaText="Launch on Trendyol GCC"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Inspect Expansion Dashboard"
        secondaryCtaLink="#trendyol-proof"
        metrics={[
          { val: 'SAR 145K', label: 'Monthly Run Rate', sub: 'Verified initial cohort' },
          { val: '7.80x', label: 'Flash Sale ROAS', sub: 'Trendyol Onsite Ads' },
          { val: '350+ SKUs', label: 'Active Catalog', sub: 'Arabic mapped & live' },
          { val: '< 72 hrs', label: 'Delivery SLA', sub: 'GCC Doorstep Fulfillment' }
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

          {/* Trendyol Expansion Showcase */}
          <div id="trendyol-proof" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            marginBottom: '60px',
            marginTop: '10px'
          }}>
            <div className="badge-pill" style={{ marginBottom: '12px' }}>Verified Cross-Border Dashboard</div>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-heading)', marginBottom: '10px' }}>
              Trendyol GCC: <span className="gradient-text">Unlocking Saudi & UAE Shoppers</span>
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: '780px', marginBottom: '30px' }}>
              How AZS connects brands directly to the surging demand on Trendyol’s Gulf mobile app. From product feed compliance and Arabic attribute localization to sponsored ad scaling.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 245, 155, 0.2)' }}
                onClick={() => onOpenModal('/assets/trendyol_light_dashboard.svg', 'Trendyol GCC Multi-Channel Expansion Console — 7.80x ROAS')}
              >
                <img src="/assets/trendyol_light_dashboard.svg" alt="Trendyol Performance Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
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
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>GCC Run-Rate</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>SAR 145.0K</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Monthly Scaled Pace</div>
                  </div>

                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Flash ROAS</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>7.80x</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>High-Margin Return</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>SKUs Synced</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>350+ Live</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>100% Arabic Mapped</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Customs Clearance</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>100% DDP</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Duty Delivery Paid</div>
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
                  "Trendyol is expanding aggressively into Saudi Arabia and UAE. We built the complete pipeline so brands capture this incremental volume without operational friction."
                </blockquote>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link to="/book-audit" className="btn btn-primary">
                    <span>Start Your Trendyol Expansion</span>
                  </Link>
                  <Link to="/case-studies/trendyol-expansion" className="btn btn-secondary">
                    <span>Read Eurasia Lifestyle Case Study ➔</span>
                  </Link>
                </div>
                <div style={{ marginTop: '14px' }}>
                  <Link to="/programs-pricing" style={{ fontSize: '0.84rem', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none' }}>
                    View Trendyol Marketplace Engagement Programs & Pricing ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Trendyol Expansion */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
            <div className="badge-pill">Turnkey Systems</div>
            <h2>The AZS Trendyol Expansion Architecture</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {expansionPillars.map((p, i) => (
              <div className="platform-detail-card" key={i}>
                <div className="platform-detail-icon">{p.icon}</div>
                <h3 className="platform-detail-title">{p.title}</h3>
                <p className="platform-detail-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Trendyol Now */}
          <div style={{
            marginTop: '60px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-heading)', marginBottom: '10px' }}>
                Why Enter Trendyol GCC in 2026?
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
                Backed by Alibaba, Trendyol is investing hundreds of millions into subsidizing customer acquisition, shipping, and merchant promotions across Saudi Arabia and the UAE. Brands moving early capture category ranking and consumer loyalty with significantly lower CPCs than saturated legacy channels.
              </p>
            </div>
            <Link to="/book-audit" className="btn btn-primary">
              <span>Schedule Trendyol Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
