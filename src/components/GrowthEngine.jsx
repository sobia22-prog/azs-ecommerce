import React from 'react';

export default function GrowthEngine() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Assess products, unit economics, competitor benchmarking, and multi-channel fit across UAE, Saudi Arabia, and international markets.'
    },
    {
      num: '02',
      title: 'Set Up',
      desc: 'Configure merchant accounts, Brand Registry, Arabic/English catalog structuring, high-converting storefront architecture, and FBA/FBN logistics.'
    },
    {
      num: '03',
      title: 'Launch',
      desc: 'Go live with listings, Buy Box readiness, promotional deals, and initial targeted Sponsored Product and Brand ad campaigns.'
    },
    {
      num: '04',
      title: 'Optimize',
      desc: 'Search-term harvesting, negative keyword pruning, bid tuning, A/B conversion testing, and margin-protected promotional scaling.'
    },
    {
      num: '05',
      title: 'Scale',
      desc: 'Expand into stronger growth, new SKUs, new GCC countries (UAE ➔ KSA ➔ Kuwait/Qatar), and activate cross-channel synergy.'
    }
  ];

  return (
    <section className="section section-alt desktop-only" id="process">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">Our Process</div>
          <h2>Our 5-Step Process</h2>
          <p>
            A practical, proven path from initial setup to sustained multi-channel growth.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((s, idx) => (
            <div className="process-step-card" key={idx}>
              <div className="step-number-circle">{s.num}</div>
              <h3 className="step-card-title">{s.title}</h3>
              <p className="step-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
