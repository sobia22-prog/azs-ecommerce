import React from 'react';
import { useRouter } from '../Router';
import PageHeader from '../components/PageHeader';
import AuditBooking from '../components/AuditBooking';
import useSEO from '../hooks/useSEO';

export default function AuditBookingPage() {
  const { path } = useRouter();
  const canonicalPath = path === '/contact' ? '/contact' : '/book-audit';
  useSEO({
    title: 'Book a 30-Minute Growth Discovery Call & Free Account Audit | AZS Solutions',
    description: 'Schedule a free growth discovery call with AZS Solutions senior strategists. Get a full audit of your Amazon, Noon, Trendyol, or Shopify account with zero obligation.',
    keywords: 'ecommerce audit, Amazon agency consultation, Noon seller audit, Shopify growth call, schedule ecommerce discovery',
    ogTitle: 'Book Your Free Growth Audit | AZS Solutions',
    ogDescription: 'Get a full audit of your marketplace or D2C account across KSA, UAE, USA, and UK.',
    canonicalPath
  });

  return (
    <div className="subpage-wrapper">
      <PageHeader
        badge="Strategic Audit"
        title="Growth Discovery"
        highlight="Call & Audit"
        subtitle="Connect with our senior strategists to analyze your catalog, Buy Box defense, and ad margins across KSA, UAE, US, and UK."
        breadcrumbs={[{ label: 'Discovery Call & Audit' }]}
        primaryCtaText="Skip to Booking Form"
        primaryCtaLink="#booking-container"
        secondaryCtaText="View Client Results"
        secondaryCtaLink="/case-studies"
        metrics={[
          { val: '30 Min', label: 'Strategy Session', sub: 'Actionable review' },
          { val: '100% Free', label: 'Zero Obligation', sub: 'Teardown audit' },
          { val: '24h SLA', label: 'Confirmation', sub: 'Fast scheduling' },
          { val: 'NDA Ready', label: 'Confidential', sub: 'Enterprise safe' }
        ]}
      />

      <div id="booking-container">
        <AuditBooking />
      </div>
    </div>
  );
}
