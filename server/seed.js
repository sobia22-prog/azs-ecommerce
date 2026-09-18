import AdminUser from './models/AdminUser.js';
import Marketplace from './models/Marketplace.js';
import CaseStudy from './models/CaseStudy.js';
import Blog from './models/Blog.js';

export const SEED_DATA = {
  superAdmin: {
    email: 'admin@azssolutions.com',
    name: 'AZS Super Admin',
    password: 'AZSAdmin2026!Secure',
    role: 'superadmin'
  },
  marketplaces: [
    {
      slug: 'amazon-ksa',
      name: 'Amazon Saudi Arabia (Amazon.sa)',
      sub: 'Official Verified Partner: Riyadh & Jeddah FBA Logistics Corridor',
      badge: 'Official Partner',
      icon: '🇸🇦',
      desc: 'Accelerate your brand across the Kingdom with localized Arabic catalog mapping, automated Buy Box protection, Sponsored Products/Brands/Video campaigns, and White Friday event capitalization.',
      link: '/marketplace-management/amazon-ksa',
      buttonText: 'Explore Amazon KSA Hub',
      image: '/assets/homemaster_amazon_dashboard.svg',
      metrics: {
        highlight: '+11,963%',
        sub: 'Verified Revenue Surge',
        volume: '14.43x ROAS'
      },
      features: [
        'Bilingual Arabic / English Brand Store & A+ Content Architecture',
        'Direct Riyadh FBA Logistics Inbound & Buy Box Algorithmic Lock',
        'Sponsored Products, Brands, Video & Dayparted Bid Optimization',
        'Brand Registry Setup, Trademark Authorization & Review Moats'
      ],
      sortOrder: 1
    },
    {
      slug: 'amazon-usa',
      name: 'Amazon USA Expansion (Amazon.com)',
      sub: 'Global Growth Corridor: Multi-Channel DSP & Nationwide FBA',
      badge: 'Top 1% Agency',
      icon: '🇺🇸',
      desc: 'Scale into the world’s largest ecommerce platform. Full-funnel programmatic Amazon DSP ads, Amazon Marketing Cloud (AMC) multi-touch attribution, and nationwide restock velocity forecasting.',
      link: '/marketplace-management/amazon-usa',
      buttonText: 'Explore Amazon USA Hub',
      image: '/assets/usa_amazon_light_dashboard.svg',
      metrics: {
        highlight: '11.20x ROAS',
        sub: 'Attributed Ad Return',
        volume: '$48.9K Mo'
      },
      features: [
        'Amazon DSP Programmatic Retargeting & Off-Amazon Display Synergies',
        'Nationwide US FBA Restock Optimization & 3PL Buffer Node Routing',
        'A+ Brand Storytelling & US Cross-Border Tariff Optimization',
        'AMC Custom SQL Audiences for Cross-Device Funnel Harvesting'
      ],
      sortOrder: 2
    },
    {
      slug: 'noon',
      name: 'Noon GCC Marketplace (KSA & UAE)',
      sub: 'Turnkey Fulfilled by Noon (FBN) & Yellow Friday Execution',
      badge: 'Noon Accredited',
      icon: '🟡',
      desc: 'Direct-to-consumer scale on the GCC’s native retail powerhouse. Complete FBN warehouse routing, Noon Ad Boost keyword management, and Yellow Friday mega-campaign execution.',
      link: '/marketplace-management/noon',
      buttonText: 'Explore Noon GCC Hub',
      image: '/assets/noon_ads_full_card.png',
      metrics: {
        highlight: 'SAR 208.5K',
        sub: '30-Day Scale Pace',
        volume: '+311% Orders'
      },
      features: [
        'Fulfilled by Noon (FBN Express) Catalog Migration & Barcoding',
        'Yellow Friday & Ramadan Mega-Sales Lock-Ins & Exclusive Deals',
        'Noon Seller Lab Pricing Intelligence & Buy Box Guard Rails',
        'Cross-Docking & GCC Customs Clearance Coordination'
      ],
      sortOrder: 3
    },
    {
      slug: 'trendyol',
      name: 'Trendyol Cross-Border Hub',
      sub: 'Turkey & Europe to Saudi Arabia & UAE Fast-Growth Corridor',
      badge: 'Official Partner',
      icon: '🇹🇷',
      desc: 'Strategic expansion onto the GCC’s fastest growing cross-border platform. Turnkey catalog translation, automated pricing harmonization, and localized fulfillment routing.',
      link: '/marketplace-management/trendyol',
      buttonText: 'Explore Trendyol Hub',
      image: '/assets/trendyol_light_dashboard.svg',
      metrics: {
        highlight: '7.80x ROAS',
        sub: 'Eurasia Lifestyle Direct',
        volume: 'SAR 145K/mo'
      },
      features: [
        'Cross-Border SKU Onboarding & Localized Arabic Attribute Mapping',
        'Flash Sale Participation & Trendyol Sponsored Promotions',
        'GCC Customs, Tax & Localized Duty Reconciliation',
        'Fast-Track Fulfillment Routing with < 72h Delivery SLAs'
      ],
      sortOrder: 4
    }
  ],
  caseStudies: [
    {
      slug: 'homemaster',
      title: 'HomeMaster Appliances',
      category: 'Home & Kitchen Appliances',
      region: 'Saudi Arabia & UAE',
      platforms: ['Amazon UAE', 'Amazon Saudi', 'Shopify'],
      image: '/assets/homemaster_case_study.jpg',
      metrics: {
        salesGrowth: '+11,963%',
        sevenDayRevenue: '$32.2K (SAR 120.8K)',
        roas: '14.43x',
        acos: '6.93%'
      },
      summary: 'Turnkey catalog restructuring, Buy Box protection, Arabic SEO, and Sponsored Ads optimization across GCC marketplaces.',
      highlightQuote: 'Reduced ACOS from 34% down to 6.93% while scaling weekly revenue by +11,963%.',
      sortOrder: 1
    },
    {
      slug: 'livora',
      title: 'LIVORA Modern Essentials',
      category: 'Fashion & Apparel',
      region: 'UK, UAE & KSA Cross-Border',
      platforms: ['Shopify', 'Meta Ads', 'TikTok Ads'],
      image: '/assets/livora_case_study.jpg',
      metrics: {
        salesGrowth: '+104%',
        sevenDayRevenue: '$50.4K/mo',
        roas: '4.62x',
        acos: '1,680 Units'
      },
      summary: 'Bespoke mobile-first Shopify storefront, UGC video acquisition on Meta and TikTok, and localized GCC checkout.',
      highlightQuote: 'Doubled monthly revenue within 60 days of storefront redesign, creator ad scaling, and local GCC payment gateway optimization.',
      sortOrder: 2
    },
    {
      slug: 'creative-things',
      title: 'Creative Things Studio Gear',
      category: 'Consumer Electronics & Creator Gear',
      region: 'GCC Multi-Channel',
      platforms: ['Noon (FBN)', 'Noon Ad Boost', 'Seller Lab'],
      image: '/assets/creativethings_case_study.jpg',
      metrics: {
        salesGrowth: '+311.02%',
        sevenDayRevenue: 'SAR 208.5K',
        roas: '6.85x',
        acos: '522 Units'
      },
      summary: 'Noon Seller Lab onboarding, FBN warehouse routing, Yellow Friday mega-campaign execution, and category dominance.',
      highlightQuote: 'Exceeded 520 units in initial campaign push with a blended 6.85x ROAS and seamless FBN Express delivery.',
      sortOrder: 3
    },
    {
      slug: 'nuvoaura',
      title: 'NuvoAura Beauty & Wellness',
      category: 'Cosmetics & Skincare',
      region: 'Amazon USA (Amazon.com)',
      platforms: ['Amazon USA', 'Amazon DSP', 'FBA Nationwide'],
      image: '/assets/usa_amazon_light_dashboard.svg',
      metrics: {
        salesGrowth: '+280%',
        sevenDayRevenue: '$48.9K/mo',
        roas: '11.20x',
        acos: '8.90% ACOS'
      },
      summary: 'High-intent search term harvesting, exact-match PPC campaign architecture, and programmatic Amazon DSP remarketing across nationwide FBA fulfillment nodes.',
      highlightQuote: 'Scaled NuvoAura into the top 3 organic ranking across 42 primary beauty keywords on Amazon.com while maintaining a sub-9% ACOS.',
      sortOrder: 4
    }
  ],
  blogs: [
    {
      slug: 'amazon-sa-playbook',
      title: 'Scaling on Amazon Saudi Arabia (Amazon.sa): The 2026 Seller Agency Playbook',
      badge: 'Amazon Ecosystem',
      targetKeyword: 'amazon.sa seller agency',
      targetServiceUrl: '/marketplace-management/amazon-ksa',
      targetServiceLabel: 'Explore Amazon KSA Seller Agency Hub',
      readTime: '7 min read',
      date: 'February 2026',
      author: 'AZS Marketplace Research Team',
      summary: 'Why direct translation fails on Amazon.sa, how to navigate Riyadh and Jeddah FBA inbound logistics, and how algorithmic Buy Box protection secures 90%+ win rates.',
      takeaways: [
        'Saudi search queries favor colloquial Najdi and Hejazi Arabic terms over formal Modern Standard Arabic (MSA).',
        'Inbounding into Riyadh fulfillment centers cuts nationwide delivery times down to under 24 hours, boosting Prime conversion by +44%.',
        'White Friday prep must begin 60 days in advance with safety stock buffers to prevent out-of-stock algorithmic demotion.'
      ],
      sortOrder: 1
    },
    {
      slug: 'amazon-usa-expansion',
      title: 'Amazon USA Expansion Guide: Cross-Border Logistics, DSP Media & AMC Attribution',
      badge: 'North America',
      targetKeyword: 'amazon USA seller agency',
      targetServiceUrl: '/marketplace-management/amazon-usa',
      targetServiceLabel: 'Explore Amazon USA Seller Agency',
      readTime: '9 min read',
      date: 'February 2026',
      author: 'AZS Global Expansion Team',
      summary: 'A step-by-step roadmap for GCC and European brands entering Amazon.com. How to leverage Amazon DSP, Amazon Marketing Cloud (AMC) multi-touch attribution, and nationwide FBA restock velocity.',
      takeaways: [
        'Programmatic Amazon DSP retargets high-intent Amazon shoppers across Twitch, IMDb, and premium external web inventory.',
        'Distributing inventory across 4 regional US FBA fulfillment hubs maintains 1-day Prime badge availability.',
        'AMC custom SQL queries uncover hidden cross-device conversion paths between Sponsored Products and Display ads.'
      ],
      sortOrder: 2
    },
    {
      slug: 'fbn-vs-fba-gcc',
      title: 'Fulfilled by Noon (FBN) vs Amazon FBA: The Definitive GCC Logistics Comparison',
      badge: 'GCC Logistics',
      targetKeyword: 'noon marketplace management',
      targetServiceUrl: '/marketplace-management/noon',
      targetServiceLabel: 'Explore Noon Marketplace Management',
      readTime: '8 min read',
      date: 'January 2026',
      author: 'AZS Supply Chain Ops',
      summary: 'A side-by-side analysis of storage fees, delivery SLAs, Buy Box weighting, and cross-docking capabilities between Noon KSA and Amazon Saudi Arabia.',
      takeaways: [
        'FBN Express badge increases product detail page conversion by an average of 38% compared to back-to-back cross-docking.',
        'Noon requires specialized barcode formatting and strict carton packaging guidelines to avoid inbound shipment rejection.',
        'A multi-channel fulfillment strategy in Saudi Arabia prevents single-node supply chain failure during Q4 peak seasons.'
      ],
      sortOrder: 3
    },
    {
      slug: 'trendyol-gcc-expansion',
      title: 'Entering the Gulf via Trendyol: The Cross-Border Playbook for Global Brands',
      badge: 'Trendyol GCC',
      targetKeyword: 'trendyol GCC expansion agency',
      targetServiceUrl: '/marketplace-management/trendyol',
      targetServiceLabel: 'Explore Trendyol GCC Agency Hub',
      readTime: '6 min read',
      date: 'January 2026',
      author: 'AZS Cross-Border Desk',
      summary: 'How global manufacturers can leverage Trendyol’s explosive growth in Saudi Arabia and the UAE with zero local entity requirements.',
      takeaways: [
        'Trendyol handles doorstep logistics and import clearance directly through partner freight nodes.',
        'Flash sales and algorithmic daily deal allocations drive 60%+ of total platform volume.',
        'Native Turkish & European fashion collections command premium price points in GCC markets when positioned with localized Arabic imagery.'
      ],
      sortOrder: 4
    },
    {
      slug: 'shopify-localization-gcc',
      title: 'DTC Shopify Storefront Localization for Saudi Arabia & UAE: Beyond Simple Translation',
      badge: 'Shopify & DTC',
      targetKeyword: 'shopify agency Saudi Arabia',
      targetServiceUrl: '/shopify-dtc',
      targetServiceLabel: 'Explore Shopify & DTC Division',
      readTime: '8 min read',
      date: 'December 2025',
      author: 'AZS DTC Engineering',
      summary: 'Why RTL UI architecture, native Mada / Tabby / Tamara payment integrations, and hyper-localized mobile checkout flows are prerequisites for sub-SAR 45 customer acquisition costs.',
      takeaways: [
        'Integrating Tamara and Tabby BNPL increases average order value (AOV) by +42% among GCC shoppers.',
        'RTL themes require comprehensive typography tuning with custom font pairing (e.g. Outfit and Cairo/Tajawal).',
        'Address autofill calibrated for Saudi National Address format eliminates 68% of mobile cart abandonments.'
      ],
      sortOrder: 5
    }
  ]
};

