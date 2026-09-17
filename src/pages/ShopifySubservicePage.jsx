import React from 'react';
import { Link, useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';
import RobotCompanion from '../components/RobotCompanion';

const SHOPIFY_SUBSERVICES = {
  'store-setup': {
    slug: 'store-setup',
    title: 'Bilingual Store Setup & Theme Architecture',
    highlight: 'Engineered for GCC Conversion',
    metaTitle: 'Bilingual Arabic & English Shopify Store Setup Agency | AZS Solutions',
    metaDesc: 'Custom high-performance Shopify storefronts built with native Arabic RTL layouts, seamless Mada, Tabby, Tamara BNPL, and lightning-fast GCC checkout.',
    keywords: 'bilingual shopify store setup, shopify agency Saudi Arabia, arabic RTL shopify theme, Tabby Tamara checkout integration, Mada payment gateway shopify',
    subtitle: 'High-performing D2C brands require native localized customer journeys. We architect lightning-fast, bilingual Arabic (RTL) and English Shopify storefronts pre-integrated with GCC payment gateways.',
    metrics: [
      { val: '1.2s', label: 'Page Load Speed', sub: 'Optimized Core Web Vitals' },
      { val: '100%', label: 'Arabic RTL Native', sub: 'No awkward machine translations' },
      { val: '48%', label: 'BNPL Adoption', sub: 'Tabby & Tamara integrated' },
      { val: '+38%', label: 'Mobile Conversion', sub: 'Streamlined 1-page checkout' }
    ],
    deliverables: [
      'Custom bilingual Arabic (RTL) & English Shopify theme architecture',
      'One-click GCC payment gateways: Mada, Tabby, Tamara BNPL, Apple Pay & STC Pay',
      'ZATCA Saudi e-invoicing and tax compliance integration',
      'Automated local GCC carrier shipping logic (SMSA, Aramex, DHL Express)',
      'High-converting product detail page (PDP) design with lifestyle gallery & sticky buy button',
      'Native customer review harvesting with photo/video social proof modules'
    ]
  },
  'meta-ads': {
    slug: 'meta-ads',
    title: 'Meta Performance Ads',
    highlight: '(Instagram & Facebook)',
    metaTitle: 'Meta Ads Agency for Ecommerce (Instagram & Facebook) | AZS Solutions',
    metaDesc: 'Scalable Meta advertising for ecommerce brands across Saudi Arabia and the GCC. Advantage+ catalog campaigns, UGC video reels, and high-frequency retargeting.',
    keywords: 'meta ads agency ecommerce, instagram ads agency Saudi Arabia, facebook ecommerce marketing GCC, Advantage+ shopping campaigns, D2C paid acquisition',
    subtitle: 'Dominating Meta feeds across Riyadh, Dubai, and international markets requires algorithmic Advantage+ shopping structures, creator-led UGC reels, and aggressive creative testing cycles.',
    metrics: [
      { val: '4.62x', label: 'Blended Meta ROAS', sub: 'LIVORA client benchmark' },
      { val: '14 Days', label: 'Creative Refresh Pacing', sub: 'Zero ad fatigue degradation' },
      { val: 'SAR 39', label: 'Target CAC', sub: 'Gulf customer acquisition cost' },
      { val: '+104%', label: 'MoM Scale Velocity', sub: 'Rapid profitable scaling' }
    ],
    deliverables: [
      'Advantage+ Shopping Campaigns (ASC) structured for maximum algorithmic efficiency',
      'Native GCC lifestyle UGC & creator video ads in Saudi & Gulf vernacular',
      'Dynamic Product Ads (DPA) targeting abandoned carts and high-intent view sessions',
      'First-party Conversions API (CAPI) server-side tracking setup bypassing iOS restrictions',
      'Creative matrix testing: testing 15+ hooks, angles, and formats weekly',
      'Customer Lifetime Value (LTV) cohort retargeting and VIP customer reactivation'
    ]
  },
  'tiktok-ads': {
    slug: 'tiktok-ads',
    title: 'TikTok Shop & Creator Ads',
    highlight: 'Viral Pulse Acquisition',
    metaTitle: 'TikTok Shop & Creator Ads Agency for Ecommerce | AZS Solutions',
    metaDesc: 'Drive viral sales and scale TikTok Shop storefronts across the GCC. Creator Spark Ads, localized influencer hooks, and high-conversion impulse funnels.',
    keywords: 'tiktok shop agency GCC, tiktok ads ecommerce Saudi Arabia, tiktok creator marketing agency, spark ads GCC, tiktok D2C sales',
    subtitle: 'The GCC has the world’s highest TikTok engagement per capita. We transform viral trend momentum into predictable, high-margin D2C customer acquisition.',
    metrics: [
      { val: '5.40x', label: 'Top Campaign ROAS', sub: 'Spark Ads performance' },
      { val: '68%', label: 'Video Completion Rate', sub: 'High-retention creative hooks' },
      { val: '72h', label: 'Campaign Launch SLA', sub: 'Agile trend response speed' },
      { val: '30+', label: 'GCC Creator Network', sub: 'Vetted Riyadh & Dubai creators' }
    ],
    deliverables: [
      'TikTok Shop native catalog onboarding, seller center sync, and fulfillment routing',
      'Spark Ads amplification of authentic creator testimonials and unboxing videos',
      'Localized Saudi & GCC Arabic humor, lifestyle framing, and cultural trend integration',
      'TikTok Pixel with Advanced Matching and Events API server integration',
      'Impulse purchase checkout optimization lowering cart abandonment rates',
      'White-listed creator account advertising maximizing social proof authority'
    ]
  },
  'google-ads': {
    slug: 'google-ads',
    title: 'Google Performance Max &',
    highlight: 'Shopping Intent Capture',
    metaTitle: 'Google Performance Max (PMax) & Shopping Agency | AZS Solutions',
    metaDesc: 'Capture high-intent commercial searchers across Google Shopping, Search, and YouTube with precision Performance Max campaigns for ecommerce brands.',
    keywords: 'google performance max agency, google shopping agency Saudi Arabia, ecommerce google ads GCC, high intent search capture, merchant center management',
    subtitle: 'When shoppers actively search for your category, you must own the top of the search engine results page. We run automated Google Performance Max campaigns capturing bottom-funnel revenue.',
    metrics: [
      { val: '6.85x', label: 'Blended Search ROAS', sub: 'Creative Things benchmark' },
      { val: '64%', label: 'Search Revenue Share', sub: 'High-intent buyer capture' },
      { val: 'SAR 399', label: 'Average Order Value', sub: '+42% basket size expansion' },
      { val: '99.8%', label: 'Merchant Center Health', sub: 'Zero feed disapprovals' }
    ],
    deliverables: [
      'Google Performance Max (PMax) campaigns targeting Search, Shopping, YouTube, and Display',
      'Algorithmic Google Merchant Center feed hygiene and localized SAR/AED currency mapping',
      'Negative keyword sculpting shielding budget from low-intent research queries',
      'Enhanced Conversions tracking and profit-driven smart bidding (tROAS & tCPA)',
      'High-converting YouTube video action campaigns building brand recall',
      'Brand defense campaigns safeguarding proprietary search terms from competitors'
    ]
  },
  'cro': {
    slug: 'cro',
    title: 'Conversion Rate Optimization',
    highlight: '(CRO) & Revenue Expansion',
    metaTitle: 'E-commerce Conversion Rate Optimization (CRO) Agency | AZS Solutions',
    metaDesc: 'Double your ecommerce revenue without spending more on ads. Scientific conversion rate optimization (CRO), mobile friction elimination, and AOV expansion for Shopify brands.',
    keywords: 'ecommerce conversion rate optimization agency, shopify CRO service, storefront CRO KSA USA, checkout optimization GCC, mobile conversion rate lift',
    subtitle: 'Driving traffic is only half the battle. Our conversion engineering turns bouncing mobile visitors into paying customers by systematically eliminating checkout friction.',
    metrics: [
      { val: '+122%', label: 'Checkout CVR Lift', sub: 'Post-CRO implementation' },
      { val: '3.82%', label: 'Average Storefront CVR', sub: 'Top-decile ecommerce benchmark' },
      { val: '+42%', label: 'AOV Expansion', sub: 'Via smart 1-click upselling' },
      { val: '24/7', label: 'Heatmap Tracking', sub: 'Behavioral drop-off analytics' }
    ],
    deliverables: [
      'Comprehensive qualitative & quantitative UX audit of the entire mobile customer journey',
      'Mobile checkout friction elimination: sticky add-to-bag, 1-click address autofill',
      'Post-purchase and in-cart smart upsell funnels expanding Average Order Value (AOV)',
      'Heatmap, scroll-map, and user session recording behavioral analysis',
      'A/B split testing of high-impact hero value propositions, pricing tiers, and trust badges',
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
        badge="Division 2: Shopify & DTC Paid Media"
        title={subservice.title}
        highlight={subservice.highlight}
        subtitle={subservice.subtitle}
        breadcrumbs={[
          { label: 'Shopify & DTC', link: '/shopify-dtc' },
          { label: subservice.title.split('&')[0].trim() }
        ]}
        primaryCtaText="Book Growth Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="View Client Case Studies"
        secondaryCtaLink="/case-studies"
        metrics={subservice.metrics}
      />

      {/* Subservice Navigation Selector */}
      <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
            {Object.values(SHOPIFY_SUBSERVICES).map((item) => (
              <Link
                key={item.slug}
                to={`/shopify-dtc/${item.slug}`}
                className={`deck-pill-btn ${slug === item.slug ? 'active' : ''}`}
                style={{ padding: '8px 16px', fontSize: '0.82rem', textDecoration: 'none' }}
              >
                {item.title.split('&')[0].trim()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables Grid */}
      <section className="subpage-section">
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">Execution Deliverables</div>
            <h2>What We Execute & Deliver</h2>
            <p>
              Every engagement is backed by institutional SLAs, weekly partner standups, and direct Slack access to our senior growth engineering team.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
            {subservice.deliverables.map((d, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-card-header">
                  <div className="pillar-icon-badge">✓</div>
                  <span className="pillar-num">0{idx + 1}</span>
                </div>
                <h3 className="pillar-title" style={{ fontSize: '1.05rem' }}>{d}</h3>
                <p className="pillar-desc">
                  Institutional standard operating procedures engineered to maximize conversion velocity and customer acquisition efficiency.
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/programs-pricing" className="btn btn-primary" style={{ marginRight: '14px' }}>
              Explore Program Pricing ➔
            </Link>
            <Link to="/case-studies" className="btn btn-secondary">
              Review Client Results
            </Link>
          </div>
        </div>
      </section>

      <RobotCompanion />
    </div>
  );
}
