import React, { useState } from 'react';
import { useRouter } from './Router';
import useSEO from './hooks/useSEO';

// Core Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import PlatformTicker from './components/PlatformTicker';
import TrackSwitcher from './components/TrackSwitcher';
import Marketplaces from './components/Marketplaces';
import ShopifyGrowth from './components/ShopifyGrowth';
import ChallengeSolutionMatrix from './components/ChallengeSolutionMatrix';
import WhatWeManage from './components/WhatWeManage';
import CaseStudies from './components/CaseStudies';
import TailoredPrograms from './components/TailoredPrograms';
import GrowthEngine from './components/GrowthEngine';
import WhyTrustSection from './components/WhyTrustSection';
import Testimonials from './components/Testimonials';
import GrowthCalculator from './components/GrowthCalculator';
import FaqSection from './components/FaqSection';
import AuditBooking from './components/AuditBooking';
import Footer from './components/Footer';
import ProofModal from './components/ProofModal';
import RobotCompanion from './components/RobotCompanion';
import MobileBottomNav from './components/MobileBottomNav';

// Dedicated Sub-Pages
import MarketplacesDivisionPage from './pages/MarketplacesDivisionPage';
import AmazonPlatformPage from './pages/AmazonPlatformPage';
import AmazonUSAPlatformPage from './pages/AmazonUSAPlatformPage';
import NoonPlatformPage from './pages/NoonPlatformPage';
import TrendyolPlatformPage from './pages/TrendyolPlatformPage';
import AccountHealthPage from './pages/AccountHealthPage';
import ShopifyDivisionPage from './pages/ShopifyDivisionPage';
import ShopifySubservicePage from './pages/ShopifySubservicePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import InsightsPage from './pages/InsightsPage';
import AuditBookingPage from './pages/AuditBookingPage';
import CalculatorPage from './pages/CalculatorPage';
import ServicesPage from './pages/ServicesPage';
import ProgramsPricingPage from './pages/ProgramsPricingPage';
import AboutPage from './pages/AboutPage';
import { CurrencyProvider } from './context/CurrencyContext';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';

