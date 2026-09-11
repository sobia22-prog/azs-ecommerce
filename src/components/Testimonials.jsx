import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      stars: '★★★★★',
      quote: 'AZS Solutions transformed our Amazon GCC operations. In less than 90 days, our ACOS dropped from 34% down to 6.93% while sales skyrocketed past SAR 180K/month. Their team handles everything from listings to inventory sync seamlessly.',
      name: 'Tariq Al-Mansoor',
      role: 'Managing Director, HomeMaster Appliances (Riyadh)',
      initials: 'TA'
    },
    {
      stars: '★★★★★',
      quote: 'Expanding onto Noon and Trendyol was completely overwhelming for our internal team. AZS brought the exact playbook, onboarded our 400+ SKUs, and produced over 500 orders in month one with a 5.09x ROAS on Noon.',
      name: 'Sara Mitchell',
      role: 'VP of International E-commerce, LIVORA London',
      initials: 'SM'
    },
    {
      stars: '★★★★★',
      quote: 'Their bilingual Arabic/English team is unmatched. They revamped our Shopify storefront, integrated Meta and TikTok ads, and delivered a +104% revenue jump with a 4.8/5 store health score. AZS is our most valuable partner.',
      name: 'Rashid Khan',
      role: 'Co-Founder, Creative Things Studio (Dubai)',
      initials: 'RK'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">Client Testimonials</div>
          <h2>Trusted by Ecommerce Leaders Worldwide</h2>
          <p>
            Real feedback from enterprise and scaling brand founders across the GCC and internationally.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, idx) => (
            <div className="testi-card" key={idx}>
              <div className="testi-rating">{r.stars}</div>
              <p className="testi-quote">"{r.quote}"</p>
              <div className="testi-author-row">
                <div className="testi-avatar">{r.initials}</div>
                <div>
                  <div className="testi-name">{r.name}</div>
                  <div className="testi-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
