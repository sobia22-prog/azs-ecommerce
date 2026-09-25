import React from 'react';
import { Link } from '../Router';

export default function PageHeader({
  badge,
  title,
  highlight,
  subtitle,
  breadcrumbs = [],
  primaryCtaText = 'Book Free Audit',
  primaryCtaLink = '/book-audit',
  secondaryCtaText = 'View Case Studies',
  secondaryCtaLink = '/case-studies',
  metrics = []
}) {
  return (
    <div className="page-header-container">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="subpage-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          {breadcrumbs.map((bc, idx) => (
            <React.Fragment key={idx}>
              <span className="breadcrumb-separator">/</span>
              {bc.link ? (
                <Link to={bc.link} className="breadcrumb-link">{bc.label}</Link>
              ) : (
                <span className="breadcrumb-current">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header Content */}
        <div className="subpage-header-content">
          <h1 className="subpage-title">
            {title} {highlight && <span className="gradient-text">{highlight}</span>}
          </h1>

          {subtitle && <p className="subpage-subtitle">{subtitle}</p>}

          <div className="subpage-actions">
            <Link to={primaryCtaLink} className="btn btn-primary">
              <span>{primaryCtaText}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            {secondaryCtaLink && (
              <Link to={secondaryCtaLink} className="btn btn-secondary">
                <span>{secondaryCtaText}</span>
              </Link>
            )}
          </div>

          {/* Key Metrics Bar if provided */}
          {metrics && metrics.length > 0 && (
            <div className="subpage-metrics-grid">
              {metrics.map((m, i) => (
                <div key={i} className="subpage-metric-card">
                  <div className="subpage-metric-val">{m.val}</div>
                  <div className="subpage-metric-lbl">{m.label}</div>
                  {m.sub && <div className="subpage-metric-sub">{m.sub}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
