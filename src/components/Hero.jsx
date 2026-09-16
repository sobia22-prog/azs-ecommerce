import React, { useState } from 'react';
import { Link } from '../Router';

export default function Hero({ onOpenModal, currency = 'USD' }) {
  const isGCC = currency === 'GCC';
  
  // Format numbers depending on currency
  const formatHeroVal = (usdNum) => {
    if (isGCC) {
      const sarNum = Math.round(usdNum * 3.75);
      return `SAR ${sarNum.toLocaleString()}`;
    }
    return `$${usdNum.toLocaleString()}`;
  };

  const points = [
    { cx: 70, cy: 110, usdVal: 24200000, label: 'Q1 Acceleration' },
    { cx: 160, cy: 95, usdVal: 48600000, label: 'Q2 GCC Rollout' },
    { cx: 250, cy: 75, usdVal: 81400000, label: 'Q3 High Season' },
    { cx: 350, cy: 45, usdVal: 116900000, label: 'Q4 Peak Sales' },
    { cx: 480, cy: 18, usdVal: 142850000, label: 'Current Run-Rate' },
  ];

  const [activePoint, setActivePoint] = useState(null);
  const [activeLabel, setActiveLabel] = useState('All-Time Volume');

  const displayedVal = activePoint !== null 
    ? formatHeroVal(points[activePoint].usdVal)
    : formatHeroVal(142850000);

  return (
    <section className="section hero-section">
      <div className="container">
        {/* Single Unified Eyebrow Badge */}
        <div className="hero-eyebrow-row">
          <div className="hero-single-eyebrow">
            <span className="punchy-tag-dot"></span>
            <span className="eyebrow-lead">GCC & GLOBAL COMMERCE:</span>
            <span className="eyebrow-channels">🇸🇦 KSA (Amazon & Noon) • 🇺🇸 Amazon US • 🇬🇧 Amazon UK • 🛍️ Shopify DTC</span>
          </div>
        </div>

        <div className="hero-grid">
          {/* Left Column: Value Proposition (50%) */}
          <div className="hero-content">
            <h1>
              Scaling Commerce <br />
              <span className="gradient-text">Beyond Borders.</span>
            </h1>

            {/* Named Partner Credential Subhead */}
            <p className="hero-subtitle">
              As an <strong>Amazon SPN Verified Partner</strong>, <strong>Noon Certified Growth Partner</strong>, and <strong>Shopify Plus Partner</strong>, we scale enterprise brands across Saudi Arabia, UAE, USA, and the UK with full-funnel performance marketing, Buy Box governance, and localized fulfillment.
            </p>

            <div className="hero-cta-group">
              <Link to="/book-audit" className="btn btn-primary">
                Scale Your Brand
                <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link to="/case-studies" className="btn btn-secondary">
                Explore Case Studies
              </Link>
            </div>

            {/* Unified High-Trust Social Proof Bar */}
            <div className="hero-unified-proof">
              <div className="proof-trustpilot-block">
                <div className="tp-stars-row">
                  <span className="tp-star-box">★</span>
                  <span className="tp-star-box">★</span>
                  <span className="tp-star-box">★</span>
                  <span className="tp-star-box">★</span>
                  <span className="tp-star-box">★</span>
                </div>
                <div className="proof-tp-text">
                  <strong>4.9 / 5.0</strong> on <span className="tp-brand-name">Trustpilot</span>
                  <span className="tp-sub-count">(45+ Reviews)</span>
                </div>
              </div>

              <div className="proof-v-divider"></div>

              <div className="hero-trust-avatars-wrap">
                <div className="hero-trust-avatars">
                  <div className="avatar-chip" style={{ backgroundColor: '#00F59B', color: '#000', fontWeight: 800, fontSize: 10 }}>KSA</div>
                  <div className="avatar-chip" style={{ backgroundColor: '#00D2FF', color: '#000', fontWeight: 800, fontSize: 10 }}>USA</div>
                  <div className="avatar-chip" style={{ backgroundColor: '#A855F7', color: '#000', fontWeight: 800, fontSize: 10 }}>UK</div>
                </div>
                <div className="proof-avatars-text">
                  Trusted by <strong>35+ enterprise brands</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Real-Time Revenue Chart Card */}
          <div className="hero-visual">
            <div className="live-revenue-card">
              <div className="card-topbar">
                <span className="card-title-sub">Verified Portfolio Volume</span>
                <span className="live-tag">
                  <span className="pulse-dot"></span>
                  {activeLabel}
                </span>
              </div>

              <div className="revenue-number-row">
                <div className="live-revenue-val">{displayedVal}</div>
                <div className="growth-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                  +314% YoY
                </div>
              </div>

              {/* Glowing Interactive SVG Chart */}
              <div className="chart-container">
                <svg className="chart-svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartMintGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00F59B" stopOpacity="0.4" />
                      <stop offset="60%" stopColor="#00D2FF" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#00F59B" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="35" x2="500" y2="35" className="chart-grid-line" />
                  <line x1="0" y1="75" x2="500" y2="75" className="chart-grid-line" />
                  <line x1="0" y1="115" x2="500" y2="115" className="chart-grid-line" />

                  {/* Area Gradient */}
                  <polygon
                    points="0,150 0,118 70,110 160,95 250,75 350,45 480,18 500,15 500,150"
                    fill="url(#chartMintGrad)"
                  />

                  {/* Glow Line */}
                  <path
                    d="M 0,118 Q 35,114 70,110 T 160,95 T 250,75 T 350,45 T 480,18 L 500,15"
                    className="chart-stroke"
                  />

                  {/* Interactive Points */}
                  {points.map((pt, i) => (
                    <circle
                      key={i}
                      cx={pt.cx}
                      cy={pt.cy}
                      r="5.5"
                      className="chart-point"
                      onMouseEnter={() => {
                        setActivePoint(i);
                        setActiveLabel(pt.label);
                      }}
                      onMouseLeave={() => {
                        setActivePoint(null);
                        setActiveLabel('All-Time Volume');
                      }}
                    />
                  ))}
                </svg>
              </div>

              {/* Real Client Proof Chips Strip */}
              <div className="hero-products-proof-strip">
                <span className="proof-strip-label">Managed Brands:</span>
                <div className="proof-chips-row">
                  <span className="product-proof-chip">HomeMaster Air Fryer</span>
                  <span className="product-proof-chip">LIVORA French Linen</span>
                  <span className="product-proof-chip">Creative Things Audio</span>
                </div>
              </div>

              {/* Verified KPI Grid: 3 Clean, Well-Spaced Metrics */}
              <div className="hero-kpis hero-kpis-3col">
                <div className="kpi-chip">
                  <div className="kpi-label">Blended ROAS</div>
                  <div className="kpi-val">8.40x</div>
                </div>
                <div className="kpi-chip">
                  <div className="kpi-label">Avg ACOS</div>
                  <div className="kpi-val">11.8%</div>
                </div>
                <div className="kpi-chip">
                  <div className="kpi-label">Buy Box Win Rate</div>
                  <div className="kpi-val">93.4%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
