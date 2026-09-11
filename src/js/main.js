/**
 * AZS Solutions - Interactive Application Logic
 * High-Converting E-commerce & Performance Marketing Platform
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initTrackSwitcher();
  initPlatformFilters();
  initMarketplaceDashboardSwitcher();
  initShopifyStoreTabs();
  initGrowthCalculator();
  initFaqAccordion();
  initProofModal();
  initBookingForm();
  initSparklineTooltips();
});

/* --------------------------------------------------------------------------
   1. Navbar Scroll Effect & Mobile Nav
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'rgba(7, 11, 18, 0.98)';
        navMenu.style.padding = '24px';
        navMenu.style.borderBottom = '1px solid rgba(0, 245, 155, 0.2)';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   2. Flagship Track Switcher (Marketplaces vs Shopify & Paid Media)
   -------------------------------------------------------------------------- */
function initTrackSwitcher() {
  const trackBtns = document.querySelectorAll('.track-tab-btn');
  const trackMkt = document.getElementById('track-marketplaces');
  const trackShopify = document.getElementById('track-shopify');

  trackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      trackBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedTrack = btn.getAttribute('data-track');
      if (selectedTrack === 'marketplaces') {
        trackMkt.scrollIntoView({ behavior: 'smooth', block: 'start' });
        highlightSection(trackMkt);
      } else if (selectedTrack === 'shopify') {
        trackShopify.scrollIntoView({ behavior: 'smooth', block: 'start' });
        highlightSection(trackShopify);
      }
    });
  });
}

function highlightSection(element) {
  element.style.transition = 'box-shadow 0.6s ease';
  element.style.boxShadow = '0 0 50px rgba(0, 245, 155, 0.2)';
  setTimeout(() => {
    element.style.boxShadow = 'none';
  }, 1200);
}

/* --------------------------------------------------------------------------
   3. Platform Pills Interactivity
   -------------------------------------------------------------------------- */
function initPlatformFilters() {
  const pills = document.querySelectorAll('.platform-badge-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const platform = pill.getAttribute('data-platform');
      if (['amazon', 'noon', 'trendyol'].includes(platform)) {
        const mktSection = document.getElementById('track-marketplaces');
        if (mktSection) mktSection.scrollIntoView({ behavior: 'smooth' });
        const dashBtn = document.querySelector(`.deck-pill-btn[data-dash="${platform}"]`);
        if (dashBtn) dashBtn.click();
      } else if (['shopify', 'meta', 'google', 'tiktok'].includes(platform)) {
        const shopifySection = document.getElementById('track-shopify');
        if (shopifySection) shopifySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Marketplace Deck Dashboard Console Switcher
   -------------------------------------------------------------------------- */
const DASHBOARD_DATA = {
  amazon: {
    title: 'Amazon Advertising GCC & Global Engine',
    desc: 'Verified Sponsored Products (SP), Sponsored Brands (SB), and Sponsored Display (SD) campaign dashboard across UAE & Saudi Arabia.',
    img: 'assets/amazon_ad_dashboard.png',
    stat1Label: 'Total Ad Sales',
    stat1Val: 'SAR 183,379.48',
    stat2Label: 'Verified ROAS',
    stat2Val: '14.43x',
    stat3Label: 'ACOS Efficiency',
    stat3Val: '6.93%',
    stat4Label: 'Total Ad Spend',
    stat4Val: 'SAR 12,703.97'
  },
  noon: {
    title: 'Noon Marketplace Growth Console',
    desc: 'Seller Lab & Fulfilled By Noon (FBN) promotional push showing massive conversion and volume scaling in KSA and UAE.',
    img: 'assets/noon_ads_full_card.png',
    stat1Label: 'Noon Revenue',
    stat1Val: 'SAR 208,535',
    stat2Label: 'Orders Growth',
    stat2Val: '+311.02%',
    stat3Label: 'Noon ROAS',
    stat3Val: '5.09x',
    stat4Label: 'Total Orders',
    stat4Val: '522 Units'
  },
  trendyol: {
    title: 'Trendyol Cross-Border Expansion',
    desc: 'High-margin campaign discovery, rapid catalog onboarding, and lifestyle consumer acquisition for GCC expansion.',
    img: 'assets/noon_trendyol_dashboard.png',
    stat1Label: 'Trendyol Revenue',
    stat1Val: 'SAR 61,648',
    stat2Label: 'Trendyol ROAS',
    stat2Val: '13.61x',
    stat3Label: 'Ad Spend',
    stat3Val: 'SAR 4,529',
    stat4Label: 'Fast Rollout',
    stat4Val: '48 Orders'
  },
  consolidated: {
    title: 'Consolidated Marketplace & Shopify Reporting',
    desc: 'Unified multi-channel operational reporting dashboard comparing Amazon, Noon, Trendyol, and Shopify in a single accountable view.',
    img: 'assets/reporting_dashboards_showcase.png',
    stat1Label: 'Total Revenue',
    stat1Val: '$142,850,000',
    stat2Label: 'Top Sales Spike',
    stat2Val: '+11,963%',
    stat3Label: '7-Day Revenue',
    stat3Val: '$32,200',
    stat4Label: 'Channel Lift',
    stat4Val: '+507%'
  }
};

function initMarketplaceDashboardSwitcher() {
  const dashBtns = document.querySelectorAll('.deck-pill-btn');
  const dashImg = document.getElementById('dash-main-img');
  const dashTitle = document.getElementById('dash-title');
  const dashDesc = document.getElementById('dash-desc');
  const stat1Label = document.getElementById('dash-stat1-label');
  const stat1Val = document.getElementById('dash-stat1-val');
  const stat2Label = document.getElementById('dash-stat2-label');
  const stat2Val = document.getElementById('dash-stat2-val');
  const stat3Label = document.getElementById('dash-stat3-label');
  const stat3Val = document.getElementById('dash-stat3-val');
  const stat4Label = document.getElementById('dash-stat4-label');
  const stat4Val = document.getElementById('dash-stat4-val');

  dashBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dashBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const dashKey = btn.getAttribute('data-dash');
      const data = DASHBOARD_DATA[dashKey];

      if (!data) return;

      dashImg.src = data.img;
      dashTitle.textContent = data.title;
      dashDesc.textContent = data.desc;
      stat1Label.textContent = data.stat1Label;
      stat1Val.textContent = data.stat1Val;
      stat2Label.textContent = data.stat2Label;
      stat2Val.textContent = data.stat2Val;
      stat3Label.textContent = data.stat3Label;
      stat3Val.textContent = data.stat3Val;
      stat4Label.textContent = data.stat4Label;
      stat4Val.textContent = data.stat4Val;
    });
  });
}

