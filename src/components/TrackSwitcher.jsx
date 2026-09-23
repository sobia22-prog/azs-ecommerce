import React from 'react';

export default function TrackSwitcher({ activeTrack, onSelectTrack }) {
  return (
    <div className="container">
      <div className="track-switcher-wrap">
        <div className="track-tabs-container">
          <button
            className={`track-tab-btn ${activeTrack === 'marketplaces' ? 'active' : ''}`}
            onClick={() => onSelectTrack('marketplaces')}
            aria-label="Switch to Marketplaces Division"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="track-title-text">Marketplaces</span>
            <span className="track-badge-tag">Amazon • Noon • Trendyol</span>
          </button>

          <button
            className={`track-tab-btn ${activeTrack === 'shopify' ? 'active' : ''}`}
            onClick={() => onSelectTrack('shopify')}
            aria-label="Switch to Shopify and Paid Media Division"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span className="track-title-text">Shopify & D2C</span>
            <span className="track-badge-tag">Meta • TikTok • Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

