import React, { useState } from 'react';
import { Link } from '../Router';

export default function WhatWeManage({ onOpenModal }) {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      slug: 'store-setup',
      num: '01',
      shortTab: '01 Setup',
      title: 'Store Setup & Design',
      category: 'Brand Foundations',
      summary: 'Marketplace onboarding, storefront setup and brand-ready presentation.',
      highlights: [
        'Amazon Brand Registry (KSA, USA, UK) & Noon Setup',
        'Bilingual Arabic/EN High-Converting Storefront UX'
      ],
      channels: ['KSA (Amz/Noon)', 'USA', 'UK', 'Shopify'],
      impactMetric: '100% Brand Verification',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      slug: 'catalog-optimization',
      num: '02',
      shortTab: '02 Catalog',
      title: 'Catalog & Listings',
      category: 'Organic Dominance',
      summary: 'Uploads, variations, algorithmic SEO and listing hygiene.',
      highlights: [
        'Algorithmic Keyword Harvesting for Arabic & English',
        'Premium A+ Content & Parent-Child SKU Architecture'
      ],
      channels: ['Amazon.sa', 'Amazon.com', 'Amazon.co.uk', 'Noon KSA'],
      impactMetric: '+38% Organic CVR',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      id: 3,
      slug: 'pricing-inventory',
      num: '03',
      shortTab: '03 Pricing',
      title: 'Pricing & Inventory',
      category: 'Margin Protection',
      summary: 'Margin protection, stock coordination and promotion planning.',
      highlights: [
        'Dynamic Algorithmic Repricing Safeguarding Margins',
        '30/60/90-Day Run-Rate & Peak Stockout Defense'
      ],
      channels: ['KSA FBN/FBA', 'US FBA Network', 'UK Pan-EU FBA'],
      impactMetric: 'Zero Stockout Drift',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      id: 4,
      slug: 'orders-fulfillment',
      num: '04',
      shortTab: '04 Logistics',
      title: 'Orders & Fulfillment',
      category: 'Operational Flow',
      summary: 'Operational follow-up, FBA or marketplace coordination and issue handling.',
      highlights: [
        'FBA / FBN Direct Inbound Sorting & Barcode Prep',
        'Cross-Border Customs Clearance & Return Inspections'
      ],
      channels: ['US Inbound FBA', 'KSA FBN/FBA', 'UK Prime 3PL'],
      impactMetric: '99.8% On-Time Flow',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      )
    },
    {
      id: 5,
      slug: 'advertising-growth',
      num: '05',
      shortTab: '05 Ads',
      title: 'Advertising & Growth',
      category: 'Performance Marketing',
      summary: 'Amazon, Noon, Meta, TikTok and Google paid media management.',
      highlights: [
        'Amazon SP/SB/SD & Noon On-Site Bid Automation',
        'Meta Advantage+, TikTok UGC & Google PMax Funnels'
      ],
      channels: ['Amazon Ads', 'Noon Ads', 'Meta', 'TikTok', 'Google'],
      impactMetric: '8.4x - 14.4x ROAS',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      )
    },
    {
      id: 6,
      slug: 'reporting-analytics',
      num: '06',
      shortTab: '06 BI',
      title: 'Reporting & Analytics',
      category: 'Data & Intelligence',
      summary: 'Sales, ad performance and operational dashboards for decision-making.',
      highlights: [
        'Real-Time Live Executive Consolidated Dashboards',
        'Weekly TACoS Audits & SKU Contribution Margin'
      ],
      channels: ['KSA/USA/UK Portal', 'TACoS Audits'],
      impactMetric: 'Radical Transparency',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      )
    }
  ];

  const currentSrv = services[activeService] || services[0];

  const renderServiceCard = (srv) => (
    <div
      key={srv.id}
      className={`service-coverage-card ${activeService === srv.id - 1 ? 'highlighted' : ''}`}
      onMouseEnter={() => setActiveService(srv.id - 1)}
    >
      <div className="srv-card-top">
        <div className="srv-icon-badge">{srv.icon}</div>
        <div className="srv-num-pill">{srv.num}</div>
      </div>

      <div className="srv-category-tag">{srv.category}</div>
      <h3 className="srv-card-title">{srv.title}</h3>
      <p className="srv-card-summary">{srv.summary}</p>

      <div className="srv-details-list">
        {srv.highlights.map((h, i) => (
          <div key={i} className="srv-detail-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--neon-mint)" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{h}</span>
          </div>
        ))}
      </div>

      <div className="srv-card-footer" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="srv-channels-chips">
            {srv.channels.map((ch, i) => (
              <span key={i} className="srv-ch-chip">{ch}</span>
            ))}
          </div>
          <div className="srv-impact-metric">{srv.impactMetric}</div>
        </div>

        <Link 
          to={`/services/${srv.slug}`} 
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.80rem', fontWeight: 700, color: 'var(--neon-mint)', textDecoration: 'none', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
        >
          <span>Explore Module SLA & Deliverables</span>
          <span>➔</span>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="section" id="service-coverage">
      <div className="container">
        <div className="section-header">
          <div className="deck-eyebrow-pill">
            <span className="deck-num">04</span>
            <span>SERVICE COVERAGE</span>
          </div>
          <h2>What We Manage</h2>
          <p>
            An accountable end-to-end service stack delivering operational excellence across KSA, USA, and UK.
          </p>
        </div>

        {/* Visual Media Hero Banner */}
        <div className="coverage-visual-hero">
          <div className="coverage-visual-hero-inner">
            <div
              className="coverage-hero-img-wrap"
              onClick={() => onOpenModal && onOpenModal('/assets/gcc_logistics_network.jpg', 'KSA, USA & UK Supply Chain Network')}
              title="Click to zoom logistics & fulfillment network"
            >
              <img src="/assets/gcc_logistics_network.jpg" alt="Cross-Border Supply Chain & Fulfillment Network" loading="lazy" />
              <span className="mkt-media-overlay-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Inspect Infrastructure
              </span>
            </div>

            <div className="coverage-hero-content">
              <div className="badge-pill badge-pill-cyan">KSA, USA & UK Infrastructure</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-pure)' }}>
                Fulfillment, Advertising & Operations Synchronized
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                We eliminate operational fragmentation by bridging factory supply lines directly to marketplace fulfillment (FBA, FBN, 3PL) and algorithmic ad acceleration.
              </p>
              <div className="coverage-hero-pills">
                <span className="coverage-hero-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-mint)', boxShadow: '0 0 8px rgba(0,245,155,0.8)', flexShrink: 0 }}></span>
                  KSA 3PL (Riyadh &amp; Jeddah)
                </span>
                <span className="coverage-hero-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-mint)', boxShadow: '0 0 8px rgba(0,245,155,0.8)', flexShrink: 0 }}></span>
                  US FBA Restock
                </span>
                <span className="coverage-hero-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-mint)', boxShadow: '0 0 8px rgba(0,245,155,0.8)', flexShrink: 0 }}></span>
                  UK Prime &amp; Pan-EU
                </span>
                <span className="coverage-hero-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--neon-mint)', flexShrink: 0 }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  100% Health Shield
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Only Interactive 6-Pillar Tab Bar */}
        <div className="mobile-services-tabs-bar">
          {services.map((srv, idx) => (
            <button
              key={srv.id}
              className={`mobile-srv-tab-btn ${activeService === idx ? 'active' : ''}`}
              onClick={() => setActiveService(idx)}
            >
              {srv.shortTab}
            </button>
          ))}
        </div>

        {/* Mobile Single Active Service Card View */}
        <div className="mobile-srv-single-card-wrap">
          {renderServiceCard(currentSrv)}
        </div>

        {/* Desktop 6-Card Coverage Grid */}
        <div className="desktop-services-grid services-coverage-grid">
          {services.map((srv) => renderServiceCard(srv))}
        </div>

        {/* Explore All 6 Services Hub Link */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link to="/services" className="btn btn-secondary" style={{ padding: '12px 28px', fontSize: '0.92rem' }}>
            Explore All 6 Core Service Specifications & SLAs ➔
          </Link>
        </div>

        {/* Deck Slide Footer Tagline */}
        <div className="deck-slide-footer">
          <div className="deck-footer-left">BRANDS | MARKETPLACES | PERFORMANCE | GROWTH</div>
          <div className="deck-footer-right">
            <span className="deck-footer-bar"></span>
            <span>04 / 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}

