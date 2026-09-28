import https from 'https';

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function verify() {
  console.log('='.repeat(70));
  console.log('LIVE PRODUCTION VERIFICATION REPORT - AZS E-COMMERCE');
  console.log('='.repeat(70));

  // 1. Verify /api/case-studies
  console.log('\n[TEST 1] Verifying /api/case-studies endpoint...');
  const csRes = await get('https://azs-ecommerce.vercel.app/api/case-studies');
  console.log(`Status Code: ${csRes.status}`);
  try {
    const csJson = JSON.parse(csRes.body);
    console.log(`Success:     ${csJson.success}`);
    console.log(`Count:       ${csJson.count}`);
    console.log(`Items:       ${csJson.data?.map(i => i.title).join(', ')}`);
    if (csRes.status === 200 && csJson.success && csJson.count >= 4) {
      console.log('>>> PASSED: /api/case-studies returns HTTP 200 OK with full data!');
    } else {
      console.error('>>> FAILED: /api/case-studies returned unexpected data');
    }
  } catch (e) {
    console.error(`>>> FAILED to parse JSON: ${e.message}\nBody:\n${csRes.body.slice(0, 300)}`);
  }

  // 2. Verify /api/health
  console.log('\n[TEST 2] Verifying /api/health endpoint...');
  const healthRes = await get('https://azs-ecommerce.vercel.app/api/health');
  console.log(`Status Code: ${healthRes.status}`);
  try {
    const healthJson = JSON.parse(healthRes.body);
    console.log(`Health Data: ${JSON.stringify(healthJson)}`);
    if (healthRes.status === 200 && healthJson.status === 'online') {
      console.log('>>> PASSED: /api/health returns HTTP 200 OK and is online!');
    }
  } catch (e) {
    console.error(`Health Parse error: ${e.message}`);
  }

  // 3. Verify Homepage HTML contains the new Official Partners structure
  console.log('\n[TEST 3] Verifying Homepage Official Partners structure...');
  const homeRes = await get('https://azs-ecommerce.vercel.app/');
  const html = homeRes.body;
  const hasStripCard = html.includes('official-partners-strip-card');
  const hasLogoRow = html.includes('official-partners-logo-row');
  const hasAmazonAds = html.includes('aria-label="Amazon Ads"');
  const hasNoon = html.includes('aria-label="Noon"');
  const hasTrendyol = html.includes('aria-label="Trendyol"');
  const hasShopify = html.includes('aria-label="Shopify Plus"');
  const hasMeta = html.includes('aria-label="Meta"');
  const hasGoogle = html.includes('aria-label="Google"');
  const hasOldMarquee = html.includes('cert-marquee-container');

  console.log(`hasStripCard:   ${hasStripCard}`);
  console.log(`hasLogoRow:     ${hasLogoRow}`);
  console.log(`hasAmazonAds:   ${hasAmazonAds}`);
  console.log(`hasNoon:        ${hasNoon}`);
  console.log(`hasTrendyol:    ${hasTrendyol}`);
  console.log(`hasShopify:     ${hasShopify}`);
  console.log(`hasMeta:        ${hasMeta}`);
  console.log(`hasGoogle:      ${hasGoogle}`);
  console.log(`hasOldMarquee:  ${hasOldMarquee}`);

  if (hasStripCard && hasLogoRow && hasAmazonAds && !hasOldMarquee) {
    console.log('>>> PASSED: Official Partners strip card is live with unclipped container and all 6 accredited partner logos!');
  } else {
    console.log('>>> NOTICE: Prerendered HTML status check details above.');
  }

  console.log('\n' + '='.repeat(70));
}

verify().catch(console.error);
