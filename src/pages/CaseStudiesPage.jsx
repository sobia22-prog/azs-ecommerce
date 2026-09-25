import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

const ALL_CASE_STUDIES = [
  {
    id: 'homemaster',
    title: 'HomeMaster Appliances',
    category: 'Home & Kitchen Appliances',
    region: 'Saudi Arabia & UAE',
    channel: 'amazon',
    serviceLink: '/marketplace-management/amazon-ksa',
    serviceName: 'Amazon KSA Marketplace Management',
    platforms: ['Amazon.sa', 'Amazon.ae', 'Sponsored Brands', 'Buy Box Defense'],
    image: '/assets/homemaster_case_study.jpg',
    metrics: {
      salesGrowth: '+11,963%',
      volume: '$32.2K/wk (SAR 120.8K)',
      roas: '14.43x ROAS',
      efficiency: '6.93% ACOS'
    },
    summary: 'Turnkey catalog restructuring, Buy Box protection, Arabic SEO, and Sponsored Ads optimization across GCC marketplaces.',
    highlightQuote: 'Reduced ACOS from 34% down to 6.93% while scaling weekly revenue by +11,963%.',
    challenge: 'Catalog hijacked by unauthorized resellers on Amazon.sa; ACOS elevated at 34%; listing copy in English only with zero Arabic search indexation; recurring out-of-stock Buy Box penalties.',
    solution: 'Integrated Project Zero brand protection; launched native Najdi/Hejazi Arabic A+ Content; isolated high-intent search terms into exact-match PPC campaigns; established Riyadh FBA restock schedule.',
    results: [
      '+11,963% revenue scale to $32.2K/week (SAR 120.8K)',
      'ACOS compressed from 34% down to 6.93% (14.43x ROAS)',
      'Buy Box win rate locked at 96.8% (up from 61%)',
      'Top 3 organic rank achieved across 42 primary category keywords'
    ]
  },
  {
    id: 'livora',
    title: 'LIVORA Modern Essentials',
    category: 'Fashion & Apparel',
    region: 'UK, UAE & KSA Cross-Border',
    channel: 'shopify',
    serviceLink: '/shopify-dtc/store-setup',
    serviceName: 'Shopify Plus & DTC Performance Marketing',
    platforms: ['Shopify Storefront', 'Meta Ads', 'TikTok Ads', 'Tamara BNPL'],
    image: '/assets/livora_case_study.jpg',
    metrics: {
      salesGrowth: '+104%',
      volume: '$50.4K/mo (SAR 189K)',
      roas: '4.62x Blended ROAS',
      efficiency: '1,680 Dispatched Units'
    },
    summary: 'Bespoke mobile-first Shopify storefront, UGC video acquisition on Meta and TikTok, and localized GCC checkout.',
    highlightQuote: 'Doubled monthly revenue within 60 days of storefront redesign, creator ad scaling, and local GCC payment gateway optimization.',
    challenge: 'Standard Shopify theme with English-only checkout; absence of local GCC payment options causing 78% mobile cart abandonment; Meta Ads suffering ad fatigue with sub-2.0x ROAS.',
    solution: 'Built custom bilingual Arabic (RTL) & English Shopify theme; integrated Mada, Apple Pay, Tabby, and Tamara BNPL; deployed creative sandbox testing 15+ TikTok/Reels UGC hooks weekly.',
    results: [
      '+104% MoM net revenue surge to $50.4K/month (SAR 189K)',
      'Checkout conversion rate jumped +122% to 3.82%',
      '48% of customer checkouts conducted via Tamara & Tabby BNPL',
      'Blended paid social ROAS scaled from 1.8x to 4.62x'
    ]
  },
  {
    id: 'creative-things',
    title: 'Creative Things Studio Gear',
    category: 'Consumer Electronics & Creator Hardware',
    region: 'GCC Multi-Channel (KSA & UAE)',
    channel: 'noon',
    serviceLink: '/marketplace-management/noon',
    serviceName: 'Noon Marketplace Management (FBN)',
    platforms: ['Noon (FBN)', 'Noon Ad Boost', 'Seller Lab', 'Yellow Friday'],
    image: '/assets/creativethings_case_study.jpg',
    metrics: {
      salesGrowth: '+311.0%',
      volume: 'SAR 208,535/mo',
      roas: '6.85x Blended ROAS',
      efficiency: '522 Units Dispatched'
    },
    summary: 'Noon Seller Lab onboarding, FBN warehouse routing, Yellow Friday mega-campaign execution, and category dominance.',
    highlightQuote: 'Exceeded 520 units in initial campaign push with a blended 6.85x ROAS and seamless FBN Express delivery.',
    challenge: 'Fierce price competition on Noon KSA; slow cross-docking logistics leading to late shipment penalties; non-optimized Yellow Friday promotional participation.',
    solution: 'Enrolled catalog in Fulfilled by Noon (FBN) Express; secured Yellow / Mahali priority seller badges; automated Noon Ad Boost bidding around peak weekend conversion windows.',
    results: [
      '522 units dispatched in initial campaign push',
      'SAR 208,535 monthly revenue run-rate achieved',
      '6.85x blended ad ROAS on Noon Ad Boost campaigns',
      '100% on-time fulfillment rating with FBN Express badge'
    ]
  },
  {
    id: 'trendyol-expansion',
    title: 'Eurasia Lifestyle Direct',
    category: 'Home Textiles & Fast Fashion',
    region: 'Turkey to KSA & UAE Corridor',
    channel: 'trendyol',
    serviceLink: '/marketplace-management/trendyol',
    serviceName: 'Trendyol GCC Cross-Border Management',
    platforms: ['Trendyol GCC', 'Arabic Feed Sync', 'Flash Sales', 'Express Air'],
    image: '/assets/eurasia_case_study.svg',
    metrics: {
      salesGrowth: '+240%',
      volume: 'SAR 145,000/mo',
      roas: '7.80x Flash ROAS',
      efficiency: '350+ Synced SKUs'
    },
    summary: 'Cross-border SKU onboarding, Turkish to Arabic automated catalog mapping, GCC duty reconciliation, and flash sale marketing.',
    highlightQuote: 'Achieved SAR 145K in first-quarter cross-border run rate with sub-72 hour delivery into Riyadh and Dubai.',
    challenge: 'Turkish brand lacking GCC operational presence, regional currency handling, and local Arabic product taxonomy; unable to enter Saudi & UAE markets independently.',
    solution: 'Automated catalog translation of 350+ SKUs into GCC Arabic; reconciled ZATCA VAT and import duties; secured feature positioning in Trendyol GCC app-exclusive flash sales.',
    results: [
      'SAR 145,000 monthly sales run-rate within 90 days of launch',
      '7.80x flash sale advertising ROAS',
      'Sub-72 hour delivery SLAs into Riyadh and Dubai',
      '350+ active live SKUs across fast-fashion and home textiles'
    ]
  },
  {
    id: 'nuvoaura',
    title: 'NuvoAura Beauty & Wellness',
    category: 'Cosmetics & Personal Care',
    region: 'USA & UK Cross-Border',
    channel: 'amazon',
    serviceLink: '/marketplace-management/amazon-usa',
    serviceName: 'Amazon USA Expansion & DSP Advertising',
    platforms: ['Amazon.com', 'Amazon DSP', 'AMC Attribution', 'Prime FBA'],
    image: '/assets/nuvoaura_case_study.svg',
    metrics: {
      salesGrowth: '+507%',
      volume: '$48,900 Ad Sales',
      roas: '11.20x Sponsored ROAS',
      efficiency: '8.90% Target ACOS'
    },
    summary: 'Sponsored Products exact keyword harvesting, Sponsored Brands video creation, and UK VAT-compliant Prime warehouse routing.',
    highlightQuote: 'Secured top 3 category ranking across 42 target keywords while keeping ACOS well below 10%.',
    challenge: 'High cost-per-click ($3.50+) and hyper-competitive beauty category on Amazon.com USA; lack of multi-touch attribution; inventory stockout risks across nationwide FBA fulfillment centers.',
    solution: 'Deployed Amazon DSP programmatic display targeting competitors abandoned viewers; implemented Amazon Marketing Cloud (AMC) attribution; distributed inventory across 4 regional US FBA hubs.',
    results: [
      '$48,900 in ad-attributed sales with 11.20x ROAS',
      'Target ACOS maintained at 8.90%',
      '+507% channel revenue lift YoY',
      'Nationwide 1-day Prime delivery availability'
    ]
  }
];

