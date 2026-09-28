import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist! Please run "vite build" first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html does not exist!');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, 'utf8');

const routes = [
  {
    path: '/',
    title: 'AZS Solutions | Ecommerce Growth & Performance Marketing Partner',
    description: 'End-to-end marketplace management (Amazon, Noon, Trendyol) and Shopify performance marketing across Saudi Arabia, UAE, USA, and the UK.',
    keywords: 'AZS Solutions, Amazon agency Saudi Arabia, Noon marketplace management, Trendyol GCC expansion, Shopify agency Dubai, Meta Ads UAE, ecommerce growth GCC',
    ogTitle: 'AZS Solutions | Ecommerce & Performance Marketing Partner',
    ogDescription: 'Scale across Amazon, Noon, Trendyol, and high-converting Shopify storefronts. Backed by verified client results and $142.8M+ GMV.'
  },
  {
    path: '/trendyol',
    title: 'Trendyol Seller Management Agency (KSA) | AZS Solutions',
    description: "As one of Trendyol's top partner agencies for GCC cross-border expansion, AZS Solutions delivers turnkey seller onboarding, Turkish catalog localization, and GCC marketplace management.",
    keywords: 'trendyol seller agency KSA, trendyol marketplace management, trendyol account management GCC, trendyol agency Saudi Arabia, trendyol Turkey UAE partner',
    ogTitle: 'Trendyol Seller Management Agency (KSA) | AZS Solutions',
    ogDescription: 'Expand onto Trendyol GCC with 350+ live SKUs, 7.80x verified ROAS, and automated catalog synchronization.'
  },
  {
    path: '/marketplace-management/trendyol',
    title: 'Trendyol Seller Management Agency (KSA) | AZS Solutions',
    description: "As one of Trendyol's top partner agencies for GCC cross-border expansion, AZS Solutions delivers turnkey seller onboarding, Turkish catalog localization, and GCC marketplace management.",
    keywords: 'trendyol seller agency KSA, trendyol marketplace management, trendyol account management GCC, trendyol agency Saudi Arabia, trendyol Turkey UAE partner',
    ogTitle: 'Trendyol Seller Management Agency (KSA) | AZS Solutions',
    ogDescription: 'Expand onto Trendyol GCC with 350+ live SKUs, 7.80x verified ROAS, and automated catalog synchronization.'
  },
  {
    path: '/blog',
    title: 'E-Commerce Insights, Playbooks & Research | AZS Solutions',
    description: 'Expert industry playbooks on scaling across Amazon.sa, Amazon USA, Noon, Trendyol GCC, and high-converting Shopify storefronts in Saudi Arabia and the UAE.',
    keywords: 'amazon.sa seller agency, amazon USA seller agency, noon marketplace management, trendyol seller agency KSA, shopify agency Saudi Arabia, ecommerce conversion rate optimization agency',
    ogTitle: 'E-Commerce Insights & Market Playbooks | AZS Solutions',
    ogDescription: 'Strategic analysis and operational guides for scaling enterprise commerce across the Gulf, USA, and UK.'
  },
  {
    path: '/insights',
    title: 'E-Commerce Insights, Playbooks & Research | AZS Solutions',
    description: 'Expert industry playbooks on scaling across Amazon.sa, Amazon USA, Noon, Trendyol GCC, and high-converting Shopify storefronts in Saudi Arabia and the UAE.',
    keywords: 'amazon.sa seller agency, amazon USA seller agency, noon marketplace management, trendyol seller agency KSA, shopify agency Saudi Arabia, ecommerce conversion rate optimization agency',
    ogTitle: 'E-Commerce Insights & Market Playbooks | AZS Solutions',
    ogDescription: 'Strategic analysis and operational guides for scaling enterprise commerce across the Gulf, USA, and UK.'
  },
  {
    path: '/case-studies',
    title: 'Verified E-Commerce Case Studies & Results | AZS Solutions',
    description: 'Explore verified growth case studies across Amazon, Noon, Trendyol, and Shopify. Documented dashboards, real sales numbers, and authentic ROAS metrics managed by AZS Solutions.',
    keywords: 'Amazon case studies, Noon sales results, Shopify D2C case studies, ecommerce growth proof, verified ROAS dashboard',
    ogTitle: 'Verified Case Studies | AZS Solutions',
    ogDescription: 'Documented sales and advertising performance dashboards from enterprise brands scaled by AZS Solutions.'
  },
  {
    path: '/case-studies/homemaster',
    title: 'HomeMaster Appliances Case Study | +11,963% Growth — AZS Solutions',
    description: 'Verified results for HomeMaster Appliances: Reduced ACOS from 34% down to 6.93% while scaling weekly revenue by +11,963%. Scaled by AZS Solutions with 14.43x ROAS and $32.2K/wk (SAR 120.8K).',
    keywords: 'HomeMaster Appliances case study, ecommerce case study, amazon management results, AZS Solutions proof',
    ogTitle: 'HomeMaster Appliances Case Study | AZS Solutions',
    ogDescription: 'Reduced ACOS from 34% down to 6.93% while scaling weekly revenue by +11,963% ($32.2K/wk (SAR 120.8K) volume).'
  },
  {
    path: '/case-studies/livora',
    title: 'LIVORA Modern Essentials Case Study | +104% Growth — AZS Solutions',
    description: 'Verified results for LIVORA Modern Essentials: Doubled monthly revenue within 60 days of storefront redesign, creator ad scaling, and local GCC payment gateway optimization. Scaled by AZS Solutions with 4.62x Blended ROAS and $50.4K/mo (SAR 189K).',
    keywords: 'LIVORA Modern Essentials case study, ecommerce case study, shopify management results, AZS Solutions proof',
    ogTitle: 'LIVORA Modern Essentials Case Study | AZS Solutions',
    ogDescription: 'Doubled monthly revenue within 60 days of storefront redesign, creator ad scaling, and local GCC payment gateway optimization ($50.4K/mo (SAR 189K) volume).'
  },
  {
    path: '/case-studies/creative-things',
    title: 'Creative Things Studio Gear Case Study | +311.0% Growth — AZS Solutions',
    description: 'Verified results for Creative Things Studio Gear: Exceeded 520 units in initial campaign push with a blended 6.85x ROAS and seamless FBN Express delivery. Scaled by AZS Solutions with 6.85x Blended ROAS and SAR 208,535/mo.',
    keywords: 'Creative Things Studio Gear case study, ecommerce case study, noon management results, AZS Solutions proof',
    ogTitle: 'Creative Things Studio Gear Case Study | AZS Solutions',
    ogDescription: 'Exceeded 520 units in initial campaign push with a blended 6.85x ROAS and seamless FBN Express delivery (SAR 208,535/mo volume).'
  },
  {
    path: '/case-studies/trendyol-expansion',
    title: 'Eurasia Lifestyle Direct Case Study | +240% Growth — AZS Solutions',
    description: 'Verified results for Eurasia Lifestyle Direct: Achieved SAR 145K in first-quarter cross-border run rate with sub-72 hour delivery into Riyadh and Dubai. Scaled by AZS Solutions with 7.80x Flash ROAS and SAR 145,000/mo.',
    keywords: 'Eurasia Lifestyle Direct case study, ecommerce case study, trendyol management results, AZS Solutions proof',
    ogTitle: 'Eurasia Lifestyle Direct Case Study | AZS Solutions',
    ogDescription: 'Achieved SAR 145K in first-quarter cross-border run rate with sub-72 hour delivery into Riyadh and Dubai (SAR 145,000/mo volume).'
  },
  {
    path: '/case-studies/nuvoaura',
    title: 'NuvoAura Beauty & Wellness Case Study | +507% Growth — AZS Solutions',
    description: 'Verified results for NuvoAura Beauty & Wellness: Secured top 3 category ranking across 42 target keywords while keeping ACOS well below 10%. Scaled by AZS Solutions with 11.20x Sponsored ROAS and $48,900 Ad Sales.',
    keywords: 'NuvoAura Beauty & Wellness case study, ecommerce case study, amazon management results, AZS Solutions proof',
    ogTitle: 'NuvoAura Beauty & Wellness Case Study | AZS Solutions',
    ogDescription: 'Secured top 3 category ranking across 42 target keywords while keeping ACOS well below 10% ($48,900 Ad Sales volume).'
  },
  {
    path: '/about',
    title: 'About AZS Solutions | Regional Hubs in Riyadh, Dubai, London & NYC',
    description: 'Learn about AZS Solutions, our leadership team, governance principles, and regional operational hubs across Riyadh, Dubai, London, New York, and Istanbul.',
    keywords: 'about AZS Solutions, ecommerce agency Riyadh, Amazon agency Dubai, Mohammad Hassan ecommerce, global marketplace operations partner',
    ogTitle: 'About AZS Solutions | Institutional Ecommerce Growth Partner',
    ogDescription: 'Bridging enterprise brands across GCC, US, and European ecommerce channels with localized logistics, algorithmic advertising, and Buy Box defense.'
  },
  {
    path: '/programs-pricing',
    title: 'Ecommerce Management Programs & Transparent Pricing | AZS Solutions',
    description: 'Explore our 4 partnership tiers with transparent indicative pricing: Full-Service Management, Turnkey Launch Sprints, Growth Retainers, and Custom Enterprise Partnerships.',
    keywords: 'ecommerce agency pricing, amazon management fees, marketplace agency retainer, shopify agency cost Saudi Arabia, full service ecommerce management',
    ogTitle: 'Transparent Engagement Programs & Pricing | AZS Solutions',
    ogDescription: 'Predictable, performance-aligned partnership models for Amazon, Noon, Trendyol, and Shopify brands scaling in GCC and global markets.'
  },
  {
    path: '/pricing',
    title: 'Ecommerce Management Programs & Transparent Pricing | AZS Solutions',
    description: 'Explore our 4 partnership tiers with transparent indicative pricing: Full-Service Management, Turnkey Launch Sprints, Growth Retainers, and Custom Enterprise Partnerships.',
    keywords: 'ecommerce agency pricing, amazon management fees, marketplace agency retainer, shopify agency cost Saudi Arabia, full service ecommerce management',
    ogTitle: 'Transparent Engagement Programs & Pricing | AZS Solutions',
    ogDescription: 'Predictable, performance-aligned partnership models for Amazon, Noon, Trendyol, and Shopify brands scaling in GCC and global markets.'
  },
  {
    path: '/services',
    title: 'End-to-End Marketplace & E-commerce Services | AZS Solutions',
    description: 'Discover our 6 core operational services: Store Setup, Catalog Optimization, Dynamic Pricing, Fulfillment Logistics, Performance Advertising, and Executive Analytics.',
    keywords: 'marketplace management services, Amazon agency Saudi Arabia, Noon operations partner, Trendyol catalog management, ecommerce advertising GCC',
    ogTitle: 'What We Manage: 6 Core Services | AZS Solutions',
    ogDescription: 'Six dedicated operational services across Amazon (KSA, USA, UK), Noon, Trendyol GCC, and Shopify.'
  },
  {
    path: '/services/store-setup',
    title: 'Marketplace Store Setup & Amazon Brand Registry Agency | AZS Solutions',
    description: 'Turnkey marketplace onboarding across Amazon Brand Registry (KSA, USA, UK), Noon Seller Lab, Trendyol GCC, and bilingual Shopify storefronts.',
    keywords: 'marketplace store setup, Amazon brand registry agency, Noon onboarding, Trendyol store launch, Shopify setup GCC',
    ogTitle: 'Store Setup & Brand Onboarding | AZS Solutions',
    ogDescription: 'Launching across multi-regional marketplaces requires bulletproof regulatory compliance, brand registry approval, trademark authorization, and localized storefront architecture.'
  },
  {
    path: '/services/catalog-optimization',
    title: 'Amazon & Marketplace Catalog SEO Optimization Agency | AZS Solutions',
    description: 'Algorithmic Arabic and English listing optimization, parent-child variation architecture, and premium A+ Brand Story design for Amazon and Noon.',
    keywords: 'Amazon catalog optimization, Arabic SEO, A+ content agency, listing optimization KSA UAE, marketplace SEO',
    ogTitle: 'Catalog Optimization & Arabic/EN SEO | AZS Solutions',
    ogDescription: 'Listing optimization in the GCC requires deep native linguistic harvesting. We build algorithmic bilingual catalogs engineered for peak organic rank.'
  },
  {
    path: '/services/dynamic-pricing',
    title: 'Algorithmic Buy Box Pricing & Repricing Strategies | AZS Solutions',
    description: 'Automated Buy Box repricing algorithms, competitor scraping, and margin defense for Amazon.sa, Amazon.com, and Noon.',
    keywords: 'Amazon repricing agency, Buy Box defense, dynamic pricing marketplace, inventory forecasting FBA',
    ogTitle: 'Dynamic Repricing & Inventory Forecasting | AZS Solutions',
    ogDescription: 'Algorithmic Buy Box protection and multi-regional inventory forecasting.'
  },
  {
    path: '/services/fulfillment-fba-fbn',
    title: 'GCC Logistics, FBA & Fulfilled by Noon (FBN) Management | AZS Solutions',
    description: 'End-to-end warehousing, Riyadh/Jeddah FBA cross-docking, Noon FBN inbound appointments, and customs clearance.',
    keywords: 'Amazon FBA logistics Saudi Arabia, Noon FBN setup, GCC fulfillment partner, cross border ecommerce logistics',
    ogTitle: 'Fulfillment Logistics, FBA & FBN Prep | AZS Solutions',
    ogDescription: 'End-to-end logistics coordination, FBA/FBN inbound routing, and customs clearance.'
  },
  {
    path: '/services/performance-ads',
    title: 'Performance Marketplace Advertising & Amazon DSP Agency | AZS Solutions',
    description: 'High-ROAS Sponsored Products, Sponsored Brands Video, and programmatic Amazon DSP display advertising across GCC and US.',
    keywords: 'Amazon PPC agency, Amazon DSP agency Saudi Arabia, Noon ad boost, marketplace advertising',
    ogTitle: 'Performance Marketplace Advertising & DSP | AZS Solutions',
    ogDescription: 'Algorithmic PPC management and programmatic Amazon DSP advertising.'
  },
  {
    path: '/services/analytics-reporting',
    title: 'Ecommerce Executive Reporting & Unit Economics Analytics | AZS Solutions',
    description: 'Live executive dashboards, real-time TACoS tracking, SKU-level contribution margin analysis, and blended ROAS governance.',
    keywords: 'ecommerce analytics dashboard, Amazon TACoS reporting, marketplace unit economics',
    ogTitle: 'Executive Analytics & Unit Economics | AZS Solutions',
    ogDescription: 'Live executive dashboards, real-time TACoS tracking, and contribution margin governance.'
  },
  {
    path: '/marketplace-management',
    title: 'Amazon, Noon & Trendyol Marketplace Management Agency | KSA & USA — AZS Solutions',
    description: 'Scale your marketplace revenue across Amazon KSA, Noon, Trendyol, and Amazon USA with AZS Solutions. Certified SPN partner delivering 3.4x average GMV growth.',
    keywords: 'Amazon agency KSA, Noon marketplace management, Trendyol GCC expansion, Amazon USA expansion, Buy Box protection, Arabic SEO, marketplace management agency',
    ogTitle: 'Amazon, Noon & Trendyol Marketplace Management Agency | AZS Solutions',
    ogDescription: 'End-to-end management for Amazon, Noon, Trendyol, and Amazon USA across GCC, USA, and UK.'
  },
  {
    path: '/marketplaces',
    title: 'Amazon, Noon & Trendyol Marketplace Management Agency | KSA & USA — AZS Solutions',
    description: 'Scale your marketplace revenue across Amazon KSA, Noon, Trendyol, and Amazon USA with AZS Solutions. Certified SPN partner delivering 3.4x average GMV growth.',
    keywords: 'Amazon agency KSA, Noon marketplace management, Trendyol GCC expansion, Amazon USA expansion, Buy Box protection, Arabic SEO, marketplace management agency',
    ogTitle: 'Amazon, Noon & Trendyol Marketplace Management Agency | AZS Solutions',
    ogDescription: 'End-to-end management for Amazon, Noon, Trendyol, and Amazon USA across GCC, USA, and UK.'
  },
  {
    path: '/marketplace-management/amazon-ksa',
    title: 'Amazon KSA & Global Marketplace Management Agency | AZS Solutions',
    description: 'Scale your brand on Amazon.sa and globally with AZS Solutions. Full-service Amazon KSA PPC agency, Buy Box defense, Arabic A+ content, and Riyadh FBA logistics.',
    keywords: 'amazon.sa seller agency, amazon KSA PPC agency, amazon seller account management Riyadh, buy box defense KSA, amazon agency Saudi Arabia',
    ogTitle: 'Amazon KSA & Global Marketplace Agency | AZS Solutions',
    ogDescription: 'Verified 14.43x ROAS, +11,963% sales lift, and turnkey Seller Central management across KSA, UAE, USA & UK.'
  },
  {
    path: '/amazon',
    title: 'Amazon KSA & Global Marketplace Management Agency | AZS Solutions',
    description: 'Scale your brand on Amazon.sa and globally with AZS Solutions. Full-service Amazon KSA PPC agency, Buy Box defense, Arabic A+ content, and Riyadh FBA logistics.',
    keywords: 'amazon.sa seller agency, amazon KSA PPC agency, amazon seller account management Riyadh, buy box defense KSA, amazon agency Saudi Arabia',
    ogTitle: 'Amazon KSA & Global Marketplace Agency | AZS Solutions',
    ogDescription: 'Verified 14.43x ROAS, +11,963% sales lift, and turnkey Seller Central management across KSA, UAE, USA & UK.'
  },
  {
    path: '/marketplace-management/amazon-usa',
    title: 'Amazon USA Seller Agency & FBA Restock Partner | AZS Solutions',
    description: 'Scale your brand across Amazon.com USA. Full-funnel Amazon DSP advertising, nationwide FBA restock velocity forecasting, and Buy Box defense for international sellers.',
    keywords: 'amazon USA seller agency, amazon FBA management agency, amazon PPC management USA, amazon DSP agency, amazon.com account management',
    ogTitle: 'Amazon USA Marketplace Management & DSP Advertising | AZS Solutions',
    ogDescription: 'Scale on Amazon.com USA with 11.20x ad ROAS, programmatic Amazon DSP, and nationwide FBA inventory governance.'
  },
  {
    path: '/marketplace-management/noon',
    title: 'Noon Marketplace Management & Seller Agency KSA | AZS Solutions',
    description: 'Scale your brand on Noon KSA and Noon UAE with AZS Solutions. Noon marketplace management, Noon Seller Lab onboarding, FBN logistics, and high-ROAS advertising.',
    keywords: 'noon marketplace management, noon seller agency KSA, noon account management, noon UAE partner, Fulfilled by Noon FBN, Yellow Friday marketing',
    ogTitle: 'Noon Marketplace Management & Seller Agency | AZS Solutions',
    ogDescription: 'Verified SAR 208K+ monthly sales, +311% order lift, and turnkey FBN warehouse routing across Saudi Arabia and UAE.'
  },
  {
    path: '/noon',
    title: 'Noon Marketplace Management & Seller Agency KSA | AZS Solutions',
    description: 'Scale your brand on Noon KSA and Noon UAE with AZS Solutions. Noon marketplace management, Noon Seller Lab onboarding, FBN logistics, and high-ROAS advertising.',
    keywords: 'noon marketplace management, noon seller agency KSA, noon account management, noon UAE partner, Fulfilled by Noon FBN, Yellow Friday marketing',
    ogTitle: 'Noon Marketplace Management & Seller Agency | AZS Solutions',
    ogDescription: 'Verified SAR 208K+ monthly sales, +311% order lift, and turnkey FBN warehouse routing across Saudi Arabia and UAE.'
  },
  {
    path: '/marketplace-management/listing-optimization',
    title: 'Amazon & Marketplace Catalog SEO Optimization Agency | AZS Solutions',
    description: 'Algorithmic Arabic and English listing optimization, parent-child variation architecture, and premium A+ Brand Story design for Amazon and Noon.',
    keywords: 'Amazon catalog optimization, Arabic SEO, A+ content agency, listing optimization KSA UAE, marketplace SEO',
    ogTitle: 'Catalog Optimization & Arabic/EN SEO | AZS Solutions',
    ogDescription: 'Listing optimization in the GCC requires deep native linguistic harvesting. We build algorithmic bilingual catalogs engineered for peak organic rank.'
  },
  {
    path: '/marketplace-management/ppc-advertising',
    title: 'Marketplace PPC Advertising & Amazon DSP Agency | AZS Solutions',
    description: 'High-ROAS Sponsored Products, Sponsored Brands Video, and programmatic Amazon DSP display advertising across GCC and US.',
    keywords: 'Amazon PPC agency, Amazon DSP agency Saudi Arabia, Noon ad boost, marketplace advertising',
    ogTitle: 'Performance Marketplace Advertising & DSP | AZS Solutions',
    ogDescription: 'Algorithmic PPC management and programmatic Amazon DSP advertising.'
  },
  {
    path: '/marketplace-management/account-health',
    title: 'Marketplace Account Health & Suspension Defense | AZS Solutions',
    description: 'Safeguard your Amazon and Noon seller accounts against suspensions, policy violations, IP complaints, and Buy Box suppression with 24/7 algorithmic health monitoring.',
    keywords: 'amazon account suspension agency, amazon account health management, seller central reinstatement, noon policy compliance, buy box suppression defense',
    ogTitle: 'Marketplace Account Health & Suspension Defense | AZS Solutions',
    ogDescription: 'Protect your brand equity and revenue streams with 24/7 automated account health defense across Amazon and Noon.'
  },
  {
    path: '/shopify-dtc',
    title: 'Shopify & DTC Growth Agency — Meta, TikTok & Google Ads | AZS Solutions',
    description: 'Scale DTC brands with high-converting Shopify Plus stores, Tabby/Tamara BNPL integration, and high-ROAS Meta, TikTok & Google performance marketing.',
    keywords: 'shopify agency Saudi Arabia, shopify DTC growth agency, shopify store management KSA, shopify agency Dubai, Meta ads ecommerce KSA, TikTok ads agency GCC, ecommerce conversion rate optimization agency',
    ogTitle: 'Shopify & DTC Growth Agency — Meta, TikTok & Google Ads | AZS Solutions',
    ogDescription: 'Scale your DTC brand with high-converting Shopify Plus storefronts, localized GCC checkout, and 4.62x blended ROAS across Meta, TikTok & Google.'
  },
  {
    path: '/shopify',
    title: 'Shopify & DTC Growth Agency — Meta, TikTok & Google Ads | AZS Solutions',
    description: 'Scale DTC brands with high-converting Shopify Plus stores, Tabby/Tamara BNPL integration, and high-ROAS Meta, TikTok & Google performance marketing.',
    keywords: 'shopify agency Saudi Arabia, shopify DTC growth agency, shopify store management KSA, shopify agency Dubai, Meta ads ecommerce KSA, TikTok ads agency GCC, ecommerce conversion rate optimization agency',
    ogTitle: 'Shopify & DTC Growth Agency — Meta, TikTok & Google Ads | AZS Solutions',
    ogDescription: 'Scale your DTC brand with high-converting Shopify Plus storefronts, localized GCC checkout, and 4.62x blended ROAS across Meta, TikTok & Google.'
  },
  {
    path: '/shopify-dtc/store-setup',
    title: 'Shopify Store Setup & Bilingual Localization Agency | AZS Solutions',
    description: 'Launch and scale bespoke Shopify Plus stores with bilingual Arabic RTL & English themes, Mada, Apple Pay, and Tabby/Tamara BNPL integrations.',
    keywords: 'Shopify agency Saudi Arabia, bilingual Shopify store, Shopify store setup Dubai, Tabby Tamara integration, Shopify RTL theme',
    ogTitle: 'Shopify Store Setup & Localization | AZS Solutions',
    ogDescription: 'Bespoke Shopify Plus theme architecture engineered for Saudi Arabia and UAE buyer psychology.'
  },
  {
    path: '/shopify-dtc/meta-ads',
    title: 'Meta Ads Agency for Ecommerce (Facebook & Instagram) | AZS Solutions',
    description: 'Scale high-converting Meta Ads across Saudi Arabia, UAE, and internationally with dynamic creative testing and localized video hooks.',
    keywords: 'Meta ads agency Saudi Arabia, Facebook ads ecommerce, Instagram ads agency Dubai, paid social ROAS scaling',
    ogTitle: 'Meta Ads & Paid Social Acquisition | AZS Solutions',
    ogDescription: 'Broad targeting with dynamic creative testing delivering predictable CAC.'
  },
  {
    path: '/shopify-dtc/tiktok-ads',
    title: 'TikTok Shop & Creator Ads Agency GCC | AZS Solutions',
    description: 'Dominate TikTok Shop and high-converting TikTok Ads across GCC with native creator partnerships and viral trend hooks.',
    keywords: 'TikTok ads agency GCC, TikTok Shop Saudi Arabia, TikTok ecommerce agency Dubai, Spark Ads agency',
    ogTitle: 'TikTok Shop & Creator Video Ads | AZS Solutions',
    ogDescription: 'GCC creator seeding and native TikTok Spark Ads engineered for rapid scaling.'
  },
  {
    path: '/shopify-dtc/google-ads',
    title: 'Google Performance Max & Search Ads Agency | AZS Solutions',
    description: 'Capture high-intent shopping demand with Google Performance Max, Shopping Feeds, and Search Ads optimized for GCC buyer intent.',
    keywords: 'Google Ads ecommerce agency, Google Performance Max KSA, Shopping Feed optimization UAE, Google search ads agency',
    ogTitle: 'Google Performance Max & Shopping Feeds | AZS Solutions',
    ogDescription: 'Capture high-intent shopping demand with Google Performance Max and optimized Merchant Center feeds.'
  },
  {
    path: '/shopify-dtc/cro',
    title: 'Ecommerce Conversion Rate Optimization (CRO) Agency | AZS Solutions',
    description: 'Double your storefront revenue with scientific CRO: localized checkout funnels, Tabby/Tamara integrations, and mobile checkout speed optimization.',
    keywords: 'ecommerce conversion rate optimization agency, shopify CRO service, storefront CRO KSA USA, checkout funnel optimization',
    ogTitle: 'Storefront CRO & Checkout Funnel Mastery | AZS Solutions',
    ogDescription: 'Scientific CRO, A/B testing, and localized checkout funnels designed to maximize revenue.'
  },
  {
    path: '/calculator',
    title: 'Interactive Ecommerce & Marketplace ROI Simulator | AZS Solutions',
    description: 'Simulate your brand’s 6-month GMV run-rate and ad ROAS across Amazon KSA/USA/UK, Noon, Trendyol GCC, and Shopify D2C.',
    keywords: 'Amazon revenue calculator, ecommerce ROI simulator, Noon seller GMV projection, Trendyol GCC revenue estimator, Shopify ad spend ROAS calculator',
    ogTitle: 'Interactive Multi-Marketplace Growth Simulator | AZS Solutions',
    ogDescription: 'Model your incremental revenue and blended ROAS scaling across Saudi Arabia, UAE, USA, and UK.'
  },
  {
    path: '/roi-simulator',
    title: 'Interactive Ecommerce & Marketplace ROI Simulator | AZS Solutions',
    description: 'Simulate your brand’s 6-month GMV run-rate and ad ROAS across Amazon KSA/USA/UK, Noon, Trendyol GCC, and Shopify D2C.',
    keywords: 'Amazon revenue calculator, ecommerce ROI simulator, Noon seller GMV projection, Trendyol GCC revenue estimator, Shopify ad spend ROAS calculator',
    ogTitle: 'Interactive Multi-Marketplace Growth Simulator | AZS Solutions',
    ogDescription: 'Model your incremental revenue and blended ROAS scaling across Saudi Arabia, UAE, USA, and UK.'
  },
  {
    path: '/book-audit',
    title: 'Book a 30-Minute Growth Discovery Call & Free Account Audit | AZS Solutions',
    description: 'Schedule a free growth discovery call with AZS Solutions senior strategists. Get a full audit of your Amazon, Noon, Trendyol, or Shopify account with zero obligation.',
    keywords: 'ecommerce audit, Amazon agency consultation, Noon seller audit, Shopify growth call, schedule ecommerce discovery',
    ogTitle: 'Book Your Free Growth Audit | AZS Solutions',
    ogDescription: 'Get a full audit of your marketplace or D2C account across KSA, UAE, USA, and UK.'
  },
  {
    path: '/contact',
    title: 'Book a 30-Minute Growth Discovery Call & Free Account Audit | AZS Solutions',
    description: 'Schedule a free growth discovery call with AZS Solutions senior strategists. Get a full audit of your Amazon, Noon, Trendyol, or Shopify account with zero obligation.',
    keywords: 'ecommerce audit, Amazon agency consultation, Noon seller audit, Shopify growth call, schedule ecommerce discovery',
    ogTitle: 'Book Your Free Growth Audit | AZS Solutions',
    ogDescription: 'Get a full audit of your marketplace or D2C account across KSA, UAE, USA, and UK.'
  }
];

