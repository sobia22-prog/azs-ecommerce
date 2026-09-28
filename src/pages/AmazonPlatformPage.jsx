import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

export default function AmazonPlatformPage({ onOpenModal }) {
  const { path } = useRouter();
  const canonicalPath = path === '/amazon' ? '/amazon' : '/marketplace-management/amazon-ksa';

  useSEO({
    title: 'Amazon KSA & Global Marketplace Management Agency | AZS Solutions',
    description: 'Scale your brand on Amazon.sa and globally with AZS Solutions. Full-service Amazon KSA PPC agency, Buy Box defense, Arabic A+ content, and Riyadh FBA logistics.',
    keywords: 'amazon.sa seller agency, amazon KSA PPC agency, amazon seller account management Riyadh, buy box defense KSA, amazon agency Saudi Arabia',
    ogTitle: 'Amazon KSA & Global Marketplace Agency | AZS Solutions',
    ogDescription: 'Verified 14.43x ROAS, +11,963% sales lift, and turnkey Seller Central management across KSA, UAE, USA & UK.',
    canonicalPath
  });

  const regions = [
    {
      code: 'Amazon Saudi Arabia (Amazon.sa)',
      badge: 'Highest GMV Lift',
      focus: 'Riyadh & Jeddah FBA nodes, Arabic keyword dominance, and White Friday surge execution.',
      metric: '+11,963% Revenue Spike'
    },
    {
      code: 'Amazon UAE (Amazon.ae)',
      badge: 'Cross-Border Hub',
      focus: 'Dubai logistics consolidation, multi-currency pricing, and high Prime penetration.',
      metric: '94.2% Prime Buy Box Win Rate'
    },
    {
      code: 'Amazon USA (Amazon.com)',
      badge: 'Volume Anchor',
      focus: 'Sponsored Products SP/SB/SD scaling, high-velocity listing indexing, and sub-10% ACOS.',
      metric: '$48.9K Ad Sales (11.20x ROAS)'
    },
    {
      code: 'Amazon UK (Amazon.co.uk)',
      badge: 'High-Margin Gateway',
      focus: 'HMRC VAT compliance, UK English keyword indexing, and European fulfillment routing.',
      metric: '£36.5K Revenue Lift (9.45x ROAS)'
    }
  ];

  const deliverables = [
    {
      title: 'Full-Funnel Sponsored Ads (PPC)',
      desc: 'Sponsored Products, Brands Video, and Display with keyword isolation, dayparting, and bid control.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      title: 'Buy Box & Brand Registry Defense',
      desc: 'Project Zero / Transparency integration, counterfeit suppression, and algorithmic repricing.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Arabic & English A+ Content',
      desc: 'High-converting infographic modules, lifestyle imagery, and native GCC Arabic copywriting.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: 'FBA Logistics & Restock Forecasting',
      desc: 'Shipment creation, customs prep into Riyadh/Jeddah/Dubai hubs, and inventory replenishment.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: 'Review Acceleration & Compliance',
      desc: 'Amazon Vine enrollment strategies, review request sequencing, and negative feedback dispute removal.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      title: 'Weekly P&L and Profit Analytics',
      desc: 'Transparent dashboards tracking true net profit after FBA fees, storage costs, and ad spend.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    }
  ];

  // Mobile Slideshow State for Regions
  const [mobileIdx, setMobileIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (isPaused || regions.length <= 1) return;
    const interval = setInterval(() => {
      setMobileIdx(prev => (prev === regions.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, regions.length]);

  const handlePrev = () => {
    setIsPaused(true);
    setMobileIdx(prev => (prev === 0 ? regions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPaused(true);
    setMobileIdx(prev => (prev === regions.length - 1 ? 0 : prev + 1));
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

  const renderRegionCard = (r, isMobile = false) => (
    <div className="platform-detail-card" key={r.code} style={isMobile ? { margin: 0, height: '100%' } : undefined}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: 'var(--neon-mint)' }}>●</span>
          {r.code}
        </span>
        <span className="growth-badge">{r.badge}</span>
      </div>
      <p className="platform-detail-desc" style={{ marginBottom: '14px', fontSize: '0.86rem' }}>{r.focus}</p>
      <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.84rem', color: 'var(--neon-mint)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        {r.metric}
      </div>
    </div>
  );

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Amazon Ecosystem"
        title="Amazon Platform"
        highlight="Management"
        subtitle="Full-service management for Amazon.sa, Amazon.ae, Amazon.com, and Amazon.co.uk. Buy Box defense, Arabic SEO, and optimized ads."
        breadcrumbs={[
          { label: 'Marketplaces Division', link: '/marketplaces' },
          { label: 'Amazon Platform' }
        ]}
        primaryCtaText="Get Amazon Account Audit"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Inspect Verified Dashboard"
        secondaryCtaLink="#verified-proof"
        metrics={[
          { val: '14.43x', label: 'Peak ROAS', sub: 'Audited performance' },
          { val: '6.93%', label: 'Target ACOS', sub: 'Down from 34%' },
          { val: '+11,963%', label: 'Sales Growth', sub: 'Verified lift' },
          { val: '4 Markets', label: 'Global Coverage', sub: 'KSA, UAE, USA, UK' }
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

          {/* Regional Corridors Header */}
          <div className="section-header" style={{ textAlign: 'left', marginTop: '10px', marginBottom: '18px' }}>
            <h2>Amazon Marketplaces We Scale</h2>
          </div>

          {/* Mobile Automatic Interactive Slideshow */}
          <div 
            className="mobile-platform-carousel-wrap"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="mobile-carousel-slide">
              {renderRegionCard(regions[mobileIdx], true)}
            </div>

            <div className="mobile-carousel-controls">
              <button 
                type="button" 
                className="carousel-nav-btn prev" 
                onClick={handlePrev} 
                aria-label="Previous region"
              >
                ‹
              </button>
              <div className="carousel-dots">
                {regions.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`carousel-dot ${mobileIdx === idx ? 'active' : ''}`}
                    onClick={() => setMobileIdx(idx)}
                    aria-label={`Go to ${regions[idx].code}`}
                  />
                ))}
              </div>
              <button 
                type="button" 
                className="carousel-nav-btn next" 
                onClick={handleNext} 
                aria-label="Next region"
              >
                ›
              </button>
            </div>
          </div>

          {/* Desktop Regional Grid */}
          <div className="desktop-platform-grid platform-detail-grid" style={{ marginTop: '20px', marginBottom: '60px' }}>
            {regions.map(r => renderRegionCard(r, false))}
          </div>

          {/* Flagship Case Study Showcase: HomeMaster Appliances */}
          <div id="verified-proof" className="showcase-proof-card">
            <h2 className="showcase-proof-title">
              HomeMaster Appliances: <span className="gradient-text">+11,963% Amazon Scale</span>
            </h2>
            <p className="showcase-proof-subtitle">
              Restructured catalog on Amazon Saudi Arabia and UAE, eliminated Buy Box hijackers, and achieved 14.43x ROAS with 6.93% ACOS.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              {/* Dashboard Preview */}
              <div 
                style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0, 245, 155, 0.2)' }}
                onClick={() => onOpenModal('/assets/homemaster_amazon_dashboard.svg', 'HomeMaster Appliances Verified Amazon Growth Console (+11,963%)')}
              >
                <img src="/assets/homemaster_amazon_dashboard.svg" alt="HomeMaster Amazon Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              {/* Data & Impact Breakdown */}
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ background: 'rgba(0, 245, 155, 0.05)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 245, 155, 0.2)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Weekly Rev Spike</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--neon-mint)', fontFamily: 'var(--font-mono)' }}>$32.2K</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>SAR 120,800/wk</div>
                  </div>

                  <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>PPC ROAS</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>14.43x</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>6.93% ACOS</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Buy Box Win Rate</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-heading)' }}>96.8%</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>Up from 61%</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Organic Rank</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-heading)' }}>Top 3</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-body)' }}>42 core keywords</div>
                  </div>
                </div>

                <blockquote style={{
                  borderLeft: '3px solid var(--neon-mint)',
                  paddingLeft: '14px',
                  color: 'var(--text-heading)',
                  fontStyle: 'italic',
                  fontSize: '0.88rem',
                  lineHeight: 1.55,
                  marginBottom: '18px'
                }}>
                  "Reduced ACOS from 34% down to 6.93% while scaling weekly revenue by +11,963% across Saudi Arabia and UAE."
                </blockquote>

                <div className="subpage-cta-group">
                  <Link to="/book-audit" className="btn btn-primary" style={{ padding: '11px 20px', fontSize: '0.86rem' }}>
                    <span>Audit Your Amazon Account ➔</span>
                  </Link>
                  <Link to="/case-studies/homemaster" className="btn btn-secondary" style={{ padding: '11px 20px', fontSize: '0.86rem' }}>
                    <span>Read HomeMaster Case Study ➔</span>
                  </Link>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <Link to="/programs-pricing" style={{ fontSize: '0.82rem', color: 'var(--neon-mint)', fontWeight: 700, textDecoration: 'none' }}>
                    View Amazon Programs & Pricing ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Core Amazon Deliverables - Clean Unboxed Flow */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '18px' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 4.4vw, 1.45rem)', margin: 0 }}>What We Manage on Your Amazon Account</h2>
          </div>

          <div className="marketplaces-systems-grid">
            {deliverables.map((d, i) => (
              <div key={i} className="marketplaces-system-card">
                <div className="system-card-icon">
                  {d.icon}
                </div>
                <div className="system-card-body">
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-heading)', margin: '0 0 4px' }}>{d.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-body)', lineHeight: 1.4, margin: 0 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