export async function seedDatabase() {
  try {
    // 1. Seed Super Admin
    const adminCount = await AdminUser.countDocuments();
    if (adminCount === 0) {
      const admin = new AdminUser({
        email: SEED_DATA.superAdmin.email,
        name: SEED_DATA.superAdmin.name,
        role: SEED_DATA.superAdmin.role
      });
      admin.setPassword(SEED_DATA.superAdmin.password);
      await admin.save();
      console.log(`[Seed Engine] Super Admin seeded: ${SEED_DATA.superAdmin.email}`);
    }

    // 2. Seed Marketplaces
    const mktCount = await Marketplace.countDocuments();
    if (mktCount === 0) {
      await Marketplace.insertMany(SEED_DATA.marketplaces);
      console.log(`[Seed Engine] ${SEED_DATA.marketplaces.length} Marketplaces seeded successfully.`);
    }

    // 3. Seed Case Studies
    const csCount = await CaseStudy.countDocuments();
    if (csCount === 0) {
      await CaseStudy.insertMany(SEED_DATA.caseStudies);
      console.log(`[Seed Engine] ${SEED_DATA.caseStudies.length} Case Studies seeded successfully.`);
    }

    // 4. Seed Blogs
    const blogCount = await Blog.countDocuments();
    if (blogCount === 0) {
      await Blog.insertMany(SEED_DATA.blogs);
      console.log(`[Seed Engine] ${SEED_DATA.blogs.length} Blog articles seeded successfully.`);
    }
  } catch (err) {
    console.warn('[Seed Engine Notice] Seeding warning or non-critical error:', err.message);
  }
}

export default { seedDatabase, SEED_DATA };
