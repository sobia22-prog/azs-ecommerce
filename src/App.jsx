import React, { useState } from 'react';
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

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imgSrc: '',
    title: ''
  });

  const [activeTrack, setActiveTrack] = useState('marketplaces');
  const [activePlatform, setActivePlatform] = useState('all');
  const [currency, setCurrency] = useState('USD'); // 'USD' or 'GCC'

  const handleToggleCurrency = () => {
    setCurrency(prev => prev === 'USD' ? 'GCC' : 'USD');
  };

  const handleOpenModal = (imgSrc, title) => {
    setModalState({
      isOpen: true,
      imgSrc,
      title
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
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

  return (
    <div className="app-root">
      {/* Dynamic Ambient Background Orbs */}
      <div className="ambient-orb orb-1" aria-hidden="true"></div>
      <div className="ambient-orb orb-2" aria-hidden="true"></div>
      <div className="ambient-orb orb-3" aria-hidden="true"></div>

      <Navbar 
        currency={currency} 
        onToggleCurrency={handleToggleCurrency} 
      />

      <main>
        <Hero 
          onOpenModal={handleOpenModal} 
          currency={currency} 
        />
        <StatsStrip 
          currency={currency} 
        />
        <PlatformTicker 
          activePlatform={activePlatform} 
          onSelectPlatform={handleSelectPlatform} 
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
        <CaseStudies 
          onOpenModal={handleOpenModal} 
        />
        <TailoredPrograms />
        <GrowthEngine />
        <WhyTrustSection onOpenModal={handleOpenModal} />
        <Testimonials />
        <GrowthCalculator 
          currency={currency} 
        />
        <FaqSection />
        <AuditBooking />
      </main>

      <Footer />

      {/* Interactive Waving Robot Companion Dock */}
      <RobotCompanion />

      <ProofModal
        isOpen={modalState.isOpen}
        imgSrc={modalState.imgSrc}
        title={modalState.title}
        onClose={handleCloseModal}
      />
    </div>
  );
}
