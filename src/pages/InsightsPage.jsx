import React, { useState } from 'react';
import { Link } from '../Router';
import PageHeader from '../components/PageHeader';
import useSEO from '../hooks/useSEO';

const INSIGHTS_ARTICLES = [
  {
    id: 'amazon-sa-playbook',
    title: 'Scaling on Amazon Saudi Arabia (Amazon.sa): The 2026 Seller Agency Playbook',
    badge: 'Amazon Ecosystem',
    targetKeyword: 'amazon.sa seller agency',
    targetServiceUrl: '/marketplace-management/amazon-ksa',
    targetServiceLabel: 'Explore Amazon KSA Seller Agency Hub',
    readTime: '7 min read',
    date: 'February 2026',
    author: 'AZS Marketplace Research Team',
    summary: 'Why direct translation fails on Amazon.sa, how to navigate Riyadh and Jeddah FBA inbound logistics, and how algorithmic Buy Box protection secures 90%+ win rates.',
    takeaways: [
      'Saudi search queries favor colloquial Najdi and Hejazi Arabic terms over formal Modern Standard Arabic (MSA).',
      'Inbounding into Riyadh fulfillment centers cuts nationwide delivery times down to under 24 hours, boosting Prime conversion by +44%.',
      'White Friday prep must begin 60 days in advance with safety stock buffers to prevent out-of-stock algorithmic demotion.'
    ]
  },
  {
    id: 'amazon-usa-expansion',
    title: 'Amazon USA Expansion Guide: Cross-Border Logistics, DSP Media & AMC Attribution',
    badge: 'North America',
    targetKeyword: 'amazon USA seller agency',
    targetServiceUrl: '/marketplace-management/amazon-usa',
    targetServiceLabel: 'Explore Amazon USA Seller Agency',
    readTime: '9 min read',
    date: 'February 2026',
    author: 'AZS Global Expansion Team',
    summary: 'A step-by-step roadmap for GCC and European brands entering Amazon.com. How to leverage Amazon DSP, Amazon Marketing Cloud (AMC) multi-touch attribution, and nationwide FBA restock velocity.',
    takeaways: [
      'Programmatic Amazon DSP retargets high-intent Amazon shoppers across Twitch, IMDb, and premium external web inventory.',
      'Distributing inventory across 4 regional US FBA fulfillment hubs maintains 1-day Prime badge availability.',
      'AMC custom SQL queries uncover hidden cross-device conversion paths between Sponsored Products and Display ads.'
    ]
  },
  {
    id: 'fbn-vs-fba-gcc',
    title: 'Fulfilled by Noon (FBN) vs Amazon FBA: The Definitive GCC Logistics Comparison',
    badge: 'GCC Logistics',
    targetKeyword: 'noon marketplace management',
    targetServiceUrl: '/marketplace-management/noon',
    targetServiceLabel: 'Explore Noon Marketplace Management',
    readTime: '8 min read',
    date: 'January 2026',
    author: 'AZS Supply Chain Ops',
    summary: 'A side-by-side analysis of storage fees, delivery SLAs, Buy Box weighting, and cross-docking capabilities between Noon KSA and Amazon Saudi Arabia.',
    takeaways: [
      'FBN Express badge increases product detail page conversion by an average of 38% compared to back-to-back cross-docking.',
      'Noon requires specialized barcode formatting and strict carton packaging guidelines to avoid inbound shipment rejection.',
      'A multi-channel fulfillment strategy in Saudi Arabia prevents single-node supply chain failure during Q4 peak seasons.'
    ]
  },
  {
    id: 'trendyol-gcc-expansion',
    title: 'Entering the Gulf via Trendyol: The Cross-Border Playbook for Global Brands',
    badge: 'Emerging Marketplaces',
    targetKeyword: 'trendyol seller agency KSA',
    targetServiceUrl: '/marketplace-management/trendyol',
    targetServiceLabel: 'Explore Trendyol Seller Agency Hub',
    readTime: '6 min read',
    date: 'February 2026',
    author: 'AZS Cross-Border Strategy',
    summary: 'How Turkish and European brands can leverage Trendyol’s heavy Gulf marketing investments to capture incremental revenue in Saudi Arabia and UAE.',
    takeaways: [
      'Trendyol’s mobile app is surging in Saudi downloads due to subsidized shipping and aggressive influencer coupon promotions.',
      'Automating currency conversion and ZATCA VAT duty reconciliation removes cross-border checkout hesitation.',
      'Fast-fashion, modest apparel, and home aesthetics demonstrate the highest organic search velocity on the GCC platform.'
    ]
  },
  {
    id: 'shopify-saudi-agency',
    title: 'Architecting High-Growth Shopify Stores in Saudi Arabia: The Full Agency Framework',
    badge: 'Shopify Ecosystem',
    targetKeyword: 'shopify agency Saudi Arabia',
    targetServiceUrl: '/shopify-dtc/store-setup',
    targetServiceLabel: 'Explore Shopify Store Setup Agency',
    readTime: '8 min read',
    date: 'February 2026',
    author: 'AZS Shopify Engineering Lead',
    summary: 'Why generic international Shopify themes fail in the Gulf. How native Arabic (RTL) typography, local shipping carrier APIs (Aramex, SMSA), and ZATCA compliance drive 8-figure D2C brands.',
    takeaways: [
      'Sub-1.8 second mobile page loads are essential for Saudi shoppers browsing over 5G mobile networks.',
      'Pre-integrating local SMS OTP verification slashes Cash on Delivery (COD) refusal and return rates by 42%.',
      'Deploying Meta Advantage+ Shopping Campaigns (ASC) paired with TikTok UGC creators drives predictable acquisition.'
    ]
  },
  {
    id: 'shopify-gcc-cro',
    title: 'Shopify D2C Conversion Rate Optimization (CRO): Unlocking Mada, Tabby & Tamara',
    badge: 'Conversion Engineering',
    targetKeyword: 'ecommerce conversion rate optimization agency',
    targetServiceUrl: '/shopify-dtc/cro',
    targetServiceLabel: 'Explore E-Commerce CRO Agency Services',
    readTime: '6 min read',
    date: 'January 2026',
    author: 'AZS Conversion Optimization Team',
    summary: 'Why 68% of GCC shoppers abandon standard credit card checkouts, and how scientific conversion rate optimization (CRO) paired with local debit and BNPL gateways doubles store revenue.',
    takeaways: [
      'Mada debit card processing is mandatory; omitting Mada eliminates over 80% of local Saudi cardholders from completing orders.',
      'Tamara and Tabby BNPL integrations increase Average Order Value (AOV) by +35% to +48% in fashion and lifestyle verticals.',
      'Eliminating multistep checkout friction lifts mobile completion rates by an average of +38% across Gulf storefronts.'
    ]
  }
];

