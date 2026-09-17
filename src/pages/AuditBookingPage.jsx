import React from 'react';
import PageHeader from '../components/PageHeader';
import AuditBooking from '../components/AuditBooking';
import useSEO from '../hooks/useSEO';

export default function AuditBookingPage() {
  useSEO({
    title: 'Book a 30-Minute Growth Discovery Call & Free Account Audit | AZS Solutions',
    description: 'Schedule a free growth discovery call with AZS Solutions senior strategists. Get a full audit of your Amazon, Noon, Trendyol, or Shopify account with zero obligation.',
    keywords: 'ecommerce audit, Amazon agency consultation, Noon seller audit, Shopify growth call, schedule ecommerce discovery',
    ogTitle: 'Book Your Free Growth Audit | AZS Solutions',
    ogDescription: 'Get a full audit of your marketplace or D2C account across KSA, UAE, USA, and UK.',
    canonicalPath: '/book-audit'
  });

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Direct Strategic Engagement"
        title="Schedule Your Growth"
        highlight="Discovery Call"
        subtitle="Connect directly with our senior marketplace & performance marketing directors. We analyze your catalog, Buy Box leaks, advertising ACOS, and cross-border expansion runway."
        breadcrumbs={[{ label: 'Discovery Call & Audit' }]}
        primaryCtaText="Skip to Booking Form"
        primaryCtaLink="#booking-container"
        secondaryCtaText="View Verified Results"
        secondaryCtaLink="/case-studies"
        metrics={[
          { val: '30 Minutes', label: 'Strategy Session', sub: 'Actionable review' },
          { val: '100% Free', label: 'Zero Obligation', sub: 'Comprehensive teardown' },
          { val: '24-Hour SLA', label: 'Rapid Confirmation', sub: 'Fast scheduling' },
          { val: 'NDA Protected', label: 'Confidential Review', sub: 'Enterprise safe' }
        ]}
      />

      <div id="booking-container">
        <AuditBooking />
      </div>
    </div>
  );
}