/* --------------------------------------------------------------------------
   5. Shopify Storefront Showcase Tabs
   -------------------------------------------------------------------------- */
const STORE_DATA = {
  homemaster: {
    name: 'HomeMaster Appliances',
    category: 'Premium Home & Kitchen Gear',
    highlight: 'Bilingual Arabic & English experience, elevated product storytelling, 4.8/5 shop performance score.',
    stats: '$50,461.90 Monthly Sales (+104%) | 1,680 Orders'
  },
  livora: {
    name: 'LIVORA Lifestyle & Fashion',
    category: 'Modern Essentials & Timeless Apparel',
    highlight: 'Visual hero storytelling, frictionless mobile checkout, Meta Ads Instagram conversion funnel.',
    stats: '14.4x Blended ROAS | +122% Repeat Purchase'
  },
  creativethings: {
    name: 'Creative Things Tech',
    category: 'Creator Studios, Electronics & Gadgets',
    highlight: '3D lifestyle assets, Google Performance Max integration, lightning-fast GCC shipping badges.',
    stats: '73,934 High-Intent Sessions | 1.69% CVR'
  }
};

function initShopifyStoreTabs() {
  const storeTabs = document.querySelectorAll('.store-tab-pill');
  const storeTitle = document.getElementById('active-store-title');
  const storeCategory = document.getElementById('active-store-category');
  const storeHighlight = document.getElementById('active-store-highlight');
  const storeMetrics = document.getElementById('active-store-metrics');

  storeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      storeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const storeKey = tab.getAttribute('data-store');
      const info = STORE_DATA[storeKey];

      if (!info) return;

      if (storeTitle) storeTitle.textContent = info.name;
      if (storeCategory) storeCategory.textContent = info.category;
      if (storeHighlight) storeHighlight.textContent = info.highlight;
      if (storeMetrics) storeMetrics.textContent = info.stats;
    });
  });
}

/* --------------------------------------------------------------------------
   6. Interactive Revenue & ROAS Growth Simulator
   -------------------------------------------------------------------------- */
