const express = require('express');
const router = express.Router();

const CASE_STUDIES = [
  {
    id: 'homemaster',
    title: 'HomeMaster Appliances',
    category: 'Home & Kitchen Appliances',
    region: 'Saudi Arabia & UAE',
    platforms: ['Amazon UAE', 'Amazon Saudi', 'Shopify'],
    image: 'assets/amz_seller_card.png',
    metrics: {
      salesGrowth: '+11,963%',
      sevenDayRevenue: '$32.2K',
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
    image: 'assets/shopify_dashboard_card.png',
    metrics: {
      monthlySales: '$50,461.90',
      salesLift: '+104%',
      orders: '1,680 Units',
      shopScore: '4.8 / 5'
    },
    summary: 'Bespoke mobile-first Shopify storefront, UGC video acquisition on Meta and TikTok, and localized GCC checkout.',
    highlightQuote: 'Doubled monthly revenue within 60 days of storefront redesign and creator ad scaling.'
  },
  {
    id: 'creative-things',
    title: 'Creative Things Studio Gear',
    category: 'Consumer Electronics & Creator Gear',
    region: 'GCC Multi-Channel',
    platforms: ['Noon (FBN)', 'Trendyol', 'Google P-Max'],
    image: 'assets/noon_ads_full_card.png',
    metrics: {
      noonRevenue: 'SAR 208,535',
      ordersGrowth: '+311.02%',
      trendyolRoas: '13.61x',
      orders: '522+'
    },
    summary: 'Noon Seller Lab onboarding, FBN warehouse routing, Yellow Friday mega-campaign execution, and Trendyol rollout.',
    highlightQuote: 'Exceeded 520 units in initial campaign push with a blended 13.6x ROAS on Trendyol.'
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
