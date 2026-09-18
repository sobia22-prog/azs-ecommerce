import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function ShopifyDivisionPage({ onOpenModal }) {
  useSEO({
    title: 'Shopify & DTC Growth Agency — Meta, TikTok & Google Ads | AZS Solutions',
    description: 'Scale DTC brands with high-converting Shopify Plus stores, Tabby/Tamara BNPL integration, and high-ROAS Meta, TikTok & Google performance marketing.',
    keywords: 'shopify agency Saudi Arabia, shopify DTC growth agency, shopify store management KSA, shopify agency Dubai, Meta ads ecommerce KSA, TikTok ads agency GCC, ecommerce conversion rate optimization agency',
    ogTitle: 'Shopify & DTC Growth Agency — Meta, TikTok & Google Ads | AZS Solutions',
    ogDescription: 'Scale your DTC brand with high-converting Shopify Plus storefronts, localized GCC checkout, and 4.62x blended ROAS across Meta, TikTok & Google.',
    canonicalPath: '/shopify-dtc'
  });

  const channels = [
    {
      name: 'Meta Ads (Instagram & Facebook)',
      icon: '🔵',
      badge: 'Acquisition Engine',
      desc: 'Broad targeting with dynamic creative testing (DCT). High-impact founder videos, UGC unboxings, and localized Arabic carousels delivering predictable customer acquisition cost (CAC).',
      metric: '4.85x Top Campaign ROAS'
    },
    {
      name: 'TikTok Shop & Creator Spark Ads',
      icon: '🎵',
      badge: 'High-Velocity Viral',
      desc: 'GCC creator seeding and native TikTok Spark Ads. High-conversion micro-influencer product demos in Saudi & Emirati dialects converting mobile shoppers directly in-app.',
      metric: '+188% Gen-Z Order Lift'
    },
    {
      name: 'Google Performance Max & Search',
      icon: '🔴',
      badge: 'High-Intent Capture',
      desc: 'Full-funnel Google Shopping, Search, and P-Max asset groups. Dominating brand keywords and high-intent transactional search queries across Saudi Arabia, UAE, and the UK.',
      metric: '5.20x Search ROAS'
    },
    {
      name: 'GCC Checkout & BNPL Optimization',
      icon: '💳',
      badge: 'Conversion Multiplier',
      desc: 'One-click frictionless checkout integrated with Tamara, Tabby (Buy Now Pay Later), Mada cards, Apple Pay, and automated cash-on-delivery (COD) fraud verification.',
      metric: '+38% Checkout Completion'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Institutional Division"
        title="Shopify & D2C"
        highlight="Performance Division"
        subtitle="Bespoke high-converting storefronts, paid media acquisition on Meta, TikTok & Google, and frictionless GCC localization. We turn direct-to-consumer stores into profitable eight-figure growth engines."
        breadcrumbs={[{ label: 'Shopify & D2C Division' }]}
        primaryCtaText="Book Shopify Growth Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Inspect LIVORA Case Study"
        secondaryCtaLink="#livora-proof"
        metrics={[
          { val: '$50.4K/mo', label: 'Flagship D2C Rev', sub: 'LIVORA Modern Essentials' },
          { val: '4.62x', label: 'Blended Paid ROAS', sub: 'Meta + TikTok + Google' },
          { val: '+104%', label: '60-Day Sales Lift', sub: 'Post-storefront overhaul' },
          { val: '1.2s', label: 'Mobile Page Speed', sub: 'Sub-second GCC CDN' }
        ]}
      />

      <section className="section">
        <div className="container">
          {/* Division Switcher Ribbon */}
          <div className="division-split-header">
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--neon-cyan)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Operational Division
              </span>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', margin: '4px 0 0' }}>
                Division 2: Shopify & D2C vs Division 1: Marketplaces
              </h3>
            </div>
            <div className="division-toggle-group">
              <Link to="/marketplaces" className="division-nav-btn">📦 Marketplaces Division</Link>
              <span className="division-nav-btn active">🛍️ Shopify & D2C Division</span>
            </div>
          </div>

          {/* Flagship Case Study Showcase: LIVORA Modern Essentials */}
          <div id="livora-proof" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            marginBottom: '60px',
            marginTop: '20px',
            position: 'relative'
          }}>
            <div className="badge-pill" style={{ marginBottom: '12px' }}>Verified D2C Proof Deep Dive</div>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-heading)', marginBottom: '10px' }}>
              LIVORA Modern Essentials: <span className="gradient-text">$50.4K/mo D2C Scale</span>
            </h2>
            <p style={{ color: 'var(--text-body)', maxWidth: '780px', marginBottom: '30px' }}>
              How AZS overhauled an apparel brand’s sluggish web shop into an ultra-fast mobile storefront, launched creator-led Meta and TikTok acquisition campaigns, and integrated Tamara/Tabby BNPL for a 104% revenue surge.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 210, 255, 0.25)' }}
                onClick={() => onOpenModal('/assets/livora_shopify_dashboard.svg', 'LIVORA Modern Essentials Verified Shopify Dashboard ($50,461.90/mo)')}
              >
                <img src="/assets/livora_shopify_dashboard.svg" alt="LIVORA Shopify Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
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
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Monthly Sales</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>$50,461.90</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>SAR 189,200/mo</div>
                  </div>

                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Blended ROAS</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>4.62x</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Meta + TikTok Ads</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Dispatched Units</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>1,680 Units</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>+104% Monthly Lift</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Repeat Rate</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>42.1%</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>Klaviyo Lifecycle Retention</div>
                  </div>
                </div>

                <blockquote style={{
                  borderLeft: '3px solid var(--neon-cyan)',
                  paddingLeft: '16px',
                  color: 'var(--text-heading)',
                  fontStyle: 'italic',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  "Doubled monthly revenue within 60 days of storefront redesign, creator ad scaling, and local GCC payment gateway optimization."
                </blockquote>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link to="/book-audit" className="btn btn-primary">
                    <span>Scale Your Shopify Brand</span>
                  </Link>
                  <Link to="/case-studies/livora" className="btn btn-secondary">
                    <span>Read Full LIVORA DTC Case Study ➔</span>
                  </Link>
                </div>
                <div style={{ marginTop: '14px' }}>
                  <Link to="/programs-pricing" style={{ fontSize: '0.84rem', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none' }}>
                    View Shopify & DTC Program Tiers & Indicative Pricing ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Paid Media & Growth Channels Grid */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
            <div className="badge-pill">Paid Media Engine</div>
            <h2>Full-Funnel Acquisition Architecture</h2>
            <p>
              We drive qualified, purchase-ready traffic from the platforms where modern consumers discover products:
            </p>
          </div>

          <div className="platform-detail-grid" style={{ marginBottom: '60px' }}>
            {channels.map((ch, i) => (
              <div className="platform-detail-card" key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div className="platform-detail-icon">{ch.icon}</div>
                  <span className="growth-badge">{ch.badge}</span>
                </div>
                <h3 className="platform-detail-title">{ch.name}</h3>
                <p className="platform-detail-desc">{ch.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.85rem', color: 'var(--neon-mint)', fontWeight: 700 }}>
                  ⚡ {ch.metric}
                </div>
              </div>
            ))}
          </div>

          {/* GCC Localized Checkout Showcase */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px'
          }}>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '20px' }}>
              <div className="badge-pill">GCC Checkout Optimization</div>
              <h2>Removing Friction in Saudi & UAE Checkout</h2>
              <p>
                Over 68% of GCC shopping carts are abandoned if local payment methods are missing. AZS configures your checkout stack with the trusted payment rails Gulf consumers demand:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '24px' }}>
              <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '18px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '4px' }}>💳 Mada Debit Cards</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>Over 80% of online card transactions in Saudi Arabia happen via Mada.</p>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '18px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ff5a5f', marginBottom: '4px' }}>🛍️ Tamara (BNPL)</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>Splitting payments into 4 interest-free installments boosts AOV by +42%.</p>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '18px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#3ee59e', marginBottom: '4px' }}>✨ Tabby (BNPL)</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>The premier Buy Now Pay Later network across UAE and Saudi Arabia.</p>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '18px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--neon-cyan)', marginBottom: '4px' }}>🍎 Apple Pay</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>1-touch biometric mobile checkout eliminating address entry friction.</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <Link to="/book-audit" className="btn btn-primary" style={{ padding: '14px 32px' }}>
                <span>Request Shopify Storefront Audit</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
