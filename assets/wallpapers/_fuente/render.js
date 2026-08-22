const { chromium } = require('playwright');
const path = require('path');

const SP = __dirname;
const OUT = path.join(__dirname, '..');

const sizes = [
  { tag: 'iphone', w: 1290, h: 2796 },   // iPhone 15/16 Pro Max — escala limpia al resto
  { tag: 'android', w: 1440, h: 3120 },  // Pixel / Samsung
];
const designs = [
  { d: 1, name: 'lumma-dual-light' },
  { d: 2, name: 'lumma-halo' },
  { d: 3, name: 'lumma-hueso' },
  { d: 4, name: 'lumma-sello' },
];

(async () => {
  const browser = await chromium.launch();
  for (const s of sizes) {
    const page = await browser.newPage({ viewport: { width: s.w, height: s.h }, deviceScaleFactor: 1 });
    for (const g of designs) {
      await page.goto('file://' + path.join(SP, 'wallpaper.html') + '?d=' + g.d);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(350);
      const file = path.join(OUT, `${g.name}-${s.tag}.png`);
      await page.screenshot({ path: file });
      console.log('✓', file);
    }
    await page.close();
  }
  await browser.close();
})();
