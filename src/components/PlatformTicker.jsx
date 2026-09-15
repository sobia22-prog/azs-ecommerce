import React from 'react';

export default function PlatformTicker({ activePlatform, onSelectPlatform }) {
  const credentials = [
    {
      id: 'amazon-spn',
      name: 'Amazon SPN',
      tier: 'Verified Partner',
      badgeColor: '#00f59b',
      logo: (
        <svg viewBox="0 0 82 26" className="partner-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="1" y="16" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.6">amazon</text>
          <path d="M8 20.5 C 26 25.5, 52 25.5, 68 19.5" stroke="#FF9900" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
          <path d="M66 17 L 71 19.5 L 65 22 Z" fill="#FF9900"/>
        </svg>
      )
    },
    {
      id: 'amazon-ads',
      name: 'Amazon Ads',
      tier: 'Certified Partner',
      badgeColor: '#FF9900',
      logo: (
        <svg viewBox="0 0 106 26" className="partner-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="1" y="16" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="17.5" letterSpacing="-0.5">amazon</text>
          <text x="71" y="16" fill="#FF9900" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.2">ads</text>
          <path d="M9 20.5 C 26 25, 48 25, 63 19.5" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        </svg>
      )
    },
    {
      id: 'noon-partner',
      name: 'Noon',
      tier: 'Growth Partner',
      badgeColor: '#FEEE00',
      logo: (
        <svg viewBox="0 0 88 26" className="partner-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="12" fill="#FEEE00"/>
          <ellipse cx="13" cy="13" rx="7" ry="5" stroke="#000000" strokeWidth="2.4" fill="none"/>
          <circle cx="13" cy="13" r="2.5" fill="#000000"/>
          <text x="31" y="19" fill="#FEEE00" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="20" letterSpacing="-0.6">noon</text>
        </svg>
      )
    },
    {
      id: 'trendyol-partner',
      name: 'Trendyol',
      tier: 'Official Solution Partner',
      badgeColor: '#F27A1A',
      logo: (
        <svg viewBox="0 0 92 26" className="partner-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="1" y="18" fill="#F27A1A" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="19.5" letterSpacing="-0.6">trendyol</text>
          <circle cx="86" cy="7.5" r="2.8" fill="#F27A1A"/>
        </svg>
      )
    },
    {
      id: 'shopify-plus',
      name: 'Shopify Plus',
      tier: 'Plus Partner',
      badgeColor: '#95BF47',
      logo: (
        <svg viewBox="0 0 118 26" className="partner-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4 L 17 4 L 20 23 L 3 23 L 6 4 Z" fill="#95BF47"/>
          <path d="M8 4 C 8 1.5, 13 1.5, 13 4" stroke="#5E8E3E" strokeWidth="1.8" fill="none"/>
          <path d="M12 9 C 10.5 9 9.8 10 9.8 11 C 9.8 13 12.5 13 12.5 15 C 12.5 16.5 11.5 17 10 17" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <text x="24" y="18" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="16.5" letterSpacing="-0.3">shopify</text>
          <text x="83" y="18" fill="#95BF47" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="15">plus</text>
        </svg>
      )
    },
    {
      id: 'meta-partner',
      name: 'Meta',
      tier: 'Certified Partner',
      badgeColor: '#0081FB',
      logo: (
        <svg viewBox="0 0 84 26" className="partner-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metaLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0081FB" />
              <stop offset="100%" stopColor="#0064E0" />
            </linearGradient>
          </defs>
          <path d="M5 13 C 5 8.5, 11 8.5, 14.5 13 C 18 17.5, 24 17.5, 24 13 C 24 8.5, 18 8.5, 14.5 13 C 11 17.5, 5 17.5, 5 13 Z" stroke="url(#metaLogoGrad)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <text x="30" y="19" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="19.5" letterSpacing="-0.4">Meta</text>
        </svg>
      )
    },
    {
      id: 'google-partner',
      name: 'Google',
      tier: 'Premier Partner',
      badgeColor: '#4285F4',
      logo: (
        <svg viewBox="0 0 94 26" className="partner-logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-1, 0)">
            <path d="M14 13.5 L 7 13.5 C 7 17.2 10.2 20.2 14 20.2 C 17.4 20.2 20.1 18 20.6 14.8 L 14 14.8 Z" fill="#34A853"/>
            <path d="M14 6.8 C 16.5 6.8 18.7 7.9 20.1 9.7 L 22.5 7.3 C 20.3 5 17.3 3.5 14 3.5 C 9.9 3.5 6.4 5.9 4.7 9.4 L 8.6 12.4 C 9.5 9.2 11.5 6.8 14 6.8 Z" fill="#EA4335"/>
            <path d="M4.7 9.4 C 4.2 10.7 3.8 12.1 3.8 13.5 C 3.8 14.9 4.2 16.3 4.7 17.6 L 8.6 14.6 C 8.4 14.2 8.3 13.8 8.3 13.5 C 8.3 13.2 8.4 12.8 8.6 12.4 Z" fill="#FBBC05"/>
            <path d="M24.2 13.5 C 24.2 12.8 24.1 12.1 24 11.4 L 14 11.4 L 14 15.6 L 19.8 15.6 C 19.5 16.9 18.7 17.9 17.6 18.7 L 21 21.3 C 23 19.4 24.2 16.7 24.2 13.5 Z" fill="#4285F4"/>
          </g>
          <text x="27" y="18.5" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="18" letterSpacing="-0.3">Google</text>
        </svg>
      )
    }
  ];

  const platforms = [
    { id: 'all', label: 'All Channels' },
    { id: 'ksa', label: '🇸🇦 KSA Marketplaces (Amazon.sa & Noon)' },
    { id: 'trendyol', label: '🇹🇷 Trendyol GCC Expansion' },
    { id: 'usa', label: '🇺🇸 USA Marketplace (Amazon.com)' },
    { id: 'uk', label: '🇬🇧 UK Marketplace (Amazon.co.uk)' },
    { id: 'shopify', label: '🟢 Shopify Storefronts' },
    { id: 'meta', label: '🔵 Meta Ads (IG & FB)' },
    { id: 'tiktok', label: '🎵 TikTok Shop & Ads' },
    { id: 'google', label: '🔴 Google Performance Max' },
  ];

  return (
    <section className="platform-ticker-section">
      <div className="container">
        {/* Official Agency Credentials Bar with Authentic Visual Partner Logos */}
        <div className="certifications-ticker-row">
          <div className="cert-ticker-header">
            <span className="cert-live-dot"></span>
            <span className="cert-ticker-title">VERIFIED AGENCY CREDENTIALS:</span>
          </div>
          <div className="cert-logos-scroller">
            {credentials.map((item) => (
              <div key={item.id} className="cert-partner-card" title={item.name}>
                <div className="cert-partner-logo-wrap">
                  {item.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="platform-pill-list">
          {platforms.map(p => (
            <button
              key={p.id}
              className={`platform-badge-pill ${activePlatform === p.id ? 'active' : ''}`}
              onClick={() => onSelectPlatform(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
