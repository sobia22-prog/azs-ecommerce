import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import TailoredPrograms from '../components/TailoredPrograms';
import useSEO from '../hooks/useSEO';
import { useCurrency } from '../context/CurrencyContext';

export default function ProgramsPricingPage() {
  const { currency, setCurrency, isSAR } = useCurrency();
  useSEO({
    title: 'Ecommerce Management Programs & Transparent Pricing | AZS Solutions',
    description: 'Explore our 4 partnership tiers with transparent indicative pricing: Full-Service Management, Turnkey Launch Sprints, Growth Retainers, and Custom Enterprise Partnerships.',
    keywords: 'ecommerce agency pricing, amazon management fees, marketplace agency retainer, shopify agency cost Saudi Arabia, full service ecommerce management',
    ogTitle: 'Transparent Engagement Programs & Pricing | AZS Solutions',
    ogDescription: 'Predictable, performance-aligned partnership models for Amazon, Noon, Trendyol, and Shopify brands scaling in GCC and global markets.',
    canonicalPath: '/programs-pricing'
  });

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Transparent Engagement Models"
        title="Predictable Programs &"
        highlight="Performance Pricing"
        subtitle="We align our incentives directly with your bottom-line profitability. Review our 4 structured engagement tiers with indicative starting ranges, guaranteed SLAs, and turnkey execution."
        breadcrumbs={[
          { label: 'Programs & Pricing' }
        ]}
        primaryCtaText="Book Pricing Discovery"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Simulate 6-Mo Revenue"
        secondaryCtaLink="/calculator"
        metrics={[
          { val: '4 Tiers', label: 'Engagement Models', sub: 'From sprints to enterprise' },
          { val: 'USD / SAR', label: 'Dual Currency', sub: 'Transparent localized billing' },
          { val: '100% SLA', label: 'Execution Guarantees', sub: 'Milestone pacing commitments' },
          { val: '30 Days', label: 'Turnkey Launch Pacing', sub: 'Rapid time-to-market' }
        ]}
      />

      {/* Currency Switcher Bar */}
      <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            Viewing indicative pricing for: <strong style={{ color: 'var(--text-pure)' }}>{isSAR ? 'Saudi Riyals (SAR / GCC)' : 'US Dollars ($ USD)'}</strong>
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
      <div style={{ padding: '40px 0 80px' }}>
        <TailoredPrograms currency={currency} onOpenModal={() => {}} />
      </div>

      {/* SLA & Engagement FAQ Section */}
      <section className="subpage-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">Governance & SLAs</div>
            <h2>How Our Partnerships Work</h2>
            <p>
              Clear boundaries, transparent communication cadences, and senior executive access on every tier.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="pillar-card">
              <h3 className="pillar-title">30-Day Transition Guarantee</h3>
              <p className="pillar-desc">
                If our team fails to meet agreed milestone SLAs within the first 30 days of onboarding, you retain 100% of your assets with zero cancellation lock-in.
              </p>
            </div>
            <div className="pillar-card">
              <h3 className="pillar-title">Dedicated Weekly Standups</h3>
              <p className="pillar-desc">
                Weekly strategic reviews with your dedicated Account Lead and Media Buyer, plus 24/7 priority Slack access for urgent operations and Buy Box defense.
              </p>
            </div>
            <div className="pillar-card">
              <h3 className="pillar-title">Strict TACoS & Margin Caps</h3>
              <p className="pillar-desc">
                We will never scale ad spend blindly. All campaigns are governed against pre-agreed net margin thresholds and Total Advertising Cost of Sale (TACoS).
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/book-audit" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
              Schedule Partnership Discovery Call ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
