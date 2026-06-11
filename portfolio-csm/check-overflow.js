const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const filePath = path.resolve(__dirname, 'english', 'index.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

  const results = await page.evaluate(() => {
    return [...document.querySelectorAll('.page')].map((p, i) => {
      const h2 = p.querySelector('h2');
      const title = h2 ? h2.textContent.trim().replace(/\s+/g, ' ') : `page ${i}`;
      // bottom edge of the lowest descendant relative to the page box
      let maxBottom = 0;
      p.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect();
        const pr = p.getBoundingClientRect();
        maxBottom = Math.max(maxBottom, r.bottom - pr.top);
      });
      return {
        index: i,
        title,
        pageHeight: Math.round(p.getBoundingClientRect().height),
        contentBottom: Math.round(maxBottom),
        overflow: Math.round(maxBottom - p.getBoundingClientRect().height)
      };
    });
  });

  for (const r of results) {
    const flag = r.overflow > 0 ? '  << OVERFLOW' : '';
    console.log(
      `${String(r.index).padStart(2)}  ${r.title.slice(0, 28).padEnd(28)} page=${r.pageHeight} content=${r.contentBottom} diff=${r.overflow}${flag}`
    );
  }

  await browser.close();
})();