const FILTER_TABS = [
  { id: 'all', label: 'All Channels (5)', shortLabel: 'All (5)' },
  { id: 'amazon', label: 'Amazon Global & GCC (2)', shortLabel: 'Amazon (2)' },
  { id: 'noon', label: 'Noon KSA & UAE (1)', shortLabel: 'Noon (1)' },
  { id: 'trendyol', label: 'Trendyol GCC Expansion (1)', shortLabel: 'Trendyol (1)' },
  { id: 'shopify', label: 'Shopify & Paid Media (1)', shortLabel: 'Shopify (1)' }
];

export default function CaseStudiesPage({ onOpenModal }) {
  const { path } = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileIdx, setMobileIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Detect individual case study slug: e.g. /case-studies/homemaster
  const slugMatch = path.match(/^\/case-studies\/([a-zA-Z0-9_-]+)/);
  const currentSlug = slugMatch ? slugMatch[1] : null;
  const activeCaseStudy = currentSlug ? ALL_CASE_STUDIES.find(cs => cs.id === currentSlug) : null;

  // Single Case Study SEO
  useSEO({
    title: activeCaseStudy
      ? `${activeCaseStudy.title} Case Study | ${activeCaseStudy.metrics.salesGrowth} Growth — AZS Solutions`
      : 'Verified E-Commerce Case Studies & Results | AZS Solutions',
    description: activeCaseStudy
      ? `Verified results for ${activeCaseStudy.title}: ${activeCaseStudy.highlightQuote} Scaled by AZS Solutions with ${activeCaseStudy.metrics.roas} and ${activeCaseStudy.metrics.volume}.`
      : 'Explore verified growth case studies across Amazon, Noon, Trendyol, and Shopify. Documented dashboards, real sales numbers, and authentic ROAS metrics managed by AZS Solutions.',
    keywords: activeCaseStudy
      ? `${activeCaseStudy.title} case study, ecommerce case study, ${activeCaseStudy.channel} management results, AZS Solutions proof`
      : 'Amazon case studies, Noon sales results, Shopify D2C case studies, ecommerce growth proof, verified ROAS dashboard',
    ogTitle: activeCaseStudy
      ? `${activeCaseStudy.title} Case Study | AZS Solutions`
      : 'Verified Case Studies | AZS Solutions',
    ogDescription: activeCaseStudy
      ? `${activeCaseStudy.highlightQuote} (${activeCaseStudy.metrics.volume} volume).`
      : 'Documented sales and advertising performance dashboards from enterprise brands scaled by AZS Solutions.',
    canonicalPath: activeCaseStudy ? `/case-studies/${activeCaseStudy.id}` : '/case-studies'
  });

  // Directory View (All Case Studies Grid)
  const filtered = activeFilter === 'all'
    ? ALL_CASE_STUDIES
    : ALL_CASE_STUDIES.filter(cs => cs.channel === activeFilter);

  // Reset index when filter changes
  useEffect(() => {
    setMobileIdx(0);
  }, [activeFilter]);

  // Automatic slideshow rotation for mobile carousel every 4.5 seconds
  useEffect(() => {
    if (isPaused || filtered.length <= 1) return;
    const timer = setInterval(() => {
      setMobileIdx((prev) => (prev + 1) % filtered.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, filtered.length]);

  const handlePrev = () => {
    setMobileIdx((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const handleNext = () => {
    setMobileIdx((prev) => (prev + 1) % filtered.length);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setTimeout(() => setIsPaused(false), 3500);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
    setTimeout(() => setIsPaused(false), 3500);
  };

  const safeMobileIdx = mobileIdx >= filtered.length ? 0 : mobileIdx;

  const renderCaseCard = (cs, isMobile = false) => (
    <div className="mkt-card case-study-card" key={cs.id}>
      <div 
        className="dashboard-img-container" 
        onClick={() => onOpenModal && onOpenModal(cs.image, `${cs.title} Verified Dashboard`)}
        title="Click to zoom inspect proof"
      >
        <img src={cs.image} alt={cs.title} loading="lazy" />
      </div>

      {/* On desktop: show duplicate growth badge. On mobile: hidden because it's already in the image */}
      <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span className="growth-badge">{cs.metrics.salesGrowth} Growth</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', fontWeight: 600 }}>{cs.region}</span>
      </div>

      <div className="mobile-only" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.74rem', color: 'var(--neon-cyan)', fontWeight: 600 }}>{cs.region}</span>
      </div>

      <h3 className="mkt-card-title">{cs.title}</h3>
      <p className="desktop-only" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{cs.category}</p>
      <p className="mkt-card-desc" style={{ marginBottom: isMobile ? '12px' : '18px' }}>{cs.summary}</p>

      {/* Platforms Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: isMobile ? '12px' : '16px' }}>
        {cs.platforms.map((plat, idx) => (
          <span key={idx} style={{
            fontSize: isMobile ? '0.68rem' : '0.72rem',
            padding: isMobile ? '2px 7px' : '3px 8px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.04)',
            color: 'var(--text-heading)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {plat}
          </span>
        ))}
      </div>

      {/* KPI Matrix Box */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: isMobile ? '8px' : '10px',
        background: 'rgba(255, 255, 255, 0.02)',
        padding: isMobile ? '8px 10px' : '12px',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        marginBottom: isMobile ? '14px' : '20px'
      }}>
        <div>
          <div style={{ fontSize: isMobile ? '0.66rem' : '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Volume</div>
          <div style={{ fontSize: isMobile ? '0.92rem' : '0.98rem', fontWeight: 800, color: 'var(--neon-mint)' }}>{cs.metrics.volume}</div>
        </div>
        <div>
          <div style={{ fontSize: isMobile ? '0.66rem' : '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Efficiency</div>
          <div style={{ fontSize: isMobile ? '0.92rem' : '0.98rem', fontWeight: 800, color: 'var(--text-heading)' }}>{cs.metrics.roas}</div>
        </div>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <p style={{ fontSize: isMobile ? '0.76rem' : '0.82rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: isMobile ? '12px' : '14px', lineHeight: 1.45 }}>
          "{cs.highlightQuote}"
        </p>
        <Link
          to={`/case-studies/${cs.id}`}
          className="btn btn-secondary"
          style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '10px 14px' }}
        >
          <span>Read Full Case Study</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );

  // Render Single Case Study View if activeCaseStudy is found
  if (activeCaseStudy) {
    return (
      <div className="subpage-wrapper">
        <PageHeader
          badge={`Verified Proof: ${activeCaseStudy.category}`}
          title={activeCaseStudy.title}
          highlight={`${activeCaseStudy.metrics.salesGrowth} Scale`}
          subtitle={activeCaseStudy.summary}
          breadcrumbs={[
            { label: 'Case Studies', link: '/case-studies' },
            { label: activeCaseStudy.title }
          ]}
          primaryCtaText="Replicate These Results"
          primaryCtaLink="/book-audit"
          secondaryCtaText="Explore Programs"
          secondaryCtaLink="/programs-pricing"
          metrics={[
            { val: activeCaseStudy.metrics.salesGrowth, label: 'Sales Growth', sub: 'Verified scale lift' },
            { val: activeCaseStudy.metrics.volume, label: 'Recorded Volume', sub: 'Audited run-rate' },
            { val: activeCaseStudy.metrics.roas, label: 'Efficiency Benchmark', sub: 'Audited performance' },
            { val: activeCaseStudy.metrics.efficiency, label: 'Operational SLA', sub: 'Channel contribution' }
          ]}
        />

        <section className="section">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div style={{ marginBottom: '24px' }}>
              <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem' }}>
                ← Back to All Verified Case Studies
              </Link>
            </div>

            {/* Dashboard Screenshot with Zoom */}
            <div 
              className="dashboard-img-container" 
              style={{ marginBottom: '40px', cursor: 'pointer', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 245, 155, 0.3)' }}
              onClick={() => onOpenModal && onOpenModal(activeCaseStudy.image, `${activeCaseStudy.title} Verified Console Proof`)}
              title="Click to zoom inspect proof"
            >
              <img src={activeCaseStudy.image} alt={activeCaseStudy.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            {/* Deep Breakdown Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <div style={{ fontSize: '0.74rem', color: '#ff4d4f', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                  The Initial Bottlenecks
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-heading)' }}>What Was Holding Growth Back</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.65 }}>{activeCaseStudy.challenge}</p>
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(0, 245, 155, 0.3)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--neon-mint)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                  AZS Institutional System
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-heading)' }}>How We Architected The Turnaround</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.65 }}>{activeCaseStudy.solution}</p>
              </div>
            </div>

            {/* Verified Deliverables & Results */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-md)', padding: '28px', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)', marginBottom: '16px' }}>Key Documented Outcomes</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                {activeCaseStudy.results.map((res, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-heading)' }}>
                    <span style={{ color: 'var(--neon-mint)', fontWeight: 800 }}>✓</span>
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder Quote Card */}
            <div style={{ background: 'rgba(0, 210, 255, 0.05)', border: '1px solid rgba(0, 210, 255, 0.25)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '40px' }}>
              <blockquote style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-heading)', lineHeight: 1.6, margin: 0 }}>
                "{activeCaseStudy.highlightQuote}"
              </blockquote>
            </div>

            {/* Action Bar with Matching Service Link & Pricing Link */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', justifyContent: 'space-between', padding: '24px', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Matching Capability</div>
                <Link to={activeCaseStudy.serviceLink} style={{ color: 'var(--neon-cyan)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                  Explore {activeCaseStudy.serviceName} ➔
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Link to="/programs-pricing" className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                  View Pricing Tiers
                </Link>
                <Link to="/book-audit" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
                  Book Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Proven Results"
        title="Case Studies"
        highlight="& Proof"
        subtitle="Real sales, advertising, and growth dashboards from brands scaled by AZS Solutions across Saudi Arabia, UAE, USA, and the UK."
        breadcrumbs={[{ label: 'Case Studies' }]}
        primaryCtaText="Book Discovery Call"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Simulate ROI"
        secondaryCtaLink="/#calculator"
        metrics={[
          { val: '5 Brands', label: 'Verified Cases', sub: 'Cross-channel proof' },
          { val: '100%', label: 'Unfiltered Proof', sub: 'Direct from consoles' },
          { val: '4 Platforms', label: 'GCC & Global', sub: 'Amazon • Noon • Trendyol • Shopify' },
          { val: 'SAR 140M+', label: 'Managed GMV', sub: 'Documented revenue' }
        ]}
      />

      <section className="section">
        <div className="container">
          {/* Channel Filter Tabs (Desktop full labels, Mobile sleek 1-row compact tabs) */}
          <div className="case-studies-filter-bar">
            {FILTER_TABS.map(f => (
              <button
                key={f.id}
                type="button"
                className={`case-study-tab-btn ${activeFilter === f.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                <span className="desktop-only">{f.label}</span>
                <span className="mobile-only">{f.shortLabel}</span>
              </button>
            ))}
          </div>

          {/* Mobile Automatic Interactive Slideshow Carousel */}
          <div 
            className="mobile-cases-page-carousel-wrap"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="mobile-carousel-slide">
              {filtered.length > 0 && renderCaseCard(filtered[safeMobileIdx], true)}
            </div>

            {filtered.length > 1 && (
              <div className="mobile-carousel-controls">
                <button 
                  type="button" 
                  className="carousel-nav-btn prev" 
                  onClick={handlePrev} 
                  aria-label="Previous case study"
                >
                  ‹
                </button>
                <div className="carousel-dots">
                  {filtered.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`carousel-dot ${safeMobileIdx === idx ? 'active' : ''}`}
                      onClick={() => setMobileIdx(idx)}
                      aria-label={`Go to case study ${idx + 1}`}
                    />
                  ))}
                </div>
                <button 
                  type="button" 
                  className="carousel-nav-btn next" 
                  onClick={handleNext} 
                  aria-label="Next case study"
                >
                  ›
                </button>
              </div>
            )}
          </div>

          {/* Desktop Multi-Column Grid */}
          <div className="desktop-cases-page-grid case-studies-grid">
            {filtered.map((cs) => renderCaseCard(cs, false))}
          </div>

          <div className="case-studies-bottom-cta">
            <Link to="/book-audit" className="btn btn-primary case-studies-cta-btn">
              <span>Book Discovery Call</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
