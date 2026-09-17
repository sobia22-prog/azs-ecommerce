import React, { useState } from 'react';
import { Link, useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';
import RobotCompanion from '../components/RobotCompanion';

const SERVICES_DATA = {
  'store-setup': {
    id: 'store-setup',
    num: '01',
    title: 'Store Setup & Brand Onboarding',
    metaTitle: 'Marketplace Store Setup & Amazon Brand Registry Agency | AZS Solutions',
    metaDesc: 'Turnkey marketplace onboarding across Amazon Brand Registry (KSA, USA, UK), Noon Seller Lab, Trendyol GCC, and bilingual Shopify storefronts.',
    tagline: 'Institutional Foundations for Enterprise Brand Launch',
    overview: 'Launching across multi-regional marketplaces requires bulletproof regulatory compliance, brand registry approval, trademark authorization, and localized storefront architecture. We orchestrate the complete onboarding sprint in under 30 days.',
    deliverables: [
      'Amazon Brand Registry enrollment across Saudi Arabia (Amazon.sa), UAE, USA, and UK',
      'Noon KSA & UAE Seller Lab verification and warehouse routing setup',
      'Trendyol Turkey-to-Gulf seller gateway and GCC cross-border authorization',
      'Custom bilingual Arabic (RTL) & English Shopify theme architecture',
      'GCC payment gateway integration: Mada, Tabby, Tamara BNPL, and Apple Pay',
      'ZATCA Saudi e-invoicing and UK HMRC VAT registration compliance'
    ],
    sla: '30-Day Turnkey Launch Sprint',
    kpi: '100% Brand Verification Rate',
    icon: '🏪'
  },
  'catalog-optimization': {
    id: 'catalog-optimization',
    num: '02',
    title: 'Catalog Optimization & Arabic/EN SEO',
    metaTitle: 'Amazon & Marketplace Catalog SEO Optimization Agency | AZS Solutions',
    metaDesc: 'Algorithmic Arabic and English listing optimization, parent-child variation architecture, and premium A+ Brand Story design for Amazon and Noon.',
    tagline: 'Dominating Search Engine Results Across Amazon & Noon',
    overview: 'Listing optimization in the GCC requires deep native linguistic harvesting. Direct machine translation fails to capture high-intent regional slang and cultural search behaviors across Riyadh, Jeddah, and Dubai. We build algorithmic bilingual catalogs engineered for peak organic rank.',
    deliverables: [
      'Bilingual Arabic (Saudi/Gulf vernacular) and English keyword harvesting',
      'Premium A+ Content (EBC), Brand Story modules, and high-conversion comparison charts',
      'Complex parent-child variation architecture maximizing review consolidation',
      'Backend search terms, subject matter attributes, and algorithmic indexing hygiene',
      'Noon product card optimization, key feature bullets, and category browse path mapping',
      '3D photo rendering, infographics, and mobile-first listing image stacks'
    ],
    sla: 'Continuous Weekly Indexing Audits',
    kpi: '+38% Organic Conversion Lift',
    icon: '🔍'
  },
  'pricing-inventory': {
    id: 'pricing-inventory',
    num: '03',
    title: 'Dynamic Pricing & Inventory Governance',
    metaTitle: 'Marketplace Dynamic Repricing & Inventory Forecasting | AZS Solutions',
    metaDesc: 'Automated Buy Box repricing algorithms, stockout defense, and 30/60/90-day run-rate inventory forecasting for Amazon FBA and Noon FBN.',
    tagline: 'Guarding Margins & Maximizing Buy Box Share 24/7',
    overview: 'Winning the Buy Box while protecting gross profit requires sophisticated repricing logic that accounts for referral fees, fulfillment costs, and competitor stock levels. Our systems eliminate margin erosion and prevent catastrophic stockouts.',
    deliverables: [
      'Algorithmic Buy Box repricing rules customized by minimum margin thresholds',
      '30/60/90-day seasonal inventory velocity forecasting for peak events (White Friday, Prime Day)',
      'Automated stockout alerts preventing rank degradation and Buy Box loss',
      'FBA/FBN reorder point calculations factoring in customs clearance and port delays',
      'Dead stock and slow-moving inventory liquidation campaigns to avoid aged storage surcharges',
      'MAP (Minimum Advertised Price) monitoring and unauthorized seller detection'
    ],
    sla: '15-Minute Repricing Cycles',
    kpi: '93.4% Avg Buy Box Win Rate',
    icon: '⚖️'
  },
  'orders-fulfillment': {
    id: 'orders-fulfillment',
    num: '04',
    title: 'Orders, FBA & FBN Logistics Management',
    metaTitle: 'Amazon FBA & Fulfilled by Noon (FBN) Logistics Agency | AZS Solutions',
    metaDesc: 'End-to-end inbound logistics, FBA prep, FBN direct appointments, and cross-border customs clearance across KSA, UAE, USA, and the UK.',
    tagline: 'Frictionless Inbound Flow from Factory to Consumer',
    overview: 'Managing inventory across Amazon FBA (Riyadh, Dubai, US, UK) and Fulfilled by Noon (FBN) demands rigorous appointment booking, barcode prep, and cross-border freight coordination. We handle the entire supply chain pipeline.',
    deliverables: [
      'FBA shipment creation, 2D barcode carton labeling, and pallet configuration',
      'Noon FBN ASN (Advanced Shipping Notice) generation and warehouse delivery scheduling',
      'Cross-border freight forwarding, customs clearance, and GCC SASO/SABER compliance',
      'Returns inspection, unsellable inventory removals, and reconciliation reimbursement claims',
      'Customer service messaging, order defect rate (ODR) management, and A-to-Z claim defense',
      'Pan-European FBA routing and UK 3PL warehousing integration'
    ],
    sla: '99.8% On-Time Inbound Delivery',
    kpi: '<0.2% Order Defect Rate',
    icon: '📦'
  },
  'advertising-growth': {
    id: 'advertising-growth',
    num: '05',
    title: 'Performance Advertising & Media Buying',
    metaTitle: 'Amazon PPC, Noon Ads & Meta/TikTok Growth Agency | AZS Solutions',
    metaDesc: 'Full-funnel media buying across Amazon SP/SB/SD, Noon on-site ads, Meta Advantage+, and TikTok UGC funnels delivering verified 8.4x blended ROAS.',
    tagline: 'Target ACOS Control with Aggressive Revenue Scale',
    overview: 'We treat advertising spend as an investment portfolio governed by TACoS (Total Advertising Cost of Sales). By combining on-platform retail media (Amazon & Noon) with off-platform social traffic (Meta & TikTok), we unlock massive blended efficiency.',
    deliverables: [
      'Amazon Sponsored Products (SP), Sponsored Brands (SB), and Sponsored Display (SD) architecture',
      'Noon Seller Lab on-site bid automation and Yellow Friday promotional campaign takeovers',
      'Trendyol flash sale boosting and in-app banner placement management',
      'Meta Advantage+ catalog sales, high-converting UGC video creative, and dynamic retargeting',
      'TikTok creator collaborations, Spark Ads, and impulse conversion acceleration',
      'Day-parting bid optimization and negative keyword harvesting algorithms'
    ],
    sla: 'Daily Bid & Search Term Optimization',
    kpi: '8.40x Blended Portfolio ROAS',
    icon: '📈'
  },
  'reporting-analytics': {
    id: 'reporting-analytics',
    num: '06',
    title: 'Executive Reporting & Data Intelligence',
    metaTitle: 'Ecommerce Executive Reporting & Profit Analytics | AZS Solutions',
    metaDesc: 'Consolidated multi-marketplace executive reporting uniting Amazon, Noon, Trendyol, and Shopify into a transparent, single-source-of-truth portal.',
    tagline: 'Radical Financial Transparency & Accountable Strategy',
    overview: 'Enterprise brands cannot afford to wait 30 days for outdated monthly PDF decks. We provide unified, real-time dashboards consolidating sales, ad spend, FBA/FBN fees, returns, and net SKU contribution margins across all sales channels.',
    deliverables: [
      'Live multi-region executive dashboard uniting GCC, USA, and UK operations',
      'SKU-level net profit and contribution margin analysis accounting for all platform fees',
      'Weekly TACoS trend reports and ad cannibalization diagnostic checks',
      'Customer lifetime value (LTV) and repurchase cohort analysis on Shopify',
      'Bi-weekly strategic executive alignment calls with dedicated Account Director',
      'Competitor share-of-voice tracking and market price index alerts'
    ],
    sla: '24/7 Live Real-Time Dashboard Access',
    kpi: '100% Reconciled Financials',
    icon: '📊'
  }
};

export default function ServicesPage({ defaultSlug }) {
  const { path, navigate } = useRouter();
  
  // Extract slug if /services/:slug or /marketplace-management/:subservice
  const pathParts = path.split('/').filter(Boolean);
  let selectedSlug = 'store-setup';
  if (path.includes('listing-optimization')) selectedSlug = 'catalog-optimization';
  else if (path.includes('ppc-advertising')) selectedSlug = 'performance-ads';
  else if (defaultSlug && SERVICES_DATA[defaultSlug]) selectedSlug = defaultSlug;
  else if (pathParts[1] && SERVICES_DATA[pathParts[1]]) selectedSlug = pathParts[1];

  const isDetailView = (pathParts.length > 1 && SERVICES_DATA[pathParts[1]]) || path.includes('listing-optimization') || path.includes('ppc-advertising') || Boolean(defaultSlug);
  const service = SERVICES_DATA[selectedSlug];

  useSEO({
    title: isDetailView ? service.metaTitle : 'End-to-End Marketplace & E-commerce Services | AZS Solutions',
    description: isDetailView ? service.metaDesc : 'Discover our 6 core operational services: Store Setup, Catalog Optimization, Dynamic Pricing, Fulfillment Logistics, Performance Advertising, and Executive Analytics.',
    keywords: 'marketplace management services, Amazon agency Saudi Arabia, Noon operations partner, Trendyol catalog management, ecommerce advertising GCC',
    ogTitle: isDetailView ? service.title : 'What We Manage: 6 Core Services | AZS Solutions',
    ogDescription: service.overview,
    canonicalPath: isDetailView ? `/services/${service.id}` : '/services'
  });

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge={isDetailView ? `Engine ${service.num} • What We Manage` : "04 • Operational Service Architecture"}
        title={isDetailView ? service.title : "The Complete"}
        highlight={isDetailView ? "" : "Operational Service Stack"}
        subtitle={isDetailView ? service.tagline : "Six dedicated operational engines delivering execution excellence across Amazon (KSA, USA, UK), Noon, Trendyol GCC, and Shopify D2C."}
        breadcrumbs={
          isDetailView
            ? [
                { label: 'Services', link: '/services' },
                { label: service.title }
              ]
            : [
                { label: 'Services' }
              ]
        }
        primaryCtaText="Book Strategic Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText={isDetailView ? "Browse All Services" : "Explore Case Studies"}
        secondaryCtaLink={isDetailView ? "/services" : "/case-studies"}
        metrics={
          isDetailView
            ? [
                { val: service.sla, label: 'Execution SLA', sub: 'Guaranteed milestone pacing' },
                { val: service.kpi, label: 'Benchmark KPI', sub: 'Historical brand impact' }
              ]
            : [
                { val: '6 Engines', label: 'Operational Services', sub: 'Setup, Catalog, Repricing, Logistics, Ads, BI' },
                { val: '100% SLA', label: 'Guaranteed Delivery', sub: 'Account health & margin defense' },
                { val: '4 Markets', label: 'Geographic Coverage', sub: 'Saudi Arabia, UAE, USA & UK' }
              ]
        }
      />

      {/* Interactive Service Selector Bar */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '40px' }}>
            {Object.values(SERVICES_DATA).map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(`/services/${item.id}`)}
                className={`deck-pill-btn ${selectedSlug === item.id ? 'active' : ''}`}
                style={{ justifyContent: 'center', padding: '12px 14px', width: '100%', borderRadius: '12px' }}
              >
                <span style={{ marginRight: '6px' }}>{item.icon}</span>
                <span>{item.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>

          {/* Active Service Detailed View Card */}
          <div className="mkt-card" style={{ padding: '40px', background: 'rgba(11, 17, 29, 0.95)', border: '1px solid var(--neon-mint)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontSize: '2.2rem' }}>{service.icon}</span>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--neon-mint)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Service Module {service.num}
                  </div>
                  <h2 style={{ fontSize: '2rem', color: 'var(--text-pure)', margin: '4px 0' }}>{service.title}</h2>
                  <div style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>{service.tagline}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ background: 'rgba(0, 245, 155, 0.1)', border: '1px solid rgba(0, 245, 155, 0.3)', padding: '10px 18px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Benchmark KPI</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--neon-mint)' }}>{service.kpi}</div>
                </div>
                <div style={{ background: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.3)', padding: '10px 18px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Service SLA</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--neon-cyan)' }}>{service.sla}</div>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: '32px' }}>
              {service.overview}
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-pure)', marginBottom: '16px' }}>Core Deliverables & Execution Scope</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '12px', marginBottom: '36px' }}>
              {service.deliverables.map((deliv, i) => (
                <div key={i} className="platform-checklist-item" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ fontSize: '0.92rem' }}>{deliv}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/book-audit" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                Book Discovery Call for {service.title.split('&')[0].trim()} ➔
              </Link>
              <Link to="/case-studies" className="btn btn-secondary" style={{ padding: '14px 28px' }}>
                View Verified Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Robot Companion */}
      <RobotCompanion />
    </div>
  );
}