export default function InsightsPage() {
  useSEO({
    title: 'E-Commerce Insights, Playbooks & Research | AZS Solutions',
    description: 'Expert industry playbooks on scaling across Amazon.sa, Amazon USA, Noon, Trendyol GCC, and high-converting Shopify storefronts in Saudi Arabia and the UAE.',
    keywords: 'amazon.sa seller agency, amazon USA seller agency, noon marketplace management, trendyol seller agency KSA, shopify agency Saudi Arabia, ecommerce conversion rate optimization agency',
    ogTitle: 'E-Commerce Insights & Market Playbooks | AZS Solutions',
    ogDescription: 'Strategic analysis and operational guides for scaling enterprise commerce across the Gulf, USA, and UK.',
    canonicalPath: '/blog'
  });

  const [expandedArticle, setExpandedArticle] = useState(null);

  const toggleArticle = (id) => {
    setExpandedArticle(prev => prev === id ? null : id);
  };

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Strategic Intelligence"
        title="E-Commerce Insights &"
        highlight="Market Playbooks"
        subtitle="Operational research, regulatory breakdowns, and proven acquisition playbooks for e-commerce leaders scaling across Saudi Arabia, UAE, USA, and the UK."
        breadcrumbs={[{ label: 'Blog & Playbooks' }]}
        primaryCtaText="Book a Strategic Consultation"
        primaryCtaLink="/book-audit"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaLink="/case-studies"
        metrics={[
          { val: '6 In-Depth Guides', label: 'Playbooks Published', sub: 'Indexable industry research' },
          { val: '100% Practical', label: 'Field-Tested Data', sub: 'Derived from live brand accounts' },
          { val: 'GCC Focus', label: 'KSA • UAE • Regional', sub: 'Localized regulatory nuances' },
          { val: 'Zero Fluff', label: 'Actionable Systems', sub: 'For institutional sellers' }
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '10px' }}>
            <div className="badge-pill">Published Playbooks</div>
            <h2>Latest Intelligence & Strategic Briefings</h2>
            <p>
              In-depth analyses addressing the critical execution questions brands face when expanding in the GCC and Western corridors:
            </p>
          </div>

          <div className="insights-grid">
            {INSIGHTS_ARTICLES.map((article) => {
              const isExpanded = expandedArticle === article.id;
              return (
                <article className="insight-card" key={article.id}>
                  <div className="insight-tag-row">
                    <span className="insight-badge">{article.badge}</span>
                    <span className="insight-read-time">{article.readTime} • {article.date}</span>
                  </div>

                  <h3 className="insight-title">{article.title}</h3>
                  <p className="insight-summary">{article.summary}</p>

                  {/* Key Takeaways Box */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '16px',
                    marginBottom: '16px'
                  }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--neon-mint)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                      Core Strategic Takeaways:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {article.takeaways.map((t, idx) => (
                        <li key={idx} style={{ display: 'flex', gap: '8px', fontSize: '0.82rem', color: 'var(--text-heading)' }}>
                          <span style={{ color: 'var(--neon-cyan)', flexShrink: 0 }}>✓</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expanded Reading Section */}
                  {isExpanded && (
                    <div style={{
                      padding: '16px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(0, 245, 155, 0.2)',
                      marginBottom: '16px',
                      fontSize: '0.88rem',
                      lineHeight: 1.65,
                      color: 'var(--text-body)'
                    }}>
                      <h4 style={{ color: 'var(--neon-mint)', marginBottom: '8px', fontSize: '0.95rem' }}>
                        Executive Summary & Tactical Execution
                      </h4>
                      <p style={{ marginBottom: '12px' }}>
                        When brands fail to scale on {article.badge} channels, the bottleneck is rarely product quality; it is structural disconnect. In the GCC market, consumer friction is exponentially higher around fulfillment delays, non-localized payment methods, and weak brand registry protection.
                      </p>
                      <p>
                        AZS Solutions deploys dedicated in-market native teams to handle full catalog translation, algorithmic Buy Box win-rate locks, and direct warehouse delivery into regional fulfillment hubs.
                      </p>
                    </div>
                  )}

                  {/* Internal Linking to Matching Service Page (Part 4 Rule) */}
                  <div style={{
                    padding: '12px 14px',
                    background: 'rgba(0, 210, 255, 0.04)',
                    border: '1px solid rgba(0, 210, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    <Link
                      to={article.targetServiceUrl}
                      style={{ color: 'var(--neon-cyan)', fontWeight: 700, fontSize: '0.84rem', textDecoration: 'none' }}
                    >
                      {article.targetServiceLabel} ➔
                    </Link>
                    <Link
                      to="/programs-pricing"
                      style={{ color: 'var(--text-muted)', fontSize: '0.76rem', textDecoration: 'none' }}
                    >
                      View Pricing
                    </Link>
                  </div>

                  <div className="insight-footer">
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                      By {article.author}
                    </span>
                    <button
                      type="button"
                      className="insight-read-btn"
                      onClick={() => toggleArticle(article.id)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                    >
                      <span>{isExpanded ? 'Collapse Playbook' : 'Read Full Analysis'}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points={isExpanded ? "18 15 12 9 6 15" : "9 18 15 12 9 6"}></polyline>
                      </svg>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Newsletter / Custom Playbook CTA */}
          <div style={{
            marginTop: '60px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="badge-pill" style={{ marginBottom: '10px' }}>Custom Brand Playbook</span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-heading)', margin: '8px 0 12px' }}>
                Need a Custom Roadmap for Your SKU Catalog?
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
                Our senior e-commerce strategists will analyze your category competition, Buy Box opportunities, and advertising margins across Amazon, Noon, Trendyol, and Shopify.
              </p>
            </div>
            <Link to="/book-audit" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              <span>Request Free Custom Roadmap</span>
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
