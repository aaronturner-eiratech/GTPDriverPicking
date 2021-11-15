import elementPresent from './custom-assertions/elementPresent';
//import elementNotPresent from './custom-assertions/elementNotPresent';
import mockApi from './mocks/mockAPI';
import containsText from './custom-assertions/containsText';
import 'expect-puppeteer'

describe('Van selector and Trolley display', () => {
    beforeAll(async () => {
        await page.setJavaScriptEnabled(true);
        await page.setRequestInterception(true);
        await mockApi();
        await page.goto('http://localhost:9022/', {
            timeout: 100000
        });
        await elementPresent('#VanSelectorPage');
    });
    it('should render page with drop down of possible vans to select', async () => {
         await elementPresent('#van-select');
         expect(await page.$eval('#enter', (button) => button.disabled)).toBe(true);
        await page.evaluate((cssSelector) => {
          const clickEvent = document.createEvent('MouseEvents');
          clickEvent.initEvent("mousedown", true, true);
          const selectNode = document.querySelector(cssSelector);
          selectNode.dispatchEvent(clickEvent);
        }, '#van-select');
        await elementPresent('#select-option-1');
        await page.evaluate((listOption) => document.querySelector(listOption).click(), '#select-option-1');
        await page.waitForTimeout(500);
        await containsText('#van-select', 'Van-1');
        expect(await page.$eval('#enter', (button) => button.disabled)).toBe(false);
        await page.evaluate(() => document.querySelector('#enter').click());
    });
    it('should render trolley page with rack displayed', async () => {
        await elementPresent('#trolley');
        await elementPresent('#rackLayout-1234');
        await elementPresent('#release-action');

        // release should bring us back to van selector page
        await page.evaluate(() => document.querySelector('#release-action').click());
        await elementPresent('#van-select');
    });
}); 