function generateHtml(template, route) {
  let html = template;
  const canonicalUrl = route.path === '/' 
    ? 'https://azs-ecommerce.vercel.app/' 
    : `https://azs-ecommerce.vercel.app${route.path}`;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace or inject Meta Description
  if (html.includes('name="description"')) {
    html = html.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="description" content="${route.description}">`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${route.description}">\n</head>`);
  }

  // Replace or inject Meta Keywords
  if (route.keywords) {
    if (html.includes('name="keywords"')) {
      html = html.replace(/<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="keywords" content="${route.keywords}">`);
    } else {
      html = html.replace('</head>', `  <meta name="keywords" content="${route.keywords}">\n</head>`);
    }
  }

  // Replace or inject Open Graph Title
  const ogTitle = route.ogTitle || route.title;
  if (html.includes('property="og:title"')) {
    html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:title" content="${ogTitle}">`);
  } else {
    html = html.replace('</head>', `  <meta property="og:title" content="${ogTitle}">\n</head>`);
  }

  // Replace or inject Open Graph Description
  const ogDesc = route.ogDescription || route.description;
  if (html.includes('property="og:description"')) {
    html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:description" content="${ogDesc}">`);
  } else {
    html = html.replace('</head>', `  <meta property="og:description" content="${ogDesc}">\n</head>`);
  }

  // Replace or inject Open Graph URL
  if (html.includes('property="og:url"')) {
    html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}">`);
  } else {
    html = html.replace('</head>', `  <meta property="og:url" content="${canonicalUrl}">\n</head>`);
  }

  // Replace or inject Canonical Link
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}">`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}">\n</head>`);
  }

  return html;
}

let generatedCount = 0;

for (const route of routes) {
  const html = generateHtml(baseHtml, route);

  if (route.path === '/') {
    fs.writeFileSync(templatePath, html, 'utf8');
    generatedCount++;
    console.log(`[prerender] Updated root index.html (/)`);
  } else {
    // Write dist/<route>/index.html
    const targetDir = path.join(distDir, route.path.slice(1));
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');

    // Also write dist/<route>.html for cleanUrls static hosting
    const flatFile = path.join(distDir, `${route.path.slice(1)}.html`);
    const flatDir = path.dirname(flatFile);
    fs.mkdirSync(flatDir, { recursive: true });
    fs.writeFileSync(flatFile, html, 'utf8');

    generatedCount++;
    console.log(`[prerender] Created static HTML for ${route.path}`);
  }
}

console.log(`\n Successfully pre-rendered ${generatedCount} static route HTML files for production!`);
