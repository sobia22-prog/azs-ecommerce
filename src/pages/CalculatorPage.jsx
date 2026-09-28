import React from 'react';
import { Link, useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';
import GrowthCalculator from '../components/GrowthCalculator';
import { useCurrency } from '../context/CurrencyContext';

export default function CalculatorPage() {
  const { path } = useRouter();
  const canonicalPath = path === '/roi-simulator' ? '/roi-simulator' : '/calculator';
  const { isSAR } = useCurrency();
  useSEO({
    title: 'Interactive Ecommerce & Marketplace ROI Simulator | AZS Solutions',
    description: 'Simulate your brand’s 6-month GMV run-rate and ad ROAS across Amazon KSA/USA/UK, Noon, Trendyol GCC, and Shopify D2C.',
    keywords: 'Amazon revenue calculator, ecommerce ROI simulator, Noon seller GMV projection, Trendyol GCC revenue estimator, Shopify ad spend ROAS calculator',
    ogTitle: 'Interactive Multi-Marketplace Growth Simulator | AZS Solutions',
    ogDescription: 'Model your incremental revenue and blended ROAS scaling across Saudi Arabia, UAE, USA, and UK.',
    canonicalPath
  });

  const methods = [
    {
      badge: 'Channel Synergy',
      title: 'Omnichannel Brand Halo Effect',
      desc: 'Brands scaling simultaneously on Amazon, Noon, and Shopify experience an average +38% increase in organic search volume and lower blended CAC.'
    },
    {
      badge: 'GCC Inbound',
      title: 'Saudi & Gulf Conversion Power',
      desc: 'Integrating Tabby, Tamara BNPL, and local fulfillment (FBA Riyadh & Noon FBN) elevates storefront conversion rates from 1.2% to 3.8%+.'
    },
    {
      badge: 'Target ACOS',
      title: 'TACoS-First Margin Governance',
      desc: 'We govern ad spend against Total Advertising Cost of Sales (TACoS), ensuring paid volume scales net contribution profit without eroding unit margins.'
    }
  ];

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="ROI Simulator"
        title="Revenue Run-Rate"
        highlight="Simulator"
        subtitle="Model your incremental revenue, blended advertising efficiency, and cross-border volume lift across Amazon, Noon, Trendyol, and Shopify."
        breadcrumbs={[
          { label: 'Revenue Simulator' }
        ]}
        primaryCtaText="Simulate Projections Below"
        primaryCtaLink="#simulator-engine"
        secondaryCtaText="Schedule Discovery Call"
        secondaryCtaLink="/book-audit"
        metrics={[
          { val: '94.2%', label: 'Model Accuracy', sub: 'Calibrated benchmark' },
          { val: '8.40x', label: 'Avg Blended ROAS', sub: 'Portfolio baseline' },
          { val: '7 Channels', label: 'Supported Hubs', sub: 'Amazon, Noon, D2C' }
        ]}
      />

      {/* Full Interactive Simulator Engine */}
      <div id="simulator-engine" style={{ padding: '20px 0 50px' }}>
        <GrowthCalculator />
      </div>

      {/* Methodology & Calculation Framework */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '18px' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 4.4vw, 1.45rem)', margin: 0 }}>How The Calculator Works</h2>
          </div>

          <div className="unboxed-guarantees-grid">
            {methods.map((m, idx) => (
              <div key={idx} className="unboxed-guarantee-item">
                <div className="unboxed-guarantee-icon">
                  <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>{idx + 1}</span>
                </div>
                <div className="unboxed-guarantee-content">
                  <h3 className="unboxed-guarantee-title">{m.title}</h3>
                  <p className="unboxed-guarantee-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link to="/book-audit" className="btn btn-primary" style={{ padding: '11px 22px', fontSize: '0.86rem' }}>
              Book Growth Audit ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
