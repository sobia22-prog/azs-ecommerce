import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function MarketplacesDivisionPage({ onOpenModal }) {
  useSEO({
    title: 'Amazon, Noon & Trendyol Marketplace Management Agency | KSA & USA — AZS Solutions',
    description: 'Scale your marketplace revenue across Amazon KSA, Noon, Trendyol, and Amazon USA with AZS Solutions. Certified SPN partner delivering 3.4x average GMV growth.',
    keywords: 'Amazon agency KSA, Noon marketplace management, Trendyol GCC expansion, Amazon USA expansion, Buy Box protection, Arabic SEO, marketplace management agency',
    ogTitle: 'Amazon, Noon & Trendyol Marketplace Management Agency | AZS Solutions',
    ogDescription: 'End-to-end management for Amazon, Noon, Trendyol, and Amazon USA across GCC, USA, and UK.',
    canonicalPath: '/marketplace-management'
  });

  const platforms = [
    {
      id: 'amazon-ksa',
      name: 'Amazon Saudi Arabia (Amazon.sa)',
      sub: 'KSA Flagship Marketplace & Riyadh/Jeddah FBA Logistics',
      icon: '🇸🇦',
      badge: 'MENA #1 Channel',
      desc: 'Complete Seller Central & Vendor Central management, algorithmic Buy Box defense, Arabic/English A+ Brand Story design, and Sponsored Products/Brands/Display campaign scaling.',
      link: '/marketplace-management/amazon-ksa',
      metrics: {
        highlight: '14.43x ROAS',
        sub: 'HomeMaster Appliances Flagship',
        volume: 'SAR 120.8K/wk'
      },
      features: [
        'Sponsored Products, Brands & Display PPC Architecture',
        'Riyadh & Jeddah FBA Inbound Shipment Routing',
        'Hijacker Suppression & Buy Box Win-Rate Optimization (>96%)',
        'Arabic Keyword Indexing & High-Converting Brand Stores'
      ]
    },
    {
      id: 'amazon-usa',
      name: 'Amazon USA Expansion (Amazon.com)',
      sub: 'North American Omnichannel, Amazon DSP & Nationwide FBA',
      icon: '🇺🇸',
      badge: 'Global Scale',
      desc: 'High-velocity expansion into Amazon.com USA. Programmatic Amazon DSP, multi-touch AMC attribution, nationwide FBA inventory distribution, and customs/tariff compliance.',
      link: '/marketplace-management/amazon-usa',
      metrics: {
        highlight: '11.20x ROAS',
        sub: 'NuvoAura Beauty Flagship',
        volume: '$48.9K Ad Sales'
      },
      features: [
        'Programmatic Amazon Demand-Side Platform (DSP) Media',
        'Amazon Marketing Cloud (AMC) Multi-Touch Attribution',
        'Nationwide FBA Restock Limit & Inventory Velocity Hygiene',
        'A+ Brand Storytelling & US Cross-Border Tariff Optimization'
      ]
    },
    {
      id: 'noon',
      name: 'Noon Marketplace GCC',
      sub: 'KSA & UAE Seller Lab, Yellow Friday & FBN Express Routing',
      icon: '🟡',
      badge: 'GCC Leader',
      desc: 'Noon Seller Lab onboarding, Fulfilled By Noon (FBN) direct warehouse routing, Yellow Friday mega-campaign execution, and localized GCC promotions.',
      link: '/marketplace-management/noon',
      metrics: {
        highlight: '6.85x ROAS',
        sub: 'Creative Things Noon Performance',
        volume: 'SAR 208.5K GMV'
      },
      features: [
        'Fulfilled by Noon (FBN) Express Badge & Priority Delivery',
        'Yellow Friday, Ramadan, and Monthly Mega-Sale Execution',
        'Noon Ad Boost Bidding & Keyword Target Optimization',
        'Cross-Docking & GCC Customs Clearance Coordination'
      ]
    },
    {
      id: 'trendyol',
      name: 'Trendyol Cross-Border Hub',
      sub: 'Turkey & Europe to Saudi Arabia & UAE Fast-Growth Corridor',
      icon: '🇹🇷',
      badge: 'Official Partner',
      desc: 'Strategic expansion onto the GCC’s fastest growing cross-border platform. Turnkey catalog translation, automated pricing harmonization, and localized fulfillment routing.',
      link: '/marketplace-management/trendyol',
      metrics: {
        highlight: '7.80x ROAS',
        sub: 'Eurasia Lifestyle Direct',
        volume: 'SAR 145K/mo'
      },
      features: [
        'Cross-Border SKU Onboarding & Localized Arabic Attribute Mapping',
        'Flash Sale Participation & Trendyol Sponsored Promotions',
        'GCC Customs, Tax & Localized Duty Reconciliation',
        'Fast-Track Fulfillment Routing with < 72h Delivery SLAs'
      ]
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Institutional Division"
        title="Marketplaces"
        highlight="Growth Division"
        subtitle="End-to-end marketplace management, catalog syndication, sponsored advertising, and algorithmic Buy Box defense across Amazon, Noon, and Trendyol in Saudi Arabia, UAE, USA, and the UK."
        breadcrumbs={[{ label: 'Marketplaces Division' }]}
        primaryCtaText="Book Marketplace Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaLink="/case-studies"
        metrics={[
          { val: '$142.8M+', label: 'Marketplace GMV', sub: 'Managed across portfolios' },
          { val: '93.4%', label: 'Avg. Buy Box Rate', sub: 'Algorithmic pricing & suppression defense' },
          { val: '3 Premier Corridors', label: 'GCC • USA • UK', sub: 'Unified multi-region ops' },
          { val: '100% Turnkey', label: 'A-to-Z Execution', sub: 'From catalog to ad scaling' }
        ]}
      />

      <section className="section">
        <div className="container">
          {/* Division Switcher Ribbon */}
          <div className="division-split-header">
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--neon-mint)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Operational Division
              </span>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', margin: '4px 0 0' }}>
                Division 1: Marketplaces vs Division 2: Shopify & D2C
              </h3>
            </div>
            <div className="division-toggle-group">
              <span className="division-nav-btn active">📦 Marketplaces Division</span>
              <Link to="/shopify" className="division-nav-btn">🛍️ Shopify & D2C Division</Link>
            </div>
          </div>

          <div className="section-header" style={{ textAlign: 'left', margin: '40px 0 20px' }}>
            <div className="badge-pill">Covered Platforms</div>
            <h2>Dominating Global & Regional Corridors</h2>
            <p>
              Select a dedicated platform hub below for platform-specific capabilities, case studies, and execution systems:
            </p>
          </div>

          {/* 3 Dedicated Platform Cards */}
          <div className="platform-detail-grid">
            {platforms.map((p) => (
              <div className="platform-detail-card" key={p.id}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div className="platform-detail-icon">{p.icon}</div>
                  <span className="growth-badge">{p.badge}</span>
                </div>

                <h3 className="platform-detail-title">{p.name}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--neon-cyan)', marginBottom: '12px', fontWeight: 600 }}>{p.sub}</p>
                <p className="platform-detail-desc">{p.desc}</p>

                {/* Live Verified Metric Box */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px',
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>
                      {p.metrics.highlight}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{p.metrics.sub}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                      {p.metrics.volume}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Verified Metric</div>
                  </div>
                </div>

                <ul className="platform-checklist">
                  {p.features.map((feat, idx) => (
                    <li key={idx} className="platform-checklist-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '28px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <Link to={p.link} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Explore Dedicated {p.name} Hub</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Systems Matrix */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            marginTop: '60px'
          }}>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
              <div className="badge-pill">Institutional Infrastructure</div>
              <h2>How AZS Executes Marketplace Dominance</h2>
              <p>
                We do not use cookie-cutter software bots. Every marketplace account is steered by dedicated brand managers, Arabic native listing copywriters, PPC optimization specialists, and account health guardians.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '30px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '10px' }}>🛡️</div>
                <h4 style={{ color: 'var(--text-heading)', marginBottom: '8px' }}>Buy Box & IP Defense</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  Automated scraping of unauthorized third-party sellers, proactive brand registry enforcement, and algorithmic dynamic repricing maintaining &gt;90% Buy Box occupancy.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '10px' }}>🎯</div>
                <h4 style={{ color: 'var(--text-heading)', marginBottom: '8px' }}>PPC Campaign Structuring</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  Exact, phrase, and broad keyword segmentation, dayparting, negative keyword harvesting, and Sponsored Brands video units delivering sub-15% ACOS.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '10px' }}>🇸🇦</div>
                <h4 style={{ color: 'var(--text-heading)', marginBottom: '8px' }}>Arabic Localization</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  Native GCC Arabic dialect keyword search volume indexing, cultural compliance, and high-conversion Arabic A+ infographic storytelling.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '10px' }}>🚚</div>
                <h4 style={{ color: 'var(--text-heading)', marginBottom: '8px' }}>FBA / FBN Logistics</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  Warehouse routing into Riyadh, Jeddah, and Dubai fulfillment nodes, avoiding stockouts during Ramadan and White/Yellow Friday mega-sales.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link to="/book-audit" className="btn btn-primary" style={{ padding: '14px 32px' }}>
                <span>Schedule Free Marketplace Strategy Audit</span>
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
