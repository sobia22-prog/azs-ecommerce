import React, { useState, useEffect } from 'react';
import { useRouter } from '../Router';

export default function RobotCompanion({ inline = false }) {
  const [isWaving, setIsWaving] = useState(true);
  const [speechIndex, setSpeechIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  const [speechOpen, setSpeechOpen] = useState(false);
  const { navigate } = useRouter();

  const tips = [
    { text: "Welcome to AZS Solutions! Your growth partner across Amazon, Noon, Trendyol, and Shopify.", badge: "GROWTH ADVISOR", action: "explore" },
    { text: "HomeMaster achieved +11,963% growth and 14.43x ROAS on Amazon Saudi under our systems!", badge: "CASE STUDY", action: "cases" },
    { text: "Expanding from Turkey into the Gulf? Discover our turnkey Trendyol GCC launch corridor.", badge: "TRENDYOL HUB", action: "trendyol" },
    { text: "Try our dynamic ROI Simulator to forecast your 6-month scale across KSA, USA & UK.", badge: "SIMULATOR", action: "calculator" },
    { text: "Explore our two specialized divisions: Marketplaces and Shopify D2C Performance.", badge: "2 DIVISIONS", action: "divisions" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSpeechIndex((prev) => (prev + 1) % tips.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [tips.length]);

  const handleRobotClick = () => {
    setIsWaving(true);
    setShowSparkle(true);
    setSpeechOpen(prev => !prev);
    setTimeout(() => setShowSparkle(false), 1500);
  };

  const handleAction = (action) => {
    if (action === 'trendyol') {
      navigate('/trendyol');
      return;
    }
    if (action === 'cases') {
      navigate('/case-studies');
      return;
    }
    if (action === 'divisions') {
      navigate('/marketplaces');
      return;
    }
    if (action === 'calculator') {
      navigate('/#calculator');
      return;
    }
    navigate('/#challenges-solutions');
  };

  const currentTip = tips[speechIndex];

  return (
    <div className={`robot-container ${inline ? 'robot-inline' : 'robot-floating'}`}>
      {/* Sleek Interactive Speech Bubble (Opened only upon click) */}
      {speechOpen && (
        <div className="robot-speech-bubble">
          <div className="robot-speech-header">
            <span className="robot-badge-pulse">
              <span className="pulse-dot"></span>
              {currentTip.badge}
            </span>
            <button 
              className="robot-close-btn" 
              onClick={(e) => {
                e.stopPropagation();
                setSpeechOpen(false);
              }}
              title="Close speech bubble"
            >
              ✕
            </button>
          </div>
          <p className="robot-speech-text">{currentTip.text}</p>
          <div className="robot-quick-actions">
            <button 
              className="robot-action-pill" 
              onClick={() => handleAction(currentTip.action)}
            >
              Explore Insight ➔
            </button>
          </div>
          <div className="robot-bubble-tail"></div>
        </div>
      )}

      {/* Subtle Launcher Pill when Speech Bubble is Closed (Desktop) */}
      {!speechOpen && (
        <button 
          className="robot-launcher-pill desktop-only-pill"
          onClick={handleRobotClick}
          title="Click to open Growth Advisor"
          aria-label="Open Growth Advisor"
        >
          <span className="pulse-dot"></span>
          <span>Growth Advisor</span>
        </button>
      )}

      {/* Mobile-Friendly Compact Floating AI Advisor Button */}
      {!speechOpen && (
        <button 
          className="robot-mobile-fab-trigger"
          onClick={handleRobotClick}
          title="Open AI Growth Advisor"
          aria-label="Open AI Growth Advisor"
        >
          <span className="mobile-fab-glow"></span>
          <span className="mobile-fab-icon">🤖</span>
          <span className="mobile-fab-pulse"></span>
        </button>
      )}

      {/* High-Fidelity Robot Character (Desktop view) */}
      <div 
        className={`robot-character desktop-robot-character ${isHovered ? 'hovered' : ''}`}
        onClick={handleRobotClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Click to interact!"
      >
        {/* Floating Halo & Energy Rings */}
        <div className="robot-energy-ring"></div>
        <div className="robot-shadow"></div>

        {/* Sparkle Particles on Click */}
        {showSparkle && (
          <div className="robot-sparkles">
            <span className="sparkle s1">✨</span>
            <span className="sparkle s2">⚡</span>
            <span className="sparkle s3">🚀</span>
          </div>
        )}

        {/* High-Fidelity Scaled SVG Cyber Robot */}
        <svg 
          className="robot-svg" 
          viewBox="0 0 160 190" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="metalChassis" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F59B" />
              <stop offset="100%" stopColor="#00D2FF" />
            </linearGradient>

            <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F59B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.8" />
            </linearGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Antennas */}
          <g className="robot-antenna">
            <line x1="80" y1="26" x2="80" y2="10" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="80" cy="8" r="6" fill="#00F59B" filter="url(#glowFilter)" className="antenna-glow" />
            <line x1="60" y1="32" x2="52" y2="18" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="16" r="4" fill="#00D2FF" />
            <line x1="100" y1="32" x2="108" y2="18" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="110" cy="16" r="4" fill="#00D2FF" />
          </g>

          {/* Floating Head */}
          <g className="robot-head">
            {/* Outer Helmet */}
            <rect 
              x="38" 
              y="26" 
              width="84" 
              height="68" 
              rx="24" 
              fill="url(#metalChassis)" 
              stroke="rgba(0, 245, 155, 0.45)" 
              strokeWidth="2.5" 
            />
            {/* Ear Pods */}
            <rect x="28" y="44" width="10" height="24" rx="5" fill="#00F59B" opacity="0.9" />
            <rect x="122" y="44" width="10" height="24" rx="5" fill="#00D2FF" opacity="0.9" />

            {/* Glowing Cyber Visor */}
            <rect 
              x="46" 
              y="38" 
              width="68" 
              height="36" 
              rx="12" 
              fill="#06090E" 
              stroke="rgba(0, 210, 255, 0.6)" 
              strokeWidth="2" 
            />

            {/* Expressive LED Eyes */}
            <g className="robot-eyes">
              {/* Left Eye */}
              <ellipse 
                cx="64" 
                cy="54" 
                rx="8" 
                ry="9" 
                fill="url(#visorGrad)" 
                filter="url(#glowFilter)" 
                className="robot-eye left-eye" 
              />
              <circle cx="66" cy="51" r="3" fill="#FFFFFF" />

              {/* Right Eye */}
              <ellipse 
                cx="96" 
                cy="54" 
                rx="8" 
                ry="9" 
                fill="url(#visorGrad)" 
                filter="url(#glowFilter)" 
                className="robot-eye right-eye" 
              />
              <circle cx="98" cy="51" r="3" fill="#FFFFFF" />
            </g>

            {/* Subtle Cute Smile / Status bar */}
            <line x1="72" y1="67" x2="88" y2="67" stroke="#00F59B" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
          </g>

          {/* Neck Joint */}
          <rect x="72" y="96" width="16" height="8" rx="3" fill="#334155" />

          {/* Robot Torso / Chassis */}
          <g className="robot-body">
            <rect 
              x="44" 
              y="104" 
              width="72" 
              height="58" 
              rx="18" 
              fill="url(#metalChassis)" 
              stroke="rgba(0, 245, 155, 0.35)" 
              strokeWidth="2.5" 
            />

            {/* Power Core Center Heart */}
            <circle cx="80" cy="128" r="14" fill="#06090E" stroke="rgba(0, 210, 255, 0.5)" strokeWidth="1.5" />
            <polygon 
              points="80,119 89,134 71,134" 
              fill="url(#neonGlow)" 
              filter="url(#glowFilter)" 
              className="robot-core-pulse" 
            />

            {/* Tech Stripes / Circuit Lines */}
            <line x1="56" y1="148" x2="72" y2="148" stroke="#00F59B" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
            <line x1="88" y1="148" x2="104" y2="148" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
          </g>

          {/* Left Resting Arm */}
          <g className="robot-left-arm">
            <path 
              d="M 44,115 Q 24,130 30,152" 
              stroke="#475569" 
              strokeWidth="8" 
              strokeLinecap="round" 
              fill="none" 
            />
            <circle cx="30" cy="154" r="6" fill="#00D2FF" />
          </g>

          {/* RIGHT MECHANICAL WAVING ARM (Articulated & Animated) */}
          <g className={`robot-waving-arm ${isWaving ? 'waving-active' : ''}`}>
            {/* Shoulder Joint */}
            <circle cx="116" cy="115" r="6" fill="#334155" />
            
            {/* Upper Arm & Forearm */}
            <path 
              d="M 116,115 Q 140,102 144,82" 
              stroke="#64748B" 
              strokeWidth="8" 
              strokeLinecap="round" 
              fill="none" 
            />
            {/* Elbow Joint */}
            <circle cx="140" cy="95" r="5" fill="#00F59B" filter="url(#glowFilter)" />

            {/* Waving Hand & Fingers */}
            <g className="robot-hand-group">
              <rect x="136" y="68" width="16" height="17" rx="5" fill="#0F172A" stroke="#00F59B" strokeWidth="1.8" />
              {/* Fingers */}
              <line x1="139" y1="68" x2="139" y2="58" stroke="#00F59B" strokeWidth="3" strokeLinecap="round" />
              <line x1="144" y1="68" x2="144" y2="56" stroke="#00F59B" strokeWidth="3" strokeLinecap="round" />
              <line x1="149" y1="68" x2="149" y2="60" stroke="#00F59B" strokeWidth="3" strokeLinecap="round" />
              {/* Palm Glow */}
              <circle cx="144" cy="76" r="3.5" fill="#00D2FF" filter="url(#glowFilter)" />
            </g>
          </g>

          {/* Floating Thruster Rings / Hover Pod */}
          <g className="robot-thruster">
            <ellipse cx="80" cy="164" rx="22" ry="6" fill="#1E293B" stroke="rgba(0, 245, 155, 0.4)" strokeWidth="1.5" />
            <polygon 
              points="66,166 80,185 94,166" 
              fill="url(#visorGrad)" 
              opacity="0.9" 
              filter="url(#glowFilter)" 
              className="thruster-flame" 
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
