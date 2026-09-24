import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function NoonPlatformPage({ onOpenModal }) {
  useSEO({
    title: 'Noon Marketplace Management & Seller Agency KSA | AZS Solutions',
    description: 'Scale your brand on Noon KSA and Noon UAE with AZS Solutions. Noon marketplace management, Noon Seller Lab onboarding, FBN logistics, and high-ROAS advertising.',
    keywords: 'noon marketplace management, noon seller agency KSA, noon account management, noon UAE partner, Fulfilled by Noon FBN, Yellow Friday marketing',
    ogTitle: 'Noon Marketplace Management & Seller Agency | AZS Solutions',
    ogDescription: 'Verified SAR 208K+ monthly sales, +311% order lift, and turnkey FBN warehouse routing across Saudi Arabia and UAE.',
    canonicalPath: '/marketplace-management/noon'
  });

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Platform Focus: Noon GCC Ecosystem"
        title="Noon Marketplace"
        highlight="Seller Lab Platform"
        subtitle="End-to-end Noon execution across Saudi Arabia (KSA) and the United Arab Emirates (UAE). Fulfilled by Noon (FBN) logistics, Noon Ad Boost bidding, Yellow Friday preparation, and catalog indexing."
        breadcrumbs={[
          { label: 'Marketplaces Division', link: '/marketplaces' },
          { label: 'Noon Platform' }
        ]}
        primaryCtaText="Book Noon Account Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Inspect Verified Proof"
        secondaryCtaLink="#noon-proof"
        metrics={[
          { val: 'SAR 208.5K', label: 'Documented 30D Sales', sub: 'Verified Noon Seller Lab' },
          { val: '+311.0%', label: 'Orders Surge', sub: 'FBN Express conversion boost' },
          { val: '6.85x', label: 'Blended Ad ROAS', sub: 'Noon Onsite Advertising' },
          { val: '48h SLA', label: 'FBN Express Delivery', sub: 'Riyadh & Dubai nodes' }
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
          <div id="noon-proof" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            marginBottom: '60px',
            marginTop: '10px'
          }}>
            <div className="badge-pill" style={{ marginBottom: '12px' }}>Verified Noon Proof Deep Dive</div>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-heading)', marginBottom: '10px' }}>
              Creative Things Studio Gear: <span className="gradient-text">SAR 208.5K on Noon KSA</span>
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: '780px', marginBottom: '30px' }}>
              How AZS transitioned an electronics & studio hardware catalog from direct seller delivery to Fulfilled by Noon (FBN), unlocking the coveted Noon Express badge and delivering 522 units in month one.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 245, 155, 0.2)' }}
                onClick={() => onOpenModal('/assets/noon_ads_full_card.png', 'Noon Seller Lab Verified Growth Console — SAR 208,535 (522 Orders)')}
              >
                <img src="/assets/noon_ads_full_card.png" alt="Noon Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ background: 'rgba(0, 245, 155, 0.05)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 245, 155, 0.2)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Noon Volume</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>SAR 208.5K</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>$55.6K Gross Sales</div>
                  </div>

                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Orders Growth</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>+311.0%</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>522 Units Dispatched</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Blended ROAS</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>6.85x</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Noon Sponsored Ads</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Delivery Rating</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>99.2%</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Noon Express SLA</div>
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
                  "Onboarded 400+ SKUs into Noon Seller Lab, unlocked Noon Express, and produced 522 orders with a 6.85x blended ROAS during the initial campaign."
                </blockquote>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link to="/book-audit" className="btn btn-primary">
                    <span>Audit Your Noon Account</span>
                  </Link>
                  <Link to="/case-studies/creative-things" className="btn btn-secondary">
                    <span>Read Creative Things Noon Case Study ➔</span>
                  </Link>
                </div>
                <div style={{ marginTop: '14px' }}>
                  <Link to="/programs-pricing" style={{ fontSize: '0.84rem', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none' }}>
                    View Noon Marketplace Engagement Programs & Pricing ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Noon Growth */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
            <div className="badge-pill">Noon Operational Stack</div>
            <h2>End-to-End Noon Capabilities</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div className="platform-detail-card">
              <div className="platform-detail-icon" style={{ color: 'var(--neon-mint)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="platform-detail-title">Fulfilled by Noon (FBN) Setup</h3>
              <p className="platform-detail-desc">
                Complete transition from Back-to-Back (B2B) to FBN Express. We create ASN shipments, barcode labeling, and coordinate delivery into Noon Riyadh & Dubai hubs.
              </p>
            </div>

            <div className="platform-detail-card">
              <div className="platform-detail-icon" style={{ color: 'var(--neon-mint)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="platform-detail-title">Yellow Friday Mega-Events</h3>
              <p className="platform-detail-desc">
                Early deal lock-ins, inventory buffer planning 60 days in advance, and aggressive Noon Ad Boost bid management during Yellow Friday, Ramadan, and Payday festivals.
              </p>
            </div>

            <div className="platform-detail-card">
              <div className="platform-detail-icon" style={{ color: 'var(--neon-mint)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3 className="platform-detail-title">Noon Ad Boost & Keywords</h3>
              <p className="platform-detail-desc">
                High-intent search placement targeting, product detail page banner syndication, and category sponsor bidding maintaining low cost-per-click.
              </p>
            </div>

            <div className="platform-detail-card">
              <div className="platform-detail-icon" style={{ color: 'var(--neon-mint)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="platform-detail-title">Price Engine & Buy Box Lock</h3>
              <p className="platform-detail-desc">
                Dynamic repricing against local Saudi & UAE resellers. Immediate alerts for price matching and fee optimization to protect gross margins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
