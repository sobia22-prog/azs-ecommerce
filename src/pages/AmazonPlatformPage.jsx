import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function AmazonPlatformPage({ onOpenModal }) {
  useSEO({
    title: 'Amazon KSA & Global Marketplace Management Agency | AZS Solutions',
    description: 'Scale your brand on Amazon.sa and globally with AZS Solutions. Full-service Amazon KSA PPC agency, Buy Box defense, Arabic A+ content, and Riyadh FBA logistics.',
    keywords: 'amazon.sa seller agency, amazon KSA PPC agency, amazon seller account management Riyadh, buy box defense KSA, amazon agency Saudi Arabia',
    ogTitle: 'Amazon KSA & Global Marketplace Agency | AZS Solutions',
    ogDescription: 'Verified 14.43x ROAS, +11,963% sales lift, and turnkey Seller Central management across KSA, UAE, USA & UK.',
    canonicalPath: '/marketplace-management/amazon-ksa'
  });

  const regions = [
    {
      code: '🇸🇦 Amazon Saudi Arabia (Amazon.sa)',
      badge: 'Highest GMV Lift',
      focus: 'Riyadh & Jeddah FBA nodes, Arabic keyword dominance, Tamimi/Lulu consumer alignment, and White Friday surge execution.',
      metric: '+11,963% Revenue Spike'
    },
    {
      code: '🇦🇪 Amazon UAE (Amazon.ae)',
      badge: 'Cross-Border Hub',
      focus: 'Dubai logistics consolidation, multi-currency pricing, high Prime penetration, and luxury/electronics brand dominance.',
      metric: '94.2% Prime Buy Box Win Rate'
    },
    {
      code: '🇺🇸 Amazon USA (Amazon.com)',
      badge: 'Volume Anchor',
      focus: 'Sponsored Products SP/SB/SD scaling, high-velocity listing indexing, Vine review acceleration, and sub-10% ACOS maintenance.',
      metric: '$48.9K Ad Sales (11.20x ROAS)'
    },
    {
      code: '🇬🇧 Amazon UK (Amazon.co.uk)',
      badge: 'High-Margin Gateway',
      focus: 'HMRC VAT compliance, localized UK English keyword indexing, European fulfillment network routing, and Prime badge certification.',
      metric: '£36.5K Revenue Lift (9.45x ROAS)'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Platform Focus: Amazon Global & GCC"
        title="Amazon Growth &"
        highlight="Dominance Platform"
        subtitle="Full-funnel Seller Central & Vendor Central execution across Amazon.sa, Amazon.ae, Amazon.com, and Amazon.co.uk. Algorithmic Buy Box defense, native Arabic listing SEO, and high-efficiency Sponsored Ads."
        breadcrumbs={[
          { label: 'Marketplaces Division', link: '/marketplaces' },
          { label: 'Amazon Platform' }
        ]}
        primaryCtaText="Get Amazon Account Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Inspect Verified Dashboard"
        secondaryCtaLink="#verified-proof"
        metrics={[
          { val: '14.43x', label: 'Flagship Peak ROAS', sub: 'HomeMaster verified case' },
          { val: '6.93%', label: 'Flagship ACOS', sub: 'Down from 34% baseline' },
          { val: '+11,963%', label: 'Documented Growth', sub: 'Weekly sales expansion' },
          { val: '4 Key Markets', label: 'KSA • UAE • USA • UK', sub: 'Unified account cockpit' }
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

          {/* Regional Corridors Grid */}
          <div className="section-header" style={{ textAlign: 'left', marginTop: '10px' }}>
            <div className="badge-pill">Multi-Region Execution</div>
            <h2>Amazon Marketplaces We Scale</h2>
            <p>
              We manage unified brand accounts across the primary Gulf corridors and Western anchor markets:
            </p>
          </div>

          <div className="platform-detail-grid" style={{ marginTop: '20px', marginBottom: '60px' }}>
            {regions.map((r, i) => (
              <div className="platform-detail-card" key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-heading)' }}>{r.code}</span>
                  <span className="growth-badge">{r.badge}</span>
                </div>
                <p className="platform-detail-desc" style={{ marginBottom: '16px' }}>{r.focus}</p>
                <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.85rem', color: 'var(--neon-mint)', fontWeight: 700 }}>
                  ⚡ {r.metric}
                </div>
              </div>
            ))}
          </div>

          {/* Flagship Case Study Showcase: HomeMaster Appliances */}
          <div id="verified-proof" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            marginBottom: '60px',
            position: 'relative'
          }}>
            <div className="badge-pill" style={{ marginBottom: '12px' }}>Verified Case Study Deep Dive</div>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-heading)', marginBottom: '10px' }}>
              HomeMaster Appliances: <span className="gradient-text">+11,963% Amazon Scale</span>
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: '780px', marginBottom: '30px' }}>
              How AZS restructured a stalled kitchen appliance catalog on Amazon Saudi Arabia and UAE, eliminated unauthorized Buy Box hijackers, and achieved a 14.43x ROAS with a 6.93% ACOS.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              {/* Dashboard Preview */}
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 245, 155, 0.2)' }}
                onClick={() => onOpenModal('/assets/amz_seller_card.png', 'HomeMaster Appliances Verified Amazon Growth Console (+11,963%)')}
              >
                <img src="/assets/amz_seller_card.png" alt="HomeMaster Amazon Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div className="zoom-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Click to Inspect Verified Proof
                </div>
              </div>

              {/* Data & Impact Breakdown */}
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ background: 'rgba(0, 245, 155, 0.05)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 245, 155, 0.2)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Weekly Rev Spike</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>$32.2K</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>SAR 120,800/wk</div>
                  </div>

                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>PPC ROAS</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>14.43x</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>6.93% ACOS</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Buy Box Win Rate</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>96.8%</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Up from 61%</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Organic Rank</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>Top 3</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>42 core category keywords</div>
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
                  "Reduced ACOS from 34% down to 6.93% while scaling weekly revenue by +11,963% across Saudi Arabia and UAE."
                </blockquote>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link to="/book-audit" className="btn btn-primary">
                    <span>Replicate These Amazon Results</span>
                  </Link>
                  <Link to="/case-studies/homemaster" className="btn btn-secondary">
                    <span>Read Full HomeMaster Case Study ➔</span>
                  </Link>
                </div>
                <div style={{ marginTop: '14px' }}>
                  <Link to="/programs-pricing" style={{ fontSize: '0.84rem', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none' }}>
                    View Amazon Management Retainer Programs & Indicative Pricing ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Core Amazon Deliverables */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
            <div className="badge-pill">Turnkey Deliverables</div>
            <h2>What We Manage on Your Amazon Account</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="platform-detail-card">
              <div className="platform-detail-icon">🎯</div>
              <h3 className="platform-detail-title">Full-Funnel Sponsored Ads (PPC)</h3>
              <p className="platform-detail-desc">
                Custom campaigns across Sponsored Products, Sponsored Brands Video, and Sponsored Display. Strict keyword isolation, bid rules, and dayparting.
              </p>
            </div>

            <div className="platform-detail-card">
              <div className="platform-detail-icon">🛡️</div>
              <h3 className="platform-detail-title">Buy Box & Brand Registry Defense</h3>
              <p className="platform-detail-desc">
                Proactive Project Zero / Transparency integration, counterfeit suppression, algorithmic dynamic repricing, and Seller Central health monitoring.
              </p>
            </div>

            <div className="platform-detail-card">
              <div className="platform-detail-icon">🇸🇦</div>
              <h3 className="platform-detail-title">Arabic & English A+ Content</h3>
              <p className="platform-detail-desc">
                Premium infographic modules, lifestyle imagery, comparison tables, and native GCC Arabic copywriting optimized for conversion and search indexing.
              </p>
            </div>

            <div className="platform-detail-card">
              <div className="platform-detail-icon">📦</div>
              <h3 className="platform-detail-title">FBA Logistics & Restock Forecasting</h3>
              <p className="platform-detail-desc">
                Inventory shipment creation, customs prep into Riyadh/Jeddah/Dubai fulfillment centers, pallet labeling, and stranded inventory resolution.
              </p>
            </div>

            <div className="platform-detail-card">
              <div className="platform-detail-icon">⭐</div>
              <h3 className="platform-detail-title">Review Acceleration & Compliance</h3>
              <p className="platform-detail-desc">
                Amazon Vine enrollment strategies, automated TOS-compliant review request sequencing, and negative feedback dispute removal.
              </p>
            </div>

            <div className="platform-detail-card">
              <div className="platform-detail-icon">📊</div>
              <h3 className="platform-detail-title">Weekly P&L and Profit Analytics</h3>
              <p className="platform-detail-desc">
                Transparent attribution dashboards tracking true net profit after FBA pick/pack fees, storage costs, refunds, and advertising spend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
