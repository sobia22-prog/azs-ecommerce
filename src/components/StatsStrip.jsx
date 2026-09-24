import React, { useState, useEffect, useRef } from 'react';
import { useCurrency } from '../context/CurrencyContext';

function AnimatedNumber({ value, prefix = '', suffix = '', decimals = 0, isVisible, duration = 1600 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const prevValueRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const startValue = prevValueRef.current;
    const endValue = value;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * ease;
      
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
        prevValueRef.current = endValue;
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, isVisible, duration]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue).toLocaleString();

  return (
    <span className="stat-number-val">
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  const { isSAR } = useCurrency();
  const isGCC = isSAR;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 'gmv',
      value: isGCC ? 560 : 150,
      prefix: isGCC ? 'SAR ' : '$',
      suffix: 'M+',
      decimals: 0,
      label: 'Client GMV',
      fullLabel: 'Client GMV Generated'
    },
    {
      id: 'growth',
      value: 340,
      prefix: '+',
      suffix: '%',
      decimals: 0,
      label: 'YoY Growth',
      fullLabel: 'Average YoY Brand Growth'
    },
    {
      id: 'brands',
      value: 35,
      prefix: '',
      suffix: '+',
      decimals: 0,
      label: 'Brands Scaled',
      fullLabel: 'Enterprise Brands Scaled'
    },
    {
      id: 'roas',
      value: 8.4,
      prefix: '',
      suffix: 'x',
      decimals: 1,
      label: 'Blended ROAS',
      fullLabel: 'Average Blended Ad ROAS'
    }
  ];

  return (
    <section className="stats-bar-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((item) => (
            <div className="stat-item" key={item.id}>
              <div className="stat-number gradient-text">
                <AnimatedNumber 
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  decimals={item.decimals}
                  isVisible={isVisible}
                />
              </div>
              <div className="stat-desc">
                <span className="stat-desc-short">{item.label}</span>
                <span className="stat-desc-full">{item.fullLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-footnote-row desktop-only">
          <div className="stats-audit-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            <span>AUDITED PARTNER DATA</span>
          </div>
          <p className="stats-footnote-text">
            Verified trailing-12-month partner data. Refreshed quarterly.
          </p>
        </div>
      </div>
    </section>
  );
}
