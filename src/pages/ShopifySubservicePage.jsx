import React from 'react';
import { Link, useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

const SHOPIFY_SUBSERVICES = {
  'store-setup': {
    slug: 'store-setup',
    shortLabel: 'Store',
    tabLabel: 'Store Setup',
    title: 'Store Setup & Theme',
    highlight: 'Architecture',
    metaTitle: 'Bilingual Arabic & English Shopify Store Setup Agency | AZS Solutions',
    metaDesc: 'Custom high-performance Shopify storefronts built with native Arabic RTL layouts, seamless Mada, Tabby, Tamara BNPL, and lightning-fast GCC checkout.',
    keywords: 'bilingual shopify store setup, shopify agency Saudi Arabia, arabic RTL shopify theme, Tabby Tamara checkout integration, Mada payment gateway shopify',
    subtitle: 'High-performing Shopify storefronts pre-integrated with GCC payment gateways and native Arabic layouts.',
    metrics: [
      { val: '1.2s', label: 'Load Speed', sub: 'Core Web Vitals' },
      { val: '100%', label: 'Arabic RTL', sub: 'Native design' },
      { val: '48%', label: 'BNPL Share', sub: 'Tabby & Tamara' },
      { val: '+38%', label: 'Mobile CVR', sub: '1-page checkout' }
    ],
    deliverables: [
      'Custom bilingual Arabic (RTL) & English Shopify theme architecture',
      'One-click GCC payment gateways: Mada, Tabby, Tamara BNPL, and Apple Pay',
      'ZATCA Saudi e-invoicing and tax compliance integration',
      'Automated local GCC carrier shipping logic (SMSA, Aramex, DHL Express)',
      'High-converting product detail page (PDP) design with sticky buy button',
      'Native customer review harvesting with photo and video proof modules'
    ]
  },
  'meta-ads': {
    slug: 'meta-ads',
    shortLabel: 'Meta',
    tabLabel: 'Meta Ads',
    title: 'Meta Performance Ads',
    highlight: '(IG & FB)',
    metaTitle: 'Meta Ads Agency for Ecommerce (Instagram & Facebook) | AZS Solutions',
    metaDesc: 'Scalable Meta advertising for ecommerce brands across Saudi Arabia and the GCC. Advantage+ catalog campaigns, UGC video reels, and high-frequency retargeting.',
    keywords: 'meta ads agency ecommerce, instagram ads agency Saudi Arabia, facebook ecommerce marketing GCC, Advantage+ shopping campaigns, D2C paid acquisition',
    subtitle: 'High-ROAS Meta advertising across Saudi Arabia and GCC markets.',
    metrics: [
      { val: '4.62x', label: 'Blended ROAS', sub: 'LIVORA benchmark' },
      { val: '14 Days', label: 'Refresh Pace', sub: 'Zero ad fatigue' },
      { val: 'SAR 39', label: 'Target CAC', sub: 'Customer cost' },
      { val: '+104%', label: 'MoM Scale', sub: 'Revenue velocity' }
    ],
    deliverables: [
      'Advantage+ Shopping Campaigns (ASC) structured for maximum algorithmic efficiency',
      'Native GCC lifestyle UGC & creator video ads in Saudi & Gulf vernacular',
      'Dynamic Product Ads (DPA) targeting abandoned carts and high-intent shoppers',
      'Conversions API (CAPI) server-side tracking setup bypassing browser restrictions',
      'Creative testing matrix: testing 15+ hooks, angles, and formats weekly',
      'Customer Lifetime Value (LTV) cohort retargeting and VIP reactivation'
    ]
  },
  'tiktok-ads': {
    slug: 'tiktok-ads',
    shortLabel: 'TikTok',
    tabLabel: 'TikTok Ads',
    title: 'TikTok Ads & Creative',
    highlight: 'Viral Acquisition',
    metaTitle: 'TikTok Shop & Creator Ads Agency for Ecommerce | AZS Solutions',
    metaDesc: 'Drive viral sales and scale TikTok Shop storefronts across the GCC. Creator Spark Ads, localized influencer hooks, and high-conversion impulse funnels.',
    keywords: 'tiktok shop agency GCC, tiktok ads ecommerce Saudi Arabia, tiktok creator marketing agency, spark ads GCC, tiktok D2C sales',
    subtitle: 'Scale TikTok Shop and creator ad funnels across the GCC.',
    metrics: [
      { val: '5.40x', label: 'Spark ROAS', sub: 'Creator ads' },
      { val: '68%', label: 'Watch Rate', sub: 'Creative hooks' },
      { val: '72h', label: 'Launch Speed', sub: 'Trend response' },
      { val: '30+', label: 'GCC Creators', sub: 'Vetted network' }
    ],
    deliverables: [
      'TikTok Shop native catalog onboarding, seller center sync, and fulfillment routing',
      'Spark Ads amplification of authentic creator testimonials and unboxing videos',
      'Localized Saudi & GCC Arabic humor, lifestyle framing, and cultural trends',
      'TikTok Pixel with Advanced Matching and Events API server integration',
      'Impulse purchase checkout optimization lowering cart abandonment rates',
      'Whitelisted creator account advertising maximizing social proof authority'
    ]
  },
  'google-ads': {
    slug: 'google-ads',
    shortLabel: 'Google',
    tabLabel: 'Google Ads',
    title: 'Google Shopping & Ads',
    highlight: 'Intent Capture',
    metaTitle: 'Google Performance Max (PMax) & Shopping Agency | AZS Solutions',
    metaDesc: 'Capture high-intent commercial searchers across Google Shopping, Search, and YouTube with precision Performance Max campaigns for ecommerce brands.',
    keywords: 'google performance max agency, google shopping agency Saudi Arabia, ecommerce google ads GCC, high intent search capture, merchant center management',
    subtitle: 'Capture high-intent searches across Google Shopping, Search, and YouTube.',
    metrics: [
      { val: '6.85x', label: 'Search ROAS', sub: 'PMax benchmark' },
      { val: '64%', label: 'Search Share', sub: 'High-intent capture' },
      { val: 'SAR 399', label: 'Average Order', sub: '+42% basket size' },
      { val: '99.8%', label: 'Feed Health', sub: 'Zero disapprovals' }
    ],
    deliverables: [
      'Google Performance Max (PMax) campaigns across Search, Shopping, and YouTube',
      'Google Merchant Center feed hygiene and localized SAR/AED currency mapping',
      'Negative keyword sculpting shielding budget from low-intent research queries',
      'Enhanced Conversions tracking and profit-driven smart bidding (tROAS & tCPA)',
      'High-converting YouTube video action campaigns building brand recall',
      'Brand defense campaigns safeguarding proprietary search terms from competitors'
    ]
  },
  'cro': {
    slug: 'cro',
    shortLabel: 'CRO',
    tabLabel: 'CRO Engine',
    title: 'Conversion Optimization',
    highlight: '(CRO)',
    metaTitle: 'E-commerce Conversion Rate Optimization (CRO) Agency | AZS Solutions',
    metaDesc: 'Double your ecommerce revenue without spending more on ads. Scientific conversion rate optimization (CRO), mobile friction elimination, and AOV expansion for Shopify brands.',
    keywords: 'ecommerce conversion rate optimization agency, shopify CRO service, storefront CRO KSA USA, checkout optimization GCC, mobile conversion rate lift',
    subtitle: 'Turn mobile visitors into paying customers by eliminating checkout friction.',
    metrics: [
      { val: '+122%', label: 'CVR Lift', sub: 'Post-CRO result' },
      { val: '3.82%', label: 'Store CVR', sub: 'Top-tier benchmark' },
      { val: '+42%', label: 'AOV Growth', sub: '1-click upsells' },
      { val: '24/7', label: 'Heatmaps', sub: 'Behavioral analytics' }
    ],
    deliverables: [
      'Comprehensive UX audit of the entire mobile customer buying journey',
      'Mobile checkout friction elimination: sticky add-to-bag, 1-click address autofill',
      'Post-purchase and in-cart smart upsell funnels expanding Average Order Value (AOV)',
      'Heatmap, scroll-map, and user session recording behavioral drop-off analysis',
      'A/B split testing of high-impact hero value propositions and trust badges',
      'Page speed optimization: asset compression and JavaScript payload reduction'
    ]
  }
};

export default function ShopifySubservicePage() {
  const { path } = useRouter();
  
  // Extract slug: /shopify-dtc/:slug
  const pathParts = path.split('/').filter(Boolean);
  const slug = pathParts[1] && SHOPIFY_SUBSERVICES[pathParts[1]] ? pathParts[1] : 'store-setup';
  const subservice = SHOPIFY_SUBSERVICES[slug];

  useSEO({
    title: subservice.metaTitle,
    description: subservice.metaDesc,
    keywords: subservice.keywords,
    ogTitle: subservice.title,
    ogDescription: subservice.subtitle,
    canonicalPath: `/shopify-dtc/${subservice.slug}`
  });

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Shopify & DTC Media"
        title={subservice.title}
        highlight={subservice.highlight}
        subtitle={subservice.subtitle}
        breadcrumbs={[
          { label: 'Shopify & DTC', link: '/shopify-dtc' },
          { label: subservice.tabLabel }
        ]}
        primaryCtaText="Book Growth Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="View Client Results"
        secondaryCtaLink="/case-studies"
        metrics={subservice.metrics}
      />

      {/* Sleek 1-Row Subservice Navigation Selector */}
      <div className="subpage-tabs-bar">
        <div className="container subpage-tabs-container">
          <div className="subpage-tabs-scroll">
            {Object.values(SHOPIFY_SUBSERVICES).map((item) => (
              <Link
                key={item.slug}
                to={`/shopify-dtc/${item.slug}`}
                className={`case-study-tab-btn subpage-tab-link ${slug === item.slug ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                <span className="tab-short-label">{item.shortLabel || item.tabLabel}</span>
                <span className="tab-full-label">{item.tabLabel}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables - Clean Unboxed Flow (No Cards, No Borders) */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '18px' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 4.4vw, 1.45rem)', margin: 0 }}>What We Execute & Deliver</h2>
          </div>

          <div className="unboxed-guarantees-grid" style={{ marginTop: '16px' }}>
            {subservice.deliverables.map((d, idx) => (
              <div key={idx} className="unboxed-guarantee-item">
                <div className="unboxed-guarantee-icon" style={{ borderRadius: '50%' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>✓</span>
                </div>
                <div className="unboxed-guarantee-content">
                  <h4 className="unboxed-guarantee-title" style={{ fontSize: '0.94rem', fontWeight: 700, margin: '2px 0 0', lineHeight: 1.4 }}>
                    {d}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="subpage-bottom-actions" style={{ marginTop: '28px' }}>
            <Link to="/programs-pricing" className="btn btn-primary" style={{ padding: '11px 22px', fontSize: '0.86rem' }}>
              Explore Pricing ➔
            </Link>
            <Link to="/case-studies" className="btn btn-secondary" style={{ padding: '11px 22px', fontSize: '0.86rem' }}>
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