export default function App() {
  const { path } = useRouter();

  const [modalState, setModalState] = useState({
    isOpen: false,
    imgSrc: '',
    title: ''
  });

  const [activeTrack, setActiveTrack] = useState('marketplaces');
  const [activePlatform, setActivePlatform] = useState('all');
  const [currency, setCurrency] = useState('USD'); // 'USD' or 'GCC'

  // Normalize path (handle trailing slashes: e.g. /about/ -> /about)
  const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

  // Default SEO for root home route
  useSEO({
    title: 'AZS Solutions | Ecommerce Growth & Performance Marketing Partner',
    description: 'End-to-end marketplace management (Amazon, Noon, Trendyol) and Shopify performance marketing across Saudi Arabia, UAE, USA, and the UK.',
    keywords: 'AZS Solutions, Amazon agency Saudi Arabia, Noon marketplace management, Trendyol GCC expansion, Shopify agency Dubai, Meta Ads UAE, ecommerce growth GCC',
    ogTitle: 'AZS Solutions | Ecommerce & Performance Marketing Partner',
    ogDescription: 'Scale across Amazon, Noon, Trendyol, and high-converting Shopify storefronts. Backed by verified client results and $142.8M+ GMV.',
    canonicalPath: '/'
  });

  const handleToggleCurrency = () => {
    setCurrency(prev => prev === 'USD' ? 'GCC' : 'USD');
  };

  const handleOpenModal = (imgSrc, title) => {
    setModalState({ isOpen: true, imgSrc, title });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, imgSrc: '', title: '' });
  };

  const handleSelectTrack = (track) => {
    setActiveTrack(track);
    const targetId = track === 'marketplaces' ? 'marketplaces' : 'shopify-d2c';
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlatform = (platformId) => {
    setActivePlatform(platformId);
    if (['amazon', 'noon', 'trendyol', 'ksa', 'usa', 'uk'].includes(platformId)) {
      setActiveTrack('marketplaces');
      const el = document.getElementById('marketplaces');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (['shopify', 'meta', 'tiktok', 'google'].includes(platformId)) {
      setActiveTrack('shopify');
      const el = document.getElementById('shopify-d2c');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Route Dispatcher (Part 3 Full Two-Division Sitemap + Admin Console)
  const renderPageContent = () => {
    // 0. Super Admin Console & Login
    if (cleanPath === '/admin/login') {
      return <AdminLoginPage />;
    }
    if (cleanPath.startsWith('/admin')) {
      return <AdminDashboardPage />;
    }

    // 1. Generic Services Hub and /services/:slug
    if (cleanPath.startsWith('/services')) {
      return <ServicesPage />;
    }

    // 2. Shopify & DTC Subservices (/shopify-dtc/store-setup, /meta-ads, etc.)
    if (cleanPath.startsWith('/shopify-dtc/') && cleanPath !== '/shopify-dtc') {
      return <ShopifySubservicePage />;
    }

    // 3. Case Studies Index and /case-studies/:slug
    if (cleanPath.startsWith('/case-studies')) {
      return <CaseStudiesPage onOpenModal={handleOpenModal} />;
    }

    switch (cleanPath) {
      // Division 1: Marketplace Management
      case '/marketplace-management':
      case '/marketplaces':
        return <MarketplacesDivisionPage onOpenModal={handleOpenModal} />;
      case '/marketplace-management/amazon-ksa':
      case '/amazon':
        return <AmazonPlatformPage onOpenModal={handleOpenModal} />;
      case '/marketplace-management/amazon-usa':
        return <AmazonUSAPlatformPage onOpenModal={handleOpenModal} />;
      case '/marketplace-management/noon':
      case '/noon':
        return <NoonPlatformPage onOpenModal={handleOpenModal} />;
      case '/marketplace-management/trendyol':
      case '/trendyol':
        return <TrendyolPlatformPage onOpenModal={handleOpenModal} />;
      case '/marketplace-management/listing-optimization':
        return <ServicesPage defaultSlug="catalog-optimization" />;
      case '/marketplace-management/ppc-advertising':
        return <ServicesPage defaultSlug="performance-ads" />;
      case '/marketplace-management/account-health':
        return <AccountHealthPage />;

      // Division 2: Shopify & DTC Division Hub
      case '/shopify-dtc':
      case '/shopify':
        return <ShopifyDivisionPage onOpenModal={handleOpenModal} />;

      // Shared Core Pages
      case '/programs-pricing':
      case '/pricing':
        return <ProgramsPricingPage currency={currency} onToggleCurrency={handleToggleCurrency} />;
      case '/blog':
      case '/insights':
        return <InsightsPage />;
      case '/about':
        return <AboutPage />;
      case '/calculator':
      case '/roi-simulator':
        return <CalculatorPage currency={currency} onToggleCurrency={handleToggleCurrency} />;
      case '/book-audit':
      case '/contact':
        return <AuditBookingPage />;
      default:
        // Consolidated Home View
        return (
          <>
            <Hero 
              onOpenModal={handleOpenModal} 
              currency={currency} 
            />
            <StatsStrip 
              currency={currency} 
            />
            <TrackSwitcher 
              activeTrack={activeTrack} 
              onSelectTrack={handleSelectTrack} 
            />
            <Marketplaces 
              onOpenModal={handleOpenModal} 
            />
            <ShopifyGrowth 
              onOpenModal={handleOpenModal} 
            />
            <ChallengeSolutionMatrix onOpenModal={handleOpenModal} />
            <WhatWeManage onOpenModal={handleOpenModal} />
            <PlatformTicker 
              activePlatform={activePlatform} 
              onSelectPlatform={handleSelectPlatform} 
            />
            <CaseStudies 
              onOpenModal={handleOpenModal} 
            />
            <TailoredPrograms currency={currency} />
            <GrowthEngine />
            <WhyTrustSection onOpenModal={handleOpenModal} />
            <Testimonials />
            <GrowthCalculator 
              currency={currency} 
            />
            <FaqSection />
            <AuditBooking />
          </>
        );
    }
  };

  if (cleanPath.startsWith('/admin')) {
    return (
      <CurrencyProvider>
        {renderPageContent()}
      </CurrencyProvider>
    );
  }

  return (
    <CurrencyProvider>
      <div className="app-root">
        {/* Dynamic Ambient Background Orbs */}
        <div className="ambient-orb orb-1" aria-hidden="true"></div>
        <div className="ambient-orb orb-2" aria-hidden="true"></div>
        <div className="ambient-orb orb-3" aria-hidden="true"></div>

        <Navbar />

        <main id="main-content">
          {renderPageContent()}
        </main>

        <Footer />

        {/* Mobile Sticky App-like Bottom Navigation Dock */}
        <MobileBottomNav />

        {/* Interactive Waving Robot Companion Dock */}
        <RobotCompanion />

        <ProofModal
          isOpen={modalState.isOpen}
          imgSrc={modalState.imgSrc}
          title={modalState.title}
          onClose={handleCloseModal}
        />
      </div>
    </CurrencyProvider>
  );
}

