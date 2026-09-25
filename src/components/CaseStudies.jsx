import React, { useState, useEffect } from 'react';
import { Link } from '../Router';
import { useCurrency } from '../context/CurrencyContext';

const FALLBACK_CASES = [
  {
    id: 'homemaster',
    title: 'HomeMaster Appliances',
    category: 'Home & Kitchen Appliances',
    region: 'Saudi Arabia & UAE',
    platforms: ['Amazon UAE', 'Amazon Saudi', 'Shopify'],
    image: '/assets/homemaster_case_study.jpg',
    metrics: {
      salesGrowth: '+11,963%',
      sevenDayRevenue: '$32.2K (SAR 120.8K)',
      roas: '14.43x',
      acos: '6.93%'
    },
    summary: 'Catalog restructuring, Buy Box defense and Sponsored Ads scale across GCC.',
    highlightQuote: 'Reduced ACOS from 34% down to 6.93% while scaling weekly revenue by +11,963%.'
  },
  {
    id: 'livora',
    title: 'LIVORA Modern Essentials',
    category: 'Fashion & Apparel',
    region: 'UK, UAE & KSA Cross-Border',
    platforms: ['Shopify', 'Meta Ads', 'TikTok Ads'],
    image: '/assets/livora_case_study.jpg',
    metrics: {
      salesGrowth: '+104%',
      sevenDayRevenue: '$50.4K/mo',
      roas: '4.62x',
      acos: '1,680 Units'
    },
    summary: 'Bespoke mobile-first Shopify storefront, creator video ads & localized checkout.',
    highlightQuote: 'Doubled monthly revenue in 60 days with creator scaling and localized checkout.'
  },
  {
    id: 'creative-things',
    title: 'Creative Things Studio Gear',
    category: 'Consumer Electronics & Gear',
    region: 'GCC Multi-Channel',
    platforms: ['Noon (FBN)', 'Noon Ad Boost', 'Seller Lab'],
    image: '/assets/creativethings_case_study.jpg',
    metrics: {
      salesGrowth: '+311.02%',
      sevenDayRevenue: 'SAR 208.5K',
      roas: '6.85x',
      acos: '522 Units'
    },
    summary: 'Noon Seller Lab onboarding, FBN warehouse routing & mega campaign execution.',
    highlightQuote: 'Exceeded 520 units in initial campaign push with blended 6.85x ROAS.'
  }
];

const CASE_STUDY_IMAGES = {
  homemaster: '/assets/homemaster_case_study.jpg',
  livora: '/assets/livora_case_study.jpg',
  'creative-things': '/assets/creativethings_case_study.jpg'
};

export default function CaseStudies({ onOpenModal }) {
  const { formatDynamicText } = useCurrency();
  const [cases, setCases] = useState(FALLBACK_CASES);
  const [mobileIdx, setMobileIdx] = useState(0);

  useEffect(() => {
    fetch('/api/case-studies')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          const formatted = data.data.map((item, idx) => {
            const caseId = item.id || item.slug || item._id || `case-${idx}`;
            return {
              ...item,
              id: caseId,
              image: CASE_STUDY_IMAGES[caseId] || CASE_STUDY_IMAGES[item.slug] || item.image,
              metrics: {
                ...item.metrics,
                salesGrowth: item.metrics?.salesGrowth || item.metrics?.salesLift || item.metrics?.ordersGrowth || '+100%',
                sevenDayRevenue: item.metrics?.sevenDayRevenue || item.metrics?.monthlySales || item.metrics?.noonRevenue || '$32.2K',
                roas: item.metrics?.roas || '4.5x'
              }
            };
          });
          setCases(formatted);
        }
      })
      .catch(() => {
        // use fallback gracefully
      });
  }, []);

  const activeCases = cases.slice(0, 3);
  const currentCase = activeCases[mobileIdx] || activeCases[0];

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handlePrev = () => {
    setMobileIdx((prev) => (prev === 0 ? activeCases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIdx((prev) => (prev === activeCases.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
  };

  const renderCaseCard = (cs, cardKey) => {
    const rawVolume = cs.metrics?.sevenDayRevenue || cs.metrics?.monthlySales || cs.metrics?.noonRevenue || '$32.2K';
    const formattedVolume = formatDynamicText(rawVolume);
    const parenMatch = formattedVolume.match(/^([^(]+)(?:\(([^)]+)\))?$/);
    const mainVol = parenMatch ? parenMatch[1].trim() : formattedVolume;
    const subVol = parenMatch && parenMatch[2] ? parenMatch[2].trim() : null;
    const resolvedKey = cardKey || cs.id || cs.slug || cs._id;

    return (
      <div className="mkt-card case-study-card" key={resolvedKey}>
        <div 
          className="dashboard-img-container" 
          onClick={() => onOpenModal(cs.image, `${cs.title} Verified Dashboard`)}
          title="Click to zoom inspect proof"
        >
          <img src={cs.image} alt={cs.title} loading="lazy" />
        </div>

        {/* Growth and Region badges - Hidden on mobile because it's already in the image overlay */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span className="growth-badge">{cs.metrics?.salesGrowth || '+100%'} Growth</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--neon-cyan)', fontWeight: 600 }}>{cs.region}</span>
        </div>

        <h3 className="mkt-card-title">{cs.title}</h3>
        {/* Category text - Hidden on mobile per user instruction */}
        <p className="desktop-only" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>{cs.category}</p>
        <p className="mkt-card-desc" style={{ marginBottom: '12px' }}>{cs.summary}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.02)',
          padding: '10px 12px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          marginBottom: '12px'
        }}>
          <div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Volume</div>
            <div style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--neon-mint)', lineHeight: 1.2 }}>
              {mainVol}
            </div>
            {subVol && (
              <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.1 }}>
                {subVol}
              </div>
            )}
          </div>
          <div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Efficiency</div>
            <div style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1.2 }}>
              {cs.metrics?.roas} ROAS
            </div>
            {cs.metrics?.acos && (
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.1 }}>
                {cs.metrics.acos} ACOS
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <p style={{ fontSize: '0.76rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            "{cs.highlightQuote}"
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="section-header">
          <h2>Client Case Studies</h2>
          <p className="desktop-only">
            Real sales, advertising, and operational reporting from brands managed by AZS Solutions.
          </p>
        </div>

        {/* Mobile Interactive Swipeable Carousel */}
        <div 
          className="mobile-cases-carousel-wrap"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="mobile-carousel-slide">
            {renderCaseCard(currentCase, `mobile-case-${currentCase?.id || mobileIdx}`)}
          </div>

          <div className="mobile-carousel-controls">
            <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Previous case study">
              ‹
            </button>
            <div className="carousel-dots">
              {activeCases.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${mobileIdx === idx ? 'active' : ''}`}
                  onClick={() => setMobileIdx(idx)}
                  aria-label={`Go to case study ${idx + 1}`}
                />
              ))}
            </div>
            <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Next case study">
              ›
            </button>
          </div>
        </div>

        {/* Desktop 3-Card Grid */}
        <div className="desktop-cases-grid case-studies-grid">
          {activeCases.map((cs, idx) => renderCaseCard(cs, cs.id || cs.slug || cs._id || `grid-case-${idx}`))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link to="/case-studies" className="btn btn-secondary" style={{ padding: '12px 32px' }}>
            <span>View All Case Studies</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}


