async function elementNotPresent(selector) {
    return new Promise(async (resolve, reject) => {
      try {
        await page.waitForSelector(selector, { hidden: true, timeout: 5000 });
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
}

export default elementNotPresent;
