import React from 'react';
import { Link, useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function TrendyolPlatformPage({ onOpenModal }) {
  const { path } = useRouter();
  const canonicalPath = path === '/trendyol' ? '/trendyol' : '/marketplace-management/trendyol';

  useSEO({
    title: 'Trendyol Seller Management Agency (KSA) | AZS Solutions',
    description: "As one of Trendyol's top partner agencies for GCC cross-border expansion, AZS Solutions delivers turnkey seller onboarding, Turkish catalog localization, and GCC marketplace management.",
    keywords: 'trendyol seller agency KSA, trendyol marketplace management, trendyol account management GCC, trendyol agency Saudi Arabia, trendyol Turkey UAE partner',
    ogTitle: 'Trendyol Seller Management Agency (KSA) | AZS Solutions',
    ogDescription: 'Expand onto Trendyol GCC with 350+ live SKUs, 7.80x verified ROAS, and automated catalog synchronization.',
    canonicalPath
  });

  const expansionPillars = [
    {
      title: 'Automated Catalog Translation & Sync',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      ),
      desc: 'Seamless translation of catalogs into Gulf Arabic and English attributes, sizing conventions, and taxonomy.'
    },
    {
      title: 'Localized GCC Pricing & VAT Compliance',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
      desc: 'Dynamic currency mapping into SAR and AED with automatic import duty and ZATCA / FTA tax reconciliation.'
    },
    {
      title: 'Trendyol Flash Promotions & Megasales',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      desc: 'Top-tier slot placements in Trendyol flash sales, coupon drops, and seasonal promotional banners.'
    },
    {
      title: 'Cross-Border Air Freight & 72h Fulfillment',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-mint)' }}>
          <path d="M22 2L11 13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
      desc: 'Direct air-express routing into Riyadh, Jeddah, and Dubai with integrated last-mile tracking under 72 hours.'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Trendyol GCC"
        title="Trendyol Platform"
        highlight="Expansion"
        subtitle="Turnkey cross-border expansion into Saudi Arabia and UAE. Automated catalog translation, localized pricing, flash sales, and fast fulfillment."
        breadcrumbs={[
          { label: 'Marketplaces Division', link: '/marketplaces' },
          { label: 'Trendyol Platform' }
        ]}
        primaryCtaText="Launch on Trendyol GCC"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Inspect Expansion Dashboard"
        secondaryCtaLink="#trendyol-proof"
        metrics={[
          { val: 'SAR 145K', label: 'Monthly Run Rate', sub: 'Verified scale' },
          { val: '7.80x', label: 'Flash Sale ROAS', sub: 'Onsite advertising' },
          { val: '350+ SKUs', label: 'Active Catalog', sub: 'Arabic mapped' },
          { val: '< 72 hrs', label: 'Delivery SLA', sub: 'Doorstep fulfillment' }
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
          <div id="trendyol-proof" className="showcase-proof-card" style={{ marginTop: '10px' }}>
            <h2 className="showcase-proof-title">
              Trendyol GCC: <span className="gradient-text">Unlocking Saudi & UAE Shoppers</span>
            </h2>
            <p className="showcase-proof-subtitle">
              Feed compliance, Arabic attribute localization, and sponsored ad scaling on Trendyol’s high-growth Gulf app.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 245, 155, 0.2)' }}
                onClick={() => onOpenModal('/assets/trendyol_light_dashboard.svg', 'Trendyol GCC Multi-Channel Expansion Console — 7.80x ROAS')}
              >
                <img src="/assets/trendyol_light_dashboard.svg" alt="Trendyol Performance Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ background: 'rgba(0, 245, 155, 0.05)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 245, 155, 0.2)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>GCC Run-Rate</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>SAR 145.0K</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>Monthly Scaled Pace</div>
                  </div>

                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Flash ROAS</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>7.80x</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>High-Margin Return</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>SKUs Synced</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-heading)' }}>350+ Live</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>100% Arabic Mapped</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Customs Clearance</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-heading)' }}>100% DDP</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>Duty Delivery Paid</div>
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
                  "Trendyol is expanding aggressively into Saudi Arabia and UAE. We built the complete pipeline so brands capture this incremental volume without operational friction."
                </blockquote>

                <div className="subpage-cta-group">
                  <Link to="/book-audit" className="btn btn-primary" style={{ padding: '11px 20px', fontSize: '0.86rem' }}>
                    <span>Start Trendyol Expansion ➔</span>
                  </Link>
                  <Link to="/case-studies/trendyol-expansion" className="btn btn-secondary" style={{ padding: '11px 20px', fontSize: '0.86rem' }}>
                    <span>Read Trendyol Case Study ➔</span>
                  </Link>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <Link to="/programs-pricing" style={{ fontSize: '0.82rem', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none' }}>
                    View Trendyol Programs & Pricing ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Trendyol Expansion - Clean Unboxed Flow */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '18px' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 4.4vw, 1.45rem)', margin: 0 }}>How We Scale On Trendyol</h2>
          </div>

          <div className="marketplaces-systems-grid">
            {expansionPillars.map((p, idx) => (
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

          {/* Why Trendyol Now */}
          <div className="subpage-feature-box" style={{ marginTop: '32px' }}>
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '6px' }}>
                Why Enter Trendyol GCC in 2026?
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.45, margin: 0 }}>
                Backed by Alibaba, Trendyol is subsidizing shipping and promotions across Saudi Arabia and the UAE. Brands moving early capture category ranking with significantly lower CPCs.
              </p>
            </div>
            <Link to="/book-audit" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
              <span>Book Consultation ➔</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
