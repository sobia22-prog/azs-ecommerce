import React, { useState, useEffect } from 'react';

export default function GrowthCalculator({ currency = 'USD' }) {
  const isGCC = currency === 'GCC';
  const [revenue, setRevenue] = useState(50000);
  const [spend, setSpend] = useState(8000);
  const [channels, setChannels] = useState(['ksa', 'usa', 'uk', 'shopify', 'meta', 'google']);
  const [projection, setProjection] = useState({
    projectedMonthlyRevenue: 172500,
    incrementalMonthlyLift: 122500,
    annualizedGMV: 2070000,
    gccShare: 72450,
    targetROAS: 6.8
  });

  const formatMoney = (usdVal) => {
    if (isGCC) {
      const gccVal = Math.round(usdVal * 3.75);
      return `SAR ${gccVal.toLocaleString()}`;
    }
    return `$${usdVal.toLocaleString()}`;
  };

  const toggleChannel = (ch) => {
    if (channels.includes(ch)) {
      if (channels.length > 1) {
        setChannels(channels.filter(c => c !== ch));
      }
    } else {
      setChannels([...channels, ch]);
    }
  };

  useEffect(() => {
    // Multiplier calculation based on active channel footprint
    const baseMult = 1.65;
    const channelBonus = channels.length * 0.18;
    const effMult = baseMult + channelBonus;

    const projRev = Math.round(revenue * effMult);
    const incLift = projRev - revenue;
    const roasEst = Number((projRev / (spend * 1.35)).toFixed(1));

    setProjection({
      projectedMonthlyRevenue: projRev,
      incrementalMonthlyLift: incLift,
      annualizedGMV: projRev * 12,
      gccShare: Math.round(projRev * 0.42),
      targetROAS: Math.max(3.2, Math.min(14.5, roasEst))
    });
  }, [revenue, spend, channels]);

  return (
    <section className="section section-alt" id="calculator">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill badge-pill-cyan">Interactive Revenue Simulator</div>
          <h2>Forecast Your Multi-Marketplace Growth Potential</h2>
          <p>
            Estimate your 6-month scale across KSA, USA, and UK marketplaces with synchronized performance media.
          </p>
        </div>

        <div className="calc-card">
          {/* Controls Column */}
          <div className="calc-controls-col">
            <div className="calc-control-group">
              <div className="calc-label-row">
                <span className="input-label">Current Monthly Revenue</span>
                <span className="input-val">{formatMoney(revenue)}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="custom-range"
              />
            </div>

            <div className="calc-control-group">
              <div className="calc-label-row">
                <span className="input-label">Current Monthly Ad Spend</span>
                <span className="input-val">{formatMoney(spend)}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="100000"
                step="1000"
                value={spend}
                onChange={(e) => setSpend(Number(e.target.value))}
                className="custom-range"
              />
            </div>

            <div className="channels-select-group">
              <span className="input-label">Select Target Channels for Expansion:</span>
              <div className="channel-checkboxes">
                {[
                  { id: 'ksa', label: '✓ 🇸🇦 KSA (Amazon & Noon)' },
                  { id: 'usa', label: '✓ 🇺🇸 USA (Amazon.com)' },
                  { id: 'uk', label: '✓ 🇬🇧 UK (Amazon.co.uk)' },
                  { id: 'shopify', label: '✓ Shopify D2C' },
                  { id: 'meta', label: '✓ Meta / TikTok' },
                  { id: 'google', label: '✓ Google P-Max' },
                ].map(c => (
                  <button
                    key={c.id}
                    className={`channel-check-btn ${channels.includes(c.id) ? 'checked' : ''}`}
                    onClick={() => toggleChannel(c.id)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projected Results Column */}
          <div className="calc-results-col">
            <div>
              <div className="res-header">Projected 6-Month Monthly Run-Rate</div>
              <div className="projected-rev-big">
                {formatMoney(projection.projectedMonthlyRevenue || 172500)}
              </div>
              <div className="growth-increment-tag">
                +{formatMoney(projection.incrementalMonthlyLift || 122500)} Projected Monthly Lift
              </div>

              <div className="res-metrics-grid">
                <div className="res-metric-item">
                  <div className="res-metric-label">Target Multi-Channel ROAS</div>
                  <div className="res-metric-val">{projection.targetROAS}x ROAS</div>
                </div>
                <div className="res-metric-item">
                  <div className="res-metric-label">Est. GCC Share</div>
                  <div className="res-metric-val">{formatMoney(projection.gccShare || 72450)} (42%)</div>
                </div>
                <div className="res-metric-item">
                  <div className="res-metric-label">Annualized GMV Run-Rate</div>
                  <div className="res-metric-val">
                    {isGCC 
                      ? `SAR ${((projection.annualizedGMV * 3.75) / 1000000).toFixed(2)}M / yr`
                      : `$${(projection.annualizedGMV / 1000000).toFixed(2)}M / yr`}
                  </div>
                </div>
                <div className="res-metric-item">
                  <div className="res-metric-label">Synergy Rating</div>
                  <div className="res-metric-val" style={{ color: 'var(--neon-mint)' }}>High Synergy</div>
                </div>
              </div>
            </div>

            <a href="#book-audit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Lock In Your Tailored Growth Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
