import React from 'react';
import { Link, useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function NoonPlatformPage({ onOpenModal }) {
  const { path } = useRouter();
  const canonicalPath = path === '/noon' ? '/noon' : '/marketplace-management/noon';

  useSEO({
    title: 'Noon Marketplace Management & Seller Agency KSA | AZS Solutions',
    description: 'Scale your brand on Noon KSA and Noon UAE with AZS Solutions. Noon marketplace management, Noon Seller Lab onboarding, FBN logistics, and high-ROAS advertising.',
    keywords: 'noon marketplace management, noon seller agency KSA, noon account management, noon UAE partner, Fulfilled by Noon FBN, Yellow Friday marketing',
    ogTitle: 'Noon Marketplace Management & Seller Agency | AZS Solutions',
    ogDescription: 'Verified SAR 208K+ monthly sales, +311% order lift, and turnkey FBN warehouse routing across Saudi Arabia and UAE.',
    canonicalPath
  });

  const noonPillars = [
    {
      title: 'Fulfilled by Noon (FBN) Setup',
      desc: 'Complete transition to FBN Express. We create ASN shipments, barcode labeling, and coordinate delivery into Riyadh & Dubai hubs.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: 'Yellow Friday Mega-Events',
      desc: 'Early deal lock-ins, inventory buffer planning 60 days in advance, and aggressive Noon Ad Boost bid management during peak festivals.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Noon Ad Boost & Keywords',
      desc: 'High-intent search placement targeting, product detail page banner syndication, and category sponsor bidding maintaining low CPC.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    },
    {
      title: 'Price Engine & Buy Box Lock',
      desc: 'Dynamic repricing against local Saudi & UAE resellers. Immediate alerts for price matching and fee optimization to protect margins.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Noon Ecosystem"
        title="Noon Marketplace"
        highlight="Growth"
        subtitle="Full-service management across Saudi Arabia and UAE. FBN logistics, Ad Boost campaigns, Yellow Friday promotions, and catalog optimization."
        breadcrumbs={[
          { label: 'Marketplaces Division', link: '/marketplaces' },
          { label: 'Noon Platform' }
        ]}
        primaryCtaText="Book Noon Account Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Inspect Verified Proof"
        secondaryCtaLink="#noon-proof"
        metrics={[
          { val: 'SAR 208K', label: 'Monthly Sales', sub: 'Verified run-rate' },
          { val: '+311%', label: 'Orders Surge', sub: 'FBN Express lift' },
          { val: '6.85x', label: 'Ad ROAS', sub: 'Noon Advertising' },
          { val: '48h SLA', label: 'Express Delivery', sub: 'KSA & UAE hubs' }
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

          {/* Verified Case Study Showcase: Noon Seller Lab */}
          <div id="noon-proof" className="showcase-proof-card" style={{ marginTop: '10px' }}>
            <h2 className="showcase-proof-title">
              Creative Things Studio Gear: <span className="gradient-text">SAR 208.5K on Noon KSA</span>
            </h2>
            <p className="showcase-proof-subtitle">
              Transitioned catalog to Fulfilled by Noon (FBN), unlocked the Noon Express badge, and dispatched 522 units in month one.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 245, 155, 0.2)' }}
                onClick={() => onOpenModal('/assets/noon_ads_full_card.png', 'Noon Seller Lab Verified Growth Console — SAR 208,535 (522 Orders)')}
              >
                <img src="/assets/noon_ads_full_card.png" alt="Noon Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ background: 'rgba(0, 245, 155, 0.05)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 245, 155, 0.2)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Noon Volume</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>SAR 208.5K</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>$55.6K Gross Sales</div>
                  </div>

                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Orders Growth</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>+311.0%</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>522 Units Dispatched</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Blended ROAS</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-heading)' }}>6.85x</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>Noon Sponsored Ads</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Delivery Rating</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-heading)' }}>99.2%</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>Noon Express SLA</div>
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
                  "Onboarded 400+ SKUs into Noon Seller Lab, unlocked Noon Express, and produced 522 orders with a 6.85x blended ROAS during the initial campaign."
                </blockquote>

                <div className="subpage-cta-group">
                  <Link to="/book-audit" className="btn btn-primary" style={{ padding: '11px 20px', fontSize: '0.86rem' }}>
                    <span>Audit Your Noon Account ➔</span>
                  </Link>
                  <Link to="/case-studies/creative-things" className="btn btn-secondary" style={{ padding: '11px 20px', fontSize: '0.86rem' }}>
                    <span>Read Creative Things Case Study ➔</span>
                  </Link>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <Link to="/programs-pricing" style={{ fontSize: '0.82rem', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none' }}>
                    View Noon Programs & Pricing ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Noon Growth - Clean Unboxed Flow */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '18px' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 4.4vw, 1.45rem)', margin: 0 }}>What We Manage on Noon</h2>
          </div>

          <div className="marketplaces-systems-grid">
            {noonPillars.map((p, idx) => (
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
        </div>
      </section>
    </div>
  );
}
