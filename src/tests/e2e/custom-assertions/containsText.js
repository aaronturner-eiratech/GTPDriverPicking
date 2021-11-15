async function find(selector) {
    await page.waitForSelector(selector, { timeout: 5000 });
    return page.$(selector);
  }
  
  async function containsText(wrapperSelector, text, timeout = 1000) {
    const textSelector = `//text()[contains(.,'${text}')]`;
    const wrapper = wrapperSelector ? await find(wrapperSelector) : page;
  
    await page.waitForXPath(textSelector, { timeout });
    const matches = await wrapper.$x(textSelector);
  
    expect(matches.length).toBeGreaterThan(0);
  
    return Promise.resolve();
}

export default containsText;
