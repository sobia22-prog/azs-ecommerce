import https from 'https';

const urls = [
  'https://azs-ecommerce.vercel.app/',
  'https://azs-ecommerce.vercel.app/trendyol',
  'https://azs-ecommerce.vercel.app/blog',
  'https://azs-ecommerce.vercel.app/case-studies',
  'https://azs-ecommerce.vercel.app/about',
  'https://azs-ecommerce.vercel.app/programs-pricing',
  'https://azs-ecommerce.vercel.app/services/store-setup'
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  console.log('='.repeat(70));
  console.log('LIVE VERCEL PRODUCTION VERIFICATION REPORT');
  console.log('='.repeat(70));

  for (const url of urls) {
    const html = await fetchUrl(url);
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
    const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
    const ogUrlMatch = html.match(/<meta\s+property=["']og:url["']\s+content=["'](.*?)["']/i);

    const title = titleMatch ? titleMatch[1] : 'NONE';
    const desc = descMatch ? descMatch[1] : 'NONE';
    const canonical = canonicalMatch ? canonicalMatch[1] : 'NONE';
    const ogUrl = ogUrlMatch ? ogUrlMatch[1] : 'NONE';

    console.log(`\nURL:               ${url}`);
    console.log(`  <title>:         ${title}`);
    console.log(`  <meta desc>:     ${desc.substring(0, 60)}...`);
    console.log(`  <canonical>:     ${canonical}`);
    console.log(`  <og:url>:        ${ogUrl}`);

    const isHome = url === 'https://azs-ecommerce.vercel.app/';
    const expectedCanonical = isHome ? 'https://azs-ecommerce.vercel.app/' : url;

    if (canonical === expectedCanonical) {
      console.log('  STATUS:          VERIFIED SELF-REFERENCING CANONICAL MATCH');
    } else {
      console.error(`  STATUS:          MISMATCH! Expected: ${expectedCanonical}, Got: ${canonical}`);
    }
  }
  console.log('\n' + '='.repeat(70));
}

run();