function initGrowthCalculator() {
  const revInput = document.getElementById('calc-revenue-range');
  const spendInput = document.getElementById('calc-spend-range');
  const revDisplay = document.getElementById('calc-rev-display');
  const spendDisplay = document.getElementById('calc-spend-display');

  const projectedRevDisplay = document.getElementById('calc-projected-rev');
  const incrementalGainDisplay = document.getElementById('calc-incremental-gain');
  const targetRoasDisplay = document.getElementById('calc-target-roas');
  const gccShareDisplay = document.getElementById('calc-gcc-share');

  const channelBtns = document.querySelectorAll('.channel-check-btn');

  function calculateScale() {
    const currentRev = parseInt(revInput.value, 10);
    const currentSpend = parseInt(spendInput.value, 10);

    // Count active channels
    let activeChannels = 0;
    channelBtns.forEach(btn => {
      if (btn.classList.contains('checked')) activeChannels++;
    });
    activeChannels = Math.max(1, activeChannels);

    // Channel synergy factor: more channels = stronger cross-pollination
    const synergy = 1 + (activeChannels * 0.18);
    const projectedRev = Math.round(currentRev * (1.75 + (activeChannels * 0.28)));
    const incremental = projectedRev - currentRev;

    // Projected ROAS
    const calculatedRoas = (projectedRev / (currentSpend * 1.35)).toFixed(1);
    const cappedRoas = Math.min(15.2, Math.max(4.5, calculatedRoas));

    // Formatted outputs
    revDisplay.textContent = `$${currentRev.toLocaleString()}/mo`;
    spendDisplay.textContent = `$${currentSpend.toLocaleString()}/mo`;

    projectedRevDisplay.textContent = `$${projectedRev.toLocaleString()}`;
    incrementalGainDisplay.textContent = `+$${incremental.toLocaleString()} Projected Monthly Lift`;
    targetRoasDisplay.textContent = `${cappedRoas}x ROAS`;
    gccShareDisplay.textContent = `$${Math.round(projectedRev * 0.42).toLocaleString()} (42% GCC)`;
  }

  if (revInput && spendInput) {
    revInput.addEventListener('input', calculateScale);
    spendInput.addEventListener('input', calculateScale);
  }

  channelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('checked');
      calculateScale();
    });
  });

  // Initial calculation
  calculateScale();
}

/* --------------------------------------------------------------------------
   7. FAQ Accordion Logic
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Proof Image Modal
   -------------------------------------------------------------------------- */
function initProofModal() {
  const modal = document.getElementById('proof-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalClose = document.getElementById('modal-close');
  const zoomTriggers = document.querySelectorAll('.zoomable-proof');

  zoomTriggers.forEach(el => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-img-src') || el.querySelector('img')?.src;
      const title = el.getAttribute('data-title') || 'Verified Metric Inspection';
      if (src && modal && modalImg) {
        modalImg.src = src;
        modalTitle.textContent = title;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   9. Lead Capture & Discovery Call Booking Form
   -------------------------------------------------------------------------- */
function initBookingForm() {
  const form = document.getElementById('growth-audit-form');
  const banner = document.getElementById('form-success-banner');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('lead-name').value.trim();
    const email = document.getElementById('lead-email').value.trim();
    const website = document.getElementById('lead-website').value.trim();
    const revenue = document.getElementById('lead-revenue').value;
    const channel = document.getElementById('lead-channel').value;

    if (!name || !email) {
      alert('Please fill in your name and email address.');
      return;
    }

    // Submit state animation
    const submitBtn = form.querySelector('.form-submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Securing Your Strategy Slot...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = 'Audit Booked Successfully!';
      submitBtn.style.background = '#10b981';

      if (banner) {
        banner.style.display = 'block';
        banner.innerHTML = `
          <strong>Growth Strategy Session Confirmed!</strong><br>
          Thank you, ${name}. Our GCC & Global Ecommerce Director has received your application for <em>${website || 'your brand'}</em>. 
          A calendar invite and customized channel audit preview have been sent to <strong>${email}</strong>.
        `;
      }
      form.reset();
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   10. Interactive Chart Tooltip
   -------------------------------------------------------------------------- */
function initSparklineTooltips() {
  const points = document.querySelectorAll('.chart-point');
  const revenueVal = document.querySelector('.live-revenue-val');
  const defaultVal = revenueVal ? revenueVal.textContent : '$142,850,000';

  points.forEach(point => {
    point.addEventListener('mouseenter', () => {
      const monthVal = point.getAttribute('data-val');
      const monthName = point.getAttribute('data-month');
      if (revenueVal && monthVal) {
        revenueVal.textContent = monthVal;
      }
    });

    point.addEventListener('mouseleave', () => {
      if (revenueVal) {
        revenueVal.textContent = defaultVal;
      }
    });
  });
}
