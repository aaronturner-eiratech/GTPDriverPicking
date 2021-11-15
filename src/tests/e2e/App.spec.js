import 'expect-puppeteer'
import elementPresent from './custom-assertions/elementPresent';



describe('App', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:9022');
        await elementPresent('#root');
    });

    it('should display "GTPDriverPicking', async () => {
        const title = await page.title();
        await expect(title).toMatch('GTPDriverPicking');
    });
})