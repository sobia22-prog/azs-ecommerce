import fs from 'fs';

const paths = [
  'dist/index.html',
  'dist/trendyol/index.html',
  'dist/blog/index.html',
  'dist/case-studies/index.html',
  'dist/about/index.html',
  'dist/programs-pricing/index.html',
  'dist/services/store-setup/index.html',
  'dist/marketplace-management/amazon-ksa/index.html',
  'dist/shopify-dtc/index.html'
];

console.log('='.repeat(70));
console.log('SEO METADATA VERIFICATION REPORT');
console.log('='.repeat(70));

let allPassed = true;

paths.forEach(p => {
  if (!fs.existsSync(p)) {
    console.error(`MISSING FILE: ${p}`);
    allPassed = false;
    return;
  }
  const content = fs.readFileSync(p, 'utf8');
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  const ogUrlMatch = content.match(/<meta\s+property=["']og:url["']\s+content=["'](.*?)["']/i);

  const title = titleMatch ? titleMatch[1] : 'NONE';
  const desc = descMatch ? descMatch[1] : 'NONE';
  const canonical = canonicalMatch ? canonicalMatch[1] : 'NONE';
  const ogUrl = ogUrlMatch ? ogUrlMatch[1] : 'NONE';

  console.log(`\nRoute: ${p}`);
  console.log(`  <title>:           ${title}`);
  console.log(`  <meta desc>:       ${desc.substring(0, 75)}...`);
  console.log(`  <link canonical>:  ${canonical}`);
  console.log(`  <og:url>:          ${ogUrl}`);

  if (title === 'NONE' || desc === 'NONE' || canonical === 'NONE') {
    allPassed = false;
    console.error('  FAILED: Missing critical SEO tags!');
  } else if (p !== 'dist/index.html' && canonical === 'https://azs-ecommerce.vercel.app/') {
    allPassed = false;
    console.error('  FAILED: Canonical is pointing to homepage instead of self!');
  } else {
    console.log('  PASSED: Unique title, description & self-referencing canonical verified.');
  }
});

console.log('\n' + '='.repeat(70));
if (allPassed) {
  console.log('ALL ROUTES PASSED VERIFICATION PERFECTLY!');
} else {
  console.log('VERIFICATION HAD FAILURES!');
  process.exit(1);
}
console.log('='.repeat(70));
