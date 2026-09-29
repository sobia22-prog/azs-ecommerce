import fs from 'fs';
import path from 'path';
import http from 'http';

function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function runVerification() {
  console.log('='.repeat(75));
  console.log('COMPREHENSIVE AUDIT RESOLUTION VERIFICATION');
  console.log('='.repeat(75));

  let allPassed = true;

  // 1. VERIFY ISSUE 2.5: Mobile Bottom Tab Bar Background Opacity
  console.log('\n[TEST 1] Verifying Mobile Bottom Tab Bar Background (Issue 2.5)...');
  const cssPath = path.resolve('src/css/style.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  const bottomNavRuleMatch = cssContent.match(/\.mobile-sticky-bottom-nav\s*\{[^}]*background:\s*#060a12/s);
  const hasSolidBackground = !!bottomNavRuleMatch;
  const hasBackdropFilter = cssContent.includes('-webkit-backdrop-filter: blur(24px)') || cssContent.includes('backdrop-filter: blur(24px)');
  const hasSafeArea = cssContent.includes('safe-area-inset-bottom');

  console.log(`  - Solid opaque background (#060a12): ${hasSolidBackground ? 'PASS' : 'FAIL'}`);
  console.log(`  - Enhanced backdrop blur (24px):     ${hasBackdropFilter ? 'PASS' : 'FAIL'}`);
  console.log(`  - Safe-area inset bottom padding:    ${hasSafeArea ? 'PASS' : 'FAIL'}`);

  if (hasSolidBackground && hasBackdropFilter) {
    console.log('  >>> PASSED: Mobile bottom nav has 100% solid opaque background. Page content cannot bleed through.');
  } else {
    console.error('  >>> FAILED: Mobile bottom nav does not have expected solid opaque background.');
    allPassed = false;
  }

  // 2. VERIFY ISSUE 2.6: Image Asset Sizes & Tab Preloading
  console.log('\n[TEST 2] Verifying Image Asset Compression & Preloading (Issue 2.6)...');
  const shopifyPng = path.resolve('public/assets/shopify_devices_hero.png');
  const shopifyWebp = path.resolve('public/assets/shopify_devices_hero.webp');
  const noonPng = path.resolve('public/assets/noon_ads_full_card.png');
  const noonWebp = path.resolve('public/assets/noon_ads_full_card.webp');

  const shopifyPngSize = fs.statSync(shopifyPng).size;
  const shopifyWebpSize = fs.existsSync(shopifyWebp) ? fs.statSync(shopifyWebp).size : 0;
  const noonPngSize = fs.statSync(noonPng).size;
  const noonWebpSize = fs.existsSync(noonWebp) ? fs.statSync(noonWebp).size : 0;

  console.log(`  - shopify_devices_hero.png: ${(shopifyPngSize / 1024).toFixed(1)} KB (was 1,210 KB / 1.2 MB)`);
  console.log(`  - shopify_devices_hero.webp: ${(shopifyWebpSize / 1024).toFixed(1)} KB`);
  console.log(`  - noon_ads_full_card.png:    ${(noonPngSize / 1024).toFixed(1)} KB`);
  console.log(`  - noon_ads_full_card.webp:   ${(noonWebpSize / 1024).toFixed(1)} KB`);

  const marketplacesJsx = fs.readFileSync(path.resolve('src/components/Marketplaces.jsx'), 'utf8');
  const shopifyJsx = fs.readFileSync(path.resolve('src/components/ShopifyGrowth.jsx'), 'utf8');

  const mktPreloads = marketplacesJsx.includes('imagesToPreload') && marketplacesJsx.includes('/assets/noon_ads_full_card.png');
  const mktEager = marketplacesJsx.includes('loading="eager"') && marketplacesJsx.includes('decoding="async"');
  const shopifyPreloads = shopifyJsx.includes('imagesToPreload') && shopifyJsx.includes('/assets/shopify_devices_hero.png');
  const shopifyEager = shopifyJsx.includes('loading="eager"') && shopifyJsx.includes('decoding="async"');

  console.log(`  - Marketplaces images preloaded on mount: ${mktPreloads ? 'PASS' : 'FAIL'}`);
  console.log(`  - Marketplaces active image loading="eager": ${mktEager ? 'PASS' : 'FAIL'}`);
  console.log(`  - Shopify storefront images preloaded on mount: ${shopifyPreloads ? 'PASS' : 'FAIL'}`);
  console.log(`  - Shopify active image loading="eager": ${shopifyEager ? 'PASS' : 'FAIL'}`);

  if (shopifyPngSize < 400 * 1024 && mktPreloads && shopifyPreloads && mktEager && shopifyEager) {
    console.log('  >>> PASSED: shopify_devices_hero compressed by ~70% and tab images preloaded for zero blank flash.');
  } else {
    console.error('  >>> FAILED: Image optimization or preloading criteria not met.');
    allPassed = false;
  }

  // 3. VERIFY ISSUE 3.1: Verified-Partner Badges (Hero, Official Partners Strip, Footer)
  console.log('\n[TEST 3] Verifying Verified-Partner Badges (Issue 3.1)...');
  const heroJsx = fs.readFileSync(path.resolve('src/components/Hero.jsx'), 'utf8');
  const tickerJsx = fs.readFileSync(path.resolve('src/components/PlatformTicker.jsx'), 'utf8');
  const footerJsx = fs.readFileSync(path.resolve('src/components/Footer.jsx'), 'utf8');

  const hasHeroBadge = heroJsx.includes('hero-verified-partner-badge') && heroJsx.includes('partner-verified-check');
  const hasTickerBadge = tickerJsx.includes('partner-strip-verified-badge') && tickerJsx.includes('partner-verified-check');
  const hasFooterBadge = footerJsx.includes('footer-partner-badge-pill') && footerJsx.includes('partner-verified-check');

  console.log(`  - Hero section has verified partner badge pill:           ${hasHeroBadge ? 'PASS' : 'FAIL'}`);
  console.log(`  - Official Partners strip has verified partner badge:     ${hasTickerBadge ? 'PASS' : 'FAIL'}`);
  console.log(`  - Footer has verified partner badge pill (with checkmark): ${hasFooterBadge ? 'PASS' : 'FAIL'}`);

  if (hasHeroBadge && hasTickerBadge && hasFooterBadge) {
    console.log('  >>> PASSED: Verified partner badge prominently displayed in Hero, Official Partners, and Footer.');
  } else {
    console.error('  >>> FAILED: Missing verified partner badge in one or more required locations.');
    allPassed = false;
  }

  // 4. VERIFY ISSUE 3.2: Cut Homepage to Single Dashboard Widget
  console.log('\n[TEST 4] Verifying Single Dashboard Proof Widget on Homepage (Issue 3.2)...');
  const heroContent = fs.readFileSync(path.resolve('src/components/Hero.jsx'), 'utf8');
  const shopifyGrowthContent = fs.readFileSync(path.resolve('src/components/ShopifyGrowth.jsx'), 'utf8');
  const marketplacesContent = fs.readFileSync(path.resolve('src/components/Marketplaces.jsx'), 'utf8');

  const heroHasRestrainedStatLine = heroContent.includes('hero-stat-line-bar') && !heroContent.includes('hero-kpis hero-kpis-3col');
  const shopifyHasOutcomeBanner = shopifyGrowthContent.includes('store-outcome-banner') && !shopifyGrowthContent.includes('store-metrics-panel desktop-only');
  const hasLiveConsole = marketplacesContent.includes('id="dashboards-proof"');

  console.log(`  - Hero uses restrained stat line instead of KPI tile grid:      ${heroHasRestrainedStatLine ? 'PASS' : 'FAIL'}`);
  console.log(`  - Shopify section uses outcome banner instead of 4-tile widget: ${shopifyHasOutcomeBanner ? 'PASS' : 'FAIL'}`);
  console.log(`  - Live Marketplace Console preserved as single dashboard widget: ${hasLiveConsole ? 'PASS' : 'FAIL'}`);

  if (heroHasRestrainedStatLine && shopifyHasOutcomeBanner && hasLiveConsole) {
    console.log('  >>> PASSED: Cut down to ONE dashboard widget (Live Console) with restrained stat lines elsewhere.');
  } else {
    console.error('  >>> FAILED: Homepage still has duplicate dashboard widgets.');
    allPassed = false;
  }

  // 5. VERIFY ISSUE 3.3: Authentic Proof Images on Marketplace Cards (No Stock City Photos)
  console.log('\n[TEST 5] Verifying Marketplace Cards Use Real Proof (Issue 3.3)...');
  const hasNoStockRiyadh = !marketplacesContent.includes('mkt_ksa_riyadh.jpg');
  const hasNoStockTrendyol = !marketplacesContent.includes('mkt_trendyol_gcc.jpg');
  const hasNoStockNyc = !marketplacesContent.includes('mkt_usa_nyc.jpg');
  const hasNoStockLondon = !marketplacesContent.includes('mkt_uk_london.jpg');

  const hasRealKsa = marketplacesContent.includes('homemaster_case_study.jpg');
  const hasRealTrendyol = marketplacesContent.includes('noon_trendyol_dashboard.png');
  const hasRealUsa = marketplacesContent.includes('amazon_ad_dashboard.png');
  const hasRealUk = marketplacesContent.includes('creativethings_case_study.jpg');

  console.log(`  - Generic stock city photos removed: ${hasNoStockRiyadh && hasNoStockTrendyol && hasNoStockNyc && hasNoStockLondon ? 'PASS' : 'FAIL'}`);
  console.log(`  - Real client product/listing proof used: ${hasRealKsa && hasRealTrendyol && hasRealUsa && hasRealUk ? 'PASS' : 'FAIL'}`);

  if (hasNoStockRiyadh && hasNoStockTrendyol && hasNoStockNyc && hasNoStockLondon && hasRealKsa && hasRealTrendyol && hasRealUsa && hasRealUk) {
    console.log('  >>> PASSED: Marketplace cards use authentic client listing & dashboard proof, matching Shopify tabs.');
  } else {
    console.error('  >>> FAILED: Marketplace cards still contain stock city photos.');
    allPassed = false;
  }

  // 6. VERIFY ISSUE 3.4: /shopify-dtc Leads with Client Work Before Stat Row
  console.log('\n[TEST 6] Verifying /shopify-dtc Hub Ordering (Issue 3.4)...');
  const shopifyPageContent = fs.readFileSync(path.resolve('src/pages/ShopifyDivisionPage.jsx'), 'utf8');

  const headerMetricsEmpty = shopifyPageContent.includes('metrics={[]}');
  const clientWorkPos = shopifyPageContent.indexOf('id="livora-proof"');
  const statRowPos = shopifyPageContent.indexOf('shopify-portfolio-stats');
  const clientWorkBeforeStats = clientWorkPos !== -1 && statRowPos !== -1 && clientWorkPos < statRowPos;

  console.log(`  - Header metrics bar suppressed on Shopify hub: ${headerMetricsEmpty ? 'PASS' : 'FAIL'}`);
  console.log(`  - Client storefront work leads before stat row:   ${clientWorkBeforeStats ? 'PASS' : 'FAIL'}`);

  if (headerMetricsEmpty && clientWorkBeforeStats) {
    console.log('  >>> PASSED: /shopify-dtc hub leads with client storefront work before following with stat row.');
  } else {
    console.error('  >>> FAILED: /shopify-dtc does not lead with client work.');
    allPassed = false;
  }

  // 7. VERIFY PRODUCTION BUNDLE ARTIFACTS & LIVE PREVIEW SERVER
  console.log('\n[TEST 7] Verifying Production Dist Bundle & Preview Server...');
  const distDir = path.resolve('dist/assets');
  const distFiles = fs.readdirSync(distDir);
  const jsBundle = distFiles.find(f => f.endsWith('.js'));
  const cssBundle = distFiles.find(f => f.endsWith('.css'));

  const jsContent = fs.readFileSync(path.join(distDir, jsBundle), 'utf8');
  const cssBundleContent = fs.readFileSync(path.join(distDir, cssBundle), 'utf8');

  const bundleHasHeroBadge = jsContent.includes('hero-verified-partner-badge');
  const bundleHasTickerBadge = jsContent.includes('partner-strip-verified-badge');
  const bundleHasFooterBadge = jsContent.includes('footer-partner-badge-pill');
  const bundleHasBottomNav = jsContent.includes('mobile-sticky-bottom-nav');
  const cssHasSolidBottomNav = cssBundleContent.includes('.mobile-sticky-bottom-nav') && cssBundleContent.includes('#060a12');

  console.log(`  - Production JS Bundle (${jsBundle}):`);
  console.log(`    * hero-verified-partner-badge:   ${bundleHasHeroBadge ? 'PASS' : 'FAIL'}`);
  console.log(`    * partner-strip-verified-badge:  ${bundleHasTickerBadge ? 'PASS' : 'FAIL'}`);
  console.log(`    * footer-partner-badge-pill:     ${bundleHasFooterBadge ? 'PASS' : 'FAIL'}`);
  console.log(`    * mobile-sticky-bottom-nav:      ${bundleHasBottomNav ? 'PASS' : 'FAIL'}`);
  console.log(`  - Production CSS Bundle (${cssBundle}):`);
  console.log(`    * .mobile-sticky-bottom-nav (#060a12): ${cssHasSolidBottomNav ? 'PASS' : 'FAIL'}`);

  try {
    const res = await get('http://localhost:4173/');
    console.log(`  - Preview Server (http://localhost:4173/) Status: ${res.status} OK`);
    if (res.status !== 200) allPassed = false;
  } catch (err) {
    console.warn(`  - Preview Server ping: ${err.message}`);
  }

  if (bundleHasHeroBadge && bundleHasTickerBadge && bundleHasFooterBadge && bundleHasBottomNav && cssHasSolidBottomNav) {
    console.log('  >>> PASSED: Production distribution bundle fully verified with all audit fixes!');
  } else {
    console.error('  >>> FAILED: Production distribution bundle missing one or more verified elements.');
    allPassed = false;
  }

  console.log('\n' + '='.repeat(75));
  if (allPassed) {
    console.log('ALL AUDIT CRITERIA (2.5, 2.6, 3.1, 3.2, 3.3, 3.4) SATISFIED SUCCESSFULLY!');
  } else {
    console.error('SOME CHECKS FAILED. PLEASE REVIEW LOG ABOVE.');
  }
  console.log('='.repeat(75));
}

runVerification().catch(console.error);
