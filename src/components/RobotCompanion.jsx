import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../Router';

export default function RobotCompanion({ inline = false }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [isWaving, setIsWaving] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: '👋 **Hello! Welcome to AZS Solutions.**\n\nI am your Growth Advisor. Whether you are looking to scale on **Amazon KSA & UAE**, **Noon**, **Trendyol cross-border**, or **Shopify D2C**, I am here to help.\n\nWhat can I assist your brand with today?'
    }
  ]);

  const { navigate } = useRouter();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickPrompts = [
    { label: '🇸🇦 Scale on Amazon KSA', query: 'How does AZS Solutions scale brands on Amazon Saudi Arabia (Amazon.sa)?' },
    { label: '🟡 Noon FBN Express', query: 'What is your fulfillment and promotion strategy for Noon in KSA and UAE?' },
    { label: '🇹🇷 Trendyol Expansion', query: 'How does the Trendyol GCC cross-border launch corridor work?' },
    { label: '🛍️ Shopify 8.4x ROAS', query: 'What performance marketing systems do you use for Shopify D2C?' },
    { label: '🛡️ Claim Free Audit', query: 'How do I claim a Free 360° Marketplace Growth Audit for my brand?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (chatOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [chatOpen, messages, loading]);

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newHistory.map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await res.json();

      if (data.success && data.reply) {
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: data.reply
          }
        ]);
      } else {
        throw new Error(data.message || 'Error generating response');
      }
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Thank you for your question! Our directors are currently consulting live with brands across KSA, UAE, and the USA.\n\nYou can claim your **Free 360° Marketplace & Storefront Growth Audit** right now using the **Book Audit** button at the top of the page, or email us at **hello@azssolutions.com**.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Helper to render markdown formatting cleanly (bold, links, bullets)
  const renderFormattedText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();

      // Skip empty bullet markers or stray asterisks
      if (!trimmed || trimmed === '*' || trimmed === '-' || trimmed === '•') {
        return trimmed ? null : <div key={idx} style={{ height: '6px' }}></div>;
      }

      // Parse markdown links [text](url) and bold **text**
      const parseSegments = (str) => {
        const tokenRegex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
        const tokens = str.split(tokenRegex);

        return tokens.map((token, tIdx) => {
          if (token.startsWith('**') && token.endsWith('**')) {
            return <strong key={tIdx} style={{ color: 'var(--text-pure)' }}>{token.slice(2, -2)}</strong>;
          }
          if (token.startsWith('[') && token.includes('](') && token.endsWith(')')) {
            const label = token.slice(1, token.indexOf(']('));
            const href = token.slice(token.indexOf('](') + 2, -1);
            const isInternal = href.startsWith('/') || href.includes('azssolutions.com');
            return (
              <a
                key={tIdx}
                href={href}
                onClick={(e) => {
                  if (isInternal) {
                    e.preventDefault();
                    setChatOpen(false);
                    navigate('/book-audit');
                  }
                }}
                style={{
                  color: 'var(--brand-mint)',
                  textDecoration: 'underline',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                target={isInternal ? '_self' : '_blank'}
                rel="noreferrer"
              >
                {label}
              </a>
            );
          }
          return token;
        });
      };

      // Check for bullet list item: * or - or • or 1.
      const bulletMatch = trimmed.match(/^(\*|-|•|\d+\.)\s+(.*)$/);
      if (bulletMatch) {
        const bulletText = bulletMatch[2];
        if (!bulletText.trim()) return null;
        return (
          <div key={idx} className="ai-msg-bullet">
            <span className="bullet-dot">▸</span>
            <span>{parseSegments(bulletText)}</span>
          </div>
        );
      }

      return <p key={idx} className="ai-msg-para">{parseSegments(line)}</p>;
    });
  };

  return (
    <div className={`robot-container ${inline ? 'robot-inline' : 'robot-floating'}`}>
      {/* Live Growth Advisor Chat Window */}
      {chatOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-header-info">
              <div className="advisor-avatar-frame">
                <img src="/assets/azs_logo.png" alt="AZS" className="advisor-avatar-img" />
                <span className="ai-online-pulse"></span>
              </div>
              <div className="ai-chat-title-col">
                <div className="ai-chat-name">
                  <span>AZS Growth Advisor</span>
                  <span className="advisor-status-badge">Online</span>
                </div>
                <div className="ai-chat-subtitle">Live Support & Advisory</div>
              </div>
            </div>
            <button
              className="ai-chat-close-btn"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              title="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="ai-chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-message-row ${msg.role === 'user' ? 'user-row' : 'assistant-row'}`}>
                {msg.role === 'assistant' && (
                  <div className="advisor-msg-avatar">
                    <img src="/assets/azs_logo.png" alt="AZS" className="advisor-msg-avatar-img" />
                  </div>
                )}
                <div className={`ai-message-bubble ${msg.role === 'user' ? 'user-bubble' : 'assistant-bubble'}`}>
                  {renderFormattedText(msg.content)}
                </div>
              </div>
            ))}

            {loading && (
              <div className="ai-message-row assistant-row">
                <div className="advisor-msg-avatar">
                  <img src="/assets/azs_logo.png" alt="AZS" className="advisor-msg-avatar-img" />
                </div>
                <div className="ai-message-bubble assistant-bubble loading-bubble">
                  <span className="typing-dot d1"></span>
                  <span className="typing-dot d2"></span>
                  <span className="typing-dot d3"></span>
                  <span className="typing-label">Typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="ai-quick-prompts-row">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                className="ai-prompt-chip"
                onClick={() => handleSendMessage(p.query)}
                disabled={loading}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Chat Input & CTA */}
          <div className="ai-chat-footer">
            <div className="ai-input-wrap">
              <input
                ref={inputRef}
                type="text"
                className="ai-chat-input"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <button
                className="ai-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || loading}
                aria-label="Send query"
                title="Send message"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <div className="ai-footer-cta-strip">
              <button
                className="ai-audit-link-btn"
                onClick={() => {
                  setChatOpen(false);
                  navigate('/book-audit');
                }}
              >
                Claim Free 360° Account Audit →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Pill (Desktop view when closed) */}
      {!chatOpen && (
        <button
          className="robot-launcher-pill desktop-only-pill"
          onClick={() => setChatOpen(true)}
          title="Chat with an AZS Growth Advisor"
          aria-label="Chat with an AZS Growth Advisor"
        >
          <span className="pulse-dot"></span>
          <span>Chat with Advisor</span>
        </button>
      )}

      {/* Mobile-Friendly Compact Floating Advisor Button */}
      {!chatOpen && (
        <button
          className="robot-mobile-fab-trigger"
          onClick={() => setChatOpen(true)}
          title="Chat with an AZS Growth Advisor"
          aria-label="Chat with an AZS Growth Advisor"
        >
          <span className="mobile-fab-glow"></span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F59B" strokeWidth="2.2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span className="mobile-fab-pulse"></span>
        </button>
      )}

      {/* High-Fidelity Robot Character (Desktop view) */}
      {!chatOpen && (
        <div
          className={`robot-character desktop-robot-character ${isHovered ? 'hovered' : ''}`}
          onClick={() => setChatOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Chat with an AZS Growth Advisor"
        >
          {/* Floating Halo & Energy Rings */}
          <div className="robot-energy-ring"></div>
          <div className="robot-shadow"></div>

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
                <stop offset="50%" pasture="true" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="neonGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F59B" />
                <stop offset="100%" stopColor="#00D2FF" />
              </linearGradient>
              <filter id="visorGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Antennas with Glowing Signal Orbs */}
            <line x1="60" y1="46" x2="42" y2="22" stroke="#00F59B" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="40" cy="20" r="4.5" fill="#00F59B" />

            <line x1="100" y1="46" x2="118" y2="22" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="120" cy="20" r="4.5" fill="#00D2FF" />

            {/* Sleek Cyber Head Chassis */}
            <rect x="44" y="44" width="72" height="54" rx="20" fill="url(#metalChassis)" stroke="url(#neonGlowGrad)" strokeWidth="2" />

            {/* Glowing Cyber Visor (Digital Eyes Display) */}
            <rect x="52" y="56" width="56" height="26" rx="10" fill="#020617" stroke="rgba(0, 245, 155, 0.4)" strokeWidth="1.5" />

            {/* Friendly Expressive Cyan/Mint Eyes */}
            <rect x="62" y="64" width="10" height="10" rx="3" fill="#00F59B" filter="url(#visorGlow)" />
            <rect x="88" y="64" width="10" height="10" rx="3" fill="#00D2FF" filter="url(#visorGlow)" />

            {/* Cyber Torso Body */}
            <path d="M 48 106 L 112 106 L 102 152 L 58 152 Z" fill="url(#metalChassis)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />

            {/* Chest Growth Core Pulse Indicator */}
            <circle cx="80" cy="126" r="10" fill="#04070B" stroke="url(#neonGlowGrad)" strokeWidth="1.5" />
            <circle cx="80" cy="126" r="4" fill="#00F59B" filter="url(#visorGlow)" />

            {/* Animated Waving Right Hand */}
            <g className={isWaving ? 'robot-arm-wave' : ''}>
              <path d="M 112 112 Q 130 110 138 92" stroke="url(#metalChassis)" strokeWidth="6" strokeLinecap="round" />
              <circle cx="138" cy="90" r="6" fill="#00F59B" />
            </g>

            {/* Left Arm Resting */}
            <path d="M 48 112 Q 30 120 34 136" stroke="url(#metalChassis)" strokeWidth="6" strokeLinecap="round" />
            <circle cx="34" cy="136" r="5" fill="#00D2FF" />
          </svg>
        </div>
      )}
    </div>
  );
}
