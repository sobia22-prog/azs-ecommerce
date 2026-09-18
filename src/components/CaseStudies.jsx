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
    summary: 'Turnkey catalog restructuring, Buy Box protection, Arabic SEO, and Sponsored Ads optimization across GCC marketplaces.',
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
    summary: 'Bespoke mobile-first Shopify storefront, UGC video acquisition on Meta and TikTok, and localized GCC checkout.',
    highlightQuote: 'Doubled monthly revenue within 60 days of storefront redesign, creator ad scaling, and local GCC payment gateway optimization.'
  },
  {
    id: 'creative-things',
    title: 'Creative Things Studio Gear',
    category: 'Consumer Electronics & Creator Gear',
    region: 'GCC Multi-Channel',
    platforms: ['Noon (FBN)', 'Noon Ad Boost', 'Seller Lab'],
    image: '/assets/creativethings_case_study.jpg',
    metrics: {
      salesGrowth: '+311.02%',
      sevenDayRevenue: 'SAR 208.5K',
      roas: '6.85x',
      acos: '522 Units'
    },
    summary: 'Noon Seller Lab onboarding, FBN warehouse routing, Yellow Friday mega-campaign execution, and category dominance.',
    highlightQuote: 'Exceeded 520 units in initial campaign push with a blended 6.85x ROAS and seamless FBN Express delivery.'
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

  useEffect(() => {
    fetch('/api/case-studies')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          const formatted = data.data.map(item => ({
            ...item,
            image: CASE_STUDY_IMAGES[item.id] || item.image,
            metrics: {
              ...item.metrics,
              salesGrowth: item.metrics?.salesGrowth || item.metrics?.salesLift || item.metrics?.ordersGrowth || '+100%',
              sevenDayRevenue: item.metrics?.sevenDayRevenue || item.metrics?.monthlySales || item.metrics?.noonRevenue || '$32.2K',
              roas: item.metrics?.roas || '4.5x'
            }
          }));
          setCases(formatted);
        }
      })
      .catch(() => {
        // use fallback gracefully
      });
  }, []);

  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">Proven Results</div>
          <h2>Documented Client Scale Case Studies</h2>
          <p>
            Real sales, advertising, and operational reporting screenshots from brands managed by AZS Solutions.
          </p>
        </div>

        {/* Capped strictly to 3 case studies in 1 row on homepage */}
        <div className="case-studies-grid">
          {cases.slice(0, 3).map((cs) => (
            <div className="mkt-card" key={cs.id}>
              <div 
                className="dashboard-img-container" 
                onClick={() => onOpenModal(cs.image, `${cs.title} Verified Dashboard`)}
                title="Click to zoom inspect proof"
              >
                <img src={cs.image} alt={cs.title} loading="lazy" />
                <div className="zoom-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Inspect Proof
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="growth-badge">{cs.metrics?.salesGrowth || '+100%'} Growth</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', fontWeight: 600 }}>{cs.region}</span>
              </div>

              <h3 className="mkt-card-title">{cs.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{cs.category}</p>
              <p className="mkt-card-desc" style={{ marginBottom: '20px' }}>{cs.summary}</p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.02)',
                padding: '12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                marginBottom: '20px'
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Volume</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--neon-mint)' }}>
                    {formatDynamicText(cs.metrics?.sevenDayRevenue || cs.metrics?.monthlySales || cs.metrics?.noonRevenue)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Efficiency</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-heading)' }}>{cs.metrics?.roas} ROAS</div>
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <p style={{ fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                  "{cs.highlightQuote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/case-studies" className="btn btn-secondary" style={{ padding: '12px 32px' }}>
            <span>View More Case Studies & Proof</span>
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

