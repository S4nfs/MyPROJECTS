import { PuppeteerWebBaseLoader } from 'langchain/document_loaders/web/puppeteer'

const loaderWithOptions = new PuppeteerWebBaseLoader('https://docs.chatnaut.com', {
  launchOptions: {
    headless: true,
  },
  gotoOptions: {
    waitUntil: 'domcontentloaded',
  },
  /**  Pass custom evaluate , in this case you get page and browser instances */
  async evaluate(page, browser) {
    await page.waitForResponse('https://docs.chatnaut.com')

    const result = await page.evaluate(() => document.body.innerHTML)
    await browser.close()
    return result
  },
})
const docsFromLoaderWithOptions = await loaderWithOptions.load()
console.log({ docsFromLoaderWithOptions })
