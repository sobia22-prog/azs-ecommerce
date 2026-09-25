import React from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';
import GrowthCalculator from '../components/GrowthCalculator';
import { useCurrency } from '../context/CurrencyContext';

export default function CalculatorPage() {
  const { isSAR } = useCurrency();
  useSEO({
    title: 'Interactive Ecommerce & Marketplace ROI Simulator | AZS Solutions',
    description: 'Simulate your brand’s 6-month GMV run-rate and ad ROAS across Amazon KSA/USA/UK, Noon, Trendyol GCC, and Shopify D2C.',
    keywords: 'Amazon revenue calculator, ecommerce ROI simulator, Noon seller GMV projection, Trendyol GCC revenue estimator, Shopify ad spend ROAS calculator',
    ogTitle: 'Interactive Multi-Marketplace Growth Simulator | AZS Solutions',
    ogDescription: 'Model your incremental revenue and blended ROAS scaling across Saudi Arabia, UAE, USA, and UK.',
    canonicalPath: '/calculator'
  });

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Interactive ROI Simulator"
        title="Model Your 6-Month"
        highlight="Revenue Run-Rate"
        subtitle="Quantify your incremental revenue, blended advertising efficiency, and cross-border volume lift across Amazon (KSA, USA, UK), Noon, Trendyol GCC, and high-converting Shopify storefronts."
        breadcrumbs={[
          { label: 'Interactive Revenue Simulator' }
        ]}
        primaryCtaText="Simulate Projections Below"
        primaryCtaLink="#simulator-engine"
        secondaryCtaText="Schedule Discovery Call"
        secondaryCtaLink="/book-audit"
        metrics={[
          { val: '94.2%', label: 'Model Accuracy', sub: 'Calibrated against 35+ brands' },
          { val: '8.40x', label: 'Avg Blended ROAS', sub: 'Portfolio weighted benchmark' },
          { val: '7 Major', label: 'Supported Channels', sub: 'Amazon, Noon, Trendyol, D2C' }
        ]}
      />

      {/* Full Interactive Simulator Engine */}
      <div id="simulator-engine" style={{ padding: '20px 0 60px' }}>
        <GrowthCalculator />
      </div>

      {/* Methodology & Calculation Framework */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">Methodology</div>
            <h2>How The Calculator Works</h2>
            <p>
              Our econometric growth models synthesize historical category baselines, ad elasticity curves, and cross-channel margin synergy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="insight-card">
              <div className="insight-badge" style={{ width: 'fit-content', marginBottom: '14px' }}>
                Channel Synergy
              </div>
              <h3 className="insight-title" style={{ fontSize: '1.2rem' }}>Omnichannel Brand Halo Effect</h3>
              <p className="insight-summary">
                Brands scaling simultaneously on Amazon, Noon, and Shopify experience an average +38% increase in organic search volume and lower blended customer acquisition cost (CAC).
              </p>
            </div>

            <div className="insight-card">
              <div className="insight-badge" style={{ width: 'fit-content', marginBottom: '14px', color: 'var(--neon-mint)', borderColor: 'rgba(0, 245, 155, 0.3)', background: 'rgba(0, 245, 155, 0.1)' }}>
                GCC Inbound
              </div>
              <h3 className="insight-title" style={{ fontSize: '1.2rem' }}>Saudi & Gulf Conversion Power</h3>
              <p className="insight-summary">
                Integrating Tabby, Tamara BNPL, and local fulfillment (FBA Riyadh & Noon FBN) elevates storefront conversion rates from 1.2% to 3.8%+, generating accelerated GMV velocity.
              </p>
            </div>

            <div className="insight-card">
              <div className="insight-badge" style={{ width: 'fit-content', marginBottom: '14px', color: '#F59E0B', borderColor: 'rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.1)' }}>
                Target ACOS
              </div>
              <h3 className="insight-title" style={{ fontSize: '1.2rem' }}>TACoS-First Margin Governance</h3>
              <p className="insight-summary">
                We govern ad spend against Total Advertising Cost of Sales (TACoS), ensuring paid volume scales net contribution profit without eroding bottom-line unit economics.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/book-audit" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
              Turn This Model into an Executed Roadmap ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
