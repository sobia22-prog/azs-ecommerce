import React, { useState } from 'react';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: 'Which marketplaces and platforms do you manage?',
      a: 'We specialize across two primary tracks: (1) Our 3 Core Enterprise Marketplaces: KSA (Saudi Arabia — Amazon.sa & Noon KSA), USA (United States — Amazon.com), and UK (United Kingdom — Amazon.co.uk); and (2) Direct-to-Consumer storefronts on Shopify, amplified by Meta Ads (Instagram & Facebook), TikTok Ads, and Google Performance Max.'
    },
    {
      q: 'How do you handle Middle Eastern (GCC) localization?',
      a: 'Our in-house bilingual team crafts culturally resonant Arabic and English titles, product descriptions, A+ modules, and ad copy. We also ensure correct currency displays (AED, SAR, QAR, KWD), local payment gateway integrations (Mada, Tabby, Tamara, Apple Pay), and compliance with GCC consumer protection laws.'
    },
    {
      q: 'How does your pricing and engagement model work?',
      a: 'We offer transparent, aligned partnership models depending on your stage: Turnkey Full-Service Management (monthly retainer + performance bonus based on net revenue growth), Fixed-Scope Launch & Setup Projects, or Performance Growth Retainers. We do not lock you into restrictive long-term handcuffs—our results speak for themselves.'
    },
    {
      q: 'What is your typical onboarding timeline?',
      a: 'Our streamlined Discovery & Setup process takes between 7 to 14 business days. During this period, we audit your existing accounts, structure listing variations, deploy tracking pixels, calibrate ad targets, and align on fulfillment workflows before campaign launch.'
    },
    {
      q: 'Can you help if our Amazon or Noon account has health issues or policy warnings?',
      a: 'Yes. Account health protection is a cornerstone of our service stack. We proactively manage customer service tickets, address policy notifications, formulate compliant Plans of Action (POAs), and coordinate with dedicated seller support channels to resolve disputes and safeguard your selling privileges.'
    }
  ];

  return (
    <section className="section section-alt" id="faqs">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">Clarity & Confidence</div>
          <h2>Frequently Asked Questions</h2>
          <p className="desktop-only">Everything you need to know about partnering with AZS Solutions.</p>
        </div>

        <div className="faq-wrap">
          {faqs.map((f, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div className={`faq-item ${isActive ? 'active' : ''}`} key={idx}>
                <button
                  className="faq-trigger"
                  onClick={() => setActiveIndex(isActive ? -1 : idx)}
                >
                  <span className="faq-question">{f.q}</span>
                  <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-content">
                  <p className="faq-answer">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
