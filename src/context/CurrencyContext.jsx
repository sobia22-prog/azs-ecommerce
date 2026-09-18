import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const USD_TO_SAR_RATE = 3.75;

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(() => {
    try {
      const saved = localStorage.getItem('azs_currency');
      if (saved === 'SAR' || saved === 'GCC') return 'SAR';
      return 'USD';
    } catch {
      return 'USD';
    }
  });

  const isSAR = currency === 'SAR' || currency === 'GCC';

  const setCurrency = (newCur) => {
    const normalized = (newCur === 'SAR' || newCur === 'GCC') ? 'SAR' : 'USD';
    setCurrencyState(normalized);
    try {
      localStorage.setItem('azs_currency', normalized);
    } catch {
      // ignore
    }
  };

  const toggleCurrency = () => {
    setCurrency(isSAR ? 'USD' : 'SAR');
  };

  /**
   * Return formatted string based on dual input:
   * formatDual('$142.8M+', 'SAR 535.5M+')
   */
  const formatDual = (usdStr, sarStr) => {
    return isSAR ? sarStr : usdStr;
  };

  /**
   * Convert and format a numeric USD amount:
   * formatMoney(1000) -> '$1,000' or 'SAR 3,750'
   */
  const formatMoney = (usdVal, options = {}) => {
    const { compact = false, showSymbol = true } = options;
    const num = Number(usdVal) || 0;
    const finalVal = isSAR ? num * USD_TO_SAR_RATE : num;
    const prefix = showSymbol ? (isSAR ? 'SAR ' : '$') : '';

    if (compact) {
      if (finalVal >= 1_000_000) {
        return `${prefix}${(finalVal / 1_000_000).toFixed(1)}M`;
      }
      if (finalVal >= 1_000) {
        return `${prefix}${(finalVal / 1_000).toFixed(1)}K`;
      }
    }

    return `${prefix}${Math.round(finalVal).toLocaleString('en-US')}`;
  };

  /**
   * Parse common string patterns and dynamically transform:
   * e.g. "$142.8M+" -> "SAR 535.5M+"
   */
  const formatDynamicText = (text) => {
    if (!text || typeof text !== 'string') return text;
    
    // If we're in USD and text is already USD, return it
    if (!isSAR) {
      // If text is purely SAR like "SAR 208.5K", convert to USD
      if (text.startsWith('SAR ')) {
        const match = text.match(/SAR\s*([\d.]+)([KkMmBbn]?)/);
        if (match) {
          const val = parseFloat(match[1]);
          const unit = match[2].toUpperCase();
          const usdVal = (val / USD_TO_SAR_RATE).toFixed(1);
          return `$${usdVal}${unit}`;
        }
      }
      return text;
    }

    // In SAR mode:
    // If text already has SAR, or matches "$XXK"
    const usdPattern = /\$([\d,.]+)\s*([KkMmBbn]?)/g;
    return text.replace(usdPattern, (match, valStr, unit) => {
      const cleanVal = parseFloat(valStr.replace(/,/g, ''));
      if (isNaN(cleanVal)) return match;
      const sarVal = cleanVal * USD_TO_SAR_RATE;
      let formattedNumber;
      if (sarVal >= 100) {
        formattedNumber = (Math.round(sarVal * 10) / 10).toFixed(1);
      } else {
        formattedNumber = (Math.round(sarVal * 10) / 10).toFixed(1);
      }
      // Trim .0 if present
      if (formattedNumber.endsWith('.0')) {
        formattedNumber = formattedNumber.slice(0, -2);
      }
      return `SAR ${formattedNumber}${unit ? unit.toUpperCase() : ''}`;
    });
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        isSAR,
        setCurrency,
        toggleCurrency,
        formatDual,
        formatMoney,
        formatDynamicText,
        rate: USD_TO_SAR_RATE
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      currency: 'USD',
      isSAR: false,
      setCurrency: () => {},
      toggleCurrency: () => {},
      formatDual: (usd, sar) => usd,
      formatMoney: (val) => `$${val}`,
      formatDynamicText: (text) => text,
      rate: USD_TO_SAR_RATE
    };
  }
  return context;
}
