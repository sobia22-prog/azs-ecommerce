import React from 'react';

export default function PlatformTicker({ activePlatform, onSelectPlatform }) {
  const platforms = [
    { id: 'all', label: 'All Channels' },
    { id: 'ksa', label: '🇸🇦 KSA Marketplaces (Amazon.sa & Noon)' },
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
