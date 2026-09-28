import React from 'react';
import { Link, useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import TailoredPrograms from '../components/TailoredPrograms';
import useSEO from '../hooks/useSEO';
import { useCurrency } from '../context/CurrencyContext';

export default function ProgramsPricingPage() {
  const { path } = useRouter();
  const canonicalPath = path === '/pricing' ? '/pricing' : '/programs-pricing';
  const { currency, setCurrency, isSAR } = useCurrency();
  useSEO({
    title: 'Ecommerce Management Programs & Transparent Pricing | AZS Solutions',
    description: 'Explore our 4 partnership tiers with transparent indicative pricing: Full-Service Management, Turnkey Launch Sprints, Growth Retainers, and Custom Enterprise Partnerships.',
    keywords: 'ecommerce agency pricing, amazon management fees, marketplace agency retainer, shopify agency cost Saudi Arabia, full service ecommerce management',
    ogTitle: 'Transparent Engagement Programs & Pricing | AZS Solutions',
    ogDescription: 'Predictable, performance-aligned partnership models for Amazon, Noon, Trendyol, and Shopify brands scaling in GCC and global markets.',
    canonicalPath
  });

  const guarantees = [
    {
      title: '30-Day Transition Guarantee',
      desc: 'If our team fails to meet agreed milestone SLAs within the first 30 days, you retain 100% of your assets with zero lock-in.'
    },
    {
      title: 'Dedicated Weekly Standups',
      desc: 'Weekly strategic reviews with your dedicated Account Lead and Media Buyer, plus direct Slack access for urgent operations.'
    },
    {
      title: 'Strict TACoS & Margin Caps',
      desc: 'We never scale ad spend blindly. All campaigns are governed against pre-agreed net margin thresholds and TACoS limits.'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Engagement Models"
        title="Programs &"
        highlight="Pricing"
        subtitle="Transparent engagement tiers, guaranteed SLAs, and turnkey execution aligned with your profitability."
        breadcrumbs={[
          { label: 'Programs & Pricing' }
        ]}
        primaryCtaText="Book Pricing Discovery"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Simulate 6-Mo Revenue"
        secondaryCtaLink="/calculator"
        metrics={[
          { val: '4 Tiers', label: 'Engagement Models', sub: 'From sprints to enterprise' },
          { val: 'USD / SAR', label: 'Dual Currency', sub: 'Localized billing' },
          { val: '100% SLA', label: 'Execution Guarantees', sub: 'Milestone commitments' },
          { val: '30 Days', label: 'Turnkey Launch', sub: 'Time-to-market' }
        ]}
      />

      {/* Currency Switcher Bar */}
      <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
            Currency: <strong style={{ color: 'var(--text-pure)' }}>{isSAR ? 'Saudi Riyals (SAR / GCC)' : 'US Dollars ($ USD)'}</strong>
          </div>
          <div className="currency-segmented-toggle">
            <button
              type="button"
              className={`currency-pill-opt ${!isSAR ? 'active' : ''}`}
              onClick={() => setCurrency('USD')}
            >
              USD ($)
            </button>
            <button
              type="button"
              className={`currency-pill-opt ${isSAR ? 'active' : ''}`}
              onClick={() => setCurrency('SAR')}
            >
              SAR (ر.س)
            </button>
          </div>
        </div>
      </div>

      {/* The 4 Elevated Program Tiers */}
      <TailoredPrograms currency={currency} onOpenModal={() => {}} hideHeader={true} />

      {/* SLA & Engagement Guarantees - Clean Unboxed Layout (No Card Box, No Slideshow) */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '28px' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '18px' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 4.4vw, 1.45rem)', margin: 0 }}>How Our Partnerships Work</h2>
          </div>

          {/* Clean Unboxed Flow (No Card Styles, No Carousel) */}
          <div className="unboxed-guarantees-grid">
            {guarantees.map((g, idx) => (
              <div key={idx} className="unboxed-guarantee-item">
                <div className="unboxed-guarantee-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="unboxed-guarantee-content">
                  <h3 className="unboxed-guarantee-title">{g.title}</h3>
                  <p className="unboxed-guarantee-desc">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link to="/book-audit" className="btn btn-primary" style={{ padding: '11px 22px', fontSize: '0.86rem' }}>
              Book Discovery Call ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
