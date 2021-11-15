async function elementPresent(selector) {
    return new Promise(async (resolve, reject) => {
      try {
        await page.waitForSelector(selector, { visible: true, timeout: 5000 });
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
}

export default elementPresent;
