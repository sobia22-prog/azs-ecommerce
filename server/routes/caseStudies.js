const express = require('express');
const router = express.Router();

const CASE_STUDIES = [
  {
    id: 'homemaster',
    title: 'HomeMaster Appliances',
    category: 'Home & Kitchen Appliances',
    region: 'Saudi Arabia & UAE',
    platforms: ['Amazon UAE', 'Amazon Saudi', 'Shopify'],
    image: '/assets/homemaster_amazon_dashboard.svg',
    metrics: {
      salesGrowth: '+11,963%',
      sevenDayRevenue: '$32.2K (SAR 120.8K)',
      roas: '14.43x',
      acos: '6.93%'
    },
    summary: 'Turnkey catalog restructuring, Buy Box protection, Arabic SEO, and Sponsored Ads optimization across GCC marketplaces.',
    highlightQuote: 'Reduced ACOS from 34% down to 6.93% while scaling weekly revenue by +11,963%.'
  },
  {
    id: 'livora',
    title: 'LIVORA Modern Essentials',
    category: 'Fashion & Apparel',
    region: 'UK, UAE & KSA Cross-Border',
    platforms: ['Shopify', 'Meta Ads', 'TikTok Ads'],
    image: '/assets/livora_shopify_dashboard.svg',
    metrics: {
      salesGrowth: '+104%',
      sevenDayRevenue: '$50.4K/mo',
      roas: '4.62x',
      acos: '1,680 Units'
    },
    summary: 'Bespoke mobile-first Shopify storefront, UGC video acquisition on Meta and TikTok, and localized GCC checkout.',
    highlightQuote: 'Doubled monthly revenue within 60 days of storefront redesign, creator ad scaling, and local GCC payment gateway optimization.'
  },
  {
    id: 'creative-things',
    title: 'Creative Things Studio Gear',
    category: 'Consumer Electronics & Creator Gear',
    region: 'GCC Multi-Channel',
    platforms: ['Noon (FBN)', 'Noon Ad Boost', 'Seller Lab'],
    image: '/assets/noon_ads_full_card.png',
    metrics: {
      salesGrowth: '+311.02%',
      sevenDayRevenue: 'SAR 208.5K',
      roas: '6.85x',
      acos: '522 Units'
    },
    summary: 'Noon Seller Lab onboarding, FBN warehouse routing, Yellow Friday mega-campaign execution, and category dominance.',
    highlightQuote: 'Exceeded 520 units in initial campaign push with a blended 6.85x ROAS and seamless FBN Express delivery.'
  }
];

router.get('/', (req, res) => {
  res.json({
    success: true,
    count: CASE_STUDIES.length,
    data: CASE_STUDIES
  });
});

module.exports = router;
