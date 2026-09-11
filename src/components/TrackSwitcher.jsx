import React from 'react';

export default function TrackSwitcher({ activeTrack, onSelectTrack }) {
  return (
    <div className="container">
      <div className="track-switcher-wrap">
        <div className="track-tabs-container">
          <button
            className={`track-tab-btn ${activeTrack === 'marketplaces' ? 'active' : ''}`}
            onClick={() => onSelectTrack('marketplaces')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Track 1: Marketplace Operations
            <span className="track-badge-tag">KSA • USA • UK</span>
          </button>

          <button
            className={`track-tab-btn ${activeTrack === 'shopify' ? 'active' : ''}`}
            onClick={() => onSelectTrack('shopify')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            Track 2: Shopify & Paid Media
            <span className="track-badge-tag">D2C • Meta • Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
